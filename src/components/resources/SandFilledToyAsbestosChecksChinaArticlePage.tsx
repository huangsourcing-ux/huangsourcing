import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileText,
  FlaskConical,
  Microscope,
  PackageCheck,
  PackageSearch,
  ScanSearch,
  ShieldCheck,
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
  sandFilledToyAsbestosChecksChinaArticle,
  makeSandFilledToyAsbestosChecksChinaArticleJsonLd,
} from '@/lib/sand-filled-toy-asbestos-checks-china-article'
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

export function SandFilledToyAsbestosChecksChinaArticlePage() {
  const article = sandFilledToyAsbestosChecksChinaArticle
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeSandFilledToyAsbestosChecksChinaArticleJsonLd()} />
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
                analyticsLocation="sand_filled_toy_asbestos_checks_china_article_hero"
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
              Neutral illustration of a generic China-side sampling and inspection
              setup; not evidence from either cited recall.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Filling Lot', 'Sample Custody', 'Lab Evidence', 'Release'].map((item) => (
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
                What should buyers check before sand-filled toys leave China?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                Match each production lot to a controlled filling source, representative
                sample, intact chain of custody, competent laboratory result, approved
                toy construction, traceability marks, labels, packages, and cartons.
                Hold every unresolved filling batch or finished lot instead of treating
                an intact shell or supplier declaration as proof of composition.
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
                  <FlaskConical aria-hidden className="size-6" />
                </div>
                <div>
                  <p className="hs-eyebrow">China-side evidence module</p>
                  <h2 className="mt-1 text-3xl font-extrabold text-[var(--hs-text)]">
                    Sand-filled toy release checklist
                  </h2>
                </div>
              </div>
              <p className="hs-muted mt-4 text-base leading-7">
                This checklist connects the filling batch, tested sample, and physical
                shipment with buyer-approved and qualified references. It does not turn
                an ordinary visual inspection into asbestos analysis, product
                certification, importer filing, or a safety guarantee.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {article.checkGroups.map((group) => (
                  <section
                    className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 shadow-[var(--hs-shadow-sm)]"
                    key={group.title}
                  >
                    <div className="flex items-center gap-2">
                      <Microscope aria-hidden className="size-5 text-[var(--hs-accent)]" />
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
                      Current records:{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.gov.uk/guidance/assuring-the-absence-of-asbestos-in-sand-containing-toys"
                        rel="noreferrer"
                        target="_blank"
                      >
                        UK OPSS business guidance
                      </a>
                      ,{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.gov.uk/product-safety-alerts-reports-recalls/product-recall-wizz-toys-jumbo-mr-splat-stretch-men-2607-0181"
                        rel="noreferrer"
                        target="_blank"
                      >
                        UK OPSS product recall
                      </a>
                      , and{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.independent.co.uk/bulletin/lifestyle/walmart-toys-recall-orb-squeeze-asbestos-b2981539.html"
                        rel="noreferrer"
                        target="_blank"
                      >
                        independent U.S. recall coverage
                      </a>
                      .
                    </p>
                  ) : null}
                  {section.id === 'testing-evidence' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Review the complete OPSS{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.gov.uk/guidance/testing-for-asbestos-in-sand"
                        rel="noreferrer"
                        target="_blank"
                      >
                        testing for asbestos in sand guidance
                      </a>{' '}
                      for method comparisons, representative sampling advice, and the
                      limits of XRD and PLM at lower concentrations.
                    </p>
                  ) : null}
                  {section.id === 'sample-custody' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      The Dutch{' '}
                      <a
                        className="hs-text-link"
                        href="https://english.nvwa.nl/documents/organisation/buro/publications/advice-from-buro-on-the-health-risks-of-asbestos-in-play-sand"
                        rel="noreferrer"
                        target="_blank"
                      >
                        NVWA BuRO play-sand risk assessment
                      </a>
                      {' '}distinguishes sand-filled squeeze toys from other play-sand
                      forms and reinforces why product type and sampling context matter.
                    </p>
                  ) : null}
                  {section.id === 'inspection-boundary' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      CPSC&apos;s current{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.cpsc.gov/FAQ/eFiling-Frequently-Asked-Questions-FAQ"
                        rel="noreferrer"
                        target="_blank"
                      >
                        eFiling FAQ
                      </a>{' '}
                      explains which regulated consumer products require certificate
                      data. Use the{' '}
                      <Link
                        className="hs-text-link"
                        href="/verify-china-lab-test-report"
                      >
                        China laboratory report verification guide
                      </Link>{' '}
                      for report-source and exact-model checks.
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
              Turn filling evidence into a payment or pickup decision.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Record the exact cleared material batches, finished lots, cartons, and
              open conditions. A pass should never conceal unrepresentative sampling,
              custody gaps, mixed material, leakage, or required specialist decisions.
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
        intro="This guide combines current UK OPSS guidance and recalls, the U.S. CPSC public case, Dutch official risk-assessment context, and independent reporting with the material-lot, sample-custody, laboratory, physical-product, packaging, correction, and release evidence a buyer can organize before goods leave China."
        items={article.evidenceBasis}
      />

      <section className="hs-section-white scroll-mt-24" id="public-case">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <p className="hs-eyebrow">Public case example</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Orb Funkee recall: an exact-lot filling lesson.
            </h2>
            <div className="hs-muted mt-4 grid gap-4 text-base leading-7">
              <p>
                <strong className="text-[var(--hs-text)]">What happened:</strong> On May
                21, 2026, the U.S. Consumer Product Safety Commission announced a recall
                of two Orb Funkee squeeze-toy models with date code 3102491A. CPSC said
                the sand may contain fibrous tremolite asbestos. The toys were
                manufactured in China and sold at Walmart and Ollie&apos;s from February
                2025 through April 2026.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">
                  What evidence was public:
                </strong>{' '}
                The CPSC notice identifies the two model numbers, one production date
                code, retail channels, sale period, China origin, importer, absence of
                reported incidents, and different handling instructions for intact and
                ruptured products. It is a recall record, not a finding about every toy
                made by the factory or every sand source.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">Buyer lesson:</strong> Connect
                the filling producer and batch to a representative sealed sample,
                competent analytical evidence, the exact finished toy lot, and the
                cartons. Inspect shell integrity and traceability without opening
                suspect toys during an ordinary factory visit.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">
                  Limits of comparison:
                </strong>{' '}
                Read the primary{' '}
                <a
                  className="hs-text-link"
                  href="https://www.cpsc.gov/Recalls/2026/Orb-Funkee-Squeeze-Toys-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Asbestos-Exposure-Imported-by-The-Orb-Factory"
                  rel="noreferrer"
                  target="_blank"
                >
                  CPSC recall notice
                </a>
                ,{' '}
                <a
                  className="hs-text-link"
                  href="https://www.gov.uk/guidance/assuring-the-absence-of-asbestos-in-sand-containing-toys"
                  rel="noreferrer"
                  target="_blank"
                >
                  UK OPSS assurance guidance
                </a>
                , and{' '}
                <a
                  className="hs-text-link"
                  href="https://www.gov.uk/guidance/testing-for-asbestos-in-sand"
                  rel="noreferrer"
                  target="_blank"
                >
                  OPSS testing guidance
                </a>
                . The case does not prove that every China-made sand-filled toy or
                supplier has the same material or risk, and a China-side visual
                inspection cannot reproduce competent asbestos analysis.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft scroll-mt-24" id="documents">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <div className="hs-icon-box size-12">
              <PackageSearch aria-hidden className="size-6" />
            </div>
            <p className="hs-eyebrow mt-5">Inspection preparation</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What should the buyer send before inspection?
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Send one controlled release pack before the inspector arrives. Missing
              references should remain visible as open conditions, not be replaced with
              factory assumptions.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {article.whatToSend.map((item, index) => (
              <Reveal
                className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)]"
                key={item}
                staggerIndex={index}
              >
                <div className="flex gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-sm font-extrabold text-white">
                    {index + 1}
                  </span>
                  <p className="hs-muted text-sm leading-6">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-[var(--hs-radius)] border border-amber-300 bg-amber-50 p-6 shadow-[var(--hs-shadow-sm)]">
            <div className="flex items-center gap-3">
              <AlertTriangle aria-hidden className="size-6 text-amber-700" />
              <h2 className="text-2xl font-extrabold text-[var(--hs-text)]">
                Shipment red flags
              </h2>
            </div>
            <BulletList items={article.redFlags} />
          </Reveal>

          <Reveal
            className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-6 shadow-[var(--hs-shadow-sm)]"
            delayMs={100}
          >
            <div className="flex items-center gap-3">
              <PackageCheck aria-hidden className="size-6 text-[var(--hs-accent)]" />
              <h2 className="text-2xl font-extrabold text-[var(--hs-text)]">
                A defensible release record
              </h2>
            </div>
            <div className="mt-5 grid gap-4 text-sm leading-6 text-[var(--hs-muted)]">
              <p>
                Name the exact cleared filling producer and batches, factory, finished
                lots, cartons, quantities, sample IDs, custody record, laboratory
                report, inspection sample, open conditions, and release owner.
              </p>
              <p>
                If a failed, mixed, damaged, or changed lot is corrected, require safe
                segregation, qualified sampling or retest decisions, replacement
                material traceability, revised files, repeat inspection, and a new
                written release. Preserve the original mismatch record.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft scroll-mt-24" id="scope-limits">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <ShieldCheck aria-hidden className="size-6" />
            </div>
            <p className="hs-eyebrow mt-5">Scope limits</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What this check can and cannot prove.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Keep inspection evidence useful by separating visible China-side checks
              from technical, certification, regulatory, importer, and end-use
              responsibilities.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={article.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <div className="hs-icon-box size-12">
              <ScanSearch aria-hidden className="size-6" />
            </div>
            <p className="hs-eyebrow mt-5">Related buyer decisions</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Build a complete pre-shipment evidence chain.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {article.relatedLinks.map((item) => (
              <Link
                className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)] transition-transform hover:-translate-y-0.5 hover:border-[var(--hs-accent)]"
                href={item.href}
                key={item.href}
              >
                <h3 className="font-extrabold text-[var(--hs-text)]">
                  {item.label}
                </h3>
                <p className="hs-muted mt-2 text-sm leading-6">{item.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent-strong)]">
                  Open guide <ArrowRight aria-hidden className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section">
          <Reveal className="rounded-[var(--hs-radius)] bg-[var(--hs-navy)] p-7 text-white shadow-[var(--hs-shadow-lg)] sm:p-9">
            <div className="grid gap-7 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <Microscope aria-hidden className="size-7 text-[var(--hs-accent)]" />
                  <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[var(--hs-accent)]">
                    Before money or goods move
                  </p>
                </div>
                <h2 className="mt-4 text-3xl font-extrabold">
                  Turn the open evidence into a shipment decision.
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-white/80">
                  Share the SKU list, filling source and batch records, sampling and
                  laboratory files, approved construction, labels, packaging, carton
                  map, and payment deadline. Huang Sourcing can scope a practical
                  China-side comparison before balance payment or pickup.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-4">
                <ContactAgentButton
                  analyticsLabel="Check sand-filled toys before shipment"
                  analyticsLocation="sand_filled_toy_asbestos_checks_china_article_final_cta"
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
                  <Link href="/before-balance-payment-qc-china">
                    View Balance-Payment Check
                  </Link>
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
              <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">
                Sources
              </h2>
            </div>
            <p className="hs-muted mt-3 max-w-3xl text-sm leading-6">
              Public records and current guidance checked July 30, 2026 Beijing time.
              Links are descriptive so buyers can inspect the source, procedural status,
              scope, and limitations directly.
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
