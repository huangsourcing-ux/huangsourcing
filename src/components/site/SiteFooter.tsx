import { Mail } from 'lucide-react'
import Link from 'next/link'

import { TrackedEmailLink } from '@/components/analytics/TrackedEmailLink'
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
      className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7A818C]"
      id={id}
    >
      {children}
    </p>
  )
}

function FooterLinkList({ links }: { links: FooterLink[] }) {
  return (
    <nav className="mt-2.5 grid gap-x-4 gap-y-1.5 min-[380px]:grid-cols-2 lg:grid-cols-1">
      {links.map((link) => (
        <Link
          className="text-sm font-medium leading-5 text-[#5F6673] transition-colors hover:text-[#1F2933]"
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
    <footer className="border-t border-[rgba(31,41,51,0.08)] bg-[var(--hs-bg)] text-[#5F6673]">
      <div className="hs-container pt-8 pb-6 sm:pt-11 sm:pb-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <section aria-labelledby="footer-company">
            <FooterHeading id="footer-company">Company Information</FooterHeading>
            <p className="mt-2.5 text-base font-bold tracking-tight text-[#1F2933]">
              {companyDetails.displayName}
            </p>
            <p className="mt-1.5 text-sm leading-5 text-[#5F6673]">
              Independent China-side sourcing support before payment, pickup, or
              shipment.
            </p>
            <p className="mt-1.5 text-sm leading-5 text-[#7A818C]">
              Supplier verification · QC inspection · shipment prep
            </p>
            <p className="mt-2 text-sm font-semibold leading-5 text-[#1F2933]">
              Buyer-aligned · Evidence-first · No supplier-paid recommendations
            </p>
            <div className="mt-2 space-y-0.5 text-xs font-medium leading-5 text-[#7A818C]">
              <p>UK registered company. China-side execution.</p>
              <p>Company No. 17241958.</p>
            </div>
          </section>

          <section aria-labelledby="footer-contact">
            <FooterHeading id="footer-contact">Contact</FooterHeading>
            <div className="mt-2.5 flex flex-col items-start gap-2">
              <TrackedEmailLink
                aria-label={`Email Agent Huang: ${businessEmail}`}
                className="inline-flex h-9 w-fit max-w-[220px] items-center gap-2 rounded-md border border-[#E3D8CB] bg-white px-3 text-sm font-semibold text-[#1F2933] transition-colors hover:border-[#D5C5B3] hover:bg-[#FFFCF8]"
                ctaLocation="site_footer"
                email={businessEmail}
              >
                <Mail className="size-4 shrink-0 text-[#7A818C]" aria-hidden />
                <span>Email Agent Huang</span>
              </TrackedEmailLink>
              <SocialLinks
                className="flex flex-wrap gap-2"
                linkClassName="h-9 w-fit max-w-[220px] justify-start border-[#E3D8CB] bg-white text-sm font-semibold text-[#1F2933] shadow-none hover:border-[#D5C5B3] hover:bg-[#FFFCF8] hover:text-[#1F2933]"
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

      <div className="border-t border-[rgba(31,41,51,0.06)] bg-[rgba(31,41,51,0.03)]">
        <div className="hs-container flex flex-col gap-1 py-3.5 text-xs font-medium leading-4 text-[#7A818C]">
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="font-semibold text-[#1F2933]">
              © 2026 Huang Sourcing Ltd. All rights reserved.
            </p>
            <p>Registered in England and Wales. Company No. 17241958.</p>
          </div>
          <p className="max-w-4xl">
            We do not promise zero risk; we help buyers document visible risks
            before payment, pickup, or shipment.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter }
