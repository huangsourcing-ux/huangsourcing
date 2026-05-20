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
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:gap-10 lg:py-12">
        <section aria-labelledby="footer-company">
          <p
            className="text-xs font-bold uppercase tracking-wider text-slate-500"
            id="footer-company"
          >
            Company Information
          </p>
          <p className="mt-4 text-lg font-extrabold tracking-tight text-slate-950">
            Huang Sourcing
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Independent China-side sourcing support for overseas buyers who need
            supplier verification, QC inspection, sample consolidation, and
            shipment preparation before payment or pickup.
          </p>
          <p className="mt-4 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold leading-6 text-slate-800">
            Buyer-aligned service · Practical evidence · No supplier-paid
            recommendations
          </p>
          <nav aria-label="Trust and policies" className="mt-4 grid gap-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Trust & policies
            </p>
            {footerTrustPolicies.map((policy) => (
              <Link
                className="text-sm font-semibold leading-6 text-slate-700 transition-colors hover:text-red-600"
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
            className="text-xs font-bold uppercase tracking-wider text-slate-500"
            id="footer-contact"
          >
            Contact us
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <TrackedEmailLink
              aria-label={`Email: ${businessEmail}`}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-950 transition-colors hover:border-red-200 hover:text-red-600"
              ctaLocation="site_footer"
              email={businessEmail}
            >
              <Mail className="size-4 shrink-0" aria-hidden />
              <span>Email</span>
              <span className="text-xs font-semibold text-slate-500">{businessEmail}</span>
            </TrackedEmailLink>
            <SocialLinks showSupportingLabel />
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm font-semibold leading-6 text-slate-600">
            <MapPin className="size-4 shrink-0 text-red-600" aria-hidden />
            <span>Shanghai base · Nationwide China</span>
          </p>
        </section>

        <section aria-labelledby="footer-services">
          <p
            className="text-xs font-bold uppercase tracking-wider text-slate-500"
            id="footer-services"
          >
            services
          </p>
          <nav aria-label="Footer services" className="mt-4 grid gap-2">
            {footerServices.map((service) => (
              <Link
                className="text-sm font-semibold leading-6 text-slate-700 transition-colors hover:text-red-600"
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
            className="text-xs font-bold uppercase tracking-wider text-slate-500"
            id="footer-resources"
          >
            resources
          </p>
          <nav aria-label="Footer resources" className="mt-4 grid gap-2">
            {footerResources.map((resource) => (
              <Link
                className="text-sm font-semibold leading-6 text-slate-700 transition-colors hover:text-red-600"
                href={resource.href}
                key={resource.href}
              >
                {resource.title}
              </Link>
            ))}
          </nav>
        </section>
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-4 py-4 text-center text-xs font-semibold leading-5 text-slate-500">
        © 2026 Huang Sourcing. All rights reserved. Powered by OpenAI.
      </div>
    </footer>
  )
}

export { SiteFooter }
