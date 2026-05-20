'use server'

import { getPayload } from 'payload'

import config from '@payload-config'
import { isNextBuildPhase } from '@/lib/isNextBuildPhase'
import {
  getTikTokRiskCheckFieldErrors,
  riskScenarioLabels,
  tiktokRiskCheckInquirySchema,
  type TikTokRiskCheckFieldErrors,
} from '@/lib/tiktok-risk-check-schema'

export type SubmitTikTokRiskCheckInquiryResult =
  | { ok: true }
  | {
      ok: false
      message: string
      fieldErrors?: TikTokRiskCheckFieldErrors
    }

export async function submitTikTokRiskCheckInquiry(
  input: unknown,
): Promise<SubmitTikTokRiskCheckInquiryResult> {
  if (isNextBuildPhase()) {
    return { ok: false, message: 'Unavailable during build.' }
  }

  const parsed = tiktokRiskCheckInquirySchema.safeParse(input)

  if (!parsed.success) {
    return {
      ok: false,
      message: 'Check the fields below and try again.',
      fieldErrors: getTikTokRiskCheckFieldErrors(parsed.error),
    }
  }

  const data = parsed.data
  const scenario = riskScenarioLabels[data.riskScenario]
  const message = data.message?.trim() || 'No extra message provided.'

  try {
    const payload = await getPayload({ config })

    await payload.create({
      collection: 'consultation-inquiries',
      data: {
        sourcing: [
          'TikTok free China sourcing risk check',
          `Scenario: ${scenario}`,
          `Supplier / factory: ${data.supplier}`,
          `Product / item: ${data.product}`,
        ].join('\n'),
        headache: [
          `Payment status: ${data.paymentStatus}`,
          `Shipment stage: ${data.shipmentStage}`,
          `Situation: ${message}`,
        ].join('\n'),
        source: 'tiktok-risk-check',
      },
      depth: 0,
    })

    return { ok: true }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[submitTikTokRiskCheckInquiry]', error)
    }

    return {
      ok: false,
      message:
        'We could not save your message right now. Please email directly or use WhatsApp.',
    }
  }
}
