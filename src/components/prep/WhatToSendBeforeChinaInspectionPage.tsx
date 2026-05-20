import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  Barcode,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MapPin,
  PackageCheck,
  Search,
  Send,
  ShieldCheck,
  Timer,
  Truck,
} from 'lucide-react'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  bookingPrepFaqs,
  bookingPrepQuoteReasons,
  bookingPrepQuickChecklist,
  bookingPrepServiceItems,
  type BookingPrepServiceItem,
} from '@/lib/inspection-booking-prep'
import type { SeoServiceSlug } from '@/lib/seo-service-pages'
import {
  buildWhatsAppHref,
  chinaSourcingInspectionPricingHref,
  chinaSourcingServicesHref,
} from '@/lib/site-links'

const freeRiskHref = '/free-china-sourcing-risk-check'

const bookingPrepWhatsAppHref = buildWhatsAppHref(`Hi Agent Huang,

I want to prepare files for a China inspection or supplier check.

Service needed:
Supplier / factory:
Product:
Order stage:
Deadline:
Files ready so far:
Main concern:
`)

const serviceIcons: Record<SeoServiceSlug, LucideIcon> = {
  'supplier-verification-china': Search,
  'qc-inspection-china': ClipboardCheck,
  'china-pre-shipment-inspection': Truck,
  'amazon-fba-prep-china': Barcode,
  'sample-consolidation-china': PackageCheck,
}

const quickSummary = [
  {
    title: 'Supplier details',
    body: 'Company name, link, factory address, contact person, and any marketplace profile.',
    Icon: Search,
  },
  {
    title: 'Order context',
    body: 'Product, SKU count, order quantity, carton count, order value, and current payment stage.',
    Icon: FileText,
  },
  {
    title: 'Timing',
    body: 'Inspection date, pickup window, payment deadline, sample arrival, or FBA shipment plan.',
    Icon: Timer,
  },
  {
    title: 'Files and evidence',
    body: 'PO, packing list, photos, labels, barcodes, approved sample notes, or shipment-plan files.',
    Icon: ShieldCheck,
  },
]

function PrepChecklist({ items }: { items: string[] }) {
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

function ServicePrepCard({ item, index }: { item: BookingPrepServiceItem; index: number }) {
  const Icon = serviceIcons[item.slug]

  return (
    <Reveal
      as="article"
      className="hs-card hs-card-hover flex min-h-[360px] flex-col bg-[var(--hs-card-warm)] p-5"
      staggerIndex={index}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="hs-icon-box">
          <Icon className="size-5" aria-hidden />
        </div>
        <span className="rounded-full bg-[var(--hs-accent-soft)] px-3 py-1 text-xs font-extrabold text-[var(--hs-accent-strong)]">
          {item.stage}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-extrabold leading-6 text-[var(--hs-text)]">
        {item.service}
      </h3>
      <p className="hs-muted mt-3 text-sm leading-6">{item.note}</p>
      <div className="mt-5 border-t border-[var(--hs-border)] pt-4">
        <p className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">
          What to send
        </p>
        <PrepChecklist items={item.whatToSend} />
      </div>
      <Link
        className="mt-auto inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[var(--hs-navy)] px-4 text-sm font-extrabold text-white transition-all hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)]"
        href={item.href}
      >
        Open service page
        <ArrowRight className="size-4" aria-hidden />
      </Link>
    </Reveal>
  )
}

function WhatToSendBeforeChinaInspectionPage() {
  return (
    <main className="hs-page min-h-screen overflow-x-hidden antialiased">
      <SiteHeader activePage="service" topBanner={null} />
      <SiteBreadcrumbs
        items={[
          { label: 'China sourcing services', href: chinaSourcingServicesHref },
          { label: 'What to send before booking' },
        ]}
      />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="lg:col-span-7">
            <p className="hs-eyebrow">Booking prep · Faster China-side quotes</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-5xl">
              What to send before booking a China inspection or supplier check.
            </h1>
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              Complete booking details help Agent Huang quote faster, choose the
              right China-side scope, and focus the check on the buyer decision in
              front of you: supplier risk, balance payment, pickup, FBA shipment,
              or sample comparison.
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-sm font-semibold leading-6">
              You can still start with partial information. The goal is to reduce
              avoidable back-and-forth before paid work starts, not to promise that
              every sourcing risk can be removed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel="Talk to Agent Huang about booking prep"
                analyticsLocation="booking_prep_hero"
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                href={bookingPrepWhatsAppHref}
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
              <div className="flex items-start justify-between gap-4">
                <div className="hs-icon-box">
                  <Send className="size-5" aria-hidden />
                </div>
                <span className="rounded-full bg-[var(--hs-accent-soft)] px-3 py-1 text-xs font-extrabold text-[var(--hs-accent-strong)]">
                  Before quote
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-[var(--hs-text)]">
                Send these first if you have them.
              </h2>
              <PrepChecklist items={bookingPrepQuickChecklist} />
              <Link
                className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--hs-accent)] transition-colors hover:text-[var(--hs-accent-strong)]"
                href={chinaSourcingInspectionPricingHref}
              >
                View pricing guide
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Quick checklist</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              The same five categories make most quotes faster.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              The exact files depend on the service, but these inputs usually decide
              whether Huang Sourcing can scope the work clearly.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {quickSummary.map((item, index) => (
              <Reveal
                as="article"
                className="hs-card hs-card-hover bg-[var(--hs-card-warm)] p-5"
                key={item.title}
                staggerIndex={index}
              >
                <div className="flex size-10 items-center justify-center rounded-md bg-[var(--hs-navy)] text-white">
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

      <section className="hs-section-soft">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">By service</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              What to send before each China-side service.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Use the service cards below as a preparation guide before asking for a
              quote, booking an inspection date, or deciding which risk check fits.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {bookingPrepServiceItems.map((item, index) => (
              <ServicePrepCard item={item} index={index} key={item.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Quote speed</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Why complete files reduce back-and-forth.
            </h2>
            <p className="hs-muted mt-4 text-base leading-7">
              Good prep does not make a supplier risk-free. It makes the China-side
              check easier to scope, schedule, and explain.
            </p>
          </Reveal>
          <div className="grid gap-4 lg:col-span-8 md:grid-cols-2">
            {bookingPrepQuoteReasons.map((item, index) => (
              <Reveal
                as="article"
                className="hs-card hs-card-hover bg-[var(--hs-bg-soft)] p-5"
                key={item.title}
                staggerIndex={index}
              >
                <div className="flex size-10 items-center justify-center rounded-md bg-[var(--hs-accent-soft)] text-[var(--hs-accent)]">
                  <MapPin className="size-5" aria-hidden />
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

      <section className="hs-section-soft">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Booking prep questions buyers often ask.
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-3">
            {bookingPrepFaqs.map((faq, index) => (
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
              <p className="text-sm font-extrabold text-red-200">Need a faster quote?</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                Send your files for a faster China-side scope.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Share the supplier, product, factory location, order stage, deadline,
                and the files you already have. Agent Huang will suggest the practical
                next step before payment, pickup, or shipment.
              </p>
            </div>
            <div className="relative mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <ContactAgentButton
                analyticsLabel="Talk to Agent Huang about booking prep"
                analyticsLocation="booking_prep_final"
                className="h-12 bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)]"
                href={bookingPrepWhatsAppHref}
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

export { WhatToSendBeforeChinaInspectionPage }
