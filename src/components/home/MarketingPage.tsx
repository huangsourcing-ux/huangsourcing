import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  Barcode,
  Check,
  ClipboardCheck,
  FileDown,
  FileText,
  PackageCheck,
  Search,
  ShieldCheck,
  Truck,
  XCircle,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { HomeHeroCtas } from '@/components/home/HomeHeroCtas'
import { HomeServiceDetails } from '@/components/home/HomeServiceDetails'
import { JsonLd } from '@/components/seo/JsonLd'
import { Reveal } from '@/components/site/Reveal'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
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
  risk: string
  service: string
  href: string
  Icon: LucideIcon
}

type DetailService = ServiceCard & {
  bestFor: string
}

type Review = {
  name: string
  country: string
  category: string
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
    risk: 'Supplier identity, factory signals, and payment pressure need checking before money leaves your account.',
    service: 'Free Risk Check + Supplier Verification',
    href: '/before-deposit-china-supplier-check',
    Icon: ShieldCheck,
  },
  {
    phase: 'Before Supplier Selection',
    ctaLabel: 'Compare samples before choosing supplier',
    risk: 'Samples can look similar until packaging, finish, supplier consistency, and freight waste are visible together.',
    service: 'Sample Consolidation',
    href: '/compare-china-supplier-samples',
    Icon: Search,
  },
  {
    phase: 'Before Balance Payment',
    ctaLabel: 'Inspect goods before paying balance',
    risk: 'Finished goods may still have defects, label mistakes, missing cartons, or rushed packing issues.',
    service: 'QC Inspection',
    href: '/before-balance-payment-qc-china',
    Icon: PackageCheck,
  },
  {
    phase: 'Before Pickup',
    ctaLabel: 'Check cartons before forwarder pickup',
    risk: 'Cartons, counts, shipping marks, and pickup readiness may not match the supplier claim.',
    service: 'Pre-Shipment Inspection',
    href: '/before-forwarder-pickup-inspection-china',
    Icon: Truck,
  },
  {
    phase: 'Before FBA Shipment',
    ctaLabel: 'Check FNSKU and carton labels',
    risk: 'FNSKU labels, carton marks, SKU separation, and shipment-plan evidence need one last China-side check.',
    service: 'Amazon FBA Prep',
    href: '/before-amazon-fba-shipment-china',
    Icon: Barcode,
  },
]

const trustChips = [
  'Buyer-aligned',
  'Evidence-first',
  'China-side',
  'No supplier-paid recommendations',
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
    price: 'From $249',
    bestFor: 'New vendors, high deposit orders, or suppliers found through marketplaces.',
    deliverables: ['Factory / trader review', 'Company background review', 'Buyer-side risk summary'],
  },
  {
    title: 'Sample consolidation',
    summary: 'Send samples to one China-side hub before paying international freight.',
    price: 'From $99 + freight',
    bestFor: 'Buyers comparing samples from two or more suppliers.',
    deliverables: ['Unboxing photos or video', 'Side-by-side sample notes', 'Consolidated outbound shipment'],
  },
  {
    title: 'QC inspection',
    summary: 'Onsite product, packaging, and quantity checks before final payment.',
    price: 'From $299 / inspector day',
    bestFor: 'Pre-shipment inspections and orders where defects would hurt margin or reviews.',
    deliverables: ['Photo evidence', 'AQL-style defect list', 'Same-day issue escalation'],
  },
  {
    title: 'FBA prep and logistics',
    summary: 'China-side prep for ecommerce shipments that need labels, packaging, and coordination.',
    price: 'Custom quote',
    bestFor: 'Amazon, Walmart, DDP, private label, or multi-SKU shipments.',
    deliverables: ['Label and packaging coordination', 'Carton / SKU checks', 'Pickup / shipment coordination'],
  },
]

const trustPoints = [
  {
    title: 'No supplier-paid recommendations',
    body: 'The service fee comes from the buyer, so supplier suggestions stay aligned with your order.',
  },
  {
    title: 'No factory-paid ranking',
    body: 'Suppliers do not pay to appear better. If a risk shows up, it goes into the report.',
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
  'We do not make supplier-paid recommendations',
]

const process = ['Send supplier or order context', 'Agent Huang checks the risk', 'Go onsite if needed', 'You decide before payment or shipment']

const reviews: Review[] = [
  {
    name: 'David R.',
    country: 'United States',
    category: 'Home hardware',
    message:
      'Agent Huang checked packaging and carton-label photos before we paid the balance. One carton label was wrong, so we asked the supplier to fix it before pickup.',
    result: 'Balance payment protected',
  },
  {
    name: 'Sophie M.',
    country: 'Germany',
    category: 'Consumer electronics',
    message:
      'The factory said the order was ready for pickup. The onsite check showed missing cartons and mixed labels, so we delayed collection until the count matched the packing list.',
    result: 'Delay caught before pickup',
  },
  {
    name: 'Marcus T.',
    country: 'Australia',
    category: 'Private-label goods',
    message:
      'We had four suppliers with similar quotes. Agent Huang compared samples, MOQ details, and factory risk notes, then showed why one supplier was safer for the first order.',
    result: 'Supplier shortlist reduced from 4 to 1',
  },
]

export function MarketingPage() {
  const homeJsonLd = makeHomeJsonLd()

  return (
    <main className="hs-page min-h-screen overflow-x-hidden antialiased">
      <SiteHeader
        activePage="home"
        topBanner="China-side sourcing, supplier checks, QC inspection, and shipment prep — aligned with the buyer."
      />
      <JsonLd data={homeJsonLd} />

      <section className="relative overflow-hidden border-b border-[var(--hs-border)] bg-[radial-gradient(circle_at_76%_18%,rgba(200,61,50,0.12),transparent_25rem),radial-gradient(circle_at_16%_4%,rgba(17,24,39,0.08),transparent_20rem),linear-gradient(180deg,#fffdf9_0%,#f4f0e8_100%)]">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(247,245,241,0.82))]"
          aria-hidden
        />
        <div className="hs-container relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-12 lg:py-20">
          <Reveal className="min-w-0 lg:col-span-6">
            <p className="hs-eyebrow max-w-full break-words">
              Sourcing · Supplier verification · QC inspection · Sample consolidation · FBA prep
            </p>
            <h1 className="mt-4 max-w-[22rem] break-words text-balance text-[2.05rem] font-extrabold leading-[1.08] tracking-tight text-[var(--hs-text)] sm:max-w-full sm:text-5xl lg:text-[3.45rem]">
              Buyer-side China sourcing support before payment, pickup, or shipment.
            </h1>
            <p className="hs-muted mt-5 max-w-[22rem] break-words text-[15px] leading-7 sm:max-w-2xl sm:text-lg sm:leading-8">
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
                  <Check className="size-3.5 text-[var(--hs-accent)]" aria-hidden />
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 border-y border-[var(--hs-border)] py-5 sm:grid-cols-3">
              <div className="rounded-md bg-white/45 p-3 ring-1 ring-black/[0.03]">
                <p className="text-2xl font-extrabold text-[var(--hs-text)]">10+ yrs</p>
                <p className="mt-1 text-xs font-semibold leading-tight text-[var(--hs-muted)]">China supply-chain experience</p>
              </div>
              <div className="rounded-md bg-white/45 p-3 ring-1 ring-black/[0.03]">
                <p className="text-2xl font-extrabold text-[var(--hs-text)]">24h</p>
                <p className="mt-1 text-xs font-semibold leading-tight text-[var(--hs-muted)]">Standard reply target</p>
              </div>
              <div className="rounded-md bg-white/45 p-3 ring-1 ring-black/[0.03]">
                <p className="text-2xl font-extrabold text-[var(--hs-text)]">Buyer-aligned</p>
                <p className="mt-1 text-xs font-semibold leading-tight text-[var(--hs-muted)]">No supplier-paid recommendations.</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delayMs={120}>
            <div className="relative mx-auto max-w-xl lg:ml-auto">
              <div className="absolute -left-4 top-10 hidden h-64 w-32 rounded-lg border border-white/60 bg-white/45 shadow-[var(--hs-shadow-md)] backdrop-blur sm:block" aria-hidden />
              <div className="absolute -bottom-5 right-4 hidden h-24 w-52 rounded-lg border border-[var(--hs-border)] bg-[var(--hs-accent-soft)] shadow-[var(--hs-shadow-sm)] sm:block" aria-hidden />
              <div className="hs-report-mockup hs-card relative overflow-hidden bg-white p-4 shadow-[var(--hs-shadow-lg)] sm:p-5 motion-safe:animate-[hs-report-float_6s_ease-in-out_infinite]">
                <div className="rounded-md border border-[var(--hs-border)] bg-[linear-gradient(180deg,#fff_0%,#fffaf4_100%)] p-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">China-side risk checklist</p>
                      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[var(--hs-text)]">
                        Inspection decision brief
                      </h2>
                    </div>
                    <span className="rounded-full bg-[var(--hs-accent-soft)] px-3 py-1 text-xs font-extrabold text-[var(--hs-accent-strong)]">
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
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-4xl">
              Choose your current sourcing risk point.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              You do not need to know the service category first. Pick the stage before
              your next deposit, supplier decision, balance payment, pickup, or FBA shipment.
            </p>
          </Reveal>

          <div className="relative mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <div className="absolute left-8 right-8 top-[4.25rem] hidden h-px bg-gradient-to-r from-transparent via-[var(--hs-border-strong)] to-transparent xl:block" aria-hidden />
            {riskStages.map((stage, index) => (
              <Reveal
                as="article"
                className="group relative z-10 flex min-h-[320px] flex-col rounded-lg border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--hs-accent)] hover:shadow-[var(--hs-shadow-md)]"
                key={stage.phase}
                staggerIndex={index}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex size-10 items-center justify-center rounded-md bg-[var(--hs-navy)] text-white shadow-[var(--hs-shadow-sm)]">
                    <stage.Icon className="size-5" aria-hidden />
                  </div>
                  <span className="rounded-full bg-[var(--hs-accent-soft)] px-2.5 py-1 text-xs font-extrabold text-[var(--hs-accent-strong)] transition-transform duration-300 group-hover:scale-105">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-5 text-xs font-extrabold leading-5 text-[var(--hs-accent)]">Customer stage</p>
                <h3 className="mt-1 text-xl font-extrabold leading-6 text-[var(--hs-text)]">{stage.phase}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-[var(--hs-muted)]">{stage.risk}</p>
                <div className="mt-5 rounded-md border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-3">
                  <p className="text-xs font-extrabold text-[var(--hs-muted-soft)]">Corresponding service</p>
                  <p className="mt-1 text-sm font-extrabold leading-5 text-[var(--hs-text)]">{stage.service}</p>
                </div>
                <Button
                  asChild
                  className="mt-auto h-auto min-h-11 w-full whitespace-normal rounded-md bg-[var(--hs-navy)] px-3 py-2 text-sm font-extrabold leading-5 text-white shadow-[var(--hs-shadow-sm)] transition-all hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] active:scale-[0.98]"
                  size="default"
                  variant="default"
                >
                  <Link href={stage.href}>
                    <span className="min-w-0 flex-1 text-left">{stage.ctaLabel}</span>
                    <ArrowRight className="size-4 shrink-0" aria-hidden />
                  </Link>
                </Button>
              </Reveal>
            ))}
          </div>

          <HomeServiceDetails services={detailServices} />
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-[var(--hs-bg-soft)]" id="scope">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Clear buyer-side boundaries</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-4xl">
              What we help you check, and what we do not promise.
            </h2>
            <p className="hs-muted mt-4 text-base leading-7">
              Huang Sourcing reduces sourcing uncertainty with practical China-side evidence,
              while keeping the limits of each check clear before you decide.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-8 lg:grid-cols-2">
            <Reveal className="hs-card p-6">
              <div className="h-1 w-20 rounded-full bg-[var(--hs-accent)]" />
              <h3 className="mt-5 text-xl font-extrabold text-[var(--hs-text)]">What we help you check</h3>
              <ul className="mt-5 grid gap-3">
                {scopeChecks.map((item) => (
                  <li className="flex gap-3 border-b border-[var(--hs-border)] pb-3 text-sm font-semibold leading-6 text-[var(--hs-muted)] last:border-0 last:pb-0" key={item}>
                    <Check className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="hs-card p-6" delayMs={100}>
              <div className="h-1 w-20 rounded-full bg-[var(--hs-navy)]" />
              <h3 className="mt-5 text-xl font-extrabold text-[var(--hs-text)]">What we do not promise</h3>
              <ul className="mt-5 grid gap-3">
                {scopeLimits.map((item) => (
                  <li className="flex gap-3 border-b border-[var(--hs-border)] pb-3 text-sm font-semibold leading-6 text-[var(--hs-muted)] last:border-0 last:pb-0" key={item}>
                    <XCircle className="mt-0.5 size-4 shrink-0 text-slate-500" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-white" id="integrity">
        <div className="hs-container hs-section grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="hs-eyebrow">Buyer-aligned by design</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-4xl">
              Paid by the buyer. Not by the factory.
            </h2>
            <p className="hs-muted mt-4 text-base leading-7">
              Some platforms earn money from supplier exposure. Huang Sourcing is different:
              our service fee comes from the buyer, so recommendations stay aligned with your order.
            </p>
          </Reveal>
          <div className="grid gap-3 lg:col-span-7">
            {trustPoints.map((point, index) => (
              <Reveal
                as="article"
                className="hs-card hs-card-hover flex gap-4 bg-[var(--hs-bg-soft)] p-5"
                key={point.title}
                staggerIndex={index}
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-white text-[var(--hs-accent)] shadow-[var(--hs-shadow-sm)]">
                  <ShieldCheck className="size-5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-extrabold text-[var(--hs-text)]">{point.title}</h3>
                  <p className="hs-muted mt-1 text-sm leading-6">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-[var(--hs-navy)] text-white">
        <div className="hs-container hs-section grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="text-sm font-extrabold text-red-200">Sample report</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              See the report logic before you download the PDF.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              The sample report page shows the decision note, packaging and label evidence,
              next-step recommendations, and the limits the report does not claim.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              {['Recommended decision note', 'Packaging and label evidence', 'Next-step recommendations', 'Honest scope limits'].map((item) => (
                <li className="flex gap-2" key={item}>
                  <Check className="mt-0.5 size-4 shrink-0 text-red-300" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-11 rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98]"
              >
                <Link href={sampleReportPageHref}>
                  View sample report page
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                className="h-11 rounded-md border-white/20 bg-transparent px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-white hover:text-slate-950 hover:shadow-md active:scale-[0.98]"
                variant="outline"
              >
                <a download href={reportHref}>
                  <FileDown className="size-4" aria-hidden />
                  Download PDF (520 KB)
                </a>
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
                      <span className="rounded-full bg-[var(--hs-accent-soft)] px-2.5 py-1 text-xs font-extrabold text-[var(--hs-accent-strong)]" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mx-3 mb-3 flex items-center gap-2 rounded-md border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-3 text-sm font-bold text-[var(--hs-muted)]">
                  <ClipboardCheck className="size-4 shrink-0 text-[var(--hs-accent)]" aria-hidden />
                  Photo-backed evidence for the next buyer decision.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-white">
        <div className="hs-container hs-section grid items-center gap-10 lg:grid-cols-12">
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
              Talk to Agent Huang before you send money.
            </h2>
            <p className="hs-muted mt-4 text-base leading-7">
              I work on the China side for overseas buyers who need someone to check suppliers,
              compare quotes, inspect products, and communicate with factories before they commit.
            </p>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {process.map((step, index) => (
                <li className="flex gap-3 rounded-md border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-3 text-sm font-semibold text-[var(--hs-muted)] shadow-[var(--hs-shadow-sm)]" key={step}>
                  <span className="font-extrabold text-[var(--hs-accent)]">{String(index + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-[var(--hs-bg)]" id="proof">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-4xl">
              Buyer feedback from practical cases.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Short, specific outcomes from buyers who needed supplier checks, sample comparison, or pre-shipment evidence.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Reveal
                as="article"
                className="hs-card hs-card-hover bg-white p-5"
                key={review.name}
                staggerIndex={index}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-extrabold text-[var(--hs-text)]">{review.name}</p>
                    <p className="text-sm text-[var(--hs-muted-soft)]">
                      {review.country} · {review.category}
                    </p>
                  </div>
                  <span className="rounded-full bg-[var(--hs-accent-soft)] px-2 py-1 text-xs font-extrabold text-[var(--hs-accent-strong)]">
                    Buyer case
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--hs-muted)]">&ldquo;{review.message}&rdquo;</p>
                <p className="mt-4 border-t border-[var(--hs-border)] pt-4 text-sm font-extrabold text-[var(--hs-accent)]">
                  {review.result}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--hs-bg-soft)]">
        <div className="hs-container hs-section">
          <Reveal className="hs-cta-band px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="relative">
              <h2 className="text-3xl font-extrabold tracking-tight">Need someone to check a supplier this week?</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send the supplier name, product, factory location, order value, and deadline.
                Agent Huang will suggest the safest next step.
              </p>
            </div>
            <div className="relative mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <ContactAgentButton
                analyticsLabel="Talk to Agent Huang"
                analyticsLocation="home_final_cta"
                className="h-11 rounded-md bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] transition-all hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] active:scale-[0.98]"
                size="default"
                variant="default"
              >
                Talk to Agent Huang
              </ContactAgentButton>
              <Button
                asChild
                className="h-11 rounded-md border-white/20 bg-white px-6 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-all hover:bg-red-50 hover:text-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] active:scale-[0.98]"
                variant="outline"
              >
                <Link href={sampleReportPageHref}>
                  <FileText className="size-4" />
                  View sample report
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
