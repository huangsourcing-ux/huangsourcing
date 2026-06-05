import nodemailer from 'nodemailer'

import type { RiskCheckLeadInput } from '@/lib/risk-check-lead'
import { normalizeRiskCheckSubmittedAt } from '@/lib/risk-check-lead'

const BRAND_NAME = 'Huang Sourcing'

type Transporter = ReturnType<typeof nodemailer.createTransport>

let cachedTransporter: Transporter | null = null

function getEnv(name: string) {
  const value = process.env[name]?.trim()
  return value && value.length > 0 ? value : undefined
}

/**
 * Gmail / Google Workspace SMTP transporter.
 * Uses an App Password (not the account login password).
 * Reused across invocations (safe on Vercel Fluid Compute).
 */
function getTransporter(): Transporter {
  if (cachedTransporter) return cachedTransporter

  const user = getEnv('SMTP_USER')
  // App passwords are shown as 4 groups of 4 chars; spaces are cosmetic.
  const pass = getEnv('SMTP_PASS')?.replace(/\s+/g, '')

  if (!user || !pass) {
    throw new Error('SMTP_USER / SMTP_PASS are not configured.')
  }

  cachedTransporter = nodemailer.createTransport({
    host: getEnv('SMTP_HOST') ?? 'smtp.gmail.com',
    port: Number(getEnv('SMTP_PORT') ?? '465'),
    secure: true, // 465 = implicit TLS
    auth: { user, pass },
  })

  return cachedTransporter
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function fromHeader() {
  const user = getEnv('SMTP_USER') ?? ''
  return `${BRAND_NAME} <${user}>`
}

/**
 * Sends two emails for a Free Risk Check submission:
 *  1. Internal notification to the team inbox (Reply-To = buyer).
 *  2. Auto-reply confirmation to the buyer.
 *
 * Returns once both are attempted; the buyer auto-reply is best-effort and
 * will not fail the request if it bounces.
 */
export async function sendRiskCheckEmails(data: RiskCheckLeadInput) {
  const transporter = getTransporter()
  const notifyTo = getEnv('LEAD_NOTIFY_TO') ?? getEnv('SMTP_USER')

  if (!notifyTo) {
    throw new Error('LEAD_NOTIFY_TO / SMTP_USER are not configured.')
  }

  const submittedAt = normalizeRiskCheckSubmittedAt(data.submittedAt)

  // ---- 1. Internal notification (required) ----
  const notifyText = [
    'New Free China Sourcing Risk Check submission',
    '',
    `Email:          ${data.emailAddress}`,
    `Current stage:  ${data.currentStage}`,
    `Source page:    ${data.sourcePagePath}`,
    `Trigger:        ${data.triggerName}`,
    `Submitted at:   ${submittedAt}`,
    '',
    'What they want checked:',
    data.checkRequest,
  ].join('\n')

  const notifyHtml = `
    <div style="font-family:system-ui,Segoe UI,Arial,sans-serif;font-size:14px;color:#111;line-height:1.6">
      <h2 style="margin:0 0 12px">New Free Risk Check submission</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:2px 12px 2px 0;color:#555">Email</td><td><a href="mailto:${escapeHtml(data.emailAddress)}">${escapeHtml(data.emailAddress)}</a></td></tr>
        <tr><td style="padding:2px 12px 2px 0;color:#555">Current stage</td><td>${escapeHtml(data.currentStage)}</td></tr>
        <tr><td style="padding:2px 12px 2px 0;color:#555">Source page</td><td>${escapeHtml(data.sourcePagePath)}</td></tr>
        <tr><td style="padding:2px 12px 2px 0;color:#555">Trigger</td><td>${escapeHtml(data.triggerName)}</td></tr>
        <tr><td style="padding:2px 12px 2px 0;color:#555">Submitted at</td><td>${escapeHtml(submittedAt)}</td></tr>
      </table>
      <h3 style="margin:16px 0 6px">What they want checked</h3>
      <div style="white-space:pre-wrap;background:#f6f6f6;border-radius:6px;padding:12px">${escapeHtml(data.checkRequest)}</div>
    </div>
  `

  await transporter.sendMail({
    from: fromHeader(),
    to: notifyTo,
    replyTo: data.emailAddress,
    subject: `New Risk Check lead — ${data.currentStage}`,
    text: notifyText,
    html: notifyHtml,
  })

  // ---- 2. Buyer auto-reply (best-effort) ----
  const replyText = [
    'Hi,',
    '',
    'Thanks for reaching out to Huang Sourcing. We received your request and will review the details you sent and reply personally, usually within one business day.',
    '',
    'For reference, here is what you submitted:',
    '',
    `Stage: ${data.currentStage}`,
    `Request: ${data.checkRequest}`,
    '',
    'If you have supplier links, quotes, photos, labels, or order details, feel free to reply to this email and attach them — it helps us give you a faster, more useful answer.',
    '',
    'Best regards,',
    'Agent Huang',
    'Huang Sourcing — buyer-side China sourcing support',
    'https://www.huangsourcing.com',
  ].join('\n')

  const replyHtml = `
    <div style="font-family:system-ui,Segoe UI,Arial,sans-serif;font-size:15px;color:#111;line-height:1.6">
      <p>Hi,</p>
      <p>Thanks for reaching out to <strong>Huang Sourcing</strong>. We received your request and will review the details you sent and reply personally, usually within one business day.</p>
      <p style="margin:16px 0 6px;color:#555">For reference, here is what you submitted:</p>
      <div style="background:#f6f6f6;border-radius:6px;padding:12px">
        <p style="margin:0 0 8px"><strong>Stage:</strong> ${escapeHtml(data.currentStage)}</p>
        <p style="margin:0;white-space:pre-wrap"><strong>Request:</strong> ${escapeHtml(data.checkRequest)}</p>
      </div>
      <p>If you have supplier links, quotes, photos, labels, or order details, feel free to reply to this email and attach them — it helps us give you a faster, more useful answer.</p>
      <p style="margin-top:20px">Best regards,<br/>Agent Huang<br/>
        <span style="color:#555">Huang Sourcing — buyer-side China sourcing support</span><br/>
        <a href="https://www.huangsourcing.com">huangsourcing.com</a>
      </p>
    </div>
  `

  try {
    await transporter.sendMail({
      from: fromHeader(),
      to: data.emailAddress,
      replyTo: notifyTo,
      subject: 'We received your China sourcing risk check request',
      text: replyText,
      html: replyHtml,
    })
  } catch (error) {
    // Auto-reply is non-critical; the lead is already captured by the notification.
    if (process.env.NODE_ENV === 'development') {
      console.warn('[risk-check auto-reply failed]', error)
    }
  }
}
