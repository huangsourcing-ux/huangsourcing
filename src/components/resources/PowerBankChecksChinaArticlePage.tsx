import {
  AlertTriangle,
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileSearch,
  FileText,
  PackageCheck,
  ShieldCheck,
  Tags,
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
  makePowerBankChecksChinaArticleJsonLd,
  powerBankChecksChinaArticle,
} from '@/lib/power-bank-checks-china-article'
import { buildWhatsAppHref } from '@/lib/site-links'

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

export function PowerBankChecksChinaArticlePage() {
  const article = powerBankChecksChinaArticle
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makePowerBankChecksChinaArticleJsonLd()} />
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
                analyticsLocation="power_bank_checks_china_article_hero"
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
              Neutral illustration of a generic China-side quality check; not evidence
              from any cited recall.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Model & Lot', 'Condition', 'Evidence', 'Release'].map((item) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href="#release-checklist"
                  key={item}
                >
                  <span className="block text-xs uppercase text-[var(--hs-accent)]">
                    Confirm
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
                What should buyers check before power banks leave China?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                Match the exact model and production lot to approved technical files,
                then inspect sampled units, identifiers, packs, and cartons for
                consistency and visible abnormality. Keep laboratory, product-release,
                marketplace, customs, and dangerous-goods approvals as separate gates.
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

            <Reveal as="section" className="mt-12 scroll-mt-24" id="release-checklist">
              <div className="flex items-center gap-3">
                <div className="hs-icon-box size-12">
                  <BatteryCharging aria-hidden className="size-6" />
                </div>
                <div>
                  <p className="hs-eyebrow">China-side evidence module</p>
                  <h2 className="mt-1 text-3xl font-extrabold text-[var(--hs-text)]">
                    Power bank release checklist
                  </h2>
                </div>
              </div>
              <p className="hs-muted mt-4 text-base leading-7">
                This checklist connects the physical shipment with buyer-approved
                references. It does not turn a sampled inspection into battery
                engineering, accredited testing, certification, or carrier approval.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {article.checkGroups.map((group) => (
                  <section
                    className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 shadow-[var(--hs-shadow-sm)]"
                    key={group.title}
                  >
                    <div className="flex items-center gap-2">
                      <Tags aria-hidden className="size-5 text-[var(--hs-accent)]" />
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
                  {section.id === 'why-current' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Current primary records:{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.cpsc.gov/Recalls/2026/Casely-Reannounces-Recall-of-Wireless-Portable-Power-Banks-Due-to-Risk-of-Serious-Injury-or-Death-from-Fire-and-Burn-Hazards-One-Fatality-Reported-After-2025-Recall"
                        rel="noreferrer"
                        target="_blank"
                      >
                        CPSC Casely reannouncement
                      </a>
                      ,{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.cpsc.gov/Recalls/2026/Super-Off-Road-Solar-Power-Banks-Recalled-Due-to-Overheating-Imported-by-Spector-Co"
                        rel="noreferrer"
                        target="_blank"
                      >
                        CPSC Super Off-Road recall
                      </a>
                      , and{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.cpsc.gov/Recalls/2026/INIU-Recalls-Power-Banks-Due-to-Fire-and-Burn-Hazards-Sold-on-Amazon"
                        rel="noreferrer"
                        target="_blank"
                      >
                        CPSC INIU BI-B41 recall
                      </a>
                      .
                    </p>
                  ) : null}
                  {section.id === 'identity-evidence' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Use the{' '}
                      <Link
                        className="hs-text-link"
                        href="/verify-china-lab-test-report"
                      >
                        China laboratory report verification guide
                      </Link>{' '}
                      to structure source-file, model, sample-photo, laboratory-scope,
                      and production-match questions.
                    </p>
                  ) : null}
                  {section.id === 'test-transport-boundary' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      For the separate carrier handoff, use the{' '}
                      <Link
                        className="hs-text-link"
                        href="/lithium-battery-air-shipping-china-2026"
                      >
                        lithium battery air-shipping checklist
                      </Link>
                      .
                    </p>
                  ) : null}
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="hs-section-soft" id="decision-table">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Release decision table</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Turn power bank evidence into a payment or pickup decision.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Record the cleared scope and the unresolved scope. A pass should never
              conceal unverified lots, inaccessible evidence, unsafe checks, or
              specialist decisions that remain open.
            </p>
          </Reveal>
          <div className="mt-8 overflow-x-auto rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <table className="w-full min-w-3xl border-collapse text-left text-sm leading-6">
              <thead className="bg-[var(--hs-navy)] text-white">
                <tr>
                  <th className="p-4 font-extrabold" scope="col">
                    Risk node
                  </th>
                  <th
                    className="border-l border-white/10 p-4 font-extrabold"
                    scope="col"
                  >
                    What to check
                  </th>
                  <th
                    className="border-l border-white/10 p-4 font-extrabold"
                    scope="col"
                  >
                    Buyer decision
                  </th>
                </tr>
              </thead>
              <tbody>
                {article.decisionRows.map((row) => (
                  <tr className="border-t border-[var(--hs-border)]" key={row.riskNode}>
                    <th
                      className="bg-[var(--hs-bg-soft)] p-4 align-top font-extrabold text-[var(--hs-text)]"
                      scope="row"
                    >
                      {row.riskNode}
                    </th>
                    <td className="border-l border-[var(--hs-border)] p-4 align-top text-[var(--hs-muted)]">
                      {row.whatToConfirm}
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

      <EvidenceBasisSection
        className="hs-section-white"
        intro="This guide combines current public CPSC records and independent recall coverage with the product, technical-file, traceability, physical-condition, packaging, correction, and release evidence a buyer can organize before goods leave China."
        items={article.evidenceBasis}
      />

      <section className="hs-section-white scroll-mt-24" id="public-case">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <p className="hs-eyebrow">Public case example</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Super Off-Road recall: a current China-made batch case.
            </h2>
            <div className="hs-muted mt-4 grid gap-4 text-base leading-7">
              <p>
                On June 25, 2026, CPSC announced a recall of about 7,400 Super
                Off-Road 12,000 mAh solar wireless power banks in the United States,
                plus about 4,964 sold in Canada. The official record says the
                lithium-ion battery could swell and overheat, the firm had received two
                reports of swelling, no injuries were reported, and the product was
                manufactured in China.
              </p>
              <p>
                Public evidence identified the product configuration, importer, origin,
                affected quantity, hazard, incidents, and remedy. The notice did not
                publish a factory root-cause analysis or state that a routine
                pre-shipment inspection would have predicted the later problem. That
                limit matters: visible swelling is a stop-and-isolate signal, while a
                flat enclosure is not proof that internal cells, protection, or future
                performance are safe.
              </p>
              <p>
                Read the{' '}
                <a
                  className="hs-text-link"
                  href="https://www.cpsc.gov/Recalls/2026/Super-Off-Road-Solar-Power-Banks-Recalled-Due-to-Overheating-Imported-by-Spector-Co"
                  rel="noreferrer"
                  target="_blank"
                >
                  official CPSC Super Off-Road recall
                </a>
                . Huang Sourcing was not involved in the product, factory, testing,
                reported incidents, recall, or remedy. The buyer lesson is narrower:
                identify the exact model and lot, escalate any visible abnormality,
                preserve carton-level traceability, and keep qualified technical review
                separate from physical inspection before release.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="source-notes">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <FileSearch aria-hidden className="size-6" />
            </div>
            <p className="hs-eyebrow mt-5">Sources</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Public records used for this guide.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              These links support the current incident pattern and public case. They do
              not establish that another supplier, model, or order has the same risk.
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

      <section className="hs-section-white scroll-mt-24" id="documents">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <FileText aria-hidden className="size-6" />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              What to send for a power bank check.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Send final, version-controlled references before the inspection so the
              result can identify what was checked, what matched, and what remains open.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={article.whatToSend} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="red-flags">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <AlertTriangle aria-hidden className="size-6" />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              Red flags before payment or pickup.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              These signals do not diagnose a battery root cause. They are reasons to
              pause, isolate, investigate, and obtain the right technical decision.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={article.redFlags} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white scroll-mt-24" id="scope-limits">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <ShieldCheck aria-hidden className="size-6" />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              What this check cannot prove.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Define the boundary before inspection. Product safety and transport
              decisions need qualified parties and evidence beyond visible sampling.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={article.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Related buyer decisions</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Connect product evidence to the next release gate.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {article.relatedLinks.map((item) => (
              <Link className="hs-link-card bg-white p-5" href={item.href} key={item.href}>
                <PackageCheck aria-hidden className="size-5 text-[var(--hs-accent)]" />
                <h3 className="mt-3 text-lg font-extrabold text-[var(--hs-text)]">
                  {item.label}
                </h3>
                <p className="hs-muted mt-2 text-sm leading-6">{item.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">
                  Open guide <ArrowRight aria-hidden className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section">
          <Reveal className="rounded-[var(--hs-radius)] bg-[var(--hs-navy)] p-7 text-white shadow-[var(--hs-shadow-lg)] sm:p-10">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--hs-accent-soft)]">
                  Before balance payment or pickup
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-extrabold text-white">
                  Need a China-side check of the actual power bank order?
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-white/75">
                  Send the model list, approved references, reports, lot details,
                  packaging files, pickup date, and the decision you need. The scope can
                  focus on observable identity, condition, traceability, pack-out, and
                  correction evidence.
                </p>
              </div>
              <ContactAgentButton
                analyticsLabel={article.primaryCta.label}
                analyticsLocation="power_bank_checks_china_article_final"
                className="hs-btn-primary h-12 px-6 text-sm"
                href={whatsappHref}
                size="lg"
                variant="default"
              >
                {article.primaryCta.label}
              </ContactAgentButton>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
