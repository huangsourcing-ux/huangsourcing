import { ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import {
  ArticleByline,
  EvidenceDecisionMatrix,
} from '@/components/resources/ArticleTrustSignals'
import { JsonLd } from '@/components/seo/JsonLd'
import { Reveal } from '@/components/site/Reveal'
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

export function HighIntentRiskGuidePage({ page }: HighIntentRiskGuidePageProps) {
  const whatsAppHref = buildWhatsAppHref(page.ctaMessage)
  const jsonLd = makeRiskGuideJsonLd(page)

  return (
    <main className="hs-page min-h-screen overflow-x-hidden antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={jsonLd} />
      <SiteBreadcrumbs
        currentPath={`/${page.slug}`}
        items={[
          { label: 'China sourcing risk guides', href: '/china-sourcing-risk-guides' },
          { label: page.title },
        ]}
      />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="min-w-0 lg:col-span-7">
            <p className="hs-eyebrow">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-5xl">
              {page.h1}
            </h1>
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {page.intro}
            </p>
            <ArticleByline
              modifiedDate={page.modifiedDate}
              publishedDate={page.publishedDate}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={page.primaryCtaLabel}
                analyticsLocation={`risk_guide_${page.slug}_hero`}
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                href={whatsAppHref}
                size="lg"
                variant="default"
              >
                {page.primaryCtaLabel}
              </ContactAgentButton>
              <Button
                asChild
                className="hs-btn-secondary h-12 px-6 text-sm sm:px-8"
                size="lg"
                variant="outline"
              >
                <a href="#what-to-check">
                  See what to check
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delayMs={120}>
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] shadow-[var(--hs-shadow-md)]">
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
            <div className="hs-card mt-4 bg-white p-5">
              <div className="flex items-start gap-3">
                <div className="hs-icon-box size-10">
                  <ShieldAlert className="size-5" aria-hidden />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold tracking-tight text-[var(--hs-text)]">
                    Start from the risk moment.
                  </h2>
                  <p className="hs-muted mt-2 text-sm leading-6">
                    This guide is written for buyers who already have a supplier,
                    order stage, or shipment decision in front of them.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="what-to-check">
        <div className="hs-container hs-section grid gap-4 lg:grid-cols-3">
          <Reveal as="article" className="hs-card hs-card-hover bg-[var(--hs-card-warm)] p-5">
            <h2 className="text-xl font-extrabold text-[var(--hs-text)]">When does this check make sense?</h2>
            <BulletList items={page.whenToUse} />
          </Reveal>
          <Reveal as="article" className="hs-card hs-card-hover bg-[var(--hs-card-warm)] p-5" staggerIndex={1}>
            <h2 className="text-xl font-extrabold text-[var(--hs-text)]">What can go wrong if you skip it?</h2>
            <BulletList items={page.riskSignals} />
          </Reveal>
          <Reveal as="article" className="hs-card hs-card-hover bg-[var(--hs-card-warm)] p-5" staggerIndex={2}>
            <h2 className="text-xl font-extrabold text-[var(--hs-text)]">What should be checked?</h2>
            <BulletList items={page.checks} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-2">
          <Reveal className="hs-card bg-white p-5">
            <p className="hs-eyebrow">What to send first</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Send enough context to avoid a vague answer.
            </h2>
            <BulletList items={page.whatToSend} />
          </Reveal>
          <Reveal className="hs-card bg-white p-5" delayMs={100}>
            <p className="hs-eyebrow">What a buyer receives</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Evidence for the next payment or shipment decision.
            </h2>
            <BulletList items={page.buyerReceives} />
          </Reveal>
        </div>
      </section>

      <EvidenceDecisionMatrix
        intro="This matrix connects the visible supplier or shipment evidence to the buyer decision the guide is meant to support."
        rows={page.evidenceRows}
        title="What evidence supports the next buyer decision?"
      />

      <section className="hs-section-white">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Related next steps</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Choose the live page that matches your decision.
            </h2>
          </Reveal>
          <div className="grid gap-3 lg:col-span-8 md:grid-cols-2">
            {page.internalLinks.map((link, index) => (
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
        <Reveal className="hs-container hs-section max-w-4xl">
          <p className="hs-eyebrow">Clear limits</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
            What this guide and check do not promise.
          </h2>
          <BulletList items={page.scopeLimits} />
        </Reveal>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-3">
            {page.faqs.map((faq, index) => (
              <Reveal as="article" className="hs-card bg-[var(--hs-bg-soft)] p-5" key={faq.question} staggerIndex={index}>
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
              className="relative mt-7 h-12 bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] lg:mt-0"
              href={whatsAppHref}
              size="lg"
              variant="default"
            >
              {page.primaryCtaLabel}
            </ContactAgentButton>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
