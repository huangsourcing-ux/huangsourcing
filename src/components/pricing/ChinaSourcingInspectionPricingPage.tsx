import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ClipboardList,
  MapPin,
  PackageCheck,
  Timer,
} from 'lucide-react'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  pricingGuideFaqs,
  servicePricingGuideItems,
} from '@/lib/service-pricing'
import {
  buildWhatsAppHref,
  chinaSourcingServicesHref,
  whatToSendBeforeChinaInspectionHref,
} from '@/lib/site-links'

const freeRiskHref = '/free-china-sourcing-risk-check'

const quoteScopeItems = [
  {
    title: 'Supplier count',
    body: 'One supplier is simpler than comparing several factories, documents, quotes, and locations.',
    Icon: ClipboardList,
  },
  {
    title: 'Factory location',
    body: 'Nearby city checks are easier to schedule. Remote or travel-heavy locations can affect cost.',
    Icon: MapPin,
  },
  {
    title: 'SKU and carton count',
    body: 'More SKUs, cartons, labels, or packaging variations need more onsite time and clearer sampling.',
    Icon: PackageCheck,
  },
  {
    title: 'Deadline pressure',
    body: 'Urgent payment, pickup, or shipment windows may require faster scheduling or extra coordination.',
    Icon: Timer,
  },
  {
    title: 'AQL and scope complexity',
    body: 'Simple visual checks are different from detailed AQL sampling, function checks, or special instructions.',
    Icon: Calculator,
  },
]

const pricingQuoteHref = buildWhatsAppHref(`Hi Agent Huang,

I need a price quote for China-side sourcing or inspection support.

Service needed:
Supplier / factory location:
Product:
SKUs / cartons:
Order value:
Deadline:
Main concern:
`)

function ChinaSourcingInspectionPricingPage() {
  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="service" topBanner={null} />
      <SiteBreadcrumbs
        currentPath="/china-sourcing-inspection-pricing"
        items={[
          { label: 'China sourcing services', href: chinaSourcingServicesHref },
          { label: 'Pricing guide' },
        ]}
      />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="lg:col-span-7">
            <p className="hs-eyebrow">China inspection cost · Sourcing quote guide</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-5xl">
              China sourcing inspection pricing and quote guide.
            </h1>
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              Use these starting points to understand China-side supplier verification,
              QC inspection, pre-shipment inspection, sample consolidation, and Amazon
              FBA prep pricing before you ask for a quote.
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-sm font-semibold leading-6">
              Final pricing depends on the service scope, supplier location, SKU and
              carton count, deadline, and whether onsite work or deeper document review
              is needed. No quote is treated as a zero-risk guarantee.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel="Talk to Agent Huang about pricing"
                analyticsLocation="pricing_guide_hero"
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                href={pricingQuoteHref}
                size="lg"
                variant="default"
              >
                Talk to Agent Huang
              </ContactAgentButton>
              <Button
                asChild
                className="hs-btn-secondary h-12 px-6 text-sm sm:px-8"
                size="lg"
                variant="outline"
              >
                <Link href={freeRiskHref}>
                  Start with Free Risk Check
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delayMs={120}>
            <div className="hs-card bg-white p-6">
              <div className="hs-icon-box">
                <Calculator className="size-5" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-[var(--hs-text)]">
                What to send for a clear quote
              </h2>
              <ul className="mt-5 grid gap-3">
                {[
                  'Supplier name and factory location',
                  'Product, SKU count, and carton count',
                  'Order value, payment stage, and deadline',
                  'Main concern: supplier, QC, pickup, FBA, or samples',
                ].map((item) => (
                  <li className="flex gap-2 text-sm font-semibold leading-6 text-[var(--hs-muted)]" key={item}>
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--hs-accent)] transition-colors hover:text-[var(--hs-accent-strong)]"
                href={whatToSendBeforeChinaInspectionHref}
              >
                What to send before booking
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="pricing">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Starting points by service.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              These are practical quote starting points, not fixed package promises.
              Huang Sourcing confirms scope before paid work starts.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:hidden">
            {servicePricingGuideItems.map((item, index) => (
              <Reveal
                as="article"
                className="hs-card hs-card-hover bg-[var(--hs-card-warm)] p-5"
                key={item.slug}
                staggerIndex={index}
              >
                <p className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">
                  Service
                </p>
                <h3 className="mt-2 text-xl font-extrabold text-[var(--hs-text)]">
                  {item.service}
                </h3>
                <p className="mt-4 text-2xl font-extrabold text-[var(--hs-accent)]">
                  {item.startingPoint}
                </p>
                <p className="hs-muted mt-3 text-sm leading-6">{item.whatAffectsPrice}</p>
                <Link
                  className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-md bg-[var(--hs-navy)] px-4 text-sm font-extrabold text-white transition-all hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)]"
                  href={item.href}
                >
                  Open service page
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 hidden overflow-x-auto rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)] md:block">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <thead className="bg-[var(--hs-bg-soft)] text-xs uppercase text-[var(--hs-muted-soft)]">
                <tr>
                  <th className="border-b border-[var(--hs-border)] px-4 py-3">Service</th>
                  <th className="border-b border-[var(--hs-border)] px-4 py-3">Starting point</th>
                  <th className="border-b border-[var(--hs-border)] px-4 py-3">What affects price</th>
                  <th className="border-b border-[var(--hs-border)] px-4 py-3">Next step</th>
                </tr>
              </thead>
              <tbody>
                {servicePricingGuideItems.map((item) => (
                  <tr className="align-top transition-colors hover:bg-[var(--hs-bg-soft)]" key={item.slug}>
                    <td className="border-b border-[var(--hs-border)] px-4 py-4">
                      <Link className="font-extrabold text-[var(--hs-text)] hover:text-[var(--hs-accent)]" href={item.href}>
                        {item.service}
                      </Link>
                    </td>
                    <td className="border-b border-[var(--hs-border)] px-4 py-4 font-extrabold text-[var(--hs-accent)]">
                      {item.startingPoint}
                    </td>
                    <td className="border-b border-[var(--hs-border)] px-4 py-4 leading-6 text-[var(--hs-muted)]">
                      {item.whatAffectsPrice}
                    </td>
                    <td className="border-b border-[var(--hs-border)] px-4 py-4">
                      <Link
                        className="inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                        href={item.href}
                      >
                        View service
                        <ArrowRight className="size-4" aria-hidden />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">How quotes are scoped</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              The quote follows the decision you need to make.
            </h2>
            <p className="hs-muted mt-4 text-base leading-7">
              A supplier desk check, one-day QC inspection, sample consolidation
              request, and FBA label/prep scope each need different inputs.
            </p>
          </Reveal>
          <div className="grid gap-4 lg:col-span-8 md:grid-cols-2">
            {quoteScopeItems.map((item, index) => (
              <Reveal
                as="article"
                className="hs-card hs-card-hover bg-white p-5"
                key={item.title}
                staggerIndex={index}
              >
                <div className="flex size-10 items-center justify-center rounded-md bg-[var(--hs-accent-soft)] text-[var(--hs-accent)]">
                  <item.Icon className="size-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-[var(--hs-text)]">
                  {item.title}
                </h3>
                <p className="hs-muted mt-2 text-sm leading-6">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Quote notes</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              What changes the final quote.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {servicePricingGuideItems.map((item, index) => (
              <Reveal
                as="article"
                className="hs-card hs-card-hover bg-[var(--hs-card-warm)] p-5"
                key={item.slug}
                staggerIndex={index}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-extrabold text-[var(--hs-text)]">{item.service}</h3>
                  <span className="rounded-full bg-[var(--hs-accent-soft)] px-3 py-1 text-xs font-extrabold text-[var(--hs-accent-strong)]">
                    {item.startingPoint}
                  </span>
                </div>
                <p className="hs-muted mt-3 text-sm leading-6">{item.quoteNote}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.factors.map((factor) => (
                    <span className="hs-chip bg-white" key={factor}>{factor}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Pricing questions buyers often ask.
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-3">
            {pricingGuideFaqs.map((faq, index) => (
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
              <p className="text-sm font-extrabold text-red-200">Need a quote this week?</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                Send supplier, product, factory location, order value, and deadline.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Agent Huang will suggest the practical China-side service and quote
                scope before you pay, approve pickup, or release shipment.
              </p>
            </div>
            <div className="relative mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <ContactAgentButton
                analyticsLabel="Talk to Agent Huang about pricing"
                analyticsLocation="pricing_guide_final"
                className="h-12 bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)]"
                href={pricingQuoteHref}
                size="lg"
                variant="default"
              >
                Talk to Agent Huang
              </ContactAgentButton>
              <Button
                asChild
                className="h-12 border-white/20 bg-transparent px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-white hover:text-[var(--hs-navy)]"
                size="lg"
                variant="outline"
              >
                <Link href={freeRiskHref}>Start with Free Risk Check</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

export { ChinaSourcingInspectionPricingPage }
