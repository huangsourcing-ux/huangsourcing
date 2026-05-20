import { ArrowRight, CheckCircle2, FileText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ServiceViewTracker } from '@/components/analytics/ServiceViewTracker'
import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { JsonLd } from '@/components/seo/JsonLd'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { Button } from '@/components/ui/button'
import {
  alibabaSupplierVerificationHref,
  buildWhatsAppHref,
  fnskuLabelCheckHref,
  sampleReportPageHref,
} from '@/lib/site-links'
import {
  makeSeoServiceJsonLd,
  seoServicePages,
  seoServiceSlugs,
  type SeoServiceSlug,
  type SeoServicePage as SeoServicePageData,
} from '@/lib/seo-service-pages'

type SeoServicePageProps = {
  page: SeoServicePageData
}

const serviceRelatedLinks: Record<SeoServiceSlug, { href: string; label: string; note: string }[]> = {
  'supplier-verification-china': [
    {
      href: '/free-china-sourcing-risk-check',
      label: 'Start with Free Sourcing Risk Check',
      note: 'Use this first if you are unsure whether the supplier risk needs paid verification.',
    },
    {
      href: '/before-deposit-china-supplier-check',
      label: 'Verify Chinese supplier before payment',
      note: 'Use when the immediate decision is whether to send deposit payment.',
    },
    {
      href: alibabaSupplierVerificationHref,
      label: 'Alibaba supplier verification',
      note: 'Use when the supplier was found on Alibaba and profile details need a buyer-side check.',
    },
    {
      href: sampleReportPageHref,
      label: 'Sample inspection report',
      note: 'Preview the evidence format and honest limitations before booking.',
    },
  ],
  'qc-inspection-china': [
    {
      href: '/free-china-sourcing-risk-check',
      label: 'Start with Free Sourcing Risk Check',
      note: 'Use this first if you are unsure what QC scope fits the order stage.',
    },
    {
      href: '/before-balance-payment-qc-china',
      label: 'Inspection before balance payment China',
      note: 'Use when final payment depends on product, packaging, label, and carton evidence.',
    },
    {
      href: '/china-pre-shipment-inspection',
      label: 'Pre-shipment inspection China',
      note: 'Use when the decision is final release or pickup readiness.',
    },
    {
      href: sampleReportPageHref,
      label: 'Sample inspection report',
      note: 'See how findings, photo evidence, and decision notes are structured.',
    },
  ],
  'china-pre-shipment-inspection': [
    {
      href: '/free-china-sourcing-risk-check',
      label: 'Start with Free Sourcing Risk Check',
      note: 'Use this first if you are unsure whether pickup risk needs QC, FBA prep, or pre-shipment checks.',
    },
    {
      href: '/before-forwarder-pickup-inspection-china',
      label: 'Pre pickup inspection China',
      note: 'Use when the forwarder is about to collect cartons from the supplier.',
    },
    {
      href: '/before-balance-payment-qc-china',
      label: 'Inspection before balance payment China',
      note: 'Use earlier when final payment should wait for sampled product and packaging evidence.',
    },
    {
      href: sampleReportPageHref,
      label: 'Sample inspection report',
      note: 'Preview the report evidence before final payment or pickup.',
    },
  ],
  'amazon-fba-prep-china': [
    {
      href: '/free-china-sourcing-risk-check',
      label: 'Start with Free Sourcing Risk Check',
      note: 'Use this first if you are unsure whether the issue is FBA prep, QC, or pickup readiness.',
    },
    {
      href: fnskuLabelCheckHref,
      label: 'FNSKU label check China',
      note: 'Use when FNSKU labels, carton labels, or SKU separation are the main risk.',
    },
    {
      href: '/before-amazon-fba-shipment-china',
      label: 'FBA prep China before shipment',
      note: 'Use when the shipment is about to leave China for Amazon FBA.',
    },
    {
      href: sampleReportPageHref,
      label: 'Sample inspection report',
      note: 'See how photo-backed label and carton evidence is presented.',
    },
  ],
  'sample-consolidation-china': [
    {
      href: '/free-china-sourcing-risk-check',
      label: 'Start with Free Sourcing Risk Check',
      note: 'Use this first if you are unsure how to compare suppliers before selection.',
    },
    {
      href: '/compare-china-supplier-samples',
      label: 'Compare China supplier samples',
      note: 'Use when the buyer decision is which supplier sample deserves the next step.',
    },
    {
      href: '/supplier-verification-china',
      label: 'Supplier Verification China',
      note: 'Use after samples narrow the shortlist and payment risk needs a supplier check.',
    },
    {
      href: sampleReportPageHref,
      label: 'Sample inspection report',
      note: 'Preview the type of buyer-side evidence used before bigger decisions.',
    },
  ],
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
      {items.map((item) => (
        <li className="flex gap-2" key={item}>
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-red-600" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function SeoServicePage({ page }: SeoServicePageProps) {
  const relatedServices = seoServiceSlugs.filter((slug) => slug !== page.slug)
  const relatedLinks = serviceRelatedLinks[page.slug]
  const whatsAppHref = buildWhatsAppHref(page.ctaMessage)
  const jsonLd = makeSeoServiceJsonLd(page)

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950 antialiased">
      <SiteHeader activePage="service" topBanner={null} />
      <ServiceViewTracker serviceName={page.title} serviceSlug={page.slug} />

      <JsonLd data={jsonLd} />
      <SiteBreadcrumbs items={[{ label: page.title }]} />

      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#fbfcfd_0%,#f5f7f8_100%)]">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-12 lg:py-16">
          <div className="min-w-0 lg:col-span-7">
            <p className="text-sm font-semibold text-red-600">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={page.ctaLabel}
                analyticsLocation={`seo_page_${page.slug}_hero`}
                className="h-12 rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98] sm:px-8"
                href={whatsAppHref}
                size="lg"
                variant="default"
              >
                {page.ctaLabel}
              </ContactAgentButton>
              <Button
                asChild
                className="h-12 rounded-md border-slate-300 bg-white px-6 text-sm font-bold text-slate-900 shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-700 hover:shadow-md active:scale-[0.98] sm:px-8"
                size="lg"
                variant="outline"
              >
                <Link href={sampleReportPageHref}>
                  <FileText className="size-4" aria-hidden />
                  View sample report
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
              <div className="relative aspect-[4/3] min-h-[280px]">
                <Image
                  alt={page.imageAlt}
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  src={page.imageSrc}
                />
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Starting price
              </p>
              <p className="mt-2 text-2xl font-bold text-red-600">{page.startingPrice}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {page.pricingNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-bold text-slate-950">
              Who should use this before paying or shipping?
            </h2>
            <BulletList items={page.bestFor} />
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-bold text-slate-950">
              When does this check make sense?
            </h2>
            <BulletList items={page.whenToUse} />
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-bold text-slate-950">
              What should be checked before the next payment or pickup?
            </h2>
            <BulletList items={page.checks} />
          </article>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-red-600">Risk details</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              What can go wrong if you skip this?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              These checks focus on practical buyer risk, not a generic certificate or a supplier sales pitch.
            </p>
          </div>
          <div className="grid gap-4 lg:col-span-8 md:grid-cols-2">
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-bold text-slate-950">Common risks</h3>
              <BulletList items={page.commonRisks} />
            </article>
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-bold text-slate-950">What to send first</h3>
              <BulletList items={page.whatToSend} />
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-red-600">Process</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              How the work usually happens.
            </h2>
          </div>
          <ol className="grid gap-3 lg:col-span-8 md:grid-cols-2">
            {page.processSteps.map((step, index) => (
              <li className="rounded-lg border border-slate-200 bg-white p-5" key={step}>
                <p className="text-sm font-bold text-red-600">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-red-600">Deliverables</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              What do you receive before deciding?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The goal is practical evidence you can use before payment, pickup, supplier selection, or shipment release.
            </p>
          </div>
          <div className="grid gap-3 lg:col-span-7 sm:grid-cols-2">
            {page.deliverables.map((item) => (
              <div className="rounded-lg border border-slate-200 bg-white p-4" key={item}>
                <CheckCircle2 className="size-5 text-red-600" aria-hidden />
                <p className="mt-3 text-sm font-bold leading-6 text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-red-600">Decision support</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              What this helps you decide.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <BulletList items={page.decisionSupport} />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-red-600">Practical case</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              {page.caseStudy.title}
            </h2>
          </div>
          <div className="grid gap-3 lg:col-span-7">
            {[
              ['Situation', page.caseStudy.situation],
              ['Action', page.caseStudy.action],
              ['Outcome', page.caseStudy.outcome],
            ].map(([label, body]) => (
              <article className="rounded-lg border border-slate-200 bg-slate-50 p-5" key={label}>
                <p className="text-sm font-bold text-red-600">{label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold text-red-600">Scope limits</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            What does this service not include?
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">{page.scopeNote}</p>
          <BulletList items={page.scopeLimits} />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-red-600">Internal links</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Related risk pages buyers often need next.
            </h2>
          </div>
          <div className="grid gap-3 lg:col-span-8 md:grid-cols-2">
            {relatedLinks.map((link) => (
              <Link
                className="group rounded-lg border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-red-200 hover:bg-white"
                href={link.href}
                key={link.href}
              >
                <h3 className="text-lg font-bold text-slate-950 group-hover:text-red-600">
                  {link.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{link.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-red-600">
                  Open page
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            Frequently asked questions
          </h2>
          <div className="mt-6 grid gap-3">
            {page.faqs.map((faq) => (
              <article className="rounded-lg border border-slate-200 bg-white p-5" key={faq.question}>
                <h3 className="text-base font-bold text-slate-950">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">
            Related China-side services
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((slug) => (
              <Link
                className="group rounded-lg border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-red-200 hover:bg-white"
                href={`/${slug}`}
                key={slug}
              >
                <p className="font-bold text-slate-950 group-hover:text-red-600">
                  {seoServicePages[slug].title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {seoServicePages[slug].startingPrice}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-red-600">
                  View service
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-red-300">{page.title}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Send the supplier, product, order stage, and deadline.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              Agent Huang will reply with the safest next step from the China side.
            </p>
          </div>
          <ContactAgentButton
            analyticsLabel={page.ctaLabel}
            analyticsLocation={`seo_page_${page.slug}_final`}
            className="h-12 rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98]"
            href={whatsAppHref}
            size="lg"
            variant="default"
          >
            {page.ctaLabel}
          </ContactAgentButton>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
