import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { JsonLd } from '@/components/seo/JsonLd'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  makeSupplierDepositGuideJsonLd,
  supplierDepositGuide,
} from '@/lib/supplier-deposit-guide'
import { buildWhatsAppHref } from '@/lib/site-links'

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
      {items.map((item) => (
        <li className="flex gap-2" key={item}>
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-red-600" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function SupplierDepositGuidePage() {
  const whatsappHref = buildWhatsAppHref(supplierDepositGuide.whatsappMessage)

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950 antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeSupplierDepositGuideJsonLd()} />
      <SiteBreadcrumbs
        items={[
          { label: 'China sourcing risk guides', href: '/china-sourcing-risk-guides' },
          { label: supplierDepositGuide.title },
        ]}
      />

      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#fbfcfd_0%,#f5f7f8_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-12 lg:py-16">
          <div className="min-w-0 lg:col-span-6">
            <p className="text-sm font-semibold text-red-600">
              {supplierDepositGuide.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              {supplierDepositGuide.h1}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {supplierDepositGuide.intro}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              {supplierDepositGuide.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98] sm:px-8"
                size="lg"
                variant="default"
              >
                <Link href={supplierDepositGuide.primaryCta.href}>
                  {supplierDepositGuide.primaryCta.label}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                className="h-12 rounded-md border-slate-300 bg-white px-6 text-sm font-bold text-slate-900 shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-700 hover:shadow-md active:scale-[0.98] sm:px-8"
                size="lg"
                variant="outline"
              >
                <Link href={supplierDepositGuide.secondaryCta.href}>
                  {supplierDepositGuide.secondaryCta.label}
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
              <div className="relative aspect-video">
                <Image
                  alt={supplierDepositGuide.image.alt}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src={supplierDepositGuide.image.src}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white" id="what-to-check">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <div className="flex size-12 items-center justify-center rounded-md bg-slate-950 text-white">
                <ShieldCheck className="size-6" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
                Article guide
              </h2>
              <nav aria-label="Article table of contents" className="mt-5 grid gap-2">
                {supplierDepositGuide.tableOfContents.map((item) => (
                  <a
                    className="inline-flex min-h-10 items-center justify-between gap-3 rounded-md bg-white px-3 text-sm font-bold text-slate-800 ring-1 ring-slate-200 transition-colors hover:text-red-700 hover:ring-red-200"
                    href={item.href}
                    key={item.href}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="size-4 shrink-0 text-slate-400" aria-hidden />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="min-w-0 lg:col-span-8">
            <div className="grid gap-10">
              {supplierDepositGuide.sections.map((section) => (
                <section className="scroll-mt-24" id={section.id} key={section.id}>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                    {section.title}
                  </h2>
                  <div className="mt-4 grid gap-4 text-base leading-7 text-slate-600">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? <BulletList items={section.bullets} /> : null}
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-red-600">Related next steps</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Move from the article to the right buyer-side check.
            </h2>
          </div>
          <div className="grid gap-3 lg:col-span-8 md:grid-cols-2">
            {supplierDepositGuide.relatedLinks.map((link) => (
              <Link
                className="group rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-red-200 hover:bg-red-50"
                href={link.href}
                key={link.href}
              >
                <h3 className="text-lg font-bold text-slate-950 group-hover:text-red-600">
                  {link.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{link.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-red-600">
                  Open page
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            Frequently asked questions
          </h2>
          <div className="mt-6 grid gap-3">
            {supplierDepositGuide.faqs.map((faq) => (
              <article
                className="rounded-lg border border-slate-200 bg-slate-50 p-5"
                key={faq.question}
              >
                <h3 className="text-base font-bold text-slate-950">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-red-300">Before deposit decision</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Send your supplier details for buyer-side verification.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              Share the supplier link, company name, quote or PI, deposit request,
              and main concern. Huang Sourcing will help you decide the next practical step.
            </p>
          </div>
          <ContactAgentButton
            analyticsLabel="Send supplier details for verification"
            analyticsLocation="supplier_deposit_guide_final"
            className="h-12 rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98]"
            href={whatsappHref}
            size="lg"
            variant="default"
          >
            Send supplier details
          </ContactAgentButton>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
