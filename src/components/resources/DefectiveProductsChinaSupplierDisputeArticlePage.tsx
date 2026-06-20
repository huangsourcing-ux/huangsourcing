import {
  AlertTriangle,
  ArrowRight,
  Boxes,
  Calculator,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Scale,
  ShieldCheck,
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
  defectiveProductsChinaSupplierDisputeArticle,
  makeDefectiveProductsChinaSupplierDisputeArticleJsonLd,
} from '@/lib/defective-products-china-supplier-dispute-article'
import { buildWhatsAppHref } from '@/lib/site-links'

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--hs-muted)]">
      {items.map((item) => (
        <li className="flex gap-2" key={item}>
          <CheckCircle2 aria-hidden className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function DefectiveProductsChinaSupplierDisputeArticlePage() {
  const whatsappHref = buildWhatsAppHref(
    defectiveProductsChinaSupplierDisputeArticle.whatsappMessage,
  )

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeDefectiveProductsChinaSupplierDisputeArticleJsonLd()} />
      <SiteBreadcrumbs
        currentPath={defectiveProductsChinaSupplierDisputeArticle.href}
        items={[
          {
            label: 'China sourcing risk guides',
            href: '/china-sourcing-risk-guides',
          },
          { label: defectiveProductsChinaSupplierDisputeArticle.title },
        ]}
      />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="min-w-0 lg:col-span-6">
            <p className="hs-eyebrow">{defectiveProductsChinaSupplierDisputeArticle.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold text-[var(--hs-text)] sm:text-5xl">
              {defectiveProductsChinaSupplierDisputeArticle.h1}
            </h1>
            <ArticleByline
              publishedDate={defectiveProductsChinaSupplierDisputeArticle.publishedDate}
            />
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {defectiveProductsChinaSupplierDisputeArticle.introduction}
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-base leading-7">
              {defectiveProductsChinaSupplierDisputeArticle.answerSummary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={defectiveProductsChinaSupplierDisputeArticle.primaryCta.label}
                analyticsLocation="defective_products_china_supplier_dispute_article_hero"
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                href={whatsappHref}
                size="lg"
                variant="default"
              >
                {defectiveProductsChinaSupplierDisputeArticle.primaryCta.label}
              </ContactAgentButton>
              <Button
                asChild
                className="hs-btn-secondary h-12 px-6 text-sm sm:px-8"
                size="lg"
                variant="outline"
              >
                <a href={defectiveProductsChinaSupplierDisputeArticle.secondaryCta.href}>
                  {defectiveProductsChinaSupplierDisputeArticle.secondaryCta.label}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delayMs={120}>
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] shadow-[var(--hs-shadow-md)]">
              <div className="relative aspect-video">
                <Image
                  alt={defectiveProductsChinaSupplierDisputeArticle.image.alt}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src={defectiveProductsChinaSupplierDisputeArticle.image.src}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Contain', 'Document', 'Claim', 'Prevent'].map((item) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href="#response-plan"
                  key={item}
                >
                  <span className="block text-xs uppercase text-[var(--hs-accent)]">Response</span>
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
              <h2 className="mt-5 text-2xl font-extrabold text-[var(--hs-text)]">Article guide</h2>
              <nav aria-label="Article table of contents" className="mt-5 grid gap-2">
                {defectiveProductsChinaSupplierDisputeArticle.tableOfContents.map((item) => (
                  <a
                    className="inline-flex min-h-10 items-center justify-between gap-3 rounded-md bg-white px-3 text-sm font-extrabold text-[var(--hs-text)] ring-1 ring-[var(--hs-border)] transition-colors hover:text-[var(--hs-accent-strong)] hover:ring-[var(--hs-accent)]"
                    href={item.href}
                    key={item.href}
                  >
                    <span>{item.label}</span>
                    <ArrowRight
                      aria-hidden
                      className="size-4 shrink-0 text-[var(--hs-muted-soft)]"
                    />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="min-w-0 lg:col-span-8">
            <Reveal>
              <p className="hs-eyebrow">What will you learn?</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
                Turn a defective shipment into a controlled response.
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                The sequence matters. Preserve the stock and proof before the supplier discussion
                changes the facts, then negotiate from a clear quantity, requirement, cost, and
                proposed remedy.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {defectiveProductsChinaSupplierDisputeArticle.whatWillYouLearn.map(
                  (question, index) => (
                    <div
                      className="flex min-h-20 gap-3 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-card-warm)] p-4 text-sm leading-6 text-[var(--hs-muted)]"
                      key={question}
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-xs font-extrabold text-white">
                        {index + 1}
                      </span>
                      <span>{question}</span>
                    </div>
                  ),
                )}
              </div>
            </Reveal>

            <div className="mt-12 grid gap-12">
              {defectiveProductsChinaSupplierDisputeArticle.sections
                .slice(0, 3)
                .map((section, index) => (
                  <Reveal
                    as="section"
                    className="scroll-mt-24"
                    id={section.id}
                    key={section.id}
                    staggerIndex={index}
                  >
                    <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">
                      {section.title}
                    </h2>
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

      <section className="hs-section-soft" id="response-plan">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Response plan</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              {defectiveProductsChinaSupplierDisputeArticle.articleStructure.title}.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Run these modules in order. Negotiating before containment, evidence, and valuation
              usually produces a vague promise instead of a workable recovery plan.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {defectiveProductsChinaSupplierDisputeArticle.articleStructure.sections.map(
              (section, index) => (
                <Reveal
                  as="article"
                  className="hs-card bg-white p-5"
                  key={section.title}
                  staggerIndex={index}
                >
                  <span className="flex size-9 items-center justify-center rounded-md bg-[var(--hs-navy)] text-sm font-extrabold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-[var(--hs-text)]">
                    {section.title}
                  </h3>
                  <p className="hs-muted mt-2 text-sm leading-6">{section.summary}</p>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="claim-value">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <Calculator className="size-6" aria-hidden />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              Calculate and present the claim.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Keep confirmed defects, potentially affected stock, direct costs, and commercial
              impact separate. That makes the requested remedy easier to defend.
            </p>
          </Reveal>
          <div className="grid gap-10 lg:col-span-8">
            {defectiveProductsChinaSupplierDisputeArticle.sections
              .slice(3, 5)
              .map((section, index) => (
                <Reveal as="article" key={section.id} staggerIndex={index}>
                  <h3 className="text-2xl font-extrabold text-[var(--hs-text)]">{section.title}</h3>
                  <div className="hs-muted mt-3 grid gap-4 text-base leading-7">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? <BulletList items={section.bullets} /> : null}
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      <section className="hs-section-soft" id="remedy-table">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Remedy decision table</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Match the remedy to the evidence and execution risk.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              A free replacement is not automatically better than a partial refund, local rework, or
              credit. Compare the net recovery and how each remedy will be verified.
            </p>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <div className="grid bg-[var(--hs-navy)] text-sm font-extrabold text-white md:grid-cols-3">
              <div className="border-b border-white/10 p-4 md:border-r md:border-b-0">
                Situation
              </div>
              <div className="border-b border-white/10 p-4 md:border-r md:border-b-0">
                Evidence needed
              </div>
              <div className="p-4">Buyer action</div>
            </div>
            {defectiveProductsChinaSupplierDisputeArticle.decisionRows.map((row) => (
              <div
                className="grid border-t border-[var(--hs-border)] text-sm leading-6 md:grid-cols-3"
                key={row.situation}
              >
                <div className="bg-[var(--hs-bg-soft)] p-4 font-extrabold text-[var(--hs-text)] md:border-r md:border-[var(--hs-border)]">
                  {row.situation}
                </div>
                <div className="hs-muted p-4 md:border-r md:border-[var(--hs-border)]">
                  {row.evidenceNeeded}
                </div>
                <div className="hs-muted p-4">{row.buyerAction}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <Camera className="size-6" aria-hidden />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              Evidence package checklist.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Index the files so a supplier, insurer, adviser, or dispute reviewer can trace each
              finding back to the order and shipment.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={defectiveProductsChinaSupplierDisputeArticle.evidenceChecklist} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="escalation">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <Scale className="size-6" aria-hidden />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              Escalate without losing the commercial objective.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-8">
            {defectiveProductsChinaSupplierDisputeArticle.sections
              .filter((section) => section.id === 'escalation')
              .map((section) => (
                <div key={section.id}>
                  <div className="hs-muted grid gap-4 text-base leading-7">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? <BulletList items={section.bullets} /> : null}
                </div>
              ))}
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="prevention">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <ShieldCheck className="size-6" aria-hidden />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              Prevent the same defect on the next order.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-8">
            {defectiveProductsChinaSupplierDisputeArticle.sections
              .filter((section) => section.id === 'prevention')
              .map((section) => (
                <div key={section.id}>
                  <div className="hs-muted grid gap-4 text-base leading-7">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? <BulletList items={section.bullets} /> : null}
                </div>
              ))}
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="limits">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <div className="flex gap-3 rounded-[var(--hs-radius)] border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
              <AlertTriangle className="mt-0.5 size-5 shrink-0" aria-hidden />
              <p>
                Product safety, regulatory duties, legal rights, and dispute deadlines require
                advice and current terms that fit the product, contract, sales market, and
                jurisdiction.
              </p>
            </div>
            <p className="hs-eyebrow mt-8">Scope limits</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What this response plan cannot guarantee.
            </h2>
            <BulletList items={defectiveProductsChinaSupplierDisputeArticle.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Related next steps</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Move from dispute evidence to prevention.
            </h2>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2 lg:col-span-8">
            {defectiveProductsChinaSupplierDisputeArticle.relatedLinks.map((link, index) => (
              <Link
                className="hs-link-card group bg-[var(--hs-bg-soft)] p-5"
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

      <section className="hs-section-soft" id="faq">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <div className="hs-icon-box size-12">
              <FileSearch className="size-6" aria-hidden />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-3">
            {defectiveProductsChinaSupplierDisputeArticle.faqs.map((faq, index) => (
              <Reveal
                as="article"
                className="hs-card bg-white p-5"
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
              <div className="flex items-center gap-2 text-sm font-extrabold text-red-200">
                <Boxes className="size-4" aria-hidden />
                Replacement or next production order
              </div>
              <h2 className="mt-3 text-3xl font-extrabold">
                Put the confirmed defects into the next inspection scope.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send the product files, defect evidence, corrective-action response, next production
                date, and release deadline. Agent Huang can help scope the China-side check before
                payment or pickup.
              </p>
            </div>
            <ContactAgentButton
              analyticsLabel={defectiveProductsChinaSupplierDisputeArticle.primaryCta.label}
              analyticsLocation="defective_products_china_supplier_dispute_article_final"
              className="relative mt-7 h-12 bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] lg:mt-0"
              href={whatsappHref}
              size="lg"
              variant="default"
            >
              {defectiveProductsChinaSupplierDisputeArticle.primaryCta.label}
            </ContactAgentButton>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
