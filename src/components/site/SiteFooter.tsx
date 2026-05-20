import { Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

import { TrackedEmailLink } from '@/components/analytics/TrackedEmailLink'
import { SocialLinks } from '@/components/site/SocialLinks'
import {
  resourceGuideCategories,
} from '@/lib/resource-guide-categories'
import { seoServicePages, seoServiceSlugs } from '@/lib/seo-service-pages'
import {
  businessEmail,
  chinaSourcingServicesHref,
  resourceGuideHref,
  sampleReportPageHref,
} from '@/lib/site-links'
import { trustPolicyPages, trustPolicySlugs } from '@/lib/trust-policy-pages'

const footerServices = [
  {
    href: chinaSourcingServicesHref,
    title: 'China sourcing services overview',
  },
  {
    href: '/free-china-sourcing-risk-check',
    title: 'Free China Sourcing Risk Check',
  },
  {
    href: sampleReportPageHref,
    title: 'Sample inspection report',
  },
  ...seoServiceSlugs.map((slug) => ({
    href: `/${slug}`,
    title: seoServicePages[slug].title,
  })),
]

const footerResources = [
  {
    href: resourceGuideHref,
    title: 'China sourcing risk guides',
  },
  ...resourceGuideCategories.map((category) => ({
    href: `${resourceGuideHref}#${category.id}`,
    title: category.title,
  })),
]

const footerTrustPolicies = trustPolicySlugs.map((slug) => ({
  href: trustPolicyPages[slug].href,
  title: trustPolicyPages[slug].title,
}))

function SiteFooter() {
  return (
    <footer className="border-t border-[var(--hs-border)] bg-[var(--hs-bg-soft)]">
      <div className="hs-container grid gap-6 py-10 lg:grid-cols-[1.25fr_1fr_1fr_1fr] lg:gap-8 lg:py-12">
        <section
          aria-labelledby="footer-company"
          className="rounded-lg border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)]"
        >
          <p
            className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]"
            id="footer-company"
          >
            Company Information
          </p>
          <p className="mt-4 text-lg font-extrabold tracking-tight text-[var(--hs-text)]">
            Huang Sourcing
          </p>
          <p className="mt-3 text-sm leading-6 text-[var(--hs-muted)]">
            Independent China-side sourcing support for overseas buyers who need
            supplier verification, QC inspection, sample consolidation, and
            shipment preparation before payment or pickup.
          </p>
          <p className="mt-4 rounded-md border border-[var(--hs-border)] bg-[var(--hs-accent-soft)] px-3 py-2 text-sm font-bold leading-6 text-[var(--hs-text)]">
            Buyer-aligned service · Practical evidence · No supplier-paid
            recommendations
          </p>
          <nav aria-label="Trust and policies" className="mt-4 grid gap-2">
            <p className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">
              Trust & policies
            </p>
            {footerTrustPolicies.map((policy) => (
              <Link
                className="text-sm font-semibold leading-6 text-[var(--hs-muted)] transition-colors hover:text-[var(--hs-accent)]"
                href={policy.href}
                key={policy.href}
              >
                {policy.title}
              </Link>
            ))}
          </nav>
        </section>

        <section aria-labelledby="footer-contact">
          <p
            className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]"
            id="footer-contact"
          >
            Contact us
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <TrackedEmailLink
              aria-label={`Email: ${businessEmail}`}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[var(--hs-border)] bg-white px-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent)]"
              ctaLocation="site_footer"
              email={businessEmail}
            >
              <Mail className="size-4 shrink-0" aria-hidden />
              <span>Email</span>
              <span className="text-xs font-semibold text-[var(--hs-muted-soft)]">{businessEmail}</span>
            </TrackedEmailLink>
            <SocialLinks showSupportingLabel />
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm font-semibold leading-6 text-[var(--hs-muted)]">
            <MapPin className="size-4 shrink-0 text-[var(--hs-accent)]" aria-hidden />
            <span>Shanghai base · Nationwide China</span>
          </p>
        </section>

        <section aria-labelledby="footer-services">
          <p
            className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]"
            id="footer-services"
          >
            services
          </p>
          <nav aria-label="Footer services" className="mt-4 grid gap-2">
            {footerServices.map((service) => (
              <Link
                className="text-sm font-semibold leading-6 text-[var(--hs-muted)] transition-colors hover:text-[var(--hs-accent)]"
                href={service.href}
                key={service.href}
              >
                {service.title}
              </Link>
            ))}
          </nav>
        </section>

        <section aria-labelledby="footer-resources">
          <p
            className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]"
            id="footer-resources"
          >
            resources
          </p>
          <nav aria-label="Footer resources" className="mt-4 grid gap-2">
            {footerResources.map((resource) => (
              <Link
                className="text-sm font-semibold leading-6 text-[var(--hs-muted)] transition-colors hover:text-[var(--hs-accent)]"
                href={resource.href}
                key={resource.href}
              >
                {resource.title}
              </Link>
            ))}
          </nav>
        </section>
      </div>

      <div className="border-t border-[var(--hs-border)] bg-white/70 px-4 py-4 text-center text-xs font-semibold leading-5 text-[var(--hs-muted-soft)]">
        © 2026 Huang Sourcing. All rights reserved.
      </div>
    </footer>
  )
}

export { SiteFooter }
