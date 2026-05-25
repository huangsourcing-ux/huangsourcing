import {
  AlertTriangle,
  ArrowRight,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  PackageCheck,
  ShieldCheck,
  Tags,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { ArticleByline } from '@/components/resources/ArticleTrustSignals'
import { JsonLd } from '@/components/seo/JsonLd'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  buyerSideInspectionReportArticle,
  makeBuyerSideInspectionReportArticleJsonLd,
} from '@/lib/buyer-side-inspection-report-article'
import { buildWhatsAppHref } from '@/lib/site-links'

function BulletList({ items }: { items: string[] }) {
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

export function BuyerSideInspectionReportArticlePage() {
  const whatsappHref = buildWhatsAppHref(buyerSideInspectionReportArticle.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-hidden antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeBuyerSideInspectionReportArticleJsonLd()} />
      <SiteBreadcrumbs
        currentPath={buyerSideInspectionReportArticle.href}
        items={[
          { label: 'China sourcing risk guides', href: '/china-sourcing-risk-guides' },
          { label: buyerSideInspectionReportArticle.title },
        ]}
      />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="min-w-0 lg:col-span-6">
            <p className="hs-eyebrow">{buyerSideInspectionReportArticle.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold text-[var(--hs-text)] sm:text-5xl">
              {buyerSideInspectionReportArticle.h1}
            </h1>
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {buyerSideInspectionReportArticle.intro}
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-base leading-7">
              {buyerSideInspectionReportArticle.answerSummary}
            </p>
            <ArticleByline publishedDate={buyerSideInspectionReportArticle.publishedDate} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={buyerSideInspectionReportArticle.primaryCta.label}
                analyticsLocation="buyer_side_inspection_report_article_hero"
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                href={whatsappHref}
                size="lg"
                variant="default"
              >
                {buyerSideInspectionReportArticle.primaryCta.label}
              </ContactAgentButton>
              <Button
                asChild
                className="hs-btn-secondary h-12 px-6 text-sm sm:px-8"
                size="lg"
                variant="outline"
              >
                <a href={buyerSideInspectionReportArticle.secondaryCta.href}>
                  {buyerSideInspectionReportArticle.secondaryCta.label}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delayMs={120}>
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] shadow-[var(--hs-shadow-md)]">
              <div className="relative aspect-video">
                <Image
                  alt={buyerSideInspectionReportArticle.image.alt}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src={buyerSideInspectionReportArticle.image.src}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Scope', 'Photos', 'Labels', 'Limits'].map((item) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href="#report-sections"
                  key={item}
                >
                  <span className="block text-xs uppercase text-[var(--hs-accent)]">Report</span>
                  <span className="mt-2 block leading-5">{item}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="quick-answer">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="hs-card sticky top-24 bg-[var(--hs-bg-soft)] p-5">
              <div className="hs-icon-box size-12">
                <ClipboardCheck className="size-6" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl font-extrabold text-[var(--hs-text)]">
                Article guide
              </h2>
              <nav aria-label="Article table of contents" className="mt-5 grid gap-2">
                {buyerSideInspectionReportArticle.tableOfContents.map((item) => (
                  <a
                    className="inline-flex min-h-10 items-center justify-between gap-3 rounded-md bg-white px-3 text-sm font-extrabold text-[var(--hs-text)] ring-1 ring-[var(--hs-border)] transition-colors hover:text-[var(--hs-accent-strong)] hover:ring-[var(--hs-accent)]"
                    href={item.href}
                    key={item.href}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="size-4 shrink-0 text-[var(--hs-muted-soft)]" aria-hidden />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="min-w-0 lg:col-span-8">
            <Reveal>
              <p className="hs-eyebrow">Quick answer</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
                What should the report show before you decide?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                It should show the exact order, the scope, the documents used, the
                products and cartons checked, the visible findings, and the limits.
                Then it should connect that evidence to your next move before
                payment, pickup, or shipment.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {buyerSideInspectionReportArticle.quickChecks.map((item, index) => (
                  <div
                    className="flex min-h-16 gap-3 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-card-warm)] p-4 text-sm leading-6 text-[var(--hs-muted)]"
                    key={item}
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-xs font-extrabold text-white">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="mt-12 grid gap-12">
              {buyerSideInspectionReportArticle.sections.map((section, index) => (
                <Reveal as="section" className="scroll-mt-24" id={section.id} key={section.id} staggerIndex={index}>
                  <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">{section.title}</h2>
                  <div className="hs-muted mt-4 grid gap-4 text-base leading-7">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? <BulletList items={section.bullets} /> : null}
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="hs-section-soft" id="report-sections">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Visual evidence module</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Six report sections that make the evidence useful.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              A buyer-side report should make each section traceable: what was
              checked, what evidence supports it, and what decision the buyer can make.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {buyerSideInspectionReportArticle.reportModules.map((item, index) => (
              <Reveal
                as="article"
                className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)]"
                key={item.title}
                staggerIndex={index}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex size-10 items-center justify-center rounded-md bg-[var(--hs-accent-soft)] text-sm font-extrabold text-[var(--hs-accent)]">
                    {index + 1}
                  </span>
                  {index === 0 ? <FileText className="size-5 text-[var(--hs-muted-soft)]" aria-hidden /> : null}
                  {index === 1 ? <Camera className="size-5 text-[var(--hs-muted-soft)]" aria-hidden /> : null}
                  {index === 2 ? <Tags className="size-5 text-[var(--hs-muted-soft)]" aria-hidden /> : null}
                  {index === 3 ? <PackageCheck className="size-5 text-[var(--hs-muted-soft)]" aria-hidden /> : null}
                  {index === 4 ? <AlertTriangle className="size-5 text-[var(--hs-muted-soft)]" aria-hidden /> : null}
                  {index === 5 ? <ShieldCheck className="size-5 text-[var(--hs-muted-soft)]" aria-hidden /> : null}
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-[var(--hs-text)]">{item.title}</h3>
                <p className="hs-muted mt-3 text-sm leading-6">{item.evidence}</p>
                <p className="mt-4 rounded-md bg-[var(--hs-bg-soft)] p-3 text-sm font-semibold leading-6 text-[var(--hs-text)]">
                  {item.decisionUse}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="decision-table">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Buyer decision table</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              How report findings should lead to a next action.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              The report should not leave the buyer guessing. Each risk node should
              connect visible evidence to a payment, rework, label, packing, pickup,
              or re-inspection decision.
            </p>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <div className="grid bg-[var(--hs-navy)] text-sm font-extrabold text-white md:grid-cols-3">
              <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">Risk node</div>
              <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">What was checked</div>
              <div className="p-4">Buyer decision</div>
            </div>
            {buyerSideInspectionReportArticle.decisionRows.map((row) => (
              <div
                className="grid border-t border-[var(--hs-border)] text-sm leading-6 text-[var(--hs-muted)] md:grid-cols-3"
                key={row.riskNode}
              >
                <div className="bg-[var(--hs-bg-soft)] p-4 font-extrabold text-[var(--hs-text)] md:border-r md:border-[var(--hs-border)]">
                  {row.riskNode}
                </div>
                <div className="p-4 md:border-r md:border-[var(--hs-border)]">{row.whatWasChecked}</div>
                <div className="p-4">{row.buyerDecision}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-soft" id="evidence-basis">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <ShieldCheck className="size-6" aria-hidden />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              Evidence basis for this advice.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Huang Sourcing reads inspection reports from the buyer decision
              backward: what evidence is strong enough before money or goods move?
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={buyerSideInspectionReportArticle.evidenceBasis} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="what-to-send">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <FileText className="size-6" aria-hidden />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              What to send before the report is scoped.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              The report is only as strong as the files and decision context the
              buyer provides before inspection.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={buyerSideInspectionReportArticle.whatToSend} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="red-flags">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <AlertTriangle className="size-6" aria-hidden />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              Red flags in a weak inspection report.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              These signs usually mean the buyer should ask for clearer evidence
              before releasing balance payment or approving pickup.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={buyerSideInspectionReportArticle.redFlags} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="limits">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <p className="hs-eyebrow">Scope limits</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What a buyer-side report cannot guarantee.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Honest scope limits make the report more useful. They tell the buyer
              where evidence ends and where another check, supplier correction, or
              specialist review may be needed.
            </p>
            <BulletList items={buyerSideInspectionReportArticle.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Related next steps</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Move from report review to the right check.
            </h2>
          </Reveal>
          <div className="grid gap-3 lg:col-span-8 md:grid-cols-2">
            {buyerSideInspectionReportArticle.relatedLinks.map((link, index) => (
              <Link
                className="hs-link-card group bg-white p-5"
                href={link.href}
                key={link.href}
                style={{ transitionDelay: `${index * 35}ms` }}
              >
                <h3 className="text-lg font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">
                  {link.label}
                </h3>
                <p className="hs-muted mt-2 text-sm leading-6">{link.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">
                  Open page
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="faq">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-3">
            {buyerSideInspectionReportArticle.faqs.map((faq, index) => (
              <Reveal
                as="article"
                className="hs-card bg-[var(--hs-bg-soft)] p-5"
                key={faq.question}
                staggerIndex={index}
              >
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
              <p className="text-sm font-extrabold text-red-200">Before payment or pickup</p>
              <h2 className="mt-3 text-3xl font-extrabold">
                Make the report answer the buyer decision.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send the product files, packing requirements, label files, deadline,
                and decision you need. Agent Huang will help scope the report around
                evidence you can actually use.
              </p>
            </div>
            <ContactAgentButton
              analyticsLabel={buyerSideInspectionReportArticle.primaryCta.label}
              analyticsLocation="buyer_side_inspection_report_article_final"
              className="relative mt-7 h-12 bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] lg:mt-0"
              href={whatsappHref}
              size="lg"
              variant="default"
            >
              {buyerSideInspectionReportArticle.primaryCta.label}
            </ContactAgentButton>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
