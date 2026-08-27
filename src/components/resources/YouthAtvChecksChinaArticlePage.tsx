import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileSearch,
  FileText,
  Gauge,
  PackageCheck,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import {
  ArticleByline,
  EvidenceBasisSection,
  EvidenceDecisionMatrix,
} from '@/components/resources/ArticleTrustSignals'
import { JsonLd } from '@/components/seo/JsonLd'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import { buildWhatsAppHref } from '@/lib/site-links'
import {
  cpscYamazukiXwA19Recall,
  makeYouthAtvChecksChinaArticleJsonLd,
  youthAtvChecksChinaArticle,
} from '@/lib/youth-atv-checks-china-article'

function BulletList({ items }: { items: string[] }) {
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

export function YouthAtvChecksChinaArticlePage() {
  const article = youthAtvChecksChinaArticle
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeYouthAtvChecksChinaArticleJsonLd()} />
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
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {article.intro}
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-base leading-7">
              {article.answerSummary}
            </p>
            <ArticleByline
              author={article.author}
              modifiedDate={article.modifiedDate}
              publishedDate={article.publishedDate}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={article.primaryCta.label}
                analyticsLocation="youth_atv_checks_china_article_hero"
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
            <p className="hs-muted mt-3 text-xs leading-5">
              Neutral AI-generated illustration of a generic buyer-side youth ATV
              review; not a factory photograph, standard test, certification, or
              evidence from the cited public cases.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Exact model', 'Age category', 'Physical lot', 'Release'].map((item) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href="#release-checklist"
                  key={item}
                >
                  <span className="block text-xs uppercase text-[var(--hs-accent)]">
                    Evidence gate
                  </span>
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
                What should buyers check before a youth ATV lot leaves China?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                Match each finished model, youth category, speed configuration, brake
                and reflector construction, action-plan party, label, manual, serial or
                VIN range, production lot, and carton to current qualified evidence and
                controlled manufacturing records. Inspect sampled goods only with an
                approved safe method. Hold mismatches, but do not treat a static check,
                supplier ride video, label, or document cover as proof of prescribed
                ATV performance.
              </p>
              <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                {article.quickChecks.map((item, index) => (
                  <li
                    className="flex min-h-16 gap-3 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-card-warm)] p-4 text-sm leading-6 text-[var(--hs-muted)]"
                    key={item}
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-xs font-extrabold text-white">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal as="section" className="mt-12 scroll-mt-24" id="release-checklist">
              <div className="flex items-center gap-3">
                <div className="hs-icon-box size-12">
                  <Gauge aria-hidden className="size-6" />
                </div>
                <div>
                  <p className="hs-eyebrow">China-side evidence module</p>
                  <h2 className="mt-1 text-3xl font-extrabold text-[var(--hs-text)]">
                    Youth ATV lot release checklist
                  </h2>
                </div>
              </div>
              <p className="hs-muted mt-4 text-base leading-7">
                Connect current exact-model evidence and controlled production to
                sampled physical goods and pack-out. This checklist does not turn a
                routine inspection into classification, CPSC action-plan approval,
                dynamic ATV testing, certification, or a safety guarantee.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {article.checkGroups.map((group) => (
                  <section
                    className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 shadow-[var(--hs-shadow-sm)]"
                    key={group.title}
                  >
                    <div className="flex items-center gap-2">
                      <Wrench aria-hidden className="size-5 text-[var(--hs-accent)]" />
                      <h3 className="text-lg font-extrabold text-[var(--hs-text)]">
                        {group.title}
                      </h3>
                    </div>
                    <BulletList items={group.items} />
                  </section>
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
                  {section.citations ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Evidence checked:{' '}
                      {section.citations.map((citation, citationIndex) => (
                        <span key={citation.href}>
                          {citationIndex > 0 ? ', ' : ''}
                          <a
                            className="hs-text-link"
                            href={citation.href}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {citation.label}
                          </a>
                        </span>
                      ))}
                      .
                    </p>
                  ) : null}
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </section>

      <EvidenceDecisionMatrix
        id="decision-table"
        intro="Record the exact cleared model, youth category, limiter and brake configuration, serial or VIN range, lot, assembly state, package, carton range, and every open condition. A sampled physical pass must not conceal missing action-plan or test evidence, mixed builds, failed observations, or unresolved labels."
        rows={article.decisionRows}
        title="Turn youth ATV evidence into a payment or shipment decision."
      />

      <EvidenceBasisSection
        className="hs-section-white"
        intro="This guide combines a new August 2026 CPSC recall, separate current youth ATV actions, current CPSC business and classification guidance, independent coverage, and buyer-side sourcing analysis. It keeps legal classification, action-plan status, qualified performance testing, inspection observations, and release decisions in separate scopes."
        items={article.evidenceBasis}
      />

      <section className="hs-section-soft scroll-mt-24" id="public-case">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <p className="hs-eyebrow">Public case example</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              XW-A19 recall: brake, speed setting, and reflector gaps converged.
            </h2>
            <div className="hs-muted mt-4 grid gap-4 text-base leading-7">
              <p>
                <strong className="text-[var(--hs-text)]">What happened:</strong> On
                August 13, 2026, CPSC announced a voluntary recall with Yamazuki covering
                about 1,050 QEASET- and HOVERHEART-branded XW-A19 40 cc youth ATVs made
                in China. CPSC said the parking brakes failed to hold, the speed limiter
                was not set to the restricted speed required for children ages six and
                older, and required rear reflectors were missing. No incidents or
                injuries were reported in the notice.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">
                  What evidence was public:
                </strong>{' '}
                The{' '}
                <a
                  className="hs-text-link"
                  href={cpscYamazukiXwA19Recall}
                  rel="noreferrer"
                  target="_blank"
                >
                  official CPSC recall 26-693
                </a>{' '}
                identifies the model, brands, displacement, colors, model-plate
                location, failures, quantity, sale period and channels, manufacturer,
                importer, China origin, and free repair-kit contents. It does not publish
                the complete design file, production records, test reports, root-cause
                analysis, serial-range map, or rework verification.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">Buyer lesson:</strong>{' '}
                A release decision must connect physical units to the exact youth
                category, limiter configuration, parking-brake parts, reflectors, model
                identity, current qualified evidence, production lot, and carton map.
                One visible feature or authentic document cannot close the other gates.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">
                  Limits of comparison:
                </strong>{' '}
                This recall does not prove every youth ATV, Chinese supplier, factory,
                model, or lot has the same failures. Huang Sourcing had no role in the
                case. A sampled buyer-side inspection cannot reproduce prescribed ATV
                performance testing, approve an action plan, determine legal
                classification, certify compliance, or guarantee safe rider behavior.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white scroll-mt-24" id="documents">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <div className="hs-icon-box size-12">
              <FileSearch aria-hidden className="size-6" />
            </div>
            <p className="hs-eyebrow mt-5">Inspection input</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[var(--hs-text)]">
              What should the buyer send before inspection?
            </h2>
            <p className="hs-muted mt-4 text-base leading-7">
              Send controlled files early enough to resolve model, category, method,
              safety, sampling, access, assembly, and traceability questions before the
              inspector reaches the lot.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {article.whatToSend.map((item, index) => (
              <Reveal
                className="flex gap-3 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 shadow-[var(--hs-shadow-sm)]"
                key={item}
                staggerIndex={index}
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-xs font-extrabold text-white">
                  {index + 1}
                </span>
                <p className="hs-muted text-sm leading-6">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-soft scroll-mt-24" id="scope-limits">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <AlertTriangle aria-hidden className="size-6" />
            </div>
            <p className="hs-eyebrow mt-5">Scope limits</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[var(--hs-text)]">
              What this inspection cannot prove
            </h2>
            <p className="hs-muted mt-4 text-base leading-7">
              Keep observation, document verification, qualified testing, regulatory
              responsibility, assembly, maintenance, rider training, and real-world use
              in their proper scopes.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={article.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section">
          <Reveal>
            <div className="flex items-center gap-3">
              <PackageCheck aria-hidden className="size-6 text-[var(--hs-accent)]" />
              <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">
                Related buyer decisions
              </h2>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {article.relatedLinks.map((link) => (
                <Link
                  className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)]"
                  href={link.href}
                  key={link.href}
                >
                  <span className="font-extrabold text-[var(--hs-text)]">{link.label}</span>
                  <span className="hs-muted mt-2 block text-sm leading-6">{link.note}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--hs-navy)] text-white">
        <div className="hs-container hs-section">
          <Reveal>
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <ShieldCheck aria-hidden className="size-7 text-[var(--hs-accent)]" />
                  <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[var(--hs-accent)]">
                    Before balance payment or pickup
                  </p>
                </div>
                <h2 className="mt-4 text-3xl font-extrabold">
                  Turn youth ATV evidence into a traceable release decision.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-white/75">
                  Send the exact models, youth categories, action-plan party, reports,
                  approved references, production lots, assembly states, carton map,
                  known changes, and deadline. Huang Sourcing can scope a practical
                  China-side comparison before money or goods move.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-4">
                <ContactAgentButton
                  analyticsLabel="Check youth ATVs before shipment"
                  analyticsLocation="youth_atv_checks_china_article_final_cta"
                  className="hs-btn-primary min-h-12 px-6"
                  href={whatsappHref}
                  size="lg"
                  variant="default"
                >
                  Check Before Shipment
                </ContactAgentButton>
                <Button
                  asChild
                  className="min-h-12 border-white/30 bg-white text-[var(--hs-navy)] hover:bg-white/90"
                  size="lg"
                  variant="outline"
                >
                  <Link href="/qc-inspection-china">View Inspection Service</Link>
                </Button>
                <Button
                  asChild
                  className="min-h-12 border-white/30 bg-transparent text-white hover:bg-white/10"
                  size="lg"
                  variant="outline"
                >
                  <Link href="/free-china-sourcing-risk-check">Free Risk Check</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section">
          <Reveal>
            <div className="flex items-center gap-3">
              <FileText aria-hidden className="size-6 text-[var(--hs-accent)]" />
              <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Sources</h2>
            </div>
            <p className="hs-muted mt-3 max-w-3xl text-sm leading-6">
              Public regulator records, current CPSC business guidance, and independent
              coverage checked August 27, 2026 Beijing time. Links identify the exact
              products, dates, requirements, evidence scope, and limits used in this
              guide.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {article.sourceNotes.map((source) => (
                <a
                  className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)]"
                  href={source.href}
                  key={source.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="inline-flex items-start gap-2 font-extrabold text-[var(--hs-text)]">
                    {source.label}
                    <ExternalLink
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]"
                    />
                  </span>
                  <span className="hs-muted mt-2 block text-sm leading-6">
                    {source.note}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
