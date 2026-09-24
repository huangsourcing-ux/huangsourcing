import { ArrowRight, CheckCircle2, ExternalLink, FileCheck2, ShieldAlert } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { ArticleByline, EvidenceBasisSection, EvidenceDecisionMatrix } from '@/components/resources/ArticleTrustSignals'
import { JsonLd } from '@/components/seo/JsonLd'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  bureauVeritasGateUpdate,
  cpscBabyBondRecall,
  cpscCumborRecall,
  cpscGateGuidance,
  ecfrGateRule,
  federalRegisterGateRule,
  makeRetractableGateChecksChinaArticleJsonLd,
  retractableGateChecksChinaArticle as article,
} from '@/lib/retractable-gate-checks-china-article'
import { buildWhatsAppHref } from '@/lib/site-links'

const sourceLinkClass = 'hs-text-link font-semibold'

export function RetractableGateChecksChinaArticlePage() {
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)
  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeRetractableGateChecksChinaArticleJsonLd()} />
      <SiteBreadcrumbs
        currentPath={article.href}
        items={[
          { label: 'China sourcing risk guides', href: '/china-sourcing-risk-guides' },
          { label: article.title },
        ]}
      />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:items-center lg:py-16">
          <div className="min-w-0 lg:col-span-6">
            <p className="hs-eyebrow">{article.eyebrow}</p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold text-[var(--hs-text)] sm:text-5xl">{article.h1}</h1>
            <p className="hs-muted mt-5 text-base leading-7 sm:text-lg sm:leading-8">{article.intro}</p>
            <ArticleByline author={article.author} publishedDate={article.publishedDate} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton analyticsLabel="Check retractable gate lots" analyticsLocation="retractable_gate_article_hero" className="hs-btn-primary min-h-12 px-6" href={whatsappHref} size="lg" variant="default">Check Before Shipment</ContactAgentButton>
              <Button asChild className="hs-btn-secondary min-h-12 px-6" size="lg" variant="outline"><a href="#release-checklist">See Release Checklist</a></Button>
            </div>
          </div>
          <figure className="min-w-0 lg:col-span-6">
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-md)]">
              <div className="relative aspect-video"><Image alt={article.image.alt} className="object-cover" fill priority sizes="(min-width: 1024px) 50vw, 100vw" src={article.image.src} /></div>
            </div>
            <figcaption className="hs-muted mt-3 text-xs leading-5">Original buyer-side schematic. It is not a recalled gate, an installation instruction, or a test result.</figcaption>
          </figure>
        </div>
      </section>

      <section className="hs-section-white" id="quick-answer">
        <div className="hs-container hs-section max-w-5xl">
          <p className="hs-eyebrow">Quick answer</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">What must match before a retractable gate lot moves?</h2>
          <p className="hs-muted mt-4 text-base leading-7">{article.answer}</p>
          <p className="hs-muted mt-4 text-base leading-7">Treat the report, the approved sample, the installation kit, and the goods as one version-controlled release pack. Photograph the sewn-in model and date labels, then reconcile frame, mesh, reel, latch, brackets, screws, opening range, warnings, instructions, registration card, retail pack, and master cartons. A changed bracket or mounting instruction can alter the installed opening even when the mesh looks unchanged.</p>
        </div>
      </section>

      <section className="hs-section-soft" id="current-evidence">
        <div className="hs-container hs-section max-w-5xl">
          <p className="hs-eyebrow">Current public evidence</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">A 2026 rule update meets a documented opening hazard.</h2>
          <div className="hs-muted mt-5 grid gap-4 text-base leading-7">
            <p>The <a className={sourceLinkClass} href={ecfrGateRule}>current text of 16 CFR 1239.2</a> incorporates ASTM F1004-25 for gates and enclosures. The <a className={sourceLinkClass} href={federalRegisterGateRule}>April 2026 Federal Register rule</a> says the update took effect July 19, 2026 and applies to products manufactured after that date. Its substantive change prohibits features or openings within an in-scope gate or enclosure that allow unassisted pet entry or exit. A pet opening is a separate design question from the gate-to-floor gap seen in the recalls below.</p>
            <p>On January 22, 2026, CPSC <a className={sourceLinkClass} href={cpscCumborRecall}>recalled about 4,520 Cumbor S5V2 retractable gates</a> made in China. The agency said a child&apos;s torso could pass through the opening between gate and floor, creating entrapment risk. The notice identifies a sewn-in model and cohort label and reports no incidents or injuries. A separate <a className={sourceLinkClass} href={cpscBabyBondRecall}>January 8 BabyBond recall</a> describes a similar bottom-opening hazard in another China-made model; it also reports no incidents or injuries.</p>
            <p><a className={sourceLinkClass} href={bureauVeritasGateUpdate}>Bureau Veritas independently covered</a> the 2026 rule change. These records show a current buyer decision: verify the right standard version and exact production configuration, then examine the actual installation geometry. Neither recall establishes that a different gate, supplier, or lot is defective.</p>
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="release-checklist">
        <div className="hs-container hs-section">
          <div className="max-w-3xl">
            <p className="hs-eyebrow">Buyer-side release module</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Four gates before balance payment or pickup</h2>
            <p className="hs-muted mt-4 text-base leading-7">Agree on the tested installation positions, sample plan, and stop rules before anyone evaluates a lot. Record configuration and visible deviations; leave mandatory performance tests to a qualified, accepted laboratory.</p>
          </div>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {article.checklist.map((item, index) => (
              <li className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-6 shadow-[var(--hs-shadow-sm)]" key={item.title}>
                <div className="flex items-start gap-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-sm font-extrabold text-white">{index + 1}</span><div><h3 className="text-lg font-extrabold text-[var(--hs-text)]">{item.title}</h3><p className="hs-muted mt-2 text-sm leading-6">{item.detail}</p></div></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="hs-section-soft" id="factory-checks">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-2">
          <div>
            <p className="hs-eyebrow">What an inspector can document</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Compare the installed gate with the tested design.</h2>
            <p className="hs-muted mt-4 text-base leading-7">Compare sampled units with the signed drawings and sample: mesh attachment, reel housing, frame, edges, stitching, latch engagement, supplied brackets, screws, anchors, mounting template, warnings, and instructions. Set up only the buyer-approved configurations and opening widths, on a suitable fixture or surface. Photograph the gate-to-floor and side openings with a scale and record the installation position, hardware, model, and lot for every observation.</p>
            <p className="hs-muted mt-4 text-base leading-7">The <a className={sourceLinkClass} href={cpscGateGuidance}>CPSC business guidance</a> lists opening, bottom-spacing, strength, latch, label, registration, and CPC topics. Its on-page version table still lists an older revision, so use the <a className={sourceLinkClass} href={ecfrGateRule}>current eCFR</a> for the incorporated version. A factory visual check cannot replace the standard&apos;s small-torso-probe, strength, durability, or other prescribed tests. Do not infer a pass from an improvised gap measurement.</p>
          </div>
          <div className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-6 shadow-[var(--hs-shadow-sm)]">
            <div className="flex items-center gap-3"><FileCheck2 aria-hidden className="size-6 text-[var(--hs-accent)]" /><h3 className="text-xl font-extrabold text-[var(--hs-text)]">Request one controlled release pack</h3></div>
            <ul className="mt-5 grid gap-4 text-sm leading-6 text-[var(--hs-muted)]">
              {[
                'Destination, responsible importer, purchase order, model and SKU list, manufacture dates, factory, lots, quantities, and cartons.',
                'Approved sample, drawings, bill of materials, mesh, reel, latch, mounting kit, intended wall or opening configurations, and change log.',
                'Full current-standard laboratory reports, tested sample and setup identity, CPSC-accepted laboratory scope, results, deviations, and CPC data.',
                'Permanent model and date marks, tracking information, warnings, instructions, registration form, retail packaging, and carton labels.',
                'Sampling plan, installation method, stop rules, failed-unit IDs, containment map, correction owner, and qualified re-test route.',
              ].map((item) => <li className="flex gap-2" key={item}><CheckCircle2 aria-hidden className="mt-1 size-4 shrink-0 text-[var(--hs-accent)]" /><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <EvidenceDecisionMatrix id="decision-table" title="Turn each evidence gap into a named shipment decision." intro="A passing sample cannot clear an undocumented hardware change or a lot that cannot be traced to its test evidence." rows={article.decisionRows} />

      <section className="hs-section-white" id="public-case">
        <div className="hs-container hs-section max-w-5xl">
          <p className="hs-eyebrow">Public case example</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Cumbor S5V2: why installed openings and cohort identity matter</h2>
          <div className="hs-muted mt-5 grid gap-4 text-base leading-7">
            <p><strong className="text-[var(--hs-text)]">What happened:</strong> The <a className={sourceLinkClass} href={cpscCumborRecall}>January 22, 2026 CPSC recall</a> says the recalled retractable gates could allow a child&apos;s torso through the space between gate and floor. The notice covers about 4,520 units, identifies model S5V2 and cohort A202504S5V2A001, and reports no incidents or injuries.</p>
            <p><strong className="text-[var(--hs-text)]">What evidence was public:</strong> CPSC published the product description, sewn-in label details, hazard, remedy, importer, manufacturing country, and affected scope. The <a className={sourceLinkClass} href={cpscBabyBondRecall}>separate BabyBond notice</a> confirms a similar failure mode can appear in another model. Neither record provides a complete factory root-cause file or a test report for a buyer&apos;s proposed gate.</p>
            <p><strong className="text-[var(--hs-text)]">Buyer lesson:</strong> Require the approved installation kit and setup to match the tested sample; document the actual bottom and side openings and tie each observation to the exact model, manufacture date, lot, and carton. A new report for another bracket, width, or mesh construction does not clear this production scope.</p>
            <p><strong className="text-[var(--hs-text)]">Limits of comparison:</strong> These recalls predate the July 2026 ASTM F1004-25 effective date, and neither is presented as a pet-opening violation. They do not prove other retractable gates are unsafe. Huang Sourcing did not participate in either case, and buyer-side sampling cannot certify regulatory compliance.</p>
          </div>
        </div>
      </section>

      <EvidenceBasisSection intro="This guide combines current U.S. rule text, two CPSC recall records, industry coverage, and buyer-side sourcing analysis. Product classification, test interpretation, certification, and legal release belong to the responsible importer and qualified specialists." items={article.evidenceBasis} />

      <section className="hs-section-white" id="limits">
        <div className="hs-container hs-section max-w-5xl">
          <div className="flex items-center gap-3"><ShieldAlert aria-hidden className="size-7 text-amber-700" /><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Scope limits and stop rules</h2></div>
          <p className="hs-muted mt-4 text-base leading-7">For U.S. orders, the importer must identify the rule applicable to each manufacture date and exact product. The 2026 standard adds a pet-passage restriction to the existing gate requirements; it does not mean every older recall was caused by that new provision. Qualified testing, CPC issuance, labeling, registration materials, and destination-specific obligations remain separate tasks. A lab logo, supplier assertion, or visual sample check is not proof of compliance.</p>
          <p className="hs-muted mt-4 text-base leading-7">Hold affected stock for unexplained bottom or side openings, pet-passage features, changed brackets or latches, missing setup instructions, mismatched model and report identity, failed samples, missing date or lot traceability, or unresolved paperwork. Escalate to the importer and qualified technical party; record the correction and any required re-test before a controlled repeat inspection and limited release.</p>
        </div>
      </section>

      <section className="hs-section-soft" id="related-guides">
        <div className="hs-container hs-section">
          <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Continue the buyer-side evidence chain.</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {article.relatedLinks.map((item) => <Link className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)] hover:border-[var(--hs-accent)]" href={item.href} key={item.href}><h3 className="font-extrabold text-[var(--hs-text)]">{item.label}</h3><p className="hs-muted mt-2 text-sm leading-6">{item.note}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent-strong)]">Open guide <ArrowRight aria-hidden className="size-4" /></span></Link>)}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="contact">
        <div className="hs-container hs-section">
          <div className="rounded-[var(--hs-radius)] bg-[var(--hs-navy)] p-7 text-white shadow-[var(--hs-shadow-lg)] sm:p-9">
            <h2 className="text-3xl font-extrabold">Make the hold or release scope explicit.</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-white/80">Share the gate model, installation kit, manufacture dates, approved sample, current reports, CPC data, labels, production lots, carton map, and pickup deadline. Huang Sourcing can scope a China-side comparison and document what still needs specialist review.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton analyticsLabel="Check retractable gates before shipment" analyticsLocation="retractable_gate_article_final_cta" className="hs-btn-primary min-h-12 px-6" href={whatsappHref} size="lg" variant="default">Check Before Shipment</ContactAgentButton>
              <Button asChild className="min-h-12 border-white/30 bg-white text-[var(--hs-navy)] hover:bg-white/90" size="lg" variant="outline"><Link href="/qc-inspection-china">View Inspection Service</Link></Button>
              <Button asChild className="min-h-12 border-white/30 bg-transparent text-white hover:bg-white/10" size="lg" variant="outline"><Link href="/free-china-sourcing-risk-check">Free Risk Check</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="hs-section-soft" id="sources">
        <div className="hs-container hs-section">
          <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Sources</h2>
          <p className="hs-muted mt-3 max-w-3xl text-sm leading-6">Public records checked September 25, 2026 Beijing time. The current eCFR and Federal Register control the cited rule facts; CPSC notices control case facts. Links do not imply Huang Sourcing involvement.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {article.sources.map((source) => <a className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)] hover:border-[var(--hs-accent)]" href={source.href} key={source.href} rel="noreferrer" target="_blank"><span className="inline-flex items-start gap-2 font-extrabold text-[var(--hs-text)]">{source.label}<ExternalLink aria-hidden className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]" /></span><span className="hs-muted mt-2 block text-sm leading-6">{source.note}</span></a>)}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
