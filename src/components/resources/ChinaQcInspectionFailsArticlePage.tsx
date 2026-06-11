import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import {
  ArticleByline,
  EvidenceBasisSection,
} from '@/components/resources/ArticleTrustSignals'
import { JsonLd } from '@/components/seo/JsonLd'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  makeChinaQcInspectionFailsArticleJsonLd,
  chinaQcInspectionFailsArticle,
} from '@/lib/china-qc-inspection-fails-article'
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

export function ChinaQcInspectionFailsArticlePage() {
  const whatsappHref = buildWhatsAppHref(
    chinaQcInspectionFailsArticle.whatsappMessage,
  )

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeChinaQcInspectionFailsArticleJsonLd()} />
      <SiteBreadcrumbs
        currentPath={chinaQcInspectionFailsArticle.href}
        items={[
          { label: 'China sourcing risk guides', href: '/china-sourcing-risk-guides' },
          { label: chinaQcInspectionFailsArticle.title },
        ]}
      />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="min-w-0 lg:col-span-6">
            <p className="hs-eyebrow">{chinaQcInspectionFailsArticle.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold text-[var(--hs-text)] sm:text-5xl">
              {chinaQcInspectionFailsArticle.h1}
            </h1>
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {chinaQcInspectionFailsArticle.intro}
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-base leading-7">
              {chinaQcInspectionFailsArticle.answerSummary}
            </p>
            <ArticleByline
              publishedDate={chinaQcInspectionFailsArticle.publishedDate}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={chinaQcInspectionFailsArticle.primaryCta.label}
                analyticsLocation="china_qc_inspection_fails_article_hero"
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                href={whatsappHref}
                size="lg"
                variant="default"
              >
                {chinaQcInspectionFailsArticle.primaryCta.label}
              </ContactAgentButton>
              <Button
                asChild
                className="hs-btn-secondary h-12 px-6 text-sm sm:px-8"
                size="lg"
                variant="outline"
              >
                <a href={chinaQcInspectionFailsArticle.secondaryCta.href}>
                  {chinaQcInspectionFailsArticle.secondaryCta.label}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delayMs={120}>
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] shadow-[var(--hs-shadow-md)]">
              <div className="relative aspect-video">
                <Image
                  alt={chinaQcInspectionFailsArticle.image.alt}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src={chinaQcInspectionFailsArticle.image.src}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Hold', 'Correct', 'Re-check', 'Release'].map((item) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href="#decision-table"
                  key={item}
                >
                  <span className="block text-xs uppercase text-[var(--hs-accent)]">Decide</span>
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
                {chinaQcInspectionFailsArticle.tableOfContents.map((item) => (
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
                What should a buyer do after a China QC inspection fails?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                Hold automatic payment and pickup, confirm the failed checkpoints against
                the agreed files, and require a traceable supplier correction plan. Release
                only after the buyer accepts the remaining deviation or evidence verifies
                rework, sorting, replacement, relabeling, repacking, or re-inspection.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {chinaQcInspectionFailsArticle.quickChecks.map((item, index) => (
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
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {chinaQcInspectionFailsArticle.checkGroups.map((group) => (
                  <section
                    className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)]"
                    key={group.title}
                  >
                    <h3 className="text-base font-extrabold text-[var(--hs-text)]">
                      {group.title}
                    </h3>
                    <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--hs-muted)]">
                      {group.checks.map((check) => (
                        <li className="flex gap-2" key={check}>
                          <CheckCircle2
                            className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]"
                            aria-hidden
                          />
                          <span>{check}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </Reveal>

            <div className="mt-12 grid gap-12">
              {chinaQcInspectionFailsArticle.sections.map((section, index) => (
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
            <p className="hs-eyebrow">Decision table</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Match the failed finding to the next buyer decision.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              A failed result needs a specific response, not a general supplier promise.
              Use this matrix to connect the finding and evidence to a hold, correction,
              acceptance, re-inspection, pickup, or shipment-release decision.
            </p>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <div className="grid bg-[var(--hs-navy)] text-sm font-extrabold text-white md:grid-cols-3">
              <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">Risk node</div>
              <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">What was checked</div>
              <div className="p-4">Buyer decision</div>
            </div>
            {chinaQcInspectionFailsArticle.decisionRows.map((row) => (
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

      <EvidenceBasisSection
        intro="This failed-inspection guidance is based on the original report, agreed product and packing files, defect traceability, supplier correction evidence, payment or pickup timing, and China-side judgment about what must be verified before goods move."
        items={chinaQcInspectionFailsArticle.evidenceBasis}
      />

      <section className="hs-section-white" id="documents">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <FileText className="size-6" aria-hidden />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              What to send for a failed-inspection review.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Send the original report, approved requirements, supplier response,
              correction evidence, order stage, and release deadlines. Clear inputs
              let Agent Huang separate an acceptable deviation from a rework,
              sorting, replacement, repacking, or re-inspection decision.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={chinaQcInspectionFailsArticle.whatToSend} />
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
              Red flags after a failed QC result.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Slow down when the supplier cannot trace correction to the original
              failed checkpoints, wants payment before verification, or treats a few
              photos as proof of broad rework. Release pressure should not replace
              evidence about affected goods and remaining risk.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={chinaQcInspectionFailsArticle.redFlags} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="limits">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <p className="hs-eyebrow">Scope limits</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What a failed inspection and re-check cannot prove.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              A failed report and any follow-up check support a buyer decision within
              the agreed sample and scope. They cannot prove every unit is defective
              or defect-free, force supplier correction, replace lab or compliance
              work, or guarantee hidden quality and future performance.
            </p>
            <BulletList items={chinaQcInspectionFailsArticle.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Related next steps</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Move from a failed report to verified correction.
            </h2>
          </Reveal>
          <div className="grid gap-3 lg:col-span-8 md:grid-cols-2">
            {chinaQcInspectionFailsArticle.relatedLinks.map((link, index) => (
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
            {chinaQcInspectionFailsArticle.faqs.map((faq, index) => (
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
              <p className="text-sm font-extrabold text-red-200">Failed QC review</p>
              <h2 className="mt-3 text-3xl font-extrabold">
                Decide what must happen before payment or shipment release.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send the failed report, supplier response, product files, correction
                evidence, balance status, and pickup deadline. Agent Huang will help
                map the findings to a hold, correction, re-inspection, or release decision.
              </p>
            </div>
            <ContactAgentButton
              analyticsLabel={chinaQcInspectionFailsArticle.primaryCta.label}
              analyticsLocation="china_qc_inspection_fails_article_final"
              className="relative mt-7 h-12 bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] lg:mt-0"
              href={whatsappHref}
              size="lg"
              variant="default"
            >
              Review failed inspection
            </ContactAgentButton>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
