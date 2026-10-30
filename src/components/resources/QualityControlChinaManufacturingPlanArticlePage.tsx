import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileText,
  ShieldCheck,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { ArticleByline, EvidenceBasisSection } from '@/components/resources/ArticleTrustSignals'
import { JsonLd } from '@/components/seo/JsonLd'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  makeQualityControlChinaManufacturingPlanArticleJsonLd,
  qualityControlChinaManufacturingPlanArticle,
} from '@/lib/quality-control-china-manufacturing-plan-article'
import { buildWhatsAppHref } from '@/lib/site-links'

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--hs-muted)]">
      {items.map((item) => (
        <li className="flex gap-2" key={item}>
          <CheckCircle2
            aria-hidden
            className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function QualityControlChinaManufacturingPlanArticlePage() {
  const article = qualityControlChinaManufacturingPlanArticle
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeQualityControlChinaManufacturingPlanArticleJsonLd()} />
      <SiteBreadcrumbs
        currentPath={article.href}
        items={[
          { label: 'China sourcing risk guides', href: '/china-sourcing-risk-guides' },
          { label: article.title },
        ]}
      />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="min-w-0 lg:col-span-6">
            <p className="hs-eyebrow">{article.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold text-[var(--hs-text)] sm:text-5xl">
              {article.h1}
            </h1>
            <ArticleByline
              modifiedDate={article.modifiedDate}
              publishedDate={article.publishedDate}
            />
            <p className="hs-muted mt-3 max-w-3xl text-sm leading-6">
              October 31 update by the{' '}
              <Link className="font-semibold text-[var(--hs-accent)] underline underline-offset-4" href="/about">
                Huang Sourcing Editorial Team
              </Link>
              , using AI-assisted public-source research and an original buyer handoff framework.
              No client case or expert review is claimed.
            </p>
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {article.intro}
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-base leading-7">
              {article.answerSummary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={article.primaryCta.label}
                analyticsLocation="quality_control_china_manufacturing_plan_article_hero"
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                href={whatsappHref}
                size="lg"
                variant="default"
              >
                {article.primaryCta.label}
              </ContactAgentButton>
              <Button
                asChild
                className="hs-btn-secondary h-12 px-6 text-sm sm:px-8"
                size="lg"
                variant="outline"
              >
                <a href={article.secondaryCta.href}>{article.secondaryCta.label}</a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delayMs={120}>
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] shadow-[var(--hs-shadow-md)]">
              <div className="relative aspect-video">
                <Image
                  alt={article.image.alt}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src={article.image.src}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Supplier', 'Standard', 'Production', 'Release'].map((item) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href="#decision-table"
                  key={item}
                >
                  <span className="block text-xs uppercase text-[var(--hs-accent)]">
                    Control
                  </span>
                  <span className="mt-2 block leading-5">{item}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="quick-checks">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="hs-card sticky top-24 bg-[var(--hs-bg-soft)] p-5">
              <div className="hs-icon-box size-12">
                <ClipboardCheck aria-hidden className="size-6" />
              </div>
              <h2 className="mt-5 text-2xl font-extrabold text-[var(--hs-text)]">
                Article guide
              </h2>
              <nav aria-label="Article table of contents" className="mt-5 grid gap-2">
                {article.tableOfContents.map((item) => (
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
              <p className="hs-eyebrow">Quick answer</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
                How should an importer control quality in China manufacturing?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                Build one evidence chain from supplier qualification and product approval through
                production, inspection, correction, payment, and shipment release.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {article.quickChecks.map((item, index) => (
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
              {article.sections.map((section, index) => (
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

      <section className="hs-section-soft" id="decision-table">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Quality-control decision table</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Match the control depth to the order risk.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Supplier history, product complexity, change status, defect cost, and correction
              timing determine whether an early check, final inspection, or both are justified.
            </p>
          </Reveal>
          <div className="mt-8 overflow-x-auto rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <table className="w-full min-w-3xl border-collapse text-left text-sm leading-6">
              <thead className="bg-[var(--hs-navy)] text-white">
                <tr>
                  <th className="p-4 font-extrabold" scope="col">Order situation</th>
                  <th className="border-l border-white/10 p-4 font-extrabold" scope="col">What was checked</th>
                  <th className="border-l border-white/10 p-4 font-extrabold" scope="col">Buyer decision</th>
                </tr>
              </thead>
              <tbody>
                {article.decisionRows.map((row) => (
                  <tr className="border-t border-[var(--hs-border)]" key={row.riskNode}>
                    <th className="bg-[var(--hs-bg-soft)] p-4 align-top font-extrabold text-[var(--hs-text)]" scope="row">
                      {row.riskNode}
                    </th>
                    <td className="border-l border-[var(--hs-border)] p-4 align-top text-[var(--hs-muted)]">
                      {row.whatWasChecked}
                    </td>
                    <td className="border-l border-[var(--hs-border)] p-4 align-top text-[var(--hs-muted)]">
                      {row.buyerDecision}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="control-handoff">
        <div className="hs-container hs-section">
          <Reveal className="max-w-4xl">
            <p className="hs-eyebrow">Buyer to factory to inspector</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Put each important requirement in one control handoff record.
            </h2>
            <p className="hs-muted mt-4 text-base leading-7">
              The five stages work only when the factory, checker, and buyer use the same
              approved version and know who closes an exception. For each requirement that
              could change an order decision, copy these four fields into the order file.
              The{' '}
              <a
                className="font-semibold text-[var(--hs-accent)] underline underline-offset-4"
                href={article.sourceNotes[0].href}
                rel="noreferrer"
                target="_blank"
              >
                ISO 9001 Auditing Practices Group guidance
              </a>{' '}
              supports correct purchase requirements, monitoring, and risk-based checks of
              external providers. This record is our recommended private-buyer adaptation,
              not an ISO-required form.{' '}
              <a
                className="font-semibold text-[var(--hs-accent)] underline underline-offset-4"
                href={article.sourceNotes[3].href}
                rel="noreferrer"
                target="_blank"
              >
                ASQ supplier-quality guidance
              </a>{' '}
              also points to cross-functional selection and ongoing supplier monitoring.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {article.controlHandoffRows.map((row, index) => (
              <div className="hs-card bg-white p-6" key={row.field}>
                <p className="text-xs font-extrabold uppercase tracking-wide text-[var(--hs-accent)]">
                  Field {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-extrabold text-[var(--hs-text)]">
                  {row.field}
                </h3>
                <p className="hs-muted mt-3 text-sm leading-6">
                  <span className="font-extrabold text-[var(--hs-text)]">Owner and evidence: </span>
                  {row.ownerAndEvidence}
                </p>
                <p className="hs-muted mt-3 border-t border-[var(--hs-border)] pt-3 text-sm leading-6">
                  <span className="font-extrabold text-[var(--hs-text)]">Buyer decision: </span>
                  {row.buyerDecision}
                </p>
              </div>
            ))}
          </div>

          <Reveal className="hs-card mt-6 max-w-4xl bg-[var(--hs-bg-soft)] p-6">
            <h3 className="text-lg font-extrabold text-[var(--hs-text)]">
              {article.controlHandoffExample.label}
            </h3>
            <p className="hs-muted mt-3 text-sm leading-7">
              {article.controlHandoffExample.text}
            </p>
          </Reveal>
          <p className="hs-muted mt-5 max-w-4xl text-sm leading-6">
            The buyer or a qualified product owner sets the actual method, sample basis,
            acceptance rule, and specialist review. A scoped inspection records what it
            observed; it does not certify uninspected units or settle legal, safety, or
            destination-market requirements.
          </p>
        </div>
      </section>

      <EvidenceBasisSection
        className="hs-section-white"
        intro="This October 31 editorial update connects controlled buyer requirements, supplier acknowledgment, scoped inspection evidence, and written release decisions. Public guidance informs the framework; the example is hypothetical."
        items={article.evidenceBasis}
      />

      <section className="hs-section-soft" id="source-notes">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12"><ShieldCheck aria-hidden className="size-6" /></div>
            <p className="hs-eyebrow mt-5">Research basis · checked October 30, 2026</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Standards and importer responsibilities vary by product and market.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              These official and professional sources frame external-provider controls,
              acceptance sampling, and product-safety limits. They do not replace
              product-specific technical or legal advice.
            </p>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2 lg:col-span-8">
            {article.sourceNotes.map((source, index) => (
              <a
                className="hs-link-card group bg-white p-5"
                href={source.href}
                key={source.href}
                rel="noreferrer"
                style={{ transitionDelay: `${index * 35}ms` }}
                target="_blank"
              >
                <h3 className="text-base font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">
                  {source.label}
                </h3>
                <p className="hs-muted mt-2 text-sm leading-6">{source.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">
                  Open source <ExternalLink aria-hidden className="size-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="documents">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12"><FileText aria-hidden className="size-6" /></div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              What to send for a China quality-control review.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Send the supplier, controlled product files, production status, known changes,
              inspection rules, payment stage, and deadline as one decision package.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8"><BulletList items={article.whatToSend} /></Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="red-flags">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12"><AlertTriangle aria-hidden className="size-6" /></div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              Red flags that quality control started too late.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              These signals increase the chance that the buyer will discover an undefined,
              changed, incomplete, or inaccessible product only when payment or pickup is due.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8"><BulletList items={article.redFlags} /></Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="limits">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <div className="hs-icon-box size-12"><Building2 aria-hidden className="size-6" /></div>
            <p className="hs-eyebrow mt-5">Scope limits</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What a quality-control plan cannot guarantee.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Quality planning reduces avoidable uncertainty. It does not guarantee every unit,
              supplier action, hidden condition, or destination-market requirement.
            </p>
            <BulletList items={article.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Related next steps</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Build the evidence chain for the next order decision.
            </h2>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2 lg:col-span-8">
            {article.relatedLinks.map((link, index) => (
              <Link className="hs-link-card group bg-white p-5" href={link.href} key={link.href} style={{ transitionDelay: `${index * 35}ms` }}>
                <h3 className="text-lg font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">{link.label}</h3>
                <p className="hs-muted mt-2 text-sm leading-6">{link.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">
                  Open page <ArrowRight aria-hidden className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="faq">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Frequently asked questions</h2></Reveal>
          <div className="mt-6 grid gap-3">
            {article.faqs.map((faq, index) => (
              <Reveal key={faq.question} staggerIndex={index}>
                <details className="group hs-card bg-white p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-[var(--hs-text)] marker:content-none">
                    <span>{faq.question}</span>
                    <span aria-hidden className="text-xl leading-none text-[var(--hs-accent)] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="hs-muted mt-3 border-t border-[var(--hs-border)] pt-3 text-sm leading-6">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="hs-container hs-section">
          <Reveal className="hs-cta-band px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="relative">
              <p className="text-sm font-extrabold text-red-200">Before payment or shipment release</p>
              <h2 className="mt-3 text-3xl font-extrabold">
                Control the product before payment and shipment release.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send the supplier, product files, approved sample, production status, quality
                risks, inspection timing, payment stage, and deadline for a China-side review.
              </p>
            </div>
            <ContactAgentButton
              analyticsLabel={article.primaryCta.label}
              analyticsLocation="quality_control_china_manufacturing_plan_article_final"
              className="relative mt-7 h-12 bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] lg:mt-0"
              href={whatsappHref}
              size="lg"
              variant="default"
            >
              {article.primaryCta.label}
            </ContactAgentButton>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
