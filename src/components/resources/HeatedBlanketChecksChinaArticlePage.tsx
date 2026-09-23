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
  cbsJkmaxCoverage,
  cpscJkmaxRecall,
  cpscOctrotRecall,
  heatedBlanketChecksChinaArticle as article,
  makeHeatedBlanketChecksChinaArticleJsonLd,
} from '@/lib/heated-blanket-checks-china-article'
import { buildWhatsAppHref } from '@/lib/site-links'

const sourceLinkClass = 'hs-text-link font-semibold'

export function HeatedBlanketChecksChinaArticlePage() {
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)
  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeHeatedBlanketChecksChinaArticleJsonLd()} />
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
              <ContactAgentButton
                analyticsLabel="Check heated blanket lots"
                analyticsLocation="heated_blanket_article_hero"
                className="hs-btn-primary min-h-12 px-6"
                href={whatsappHref}
                size="lg"
                variant="default"
              >Check Before Shipment</ContactAgentButton>
              <Button asChild className="hs-btn-secondary min-h-12 px-6" size="lg" variant="outline">
                <a href="#release-checklist">See Release Checklist</a>
              </Button>
            </div>
          </div>
          <figure className="min-w-0 lg:col-span-6">
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-md)]">
              <div className="relative aspect-video">
                <Image alt={article.image.alt} className="object-cover" fill priority sizes="(min-width: 1024px) 50vw, 100vw" src={article.image.src} />
              </div>
            </div>
            <figcaption className="hs-muted mt-3 text-xs leading-5">Original buyer-side evidence diagram. It is not a product photograph, test result, or image of either recalled product.</figcaption>
          </figure>
        </div>
      </section>

      <section className="hs-section-white" id="quick-answer">
        <div className="hs-container hs-section max-w-5xl">
          <p className="hs-eyebrow">Quick answer</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">What must match before a heated blanket lot moves?</h2>
          <p className="hs-muted mt-4 text-base leading-7">{article.answer}</p>
          <p className="hs-muted mt-4 text-base leading-7">Record the approved model, voltage, controller and timer version, power cord and plug, connector, heating-element layout, textile and size, manufacturing lot, label, instructions, retail package, barcode, packing list, and carton IDs. If one of these differs from the qualified evidence or approved sample, keep the affected goods on hold while the importer and qualified technical party assess the change.</p>
        </div>
      </section>

      <section className="hs-section-soft" id="why-now">
        <div className="hs-container hs-section max-w-5xl">
          <p className="hs-eyebrow">Current public evidence</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Two 2026 recalls point to different failure nodes.</h2>
          <div className="hs-muted mt-5 grid gap-4 text-base leading-7">
            <p>On September 17, 2026, the U.S. Consumer Product Safety Commission announced a recall of about 195,000 JKMAX heated blankets and heating pads imported from China. Its notice says internal wire heating elements can overheat. JKMAX was aware of 577 reports of smoking, melting, or burning, including 53 burn injuries. Model identity appears on the remote and product packaging. These are reported case facts for the recalled models, not an estimate for the category. <a className={sourceLinkClass} href={cpscJkmaxRecall}>Read the CPSC JKMAX recall</a>.</p>
            <p>A separate July 30 CPSC recall covered about 178,000 OCTROT electric throws and blankets sold on Amazon. That notice identifies a detachable electrical cord that can ignite and reports 555 incidents of melting, sparking, or smoking, including 27 fires and 15 burn or electrical shock injuries. The two cases have different products and stated hazards; a buyer should therefore control both the internal heating assembly and the cord or connector configuration. <a className={sourceLinkClass} href={cpscOctrotRecall}>Read the CPSC OCTROT recall</a>.</p>
            <p><a className={sourceLinkClass} href={cbsJkmaxCoverage}>CBS News covered the JKMAX recall</a> on September 18. This independent coverage confirms current public attention; the CPSC notices supply the case facts used here. Neither recall proves that any other supplier or order has the same problem.</p>
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="release-checklist">
        <div className="hs-container hs-section">
          <div className="max-w-3xl">
            <p className="hs-eyebrow">Buyer-side release module</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Four evidence gates before balance payment or pickup</h2>
            <p className="hs-muted mt-4 text-base leading-7">Agree on the requirements, reference files, sampling plan, and stop rules before an inspector reaches the factory. A short function demonstration is one observation, not a substitute for qualified thermal and electrical assessment.</p>
          </div>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {article.checklist.map((item, index) => (
              <li className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-6 shadow-[var(--hs-shadow-sm)]" key={item.title}>
                <div className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-sm font-extrabold text-white">{index + 1}</span>
                  <div><h3 className="text-lg font-extrabold text-[var(--hs-text)]">{item.title}</h3><p className="hs-muted mt-2 text-sm leading-6">{item.detail}</p></div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="hs-section-soft" id="factory-checks">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-2">
          <div>
            <p className="hs-eyebrow">What a buyer-side check can record</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Compare the finished units with the approved build.</h2>
            <p className="hs-muted mt-4 text-base leading-7">Photograph the model and lot labels on the blanket, detachable controller, retail pack, and master carton. Compare cord and plug specification, connector shape and retention, controller housing and controls, seams, accessible wiring, strain relief, fabric, dimensions, stitching, care labels, instructions, packaging, and accessories with the signed reference. Record what was inaccessible without disassembly.</p>
            <p className="hs-muted mt-4 text-base leading-7">A buyer-approved powered check may record basic control response, indicated settings, timer behavior, visible faults, odor, abnormal heat, and connector condition under a safe written method. Stop for smoke, sparking, excessive heat, damaged insulation, exposed wiring, loose connections, or inconsistent controls. Preserve the unit ID and lot evidence for qualified review; do not improvise endurance or fault testing on the factory floor.</p>
          </div>
          <div className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-6 shadow-[var(--hs-shadow-sm)]">
            <div className="flex items-center gap-3"><FileCheck2 aria-hidden className="size-6 text-[var(--hs-accent)]" /><h3 className="text-xl font-extrabold text-[var(--hs-text)]">Request one controlled release pack</h3></div>
            <ul className="mt-5 grid gap-4 text-sm leading-6 text-[var(--hs-muted)]">
              {[
                'Purchase order, destination, responsible importer, exact models, voltage variants, sizes, quantities, factory and production dates.',
                'Approved sample photos, drawings, bill of materials, controller and timer revision, cord and connector details, element layout, textile specification, and change log.',
                'Complete qualified test and certification or listing evidence, including issuer, sample identity, model coverage, methods, results, dates, deviations, and limitations.',
                'Approved labels, warnings, instructions, retail package, barcodes, carton marks, packing list, lot map, and any complaint or rework record.',
                'Sampling plan, safe powered-check method, stop rules, hold authority, corrective action owner, and re-inspection or testing route.',
              ].map((item) => <li className="flex gap-2" key={item}><CheckCircle2 aria-hidden className="mt-1 size-4 shrink-0 text-[var(--hs-accent)]" /><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <EvidenceDecisionMatrix
        id="decision-table"
        title="Turn evidence gaps into a named shipment decision."
        intro="Keep the disposition attached to exact versions, lots, quantities, and cartons. A passing sample cannot clear an unexplained part substitution or a lot with no traceable evidence."
        rows={article.decisionRows}
      />

      <section className="hs-section-white" id="public-case">
        <div className="hs-container hs-section max-w-5xl">
          <p className="hs-eyebrow">Public case example</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">JKMAX: why the heating assembly and lot identity matter</h2>
          <div className="hs-muted mt-5 grid gap-4 text-base leading-7">
            <p><strong className="text-[var(--hs-text)]">What happened:</strong> The September 17, 2026 <a className={sourceLinkClass} href={cpscJkmaxRecall}>CPSC JKMAX recall notice</a> says internal wire heating elements in the recalled heated blankets and pads can overheat, posing fire and burn hazards. It lists the affected models and the location of model labels on the remote and packaging. The notice reports incidents and injuries as described above; it does not present a factory root-cause investigation for every unit.</p>
            <p><strong className="text-[var(--hs-text)]">What evidence was public:</strong> The agency published the affected product description, model identifiers, hazard, importer, manufacturing country, unit estimate, incident reports, and consumer remedy. <a className={sourceLinkClass} href={cbsJkmaxCoverage}>CBS reporting</a> separately brought the recall to public attention. The public record does not reveal the complete technical file, production history, or batch-level findings.</p>
            <p><strong className="text-[var(--hs-text)]">Buyer lesson:</strong> For an order awaiting release, require a controlled link from approved element and controller versions through qualified evidence to the actual production lot and cartons. If a part changed, record which stock received it and obtain qualified disposition before release.</p>
            <p><strong className="text-[var(--hs-text)]">Limits of comparison:</strong> This recall does not establish that all heated blankets or Chinese factories share the hazard. Huang Sourcing did not participate in the case. Buyer-side sampling cannot certify electrical safety, prove thermal endurance, or determine whether a product meets every destination rule.</p>
          </div>
        </div>
      </section>

      <EvidenceBasisSection intro="This guide uses the two cited CPSC primary records, independent news coverage, and buyer-side sourcing analysis. Product-specific compliance and engineering decisions belong to the responsible importer and qualified specialists." items={article.evidenceBasis} />

      <section className="hs-section-white" id="limits">
        <div className="hs-container hs-section max-w-5xl">
          <div className="flex items-center gap-3"><ShieldAlert aria-hidden className="size-7 text-amber-700" /><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Scope limits and stop rules</h2></div>
          <p className="hs-muted mt-4 text-base leading-7">Visual sampling, record comparison, and limited functional observations do not prove every unit is safe. They cannot replace qualified electrical, temperature, abnormal-operation, durability, material, or certification work. The importer must determine the current requirements for the destination and exact product. A lab report cover, logo, marketplace listing, or supplier claim does not by itself prove that the shipped version was tested.</p>
          <p className="hs-muted mt-4 text-base leading-7">Hold and escalate when model or component identity is missing, reports do not cover the build, the factory changed the controller, cord, connector, element, textile or process without disposition, sampled units fail, or the carton map cannot separate cleared from unresolved lots. Release only after the responsible party has documented correction, any needed qualified retest, and the exact authorized quantity.</p>
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
            <p className="mt-3 max-w-3xl text-base leading-7 text-white/80">Share your models, approved construction, reports, production changes, lots, sample plan, cartons, and payment or pickup date. Huang Sourcing can scope a China-side comparison and document what still needs specialist review.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton analyticsLabel="Check heated blankets before shipment" analyticsLocation="heated_blanket_article_final_cta" className="hs-btn-primary min-h-12 px-6" href={whatsappHref} size="lg" variant="default">Check Before Shipment</ContactAgentButton>
              <Button asChild className="min-h-12 border-white/30 bg-white text-[var(--hs-navy)] hover:bg-white/90" size="lg" variant="outline"><Link href="/qc-inspection-china">View Inspection Service</Link></Button>
              <Button asChild className="min-h-12 border-white/30 bg-transparent text-white hover:bg-white/10" size="lg" variant="outline"><Link href="/free-china-sourcing-risk-check">Free Risk Check</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="hs-section-soft" id="sources">
        <div className="hs-container hs-section">
          <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Sources</h2>
          <p className="hs-muted mt-3 max-w-3xl text-sm leading-6">Public sources checked September 24, 2026 Beijing time. The CPSC records establish the case facts; the news report is an independent attention signal. Links do not imply Huang Sourcing involvement in either case.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {article.sources.map((source) => <a className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)] hover:border-[var(--hs-accent)]" href={source.href} key={source.href} rel="noreferrer" target="_blank"><span className="inline-flex items-start gap-2 font-extrabold text-[var(--hs-text)]">{source.label}<ExternalLink aria-hidden className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]" /></span><span className="hs-muted mt-2 block text-sm leading-6">{source.note}</span></a>)}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
