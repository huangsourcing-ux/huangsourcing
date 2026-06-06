import { Building2, Mail, MessageCircle, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

import { TrackedEmailLink } from '@/components/analytics/TrackedEmailLink'
import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { SocialLinks } from '@/components/site/SocialLinks'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  companyDetails,
  companyDetailsLines,
} from '@/lib/company-details'
import {
  chinaSourcingServicesHref,
  contactHref,
} from '@/lib/site-links'

function ContactPage() {
  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="contact" topBanner={null} />
      <SiteBreadcrumbs currentPath={contactHref} items={[{ label: 'Contact' }]} />

      <section className="hs-hero">
        <div className="hs-container grid items-start gap-8 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-7">
            <p className="hs-eyebrow">Contact Huang Sourcing</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-5xl">
              Buyer-side China sourcing support, with clear company details.
            </h1>
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              Send your supplier, product, order stage, and the decision you need
              to make next. Huang Sourcing supports buyers with China-side
              supplier verification, QC inspection, sample coordination, and
              shipment preparation before payment, pickup, or shipment.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel="Contact page WhatsApp"
                analyticsLocation="contact_page_hero"
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
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
                <TrackedEmailLink
                  className="inline-flex items-center justify-center gap-2"
                  ctaLocation="contact_page_hero"
                  email={companyDetails.email}
                >
                  <Mail className="size-4 shrink-0" aria-hidden />
                  Email Huang Sourcing
                </TrackedEmailLink>
              </Button>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                'UK-registered company structure',
                'China-side supplier verification and QC support',
                'Evidence-first support before money or goods move',
              ].map((item) => (
                <div
                  className="rounded-md border border-[var(--hs-border)] bg-white/70 p-3 text-sm font-bold leading-6 text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)]"
                  key={item}
                >
                  <ShieldCheck className="mb-2 size-4 text-[var(--hs-accent)]" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="hs-card bg-white p-6 shadow-[var(--hs-shadow-md)] lg:col-span-5">
            <div className="flex size-11 items-center justify-center rounded-md bg-[var(--hs-accent-soft)] text-[var(--hs-accent)]">
              <Building2 className="size-5" aria-hidden />
            </div>
            <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Company details
            </h2>
            <div className="mt-5 grid gap-3 text-sm font-semibold leading-6 text-[var(--hs-muted)]">
              {companyDetailsLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                Email:{' '}
                <TrackedEmailLink
                  className="font-extrabold text-[var(--hs-accent-strong)] underline-offset-4 hover:underline"
                  ctaLocation="contact_page_company_details"
                  email={companyDetails.email}
                >
                  {companyDetails.email}
                </TrackedEmailLink>
              </p>
            </div>
            <div className="mt-6 border-t border-[var(--hs-border)] pt-5">
              <p className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">
                Other channels
              </p>
              <SocialLinks className="mt-3" showSupportingLabel />
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-white">
        <div className="hs-container hs-section grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Before you pay',
              body: 'Send the supplier link, company name, quote, payment terms, and concern.',
            },
            {
              title: 'Before pickup',
              body: 'Send the product, carton count, packing list, pickup window, and factory or warehouse address.',
            },
            {
              title: 'Before FBA shipment',
              body: 'Send SKU details, label files, carton marks, shipment plan, and deadline.',
            },
          ].map((card) => (
            <article className="hs-card bg-[var(--hs-bg-soft)] p-5" key={card.title}>
              <MessageCircle className="size-5 text-[var(--hs-accent)]" aria-hidden />
              <h2 className="mt-4 text-lg font-extrabold text-[var(--hs-text)]">
                {card.title}
              </h2>
              <p className="hs-muted mt-2 text-sm font-medium leading-6">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--hs-bg-soft)]">
        <div className="hs-container py-10 text-center">
          <Link
            className="text-sm font-extrabold text-[var(--hs-accent)] underline-offset-4 hover:underline"
            href={chinaSourcingServicesHref}
          >
            View China sourcing services
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

export { ContactPage }
