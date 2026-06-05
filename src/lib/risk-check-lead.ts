import { z } from 'zod'

export const riskCheckStages = [
  'Before deposit',
  'Before supplier selection',
  'Before balance payment',
  'Before pickup',
  'Before FBA shipment',
  'Not sure',
] as const

export type RiskCheckStage = (typeof riskCheckStages)[number]

export const riskCheckLeadSchema = z.object({
  emailAddress: z
    .string()
    .trim()
    .min(1, 'Please enter your email address.')
    .email('Please enter a valid email address.')
    .max(254, 'Please keep the email address under 254 characters.'),
  checkRequest: z
    .string()
    .trim()
    .min(1, 'Please tell us what you want checked.')
    .max(3000, 'Please keep this under 3000 characters.'),
  currentStage: z.enum(riskCheckStages, {
    error: 'Please select your current stage.',
  }),
  sourcePagePath: z.string().trim().min(1).max(500),
  triggerName: z.string().trim().min(1).max(200),
  submittedAt: z.string().trim().max(80).optional(),
  honeypot: z.string().max(200).optional(),
})

export type RiskCheckLeadInput = z.infer<typeof riskCheckLeadSchema>
export type RiskCheckLeadFieldErrors = Partial<
  Record<'emailAddress' | 'checkRequest' | 'currentStage', string>
>

export function getRiskCheckLeadFieldErrors(error: z.ZodError<RiskCheckLeadInput>) {
  const fieldErrors: RiskCheckLeadFieldErrors = {}

  for (const issue of error.issues) {
    const key = issue.path[0]
    if (key === 'emailAddress' || key === 'checkRequest' || key === 'currentStage') {
      fieldErrors[key] = issue.message
    }
  }

  return fieldErrors
}

export function normalizeRiskCheckSubmittedAt(value?: string) {
  if (!value) return new Date().toISOString()

  const submittedAt = new Date(value)
  if (Number.isNaN(submittedAt.valueOf())) {
    return new Date().toISOString()
  }

  return submittedAt.toISOString()
}
