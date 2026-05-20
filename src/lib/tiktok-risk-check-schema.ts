import { z } from 'zod'

export const riskScenarioLabels = {
  supplier_before_deposit: 'Check my supplier before deposit',
  goods_before_balance: 'Check my goods before balance payment',
  fba_labels_before_shipment: 'Check my FBA labels before shipment',
} as const

export const tiktokRiskCheckInquirySchema = z.object({
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

export type TikTokRiskCheckInput = z.infer<typeof tiktokRiskCheckInquirySchema>
export type TikTokRiskCheckFieldErrors = Partial<Record<keyof TikTokRiskCheckInput, string>>

export function getTikTokRiskCheckFieldErrors(
  error: z.ZodError<TikTokRiskCheckInput>,
) {
  const fieldErrors: TikTokRiskCheckFieldErrors = {}

  for (const issue of error.issues) {
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

  return fieldErrors
}
