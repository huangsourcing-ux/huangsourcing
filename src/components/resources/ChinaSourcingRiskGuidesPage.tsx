import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
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
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950 antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <SiteBreadcrumbs items={[{ label: 'China sourcing risk guides' }]} />

      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#fbfcfd_0%,#f5f7f8_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-red-600">Resources</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              China sourcing risk guides for overseas buyers.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Practical guide categories for supplier verification, QC inspection,
              pre-shipment inspection, Amazon FBA prep, sample consolidation,
              China sourcing risk notes, and buyer decision checklists.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel="Start with Free Risk Check"
                analyticsLocation="resource_guides_hero"
                className="h-12 rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98] sm:px-8"
                href={riskCheckHref}
                size="lg"
                variant="default"
              >
                Start with Free Risk Check
              </ContactAgentButton>
              <Button
                asChild
                className="h-12 rounded-md border-slate-300 bg-white px-6 text-sm font-bold text-slate-900 shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-700 hover:shadow-md active:scale-[0.98] sm:px-8"
                size="lg"
                variant="outline"
              >
                <a href="#guide-categories">
                  Browse guide categories
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex size-12 items-center justify-center rounded-md bg-slate-950 text-white">
                <BookOpen className="size-6" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
                Start from the risk question, not the service name.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
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
                  <li className="flex gap-2 text-sm font-semibold leading-6 text-slate-700" key={item}>
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-red-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white" id="guide-categories">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Browse by sourcing risk topic.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              These are category hubs for buyer decisions. They link to live service
              pages and stage guides instead of placeholder blog posts.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {resourceGuideCategories.map((category) => (
              <a
                className="inline-flex min-h-10 items-center rounded-md border border-slate-200 bg-slate-50 px-3 text-sm font-bold text-slate-700 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                href={`${resourceGuideHref}#${category.id}`}
                key={category.id}
              >
                {category.title}
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {resourceGuideCategories.map((category) => (
              <article
                className="scroll-mt-24 rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm"
                id={category.id}
                key={category.id}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Guide category
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{category.summary}</p>

                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Internal links
                  </p>
                  <nav aria-label={`${category.title} resource links`} className="mt-3 grid gap-2">
                    {category.links.map((link) => (
                      <Link
                        className="group inline-flex min-h-10 items-center justify-between gap-3 rounded-md bg-white px-3 text-sm font-bold text-slate-800 ring-1 ring-slate-200 transition-colors hover:text-red-700 hover:ring-red-200"
                        href={link.href}
                        key={link.href}
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="size-4 shrink-0 text-slate-400 group-hover:text-red-600" aria-hidden />
                      </Link>
                    ))}
                  </nav>
                </div>

                <Button
                  asChild
                  className="mt-5 h-auto min-h-11 w-full whitespace-normal rounded-md bg-red-600 px-4 py-2 text-sm font-bold leading-5 text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98] sm:w-auto"
                  size="default"
                  variant="default"
                >
                  <Link href={category.ctaHref}>
                    {category.ctaLabel}
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-red-300">Not sure where to start?</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Send the supplier, order stage, deadline, and main concern.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              Huang Sourcing will point you to the practical guide or China-side check
              that matches the decision in front of you.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ContactAgentButton
              analyticsLabel="Start with Free Risk Check"
              analyticsLocation="resource_guides_final"
              className="h-12 rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98]"
              href={riskCheckHref}
              size="lg"
              variant="default"
            >
              Start with Free Risk Check
            </ContactAgentButton>
            <Button
              asChild
              className="h-12 rounded-md border-slate-700 bg-slate-900 px-6 text-sm font-bold text-white shadow-sm transition-all hover:border-red-300 hover:bg-slate-800"
              size="lg"
              variant="outline"
            >
              <Link href={chinaSourcingServicesHref}>View services overview</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
