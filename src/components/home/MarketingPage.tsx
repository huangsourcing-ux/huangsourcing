import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  Barcode,
  Building2,
  Check,
  ClipboardCheck,
  FileDown,
  Handshake,
  PackageCheck,
  Search,
  ShieldCheck,
  Truck,
  XCircle,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { SampleReportDownloadLink } from '@/components/analytics/SampleReportDownloadLink'
import { HomeHeroCtas } from '@/components/home/HomeHeroCtas'
import { HomeServiceDetails } from '@/components/home/HomeServiceDetails'
import { RiskCheckLeadCapture } from '@/components/risk-check/RiskCheckLeadCapture'
import { JsonLd } from '@/components/seo/JsonLd'
import { Reveal } from '@/components/site/Reveal'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import type { RiskCheckStage } from '@/lib/risk-check-lead'
import { servicePricingBySlug } from '@/lib/service-pricing'
import { reportHref, sampleReportPageHref } from '@/lib/site-links'
import { makeHomeJsonLd } from '@/lib/structured-data'

type ServiceCard = {
  title: string
  summary: string
  price: string
  deliverables: string[]
}

type RiskStageCard = {
  phase: string
  ctaLabel: string
  formStage: RiskCheckStage
  risk: string
  service: string
  Icon: LucideIcon
  recommended?: boolean
}

type DetailService = ServiceCard & {
  bestFor: string
}

type Review = {
  buyerProfile: string
  country: string
  flag: string
  category: string
  orderScope: string
  message: string
  result: string
}

const heroImage = '/images/hero-inspection.webp'
const reportImage = '/images/report-evidence.webp'
const agentImage = '/images/agent-huang-onsite-placeholder.webp'

const riskStages: RiskStageCard[] = [
  {
    phase: 'Before Deposit',
    ctaLabel: 'Check supplier before deposit',
    formStage: 'Before deposit',
    risk: 'Check supplier identity and pressure signs before money leaves your account.',
    service: 'Free Risk Check + Supplier Verification',
    Icon: ShieldCheck,
  },
  {
    phase: 'Before Supplier Selection',
    ctaLabel: 'Compare samples before choosing supplier',
    formStage: 'Before supplier selection',
    risk: 'Compare samples and supplier signals before you choose a factory.',
    service: 'Sample Consolidation',
    Icon: Search,
  },
  {
    phase: 'Before Balance Payment',
    ctaLabel: 'Inspect goods before paying balance',
    formStage: 'Before balance payment',
    risk: 'Confirm finished goods, labels, cartons, and packing before final payment.',
    service: 'QC Inspection',
    Icon: PackageCheck,
    recommended: true,
  },
  {
    phase: 'Before Pickup',
    ctaLabel: 'Check cartons before forwarder pickup',
    formStage: 'Before pickup',
    risk: 'Verify carton count, shipping marks, and pickup readiness before collection.',
    service: 'Pre-Shipment Inspection',
    Icon: Truck,
  },
  {
    phase: 'Before FBA Shipment',
    ctaLabel: 'Check FNSKU and carton labels',
    formStage: 'Before FBA shipment',
    risk: 'Check FNSKU, carton labels, and SKU separation before shipment.',
    service: 'Amazon FBA Prep',
    Icon: Barcode,
  },
]

const trustChips = [
  'Buyer-aligned',
  'Evidence-first',
  'China-side',
  'Paid by buyers, not suppliers',
]

const companyStructureCards = [
  {
    title: 'UK-registered business structure',
    body: 'A clear company entity for international buyers, contracts, and client communication.',
    Icon: Building2,
  },
  {
    title: 'China-side execution',
    body: 'Supplier checks, factory communication, sample handling, QC, and shipment preparation are handled close to the source.',
    Icon: ClipboardCheck,
  },
  {
    title: 'Buyer-side alignment',
    body: 'We are paid by the buyer, not suppliers. Our work focuses on evidence, risk flags, and practical next steps before payment, pickup, or shipment.',
    Icon: Handshake,
  },
]

const reportRows = [
  {
    label: 'Supplier identity check',
    detail: 'Company, address, factory/trader signals',
  },
  {
    label: 'Packaging evidence',
    detail: 'Photos before payment or pickup',
  },
  {
    label: 'Carton label check',
    detail: 'Shipping marks, barcode, FNSKU when scoped',
  },
  {
    label: 'Buyer decision note',
    detail: 'Approve, hold, correct, or inspect again',
  },
]

const detailServices: DetailService[] = [
  {
    title: 'Supplier shortlist / quick sourcing check',
    summary: 'Use this when you have product requirements but are not sure which supplier is real.',
    price: 'Free first review',
    bestFor: 'First-time buyers, Amazon sellers, and small importers comparing early supplier options.',
    deliverables: ['Supplier risk review', 'Quote and MOQ sanity check', 'Recommended next action'],
  },
  {
    title: 'Supplier verification',
    summary: 'A practical check before you wire a deposit or lock a new factory.',
    price: servicePricingBySlug['supplier-verification-china'].startingPoint,
    bestFor: 'New vendors, high deposit orders, or suppliers found through marketplaces.',
    deliverables: ['Factory / trader review', 'Company background review', 'Buyer-side risk summary'],
  },
  {
    title: 'Sample consolidation',
    summary: 'Send samples to one China-side hub before paying international freight.',
    price: servicePricingBySlug['sample-consolidation-china'].startingPoint,
    bestFor: 'Buyers comparing samples from two or more suppliers.',
    deliverables: ['Unboxing photos or video', 'Side-by-side sample notes', 'Consolidated outbound shipment'],
  },
  {
    title: 'QC inspection',
    summary: 'Onsite product, packaging, and quantity checks before final payment.',
    price: servicePricingBySlug['qc-inspection-china'].startingPoint,
    bestFor: 'Pre-shipment inspections and orders where defects would hurt margin or reviews.',
    deliverables: ['Photo evidence', 'AQL-style defect list', 'Same-day issue escalation'],
  },
  {
    title: 'FBA prep and logistics',
    summary: 'China-side prep for ecommerce shipments that need labels, packaging, and coordination.',
    price: servicePricingBySlug['amazon-fba-prep-china'].startingPoint,
    bestFor: 'Amazon, Walmart, DDP, private label, or multi-SKU shipments.',
    deliverables: ['Label and packaging coordination', 'Carton / SKU checks', 'Pickup / shipment coordination'],
  },
]

const trustPoints = [
  {
    title: 'Paid by buyers, not suppliers',
    body: 'The service fee comes from the buyer, so sourcing and inspection notes stay aligned with your order.',
  },
  {
    title: 'Evidence before decisions',
    body: 'If a visible risk shows up before payment, pickup, or shipment, it goes into the buyer-side notes.',
  },
  {
    title: 'Reports you can actually use',
    body: 'Photos, defect notes, packaging checks, and next steps you can forward internally.',
  },
]

const scopeChecks = [
  'Supplier identity and factory/trader signals',
  'Product condition and visible defects',
  'Packaging, labels, carton marks, FNSKU',
  'Shipment readiness before balance payment or pickup',
  'Practical next steps based on photo evidence',
]

const scopeLimits = [
  'We do not promise zero risk',
  'We do not replace lab testing',
  'We do not replace legal due diligence',
  'We do not work as a supplier-side sales agent',
]

const process = ['Send supplier or order context', 'Agent Huang checks the risk', 'Go onsite if needed', 'You decide before payment or shipment']

const reviews: Review[] = [
  {
    buyerProfile: 'U.S. Amazon seller',
    country: 'United States',
    flag: '🇺🇸',
    category: 'Home hardware',
    orderScope: '~3,200 units · <$20k balance',
    message:
      'Agent Huang checked packaging and carton-label photos before we paid the balance. One carton label was wrong, so we asked the supplier to fix it before pickup.',
    result: 'Balance payment protected',
  },
  {
    buyerProfile: 'EU ecommerce importer',
    country: 'Germany',
    flag: '🇩🇪',
    category: 'Consumer electronics accessories',
    orderScope: '38 cartons · 1,450 pcs',
    message:
      'The factory said the order was ready for pickup. The onsite check showed missing cartons and mixed labels, so we delayed collection until the count matched the packing list.',
    result: 'Delay caught before pickup',
  },
  {
    buyerProfile: 'Australian private-label buyer',
    country: 'Australia',
    flag: '🇦🇺',
    category: 'Private-label home goods',
    orderScope: '4 suppliers · first order under $12k',
    message:
      'We had four suppliers with similar quotes. Agent Huang compared samples, MOQ details, and factory risk notes, then showed why one supplier was safer for the first order.',
    result: 'Supplier shortlist reduced from 4 to 1',
  },
]

export function MarketingPage() {
  const homeJsonLd = makeHomeJsonLd()

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader
        activePage="home"
        topBanner="China-side sourcing, supplier checks, QC inspection, and shipment prep — aligned with the buyer."
      />
      <JsonLd data={homeJsonLd} />

      <section className="relative overflow-hidden border-b border-[var(--hs-border)] bg-[radial-gradient(circle_at_76%_18%,rgba(200,61,50,0.07),transparent_25rem),radial-gradient(circle_at_16%_4%,rgba(17,24,39,0.08),transparent_20rem),linear-gradient(180deg,#fffdf9_0%,#f4f0e8_100%)]">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(247,245,241,0.82))]"
          aria-hidden
        />
        <div className="hs-container relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-12 lg:py-20">
          <Reveal className="min-w-0 lg:col-span-6">
            <p className="max-w-full break-words text-xs font-extrabold uppercase leading-5 tracking-[0.08em] text-[var(--hs-blue-gray)]">
              Before payment · Before pickup · Before shipment
            </p>
            <h1 className="mt-3 max-w-[22rem] break-words text-balance text-[2.05rem] font-extrabold leading-[1.08] tracking-tight text-[var(--hs-text)] sm:max-w-full sm:text-5xl lg:text-[3.45rem]">
              Buyer-side China sourcing support before payment, pickup, or shipment.
            </h1>
            <p className="mt-6 max-w-[640px] break-words text-[15px] leading-[1.65] text-[#374151] sm:text-lg">
              Supplier verification, QC inspection, sample consolidation, Amazon FBA prep,
              and pre-shipment checks for overseas buyers sourcing from China.
            </p>
            <div className="mt-8">
              <HomeHeroCtas
                primaryLabel="Get a Free Sourcing Risk Check"
                secondaryLabel="View Sample Report"
              />
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {trustChips.map((chip) => (
                <span className="hs-chip" key={chip}>
                  <Check className="size-3.5 text-[var(--hs-blue-gray)]" aria-hidden />
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 border-y border-[var(--hs-border)] py-5 sm:grid-cols-3">
              <div className="rounded-md bg-white/60 p-3 ring-1 ring-black/[0.04]">
                <p className="text-2xl font-extrabold text-[var(--hs-text)]">10+ yrs</p>
                <p className="mt-1 text-[13px] font-semibold leading-5 text-[#4B5563]">China supply-chain experience</p>
              </div>
              <div className="rounded-md bg-white/60 p-3 ring-1 ring-black/[0.04]">
                <p className="text-2xl font-extrabold text-[var(--hs-text)]">24h</p>
                <p className="mt-1 text-[13px] font-semibold leading-5 text-[#4B5563]">Standard reply target</p>
              </div>
              <div className="rounded-md bg-white/60 p-3 ring-1 ring-black/[0.04]">
                <p className="text-xl font-extrabold leading-7 text-[var(--hs-text)]">Buyer-aligned</p>
                <p className="mt-1 text-[13px] font-semibold leading-5 text-[#4B5563]">Paid by buyers, not suppliers.</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delayMs={120}>
            <div className="relative mx-auto max-w-[34rem] lg:ml-auto">
              <div className="absolute -left-4 top-10 hidden h-60 w-28 rounded-lg border border-white/60 bg-white/45 shadow-[var(--hs-shadow-sm)] backdrop-blur sm:block" aria-hidden />
              <div className="absolute -bottom-5 right-4 hidden h-24 w-52 rounded-lg border border-[var(--hs-border)] bg-[var(--hs-blue-gray-soft)] shadow-[var(--hs-shadow-sm)] sm:block" aria-hidden />
              <div className="hs-report-mockup hs-card relative overflow-hidden bg-white p-4 shadow-[var(--hs-shadow-md)] motion-safe:animate-[hs-report-float_6s_ease-in-out_infinite]">
                <div className="rounded-md border border-[var(--hs-border)] bg-[linear-gradient(180deg,#fff_0%,#fffaf4_100%)] p-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">China-side risk checklist</p>
                      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[var(--hs-text)]">
                        Inspection decision brief
                      </h2>
                    </div>
                    <span className="rounded-full border border-[#E5E7EB] bg-[#F3F4F6] px-3 py-1 text-xs font-extrabold text-[#4B5563]">
                      Buyer copy
                    </span>
                  </div>
                  <div className="mt-4 overflow-hidden rounded-md border border-[var(--hs-border)]">
                    <div className="relative aspect-[16/8]">
                      <Image
                        alt="Agent Huang checking products and shipment labels in a warehouse"
                        className="object-cover"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        src={heroImage}
                      />
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3">
                    {reportRows.map((row, index) => (
                      <div
                        className="grid grid-cols-[auto_1fr] gap-3 rounded-md border border-[var(--hs-border)] bg-white/85 p-3 shadow-[var(--hs-shadow-sm)]"
                        key={row.label}
                      >
                        <span className="flex size-8 items-center justify-center rounded-md bg-[var(--hs-navy)] text-xs font-extrabold text-white">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>
                          <span className="block text-sm font-extrabold text-[var(--hs-text)]">{row.label}</span>
                          <span className="mt-0.5 block text-xs font-semibold leading-5 text-[var(--hs-muted)]">
                            {row.detail}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--hs-border)] pt-4">
                    {['Before payment', 'Before pickup', 'Before shipment'].map((tag) => (
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-extrabold text-slate-700" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-[var(--hs-bg)]" id="services">
        <div className="hs-container hs-section">
          <Reveal className="max-w-[680px]">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-4xl">
              Choose your current sourcing risk point.
            </h2>
            <p className="mt-4 text-base leading-[1.65] text-[#374151]">
              You do not need to know the service category first. Pick the stage before
              your next deposit, supplier decision, balance payment, pickup, or FBA shipment.
            </p>
          </Reveal>

          <div className="relative mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <div className="absolute left-8 right-8 top-[4.25rem] hidden h-px bg-gradient-to-r from-transparent via-[var(--hs-border-strong)] to-transparent xl:block" aria-hidden />
            {riskStages.map((stage, index) => {
              const isRecommended = Boolean(stage.recommended)

              return (
                <Reveal
                  as="article"
                  className={`group relative z-10 flex min-h-[286px] flex-col overflow-hidden rounded-lg border bg-white p-5 shadow-[var(--hs-shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--hs-shadow-md)] ${
                    isRecommended
                      ? 'border-[#E7B8B2] shadow-[0_12px_30px_rgba(17,24,39,0.09)] ring-1 ring-[#F6E4E1] xl:-mt-2 xl:min-h-[302px]'
                      : 'border-[var(--hs-border)] hover:border-[var(--hs-border-strong)]'
                  }`}
                  key={stage.phase}
                  staggerIndex={index}
                >
                  {isRecommended ? (
                    <div className="absolute inset-x-0 top-0 h-1 bg-[#D8A29B]" aria-hidden />
                  ) : null}
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="flex size-10 items-center justify-center rounded-md bg-[var(--hs-navy)] text-white shadow-[var(--hs-shadow-sm)]"
                    >
                      <stage.Icon className="size-5" aria-hidden />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {isRecommended ? (
                        <span className="rounded-full border border-[#E5E7EB] bg-[#F3F4F6] px-2.5 py-1 text-xs font-extrabold text-[#4B5563]">
                          Most common
                        </span>
                      ) : null}
                      <span className="rounded-full border border-[#E5E7EB] bg-[#F3F4F6] px-2.5 py-1 text-xs font-extrabold text-[#4B5563] transition-transform duration-300 group-hover:scale-105">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold leading-6 text-[var(--hs-text)]">{stage.phase}</h3>
                  <p className="mt-3 text-sm leading-[1.6] text-[#4B5563]">{stage.risk}</p>
                  <div className="mt-4 rounded-md border border-[var(--hs-border)] bg-[#F8FAFC] p-3">
                    <p className="text-xs font-extrabold text-[var(--hs-muted-soft)]">Corresponding service</p>
                    <p className="mt-1 text-sm font-extrabold leading-5 text-[var(--hs-text)]">{stage.service}</p>
                  </div>
                  <RiskCheckLeadCapture
                    buttonClassName={`mt-auto h-auto min-h-11 w-full whitespace-normal rounded-md px-3 py-2 text-sm font-extrabold leading-5 text-white shadow-[var(--hs-shadow-sm)] transition-all hover:shadow-[var(--hs-shadow-md)] active:scale-[0.98] ${
                      isRecommended
                        ? 'bg-[var(--hs-accent)] hover:bg-[var(--hs-accent-strong)]'
                        : 'bg-[var(--hs-navy)] hover:bg-[var(--hs-navy-2)]'
                    }`}
                    buttonSize="default"
                    defaultStage={stage.formStage}
                    triggerName={`${stage.phase} card`}
                  >
                    <span className="min-w-0 flex-1 text-left">{stage.ctaLabel}</span>
                    <ArrowRight className="size-4 shrink-0" aria-hidden />
                  </RiskCheckLeadCapture>
                </Reveal>
              )
            })}
          </div>

          <HomeServiceDetails services={detailServices} />
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-white" id="scope">
        <div className="hs-container hs-section">
          <Reveal className="max-w-[680px]">
            <p className="hs-eyebrow">Clear buyer-side boundaries</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-4xl">
              What we help you check, and what we do not promise.
            </h2>
            <p className="hs-muted mt-4 text-base leading-[1.65]">
              Huang Sourcing reduces sourcing uncertainty with practical China-side evidence,
              while keeping the limits of each check clear before you decide.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal className="hs-card border-[var(--hs-border-strong)] bg-white p-6 shadow-[var(--hs-shadow-md)]">
              <div className="h-1 w-20 rounded-full bg-[var(--hs-navy)]" />
              <h3 className="mt-5 text-xl font-extrabold text-[var(--hs-text)]">What we help you check</h3>
              <ul className="mt-5 grid gap-3">
                {scopeChecks.map((item) => (
                  <li className="flex gap-3 border-b border-[var(--hs-border)] pb-3 text-sm font-semibold leading-[1.65] text-[var(--hs-muted)] last:border-0 last:pb-0" key={item}>
                    <Check className="mt-0.5 size-4 shrink-0 text-[var(--hs-blue-gray)]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-[var(--hs-shadow-sm)]" delayMs={100}>
              <div className="h-1 w-20 rounded-full bg-[#CBD5E1]" />
              <h3 className="mt-5 text-xl font-extrabold text-[var(--hs-text)]">What we do not promise</h3>
              <ul className="mt-5 grid gap-3">
                {scopeLimits.map((item) => (
                  <li className="flex gap-3 border-b border-[#E2E8F0] pb-3 text-sm font-semibold leading-[1.65] text-[var(--hs-muted)] last:border-0 last:pb-0" key={item}>
                    <XCircle className="mt-0.5 size-4 shrink-0 text-slate-500" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-[#F8FAFC]" id="integrity">
        <div className="hs-container hs-section grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="hs-eyebrow">Buyer-aligned by design</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-4xl">
              Paid by the buyer. Aligned with the buyer.
            </h2>
            <p className="mt-4 max-w-[620px] text-base leading-[1.65] text-[#374151]">
              Some platforms earn money from supplier exposure. Huang Sourcing is paid by
              the buyer and does not take supplier-paid recommendations, so notes and next
              steps stay aligned with your order.
            </p>
          </Reveal>
          <div className="grid gap-3 lg:col-span-7">
            {trustPoints.map((point, index) => (
              <Reveal
                as="article"
                className="hs-card hs-card-hover flex gap-4 bg-white p-5"
                key={point.title}
                staggerIndex={index}
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#EEF2F6] text-[var(--hs-blue-gray)] shadow-[var(--hs-shadow-sm)]">
                  <ShieldCheck className="size-5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-extrabold text-[var(--hs-text)]">{point.title}</h3>
                  <p className="hs-muted mt-1 text-sm leading-[1.65]">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-[var(--hs-navy)] text-white">
        <div className="hs-container hs-section grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="hs-eyebrow hs-eyebrow-on-dark">Sample report</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              See the report logic before you download the PDF.
            </h2>
            <p className="mt-4 max-w-[640px] text-base leading-[1.65] text-slate-200">
              The sample report page shows the decision note, packaging and label evidence,
              next-step recommendations, and the limits the report does not claim.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              {['Recommended decision note', 'Packaging and label evidence', 'Next-step recommendations', 'Honest scope limits'].map((item) => (
                <li className="flex gap-2" key={item}>
                  <Check className="mt-0.5 size-4 shrink-0 text-slate-300" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-11 rounded-md bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(200,61,50,0.28)] transition-all hover:bg-[var(--hs-accent-strong)] hover:shadow-[0_16px_34px_rgba(200,61,50,0.34)] active:scale-[0.98]"
              >
                <Link href={sampleReportPageHref}>
                  View sample report page
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                className="h-11 rounded-md border-white/15 bg-transparent px-6 text-sm font-bold text-slate-200 shadow-none transition-all hover:bg-white hover:text-slate-950 hover:shadow-md active:scale-[0.98]"
                variant="outline"
              >
                <SampleReportDownloadLink
                  ctaLocation="homepage_sample_report_section"
                  href={reportHref}
                >
                  <FileDown className="size-4" aria-hidden />
                  Download PDF (520 KB)
                </SampleReportDownloadLink>
              </Button>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6" delayMs={120}>
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -right-2 top-4 h-full w-full rounded-lg border border-white/10 bg-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.28)]" aria-hidden />
              <div className="hs-report-mockup relative overflow-hidden rounded-lg border border-white/15 bg-white p-3 text-[var(--hs-text)] shadow-[0_28px_80px_rgba(0,0,0,0.34)]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                  <Image
                    alt="Inspection report pages with defect photos, checklist, barcode labels, and red pen"
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    src={reportImage}
                  />
                </div>
                <div className="grid gap-3 p-3 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <p className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">Decision note</p>
                    <p className="mt-1 text-xl font-extrabold">Wait before paying the balance.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    {['Label evidence', 'Carton check', 'Scope limits'].map((tag) => (
                      <span className="rounded-full border border-[#E5E7EB] bg-[#F3F4F6] px-2.5 py-1 text-xs font-extrabold text-[#4B5563]" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mx-3 mb-3 flex items-center gap-2 rounded-md border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-3 text-sm font-bold text-[var(--hs-muted)]">
                  <ClipboardCheck className="size-4 shrink-0 text-[var(--hs-blue-gray)]" aria-hidden />
                  Photo-backed evidence for the next buyer decision.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-white">
        <div className="hs-container hs-section grid items-center gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-lg border border-[var(--hs-border)] bg-slate-100 shadow-[var(--hs-shadow-md)]">
              <div className="relative aspect-[4/3]">
                <Image
                  alt="Agent Huang onsite in a warehouse with cartons and inspection clipboard"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  src={agentImage}
                />
              </div>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delayMs={120}>
            <p className="hs-eyebrow">A real person on the China side</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-4xl">
              Send the supplier link before you send money.
            </h2>
            <p className="mt-4 max-w-[640px] text-base leading-[1.65] text-[#374151]">
              Send the supplier link, quote, order details, or deadline. Agent Huang checks
              the context from the China side and suggests a practical next step before you
              commit.
            </p>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {process.map((step, index) => (
                <li className="flex gap-3 rounded-md border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-3 text-sm font-semibold leading-[1.55] text-[var(--hs-muted)] shadow-[var(--hs-shadow-sm)]" key={step}>
                  <span className="font-extrabold text-[var(--hs-blue-gray)]">{String(index + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-[var(--hs-bg)]" id="proof">
        <div className="hs-container pt-[var(--hs-section-y-sm)] pb-8 sm:pb-10 lg:pb-11">
          <Reveal className="max-w-[680px]">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-4xl">
              Buyer feedback from practical cases.
            </h2>
            <p className="mt-4 text-base leading-[1.65] text-[#374151]">
              Short, specific outcomes from buyers who needed supplier checks, sample comparison, or pre-shipment evidence.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Reveal
                as="article"
                className="hs-card hs-card-hover bg-white p-5"
                key={review.buyerProfile}
                staggerIndex={index}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        aria-label={review.country}
                        className="text-lg leading-none"
                        role="img"
                      >
                        {review.flag}
                      </span>
                      <p className="font-extrabold text-[var(--hs-text)]">
                        {review.buyerProfile}
                      </p>
                    </div>
                    <p className="mt-1 text-sm font-semibold leading-5 text-[var(--hs-muted-soft)]">
                      {review.country} · {review.category}
                    </p>
                  </div>
                  <span className="rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-2 py-1 text-xs font-bold text-[#6B7280]">
                    Anonymized
                  </span>
                </div>
                <div className="mt-4 rounded-md border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-2">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#6B7280]">
                    Order context
                  </p>
                  <p className="mt-1 text-sm font-extrabold leading-5 text-[var(--hs-text)]">
                    {review.orderScope}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-[1.7] text-[#374151]">&ldquo;{review.message}&rdquo;</p>
                <p className="mt-4 rounded-md border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-extrabold text-[var(--hs-text)]">
                  {review.result}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-white" id="company-structure">
        <div className="hs-container py-[var(--hs-section-y-sm)]">
          <Reveal className="max-w-4xl">
            <p className="hs-eyebrow">Trust / Company Structure</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-4xl">
              UK-registered. China-side operated. Buyer-side aligned.
            </h2>
            <p className="hs-muted mt-4 max-w-[680px] text-base leading-[1.65]">
              Huang Sourcing is operated by Huang Sourcing Ltd, a company
              registered in England and Wales. International buyers work with a
              clear legal business entity, while supplier checks, QC inspection,
              sample handling, and shipment-prep support are carried out from
              the China side.
            </p>
          </Reveal>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {companyStructureCards.map(({ title, body, Icon }, index) => (
              <Reveal
                as="article"
                className="hs-card hs-card-hover bg-[var(--hs-bg-soft)] p-4"
                key={title}
                staggerIndex={index}
              >
                <div className="flex size-10 items-center justify-center rounded-md bg-white text-[var(--hs-blue-gray)] shadow-[var(--hs-shadow-sm)]">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-extrabold leading-6 text-[var(--hs-text)]">
                  {title}
                </h3>
                <p className="hs-muted mt-2 text-sm leading-[1.65]">
                  {body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
