import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import { chinaSourcingServicesHref } from '@/lib/site-links'
import type { TrustPolicyPage as TrustPolicyPageData } from '@/lib/trust-policy-pages'

type TrustPolicyPageProps = {
  page: TrustPolicyPageData
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

export function TrustPolicyPage({ page }: TrustPolicyPageProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950 antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <SiteBreadcrumbs items={[{ label: 'Trust & policies' }, { label: page.title }]} />

      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#fbfcfd_0%,#f5f7f8_100%)]">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-7">
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
                analyticsLocation={`trust_policy_${page.slug}_hero`}
                className="h-12 rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98] sm:px-8"
                href={page.ctaHref}
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
                <Link href={chinaSourcingServicesHref}>
                  View services overview
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex size-12 items-center justify-center rounded-md bg-slate-950 text-white">
                <ShieldCheck className="size-6" aria-hidden />
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">
                Standard trust statement
              </p>
              <p className="mt-3 text-base font-semibold leading-7 text-slate-900">
                {page.coreStatement}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              What this means in practice.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              These points make the service boundary clear before you share supplier
              details, book onsite work, or rely on a report for a payment or shipment decision.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {page.sections.map((section) => (
              <article
                className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm"
                key={section.title}
              >
                <h3 className="text-xl font-bold text-slate-950">{section.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{section.body}</p>
                <BulletList items={section.items} />
              </article>
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

      <section className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-red-300">{page.title}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Ask before you book if the scope is unclear.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              {page.ctaBody}
            </p>
          </div>
          <ContactAgentButton
            analyticsLabel={page.ctaLabel}
            analyticsLocation={`trust_policy_${page.slug}_final`}
            className="h-12 rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98]"
            href={page.ctaHref}
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
