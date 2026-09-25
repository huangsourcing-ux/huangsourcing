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
  busyBoardToyChecksChinaArticle as article,
  cpscChildrensProductCertificate,
  cpscEsjayBusyBoardRecall,
  cpscLontcsBusyBoardRecall,
  cpscMelissaFireTruckRecall,
  cpscSmallPartsGuidance,
  cpscThirdPartyTesting,
  cpscToySafetyGuidance,
  makeBusyBoardToyChecksChinaArticleJsonLd,
  news12FireTruckCoverage,
} from '@/lib/busy-board-toy-checks-china-article'
import { buildWhatsAppHref } from '@/lib/site-links'

const sourceLinkClass = 'hs-text-link font-semibold'

export function BusyBoardToyChecksChinaArticlePage() {
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)
  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeBusyBoardToyChecksChinaArticleJsonLd()} />
      <SiteBreadcrumbs currentPath={article.href} items={[{ label: 'China sourcing risk guides', href: '/china-sourcing-risk-guides' }, { label: article.title }]} />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:items-center lg:py-16">
          <div className="min-w-0 lg:col-span-6">
            <p className="hs-eyebrow">{article.eyebrow}</p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold text-[var(--hs-text)] sm:text-5xl">{article.h1}</h1>
            <p className="hs-muted mt-5 text-base leading-7 sm:text-lg sm:leading-8">{article.intro}</p>
            <ArticleByline author={article.author} publishedDate={article.publishedDate} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton analyticsLabel="Check busy board lots" analyticsLocation="busy_board_article_hero" className="hs-btn-primary min-h-12 px-6" href={whatsappHref} size="lg" variant="default">Check Before Shipment</ContactAgentButton>
              <Button asChild className="hs-btn-secondary min-h-12 px-6" size="lg" variant="outline"><a href="#release-checklist">See Release Checklist</a></Button>
            </div>
          </div>
          <figure className="min-w-0 lg:col-span-6">
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-md)]"><div className="relative aspect-video"><Image alt={article.image.alt} className="object-cover" fill priority sizes="(min-width: 1024px) 50vw, 100vw" src={article.image.src} /></div></div>
            <figcaption className="hs-muted mt-3 text-xs leading-5">Original schematic of a generic board. It is not a recalled product, inspection result, or laboratory test.</figcaption>
          </figure>
        </div>
      </section>

      <section className="hs-section-white" id="quick-answer"><div className="hs-container hs-section max-w-5xl">
        <p className="hs-eyebrow">Quick answer</p>
        <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">What must match before a busy board lot moves?</h2>
        <p className="hs-muted mt-4 text-base leading-7">{article.answer}</p>
        <p className="hs-muted mt-4 text-base leading-7">The intended age on the listing, retail pack, and instructions must describe the same product. Match each knob, zipper, latch, switch, fastener, coating, battery feature if present, and accessible edge to the approved component list and tested sample. Then tie the finished model, factory, date code, tracking mark, lot, and cartons to the certificate and inspection record. A supplier statement or a report cover with a similar product name does not close that chain.</p>
      </div></section>

      <section className="hs-section-soft" id="current-evidence"><div className="hs-container hs-section max-w-5xl">
        <p className="hs-eyebrow">Current public evidence</p>
        <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Three different failures in multi-part activity toys</h2>
        <div className="hs-muted mt-5 grid gap-4 text-base leading-7">
          <p>On September 17, 2026, CPSC <a className={sourceLinkClass} href={cpscEsjayBusyBoardRecall}>recalled about 276,000 Esjay toddler busy boards</a> made in China. Its notice says red knobs on the second page can detach and violate the small-parts ban; it reports no incidents or injuries. A separate <a className={sourceLinkClass} href={cpscMelissaFireTruckRecall}>Melissa &amp; Doug fire-truck activity-board recall</a> that day identified a detachable hose port, 26 reports of it coming loose, and one report of a minor cut. Both notices are product-specific.</p>
          <p>A <a className={sourceLinkClass} href={cpscLontcsBusyBoardRecall}>September 10 Lontcs busy-board recall</a> concerns a different hazard: CPSC says the zipper&apos;s paint exceeded the federal lead-paint limit. These records point to separate inspection and qualified-test questions for attachment, accessible edges, and coatings. <a className={sourceLinkClass} href={news12FireTruckCoverage}>News 12 covered the fire-truck recall</a>, an independent attention signal; it is not a measure of search demand.</p>
          <p>The <a className={sourceLinkClass} href={cpscSmallPartsGuidance}>current CPSC small-parts guidance</a> explains the under-three ban, intended-use scope, and small-parts cylinder. <a className={sourceLinkClass} href={cpscToySafetyGuidance}>CPSC toy-safety guidance</a> addresses other applicable hazards. The responsible U.S. importer must determine the full rule set for the exact toy, not assume that one recall or test covers every board.</p>
        </div>
      </div></section>

      <section className="hs-section-white" id="release-checklist"><div className="hs-container hs-section">
        <div className="max-w-3xl"><p className="hs-eyebrow">Buyer-side release module</p><h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Four checks before balance payment or pickup</h2><p className="hs-muted mt-4 text-base leading-7">Agree the production scope, sample plan, destructive-test handling, and stop rules before inspection. Record actual differences. Leave formal compliance testing and certification to qualified parties.</p></div>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">{article.checklist.map((item, index) => <li className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-6 shadow-[var(--hs-shadow-sm)]" key={item.title}><div className="flex items-start gap-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-sm font-extrabold text-white">{index + 1}</span><div><h3 className="text-lg font-extrabold text-[var(--hs-text)]">{item.title}</h3><p className="hs-muted mt-2 text-sm leading-6">{item.detail}</p></div></div></li>)}</ol>
      </div></section>

      <section className="hs-section-soft" id="factory-checks"><div className="hs-container hs-section grid gap-8 lg:grid-cols-2">
        <div><p className="hs-eyebrow">At the factory</p><h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Compare every accessible feature with the approved version.</h2>
          <p className="hs-muted mt-4 text-base leading-7">Sample across the named models, lots, and cartons. Photograph component count and placement; compare knob shape and fastening, zippers and painted pulls, latches, keys, hinges, mirrors, cords, closures, and any battery access against the signed sample and drawings. Record visible looseness, exposed edges, coating damage, and substitutions with unit and carton IDs. Do not return any destructively checked unit to saleable stock.</p>
          <p className="hs-muted mt-4 text-base leading-7">A buyer-side tug, visual check, or handheld gauge may flag a concern but cannot establish a regulatory pass. The <a className={sourceLinkClass} href={cpscSmallPartsGuidance}>small-parts method</a> includes prescribed evaluation, and <a className={sourceLinkClass} href={cpscThirdPartyTesting}>CPSC third-party-testing guidance</a> covers initial, material-change, and periodic testing. A new component, coating, or attachment method can change the evidence needed for the production version.</p>
        </div>
        <div className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-6 shadow-[var(--hs-shadow-sm)]"><div className="flex items-center gap-3"><FileCheck2 aria-hidden className="size-6 text-[var(--hs-accent)]" /><h3 className="text-xl font-extrabold text-[var(--hs-text)]">Request one release pack</h3></div><ul className="mt-5 grid gap-4 text-sm leading-6 text-[var(--hs-muted)]">{[
          'Destination, responsible importer, intended age, sales listing, purchase order, SKU, model, version, factory, lots, quantities, and carton map.',
          'Signed sample, drawings, bill of materials, attachment specifications, coating and component suppliers, and change log.',
          'Complete relevant reports, tested-sample photos, CPSC-accepted laboratory scope, applicable-rule list, and Children’s Product Certificate.',
          'Age marks, tracking labels, warnings, instructions, retail packaging, barcodes, and outer-carton identity.',
          'Sampling and stop rules, failed-unit IDs, containment record, qualified disposition, correction, and repeat-check plan.',
        ].map((item) => <li className="flex gap-2" key={item}><CheckCircle2 aria-hidden className="mt-1 size-4 shrink-0 text-[var(--hs-accent)]" /><span>{item}</span></li>)}</ul></div>
      </div></section>

      <EvidenceDecisionMatrix id="decision-table" title="Turn each mismatch into a named lot decision." intro="A passing sample cannot clear a changed knob, untested coating, or mixed cartons that cannot be mapped to the approved version." rows={article.decisionRows} />

      <section className="hs-section-white" id="public-case"><div className="hs-container hs-section max-w-5xl"><p className="hs-eyebrow">Public case example</p><h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Esjay: a detachable knob changed the shipment decision</h2><div className="hs-muted mt-5 grid gap-4 text-base leading-7">
        <p><strong className="text-[var(--hs-text)]">What happened:</strong> The <a className={sourceLinkClass} href={cpscEsjayBusyBoardRecall}>September 17, 2026 CPSC notice</a> says red knobs on the second page of Esjay toddler busy boards can detach. CPSC described a small-parts-ban violation, about 276,000 affected units, China manufacture, and no reported incidents or injuries. The remedy is to remove the affected page under the recall instructions and obtain a replacement page.</p>
        <p><strong className="text-[var(--hs-text)]">What evidence was public:</strong> The notice identifies the blue felt five-page board, the affected red-knob page, sale channel, manufacturer, hazard, and remedy. It does not publish the factory attachment specification, tested sample file, or a complete root-cause report for another buyer&apos;s order.</p>
        <p><strong className="text-[var(--hs-text)]">Buyer lesson:</strong> Compare the production knob and attachment to the approved sample and full qualified evidence, then trace the actual version to dated lots and cartons. A replacement page or updated fastening method is a change requiring its own documented disposition; it does not automatically clear earlier stock. <a className={sourceLinkClass} href={cpscChildrensProductCertificate}>CPSC CPC guidance</a> requires product identification sufficient to match the certificate to the covered product and no others.</p>
        <p><strong className="text-[var(--hs-text)]">Limits of comparison:</strong> The recall does not prove that another busy board or supplier is defective. The Melissa &amp; Doug and Lontcs notices concern different components and hazards. Huang Sourcing did not work on these recalls. Visual sampling cannot certify compliance or guarantee every unit in a lot.</p>
      </div></div></section>

      <EvidenceBasisSection intro="This guide combines current CPSC guidance, three distinct CPSC recall records, independent news coverage, and buyer-side sourcing analysis. Classification, test interpretation, certification, and legal release belong to the responsible importer and qualified specialists." items={article.evidenceBasis} />

      <section className="hs-section-white" id="limits"><div className="hs-container hs-section max-w-5xl"><div className="flex items-center gap-3"><ShieldAlert aria-hidden className="size-7 text-amber-700" /><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Scope limits and stop rules</h2></div><p className="hs-muted mt-4 text-base leading-7">U.S. requirements depend on intended age, construction, materials, and use. An age label chosen to avoid testing does not settle intended use. <a className={sourceLinkClass} href={cpscSmallPartsGuidance}>CPSC guidance</a> says small parts may be entire objects, separate components, or pieces liberated through prescribed use-and-abuse testing. Other toy and coating rules may apply; the importer and qualified lab must define them.</p><p className="hs-muted mt-4 text-base leading-7">Hold affected stock for loose or different attachments, new coatings, unapproved component substitutions, inconsistent age claims, missing or mismatched reports or CPC, incorrect tracking labels, mixed versions, or untraceable cartons. Obtain a documented qualified decision and any required new testing before correction, re-inspection, and limited release. Do not present a factory inspection as a safety certification.</p></div></section>

      <section className="hs-section-soft" id="related-guides"><div className="hs-container hs-section"><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Continue the buyer-side evidence chain.</h2><div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{article.relatedLinks.map((item) => <Link className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)] hover:border-[var(--hs-accent)]" href={item.href} key={item.href}><h3 className="font-extrabold text-[var(--hs-text)]">{item.label}</h3><p className="hs-muted mt-2 text-sm leading-6">{item.note}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent-strong)]">Open guide <ArrowRight aria-hidden className="size-4" /></span></Link>)}</div></div></section>

      <section className="hs-section-white" id="contact"><div className="hs-container hs-section"><div className="rounded-[var(--hs-radius)] bg-[var(--hs-navy)] p-7 text-white shadow-[var(--hs-shadow-lg)] sm:p-9"><h2 className="text-3xl font-extrabold">Make the hold or release scope explicit.</h2><p className="mt-3 max-w-3xl text-base leading-7 text-white/80">Share the intended age, exact model, component and coating list, approved sample, complete reports, CPC, factory, lots, labels, carton map, and pickup deadline. Huang Sourcing can scope a China-side comparison and document the gaps that need specialist review.</p><div className="mt-6 flex flex-col gap-3 sm:flex-row"><ContactAgentButton analyticsLabel="Check busy boards before shipment" analyticsLocation="busy_board_article_final_cta" className="hs-btn-primary min-h-12 px-6" href={whatsappHref} size="lg" variant="default">Check Before Shipment</ContactAgentButton><Button asChild className="min-h-12 border-white/30 bg-white text-[var(--hs-navy)] hover:bg-white/90" size="lg" variant="outline"><Link href="/qc-inspection-china">View Inspection Service</Link></Button><Button asChild className="min-h-12 border-white/30 bg-transparent text-white hover:bg-white/10" size="lg" variant="outline"><Link href="/free-china-sourcing-risk-check">Free Risk Check</Link></Button></div></div></div></section>

      <section className="hs-section-soft" id="sources"><div className="hs-container hs-section"><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Sources</h2><p className="hs-muted mt-3 max-w-3xl text-sm leading-6">Public records checked September 26, 2026 Beijing time. CPSC notices control case facts; current CPSC business guidance controls the described U.S. rule framework. Links do not imply Huang Sourcing involvement.</p><div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{article.sources.map((source) => <a className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)] hover:border-[var(--hs-accent)]" href={source.href} key={source.href} rel="noreferrer" target="_blank"><span className="inline-flex items-start gap-2 font-extrabold text-[var(--hs-text)]">{source.label}<ExternalLink aria-hidden className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]" /></span><span className="hs-muted mt-2 block text-sm leading-6">{source.note}</span></a>)}</div></div></section>
      <SiteFooter />
    </main>
  )
}
