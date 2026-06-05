import { NextResponse } from 'next/server'

import { sendRiskCheckEmails } from '@/lib/mailer'
import { riskCheckLeadSchema } from '@/lib/risk-check-lead'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Invalid request body.' },
      { status: 400 },
    )
  }

  const parsed = riskCheckLeadSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: 'Check the fields below and try again.' },
      { status: 400 },
    )
  }

  const data = parsed.data

  if (data.honeypot?.trim()) {
    return NextResponse.json(
      { ok: false, message: 'Spam submission rejected.' },
      { status: 400 },
    )
  }

  try {
    await sendRiskCheckEmails(data)

    return NextResponse.json({ ok: true })
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[risk-check email]', error)
    }

    return NextResponse.json(
      { ok: false, message: 'We could not send your request. Please try again.' },
      { status: 502 },
    )
  }
}
