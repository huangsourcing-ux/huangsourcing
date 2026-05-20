import {
  ArrowRight,
  CheckCircle2,
  FileText,
  HelpCircle,
  ShieldAlert,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { JsonLd } from '@/components/seo/JsonLd'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  makeSourcingStageJsonLd,
  sourcingStagePages,
  type SourcingStagePage as SourcingStagePageData,
} from '@/lib/sourcing-stage-pages'
import {
  buildWhatsAppHref,
  chinaSourcingServicesHref,
  sampleReportPageHref,
} from '@/lib/site-links'

type SourcingStagePageProps = {
  page: SourcingStagePageData
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

export function SourcingStagePage({ page }: SourcingStagePageProps) {
  const whatsAppHref = buildWhatsAppHref(page.ctaMessage)
  const jsonLd = makeSourcingStageJsonLd(page)

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950 antialiased">
      <SiteHeader activePage="service" topBanner={null} />
      <JsonLd data={jsonLd} />
      <SiteBreadcrumbs
        items={[
          { label: 'China sourcing services', href: chinaSourcingServicesHref },
          { label: page.stage },
        ]}
      />

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
                analyticsLabel={page.primaryCtaLabel}
                analyticsLocation={`stage_page_${page.slug}_hero`}
                className="h-12 rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98] sm:px-8"
                href={whatsAppHref}
                size="lg"
                variant="default"
              >
                {page.primaryCtaLabel}
              </ContactAgentButton>
              <Button
                asChild
                className="h-12 rounded-md border-slate-300 bg-white px-6 text-sm font-bold text-slate-900 shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-700 hover:shadow-md active:scale-[0.98] sm:px-8"
                size="lg"
                variant="outline"
              >
                <Link href={page.primaryServiceHref}>
                  View matching service
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
              <div className="relative aspect-[4/3] min-h-[260px]">
                <Image
                  alt={`${page.stage} China sourcing evidence review`}
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  src="/images/hero-inspection.webp"
                />
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Stage risk
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{page.riskSummary}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center gap-2">
              <HelpCircle className="size-5 text-red-600" aria-hidden />
              <h2 className="text-xl font-bold text-slate-950">Buyer questions</h2>
            </div>
            <BulletList items={page.buyerQuestions} />
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center gap-2">
              <ShieldAlert className="size-5 text-red-600" aria-hidden />
              <h2 className="text-xl font-bold text-slate-950">Risk signals</h2>
            </div>
            <BulletList items={page.riskSignals} />
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-5 text-red-600" aria-hidden />
              <h2 className="text-xl font-bold text-slate-950">What gets checked</h2>
            </div>
            <BulletList items={page.checks} />
          </article>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-red-600">Recommended path</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Choose the service by the decision you need to make.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              These pages connect the risk stage to the practical China-side service, so you do not have to translate your problem into a service category first.
            </p>
          </div>
          <div className="grid gap-3 lg:col-span-8">
            {page.servicePath.map((item, index) => (
              <Link
                className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-red-200"
                href={item.href}
                key={item.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-red-600">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-slate-950 group-hover:text-red-600">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                  </div>
                  <ArrowRight className="mt-1 size-5 shrink-0 text-slate-400 group-hover:text-red-600" aria-hidden />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-red-600">What to send first</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Send enough context to avoid a vague quote.
            </h2>
            <BulletList items={page.whatToSend} />
          </div>
          <div>
            <p className="text-sm font-semibold text-red-600">Decision support</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              What this helps you decide.
            </h2>
            <BulletList items={page.decisionOutcomes} />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-red-600">Clear boundaries</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              What this stage page does not promise.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The trust point is practical evidence and clear limits, not exaggerated certainty.
            </p>
            <Button
              asChild
              className="mt-6 h-11 rounded-md border-slate-300 bg-white px-5 text-sm font-bold text-slate-900 shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-700"
              size="default"
              variant="outline"
            >
              <Link href={sampleReportPageHref}>
                <FileText className="size-4" aria-hidden />
                View sample report
              </Link>
            </Button>
          </div>
          <div className="lg:col-span-7">
            <BulletList items={page.scopeLimits} />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            Frequently asked questions
          </h2>
          <div className="mt-6 grid gap-3">
            {page.faqs.map((faq) => (
              <article className="rounded-lg border border-slate-200 bg-slate-50 p-5" key={faq.question}>
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
            Related sourcing stages
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {page.relatedStages.map((slug) => {
              const related = sourcingStagePages[slug]

              return (
                <Link
                  className="group rounded-lg border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-red-200 hover:bg-white"
                  href={`/${related.slug}`}
                  key={related.slug}
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-red-600">
                    {related.stage}
                  </p>
                  <p className="mt-2 font-bold leading-6 text-slate-950 group-hover:text-red-600">
                    {related.h1}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-red-600">
                    View stage
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-red-300">{page.stage}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Send your supplier, order stage, deadline, and main concern.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              Huang Sourcing will suggest the practical China-side check that fits the decision in front of you.
            </p>
          </div>
          <ContactAgentButton
            analyticsLabel={page.primaryCtaLabel}
            analyticsLocation={`stage_page_${page.slug}_final`}
            className="h-12 rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98]"
            href={whatsAppHref}
            size="lg"
            variant="default"
          >
            {page.primaryCtaLabel}
          </ContactAgentButton>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
