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
import { cpscReclinerBatteryRecall, manufacturerReclinerBatteryRecall, reclinerBatteryCoverage, reclinerBatteryPackChecksChinaArticle as article, makeReclinerBatteryPackChecksChinaArticleJsonLd } from '@/lib/recliner-battery-pack-checks-china-article'
import { buildWhatsAppHref } from '@/lib/site-links'

const sourceLinkClass = 'hs-text-link font-semibold'

export function ReclinerBatteryPackChecksChinaArticlePage() {
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)
  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeReclinerBatteryPackChecksChinaArticleJsonLd()} />
      <SiteBreadcrumbs currentPath={article.href} items={[{ label: 'China sourcing risk guides', href: '/china-sourcing-risk-guides' }, { label: article.title }]} />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:items-center lg:py-16">
          <div className="min-w-0 lg:col-span-6">
            <p className="hs-eyebrow">{article.eyebrow}</p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold text-[var(--hs-text)] sm:text-5xl">{article.h1}</h1>
            <p className="hs-muted mt-5 text-base leading-7 sm:text-lg sm:leading-8">{article.intro}</p>
            <ArticleByline author={article.author} publishedDate={article.publishedDate} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton analyticsLabel="Check recliner battery pack lots" analyticsLocation="recliner_battery_pack_article_hero" className="hs-btn-primary min-h-12 px-6" href={whatsappHref} size="lg" variant="default">Check Before Shipment</ContactAgentButton>
              <Button asChild className="hs-btn-secondary min-h-12 px-6" size="lg" variant="outline"><a href="#release-checklist">See Release Checklist</a></Button>
            </div>
          </div>
          <figure className="min-w-0 lg:col-span-6">
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-md)]">
              <div className="relative aspect-video"><Image alt={article.image.alt} className="object-cover" fill priority sizes="(min-width: 1024px) 50vw, 100vw" src={article.image.src} /></div>
            </div>
            <figcaption className="hs-muted mt-3 text-xs leading-5">Original configuration-evidence diagram. It is not a recalled product, a laboratory result or documentary case evidence.</figcaption>
          </figure>
        </div>
      </section>

      <nav aria-label="Article contents" className="hs-section-white border-b border-[var(--hs-border)]">
        <div className="hs-container flex flex-wrap gap-x-6 gap-y-2 py-5 text-sm font-semibold">
          {[['#quick-answer', 'Quick answer'], ['#release-checklist', 'Release checklist'], ['#application-matrix', 'Application matrix'], ['#public-case', 'Public case'], ['#decision-table', 'Decision table'], ['#sources', 'Sources']].map(([href, label]) => <a className="hs-text-link" href={href} key={href}>{label}</a>)}
        </div>
      </nav>

      <section className="hs-section-white" id="quick-answer">
        <div className="hs-container hs-section max-w-5xl">
          <p className="hs-eyebrow">Quick answer</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">What must match before a recliner battery shipment moves?</h2>
          <p className="hs-muted mt-4 text-base leading-7">{article.answer}</p>
          <p className="hs-muted mt-4 text-base leading-7">The <a className={sourceLinkClass} href={cpscReclinerBatteryRecall}>September 2026 Blue Cactus recall</a> makes exact pack identity a current buying issue. Its notice describes overheating, without establishing a particular charger, connector or furniture load as the root cause. The configuration checks below are buyer-side analysis, not a diagnosis of that case.</p>
        </div>
      </section>

      <section className="hs-section-white" id="release-checklist">
        <div className="hs-container hs-section">
          <p className="hs-eyebrow">Buyer-side release module</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold text-[var(--hs-text)]">Four checks before balance payment or pickup</h2>
          <p className="hs-muted mt-4 max-w-3xl text-base leading-7">Agree who accepts technical coverage, what can be observed safely at the factory and how the decision will identify the actual cartons.</p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {article.checklist.map((item, index) => <li className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-6 shadow-[var(--hs-shadow-sm)]" key={item.title}><div className="flex items-start gap-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-sm font-extrabold text-white">{index + 1}</span><div><h3 className="text-lg font-extrabold text-[var(--hs-text)]">{item.title}</h3><p className="hs-muted mt-2 text-sm leading-6">{item.detail}</p></div></div></li>)}
          </ol>
        </div>
      </section>

      <section className="hs-section-soft" id="application-matrix">
        <div className="hs-container hs-section">
          <p className="hs-eyebrow">Application evidence</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-extrabold text-[var(--hs-text)]">Does “compatible with recliners” identify your actual kit?</h2>
          <p className="hs-muted mt-4 max-w-4xl text-base leading-7">Turn a broad compatibility statement into a matrix of accepted furniture, battery, charger and cable combinations. A connector’s appearance does not establish its electrical assignment, load coverage or the suitability of adapters. Have qualified parties evaluate those details and define the acceptance criteria for the exact application.</p>
          <div className="mt-7 overflow-x-auto rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white">
            <table className="w-full text-left text-sm leading-6">
              <caption className="px-5 py-4 text-left font-bold text-[var(--hs-text)]">Buyer application matrix — evidence to request, not a technical approval</caption>
              <thead className="bg-[var(--hs-navy)] text-white"><tr>{['Intended application', 'Evidence to connect', 'Unresolved gap'].map(label => <th className="min-w-44 p-4 align-top" scope="col" key={label}>{label}</th>)}</tr></thead>
              <tbody>{article.applicationRows.map(row => <tr className="border-t border-[var(--hs-border)]" key={row.application}><th className="p-4 align-top font-bold text-[var(--hs-text)]" scope="row">{row.application}</th><td className="hs-muted p-4 align-top">{row.evidence}</td><td className="hs-muted p-4 align-top">{row.gap}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="hs-muted mt-5 max-w-4xl text-base leading-7">Capacity markings cannot settle these questions by themselves. Nor should the buyer invent a universal acceptable number of recline cycles, load limit or charging routine. Ask the responsible technical party to define the relevant operating conditions, including additional features and charging arrangements, and record the accepted boundaries.</p>
        </div>
      </section>

      <section className="hs-section-white" id="evidence-file">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Which records should reach the inspector?</h2>
            <p className="hs-muted mt-4 text-base leading-7">Send the approved application matrix, current bill of materials, model and revision list, complete reports, sample photographs and qualified change assessments. Where internal cell or protection identities cannot be checked without specialist access, state that limitation and obtain the accepted supporting production records. A supplier’s unchanged enclosure does not show that its internal assembly is unchanged.</p>
            <p className="hs-muted mt-4 text-base leading-7">Use the <Link className={sourceLinkClass} href="/verify-china-lab-test-report">China laboratory-report verification guide</Link> to request coverage for the actual kit. Keep report identity, tested configuration and current production separate until they have been reconciled. Do not extrapolate evidence for one pack capacity, charger or furniture application to another without an accepted coverage explanation.</p>
            <p className="hs-muted mt-4 text-base leading-7">Define safe functions and specialist responsibilities before the visit. Do not improvise overload, short-circuit, puncture, thermal or protection-bypass tests, open live packs, or operate damaged batteries. Record abnormal heat, swelling, damage or operation as a stop condition for qualified assessment rather than trying to prove the concern away.</p>
          </div>
          <div className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-6">
            <h3 className="text-xl font-extrabold text-[var(--hs-text)]">One evidence file, with named owners</h3>
            <ul className="hs-muted mt-5 list-disc space-y-3 pl-5 text-sm leading-6">
              <li>Market, importer, seller SKU, furniture models, features and intended operating modes.</li>
              <li>Battery assembly/revision, approved charger and cable IDs, connector specification and accessories.</li>
              <li>Accepted application matrix, full reports, tested-sample photos and change records.</li>
              <li>Model/lot label reference, production dates, quantity and carton-to-SKU map.</li>
              <li>Open findings, affected-stock boundary, authorized correction and verification scope.</li>
              <li>Named technical acceptance owner and buyer release authority, with payment and pickup deadlines.</li>
            </ul>
            <p className="hs-muted mt-5 text-sm leading-6">A factory inspection request should identify observable comparisons and acceptance references. It should not silently transfer engineering approval to the inspector.</p>
          </div>
        </div>
      </section>

      <EvidenceDecisionMatrix id="decision-table" title="Turn an evidence gap into a shipment decision." intro="Name the affected application, kit version and lot before deciding to hold, correct or release." rows={article.decisionRows} />

      <section className="hs-section-white" id="public-case">
        <div className="hs-container hs-section max-w-5xl">
          <p className="hs-eyebrow">Public case example</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Blue Cactus: a furniture battery has its own recall identity</h2>
          <div className="hs-muted mt-5 grid gap-4 text-base leading-7">
            <p><strong className="text-[var(--hs-text)]">What happened:</strong> On September 24, 2026, <a className={sourceLinkClass} href={cpscReclinerBatteryRecall}>CPSC recall 26-791</a> identified approximately 51,000 Blue Cactus 2500 mAh reclining-chair battery packs, model RWX-RBP02. The notice describes an overheating fire/burn hazard and four reports of overheating, smoking or ignition. Its remedy is replacement.</p>
            <p><strong className="text-[var(--hs-text)]">Public evidence:</strong> The regulator identifies the model on the rear of the pack, use with multiple reclining-chair brands and Amazon sales from May 2023 through July 2026. The <a className={sourceLinkClass} href={manufacturerReclinerBatteryRecall}>manufacturer’s official recall notice</a> supplies affected-model identification and a replacement contact process. Follow the current official instructions for affected stock.</p>
            <p><strong className="text-[var(--hs-text)]">Buyer lesson:</strong> Preserve the battery’s own identity and lot records even when it is sold for several chair brands or bundled with furniture. A chair SKU alone cannot establish which battery cartons require containment. Obtain authorized disposition for affected commercial inventory before any release.</p>
            <p><strong className="text-[var(--hs-text)]">Limits:</strong> The CPSC record does not establish China manufacture or disclose a root cause that proves charger or furniture incompatibility. It does not show that other suppliers or models share the defect. Huang Sourcing had no stated involvement in this case.</p>
          </div>
        </div>
      </section>

      <section className="hs-section-soft" id="pack-out">
        <div className="hs-container hs-section max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">How do battery-only replacements differ from complete kits?</h2>
          <p className="hs-muted mt-4 text-base leading-7">Inspect against a SKU-specific packing bill. A battery-only replacement may depend on retained accessories; a complete kit should contain the exact accepted charger, cables and other listed parts. The <a className={sourceLinkClass} href={manufacturerReclinerBatteryRecall}>Blue Cactus product page</a> separately describes replacement batteries and kits, illustrating why one generic “battery pack” description can obscure the supplied contents. Its marketing claims are not independent evidence of safety.</p>
          <p className="hs-muted mt-4 text-base leading-7">Match unit ratings, charger labels, accessory IDs, instructions, listing claims and carton marks to the approved kit version. Record missing, substituted or mixed parts by SKU and lot. Do not resolve a missing charger by inserting an unassessed adapter, or use a higher-capacity pack as an assumed equivalent. After authorized corrections, repeat the relevant comparison and retain the affected quantity and carton boundary.</p>
          <p className="hs-muted mt-4 text-base leading-7">A release file should state the accepted application, kit revision, inspected sample and identified lot/carton scope, alongside remaining exclusions. Keep the <Link className={sourceLinkClass} href="/qc-before-balance">balance-payment decision</Link> tied to closed findings. If freight is by air, arrange a separate <Link className={sourceLinkClass} href="/lithium-battery-air-shipping-china-2026">battery shipment-readiness review</Link> with the forwarder; product acceptance and carrier acceptance answer different questions.</p>
        </div>
      </section>

      <EvidenceBasisSection intro="Case facts come from the cited regulator and manufacturer notices. Application, inspection and release recommendations are buyer-side sourcing analysis." items={['The recall establishes its own product identity and remedy. It does not establish a root cause or the status of unrelated products.', 'Qualified parties must accept the exact technical configuration and evidence. Inspection compares sampled goods with accepted references.', 'Every finding and correction should identify its application, kit revision and lot scope; sampling cannot establish every unit’s safety.']} />

      <section className="hs-section-white" id="limits">
        <div className="hs-container hs-section max-w-5xl">
          <div className="flex items-center gap-3"><ShieldAlert aria-hidden className="size-7 shrink-0 text-amber-700" /><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">What can a China-side shipment check establish?</h2></div>
          <p className="hs-muted mt-4 text-base leading-7">It can document sampled identity, accessible construction, condition, pack contents and alignment with accepted references while stock remains available for correction. It cannot certify battery safety, verify every hidden component, approve furniture load compatibility or prove every unit in the order. Have the importer and qualified specialists determine applicable requirements and evaluate the exact design, destination and intended use.</p>
          <p className="hs-muted mt-4 text-base leading-7">For a recalled pack, follow the <a className={sourceLinkClass} href={cpscReclinerBatteryRecall}>official stop-use and remedy notice</a>. An ordinary inspection, relabeling or successful chair-motion video does not authorize affected goods. Seek appropriate handling and disposition instructions for recalled batteries instead of putting them in ordinary waste or recycling.</p>
        </div>
      </section>

      <section className="hs-section-soft" id="related-guides">
        <div className="hs-container hs-section"><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Continue the evidence chain.</h2><div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{article.relatedLinks.map(item => <Link className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)] hover:border-[var(--hs-accent)]" href={item.href} key={item.href}><h3 className="font-extrabold text-[var(--hs-text)]">{item.label}</h3><p className="hs-muted mt-2 text-sm leading-6">{item.note}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent-strong)]">Open guide <ArrowRight aria-hidden className="size-4" /></span></Link>)}</div></div>
      </section>

      <section className="hs-section-white" id="contact">
        <div className="hs-container hs-section"><div className="rounded-[var(--hs-radius)] bg-[var(--hs-navy)] p-7 text-white shadow-[var(--hs-shadow-lg)] sm:p-9"><h2 className="text-3xl font-extrabold">Make the application and lot scope explicit.</h2><p className="mt-3 max-w-3xl text-base leading-7 text-white/80">Send the furniture application matrix, battery and charger references, accepted evidence, kit versions and carton map. Huang Sourcing can scope a China-side comparison and document open gaps before balance payment or pickup.</p><div className="mt-6 flex flex-col gap-3 sm:flex-row"><ContactAgentButton analyticsLabel="Check recliner battery packs before shipment" analyticsLocation="recliner_battery_pack_article_final_cta" className="hs-btn-primary min-h-12 px-6" href={whatsappHref} size="lg" variant="default">Check Before Shipment</ContactAgentButton><Button asChild className="min-h-12 border-white/30 bg-white text-[var(--hs-navy)] hover:bg-white/90" size="lg" variant="outline"><Link href="/qc-inspection-china">View Inspection Service</Link></Button><Button asChild className="min-h-12 border-white/30 bg-transparent text-white hover:bg-white/10" size="lg" variant="outline"><Link href="/free-china-sourcing-risk-check">Free Risk Check</Link></Button></div></div></div>
      </section>

      <section className="hs-section-soft" id="sources">
        <div className="hs-container hs-section"><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Sources</h2><p className="hs-muted mt-3 max-w-3xl text-sm leading-6">Public sources checked October 7, 2026 Beijing time. <a className={sourceLinkClass} href={reclinerBatteryCoverage}>Houston Chronicle’s September 29 reporting</a> provides a separate editorial attention signal. Primary records govern case facts; no cited source implies Huang Sourcing participation.</p><ul className="mt-6 grid gap-4">{article.sources.map(item => <li className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5" key={item.href}><a className="hs-text-link inline-flex items-center gap-2 font-bold" href={item.href}>{item.label}<ExternalLink aria-hidden className="size-4 shrink-0" /></a><p className="hs-muted mt-2 text-sm leading-6">{item.note}</p></li>)}</ul></div>
      </section>
      <SiteFooter />
    </main>
  )
}
