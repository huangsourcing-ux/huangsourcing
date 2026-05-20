import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  Barcode,
  ClipboardCheck,
  PackageCheck,
  Search,
  ShieldCheck,
  Truck,
} from 'lucide-react'
import Link from 'next/link'

import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import { servicePricingBySlug } from '@/lib/service-pricing'
import {
  chinaSourcingInspectionPricingHref,
  whatToSendBeforeChinaInspectionHref,
} from '@/lib/site-links'

type ServiceOverview = {
  title: string
  href: string
  stage: string
  startingPoint: string
  buyerFit: string
  summary: string
  Icon: LucideIcon
}

type StageChoice = {
  stage: string
  risk: string
  service: string
  href: string
}

type BuyerChoice = {
  type: string
  services: string
  href: string
}

const freeRiskHref = '/free-china-sourcing-risk-check'

const serviceOverviews: ServiceOverview[] = [
  {
    title: 'Free Sourcing Risk Check',
    href: freeRiskHref,
    stage: 'Before any paid scope',
    startingPoint: 'Free',
    buyerFit: 'New buyers, urgent questions, early risk triage',
    Icon: ShieldCheck,
    summary:
      'Start here when you are unsure which China-side check you need. Send the supplier link, quote, product, order stage, deadline, and the decision you are trying to make. Huang Sourcing reviews the visible risk and suggests the safest next step: supplier verification, sample consolidation, QC inspection, pre-shipment inspection, FBA prep, or simply asking better questions before sending money. This first check is not a full audit or legal review. It is a practical triage step for overseas buyers who need quick clarity before deposit payment, supplier selection, balance payment, pickup, or shipment release. It also helps prevent overbuying services too early: if a simple desk check is enough, you will know; if onsite evidence is needed, you will understand why.',
  },
  {
    title: 'Supplier Verification China',
    href: '/supplier-verification-china',
    stage: 'Before deposit',
    startingPoint: servicePricingBySlug['supplier-verification-china'].startingPoint,
    buyerFit: 'Buyers checking a new factory, trader, quote, or company identity',
    Icon: Search,
    summary:
      'Supplier verification helps overseas buyers slow down before sending a deposit to a new Chinese supplier. The check focuses on visible supplier identity, factory or trader signals, company details, quote terms, MOQ, lead time, payment terms, and practical warning signs. It is useful when an Alibaba profile looks convincing but the company name, address, product range, or quote still feels unclear. The output is a buyer-side risk summary with go, caution, or stop guidance and specific questions to ask before payment. It can also show whether an onsite visit, deeper document review, or sample comparison should happen before you commit. The aim is clearer leverage before money leaves your account. It does not replace legal due diligence, certification review, or a full factory audit when those are required.',
  },
  {
    title: 'Sample Consolidation China',
    href: '/sample-consolidation-china',
    stage: 'Before supplier selection',
    startingPoint: servicePricingBySlug['sample-consolidation-china'].startingPoint,
    buyerFit: 'Buyers comparing samples from several suppliers',
    Icon: PackageCheck,
    summary:
      'Sample consolidation gives buyers one China-side hub for receiving samples from multiple suppliers before choosing who deserves a larger order. Suppliers send samples domestically, Huang Sourcing confirms receipt, captures unboxing photos or video, keeps supplier origins organized, and can provide basic side-by-side notes before forwarding everything together. This reduces repeated international freight cost and helps catch obvious sample issues early. It is especially useful for ecommerce and private-label buyers comparing quality, finish, packaging, supplier consistency, and whether a sample is worth shipping overseas at all. The service can support supplier shortlisting before quote negotiation or verification and keep sample evidence traceable for later decisions. It is not a replacement for bulk production QC because mass production can differ from approved samples.',
  },
  {
    title: 'QC Inspection China',
    href: '/qc-inspection-china',
    stage: 'Before balance payment',
    startingPoint: servicePricingBySlug['qc-inspection-china'].startingPoint,
    buyerFit: 'Importers and sellers checking finished or nearly finished goods',
    Icon: ClipboardCheck,
    summary:
      'QC inspection is the main buyer-side checkpoint before final payment or shipment release. Huang Sourcing checks sampled goods onsite for visible product condition, quantity signals, simple function when scoped, packaging, labels, carton marks, barcodes, and shipment readiness. The report gives photo evidence, defect notes, and practical decision support so the buyer can approve, hold payment, request rework, or schedule a follow-up check. This service is strongest when defects, wrong packaging, mixed labels, incomplete cartons, or rushed factory claims would create margin loss, returns, or bad reviews after international freight is paid. It gives you evidence to discuss corrections with the supplier while goods are still in China. It is not lab testing, certification review, or a legal compliance guarantee for importers.',
  },
  {
    title: 'China Pre-Shipment Inspection',
    href: '/china-pre-shipment-inspection',
    stage: 'Before pickup',
    startingPoint: servicePricingBySlug['china-pre-shipment-inspection'].startingPoint,
    buyerFit: 'Buyers releasing goods to a forwarder or paying the final balance',
    Icon: Truck,
    summary:
      'Pre-shipment inspection focuses on the final release decision before goods leave the supplier. Use it when production is mostly finished, cartons are packed, the supplier says the shipment is ready, or the forwarder is about to collect. Huang Sourcing checks visible goods, cartons, packing condition, labels, shipping marks, packing-list signals, and issues that should be corrected before pickup. The goal is to help the buyer decide whether to release balance payment, approve pickup, delay collection, or request correction. This is especially useful when the supplier is pushing for fast release but the buyer has not seen enough carton or label evidence from China. It cannot guarantee hidden defects, future transit damage, or compliance issues outside the agreed inspection scope afterward.',
  },
  {
    title: 'Amazon FBA Prep China',
    href: '/amazon-fba-prep-china',
    stage: 'Before FBA shipment',
    startingPoint: servicePricingBySlug['amazon-fba-prep-china'].startingPoint,
    buyerFit: 'Amazon sellers and private-label brands shipping from China',
    Icon: Barcode,
    summary:
      'Amazon FBA prep support is for sellers who need China-side evidence before cartons leave for fulfillment. The scope can include FNSKU checks, carton labels, basic label placement, SKU separation, carton condition, packaging details, shipment-plan match, and coordination with suppliers or forwarders. It is useful when mixed SKUs, missing labels, wrong carton marks, supplier packing mistakes, or rushed pickup could create receiving problems or costly delays. Huang Sourcing can help confirm visible readiness, document issues before export, and show whether the supplier should correct labels or packing before the forwarder collects. It supports operational prep in China with photo-backed checks before shipment release. It does not guarantee Amazon receiving approval, listing approval, marketplace compliance, product safety testing, or final FBA acceptance.',
  },
]

const stageChoices: StageChoice[] = [
  {
    stage: 'Before deposit',
    risk: 'Supplier identity, trader/factory signals, quote terms, payment pressure',
    service: 'Free Risk Check + Supplier Verification',
    href: '/before-deposit-china-supplier-check',
  },
  {
    stage: 'Before supplier selection',
    risk: 'Several samples, unclear quality differences, freight waste',
    service: 'Sample Consolidation',
    href: '/compare-china-supplier-samples',
  },
  {
    stage: 'Before balance payment',
    risk: 'Finished goods may have defects, label mistakes, or packaging issues',
    service: 'QC Inspection',
    href: '/before-balance-payment-qc-china',
  },
  {
    stage: 'Before pickup',
    risk: 'Cartons, counts, labels, or shipment readiness may not match supplier claims',
    service: 'Pre-Shipment Inspection',
    href: '/before-forwarder-pickup-inspection-china',
  },
  {
    stage: 'Before FBA shipment',
    risk: 'FNSKU, carton labels, SKU separation, or prep evidence may be missing',
    service: 'Amazon FBA Prep',
    href: '/before-amazon-fba-shipment-china',
  },
]

const buyerChoices: BuyerChoice[] = [
  {
    type: 'First-time China buyers',
    services: 'Free Risk Check, Supplier Verification, QC Inspection',
    href: freeRiskHref,
  },
  {
    type: 'Amazon and ecommerce sellers',
    services: 'Sample Consolidation, QC Inspection, Amazon FBA Prep',
    href: '/amazon-fba-prep-china',
  },
  {
    type: 'Importers placing repeat orders',
    services: 'QC Inspection, Pre-Shipment Inspection',
    href: '/qc-inspection-china',
  },
  {
    type: 'Private-label brands',
    services: 'Supplier Verification, Sample Consolidation, FBA Prep',
    href: '/sample-consolidation-china',
  },
  {
    type: 'Small teams without China staff',
    services: 'Free Risk Check, Supplier Verification, Pre-Shipment Inspection',
    href: '/supplier-verification-china',
  },
  {
    type: 'Buyers under payment or pickup pressure',
    services: 'QC Inspection, Pre-Shipment Inspection, Free Risk Check',
    href: '/china-pre-shipment-inspection',
  },
]

export function ChinaSourcingServicesPage() {
  return (
    <main className="hs-page min-h-screen overflow-x-hidden antialiased">
      <SiteHeader activePage="service" topBanner={null} />
      <SiteBreadcrumbs items={[{ label: 'China sourcing services' }]} />

      <section className="relative overflow-hidden border-b border-[var(--hs-border)] bg-[radial-gradient(circle_at_82%_6%,rgba(200,61,50,0.12),transparent_24rem),linear-gradient(180deg,#fffdf9_0%,#f4f0e8_100%)]">
        <div className="hs-container relative py-10 sm:py-14 lg:py-16">
          <Reveal>
            <p className="hs-eyebrow">China sourcing services</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-5xl">
            Buyer-side China sourcing support by risk stage.
            </h1>
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
            Huang Sourcing helps overseas buyers choose the right China-side check
            before deposit, supplier selection, balance payment, pickup, or FBA shipment.
            Start with a free risk check, then add the service that matches the decision in front of you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-md bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-md)] transition-all hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-lg)] active:scale-[0.98] sm:px-8"
                size="lg"
                variant="default"
              >
                <Link href={freeRiskHref}>
                  Start with Free Sourcing Risk Check
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                className="h-12 rounded-md border-[var(--hs-border)] bg-white/80 px-6 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] backdrop-blur transition-all hover:border-[var(--hs-accent)] hover:bg-white hover:text-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] active:scale-[0.98] sm:px-8"
                size="lg"
                variant="outline"
              >
                <a href="#services-overview">Compare all services</a>
              </Button>
              <Button
                asChild
                className="h-12 rounded-md border-[var(--hs-border)] bg-white/80 px-6 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] backdrop-blur transition-all hover:border-[var(--hs-accent)] hover:bg-white hover:text-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] active:scale-[0.98] sm:px-8"
                size="lg"
                variant="outline"
              >
                <Link href={chinaSourcingInspectionPricingHref}>
                  View pricing guide
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-white" id="services-overview">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Services overview
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Use this overview to understand where each service fits in the sourcing process.
            </p>
          </Reveal>

          <Reveal className="hs-card mt-6 bg-[var(--hs-card-warm)] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">
                Before asking for a quote
              </p>
              <p className="mt-2 text-base font-extrabold text-[var(--hs-text)]">
                Prepare supplier, product, label, packing, and deadline details first.
              </p>
              <p className="hs-muted mt-2 text-sm leading-6">
                Complete files help Huang Sourcing scope supplier verification, QC,
                pre-shipment inspection, FBA prep, or sample consolidation faster.
              </p>
            </div>
            <Link
              className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-md bg-[var(--hs-navy)] px-4 text-sm font-extrabold text-white transition-all hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] sm:mt-0"
              href={whatToSendBeforeChinaInspectionHref}
            >
              Prepare booking files
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceOverviews.map((service, index) => (
              <Reveal
                as="article"
                className="hs-card hs-card-hover flex min-h-[260px] flex-col bg-[var(--hs-card-warm)] p-5"
                key={service.title}
                staggerIndex={index}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-11 items-center justify-center rounded-md bg-[var(--hs-navy)] text-white shadow-[var(--hs-shadow-sm)]">
                    <service.Icon className="size-5" aria-hidden />
                  </div>
                  <span className="rounded-full bg-[var(--hs-accent-soft)] px-3 py-1 text-xs font-extrabold text-[var(--hs-accent-strong)]">
                    {service.stage}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold leading-6 text-[var(--hs-text)]">{service.title}</h3>
                <dl className="mt-4 grid gap-3 border-t border-[var(--hs-border)] pt-4">
                  <div>
                    <dt className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">
                      Starting point
                    </dt>
                    <dd className="mt-1 text-sm font-extrabold text-[var(--hs-accent)]">
                      {service.startingPoint}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">
                      Buyer fit
                    </dt>
                    <dd className="mt-1 text-sm font-semibold leading-6 text-[var(--hs-muted)]">
                      {service.buyerFit}
                    </dd>
                  </div>
                </dl>
                <Link
                  className="mt-auto inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md bg-[var(--hs-navy)] px-4 text-sm font-extrabold text-white transition-all hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)]"
                  href={service.href}
                >
                  Open service page
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 hidden overflow-x-auto rounded-lg border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)] md:block">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <thead className="bg-[var(--hs-bg-soft)] text-xs uppercase text-[var(--hs-muted-soft)]">
                <tr>
                  <th className="border-b border-[var(--hs-border)] px-4 py-3">Service</th>
                  <th className="border-b border-[var(--hs-border)] px-4 py-3">Best stage</th>
                  <th className="border-b border-[var(--hs-border)] px-4 py-3">Starting point</th>
                  <th className="border-b border-[var(--hs-border)] px-4 py-3">Buyer fit</th>
                </tr>
              </thead>
              <tbody>
                {serviceOverviews.map((service) => (
                  <tr className="align-top transition-colors hover:bg-[var(--hs-bg-soft)]" key={service.title}>
                    <td className="border-b border-[var(--hs-border)] px-4 py-4">
                      <Link className="font-extrabold text-[var(--hs-text)] hover:text-[var(--hs-accent)]" href={service.href}>
                        {service.title}
                      </Link>
                    </td>
                    <td className="border-b border-[var(--hs-border)] px-4 py-4 font-semibold text-[var(--hs-muted)]">
                      {service.stage}
                    </td>
                    <td className="border-b border-[var(--hs-border)] px-4 py-4 font-extrabold text-[var(--hs-accent)]">
                      {service.startingPoint}
                    </td>
                    <td className="border-b border-[var(--hs-border)] px-4 py-4 leading-6 text-[var(--hs-muted)]">
                      {service.buyerFit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-[var(--hs-bg)]">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Choose by sourcing stage</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Match the service to the next decision you need to make.
            </h2>
          </Reveal>
          <div className="grid gap-3 lg:col-span-8">
            {stageChoices.map((choice, index) => (
              <Reveal
                key={choice.stage}
                staggerIndex={index}
              >
                <Link
                  className="group grid gap-3 rounded-lg border border-[var(--hs-border)] bg-white p-4 shadow-[var(--hs-shadow-sm)] transition-all hover:-translate-y-0.5 hover:border-[var(--hs-accent)] hover:shadow-[var(--hs-shadow-md)] sm:grid-cols-[auto_1fr_auto]"
                  href={choice.href}
                >
                  <span className="flex size-9 items-center justify-center rounded-md bg-[var(--hs-navy)] text-sm font-extrabold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className="block text-base font-extrabold text-[var(--hs-text)]">{choice.stage}</span>
                    <span className="mt-1 block text-sm leading-6 text-[var(--hs-muted)]">{choice.risk}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-extrabold text-[var(--hs-accent)]">
                    {choice.service}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-white">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Choose by buyer type</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Different buyers need different checkpoints.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {buyerChoices.map((choice, index) => (
              <Reveal
                key={choice.type}
                staggerIndex={index}
              >
                <Link
                  className="group block rounded-lg border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 shadow-[var(--hs-shadow-sm)] transition-all hover:-translate-y-1 hover:border-[var(--hs-accent)] hover:bg-white hover:shadow-[var(--hs-shadow-md)]"
                  href={choice.href}
                >
                  <h3 className="text-lg font-extrabold text-[var(--hs-text)]">{choice.type}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[var(--hs-muted)]">
                    Recommended: {choice.services}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--hs-accent)]">
                    View service path
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-[var(--hs-bg-soft)]">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Service details</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Six practical ways to reduce China sourcing risk.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {serviceOverviews.map((service, index) => (
              <Reveal
                as="article"
                className="hs-card hs-card-hover bg-white p-6"
                key={service.title}
                staggerIndex={index}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-11 items-center justify-center rounded-md bg-[var(--hs-navy)] text-white">
                    <service.Icon className="size-5" aria-hidden />
                  </div>
                  <span className="rounded-full bg-[var(--hs-accent-soft)] px-3 py-1 text-xs font-extrabold text-[var(--hs-accent-strong)]">
                    {service.stage}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-[var(--hs-text)]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--hs-muted)]">{service.summary}</p>
                <Link
                  className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--hs-accent)] transition-colors hover:text-[var(--hs-accent-strong)]"
                  href={service.href}
                >
                  Open service page
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="hs-container hs-section">
          <Reveal className="hs-cta-band px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="relative">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Not sure which service fits your order?
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send your supplier, product, order stage, and deadline. The first step is a free risk check.
              </p>
            </div>
            <Button
              asChild
              className="relative mt-7 h-11 rounded-md bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] transition-all hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] active:scale-[0.98] lg:mt-0"
              variant="default"
            >
              <Link href={freeRiskHref}>
                Start with Free Sourcing Risk Check
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
