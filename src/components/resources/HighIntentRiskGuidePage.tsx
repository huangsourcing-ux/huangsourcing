import { ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { JsonLd } from '@/components/seo/JsonLd'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  makeRiskGuideJsonLd,
  type RiskGuidePage as RiskGuidePageData,
} from '@/lib/risk-guide-pages'
import { buildWhatsAppHref } from '@/lib/site-links'

type HighIntentRiskGuidePageProps = {
  page: RiskGuidePageData
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

export function HighIntentRiskGuidePage({ page }: HighIntentRiskGuidePageProps) {
  const whatsAppHref = buildWhatsAppHref(page.ctaMessage)
  const jsonLd = makeRiskGuideJsonLd(page)

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950 antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={jsonLd} />
      <SiteBreadcrumbs
        items={[
          { label: 'China sourcing risk guides', href: '/china-sourcing-risk-guides' },
          { label: page.title },
        ]}
      />

      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#fbfcfd_0%,#f5f7f8_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-12 lg:py-16">
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
                analyticsLocation={`risk_guide_${page.slug}_hero`}
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
                <a href="#what-to-check">
                  See what to check
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
              <div className="relative aspect-[4/3] min-h-[260px]">
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
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-slate-950 text-white">
                  <ShieldAlert className="size-5" aria-hidden />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-slate-950">
                    Start from the risk moment.
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    This guide is written for buyers who already have a supplier,
                    order stage, or shipment decision in front of them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white" id="what-to-check">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-bold text-slate-950">When does this check make sense?</h2>
            <BulletList items={page.whenToUse} />
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-bold text-slate-950">What can go wrong if you skip it?</h2>
            <BulletList items={page.riskSignals} />
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-bold text-slate-950">What should be checked?</h2>
            <BulletList items={page.checks} />
          </article>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-red-600">What to send first</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Send enough context to avoid a vague answer.
            </h2>
            <BulletList items={page.whatToSend} />
          </div>
          <div>
            <p className="text-sm font-semibold text-red-600">What a buyer receives</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Evidence for the next payment or shipment decision.
            </h2>
            <BulletList items={page.buyerReceives} />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-red-600">Related next steps</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Choose the live page that matches your decision.
            </h2>
          </div>
          <div className="grid gap-3 lg:col-span-8 md:grid-cols-2">
            {page.internalLinks.map((link) => (
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
          <p className="text-sm font-semibold text-red-600">Clear limits</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            What this guide and check do not promise.
          </h2>
          <BulletList items={page.scopeLimits} />
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

      <section className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-red-300">{page.title}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Send the supplier, order stage, deadline, and main concern.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              Huang Sourcing will suggest the practical China-side check that fits
              the risk node in front of you.
            </p>
          </div>
          <ContactAgentButton
            analyticsLabel={page.primaryCtaLabel}
            analyticsLocation={`risk_guide_${page.slug}_final`}
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
