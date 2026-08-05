import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileSearch,
  FileText,
  Link2,
  PackageCheck,
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
import { buildWhatsAppHref } from '@/lib/site-links'
import {
  makeZiplineKitChecksChinaArticleJsonLd,
  ziplineKitChecksChinaArticle,
} from '@/lib/zipline-kit-checks-china-article'

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

export function ZiplineKitChecksChinaArticlePage() {
  const article = ziplineKitChecksChinaArticle
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeZiplineKitChecksChinaArticleJsonLd()} />
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
                analyticsLocation="zipline_kit_checks_china_article_hero"
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
              Neutral AI-generated illustration of generic, uninstalled components;
              not a product photograph, test result, or evidence from the cited public
              cases.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Scope', 'Map evidence', 'Inspect', 'Release'].map((item) => (
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
                What should buyers check before zipline kits leave China?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                Match every model, component version, factory, production date, lot,
                and carton to a qualified scope decision, complete exact-sample
                evidence, approved construction, installation and maintenance
                instructions, warnings, pack-out, and shipment identity. Hold generic,
                changed, mixed, damaged, unsupported, or untraceable scope before
                payment and pickup.
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
                  <BadgeCheck aria-hidden className="size-6" />
                </div>
                <div>
                  <p className="hs-eyebrow">China-side evidence module</p>
                  <h2 className="mt-1 text-3xl font-extrabold text-[var(--hs-text)]">
                    Zipline kit release checklist
                  </h2>
                </div>
              </div>
              <p className="hs-muted mt-4 text-base leading-7">
                Connect qualified product evidence to sampled mass production and
                pack-out. This module does not turn an onsite comparison into proof-load,
                dynamic, fatigue, braking, installation, or standards testing, legal
                advice, or a safety guarantee.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {article.checkGroups.map((group) => (
                  <section
                    className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 shadow-[var(--hs-shadow-sm)]"
                    key={group.title}
                  >
                    <div className="flex items-center gap-2">
                      <Link2
                        aria-hidden
                        className="size-5 text-[var(--hs-accent)]"
                      />
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
                        href="https://www.cpsc.gov/Recalls/2026/Trsmima-Zipline-Kits-and-Zipline-Spring-Brakes-Recalled-Due-to-Fall-and-Collision-Hazards-Manufactured-by-Trsmima"
                        rel="noreferrer"
                        target="_blank"
                      >
                        CPSC Trsmima recall
                      </a>
                      ,{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.cpsc.gov/Recalls/2024/Zipline-Kits-Recalled-Due-to-Fall-Hazard-Sold-Exclusively-on-Amazon-com-by-Jugader"
                        rel="noreferrer"
                        target="_blank"
                      >
                        CPSC Jugader recall
                      </a>
                      , and the{' '}
                      <a
                        className="hs-text-link"
                        href="https://tt-trsmima.com/pages/product-recall-notice"
                        rel="noreferrer"
                        target="_blank"
                      >
                        manufacturer recall notice
                      </a>
                      .
                    </p>
                  ) : null}

                  {section.id === 'product-scope' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Review the current{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Playground-Equipment"
                        rel="noreferrer"
                        target="_blank"
                      >
                        CPSC playground-equipment guidance
                      </a>{' '}
                      and the{' '}
                      <a
                        className="hs-text-link"
                        href="https://store.astm.org/f1148-21.html"
                        rel="noreferrer"
                        target="_blank"
                      >
                        ASTM F1148-21 public scope
                      </a>{' '}
                      with qualified product and destination support. Neither page is a
                      product-specific applicability or compliance determination.
                    </p>
                  ) : null}

                  {section.id === 'qualified-evidence' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Compare the report chain with the{' '}
                      <Link className="hs-text-link" href="/verify-china-lab-test-report">
                        China laboratory report verification guide
                      </Link>{' '}
                      and structure supplier questions with{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.cpsc.gov/business--manufacturing/business-education/business-guidance/BestPractices"
                        rel="noreferrer"
                        target="_blank"
                      >
                        CPSC manufacturing best practices
                      </a>
                      .
                    </p>
                  ) : null}
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="hs-section-soft scroll-mt-24" id="decision-table">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Release decision table</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Turn zipline kit evidence into a payment or pickup decision.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Record exact cleared models, cable and component versions, dates, lots,
              cartons, evidence versions, samples, corrections, and open conditions. A
              pass should never hide unsupported testing, changed production, or
              unresolved qualified decisions.
            </p>
          </Reveal>
          <div className="mt-8 overflow-x-auto rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <table className="w-full min-w-3xl border-collapse text-left text-sm leading-6">
              <thead className="bg-[var(--hs-navy)] text-white">
                <tr>
                  <th className="p-4 font-extrabold" scope="col">
                    Risk node
                  </th>
                  <th className="border-l border-white/10 p-4 font-extrabold" scope="col">
                    What to confirm
                  </th>
                  <th className="border-l border-white/10 p-4 font-extrabold" scope="col">
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
        intro="This guide combines current and earlier U.S. regulator records, a manufacturer recall notice, official playground and manufacturing guidance, and an official standards scope page with the component, test, construction, instruction, packaging, correction, and release evidence a buyer can organize before zipline kits leave China."
        items={article.evidenceBasis}
      />

      <section className="hs-section-white scroll-mt-24" id="public-case">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <p className="hs-eyebrow">Public case example</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Trsmima zipline kits and spring brakes: a current component-failure case.
            </h2>
            <div className="hs-muted mt-4 grid gap-4 text-base leading-7">
              <p>
                <strong className="text-[var(--hs-text)]">What happened:</strong> On
                July 30, 2026, CPSC announced the recall of about 60,720 TT Trsmima
                zipline kits and 19,120 sold-separately spring brakes manufactured in
                China. The agency said cable, turnbuckle, or seat components could break
                or detach, while the spring brakes could fail to slow riders safely.
                CPSC reported 40 total component or brake failure reports and at least 20
                injuries across those two groups.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">
                  What evidence was public:
                </strong>{' '}
                The{' '}
                <a
                  className="hs-text-link"
                  href="https://www.cpsc.gov/Recalls/2026/Trsmima-Zipline-Kits-and-Zipline-Spring-Brakes-Recalled-Due-to-Fall-and-Collision-Hazards-Manufactured-by-Trsmima"
                  rel="noreferrer"
                  target="_blank"
                >
                  CPSC Trsmima recall
                </a>{' '}
                identifies the kit lengths and components, China manufacturer, online
                sales period, incident and injury reports, affected quantities, and
                refund remedy. The{' '}
                <a
                  className="hs-text-link"
                  href="https://tt-trsmima.com/pages/product-recall-notice"
                  rel="noreferrer"
                  target="_blank"
                >
                  manufacturer recall notice
                </a>{' '}
                confirms the affected kit and brake categories and stop-use procedure.
                Neither page publishes a complete factory quality file, design history,
                or validation report for every configuration.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">Buyer lesson:</strong>{' '}
                Resolve the exact cable, terminations, tensioning system, trolley,
                seat/harness, brake, stops, hardware, rated load, and installation file
                before production. Require qualified evidence for the complete sample,
                then confirm that mass production, instructions, warnings, lots, and
                cartons still match before release. A supplier&apos;s load claim or visual
                similarity to a tested component is not enough.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">
                  Why the older Jugader case still matters:
                </strong>{' '}
                CPSC&apos;s{' '}
                <a
                  className="hs-text-link"
                  href="https://www.cpsc.gov/Recalls/2024/Zipline-Kits-Recalled-Due-to-Fall-Hazard-Sold-Exclusively-on-Amazon-com-by-Jugader"
                  rel="noreferrer"
                  target="_blank"
                >
                  April 2024 Jugader recall
                </a>{' '}
                documented 20 cable-break reports, nine injuries, a replacement cable,
                and updated installation instructions for a different China-made kit.
                The 2026 Trsmima recall adds separate turnbuckle, seat, and braking
                failures, showing why the release decision remains current and should
                cover the full system rather than one familiar cable description.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">
                  Limits of comparison:
                </strong>{' '}
                The Trsmima and Jugader recalls do not prove every zipline kit, seller,
                factory, cable, brake, component, or lot has the same problem. Huang
                Sourcing had no role in either case, and a pre-shipment inspection cannot
                reproduce engineering validation, prove an installed system safe, or
                certify performance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft scroll-mt-24" id="documents">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <div className="hs-icon-box size-12">
              <FileSearch aria-hidden className="size-6" />
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
                Name the cleared destination, intended users, installation setting,
                model, cable and component versions, rated-load claim, factory,
                production dates, lot, cartons, quantities, report version, test
                samples, inspection samples, corrections, open conditions, and
                responsible release owner.
              </p>
              <p>
                If a failed or changed lot is corrected, retain the original mismatch
                and require traceable segregation, qualified retest or report
                disposition, controlled rework, revised files, repeat inspection, and a
                new written release.
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
              Separate visible China-side checks from laboratory, standards,
              regulatory, importer, marketplace, customs, and legal responsibilities.
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
            <p className="hs-eyebrow">Related buyer decisions</p>
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
                <h3 className="font-extrabold text-[var(--hs-text)]">{item.label}</h3>
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
                  <BadgeCheck aria-hidden className="size-7 text-[var(--hs-accent)]" />
                  <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[var(--hs-accent)]">
                    Before money or goods move
                  </p>
                </div>
                <h2 className="mt-4 text-3xl font-extrabold">
                  Turn open zipline kit evidence into a shipment decision.
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-white/80">
                  Share the users, installation setting, rated load, model list, cable
                  and component specifications, approved sample, drawings, reports,
                  warnings, instructions, packaging, carton map, and payment deadline.
                  Huang Sourcing can scope a practical China-side comparison before
                  balance payment or pickup.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-4">
                <ContactAgentButton
                  analyticsLabel="Check zipline kits before shipment"
                  analyticsLocation="zipline_kit_checks_china_article_final_cta"
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
              <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Sources</h2>
            </div>
            <p className="hs-muted mt-3 max-w-3xl text-sm leading-6">
              Public records, official guidance, standards information, and the
              manufacturer notice checked August 6, 2026 Beijing time. Links are
              descriptive so buyers can
              inspect the dates, exact products, market scope, evidence, and limitations
              directly.
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
