'use client'

import type { FormEvent } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  Barcode,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  LockKeyhole,
  PackageCheck,
  ShieldAlert,
  ShieldCheck,
  Tags,
  Warehouse,
  XCircle,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useMemo, useRef, useState } from 'react'

import {
  submitTikTokRiskCheckInquiry,
  type SubmitTikTokRiskCheckInquiryResult,
} from '@/actions/submitTikTokRiskCheckInquiry'
import { WhatsAppIcon } from '@/components/site/SocialLinks'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { trackWhatsAppClick } from '@/lib/analytics'
import { buildWhatsAppHref } from '@/lib/site-links'
import { cn } from '@/lib/utils'

type RiskScenario =
  | 'supplier_before_deposit'
  | 'goods_before_balance'
  | 'fba_labels_before_shipment'

type FieldErrors = Extract<
  SubmitTikTokRiskCheckInquiryResult,
  { ok: false }
>['fieldErrors']

type FormState = {
  supplier: string
  product: string
  paymentStatus: string
  shipmentStage: string
  message: string
}

type ScenarioOption = {
  id: RiskScenario
  label: string
  shortLabel: string
  messageLabel: string
  helper: string
  Icon: LucideIcon
}

const scenarioOptions: ScenarioOption[] = [
  {
    id: 'supplier_before_deposit',
    label: 'Check My Supplier Before Deposit',
    shortLabel: 'Supplier before deposit',
    messageLabel: 'Supplier check before deposit',
    helper: 'Use this before the first wire or platform payment.',
    Icon: ShieldCheck,
  },
  {
    id: 'goods_before_balance',
    label: 'Check My Goods Before Balance Payment',
    shortLabel: 'Goods before balance',
    messageLabel: 'Goods check before balance payment',
    helper: 'Use this before paying the final balance or releasing pickup.',
    Icon: PackageCheck,
  },
  {
    id: 'fba_labels_before_shipment',
    label: 'Check My FBA Labels Before Shipment',
    shortLabel: 'FBA labels before shipment',
    messageLabel: 'FBA label check before shipment',
    helper: 'Use this before cartons leave for Amazon or a forwarder.',
    Icon: Tags,
  },
]

const checkItems: Array<{ label: string; Icon: LucideIcon }> = [
  { label: 'Supplier information', Icon: FileText },
  { label: 'Company signals', Icon: Building2 },
  { label: 'Product status', Icon: PackageCheck },
  { label: 'Packaging', Icon: Warehouse },
  { label: 'Labels', Icon: Tags },
  { label: 'Carton marks', Icon: PackageCheck },
  { label: 'FNSKU', Icon: Barcode },
  { label: 'Shipment readiness', Icon: ClipboardCheck },
]

const paymentStatusOptions = [
  'No payment yet',
  'Supplier is asking for deposit',
  'Deposit already paid',
  'Balance payment requested',
  'Balance already paid',
  'Not sure',
]

const shipmentStageOptions = [
  'Choosing supplier',
  'Before deposit',
  'In production',
  'Goods are ready',
  'Before pickup',
  'Before FBA shipment',
  'Already shipped',
  'Not sure',
]

const initialForm: FormState = {
  supplier: '',
  product: '',
  paymentStatus: '',
  shipmentStage: '',
  message: '',
}

function getScenario(id: RiskScenario) {
  return scenarioOptions.find((scenario) => scenario.id === id) ?? scenarioOptions[0]
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null

  return <p className="mt-2 text-xs font-semibold leading-5 text-red-700">{message}</p>
}

function TikTokRiskCheckLanding() {
  const router = useRouter()
  const formRef = useRef<HTMLElement>(null)
  const [riskScenario, setRiskScenario] = useState<RiskScenario>('supplier_before_deposit')
  const [form, setForm] = useState<FormState>(initialForm)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>()
  const [status, setStatus] = useState<
    | { type: 'success'; message: string }
    | { type: 'error'; message: string }
    | null
  >(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const selectedScenario = getScenario(riskScenario)
  const whatsAppHref = useMemo(() => {
    return buildWhatsAppHref(`Hi Agent Huang,

I want a Free China Sourcing Risk Check.

Check type: ${selectedScenario.messageLabel}
Supplier / factory: ${form.supplier}
Product / item: ${form.product}
Payment status: ${form.paymentStatus}
Shipment stage: ${form.shipmentStage}
Situation: ${form.message}
`)
  }, [form, selectedScenario.messageLabel])

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setFieldErrors((current) => ({ ...current, [field]: undefined }))
    setStatus((current) => (current?.type === 'error' ? null : current))
  }

  const chooseScenario = (scenario: RiskScenario) => {
    setRiskScenario(scenario)
    setFieldErrors((current) => ({ ...current, riskScenario: undefined }))
    setStatus((current) => (current?.type === 'error' ? null : current))
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus(null)
    setFieldErrors(undefined)

    const result = await submitTikTokRiskCheckInquiry({
      ...form,
      riskScenario,
    })

    setIsSubmitting(false)

    if (result.ok) {
      router.push('/thank-you?source=free-risk-check')
      return
    }

    setFieldErrors(result.fieldErrors)
    setStatus({ type: 'error', message: result.message })
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950 antialiased">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link
            aria-label="Huang Sourcing home"
            className="flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            href="/"
          >
            <Image
              alt="Huang Sourcing logo"
              className="h-10 w-auto shrink-0 sm:h-11"
              height={238}
              priority
              sizes="44px"
              src="/brand-mark-logo.webp"
              width={192}
            />
            <span className="truncate text-base font-extrabold tracking-tight text-slate-950">
              Huang Sourcing
            </span>
          </Link>
          <a
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-950 shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-[0.98] sm:px-4"
            href={whatsAppHref}
            onClick={() =>
              trackWhatsAppClick({
                ctaLabel: 'TikTok landing header WhatsApp',
                ctaLocation: 'tiktok_risk_check_header',
              })
            }
            rel="noreferrer"
            target="_blank"
          >
            <WhatsAppIcon className="size-4 shrink-0 text-emerald-600" />
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-6">
            <h1 className="max-w-2xl text-balance text-[2.35rem] font-extrabold leading-[1.04] tracking-tight text-slate-950 sm:text-6xl lg:text-[3.9rem]">
              Free China Sourcing Risk Check
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Send us your supplier, product, payment status, and shipment stage. We
              will suggest the next practical China-side check before you pay, pickup,
              or ship.
            </p>
            <p className="mt-5 flex items-start gap-3 text-base font-extrabold leading-7 text-slate-950 sm:text-lg">
              <ShieldCheck className="mt-0.5 size-6 shrink-0 text-red-600" aria-hidden />
              See the risk before you pay or ship.
            </p>

            <div className="mt-5 grid max-w-xl gap-3">
              {scenarioOptions.map(({ id, label, Icon }) => {
                const isSelected = id === riskScenario

                return (
                  <button
                    className={cn(
                      'group flex min-h-12 w-full items-center justify-between gap-3 rounded-md border px-4 py-2.5 text-left text-sm font-extrabold leading-5 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-[0.99] sm:text-base',
                      isSelected
                        ? 'border-red-600 bg-red-600 text-white hover:bg-red-700'
                        : 'border-red-200 bg-white text-red-700 hover:border-red-300 hover:bg-red-50',
                    )}
                    key={id}
                    onClick={() => chooseScenario(id)}
                    type="button"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span
                        className={cn(
                          'flex size-9 shrink-0 items-center justify-center rounded-md border',
                          isSelected
                            ? 'border-white/30 bg-white/10'
                            : 'border-red-200 bg-white',
                        )}
                      >
                        <Icon className="size-5 shrink-0" aria-hidden />
                      </span>
                      <span className="min-w-0">{label}</span>
                    </span>
                    <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </button>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
              <div className="relative aspect-[16/11] min-h-[260px]">
                <Image
                  alt="China-side warehouse inspection with cartons and shipment labels"
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src="/images/hero-inspection.webp"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(255,255,255,0)_38%)]" />
              </div>

              <div className="absolute bottom-4 left-4 w-[min(78%,280px)] rounded-lg border border-white/70 bg-white/95 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.16)] backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-extrabold text-slate-950">Inspection report</p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">
                      Photos, labels, carton marks, and visible risk notes.
                    </p>
                  </div>
                  <ClipboardCheck className="size-5 shrink-0 text-red-600" aria-hidden />
                </div>
                <div className="mt-3 grid gap-2">
                  {['Supplier signal', 'Package label', 'Shipment stage'].map((item) => (
                    <div className="flex items-center gap-2" key={item}>
                      <CheckCircle2 className="size-3.5 shrink-0 text-emerald-600" />
                      <span className="h-2 flex-1 rounded-full bg-slate-200" />
                      <span className="text-[11px] font-bold text-slate-500">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-6 right-4 hidden w-32 rotate-2 rounded-lg border border-slate-200 bg-white p-3 shadow-[0_16px_34px_rgba(15,23,42,0.16)] sm:block">
                <p className="text-xs font-extrabold text-slate-950">FNSKU</p>
                <Barcode className="mt-2 h-10 w-full text-slate-950" aria-hidden />
                <p className="mt-1 text-[11px] font-bold text-slate-500">Label check</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50" id="can-check">
        <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-16">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            What we can check:
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            Supplier information, company signals, product status, packaging, labels,
            carton marks, FNSKU, shipment readiness.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-8 md:grid-cols-4 lg:grid-cols-8 lg:gap-0 lg:overflow-hidden lg:rounded-lg lg:border lg:border-slate-200 lg:bg-white">
            {checkItems.map(({ label, Icon }) => (
              <div
                className="flex min-h-[68px] items-center gap-2 rounded-md border border-slate-200 bg-white p-3 lg:min-h-32 lg:flex-col lg:items-start lg:justify-between lg:gap-0 lg:rounded-none lg:border-y-0 lg:border-l-0 lg:border-r lg:border-slate-200 lg:p-4 lg:last:border-r-0"
                key={label}
              >
                <Icon className="size-5 shrink-0 text-red-600 sm:size-6 lg:size-7" aria-hidden />
                <p className="text-[13px] font-bold leading-5 text-slate-900 sm:text-sm lg:mt-5">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-9 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-10">
          <div className="hidden lg:col-span-4 lg:block">
            <div className="flex aspect-square max-w-xs items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
              <ShieldAlert className="size-28 text-slate-300" aria-hidden />
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              What we cannot promise:
            </h2>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:mt-7 sm:gap-4 sm:text-base sm:leading-7">
              <div className="flex gap-3 rounded-md border border-slate-200 bg-slate-50 p-3 sm:border-0 sm:bg-white sm:p-0">
                <XCircle className="mt-0.5 size-4 shrink-0 text-red-600 sm:mt-1 sm:size-5" aria-hidden />
                <p>We do not promise zero risk.</p>
              </div>
              <div className="flex gap-3 rounded-md border border-slate-200 bg-slate-50 p-3 sm:border-0 sm:bg-white sm:p-0">
                <XCircle className="mt-0.5 size-4 shrink-0 text-red-600 sm:mt-1 sm:size-5" aria-hidden />
                <p>We do not replace legal due diligence or laboratory testing.</p>
              </div>
              <div className="flex gap-3 rounded-md border border-emerald-100 bg-emerald-50 p-3 text-emerald-950 sm:rounded-lg sm:p-4">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600 sm:mt-1 sm:size-5" aria-hidden />
                <p className="font-semibold">We help you see visible risks earlier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-6 border-b border-slate-200 bg-slate-50"
        id="send-situation"
        ref={formRef}
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Send your situation.
            </h2>
            <div className="mt-8 grid gap-4">
              {[
                {
                  title: 'Fast response on WhatsApp',
                  body: 'Use the WhatsApp button if you want to continue the conversation there.',
                  Icon: WhatsAppIcon,
                  className: 'text-emerald-600',
                },
                {
                  title: 'Practical advice from China-side',
                  body: 'We suggest the next check based on your current payment and shipment stage.',
                  Icon: ShieldCheck,
                  className: 'text-blue-600',
                },
                {
                  title: 'Clear next step for your order',
                  body: 'The first reply focuses on what to check before money or goods move.',
                  Icon: FileText,
                  className: 'text-slate-600',
                },
              ].map(({ title, body, Icon, className }) => (
                <div className="flex gap-4" key={title}>
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm">
                    <Icon className={cn('size-5', className)} />
                  </div>
                  <div>
                    <p className="font-extrabold text-slate-950">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:col-span-8"
            onSubmit={handleSubmit}
          >
            <div>
              <Label className="text-sm font-extrabold text-slate-950">
                What do you want checked first?
              </Label>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                {scenarioOptions.map(({ id, shortLabel, helper, Icon }) => {
                  const isSelected = id === riskScenario

                  return (
                    <button
                      aria-pressed={isSelected}
                      className={cn(
                        'flex min-h-[92px] flex-col items-start gap-2 rounded-md border p-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 sm:min-h-[116px] sm:gap-3 sm:p-4',
                        isSelected
                          ? 'border-red-600 bg-red-50 text-red-950 ring-1 ring-red-600'
                          : 'border-slate-200 bg-white text-slate-800 hover:border-red-200 hover:bg-red-50/60',
                      )}
                      key={id}
                      onClick={() => setRiskScenario(id)}
                      type="button"
                    >
                      <Icon
                        className={cn('size-5', isSelected ? 'text-red-600' : 'text-slate-500')}
                        aria-hidden
                      />
                      <span className="text-sm font-extrabold leading-5">{shortLabel}</span>
                      <span className="text-xs font-semibold leading-5 text-slate-500">
                        {helper}
                      </span>
                    </button>
                  )
                })}
              </div>
              <FieldError message={fieldErrors?.riskScenario} />
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <Label className="text-sm font-extrabold text-slate-950" htmlFor="supplier">
                  Supplier / factory name or link *
                </Label>
                <Input
                  autoComplete="organization"
                  className="mt-2 h-12 border-slate-300 text-base focus-visible:ring-red-500 md:h-11 md:text-sm"
                  id="supplier"
                  onChange={(event) => updateField('supplier', event.target.value)}
                  placeholder="Supplier name or link"
                  value={form.supplier}
                />
                <FieldError message={fieldErrors?.supplier} />
              </div>

              <div>
                <Label className="text-sm font-extrabold text-slate-950" htmlFor="product">
                  Product / item *
                </Label>
                <Input
                  autoComplete="off"
                  className="mt-2 h-12 border-slate-300 text-base focus-visible:ring-red-500 md:h-11 md:text-sm"
                  id="product"
                  onChange={(event) => updateField('product', event.target.value)}
                  placeholder="Product or item"
                  value={form.product}
                />
                <FieldError message={fieldErrors?.product} />
              </div>

              <div>
                <Label className="text-sm font-extrabold text-slate-950" htmlFor="paymentStatus">
                  Payment status *
                </Label>
                <select
                  className="mt-2 flex h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base font-medium text-slate-900 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 md:h-11 md:text-sm"
                  id="paymentStatus"
                  onChange={(event) => updateField('paymentStatus', event.target.value)}
                  value={form.paymentStatus}
                >
                  <option value="">Select payment status</option>
                  {paymentStatusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <FieldError message={fieldErrors?.paymentStatus} />
              </div>

              <div>
                <Label className="text-sm font-extrabold text-slate-950" htmlFor="shipmentStage">
                  Shipment stage *
                </Label>
                <select
                  className="mt-2 flex h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base font-medium text-slate-900 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 md:h-11 md:text-sm"
                  id="shipmentStage"
                  onChange={(event) => updateField('shipmentStage', event.target.value)}
                  value={form.shipmentStage}
                >
                  <option value="">Select shipment stage</option>
                  {shipmentStageOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <FieldError message={fieldErrors?.shipmentStage} />
              </div>
            </div>

            <div className="mt-5">
              <Label className="text-sm font-extrabold text-slate-950" htmlFor="message">
                Your message
              </Label>
              <Textarea
                className="mt-2 min-h-28 border-slate-300 text-base focus-visible:ring-red-500 md:text-sm"
                id="message"
                onChange={(event) => updateField('message', event.target.value)}
                placeholder="Your concern or deadline"
                value={form.message}
              />
              <FieldError message={fieldErrors?.message} />
            </div>

            {status ? (
              <div
                aria-live="polite"
                className={cn(
                  'mt-5 rounded-md border p-4 text-sm font-semibold leading-6',
                  status.type === 'success'
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-950'
                    : 'border-red-200 bg-red-50 text-red-950',
                )}
              >
                {status.message}
              </div>
            ) : null}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                className="h-12 rounded-md bg-red-600 px-6 text-sm font-extrabold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98] sm:flex-1"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? 'Sending...' : 'Send My Situation'}
              </Button>
              <Button
                asChild
                className="h-12 rounded-md border-slate-300 bg-white px-6 text-sm font-extrabold text-slate-950 shadow-sm transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 active:scale-[0.98] sm:flex-1"
                variant="outline"
              >
                <a
                  href={whatsAppHref}
                  onClick={() =>
                    trackWhatsAppClick({
                      ctaLabel: 'TikTok risk check form WhatsApp',
                      ctaLocation: 'tiktok_risk_check_form',
                    })
                  }
                  rel="noreferrer"
                  target="_blank"
                >
                  <WhatsAppIcon className="size-4 shrink-0 text-emerald-600" />
                  Send on WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs font-semibold leading-5 text-slate-500">
              <LockKeyhole className="size-3.5 shrink-0" aria-hidden />
              Your information is used only to review your risk-check request.
            </p>
          </form>
        </div>
      </section>

    </main>
  )
}

export { TikTokRiskCheckLanding }
