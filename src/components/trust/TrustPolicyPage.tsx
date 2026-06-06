import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import { companyDetails } from '@/lib/company-details'
import { chinaSourcingServicesHref } from '@/lib/site-links'
import type { TrustPolicyPage as TrustPolicyPageData } from '@/lib/trust-policy-pages'

type TrustPolicyPageProps = {
  page: TrustPolicyPageData
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

export function TrustPolicyPage({ page }: TrustPolicyPageProps) {
  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <SiteBreadcrumbs
        currentPath={page.href}
        items={[{ label: 'Trust & policies' }, { label: page.title }]}
      />

      <section className="hs-hero">
        <div className="hs-container grid items-start gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="lg:col-span-7">
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
                analyticsLocation={`trust_policy_${page.slug}_hero`}
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                href={page.ctaHref}
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
                <Link href={chinaSourcingServicesHref}>
                  View services overview
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delayMs={120}>
            <div className="hs-card bg-white p-6">
              <div className="hs-icon-box size-12">
                <ShieldCheck className="size-6" aria-hidden />
              </div>
              <p className="mt-5 text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">
                Standard trust statement
              </p>
              <p className="mt-3 text-base font-semibold leading-7 text-[var(--hs-text)]">
                {page.coreStatement}
              </p>
              <div className="mt-5 border-t border-[var(--hs-border)] pt-4">
                <p className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">
                  Legal entity
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[var(--hs-muted)]">
                  {companyDetails.legalEntityLine}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              What this means in practice.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              These points make the service boundary clear before you share supplier
              details, book onsite work, or rely on a report for a payment or shipment decision.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {page.sections.map((section, index) => (
              <Reveal
                as="article"
                className="hs-card hs-card-hover bg-[var(--hs-bg-soft)] p-5"
                key={section.title}
                staggerIndex={index}
              >
                <h3 className="text-xl font-extrabold text-[var(--hs-text)]">{section.title}</h3>
                <p className="hs-muted mt-3 text-sm leading-6">{section.body}</p>
                <BulletList items={section.items} />
              </Reveal>
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

      <section className="bg-white">
        <div className="hs-container hs-section">
          <Reveal className="hs-cta-band px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="relative">
              <p className="text-sm font-extrabold text-red-200">{page.title}</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                Ask before you book if the scope is unclear.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                {page.ctaBody}
              </p>
            </div>
            <ContactAgentButton
              analyticsLabel={page.ctaLabel}
              analyticsLocation={`trust_policy_${page.slug}_final`}
              className="relative mt-7 h-12 bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] lg:mt-0"
              href={page.ctaHref}
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
