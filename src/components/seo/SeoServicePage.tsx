import { ArrowRight, CheckCircle2, Download, FileText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ServiceViewTracker } from '@/components/analytics/ServiceViewTracker'
import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { JsonLd } from '@/components/seo/JsonLd'
import { Reveal } from '@/components/site/Reveal'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { Button } from '@/components/ui/button'
import {
  alibabaSupplierVerificationHref,
  buildWhatsAppHref,
  chinaSourcingInspectionPricingHref,
  factoryVsTradingCompanyChinaHref,
  fnskuLabelCheckHref,
  sampleReportPageHref,
  whatToSendBeforeChinaInspectionHref,
} from '@/lib/site-links'
import {
  seoServiceEnhancements,
  type SeoServiceEnhancement,
} from '@/lib/seo-service-enhancements'
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
      href: factoryVsTradingCompanyChinaHref,
      label: 'Factory vs trading company in China',
      note: 'Use when the supplier role is unclear or the quote does not match the claimed factory identity.',
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
    <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--hs-muted)]">
      {items.map((item) => (
        <li className="flex gap-2" key={item}>
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ComparisonTable({ comparison }: { comparison: NonNullable<SeoServiceEnhancement['comparison']> }) {
  return (
    <div className="mt-8">
      <div className="grid gap-3 md:hidden">
        {comparison.rows.map((row, index) => (
          <Reveal as="article" className="hs-card bg-white p-4" key={row.topic} staggerIndex={index}>
            <p className="text-sm font-extrabold text-[var(--hs-accent)]">{row.topic}</p>
            <div className="mt-3 grid gap-3">
              <div>
                <p className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">
                  {comparison.columns[1]}
                </p>
                <p className="hs-muted mt-1 text-sm leading-6">{row.left}</p>
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">
                  {comparison.columns[2]}
                </p>
                <p className="hs-muted mt-1 text-sm leading-6">{row.right}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="hidden overflow-x-auto rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)] md:block">
        <table className="w-full min-w-[820px] border-collapse text-left text-sm">
          <thead className="bg-[var(--hs-bg-soft)] text-xs uppercase text-[var(--hs-muted-soft)]">
            <tr>
              {comparison.columns.map((column) => (
                <th className="border-b border-[var(--hs-border)] px-4 py-3" key={column}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr className="align-top transition-colors hover:bg-[var(--hs-bg-soft)]" key={row.topic}>
                <td className="border-b border-[var(--hs-border)] px-4 py-4 font-extrabold text-[var(--hs-text)]">
                  {row.topic}
                </td>
                <td className="border-b border-[var(--hs-border)] px-4 py-4 leading-6 text-[var(--hs-muted)]">
                  {row.left}
                </td>
                <td className="border-b border-[var(--hs-border)] px-4 py-4 leading-6 text-[var(--hs-muted)]">
                  {row.right}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </div>
  )
}

function EnhancementCardGrid({ cards }: { cards: NonNullable<SeoServiceEnhancement['checklistSections']> }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {cards.map((card, index) => (
        <Reveal
          as="article"
          className="hs-card hs-card-hover bg-[var(--hs-card-warm)] p-5"
          key={card.title}
          staggerIndex={index}
        >
          <h3 className="text-xl font-extrabold text-[var(--hs-text)]">{card.title}</h3>
          {card.body ? <p className="hs-muted mt-3 text-sm leading-6">{card.body}</p> : null}
          {card.items ? <BulletList items={card.items} /> : null}
        </Reveal>
      ))}
    </div>
  )
}

function EnhancementDownloadCard({ download }: { download: NonNullable<SeoServiceEnhancement['download']> }) {
  return (
    <Reveal className="hs-card bg-[var(--hs-navy)] p-5 text-white">
      <div className="flex items-start gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
          <Download className="size-5" aria-hidden />
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase text-red-200">{download.fileType} download</p>
          <h3 className="mt-2 text-xl font-extrabold tracking-tight">{download.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{download.body}</p>
          <a
            className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-md bg-[var(--hs-accent)] px-4 text-sm font-extrabold text-white transition-all hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)]"
            href={download.href}
          >
            {download.ctaLabel}
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </Reveal>
  )
}

function ServiceEnhancementSections({ enhancement }: { enhancement?: SeoServiceEnhancement }) {
  if (!enhancement) return null

  return (
    <>
      <section className="hs-section-white">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">{enhancement.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              {enhancement.title}
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">{enhancement.intro}</p>
          </Reveal>

          {enhancement.comparison ? (
            <>
              <Reveal className="mt-8 max-w-3xl">
                <h3 className="text-2xl font-extrabold tracking-tight text-[var(--hs-text)]">
                  {enhancement.comparison.title}
                </h3>
              </Reveal>
              <ComparisonTable comparison={enhancement.comparison} />
            </>
          ) : null}
        </div>
      </section>

      {enhancement.scopeCards?.length ? (
        <section className="hs-section-soft">
          <div className="hs-container hs-section">
            <Reveal className="max-w-3xl">
              <p className="hs-eyebrow">Scope clarity</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
                What can be checked from the right evidence.
              </h2>
            </Reveal>
            <div className="mt-8">
              <EnhancementCardGrid cards={enhancement.scopeCards} />
            </div>
          </div>
        </section>
      ) : null}

      {enhancement.checklistSections?.length ? (
        <section className="hs-section-soft">
          <div className="hs-container hs-section">
            <Reveal className="max-w-3xl">
              <p className="hs-eyebrow">Buyer preparation</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
                Practical details buyers should define before booking.
              </h2>
            </Reveal>
            <div className="mt-8">
              <EnhancementCardGrid cards={enhancement.checklistSections} />
            </div>
          </div>
        </section>
      ) : null}

      {enhancement.caseCards?.length || enhancement.download || enhancement.links?.length ? (
        <section className="hs-section-white">
          <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="hs-eyebrow">Next-step tools</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
                Use the extra checklist, case notes, or related guide.
              </h2>
            </Reveal>
            <div className="grid gap-4 lg:col-span-8">
              {enhancement.download ? <EnhancementDownloadCard download={enhancement.download} /> : null}
              {enhancement.caseCards?.length ? <EnhancementCardGrid cards={enhancement.caseCards} /> : null}
              {enhancement.links?.length ? (
                <div className="grid gap-3 md:grid-cols-3">
                  {enhancement.links.map((link, index) => (
                    <Reveal key={link.href} staggerIndex={index}>
                      <Link className="hs-link-card group block h-full p-5" href={link.href}>
                        <h3 className="text-lg font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">
                          {link.label}
                        </h3>
                        <p className="hs-muted mt-2 text-sm leading-6">{link.note}</p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">
                          Open guide
                          <ArrowRight className="size-4" aria-hidden />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}

export function SeoServicePage({ page }: SeoServicePageProps) {
  const relatedServices = seoServiceSlugs.filter((slug) => slug !== page.slug)
  const relatedLinks = serviceRelatedLinks[page.slug]
  const whatsAppHref = buildWhatsAppHref(page.ctaMessage)
  const jsonLd = makeSeoServiceJsonLd(page)
  const enhancement = seoServiceEnhancements[page.slug]

  return (
    <main className="hs-page min-h-screen overflow-x-hidden antialiased">
      <SiteHeader activePage="service" topBanner={null} />
      <ServiceViewTracker serviceName={page.title} serviceSlug={page.slug} />

      <JsonLd data={jsonLd} />
      <SiteBreadcrumbs items={[{ label: page.title }]} />

      <section className="hs-hero">
        <div className="hs-container grid items-start gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="min-w-0 lg:col-span-7">
            <p className="hs-eyebrow">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-5xl">
              {page.h1}
            </h1>
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={page.ctaLabel}
                analyticsLocation={`seo_page_${page.slug}_hero`}
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                href={whatsAppHref}
                size="lg"
                variant="default"
              >
                {page.ctaLabel}
              </ContactAgentButton>
              <Button
                asChild
                className="hs-btn-secondary h-12 px-6 text-sm sm:px-8"
                size="lg"
                variant="outline"
              >
                <Link href={sampleReportPageHref}>
                  <FileText className="size-4" aria-hidden />
                  View sample report
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delayMs={120}>
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] shadow-[var(--hs-shadow-md)]">
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
            <div className="hs-card mt-4 bg-white p-5">
              <p className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">
                Starting price
              </p>
              <p className="mt-2 text-2xl font-extrabold text-[var(--hs-accent)]">{page.startingPrice}</p>
              <p className="hs-muted mt-2 text-sm leading-6">
                {page.pricingNote}
              </p>
              <Link
                className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--hs-accent)] transition-colors hover:text-[var(--hs-accent-strong)]"
                href={chinaSourcingInspectionPricingHref}
              >
                View pricing guide
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--hs-accent)] transition-colors hover:text-[var(--hs-accent-strong)]"
                href={whatToSendBeforeChinaInspectionHref}
              >
                What to send before booking
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section grid gap-4 lg:grid-cols-3">
          <Reveal as="article" className="hs-card hs-card-hover bg-[var(--hs-card-warm)] p-5">
            <h2 className="text-xl font-extrabold text-[var(--hs-text)]">
              Who should use this before paying or shipping?
            </h2>
            <BulletList items={page.bestFor} />
          </Reveal>
          <Reveal as="article" className="hs-card hs-card-hover bg-[var(--hs-card-warm)] p-5" staggerIndex={1}>
            <h2 className="text-xl font-extrabold text-[var(--hs-text)]">
              When does this check make sense?
            </h2>
            <BulletList items={page.whenToUse} />
          </Reveal>
          <Reveal as="article" className="hs-card hs-card-hover bg-[var(--hs-card-warm)] p-5" staggerIndex={2}>
            <h2 className="text-xl font-extrabold text-[var(--hs-text)]">
              What should be checked before the next payment or pickup?
            </h2>
            <BulletList items={page.checks} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Risk details</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              What can go wrong if you skip this?
            </h2>
            <p className="hs-muted mt-4 text-base leading-7">
              These checks focus on practical buyer risk, not a generic certificate or a supplier sales pitch.
            </p>
          </Reveal>
          <div className="grid gap-4 lg:col-span-8 md:grid-cols-2">
            <Reveal as="article" className="hs-card hs-card-hover bg-[var(--hs-bg-soft)] p-5">
              <h3 className="text-lg font-extrabold text-[var(--hs-text)]">Common risks</h3>
              <BulletList items={page.commonRisks} />
            </Reveal>
            <Reveal as="article" className="hs-card hs-card-hover bg-[var(--hs-bg-soft)] p-5" staggerIndex={1}>
              <h3 className="text-lg font-extrabold text-[var(--hs-text)]">What to send first</h3>
              <BulletList items={page.whatToSend} />
              <Link
                className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--hs-accent)] transition-colors hover:text-[var(--hs-accent-strong)]"
                href={whatToSendBeforeChinaInspectionHref}
              >
                View booking prep guide
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <ServiceEnhancementSections enhancement={enhancement} />

      <section className="hs-section-soft">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Process</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              How the work usually happens.
            </h2>
          </Reveal>
          <ol className="grid gap-3 lg:col-span-8 md:grid-cols-2">
            {page.processSteps.map((step, index) => (
              <Reveal as="li" className="hs-card hs-card-hover bg-white p-5" key={step} staggerIndex={index}>
                <p className="text-sm font-extrabold text-[var(--hs-accent)]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[var(--hs-text)]">{step}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="hs-eyebrow">Deliverables</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              What do you receive before deciding?
            </h2>
            <p className="hs-muted mt-4 text-base leading-7">
              The goal is practical evidence you can use before payment, pickup, supplier selection, or shipment release.
            </p>
          </Reveal>
          <div className="grid gap-3 lg:col-span-7 sm:grid-cols-2">
            {page.deliverables.map((item, index) => (
              <Reveal className="hs-card hs-card-hover bg-white p-4" key={item} staggerIndex={index}>
                <CheckCircle2 className="size-5 text-[var(--hs-accent)]" aria-hidden />
                <p className="mt-3 text-sm font-extrabold leading-6 text-[var(--hs-text)]">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="hs-eyebrow">Decision support</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              What this helps you decide.
            </h2>
          </Reveal>
          <Reveal className="hs-card bg-[var(--hs-bg-soft)] p-5 lg:col-span-7">
            <BulletList items={page.decisionSupport} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="hs-eyebrow">Practical case</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              {page.caseStudy.title}
            </h2>
          </Reveal>
          <div className="grid gap-3 lg:col-span-7">
            {[
              ['Situation', page.caseStudy.situation],
              ['Action', page.caseStudy.action],
              ['Outcome', page.caseStudy.outcome],
            ].map(([label, body], index) => (
              <Reveal as="article" className="hs-card hs-card-hover bg-[var(--hs-bg-soft)] p-5" key={label} staggerIndex={index}>
                <p className="text-sm font-extrabold text-[var(--hs-accent)]">{label}</p>
                <p className="hs-muted mt-2 text-sm leading-6">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-soft">
        <Reveal className="hs-container hs-section max-w-4xl">
          <p className="hs-eyebrow">Scope limits</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
            What does this service not include?
          </h2>
          <p className="hs-muted mt-4 text-base leading-7">{page.scopeNote}</p>
          <BulletList items={page.scopeLimits} />
        </Reveal>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Internal links</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Related risk pages buyers often need next.
            </h2>
          </Reveal>
          <div className="grid gap-3 lg:col-span-8 md:grid-cols-2">
            {relatedLinks.map((link, index) => (
              <Link
                className="hs-link-card group p-5"
                href={link.href}
                key={link.href}
                style={{ transitionDelay: `${index * 35}ms` }}
              >
                <h3 className="text-lg font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">
                  {link.label}
                </h3>
                <p className="hs-muted mt-2 text-sm leading-6">{link.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">
                  Open page
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
            Frequently asked questions
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-3">
            {page.faqs.map((faq, index) => (
              <Reveal as="article" className="hs-card bg-white p-5" key={faq.question} staggerIndex={index}>
                <h3 className="text-base font-extrabold text-[var(--hs-text)]">{faq.question}</h3>
                <p className="hs-muted mt-2 text-sm leading-6">{faq.answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-[var(--hs-text)]">
            Related China-side services
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((slug, index) => (
              <Link
                className="hs-link-card group p-4"
                href={`/${slug}`}
                key={slug}
                style={{ transitionDelay: `${index * 35}ms` }}
              >
                <p className="font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">
                  {seoServicePages[slug].title}
                </p>
                <p className="hs-muted mt-2 text-sm leading-6">
                  {seoServicePages[slug].startingPrice}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">
                  View service
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="hs-container hs-section">
          <Reveal className="hs-cta-band px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="relative">
            <p className="text-sm font-extrabold text-red-200">{page.title}</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Send the supplier, product, order stage, and deadline.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              Agent Huang will reply with the safest next step from the China side.
            </p>
            </div>
          <ContactAgentButton
            analyticsLabel={page.ctaLabel}
            analyticsLocation={`seo_page_${page.slug}_final`}
            className="relative mt-7 h-12 bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] lg:mt-0"
            href={whatsAppHref}
            size="lg"
            variant="default"
          >
            {page.ctaLabel}
          </ContactAgentButton>
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
