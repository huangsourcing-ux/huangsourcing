'use client'

import type { FormEvent, ReactNode } from 'react'
import { useId, useMemo, useState } from 'react'
import Link from 'next/link'

import { WhatsAppIcon } from '@/components/site/SocialLinks'
import { Button, type ButtonProps } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  trackRiskCheckFormOpen,
  trackRiskCheckSubmit,
  trackWhatsAppClick,
} from '@/lib/analytics'
import {
  getRiskCheckLeadFieldErrors,
  riskCheckLeadSchema,
  riskCheckStages,
  type RiskCheckLeadFieldErrors,
  type RiskCheckStage,
} from '@/lib/risk-check-lead'
import {
  buildWhatsAppHref,
  huangSourcingCheckScopeArticleHref,
  privacyConfidentialityHref,
} from '@/lib/site-links'

type FormState = {
  checkRequest: string
  currentStage: RiskCheckStage
  emailAddress: string
  honeypot: string
}

type RiskCheckLeadCaptureProps = {
  buttonClassName?: string
  buttonSize?: ButtonProps['size']
  buttonVariant?: ButtonProps['variant']
  children: ReactNode
  defaultStage?: RiskCheckStage
  triggerName: string
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

const defaultFormState: FormState = {
  checkRequest: '',
  currentStage: 'Not sure',
  emailAddress: '',
  honeypot: '',
}

const checkRequestPlaceholder =
  'Supplier link, PI, quote, product, or what you are worried about'

function getSourcePagePath() {
  if (typeof window === 'undefined') return '/'
  return window.location.pathname
}

function makeWhatsAppHref(form: FormState) {
  return buildWhatsAppHref(
    `Hi Agent Huang, I just submitted a Free China Sourcing Risk Check. Stage: ${form.currentStage}. What I need checked: ${form.checkRequest}`,
  )
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null

  return <p className="mt-2 text-xs font-semibold leading-5 text-red-700">{message}</p>
}

export function RiskCheckLeadCapture({
  buttonClassName,
  buttonSize = 'lg',
  buttonVariant = 'default',
  children,
  defaultStage = 'Not sure',
  triggerName,
}: RiskCheckLeadCaptureProps) {
  const emailId = useId()
  const checkRequestId = useId()
  const currentStageId = useId()
  const honeypotId = useId()
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState<FormState>({
    ...defaultFormState,
    currentStage: defaultStage,
  })
  const [fieldErrors, setFieldErrors] = useState<RiskCheckLeadFieldErrors>({})
  const [status, setStatus] = useState<SubmissionStatus>('idle')

  const whatsAppHref = useMemo(() => makeWhatsAppHref(form), [form])

  const resetForm = () => {
    setForm({
      ...defaultFormState,
      currentStage: defaultStage,
    })
    setFieldErrors({})
    setStatus('idle')
  }

  const handleOpenChange = (nextOpen: boolean) => {
    setIsOpen(nextOpen)

    if (nextOpen) {
      resetForm()
      trackRiskCheckFormOpen({
        sourcePagePath: getSourcePagePath(),
        triggerName,
      })
    }
  }

  const updateField = <Field extends keyof FormState>(
    field: Field,
    value: FormState[Field],
  ) => {
    setForm((current) => ({ ...current, [field]: value }))
    if (field === 'emailAddress' || field === 'checkRequest' || field === 'currentStage') {
      setFieldErrors((current) => ({ ...current, [field]: undefined }))
    }
    setStatus((current) => (current === 'error' ? 'idle' : current))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFieldErrors({})
    setStatus('idle')

    const sourcePagePath = getSourcePagePath()
    const input = {
      ...form,
      sourcePagePath,
      submittedAt: new Date().toISOString(),
      triggerName,
    }

    const parsed = riskCheckLeadSchema.safeParse(input)

    if (!parsed.success) {
      setFieldErrors(getRiskCheckLeadFieldErrors(parsed.error))
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('/api/risk-check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsed.data),
      })

      if (!response.ok) {
        setStatus('error')
        return
      }

      setStatus('success')
      trackRiskCheckSubmit({
        currentStage: parsed.data.currentStage,
        sourcePagePath,
        triggerName,
      })
    } catch {
      setStatus('error')
    }
  }

  const trackWhatsAppFallbackClick = () => {
    trackWhatsAppClick({
      ctaLabel: 'Message Agent Huang on WhatsApp',
      ctaLocation: 'risk_check_modal',
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          className={buttonClassName}
          size={buttonSize}
          type="button"
          variant={buttonVariant}
        >
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-1.5rem)] w-[calc(100vw-1.5rem)] max-w-xl overflow-y-auto rounded-lg border-[var(--hs-border)] bg-white p-0 shadow-[var(--hs-shadow-lg)] sm:w-full">
        {status === 'success' ? (
          <div className="p-5 sm:p-6">
            <DialogHeader>
              <DialogTitle className="text-left text-2xl font-extrabold leading-8 text-[var(--hs-text)]">
                Thanks — we received your request.
              </DialogTitle>
              <DialogDescription className="text-left text-base leading-7 text-[var(--hs-muted)]">
                Agent Huang will review your supplier, quote, PI, or concern and reply
                by email.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold leading-6 text-emerald-950">
              <p className="font-extrabold">Need a faster review?</p>
              <p className="mt-1">
                Send the PI, supplier link, or product photos on WhatsApp.
              </p>
            </div>

            <Button
              asChild
              className="mt-5 h-auto min-h-12 w-full whitespace-normal rounded-md bg-emerald-600 px-4 py-3 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-emerald-700"
            >
              <a
                href={whatsAppHref}
                onClick={trackWhatsAppFallbackClick}
                rel="noreferrer"
                target="_blank"
              >
                <WhatsAppIcon className="size-4 shrink-0" />
                Message Agent Huang on WhatsApp
              </a>
            </Button>
          </div>
        ) : (
          <form noValidate onSubmit={handleSubmit}>
            <div className="border-b border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 pr-12 sm:p-6 sm:pr-14">
              <DialogHeader>
                <DialogTitle className="text-left text-2xl font-extrabold leading-8 text-[var(--hs-text)]">
                  Free China Sourcing Risk Check
                </DialogTitle>
                <DialogDescription className="text-left text-sm leading-6 text-[var(--hs-muted)] sm:text-base sm:leading-7">
                  Send one supplier link, quote, PI, or concern. We’ll review the
                  situation and suggest the next safe step from the China side.
                </DialogDescription>
              </DialogHeader>
            </div>

            <div className="grid gap-5 p-5 sm:p-6">
              <div>
                <Label
                  className="text-sm font-extrabold text-[var(--hs-text)]"
                  htmlFor={emailId}
                >
                  Email address
                </Label>
                <Input
                  aria-invalid={Boolean(fieldErrors.emailAddress)}
                  autoComplete="email"
                  className="mt-2 h-12 border-[var(--hs-border-strong)] bg-white text-base focus-visible:ring-[var(--hs-accent)] sm:h-11 sm:text-sm"
                  id={emailId}
                  inputMode="email"
                  maxLength={254}
                  onChange={(event) => updateField('emailAddress', event.target.value)}
                  required
                  type="email"
                  value={form.emailAddress}
                />
                <FieldError message={fieldErrors.emailAddress} />
              </div>

              <div>
                <Label
                  className="text-sm font-extrabold text-[var(--hs-text)]"
                  htmlFor={checkRequestId}
                >
                  What do you want us to check?
                </Label>
                <Textarea
                  aria-invalid={Boolean(fieldErrors.checkRequest)}
                  className="mt-2 min-h-28 border-[var(--hs-border-strong)] bg-white text-base focus-visible:ring-[var(--hs-accent)] sm:text-sm"
                  id={checkRequestId}
                  maxLength={3000}
                  onChange={(event) => updateField('checkRequest', event.target.value)}
                  placeholder={checkRequestPlaceholder}
                  required
                  value={form.checkRequest}
                />
                <FieldError message={fieldErrors.checkRequest} />
              </div>

              <div>
                <Label
                  className="text-sm font-extrabold text-[var(--hs-text)]"
                  htmlFor={currentStageId}
                >
                  Current stage
                </Label>
                <select
                  aria-invalid={Boolean(fieldErrors.currentStage)}
                  className="mt-2 flex h-12 w-full rounded-md border border-[var(--hs-border-strong)] bg-white px-3 py-2 text-base font-semibold text-[var(--hs-text)] shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hs-accent)] focus-visible:ring-offset-2 sm:h-11 sm:text-sm"
                  id={currentStageId}
                  onChange={(event) =>
                    updateField('currentStage', event.target.value as RiskCheckStage)
                  }
                  required
                  value={form.currentStage}
                >
                  {riskCheckStages.map((stage) => (
                    <option key={stage} value={stage}>
                      {stage}
                    </option>
                  ))}
                </select>
                <FieldError message={fieldErrors.currentStage} />
              </div>

              <div aria-hidden className="hidden">
                <Label htmlFor={honeypotId}>Company website</Label>
                <Input
                  autoComplete="off"
                  id={honeypotId}
                  onChange={(event) => updateField('honeypot', event.target.value)}
                  tabIndex={-1}
                  value={form.honeypot}
                />
              </div>

              <p className="rounded-md border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-3 text-xs font-semibold leading-5 text-[var(--hs-muted)] sm:text-sm sm:leading-6">
                Independent buyer-side review. Paid by buyers, not suppliers. We’ll
                tell you{' '}
                <Link
                  className="font-extrabold text-[var(--hs-accent)] underline underline-offset-4 hover:text-[var(--hs-accent-strong)]"
                  href={huangSourcingCheckScopeArticleHref}
                >
                  what can be checked
                </Link>
                , what looks risky, and what cannot be guaranteed. No spam.
              </p>

              {status === 'error' ? (
                <div
                  aria-live="polite"
                  className="rounded-md border border-red-200 bg-red-50 p-4 text-sm font-semibold leading-6 text-red-950"
                >
                  <p>
                    Something went wrong. Please try again, or message Agent Huang on
                    WhatsApp.
                  </p>
                  <Button
                    asChild
                    className="mt-3 h-auto min-h-11 w-full whitespace-normal rounded-md border-emerald-200 bg-white px-4 py-2.5 text-sm font-extrabold text-emerald-700 shadow-[var(--hs-shadow-sm)] hover:bg-emerald-50"
                    variant="outline"
                  >
                    <a
                      href={whatsAppHref}
                      onClick={trackWhatsAppFallbackClick}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <WhatsAppIcon className="size-4 shrink-0" />
                      Message Agent Huang on WhatsApp
                    </a>
                  </Button>
                </div>
              ) : null}

              <div className="grid gap-3">
                <Button
                  className="h-auto min-h-12 w-full whitespace-normal rounded-md bg-[var(--hs-accent)] px-4 py-3 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)]"
                  disabled={status === 'submitting'}
                  type="submit"
                >
                  {status === 'submitting'
                    ? 'Submitting...'
                    : 'Submit for Free Risk Check'}
                </Button>
                <p className="text-center text-xs font-semibold leading-5 text-[var(--hs-muted)]">
                  Your email is used for this risk-check reply. Read our{' '}
                  <Link
                    className="font-extrabold text-[var(--hs-accent)] underline underline-offset-4 hover:text-[var(--hs-accent-strong)]"
                    href={privacyConfidentialityHref}
                  >
                    Privacy & Confidentiality
                  </Link>
                  .
                </p>
              </div>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
