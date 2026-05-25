import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  resourceGuideCategories,
} from '@/lib/resource-guide-categories'
import {
  buildWhatsAppHref,
  chinaSourcingServicesHref,
  resourceGuideHref,
} from '@/lib/site-links'

const riskCheckHref = buildWhatsAppHref(`Hi Agent Huang,

I want a free sourcing risk check.

Supplier link / quote:
Product:
Order stage:
Deadline:
Main concern:
`)

export function ChinaSourcingRiskGuidesPage() {
  return (
    <main className="hs-page min-h-screen overflow-x-hidden antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <SiteBreadcrumbs
        currentPath={resourceGuideHref}
        items={[{ label: 'China sourcing risk guides' }]}
      />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="lg:col-span-7">
            <p className="hs-eyebrow">Resources</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-5xl">
              China sourcing risk guides for overseas buyers.
            </h1>
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              Practical guide categories for supplier verification, QC inspection,
              pre-shipment inspection, Amazon FBA prep, sample consolidation,
              China sourcing risk notes, and buyer decision checklists.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel="Start with Free Risk Check"
                analyticsLocation="resource_guides_hero"
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                href={riskCheckHref}
                size="lg"
                variant="default"
              >
                Start with Free Risk Check
              </ContactAgentButton>
              <Button
                asChild
                className="hs-btn-secondary h-12 px-6 text-sm sm:px-8"
                size="lg"
                variant="outline"
              >
                <a href="#guide-categories">
                  Browse guide categories
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delayMs={120}>
            <div className="hs-card bg-white p-5">
              <div className="hs-icon-box size-12">
                <BookOpen className="size-6" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-[var(--hs-text)]">
                Start from the risk question, not the service name.
              </h2>
              <p className="hs-muted mt-3 text-sm leading-6">
                Each category points to existing service pages, procurement-stage pages,
                sample report evidence, and the free risk check so buyers can move from
                uncertainty to the next practical China-side step.
              </p>
              <ul className="mt-5 grid gap-3">
                {[
                  'Before deposit or supplier selection',
                  'Before balance payment or pickup',
                  'Before Amazon FBA shipment',
                ].map((item) => (
                  <li className="flex gap-2 text-sm font-semibold leading-6 text-[var(--hs-muted)]" key={item}>
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="guide-categories">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Browse by sourcing risk topic.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              These are category hubs for buyer decisions. They link to live service
              pages and stage guides instead of placeholder blog posts.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2">
            {resourceGuideCategories.map((category) => (
              <a
                className="inline-flex min-h-10 items-center rounded-md border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] px-3 text-sm font-extrabold text-[var(--hs-muted)] transition-colors hover:border-[var(--hs-accent)] hover:bg-[var(--hs-accent-soft)] hover:text-[var(--hs-accent-strong)]"
                href={`${resourceGuideHref}#${category.id}`}
                key={category.id}
              >
                {category.title}
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {resourceGuideCategories.map((category, index) => (
              <Reveal
                as="article"
                className="hs-card hs-card-hover scroll-mt-24 bg-[var(--hs-card-warm)] p-5"
                id={category.id}
                key={category.id}
                staggerIndex={index}
              >
                <p className="text-xs font-extrabold uppercase text-[var(--hs-accent)]">
                  Guide category
                </p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[var(--hs-text)]">
                  {category.title}
                </h3>
                <p className="hs-muted mt-3 text-sm leading-6">{category.summary}</p>

                <div className="mt-5 border-t border-[var(--hs-border)] pt-4">
                  <p className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">
                    Internal links
                  </p>
                  <nav aria-label={`${category.title} resource links`} className="mt-3 grid gap-2">
                    {category.links.map((link) => (
                      <Link
                        className="group inline-flex min-h-10 items-center justify-between gap-3 rounded-md bg-white px-3 text-sm font-extrabold text-[var(--hs-text)] ring-1 ring-[var(--hs-border)] transition-colors hover:text-[var(--hs-accent-strong)] hover:ring-[var(--hs-accent)]"
                        href={link.href}
                        key={link.href}
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="size-4 shrink-0 text-[var(--hs-muted-soft)] group-hover:text-[var(--hs-accent)]" aria-hidden />
                      </Link>
                    ))}
                  </nav>
                </div>

                <Button
                  asChild
                  className="hs-btn-primary mt-5 h-auto min-h-11 w-full whitespace-normal px-4 py-2 text-sm leading-5 sm:w-auto"
                  size="default"
                  variant="default"
                >
                  <Link href={category.ctaHref}>
                    {category.ctaLabel}
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="hs-container hs-section">
          <Reveal className="hs-cta-band px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="relative">
              <p className="text-sm font-extrabold text-red-200">Not sure where to start?</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                Send the supplier, order stage, deadline, and main concern.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Huang Sourcing will point you to the practical guide or China-side check
                that matches the decision in front of you.
              </p>
            </div>
          <div className="relative mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <ContactAgentButton
              analyticsLabel="Start with Free Risk Check"
              analyticsLocation="resource_guides_final"
              className="h-12 bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)]"
              href={riskCheckHref}
              size="lg"
              variant="default"
            >
              Start with Free Risk Check
            </ContactAgentButton>
            <Button
              asChild
              className="h-12 border-white/20 bg-transparent px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-white hover:text-[var(--hs-navy)]"
              size="lg"
              variant="outline"
            >
              <Link href={chinaSourcingServicesHref}>View services overview</Link>
            </Button>
          </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
