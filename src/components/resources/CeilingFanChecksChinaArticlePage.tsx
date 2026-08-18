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
import {
  ceilingFanChecksChinaArticle,
  makeCeilingFanChecksChinaArticleJsonLd,
} from '@/lib/ceiling-fan-checks-china-article'
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

export function CeilingFanChecksChinaArticlePage() {
  const article = ceilingFanChecksChinaArticle
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeCeilingFanChecksChinaArticleJsonLd()} />
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
                analyticsLocation="ceiling_fan_checks_china_article_hero"
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
              Neutral AI-generated illustration of a generic ceiling fan inspection
              setup; not a product photograph, laboratory test, recalled product, or
              evidence from the cited public case.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Exact model', 'Blade interface', 'Lot check', 'Release'].map((item) => (
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
                What should buyers check before ceiling fans leave China?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                Match the exact finished fan to qualified product evidence and a
                controlled production file. Inspect the sampled lot for motor and
                flywheel identity, blades, brackets, fasteners, locking features,
                mounting parts, wiring, controls, rating labels, instructions,
                packaging, quantities, and workmanship. Hold any mismatch; do not treat
                a supplier video, certification logo, energy label, or improvised spin
                as proof of blade retention, endurance, or safe operation.
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
                    Ceiling fan release checklist
                  </h2>
                </div>
              </div>
              <p className="hs-muted mt-4 text-base leading-7">
                Connect qualified product evidence to sampled mass production and
                pack-out. This checklist does not turn an onsite comparison into
                prescribed performance testing, certification, legal advice, or a
                safety guarantee.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {article.checkGroups.map((group) => (
                  <section
                    className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 shadow-[var(--hs-shadow-sm)]"
                    key={group.title}
                  >
                    <div className="flex items-center gap-2">
                      <ClipboardCheck
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
        intro="Record the exact cleared fan, model, rotating-assembly configuration, batch, cartons, and every open condition. A sampled visual pass must not conceal missing qualified evidence, a component or process change, mixed hardware, failed units, unresolved labels, or an incomplete importer decision."
        rows={article.decisionRows}
        title="Turn ceiling fan evidence into a payment or shipment decision."
      />

      <EvidenceBasisSection
        className="hs-section-white"
        intro="This guide combines the August 2026 Hampton Bay Halwin recall, separate historical CPSC blade-detachment records, current U.S. Department of Energy ceiling fan guidance, and buyer-side sourcing analysis. It keeps engineering, testing, energy certification, inspection observations, importer duties, and release decisions in separate scopes."
        items={article.evidenceBasis}
      />

      <section className="hs-section-soft scroll-mt-24" id="public-case">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <p className="hs-eyebrow">Public case example</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Hampton Bay Halwin: blades could separate from the motor flywheel.
            </h2>
            <div className="hs-muted mt-4 grid gap-4 text-base leading-7">
              <p>
                <strong className="text-[var(--hs-text)]">What happened:</strong> On
                August 13, 2026, CPSC announced the recall of about 9,460 Hampton Bay
                Halwin 52-inch indoor and covered-outdoor ceiling fans. CPSC said the fan
                blades could separate from the motor flywheel, creating impact and
                injury hazards. Youngo had received 11 reports of blades breaking or
                separating; the notice reported no injuries.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">
                  What evidence was public:
                </strong>{' '}
                The{' '}
                <a
                  className="hs-text-link"
                  href="https://www.cpsc.gov/Recalls/2026/Hampton-Bay-Halwin-52-Inch-Ceiling-Fans-Recalled-Due-to-Impact-and-Injury-Hazards-Manufactured-by-Youngo-Limited"
                  rel="noreferrer"
                  target="_blank"
                >
                  official CPSC recall
                </a>{' '}
                identifies model numbers AK396H-MBK and AK396H-BN, two UPCs, the rating
                label location, finishes, sales period, quantity, 11 reported incidents,
                remedy, and Youngo Limited in Huizhou, China as manufacturer. The notice
                does not publish complete drawings, bills of materials, test reports,
                root-cause analysis, fastener specifications, or factory controls.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">Buyer lesson:</strong>{' '}
                Freeze the exact motor, flywheel, blade set, brackets, fasteners, locking
                method, mount, controls, factory, model, batch, test sample, reports,
                rating labels, hardware packs, retail packages, and cartons. Keep sampled
                construction and assembly checks separate from engineering conclusions
                and prescribed performance testing.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">
                  Why the older cases still matter:
                </strong>{' '}
                The{' '}
                <a
                  className="hs-text-link"
                  href="https://www.cpsc.gov/Recalls/2022/Hong-Kong-China-Electric-Appliance-Manufacture-Company-Recalls-Ceiling-Fans-Due-to-Impact-Injury-Hazard"
                  rel="noreferrer"
                  target="_blank"
                >
                  2021 CPSC HKC ceiling fan recall
                </a>{' '}
                covered distinct Harbor Breeze and Honeywell models after 60 reported
                blade detachments. A separate{' '}
                <a
                  className="hs-text-link"
                  href="https://www.cpsc.gov/Recalls/2021/King-of-Fans-Recalls-Hampton-Bay-Mara-Ceiling-Fans-Due-to-Injury-Hazard-Sold-Exclusively-at-Home-Depot"
                  rel="noreferrer"
                  target="_blank"
                >
                  2020 CPSC Hampton Bay Mara recall
                </a>{' '}
                recorded 47 blade-detachment reports, including two reports of a blade
                hitting a consumer. These older records do not identify the 2026 root
                cause; they show why the blade-retention release node remains relevant.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">
                  Limits of comparison:
                </strong>{' '}
                The records do not prove every ceiling fan, supplier, factory, or lot has
                the same defect or root cause. Huang Sourcing had no role in any cited
                case. A sampled buyer-side inspection cannot reproduce prescribed
                retention, fatigue, endurance, vibration, electrical, or energy testing,
                issue a compliance certification, or guarantee safe installation or use.
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
            <p className="hs-eyebrow mt-5">Inspection preparation</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What should the buyer send before inspection?
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Send one controlled release pack before the inspector arrives. Missing
              references should remain visible as open conditions, not be replaced by
              factory assumptions.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {article.whatToSend.map((item, index) => (
              <Reveal
                className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 shadow-[var(--hs-shadow-sm)]"
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

      <section className="hs-section-soft scroll-mt-24" id="scope-limits">
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
          <Reveal className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-6 shadow-[var(--hs-shadow-sm)]">
            <div className="flex items-center gap-3">
              <ShieldCheck aria-hidden className="size-6 text-[var(--hs-accent)]" />
              <h2 className="text-2xl font-extrabold text-[var(--hs-text)]">
                What this check cannot prove
              </h2>
            </div>
            <BulletList items={article.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <div className="hs-icon-box size-12">
              <PackageCheck aria-hidden className="size-6" />
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
                <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[var(--hs-accent)]">
                  Before money or goods move
                </p>
                <h2 className="mt-4 text-3xl font-extrabold">
                  Turn open evidence into a shipment decision.
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-white/80">
                  Share the exact models, approved construction file, reports,
                  rotating-assembly drawings, blade and hardware specifications, reports,
                  certifications, rating labels, instructions, hardware packs, carton
                  map, change history, and deadline. Huang Sourcing can scope a practical
                  China-side comparison before balance payment or pickup.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-4">
                <ContactAgentButton
                  analyticsLabel="Check ceiling fans before shipment"
                  analyticsLocation="ceiling_fan_checks_china_article_final_cta"
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
              Public records and official guidance checked August 19, 2026 Beijing time.
              Links identify the exact products, findings, dates, actions, requirements,
              and interpretation limits used in this guide.
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
