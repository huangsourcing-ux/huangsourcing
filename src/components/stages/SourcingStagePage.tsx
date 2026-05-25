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
import { Reveal } from '@/components/site/Reveal'
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

export function SourcingStagePage({ page }: SourcingStagePageProps) {
  const whatsAppHref = buildWhatsAppHref(page.ctaMessage)
  const jsonLd = makeSourcingStageJsonLd(page)

  return (
    <main className="hs-page min-h-screen overflow-x-hidden antialiased">
      <SiteHeader activePage="service" topBanner={null} />
      <JsonLd data={jsonLd} />
      <SiteBreadcrumbs
        currentPath={`/${page.slug}`}
        items={[
          { label: 'China sourcing services', href: chinaSourcingServicesHref },
          { label: page.stage },
        ]}
      />

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
                analyticsLabel={page.primaryCtaLabel}
                analyticsLocation={`stage_page_${page.slug}_hero`}
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
                <Link href={page.primaryServiceHref}>
                  View matching service
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
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
              <p className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">
                Stage risk
              </p>
              <p className="hs-muted mt-2 text-sm leading-6">{page.riskSummary}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section grid gap-4 lg:grid-cols-3">
          <Reveal as="article" className="hs-card hs-card-hover bg-[var(--hs-card-warm)] p-5">
            <div className="flex items-center gap-2">
              <HelpCircle className="size-5 text-[var(--hs-accent)]" aria-hidden />
              <h2 className="text-xl font-extrabold text-[var(--hs-text)]">Buyer questions</h2>
            </div>
            <BulletList items={page.buyerQuestions} />
          </Reveal>
          <Reveal as="article" className="hs-card hs-card-hover bg-[var(--hs-card-warm)] p-5" staggerIndex={1}>
            <div className="flex items-center gap-2">
              <ShieldAlert className="size-5 text-[var(--hs-accent)]" aria-hidden />
              <h2 className="text-xl font-extrabold text-[var(--hs-text)]">Risk signals</h2>
            </div>
            <BulletList items={page.riskSignals} />
          </Reveal>
          <Reveal as="article" className="hs-card hs-card-hover bg-[var(--hs-card-warm)] p-5" staggerIndex={2}>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-5 text-[var(--hs-accent)]" aria-hidden />
              <h2 className="text-xl font-extrabold text-[var(--hs-text)]">What gets checked</h2>
            </div>
            <BulletList items={page.checks} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Recommended path</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Choose the service by the decision you need to make.
            </h2>
            <p className="hs-muted mt-4 text-base leading-7">
              These pages connect the risk stage to the practical China-side service, so you do not have to translate your problem into a service category first.
            </p>
          </Reveal>
          <div className="grid gap-3 lg:col-span-8">
            {page.servicePath.map((item, index) => (
              <Link
                className="hs-link-card group bg-white p-5"
                href={item.href}
                key={item.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-extrabold text-[var(--hs-accent)]">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-2 text-lg font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">
                      {item.title}
                    </h3>
                    <p className="hs-muted mt-2 text-sm leading-6">{item.note}</p>
                  </div>
                  <ArrowRight className="mt-1 size-5 shrink-0 text-[var(--hs-muted-soft)] group-hover:text-[var(--hs-accent)]" aria-hidden />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-2">
          <Reveal className="hs-card bg-[var(--hs-bg-soft)] p-5">
            <p className="hs-eyebrow">What to send first</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Send enough context to avoid a vague quote.
            </h2>
            <BulletList items={page.whatToSend} />
          </Reveal>
          <Reveal className="hs-card bg-[var(--hs-bg-soft)] p-5" delayMs={100}>
            <p className="hs-eyebrow">Decision support</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              What this helps you decide.
            </h2>
            <BulletList items={page.decisionOutcomes} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="hs-eyebrow">Clear boundaries</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              What this stage page does not promise.
            </h2>
            <p className="hs-muted mt-4 text-base leading-7">
              The trust point is practical evidence and clear limits, not exaggerated certainty.
            </p>
            <Button
              asChild
              className="hs-btn-secondary mt-6 h-11 px-5 text-sm"
              size="default"
              variant="outline"
            >
              <Link href={sampleReportPageHref}>
                <FileText className="size-4" aria-hidden />
                View sample report
              </Link>
            </Button>
          </Reveal>
          <Reveal className="hs-card bg-white p-5 lg:col-span-7" delayMs={100}>
            <BulletList items={page.scopeLimits} />
          </Reveal>
        </div>
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

      <section className="hs-section-white">
        <div className="hs-container hs-section">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Related sourcing stages
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {page.relatedStages.map((slug) => {
              const related = sourcingStagePages[slug]

              return (
                <Link
                  className="hs-link-card group p-4"
                  href={`/${related.slug}`}
                  key={related.slug}
                >
                  <p className="text-xs font-extrabold uppercase text-[var(--hs-accent)]">
                    {related.stage}
                  </p>
                  <p className="mt-2 font-extrabold leading-6 text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">
                    {related.h1}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">
                    View stage
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="hs-container hs-section">
          <Reveal className="hs-cta-band px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="relative">
              <p className="text-sm font-extrabold text-red-200">{page.stage}</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                Send your supplier, order stage, deadline, and main concern.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Huang Sourcing will suggest the practical China-side check that fits the decision in front of you.
              </p>
            </div>
            <ContactAgentButton
              analyticsLabel={page.primaryCtaLabel}
              analyticsLocation={`stage_page_${page.slug}_final`}
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
