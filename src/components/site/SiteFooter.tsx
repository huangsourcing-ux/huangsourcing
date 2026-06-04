import { Mail } from 'lucide-react'
import Link from 'next/link'

import { TrackedEmailLink } from '@/components/analytics/TrackedEmailLink'
import { PreFooterCta } from '@/components/site/PreFooterCta'
import { SocialLinks } from '@/components/site/SocialLinks'
import { companyDetails } from '@/lib/company-details'
import {
  businessEmail,
  chinaSourcingInspectionPricingHref,
  privacyConfidentialityHref,
  resourceGuideHref,
  sampleReportPageHref,
  scopeLimitationsHref,
  termsBookingPolicyHref,
} from '@/lib/site-links'

type FooterLink = {
  href: string
  title: string
}

const footerServices: FooterLink[] = [
  { href: '/supplier-verification-china', title: 'Supplier Verification' },
  { href: '/qc-inspection-china', title: 'QC Inspection' },
  { href: '/china-pre-shipment-inspection', title: 'Pre-Shipment Inspection' },
  { href: '/amazon-fba-prep-china', title: 'Amazon FBA Prep' },
  { href: '/sample-consolidation-china', title: 'Sample Consolidation' },
  { href: chinaSourcingInspectionPricingHref, title: 'Pricing' },
]

const footerResources: FooterLink[] = [
  { href: resourceGuideHref, title: 'China Sourcing Risk Guides' },
  { href: sampleReportPageHref, title: 'Sample Inspection Report' },
  { href: privacyConfidentialityHref, title: 'Privacy & Confidentiality' },
  { href: scopeLimitationsHref, title: 'Scope & Limitations' },
  { href: termsBookingPolicyHref, title: 'Terms / Booking Policy' },
]

function FooterHeading({ children, id }: { children: string; id: string }) {
  return (
    <p
      className="text-xs font-extrabold uppercase tracking-[0.12em] text-white/45"
      id={id}
    >
      {children}
    </p>
  )
}

function FooterLinkList({ links }: { links: FooterLink[] }) {
  return (
    <nav className="mt-3 grid gap-2">
      {links.map((link) => (
        <Link
          className="text-sm font-semibold leading-5 text-white/68 transition-colors hover:text-white"
          href={link.href}
          key={link.href}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  )
}

function SiteFooter() {
  return (
    <>
      <PreFooterCta />

      <footer className="border-t border-white/10 bg-[var(--hs-navy-2)] text-white">
        <div className="hs-container py-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            <section aria-labelledby="footer-company">
              <FooterHeading id="footer-company">Brand &amp; Trust</FooterHeading>
              <p className="mt-3 text-base font-extrabold tracking-tight text-white">
                {companyDetails.displayName}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/64">
                Buyer-side China sourcing support before payment, pickup, or
                shipment.
              </p>
              <div className="mt-3 space-y-1.5 text-xs font-semibold leading-5 text-white/52">
                <p>UK registered company. China-side execution.</p>
                <p>Company No. 17241958. Registered in England and Wales.</p>
                <p>
                  China-side operations: Shanghai base · Nationwide China
                  support.
                </p>
              </div>
            </section>

            <section aria-labelledby="footer-contact">
              <FooterHeading id="footer-contact">Contact</FooterHeading>
              <div className="mt-3 grid gap-2">
                <TrackedEmailLink
                  aria-label={`Email Agent Huang: ${businessEmail}`}
                  className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.06] px-3 text-sm font-bold text-white transition-colors hover:border-white/28 hover:bg-white/[0.1]"
                  ctaLocation="site_footer"
                  email={businessEmail}
                >
                  <Mail className="size-4 shrink-0" aria-hidden />
                  <span>Email Agent Huang</span>
                </TrackedEmailLink>
                <SocialLinks
                  className="grid gap-2"
                  linkClassName="h-9 w-full border-white/12 bg-white/[0.06] text-sm font-bold text-white hover:border-white/28 hover:bg-white/[0.1] hover:text-white"
                />
              </div>
            </section>

            <section aria-labelledby="footer-services">
              <FooterHeading id="footer-services">Services</FooterHeading>
              <FooterLinkList links={footerServices} />
            </section>

            <section aria-labelledby="footer-resources">
              <FooterHeading id="footer-resources">Resources</FooterHeading>
              <FooterLinkList links={footerResources} />
            </section>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/15">
          <div className="hs-container flex flex-col gap-2 py-4 text-xs font-semibold leading-5 text-white/52">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <p className="font-extrabold text-white/78">
                © 2026 Huang Sourcing Ltd. All rights reserved.
              </p>
              <p>
                Huang Sourcing Ltd is registered in England and Wales. Company
                No. 17241958.
              </p>
            </div>
            <p className="max-w-4xl">
              We do not promise zero risk; we help overseas buyers document
              visible risks and make clearer decisions before payment, pickup, or
              shipment.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export { SiteFooter }
