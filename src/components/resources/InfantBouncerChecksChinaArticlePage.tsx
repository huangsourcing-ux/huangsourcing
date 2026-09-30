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
  cpscFlybossWarning,
  cpscBouncerGuidance,
  cpscChildrensProductCertificate,
  cpscInfantSleepGuidance,
  news12FlybossCoverage,
  infantBouncerChecksChinaArticle as article,
  makeInfantBouncerChecksChinaArticleJsonLd,
} from '@/lib/infant-bouncer-checks-china-article'
import { buildWhatsAppHref } from '@/lib/site-links'

const sourceLinkClass = 'hs-text-link font-semibold'

export function InfantBouncerChecksChinaArticlePage() {
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeInfantBouncerChecksChinaArticleJsonLd()} />
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
                analyticsLabel="Check infant bouncer lots"
                analyticsLocation="infant_bouncer_article_hero"
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
              Original generic schematic. It is not the Flyboss product, a mechanical test, or evidence from the public case.
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
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">What must match before an infant bouncer lot moves?</h2>
          <p className="hs-muted mt-4 text-base leading-7">{article.answer}</p>
          <p className="hs-muted mt-4 text-base leading-7">
            <a className={sourceLinkClass} href={cpscBouncerGuidance}>CPSC’s bouncer guidance</a> identifies 16 CFR part 1229 and includes locking mechanisms, stability, structural integrity, collapse, and restraint requirements. Ask the importer and qualified lab to establish the exact scope for every intended mode. A “3-in-1” sales description does not establish test coverage. Keep product classification and qualified testing separate from a buyer-side shipment comparison.
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
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Make the lock and configuration visible.</h2>
            <p className="hs-muted mt-4 text-base leading-7">Build the inspection plan around the actual assembly sequence. For sampled units from named lots, record each claimed height or use setting, how the lock engages, and whether the seat attachment and restraint routing match the approved reference. Photograph the relevant mechanism and unit identifier together. A click, a product video, or a supplier’s “same design” statement does not resolve a different latch revision.</p>
            <p className="hs-muted mt-4 text-base leading-7">Use only the importer-approved, safe check plan and written instructions. Never put a child in an inspection unit, bypass a lock, improvise loading, or treat a factory function check as the prescribed strength, collapse, drop, or durability test. Stop on unintended movement, incomplete engagement, damaged hardware, or unexpected deformation. Escalate the evidence to qualified specialists.</p>
            <p className="hs-muted mt-4 text-base leading-7">Keep the containment boundary practical: model, hardware revision, production dates, line or lot identifiers where available, and carton range. If the factory cannot separate changed units from the approved build, hold the mixed scope. After correction, retain the old and new part references and re-inspect identified stock; do not accept a replacement photograph as proof that all cartons were corrected.</p>
          </div>
          <div className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-6 shadow-[var(--hs-shadow-sm)]">
            <h3 className="text-xl font-extrabold text-[var(--hs-text)]">Request one release pack</h3>
            <ul className="mt-5 grid gap-4 text-sm leading-6 text-[var(--hs-muted)]">
              {[
                'Destination, responsible importer, exact models, intended modes, factory, lots, quantities and carton map.',
                'Approved sample, frame and latch drawings, bill of materials, seat/restraint version, settings and controlled change log.',
                'Complete test reports, tested-sample photos, lab scope, relevant configuration coverage and CPC.',
                'Product labels, warnings, assembly instructions, registration materials, retail pack and listing claims.',
                'Failed-unit IDs, lot containment, qualified disposition, any required retest, corrective action and repeat inspection.',
              ].map((item) => <li className="flex gap-2" key={item}><CheckCircle2 aria-hidden className="mt-1 size-4 shrink-0 text-[var(--hs-accent)]" /><span>{item}</span></li>)}
            </ul>
            <p className="hs-muted mt-5 text-sm leading-6">Check <a className={sourceLinkClass} href={cpscChildrensProductCertificate}>CPSC’s CPC guidance</a> when reconciling the certifier, product and test basis. A certificate is not a substitute for the underlying evidence.</p>
          </div>
        </div>
      </section>

      <EvidenceDecisionMatrix
        id="decision-table"
        title="Turn a mismatch into a named lot decision."
        intro="A successful setup demonstration does not clear a changed lock, untested configuration, mixed batch, or unresolved failure."
        rows={article.decisionRows}
      />

      <section className="hs-section-white" id="public-case">
        <div className="hs-container hs-section max-w-5xl">
          <p className="hs-eyebrow">Public case example</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Flyboss: collapse warning, not a disclosed root cause</h2>
          <div className="hs-muted mt-5 grid gap-4 text-base leading-7">
            <p><strong className="text-[var(--hs-text)]">What happened:</strong> On September 10, 2026, <a className={sourceLinkClass} href={cpscFlybossWarning}>CPSC warned consumers about China-made Flyboss 3-in-1 infant bouncers</a> that can collapse during use. It reported 191 collapses, including 115 infant head impacts; at least 20 consumers sought medical attention. The notice covers about 14,200 units.</p>
            <p><strong className="text-[var(--hs-text)]">What evidence was public:</strong> The warning identifies three height settings, product images, sales period, importer Dougllass LLC, and stop-use/disposal advice. CPSC says the importer was unresponsive to recall or information requests. This is a warning, not an announced cooperative recall. The public notice does not identify a particular latch defect or publish a complete test file.</p>
            <p><strong className="text-[var(--hs-text)]">Buyer lesson:</strong> Check configuration control and documented lock behavior before payment, then contain mismatched units by lot and carton. The choice to inspect locks is buyer-side analysis; it is not a finding about the cause of the Flyboss collapses.</p>
            <p><strong className="text-[var(--hs-text)]">Limits of comparison:</strong> This case does not establish that other bouncers or suppliers share the hazard. Huang Sourcing did not inspect or participate in this case. Qualified testing and importer decisions remain necessary.</p>
          </div>
        </div>
      </section>

      <EvidenceBasisSection
        intro="This guide uses current public CPSC records and guidance, independent reporting, and buyer-side sourcing analysis. Official records control case facts; the proposed release workflow is our analysis."
        items={[
          'The September 2026 Flyboss warning is current evidence of a documented collapse risk. It does not disclose a latch-specific root cause.',
          'The bouncer guidance supplies the regulatory scope; exact configurations and production changes require qualified review.',
          'An inspection records sampled goods and discrepancies. It does not certify every unit or replace the importer’s evidence obligations.',
        ]}
      />

      <section className="hs-section-white" id="limits">
        <div className="hs-container hs-section max-w-5xl">
          <div className="flex items-center gap-3">
            <ShieldAlert aria-hidden className="size-7 text-amber-700" />
            <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Scope limits and stop rules</h2>
          </div>
          <p className="hs-muted mt-4 text-base leading-7">
            Review intended modes and sales claims before approving artwork. <a className={sourceLinkClass} href={cpscInfantSleepGuidance}>CPSC’s infant-sleep FAQ</a> says supervised-sleep claims can bring products into the sleep-product rules; marketing does not become acceptable simply by adding “supervised.” Separately, <a className={sourceLinkClass} href={cpscBouncerGuidance}>bouncer guidance</a> addresses product identification, registration and certification. Have qualified parties confirm the requirements for the exact product and manufacture date.
          </p>
          <p className="hs-muted mt-4 text-base leading-7">
            Hold stock when locks behave abnormally, the production build differs from the approved version, reports cannot be matched, required materials are missing, or cartons mix untraceable revisions. Removing an unverified sleep claim does not prove the underlying design is safe. Obtain documented specialist disposition, any required new testing, controlled correction and a repeat shipment check before limited release.
          </p>
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
            <p className="mt-3 max-w-3xl text-base leading-7 text-white/80">Share exact models and modes, frame and lock revision, approved sample, full reports, CPC, labels, lots, carton map, and pickup date. Huang Sourcing can scope a China-side comparison and document gaps for qualified review.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton analyticsLabel="Check infant bouncers before shipment" analyticsLocation="infant_bouncer_article_final_cta" className="hs-btn-primary min-h-12 px-6" href={whatsappHref} size="lg" variant="default">Check Before Shipment</ContactAgentButton>
              <Button asChild className="min-h-12 border-white/30 bg-white text-[var(--hs-navy)] hover:bg-white/90" size="lg" variant="outline"><Link href="/qc-inspection-china">View Inspection Service</Link></Button>
              <Button asChild className="min-h-12 border-white/30 bg-transparent text-white hover:bg-white/10" size="lg" variant="outline"><Link href="/free-china-sourcing-risk-check">Free Risk Check</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="hs-section-soft" id="sources">
        <div className="hs-container hs-section">
          <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Sources</h2>
          <p className="hs-muted mt-3 max-w-3xl text-sm leading-6">Public sources checked October 1, 2026 Beijing time. CPSC controls case and regulatory facts. <a className={sourceLinkClass} href={news12FlybossCoverage}>News 12’s September 10 coverage</a> is an independent attention signal, not proof of search volume or a separate incident set. None implies Huang Sourcing involvement.</p>
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
