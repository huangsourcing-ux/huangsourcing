import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileSearch,
  Gauge,
  PackageCheck,
  Plug,
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
  hairDryerBrushChecksChinaArticle,
  makeHairDryerBrushChecksChinaArticleJsonLd,
} from '@/lib/hair-dryer-brush-checks-china-article'
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

export function HairDryerBrushChecksChinaArticlePage() {
  const article = hairDryerBrushChecksChinaArticle
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeHairDryerBrushChecksChinaArticleJsonLd()} />
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
            <p className="hs-muted mt-4 max-w-3xl text-base leading-7">{article.answerSummary}</p>
            <ArticleByline
              author={article.author}
              modifiedDate={article.modifiedDate}
              publishedDate={article.publishedDate}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={article.primaryCta.label}
                analyticsLocation="hair_dryer_brush_checks_china_article_hero"
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                href={whatsappHref}
                size="lg"
                variant="default"
              >
                {article.primaryCta.label}
              </ContactAgentButton>
              <Button asChild className="hs-btn-secondary h-12 px-6 text-sm sm:px-8" size="lg" variant="outline">
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
              Neutral AI illustration of a generic China-side inspection setup; not a photograph or evidence from any cited public case.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Exact Model', 'Protection', 'Pack-Out', 'Release'].map((item) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href="#release-checklist"
                  key={item}
                >
                  <span className="block text-xs uppercase text-[var(--hs-accent)]">Confirm</span>
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
              <div className="hs-icon-box size-12"><ClipboardCheck aria-hidden className="size-6" /></div>
              <h2 className="mt-5 text-2xl font-extrabold text-[var(--hs-text)]">Article guide</h2>
              <nav aria-label="Article table of contents" className="mt-5 grid gap-2">
                {article.tableOfContents.map((item) => (
                  <a
                    className="inline-flex min-h-10 items-center justify-between gap-3 rounded-md bg-white px-3 text-sm font-extrabold text-[var(--hs-text)] ring-1 ring-[var(--hs-border)] transition-colors hover:text-[var(--hs-accent-strong)] hover:ring-[var(--hs-accent)]"
                    href={item.href}
                    key={item.href}
                  >
                    <span>{item.label}</span><ArrowRight aria-hidden className="size-4 shrink-0 text-[var(--hs-muted-soft)]" />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="min-w-0 lg:col-span-8">
            <Reveal>
              <p className="hs-eyebrow">Quick answer</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
                What should buyers check before hair dryer brushes leave China?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                Match the exact production model, plug, cord, protective device, heater, motor, air path, housing, controls, attachments, ratings, labels, instructions, and claims to qualified evidence and an approved reference. Inspect sampled goods and cartons for identity and visible conformity. Hold unresolved models or lots instead of treating a brief power-on check, plug photo, or supplier certificate as proof against shock, burn, or fire risks.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {article.quickChecks.map((item, index) => (
                  <div
                    className="flex min-h-16 gap-3 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-card-warm)] p-4 text-sm leading-6 text-[var(--hs-muted)]"
                    key={item}
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-xs font-extrabold text-white">{index + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal as="section" className="mt-12 scroll-mt-24" id="release-checklist">
              <div className="flex items-center gap-3">
                <div className="hs-icon-box size-12"><Plug aria-hidden className="size-6" /></div>
                <div>
                  <p className="hs-eyebrow">China-side evidence module</p>
                  <h2 className="mt-1 text-3xl font-extrabold text-[var(--hs-text)]">Hair dryer brush release checklist</h2>
                </div>
              </div>
              <p className="hs-muted mt-4 text-base leading-7">
                This module connects the physical shipment with buyer-approved and qualified references. It does not turn an ordinary sampled inspection into immersion, electrical, heating, abnormal-operation, endurance, certification, importer-filing, or safety testing.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {article.checkGroups.map((group) => (
                  <section className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 shadow-[var(--hs-shadow-sm)]" key={group.title}>
                    <div className="flex items-center gap-2"><Plug aria-hidden className="size-5 text-[var(--hs-accent)]" /><h3 className="text-lg font-extrabold text-[var(--hs-text)]">{group.title}</h3></div>
                    <BulletList items={group.items} />
                  </section>
                ))}
              </div>
            </Reveal>

            <div className="mt-12 grid gap-12">
              {article.sections.map((section, index) => (
                <Reveal as="section" className="scroll-mt-24" id={section.id} key={section.id} staggerIndex={index}>
                  <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">{section.title}</h2>
                  <div className="hs-muted mt-4 grid gap-4 text-base leading-7">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.bullets ? <BulletList items={section.bullets} /> : null}
                  {section.id === 'why-current' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Current records:{' '}
                      <a className="hs-text-link" href="https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-Hair-Dryer-Brushes-Immediately-Due-to-Risk-of-Serious-Injury-or-Death-from-Electrocution-and-Shock-Hazards-Violate-Federal-Regulations-Sold-by-DEISNGB-and-TikTok-Shop" rel="noreferrer" target="_blank">CPSC warning 26-680</a>{' '}
                      and the independent{' '}
                      <a className="hs-text-link" href="https://www.gov.uk/product-safety-alerts-reports-recalls/product-safety-report-small-caring-hairdryer-2607-0188" rel="noreferrer" target="_blank">UK OPSS report 2607-0188</a>.
                    </p>
                  ) : null}
                  {section.id === 'electrical-evidence' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Use the current <a className="hs-text-link" href="https://www.cpsc.gov/FAQ/Hand-Supported-Hair-Dryers" rel="noreferrer" target="_blank">CPSC hand-supported hair dryer guidance</a> for U.S. scope, then have qualified parties identify the actual destination requirements.
                    </p>
                  ) : null}
                  {section.id === 'claims-labels' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Check the <a className="hs-text-link" href="https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Certificates" rel="noreferrer" target="_blank">CPSC certificate and eFiling update</a> and the <Link className="hs-text-link" href="/verify-china-lab-test-report">laboratory report verification guide</Link> without assuming one document covers a changed production model.
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
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Turn evidence into a payment or pickup decision.</h2>
            <p className="hs-muted mt-3 text-base leading-7">Record the exact cleared model and lot and every open condition. A pass should never conceal missing electrical evidence, mixed protective devices, changed components, inaccessible stock, or required specialist decisions.</p>
          </Reveal>
          <div className="mt-8 overflow-x-auto rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <table className="w-full min-w-3xl border-collapse text-left text-sm leading-6">
              <thead className="bg-[var(--hs-navy)] text-white"><tr><th className="p-4 font-extrabold" scope="col">Risk node</th><th className="border-l border-white/10 p-4 font-extrabold" scope="col">What to check</th><th className="border-l border-white/10 p-4 font-extrabold" scope="col">Buyer decision</th></tr></thead>
              <tbody>
                {article.decisionRows.map((row) => (
                  <tr className="border-t border-[var(--hs-border)]" key={row.riskNode}>
                    <th className="bg-[var(--hs-bg-soft)] p-4 align-top font-extrabold text-[var(--hs-text)]" scope="row">{row.riskNode}</th>
                    <td className="border-l border-[var(--hs-border)] p-4 align-top text-[var(--hs-muted)]">{row.whatToConfirm}</td>
                    <td className="border-l border-[var(--hs-border)] p-4 align-top text-[var(--hs-muted)]">{row.buyerDecision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <EvidenceBasisSection
        className="hs-section-white"
        intro="This guide combines current CPSC and UK OPSS public records with current U.S. hair-dryer, certification, and eFiling guidance and the exact-model, physical-product, label, packaging, correction, and release evidence a buyer can organize before goods leave China."
        items={article.evidenceBasis}
      />

      <section className="hs-section-white scroll-mt-24" id="public-case">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <p className="hs-eyebrow">Public case example</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">CPSC warning 26-680: protection must match the finished brush.</h2>
            <div className="hs-muted mt-4 grid gap-4 text-base leading-7">
              <p><strong className="text-[var(--hs-text)]">What happened:</strong> On August 6, 2026, CPSC warned consumers to stop using multiple hair dryer brushes sold by DEISNGB and through TikTok Shop. CPSC said the China-made products lacked integrated immersion protection, violated federal hair-dryer regulations, and presented serious electrocution and shock risks.</p>
              <p><strong className="text-[var(--hs-text)]">What evidence was public:</strong> The <a className="hs-text-link" href="https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-Hair-Dryer-Brushes-Immediately-Due-to-Risk-of-Serious-Injury-or-Death-from-Electrocution-and-Shock-Hazards-Violate-Federal-Regulations-Sold-by-DEISNGB-and-TikTok-Shop" rel="noreferrer" target="_blank">CPSC warning</a> identifies product descriptions, model or UPC information, China manufacture, sales channels, the missing protection, the agency&apos;s regulatory conclusion, and remedy status. It does not publish the complete design history, full test file, root-cause analysis, or production record for every unit.</p>
              <p><strong className="text-[var(--hs-text)]">Buyer lesson:</strong> Do not release a hot-air brush because the supplier shows a plug photo or a generic report. Map the protective device, plug, cord, heater, motor, thermal controls, wiring, housing, ratings, labels, and exact production identity to qualified evidence, then confirm sampled mass production still matches.</p>
              <p><strong className="text-[var(--hs-text)]">Why the separate UK case matters:</strong> The <a className="hs-text-link" href="https://www.gov.uk/product-safety-alerts-reports-recalls/product-safety-report-small-caring-hairdryer-2607-0188" rel="noreferrer" target="_blank">UK OPSS Small Caring Hairdryer report</a> documented a different China-made appliance with accessible live parts, counterfeit plug components, and missing markings and documents. Different destinations and failure modes lead to the same sourcing discipline: identify the applicable rule and verify the exact finished version before shipment.</p>
              <p><strong className="text-[var(--hs-text)]">Limits of comparison:</strong> Neither record proves every China-made hair dryer brush, supplier, factory, or lot has the same defect. Huang Sourcing had no role in either case, and a sampled China-side inspection cannot reproduce qualified immersion, electrical, heating, abnormal-operation, endurance, or fire testing or certify an appliance as safe.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft scroll-mt-24" id="documents">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <div className="hs-icon-box size-12"><FileSearch aria-hidden className="size-6" /></div>
            <p className="hs-eyebrow mt-5">Inspection preparation</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">What should the buyer send before inspection?</h2>
            <p className="hs-muted mt-3 text-base leading-7">Send one controlled release pack before the inspector arrives. Missing references remain open conditions, not factory assumptions.</p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {article.whatToSend.map((item, index) => (
              <Reveal className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)]" key={item} staggerIndex={index}>
                <div className="flex gap-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-sm font-extrabold text-white">{index + 1}</span><p className="hs-muted text-sm leading-6">{item}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-[var(--hs-radius)] border border-amber-300 bg-amber-50 p-6 shadow-[var(--hs-shadow-sm)]">
            <div className="flex items-center gap-3"><AlertTriangle aria-hidden className="size-6 text-amber-700" /><h2 className="text-2xl font-extrabold text-[var(--hs-text)]">Shipment red flags</h2></div>
            <BulletList items={article.redFlags} />
          </Reveal>
          <Reveal className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-6 shadow-[var(--hs-shadow-sm)]" delayMs={100}>
            <div className="flex items-center gap-3"><PackageCheck aria-hidden className="size-6 text-[var(--hs-accent)]" /><h2 className="text-2xl font-extrabold text-[var(--hs-text)]">A defensible release record</h2></div>
            <div className="mt-5 grid gap-4 text-sm leading-6 text-[var(--hs-muted)]">
              <p>Name the exact cleared model, ratings, plug, cord, protective-device version, heater and motor version, factory, lot, cartons, quantities, evidence version, inspection sample, open conditions, correction status, and release owner.</p>
              <p>If a failed or changed lot is corrected, require traceable segregation, qualified redesign or retest decisions, revised files, repeat inspection, and a new written release. Preserve the original mismatch record.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft scroll-mt-24" id="scope-limits">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12"><ShieldCheck aria-hidden className="size-6" /></div>
            <p className="hs-eyebrow mt-5">Scope limits</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">What this check can and cannot prove.</h2>
            <p className="hs-muted mt-3 text-base leading-7">Keep visible China-side checks separate from electrical testing, certification, regulatory, importer, marketplace, and end-use responsibilities.</p>
          </Reveal>
          <Reveal className="lg:col-span-8"><BulletList items={article.scopeLimits} /></Reveal>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <div className="hs-icon-box size-12"><Gauge aria-hidden className="size-6" /></div>
            <p className="hs-eyebrow mt-5">Related buyer decisions</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Build a complete pre-shipment evidence chain.</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {article.relatedLinks.map((item) => (
              <Link className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)] transition-transform hover:-translate-y-0.5 hover:border-[var(--hs-accent)]" href={item.href} key={item.href}>
                <h3 className="font-extrabold text-[var(--hs-text)]">{item.label}</h3>
                <p className="hs-muted mt-2 text-sm leading-6">{item.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent-strong)]">Open guide <ArrowRight aria-hidden className="size-4" /></span>
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
                <div className="flex items-center gap-3"><Plug aria-hidden className="size-7 text-[var(--hs-accent)]" /><p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[var(--hs-accent)]">Before money or goods move</p></div>
                <h2 className="mt-4 text-3xl font-extrabold">Turn open evidence into a shipment decision.</h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-white/80">Share the model list, electrical and protective-device files, approved construction, reports, labels, instructions, packaging, carton map, and payment deadline. Huang Sourcing can scope a practical China-side comparison before balance payment or pickup.</p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-4">
                <ContactAgentButton analyticsLabel="Check hair dryer brushes before shipment" analyticsLocation="hair_dryer_brush_checks_china_article_final_cta" className="hs-btn-primary min-h-12 px-6" href={whatsappHref} size="lg" variant="default">Check Before Shipment</ContactAgentButton>
                <Button asChild className="min-h-12 border-white/30 bg-white text-[var(--hs-navy)] hover:bg-white/90" size="lg" variant="outline"><Link href="/before-balance-payment-qc-china">View Balance-Payment Check</Link></Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section">
          <Reveal>
            <div className="flex items-center gap-3"><ExternalLink aria-hidden className="size-6 text-[var(--hs-accent)]" /><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Sources</h2></div>
            <p className="hs-muted mt-3 max-w-3xl text-sm leading-6">Public records and current guidance checked August 9, 2026 Beijing time. Links are descriptive so buyers can inspect dates, exact products, scope, evidence, and limitations directly.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {article.sourceNotes.map((source) => (
                <a className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)]" href={source.href} key={source.href} rel="noreferrer" target="_blank">
                  <span className="inline-flex items-start gap-2 font-extrabold text-[var(--hs-text)]">{source.label}<ExternalLink aria-hidden className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]" /></span>
                  <span className="hs-muted mt-2 block text-sm leading-6">{source.note}</span>
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
