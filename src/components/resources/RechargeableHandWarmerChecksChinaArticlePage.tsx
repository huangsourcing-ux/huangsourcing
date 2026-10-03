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
  hotHandsRecall,
  gobiHeatRecall,
  hotHandsManufacturerNotice,
  makeRechargeableHandWarmerChecksChinaArticleJsonLd,
  rechargeableHandWarmerChecksChinaArticle,
} from '@/lib/rechargeable-hand-warmer-checks-china-article'
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

export function RechargeableHandWarmerChecksChinaArticlePage() {
  const article = rechargeableHandWarmerChecksChinaArticle
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeRechargeableHandWarmerChecksChinaArticleJsonLd()} />
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
                analyticsLocation="rechargeable_hand_warmer_checks_china_article_hero"
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
              Neutral AI illustration of a generic China-side inspection setup; not a
              photograph or evidence from any cited public case.
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
                What should buyers check before rechargeable hand warmers leave China?
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

            <Reveal as="section" className="mt-12 scroll-mt-24" id="cross-brand-screening">
              <p className="hs-eyebrow">October 2026 update</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Can a different brand share the recalled components?</h2>
              <p className="hs-muted mt-4 text-base leading-7">Yes. The <a className="hs-text-link" href={hotHandsManufacturerNotice}>HotHands manufacturer notice</a> states that its recalled H163650 warmers share identical lithium-ion battery and electrical components with the earlier OCOOPA recalled product. This statement concerns those products; it is not proof that every private-label hand warmer shares their construction.</p>
              <p className="hs-muted mt-4 text-base leading-7">Ask the supplier for a written cross-reference connecting each retail brand and SKU to the factory model, cell and pack part IDs, electrical assembly revision, bill of materials, production dates and carton ranges. Compare that file with complete reports and production records. If the supplier cannot bound a possible match, keep the uncertain lots on hold.</p>
              <ol className="mt-6 grid gap-4 text-sm leading-6 text-[var(--hs-muted)]">
                {[
                  ['Screen identity before operation', 'Record the destination notice, brand, unit model and batch with photographs of both units in a pair and their retail box. A missing or unreadable identifier leaves the scope unresolved.'],
                  ['Trace the component version', 'Request source part numbers and revision records for the cell, pack and electrical assembly. Ask qualified parties to assess substitutions; a shared shell or a different logo is not component evidence.'],
                  ['Bound the held stock', 'Connect each affected or uncertain version to production dates, quantities and carton IDs. Keep clearly identified stock and unresolved stock separated; record who owns the disposition.'],
                  ['Close the scope before payment or pickup', 'For non-recalled stock, obtain written manufacturer and qualified-party assessment, applicable evaluation and correction evidence, then re-inspect the agreed scope. Recalled products remain subject to their recall process.'],
                ].map(([title, detail], index) => <li className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5" key={title}><h3 className="font-extrabold text-[var(--hs-text)]">{index + 1}. {title}</h3><p className="mt-2">{detail}</p></li>)}
              </ol>
              <p className="hs-muted mt-5 text-sm leading-6">Do not charge or heat recalled units to see whether they fail. A passed spot check, fresh label or replacement carton cannot override a recall. Obtain the applicable authorized handling and disposition instructions before moving held battery products.</p>
            </Reveal>

            <Reveal as="section" className="mt-12 scroll-mt-24" id="release-checklist">
              <div className="flex items-center gap-3">
                <div className="hs-icon-box size-12">
                  <BatteryCharging aria-hidden className="size-6" />
                </div>
                <div>
                  <p className="hs-eyebrow">China-side evidence module</p>
                  <h2 className="mt-1 text-3xl font-extrabold text-[var(--hs-text)]">
                    Rechargeable hand warmer release checklist
                  </h2>
                </div>
              </div>
              <p className="hs-muted mt-4 text-base leading-7">
                This checklist connects the physical shipment with buyer-approved and
                qualified references. It does not turn a sampled inspection into
                battery or heater engineering, accredited testing, certification,
                importer review, or carrier approval.
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
                    <p className="hs-muted mt-5 text-sm leading-6">Current evidence: <a className="hs-text-link" href={hotHandsRecall}>CPSC HotHands recall</a>, <a className="hs-text-link" href={gobiHeatRecall}>CPSC Gobi Heat recall</a>, and <a className="hs-text-link" href={hotHandsManufacturerNotice}>HotHands component statement</a>. <a className="hs-text-link" href="https://www.cjwwradio.com/2026/10/01/hothands-recall/">CJWW coverage on October 1</a> is a separate attention signal, not an additional incident count.</p>
                  ) : null}
                  {section.id === 'model-control' ? (
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
                  {section.id === 'evidence-boundary' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Review the{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.cpsc.gov/Regulations-Laws--Standards/Voluntary-Standards/Batteries-Fire-High-Energy-Density"
                        rel="noreferrer"
                        target="_blank"
                      >
                        CPSC high-energy-density battery standards page
                      </a>{' '}
                      with qualified parties; do not infer that one listed voluntary
                      standard automatically applies to or approves the exact product.
                    </p>
                  ) : null}
                  {section.id === 'transport-boundary' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Check the current eCFR text of{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-I/subchapter-C/part-173/subpart-E/section-173.185"
                        rel="noreferrer"
                        target="_blank"
                      >
                        49 CFR 173.185 lithium-battery requirements
                      </a>{' '}
                      and use the{' '}
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
              Turn rechargeable hand warmer evidence into a payment or pickup decision.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Recall holds take priority over every ordinary release option below. Rework, relabeling and routine release apply only to non-recalled stock after the identity and component scope is resolved. Record the cleared and held cartons separately.
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
        intro="This guide combines cited CPSC recalls, the HotHands component statement, current independent coverage and technical-scope references with buyer-side sourcing analysis. The update adds a component-to-brand screening process and explicit recall holds before payment or pickup."
        items={article.evidenceBasis}
      />

      <section className="hs-section-white scroll-mt-24" id="public-case">
        <div className="hs-container hs-section max-w-5xl">
          <Reveal>
            <p className="hs-eyebrow">Public case example</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">OCOOPA, HotHands and Gobi Heat: screen each notice separately</h2>
            <div className="hs-muted mt-4 grid gap-4 text-base leading-7">
              <p><strong className="text-[var(--hs-text)]">What happened:</strong> The <a className="hs-text-link" href="https://www.cpsc.gov/Recalls/2026/OCOOPA-Direct-Recalls-1-5-Million-Rechargeable-Hand-Warmers-Due-to-Risk-of-Serious-Injury-or-Death-from-Fire-and-Burn-Hazards-One-Death-Reported-Imported-by-Shenzhen-Street-Cat-Technology">July 30 OCOOPA recall</a> covered about 1.5 million warmers and reported overheating, fires, burn injuries and one death. On October 1, 2026, CPSC announced separate <a className="hs-text-link" href={hotHandsRecall}>HotHands</a> and <a className="hs-text-link" href={gobiHeatRecall}>Gobi Heat recalls</a> for overheating and ignition hazards. Both newer notices identify China manufacture and report no incidents. Do not transfer the OCOOPA incident counts to those brands.</p>
              <p><strong className="text-[var(--hs-text)]">What evidence was public:</strong> The notices provide product identifiers and recall actions. The HotHands manufacturer separately confirms shared components with the earlier OCOOPA product. None of these notices supplies a complete bill of materials for every private-label version.</p>
            </div>
            <div className="mt-6 overflow-x-auto rounded-[var(--hs-radius)] border border-[var(--hs-border)]">
              <table className="w-full min-w-[640px] text-left text-sm leading-6">
                <caption className="bg-[var(--hs-bg-soft)] p-4 text-left font-bold">U.S. recall identity references — not a list of cleared stock</caption>
                <thead className="bg-[var(--hs-navy)] text-white"><tr><th scope="col" className="p-4">Record</th><th scope="col" className="p-4">Identity to compare</th><th scope="col" className="p-4">Scope boundary</th></tr></thead>
                <tbody className="hs-muted bg-white">
                  <tr><th scope="row" className="p-4"><a className="hs-text-link" href={hotHandsRecall}>HotHands 27-011</a></th><td className="p-4">H163650; model and four-digit batch on underside; white HotHands logo</td><td className="p-4">Rechargeable units. The manufacturer excludes air-activated warmers.</td></tr>
                  <tr className="border-t border-[var(--hs-border)]"><th scope="row" className="p-4"><a className="hs-text-link" href={gobiHeatRecall}>Gobi Heat 27-009</a></th><td className="p-4">UT3053 on underside; Gobi Heat branding; black and gray paired units</td><td className="p-4">Use the Gobi Heat notice and process. Do not infer identical components from appearance alone.</td></tr>
                  <tr className="border-t border-[var(--hs-border)]"><th scope="row" className="p-4">OCOOPA 26-659</th><td className="p-4">UT3053, UT3056, ZLS-118, ZLS-118S, ZLS-118D, H01, H01(PD); underside model and three-digit batch</td><td className="p-4">Check the linked July record. Its identifiers and incident history belong to that recall.</td></tr>
                </tbody>
              </table>
            </div>
            <div className="hs-muted mt-5 grid gap-4 text-base leading-7">
              <p><strong className="text-[var(--hs-text)]">Buyer lesson:</strong> The older OCOOPA case remains relevant because the October HotHands notice explicitly links components across brands. Build a brand-to-component-to-carton map, obtain a written scope assessment for uncertain matches, and keep recalled stock out of an ordinary inspection-and-release path.</p>
              <p><strong className="text-[var(--hs-text)]">Separate technical context:</strong> The <a className="hs-text-link" href="https://www.gov.uk/product-safety-alerts-reports-recalls/product-safety-report-electric-rechargeable-hand-warmer-sold-via-amazon-and-ebay-2412-0114">February 2025 UK OPSS report</a> concerned another model with connection and cell thermal-protection problems. It explains why internal technical evidence matters; it does not establish a component link to these U.S. recalls.</p>
              <p><strong className="text-[var(--hs-text)]">Limits of comparison:</strong> A matching model string alone does not identify an unrelated product, and an unlisted brand is not evidence of safety. The proposed sourcing workflow is our analysis. Huang Sourcing did not supply, inspect or participate in these cases. Use the appropriate destination notice and qualified parties for the specific stock and any recall disposition.</p>
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
              These links support the recall notices and case evidence. They do
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
              What to send for a rechargeable hand warmer check.
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
                  Need a China-side check of the actual rechargeable hand warmer order?
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
                analyticsLocation="rechargeable_hand_warmer_checks_china_article_final"
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
