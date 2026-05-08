import { Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

import { SocialLinks } from '@/components/site/SocialLinks'
import { seoServicePages, seoServiceSlugs } from '@/lib/seo-service-pages'
import { businessEmail } from '@/lib/site-links'

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
            Buyer-side sourcing, supplier verification, QC inspection, sample
            consolidation, and China-side shipment support for overseas buyers.
          </p>
          <p className="mt-4 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold leading-6 text-slate-800">
            China-side support · Buyer-aligned service · No supplier-paid
            recommendations.
          </p>
        </section>

        <section aria-labelledby="footer-contact">
          <p
            className="text-xs font-bold uppercase tracking-wider text-slate-500"
            id="footer-contact"
          >
            Contact us
          </p>
          <a
            className="mt-4 flex items-center gap-2 text-sm font-bold text-slate-950 transition-colors hover:text-red-600"
            href={`mailto:${businessEmail}`}
          >
            <Mail className="size-4 shrink-0" aria-hidden />
            <span>Email: {businessEmail}</span>
          </a>
          <SocialLinks className="mt-4" showSupportingLabel />
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
            {seoServiceSlugs.map((slug) => (
              <Link
                className="text-sm font-semibold leading-6 text-slate-700 transition-colors hover:text-red-600"
                href={`/${slug}`}
                key={slug}
              >
                {seoServicePages[slug].title}
              </Link>
            ))}
          </nav>
        </section>

        <section aria-labelledby="footer-blog">
          <p
            className="text-xs font-bold uppercase tracking-wider text-slate-500"
            id="footer-blog"
          >
            blog
          </p>
          <div className="mt-4 border-l-2 border-red-600 pl-4">
            <p className="text-sm font-extrabold text-slate-950">Latest articles</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Coming soon. China sourcing notes, QC inspection guides, and FBA
              prep articles are being prepared.
            </p>
          </div>
        </section>
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-4 py-4 text-center text-xs font-semibold leading-5 text-slate-500">
        Copyright 2026 Huang Sourcing | All Rights Reserved powerby:openai
      </div>
    </footer>
  )
}

export { SiteFooter }
