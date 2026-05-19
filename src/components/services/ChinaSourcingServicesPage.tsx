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

import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'

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
    startingPoint: 'From $249',
    buyerFit: 'Buyers checking a new factory, trader, quote, or company identity',
    Icon: Search,
    summary:
      'Supplier verification helps overseas buyers slow down before sending a deposit to a new Chinese supplier. The check focuses on visible supplier identity, factory or trader signals, company details, quote terms, MOQ, lead time, payment terms, and practical warning signs. It is useful when an Alibaba profile looks convincing but the company name, address, product range, or quote still feels unclear. The output is a buyer-side risk summary with go, caution, or stop guidance and specific questions to ask before payment. It can also show whether an onsite visit, deeper document review, or sample comparison should happen before you commit. The aim is clearer leverage before money leaves your account. It does not replace legal due diligence, certification review, or a full factory audit when those are required.',
  },
  {
    title: 'Sample Consolidation China',
    href: '/sample-consolidation-china',
    stage: 'Before supplier selection',
    startingPoint: 'From $99 + freight',
    buyerFit: 'Buyers comparing samples from several suppliers',
    Icon: PackageCheck,
    summary:
      'Sample consolidation gives buyers one China-side hub for receiving samples from multiple suppliers before choosing who deserves a larger order. Suppliers send samples domestically, Huang Sourcing confirms receipt, captures unboxing photos or video, keeps supplier origins organized, and can provide basic side-by-side notes before forwarding everything together. This reduces repeated international freight cost and helps catch obvious sample issues early. It is especially useful for ecommerce and private-label buyers comparing quality, finish, packaging, supplier consistency, and whether a sample is worth shipping overseas at all. The service can support supplier shortlisting before quote negotiation or verification and keep sample evidence traceable for later decisions. It is not a replacement for bulk production QC because mass production can differ from approved samples.',
  },
  {
    title: 'QC Inspection China',
    href: '/qc-inspection-china',
    stage: 'Before balance payment',
    startingPoint: 'From $299 / inspector day',
    buyerFit: 'Importers and sellers checking finished or nearly finished goods',
    Icon: ClipboardCheck,
    summary:
      'QC inspection is the main buyer-side checkpoint before final payment or shipment release. Huang Sourcing checks sampled goods onsite for visible product condition, quantity signals, simple function when scoped, packaging, labels, carton marks, barcodes, and shipment readiness. The report gives photo evidence, defect notes, and practical decision support so the buyer can approve, hold payment, request rework, or schedule a follow-up check. This service is strongest when defects, wrong packaging, mixed labels, incomplete cartons, or rushed factory claims would create margin loss, returns, or bad reviews after international freight is paid. It gives you evidence to discuss corrections with the supplier while goods are still in China. It is not lab testing, certification review, or a legal compliance guarantee for importers.',
  },
  {
    title: 'China Pre-Shipment Inspection',
    href: '/china-pre-shipment-inspection',
    stage: 'Before pickup',
    startingPoint: 'From $299 / inspector day',
    buyerFit: 'Buyers releasing goods to a forwarder or paying the final balance',
    Icon: Truck,
    summary:
      'Pre-shipment inspection focuses on the final release decision before goods leave the supplier. Use it when production is mostly finished, cartons are packed, the supplier says the shipment is ready, or the forwarder is about to collect. Huang Sourcing checks visible goods, cartons, packing condition, labels, shipping marks, packing-list signals, and issues that should be corrected before pickup. The goal is to help the buyer decide whether to release balance payment, approve pickup, delay collection, or request correction. This is especially useful when the supplier is pushing for fast release but the buyer has not seen enough carton or label evidence from China. It cannot guarantee hidden defects, future transit damage, or compliance issues outside the agreed inspection scope afterward.',
  },
  {
    title: 'Amazon FBA Prep China',
    href: '/amazon-fba-prep-china',
    stage: 'Before FBA shipment',
    startingPoint: 'Custom quote',
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
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950 antialiased">
      <SiteHeader activePage="service" topBanner={null} />
      <SiteBreadcrumbs items={[{ label: 'China sourcing services' }]} />

      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#fbfcfd_0%,#f5f7f8_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
          <p className="text-sm font-semibold text-red-600">China sourcing services</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Buyer-side China sourcing support by risk stage.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Huang Sourcing helps overseas buyers choose the right China-side check
            before deposit, supplier selection, balance payment, pickup, or FBA shipment.
            Start with a free risk check, then add the service that matches the decision in front of you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98] sm:px-8"
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
              className="h-12 rounded-md border-slate-300 bg-white px-6 text-sm font-bold text-slate-900 shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-700 hover:shadow-md active:scale-[0.98] sm:px-8"
              size="lg"
              variant="outline"
            >
              <a href="#services-overview">Compare all services</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white" id="services-overview">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Services overview table
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Use this table to understand where each service fits in the sourcing process.
            </p>
          </div>
          <div className="mt-7 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
            <table className="min-w-[860px] w-full border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="border-b border-slate-200 px-4 py-3">Service</th>
                  <th className="border-b border-slate-200 px-4 py-3">Best stage</th>
                  <th className="border-b border-slate-200 px-4 py-3">Starting point</th>
                  <th className="border-b border-slate-200 px-4 py-3">Buyer fit</th>
                </tr>
              </thead>
              <tbody>
                {serviceOverviews.map((service) => (
                  <tr className="align-top" key={service.title}>
                    <td className="border-b border-slate-100 px-4 py-4">
                      <Link className="font-bold text-slate-950 hover:text-red-600" href={service.href}>
                        {service.title}
                      </Link>
                    </td>
                    <td className="border-b border-slate-100 px-4 py-4 font-medium text-slate-700">
                      {service.stage}
                    </td>
                    <td className="border-b border-slate-100 px-4 py-4 font-bold text-red-600">
                      {service.startingPoint}
                    </td>
                    <td className="border-b border-slate-100 px-4 py-4 leading-6 text-slate-600">
                      {service.buyerFit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-red-600">Choose by sourcing stage</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Match the service to the next decision you need to make.
            </h2>
          </div>
          <div className="grid gap-3 lg:col-span-8">
            {stageChoices.map((choice, index) => (
              <Link
                className="group grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-red-200 hover:shadow-md sm:grid-cols-[auto_1fr_auto]"
                href={choice.href}
                key={choice.stage}
              >
                <span className="flex size-9 items-center justify-center rounded-md bg-slate-950 text-sm font-bold text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="block text-base font-bold text-slate-950">{choice.stage}</span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">{choice.risk}</span>
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-red-600">
                  {choice.service}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-red-600">Choose by buyer type</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Different buyers need different checkpoints.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {buyerChoices.map((choice) => (
              <Link
                className="group rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm transition-all hover:border-red-200 hover:bg-white hover:shadow-md"
                href={choice.href}
                key={choice.type}
              >
                <h3 className="text-lg font-bold text-slate-950">{choice.type}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                  Recommended: {choice.services}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-600">
                  View service path
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-red-600">Service details</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Six practical ways to reduce China sourcing risk.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {serviceOverviews.map((service) => (
              <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={service.title}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-11 items-center justify-center rounded-md bg-slate-950 text-white">
                    <service.Icon className="size-5" aria-hidden />
                  </div>
                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">
                    {service.stage}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.summary}</p>
                <Link
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-red-600 transition-colors hover:text-red-700"
                  href={service.href}
                >
                  Open service page
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="rounded-lg border border-slate-200 bg-slate-950 px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Not sure which service fits your order?
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send your supplier, product, order stage, and deadline. The first step is a free risk check.
              </p>
            </div>
            <Button
              asChild
              className="mt-7 h-11 rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98] lg:mt-0"
              variant="default"
            >
              <Link href={freeRiskHref}>
                Start with Free Sourcing Risk Check
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
