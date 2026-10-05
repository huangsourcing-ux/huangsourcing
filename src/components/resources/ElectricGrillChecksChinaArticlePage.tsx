import { ArrowRight, ExternalLink, ShieldAlert } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { ArticleByline, EvidenceBasisSection, EvidenceDecisionMatrix } from '@/components/resources/ArticleTrustSignals'
import { JsonLd } from '@/components/seo/JsonLd'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import { cpscElectricGrillRecall, manufacturerElectricGrillRecall, electricGrillCoverage, electricGrillChecksChinaArticle as article, makeElectricGrillChecksChinaArticleJsonLd } from '@/lib/electric-grill-checks-china-article'
import { buildWhatsAppHref } from '@/lib/site-links'

const sourceLinkClass = 'hs-text-link font-semibold'

export function ElectricGrillChecksChinaArticlePage() {
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)
  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeElectricGrillChecksChinaArticleJsonLd()} />
      <SiteBreadcrumbs currentPath={article.href} items={[{ label: 'China sourcing risk guides', href: '/china-sourcing-risk-guides' }, { label: article.title }]} />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:items-center lg:py-16">
          <div className="min-w-0 lg:col-span-6">
            <p className="hs-eyebrow">{article.eyebrow}</p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold text-[var(--hs-text)] sm:text-5xl">{article.h1}</h1>
            <p className="hs-muted mt-5 text-base leading-7 sm:text-lg sm:leading-8">{article.intro}</p>
            <ArticleByline author={article.author} publishedDate={article.publishedDate} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton analyticsLabel="Check electric grill lots" analyticsLocation="electric_grill_article_hero" className="hs-btn-primary min-h-12 px-6" href={whatsappHref} size="lg" variant="default">Check Before Shipment</ContactAgentButton>
              <Button asChild className="hs-btn-secondary min-h-12 px-6" size="lg" variant="outline"><a href="#release-checklist">See Release Checklist</a></Button>
            </div>
          </div>
          <figure className="min-w-0 lg:col-span-6">
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-md)]">
              <div className="relative aspect-video"><Image alt={article.image.alt} className="object-cover" fill priority sizes="(min-width: 1024px) 50vw, 100vw" src={article.image.src} /></div>
            </div>
            <figcaption className="hs-muted mt-3 text-xs leading-5">Original evidence-flow diagram. It does not depict a recalled grill, a test result or documentary case evidence.</figcaption>
          </figure>
        </div>
      </section>

      <nav aria-label="Article contents" className="hs-section-white border-b border-[var(--hs-border)]">
        <div className="hs-container flex flex-wrap gap-x-6 gap-y-2 py-5 text-sm font-semibold">
          {[['#quick-answer', 'Quick answer'], ['#release-checklist', 'Release checklist'], ['#assembly-evidence', 'Assembly evidence'], ['#public-case', 'Public case'], ['#decision-table', 'Decision table'], ['#sources', 'Sources']].map(([href, label]) => <a className="hs-text-link" href={href} key={href}>{label}</a>)}
        </div>
      </nav>

      <section className="hs-section-white" id="quick-answer">
        <div className="hs-container hs-section max-w-5xl">
          <p className="hs-eyebrow">Quick answer</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">What must match before an electric grill shipment moves?</h2>
          <p className="hs-muted mt-4 text-base leading-7">{article.answer}</p>
          <p className="hs-muted mt-4 text-base leading-7">The <a className={sourceLinkClass} href={cpscElectricGrillRecall}>September 2026 CPSC Bistro Pro recall</a> concerns a grounding connection that can disconnect. The sourcing implication is to connect the accepted assembly and its change history to actual production, rather than relying only on appearance or a power-on demonstration.</p>
        </div>
      </section>

      <section className="hs-section-white" id="release-checklist">
        <div className="hs-container hs-section">
          <p className="hs-eyebrow">Buyer-side release module</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold text-[var(--hs-text)]">Four checks before balance payment or pickup</h2>
          <p className="hs-muted mt-4 max-w-3xl text-base leading-7">Agree what can be compared at the factory, what requires a qualified specialist and who can accept open issues. Keep the lot identity with every finding.</p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {article.checklist.map((item, index) => <li className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-6 shadow-[var(--hs-shadow-sm)]" key={item.title}><div className="flex items-start gap-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-sm font-extrabold text-white">{index + 1}</span><div><h3 className="text-lg font-extrabold text-[var(--hs-text)]">{item.title}</h3><p className="hs-muted mt-2 text-sm leading-6">{item.detail}</p></div></div></li>)}
          </ol>
        </div>
      </section>

      <section className="hs-section-soft" id="assembly-evidence">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-2">
          <div>
            <p className="hs-eyebrow">At the factory</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">How do you check a connection that may be hidden?</h2>
            <p className="hs-muted mt-4 text-base leading-7">Arrange evidence before the relevant assembly is closed. Ask for the approved drawing or connection reference, component and fastener identities, assembly-control records and documented changes. Production-stage observations may be more useful than attempting to infer internal construction from a sealed finished unit. A supplier photo should identify the model, revision and lot it describes.</p>
            <p className="hs-muted mt-4 text-base leading-7">Have qualified parties define the acceptance criteria and any required electrical or durability evaluation. Record which reports cover the current configuration and which features or variants require separate assessment. A screw substitution, routing change or different heater assembly should trigger a coverage question; do not assume every change demands the same test or invent a universal torque value.</p>
            <p className="hs-muted mt-4 text-base leading-7">For shipment inspection, compare only what the agreed scope can safely establish. If an internal connection cannot be observed without specialist access, report that limit and identify the supporting production evidence. Do not open energized equipment, defeat protection or improvise a live fault test. A <Link className={sourceLinkClass} href="/quality-control-china-manufacturing-plan">production QC plan</Link> can schedule evidence collection while assembly remains accessible.</p>
          </div>
          <div className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-6 shadow-[var(--hs-shadow-sm)]">
            <h3 className="text-xl font-extrabold text-[var(--hs-text)]">Send one configuration and lot file</h3>
            <ul className="hs-muted mt-5 list-disc space-y-3 pl-5 text-sm leading-6">
              <li>Destination, importer, model, voltage version, full-size/tabletop configuration and revision.</li>
              <li>Approved heater, control, power cord and grounding assembly references; current bill of materials.</li>
              <li>Complete reports, tested-sample photos, model coverage and qualified change assessments.</li>
              <li>Production dates, assembly records, findings, corrections and affected-lot boundaries.</li>
              <li>Approved markings, instructions, accessories, unit/date-code labels and carton map.</li>
            </ul>
            <p className="hs-muted mt-5 text-sm leading-6">Use the <Link className={sourceLinkClass} href="/verify-china-lab-test-report">laboratory-report verification guide</Link> to frame a coverage request. A report cover page, certification logo or supplier statement alone does not connect all current variants to accepted evidence.</p>
          </div>
        </div>
      </section>

      <EvidenceDecisionMatrix id="decision-table" title="Turn a mismatch into a named lot decision." intro="Keep configuration acceptance, sampled observations and shipment authorization in separate records that can be reconciled." rows={article.decisionRows} />

      <section className="hs-section-white" id="public-case">
        <div className="hs-container hs-section max-w-5xl">
          <p className="hs-eyebrow">Public case example</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Char-Broil Bistro Pro: grounding connection and date-code scope</h2>
          <div className="hs-muted mt-5 grid gap-4 text-base leading-7">
            <p><strong className="text-[var(--hs-text)]">What happened:</strong> On September 17, 2026, <a className={sourceLinkClass} href={cpscElectricGrillRecall}>CPSC recall 26-773</a> identified China-made Bistro Pro electric grills whose heating-element grounding wire can disconnect, removing fault protection and creating an electric shock hazard. The notice reports no incidents or injuries and specifies a repair remedy.</p>
            <p><strong className="text-[var(--hs-text)]">What evidence was public:</strong> CPSC lists affected models in full-size and tabletop configurations and limits its recall to date codes 2510, 2511 and 2512. The <a className={sourceLinkClass} href={manufacturerElectricGrillRecall}>manufacturer’s recall notice</a> supplies model and UPC identifiers, including a separately identified Canadian version, and directs affected consumers to stop use and request the authorized repair kit.</p>
          </div>
          <div className="mt-6 overflow-x-auto rounded-[var(--hs-radius)] border border-[var(--hs-border)]">
            <table className="w-full text-left text-sm leading-6">
              <caption className="bg-[var(--hs-bg-soft)] p-4 text-left font-bold">Selected U.S. identifiers from CPSC — examples, not the full affected-model list</caption>
              <thead className="bg-[var(--hs-navy)] text-white"><tr><th scope="col" className="p-4">Configuration</th><th scope="col" className="p-4">Model example</th><th scope="col" className="p-4">Affected date codes</th></tr></thead>
              <tbody className="hs-muted bg-white"><tr><td className="p-4">Full-size grill and griddle, black</td><td className="p-4">25302145</td><td className="p-4">2510 / 2511 / 2512</td></tr><tr className="border-t border-[var(--hs-border)]"><td className="p-4">Tabletop electric grill, black</td><td className="p-4">25302149</td><td className="p-4">2510 / 2511 / 2512</td></tr></tbody>
            </table>
          </div>
          <div className="hs-muted mt-5 grid gap-4 text-base leading-7">
            <p><strong className="text-[var(--hs-text)]">Buyer lesson:</strong> Match model and manufacturing code together before making a stock decision. For new orders, connect the accepted grounding assembly to production records and identify exactly which revisions and cartons are covered. This evidence workflow is our sourcing analysis, not a regulator-prescribed inspection method.</p>
            <p><strong className="text-[var(--hs-text)]">Limits of comparison:</strong> The records do not establish the construction or safety of another supplier’s grill, reveal a complete root-cause investigation or provide a universal inspection procedure. A code outside the published recall scope does not prove general safety. Huang Sourcing did not inspect, supply or participate in this case.</p>
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="pack-and-trace">
        <div className="hs-container hs-section max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">What should you reconcile on the packed shipment?</h2>
          <p className="hs-muted mt-4 text-base leading-7">Compare sampled unit markings with the retail box, instruction revision and packing list. Keep the market and electrical version visible in the reconciliation. Check that the approved accessory set belongs to that model and that assembly instructions describe the supplied configuration. Mixed tabletop, full-size or accessory versions need explicit mapping rather than a single generic carton description.</p>
          <p className="hs-muted mt-4 text-base leading-7">Record model, date code, production lot, quantity and carton range in one release file. Where a code cannot be read or its meaning is unclear, obtain supplier records and a responsible-party explanation. Do not reconstruct manufacturing dates from an assumed format. If affected or unknown inventory is mixed with accepted goods, segregate it and document the boundary before pickup.</p>
          <p className="hs-muted mt-4 text-base leading-7">After authorized correction, keep the correction record with the original finding and the verification result. A replacement label, an unrelated test report or a photograph of one repaired sample does not establish the status of every carton. Confirm the responsible party has accepted the correction and identify the re-inspected scope before using the release record for balance payment.</p>
        </div>
      </section>

      <EvidenceBasisSection intro="This guide uses cited regulator and manufacturer records for the case. Configuration, inspection and release recommendations are buyer-side sourcing analysis." items={['The official records establish their own recall scope and remedy. They do not establish safety for other models or suppliers.', 'Qualified design and laboratory assessment must resolve technical acceptance. A routine shipment comparison cannot replace that work.', 'Sampling findings apply to the agreed scope. The release file should state who accepted evidence, which lots are covered and which stock remains held.']} />

      <section className="hs-section-white" id="limits">
        <div className="hs-container hs-section max-w-5xl">
          <div className="flex items-center gap-3"><ShieldAlert aria-hidden className="size-7 shrink-0 text-amber-700" /><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">What can a shipment check establish?</h2></div>
          <p className="hs-muted mt-4 text-base leading-7">It can record sampled identity, visible condition, pack contents and alignment with approved references, and expose evidence gaps while goods remain accessible. It cannot certify electrical safety, connection durability, every unit in the order or destination-market compliance. Have the importer and qualified specialists determine the requirements and evaluate the exact design, market and intended operating modes.</p>
          <p className="hs-muted mt-4 text-base leading-7">For recalled stock, follow the <a className={sourceLinkClass} href={manufacturerElectricGrillRecall}>applicable manufacturer recall process</a> and obtain authorized disposition for commercial inventory. Do not treat this article as repair instructions or clear affected goods using an ordinary spot check. Stop on exposed wiring, electrical damage or unresolved abnormal operation and preserve unit and lot identity for assessment.</p>
        </div>
      </section>

      <section className="hs-section-soft" id="related-guides">
        <div className="hs-container hs-section"><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Continue the evidence chain.</h2><div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{article.relatedLinks.map(item => <Link className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)] hover:border-[var(--hs-accent)]" href={item.href} key={item.href}><h3 className="font-extrabold text-[var(--hs-text)]">{item.label}</h3><p className="hs-muted mt-2 text-sm leading-6">{item.note}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent-strong)]">Open guide <ArrowRight aria-hidden className="size-4" /></span></Link>)}</div></div>
      </section>

      <section className="hs-section-white" id="contact">
        <div className="hs-container hs-section"><div className="rounded-[var(--hs-radius)] bg-[var(--hs-navy)] p-7 text-white shadow-[var(--hs-shadow-lg)] sm:p-9"><h2 className="text-3xl font-extrabold">Make the hold or release scope explicit.</h2><p className="mt-3 max-w-3xl text-base leading-7 text-white/80">Share the model variants, approved assembly references, full reports, changes, date codes and carton map. Huang Sourcing can scope a China-side comparison and document open gaps before your balance-payment or pickup deadline.</p><div className="mt-6 flex flex-col gap-3 sm:flex-row"><ContactAgentButton analyticsLabel="Check electric grills before shipment" analyticsLocation="electric_grill_article_final_cta" className="hs-btn-primary min-h-12 px-6" href={whatsappHref} size="lg" variant="default">Check Before Shipment</ContactAgentButton><Button asChild className="min-h-12 border-white/30 bg-white text-[var(--hs-navy)] hover:bg-white/90" size="lg" variant="outline"><Link href="/qc-inspection-china">View Inspection Service</Link></Button><Button asChild className="min-h-12 border-white/30 bg-transparent text-white hover:bg-white/10" size="lg" variant="outline"><Link href="/free-china-sourcing-risk-check">Free Risk Check</Link></Button></div></div></div>
      </section>

      <section className="hs-section-soft" id="sources">
        <div className="hs-container hs-section"><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Sources</h2><p className="hs-muted mt-3 max-w-3xl text-sm leading-6">Public sources checked October 6, 2026 Beijing time. <a className={sourceLinkClass} href={electricGrillCoverage}>WMUR’s September coverage</a> provides a separate editorial attention signal. Case facts rely on the primary records; no source implies Huang Sourcing involvement.</p><ul className="mt-6 grid gap-4">{article.sources.map(item => <li className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5" key={item.href}><a className="hs-text-link inline-flex items-center gap-2 font-bold" href={item.href}>{item.label}<ExternalLink aria-hidden className="size-4 shrink-0" /></a><p className="hs-muted mt-2 text-sm leading-6">{item.note}</p></li>)}</ul></div>
      </section>
      <SiteFooter />
    </main>
  )
}
