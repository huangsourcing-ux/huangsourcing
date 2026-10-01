import { ArrowRight, CheckCircle2, ExternalLink, ShieldAlert } from 'lucide-react'
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
  cpscInmoRecall,
  canadaInmoRecall,
  androidAuthorityCoverage,
  smartGlassesChecksChinaArticle as article,
  makeSmartGlassesChecksChinaArticleJsonLd,
} from '@/lib/smart-glasses-checks-china-article'
import { buildWhatsAppHref } from '@/lib/site-links'

const sourceLinkClass = 'hs-text-link font-semibold'

export function SmartGlassesChecksChinaArticlePage() {
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeSmartGlassesChecksChinaArticleJsonLd()} />
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
            <h1 className="mt-4 text-balance text-4xl font-extrabold text-[var(--hs-text)] sm:text-5xl">
              {article.h1}
            </h1>
            <p className="hs-muted mt-5 text-base leading-7 sm:text-lg sm:leading-8">{article.intro}</p>
            <ArticleByline author={article.author} publishedDate={article.publishedDate} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel="Check smart glasses lots"
                analyticsLocation="smart_glasses_article_hero"
                className="hs-btn-primary min-h-12 px-6"
                href={whatsappHref}
                size="lg"
                variant="default"
              >
                Check Before Shipment
              </ContactAgentButton>
              <Button asChild className="hs-btn-secondary min-h-12 px-6" size="lg" variant="outline">
                <a href="#release-checklist">See Release Checklist</a>
              </Button>
            </div>
          </div>
          <figure className="min-w-0 lg:col-span-6">
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-md)]">
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
            <figcaption className="hs-muted mt-3 text-xs leading-5">
              Original configuration diagram. It is not an INMO product, a thermal test, or evidence from the public case.
            </figcaption>
          </figure>
        </div>
      </section>

      <nav aria-label="Article contents" className="hs-section-white border-b border-[var(--hs-border)]">
        <div className="hs-container flex flex-wrap gap-x-6 gap-y-2 py-5 text-sm font-semibold">
          {[
            ['#quick-answer', 'Quick answer'],
            ['#release-checklist', 'Release checklist'],
            ['#public-case', 'Public case'],
            ['#decision-table', 'Decision table'],
            ['#sources', 'Sources'],
          ].map(([href, label]) => <a className="hs-text-link" href={href} key={href}>{label}</a>)}
        </div>
      </nav>

      <section className="hs-section-white" id="quick-answer">
        <div className="hs-container hs-section max-w-5xl">
          <p className="hs-eyebrow">Quick answer</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">What must match before an smart glasses lot moves?</h2>
          <p className="hs-muted mt-4 text-base leading-7">{article.answer}</p>
          <p className="hs-muted mt-4 text-base leading-7">
            The <a className={sourceLinkClass} href={cpscInmoRecall}>September 2026 INMO AIR3 recall</a> makes this a current shipment question: the published repair involves a firmware update. Our buyer-side conclusion is to control firmware identity alongside hardware and evidence. It is not a claim that software alone caused the hazard or that any particular build clears another model.
          </p>
        </div>
      </section>

      <section className="hs-section-white" id="release-checklist">
        <div className="hs-container hs-section">
          <p className="hs-eyebrow">Buyer-side release module</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold text-[var(--hs-text)]">Four checks before balance payment or pickup</h2>
          <p className="hs-muted mt-4 max-w-3xl text-base leading-7">
            Agree the sample plan and stop rules while the goods remain accessible. Keep qualified testing and certification separate from a shipment inspection.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {article.checklist.map((item, index) => (
              <li className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-6 shadow-[var(--hs-shadow-sm)]" key={item.title}>
                <div className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-sm font-extrabold text-white">{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-extrabold text-[var(--hs-text)]">{item.title}</h3>
                    <p className="hs-muted mt-2 text-sm leading-6">{item.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="hs-section-soft" id="factory-checks">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-2">
          <div>
            <p className="hs-eyebrow">At the factory</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Can a firmware screenshot clear the shipment?</h2>
            <p className="hs-muted mt-4 text-base leading-7">A screenshot can record what one unit displays. It does not establish that every carton contains that build or that the build has qualified evidence for the hardware. Photograph the serial identity and software information together; record the full identifier exposed by the device, not just a marketing version name. Ask the supplier how the build is loaded, checked and controlled after rework. If offline updates, companion apps or region variants change the configuration, add them to the approved reference.</p>
            <p className="hs-muted mt-4 text-base leading-7">For a proposed update, request the supplier’s release notes, affected hardware revisions, intended-use limitations and qualified change assessment. Have the importer and qualified specialists decide whether the revised combination needs additional testing. A firmware number from an unrelated recall is not a universal acceptance target. If the supplier cannot identify which build the laboratory evaluated, hold the scope rather than assuming that a newer number is safer.</p>
            <p className="hs-muted mt-4 text-base leading-7">Sample across named lots and carton ranges using an agreed plan. Compare enclosure and hinge condition, charger and cable identity, startup, pairing, accessible version records and pack contents against the reference. Keep measurements and observations within the approved procedure. Do not wear inspection units to assess skin comfort, run improvised extended-load trials, bypass protection settings, or open battery enclosures. Stop abnormal operation and preserve identifiers for specialist assessment.</p>
          </div>
          <div className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-6 shadow-[var(--hs-shadow-sm)]">
            <h3 className="text-xl font-extrabold text-[var(--hs-text)]">Request one configuration release pack</h3>
            <ul className="mt-5 grid gap-4 text-sm leading-6 text-[var(--hs-muted)]">
              {[
                'Destination, importer, exact models, intended modes, factory, lots, quantities and serial-to-carton map.',
                'Approved unit, hardware/BOM revision, battery, charger/cable versions and controlled change history.',
                'Firmware build identity, loading/rework records, release notes, relevant app/region versions and update method.',
                'Complete reports, tested-sample identity and configuration, operating conditions, results, limitations and qualified change assessment.',
                'Labels, instructions, accessory list, failed-unit IDs, containment, correction records and repeat inspection evidence.',
              ].map((item) => <li className="flex gap-2" key={item}><CheckCircle2 aria-hidden className="mt-1 size-4 shrink-0 text-[var(--hs-accent)]" /><span>{item}</span></li>)}
            </ul>
            <p className="hs-muted mt-5 text-sm leading-6">For affected INMO stock, follow the <a className={sourceLinkClass} href={cpscInmoRecall}>official recall and manufacturer-assisted repair process</a>. A routine shipment inspection does not authorize redistribution of recalled goods.</p>
          </div>
        </div>
      </section>

      <EvidenceDecisionMatrix
        id="decision-table"
        title="Turn a mismatch into a named lot decision."
        intro="A short successful demo does not clear a changed build, unmatched thermal evidence, mixed accessories, or unresolved failure."
        rows={article.decisionRows}
      />

      <section className="hs-section-white" id="public-case">
        <div className="hs-container hs-section max-w-5xl">
          <p className="hs-eyebrow">Public case example</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">INMO AIR3: a firmware repair with a defined product scope</h2>
          <div className="hs-muted mt-5 grid gap-4 text-base leading-7">
            <p><strong className="text-[var(--hs-text)]">What happened:</strong> On September 24, 2026, <a className={sourceLinkClass} href={cpscInmoRecall}>CPSC announced recall 26-797 for China-made INMO AIR3 smart glasses</a>. It says the left temple can overheat during extended use. About 1,643 units were sold in the U.S., with about 120 additional units in Canada. The firm reported 10 overheating incidents, including burning sensations on the face and left ear.</p>
            <p><strong className="text-[var(--hs-text)]">What evidence was public:</strong> CPSC identifies the AIR3 model and right-temple markings, directs consumers to stop use and contact INMO for a free repair, and says the firm will assist with an online V3.16 update. <a className={sourceLinkClass} href={canadaInmoRecall}>Health Canada’s joint notice</a> also names firmware 3.16 for the affected product. Neither notice publishes a complete laboratory file or establishes that every similarly designed wearable has the same hazard.</p>
            <p><strong className="text-[var(--hs-text)]">Buyer lesson:</strong> Treat installed software as part of the production configuration. Ask which hardware and build were evaluated, how correction is verified on named units, and how those units map to packed cartons. This release workflow is our sourcing analysis, not a regulator’s prescribed inspection method.</p>
            <p><strong className="text-[var(--hs-text)]">Limits of comparison:</strong> The remedy is specific to the recalled AIR3. It does not prove a firmware-only root cause or that version 3.16 is suitable for another device. Huang Sourcing did not inspect, develop, repair or participate in this case.</p>
          </div>
        </div>
      </section>

      <EvidenceBasisSection
        intro="This guide uses current CPSC and Health Canada public recall records, independent editorial coverage, and buyer-side sourcing analysis. Official records control the case facts; the proposed shipment workflow is our analysis."
        items={[
          'The September 24 recall supplies the model, reported hazard and published repair; it does not disclose a complete technical root-cause or testing file.',
          'Android Authority’s September 24 report is a separate coverage signal, not a separate set of incidents or evidence of search volume.',
          'Configuration comparison can document sampled production and gaps. It cannot certify thermal safety, every unit, or destination-market compliance.',
        ]}
      />

      <section className="hs-section-white" id="limits">
        <div className="hs-container hs-section max-w-5xl">
          <div className="flex items-center gap-3">
            <ShieldAlert aria-hidden className="size-7 text-amber-700" />
            <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Keep product, update and transport decisions separate.</h2>
          </div>
          <p className="hs-muted mt-4 text-base leading-7">Qualified specialists should establish the applicable electrical, thermal, radio, optical and other requirements for the exact destination, intended use and design. This article supplies no temperature threshold, lab standard selection, certification or customs conclusion. A battery transport report does not establish the safety of a face-worn finished device; a product report does not replace the carrier’s current transport requirements.</p>
          <p className="hs-muted mt-4 text-base leading-7">Hold unmatched or mixed configurations until the responsible parties accept a documented disposition. For a build correction, retain before-and-after identity and records that show the affected quantity was addressed. Re-inspect identified stock and keep unresolved cartons held. Do not convert one updated reference unit into a blanket order pass, or allow an automatic update after inspection to silently change the approved release configuration.</p>
          <p className="hs-muted mt-4 text-base leading-7">If stock matches a recall, keep it segregated and ask the responsible importer and qualified parties to confirm the official disposition. <a className={sourceLinkClass} href={canadaInmoRecall}>Health Canada’s notice</a> expressly warns against selling, redistributing or giving away recalled products in Canada. Our general workflow cannot override a recall or authorize resale.</p>
        </div>
      </section>

      <section className="hs-section-soft" id="related-guides">
        <div className="hs-container hs-section">
          <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Continue the evidence chain.</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {article.relatedLinks.map((item) => (
              <Link className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)] hover:border-[var(--hs-accent)]" href={item.href} key={item.href}>
                <h3 className="font-extrabold text-[var(--hs-text)]">{item.label}</h3>
                <p className="hs-muted mt-2 text-sm leading-6">{item.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent-strong)]">Open guide <ArrowRight aria-hidden className="size-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="contact">
        <div className="hs-container hs-section">
          <div className="rounded-[var(--hs-radius)] bg-[var(--hs-navy)] p-7 text-white shadow-[var(--hs-shadow-lg)] sm:p-9">
            <h2 className="text-3xl font-extrabold">Make the hold or release scope explicit.</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-white/80">Share exact models, hardware and firmware revisions, battery and accessory versions, full reports, approved unit, serial ranges, lot/carton map and pickup date. Huang Sourcing can scope a China-side comparison and document gaps for qualified review.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton analyticsLabel="Check smart glassess before shipment" analyticsLocation="smart_glasses_article_final_cta" className="hs-btn-primary min-h-12 px-6" href={whatsappHref} size="lg" variant="default">Check Before Shipment</ContactAgentButton>
              <Button asChild className="min-h-12 border-white/30 bg-white text-[var(--hs-navy)] hover:bg-white/90" size="lg" variant="outline"><Link href="/qc-inspection-china">View Inspection Service</Link></Button>
              <Button asChild className="min-h-12 border-white/30 bg-transparent text-white hover:bg-white/10" size="lg" variant="outline"><Link href="/free-china-sourcing-risk-check">Free Risk Check</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="hs-section-soft" id="sources">
        <div className="hs-container hs-section">
          <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Sources</h2>
          <p className="hs-muted mt-3 max-w-3xl text-sm leading-6">Public sources checked October 2, 2026 Beijing time. CPSC and Health Canada control recall facts. <a className={sourceLinkClass} href={androidAuthorityCoverage}>Android Authority’s September 24 coverage</a> is an independent attention signal, not proof of rising search volume or another incident set. None implies Huang Sourcing involvement.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {article.sources.map((source) => (
              <a className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)] hover:border-[var(--hs-accent)]" href={source.href} key={source.href} rel="noreferrer" target="_blank">
                <span className="inline-flex items-start gap-2 font-extrabold text-[var(--hs-text)]">{source.label}<ExternalLink aria-hidden className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]" /></span>
                <span className="hs-muted mt-2 block text-sm leading-6">{source.note}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
