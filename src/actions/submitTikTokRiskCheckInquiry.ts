'use server'

import { getPayload } from 'payload'
import { z } from 'zod'

import config from '@payload-config'
import { isNextBuildPhase } from '@/lib/isNextBuildPhase'

const riskScenarioLabels = {
  supplier_before_deposit: 'Check my supplier before deposit',
  goods_before_balance: 'Check my goods before balance payment',
  fba_labels_before_shipment: 'Check my FBA labels before shipment',
} as const

const inquirySchema = z.object({
  riskScenario: z.enum([
    'supplier_before_deposit',
    'goods_before_balance',
    'fba_labels_before_shipment',
  ]),
  supplier: z.string().trim().min(2, 'Please add the supplier name or link.').max(500),
  product: z.string().trim().min(2, 'Please add the product or item.').max(500),
  paymentStatus: z.string().trim().min(2, 'Please select the payment status.').max(120),
  shipmentStage: z.string().trim().min(2, 'Please select the shipment stage.').max(120),
  message: z.string().trim().max(2000, 'Please keep the message under 2000 characters.').optional(),
})

type TikTokRiskCheckInput = z.infer<typeof inquirySchema>
type TikTokRiskCheckFieldErrors = Partial<Record<keyof TikTokRiskCheckInput, string>>

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

  const parsed = inquirySchema.safeParse(input)

  if (!parsed.success) {
    const fieldErrors: TikTokRiskCheckFieldErrors = {}

    for (const issue of parsed.error.issues) {
      const key = issue.path[0]
      if (
        key === 'riskScenario' ||
        key === 'supplier' ||
        key === 'product' ||
        key === 'paymentStatus' ||
        key === 'shipmentStage' ||
        key === 'message'
      ) {
        fieldErrors[key] = issue.message
      }
    }

    return {
      ok: false,
      message: 'Check the fields below and try again.',
      fieldErrors,
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

