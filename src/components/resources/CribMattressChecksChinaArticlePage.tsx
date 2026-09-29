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
  babylistProductRecalls,
  cpscChildrensProductCertificate,
  cpscCriblikeWarning,
  cpscCribMattressGuidance,
  cpscThirdPartyTesting,
  cpscVoomfRecall,
  cribMattressChecksChinaArticle as article,
  makeCribMattressChecksChinaArticleJsonLd,
} from '@/lib/crib-mattress-checks-china-article'
import { buildWhatsAppHref } from '@/lib/site-links'

const sourceLinkClass = 'hs-text-link font-semibold'

export function CribMattressChecksChinaArticlePage() {
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeCribMattressChecksChinaArticleJsonLd()} />
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
                analyticsLabel="Check crib mattress lots"
                analyticsLocation="crib_mattress_article_hero"
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
              Original generic schematic. It is not a recalled product, a fit test, or evidence from either public case.
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
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">What must match before a crib mattress lot moves?</h2>
          <p className="hs-muted mt-4 text-base leading-7">{article.answer}</p>
          <p className="hs-muted mt-4 text-base leading-7">
            The first decision is the product category. <a className={sourceLinkClass} href={cpscCribMattressGuidance}>CPSC crib-mattress guidance</a> distinguishes full-size crib mattresses, original-equipment non-full-size mattresses, and aftermarket mattresses for non-full-size cribs or play yards. For an aftermarket product, a size description alone does not establish compatibility: the intended host models must be specifically identified and tested. Compare the listing, label, retail pack, instructions, tested host-model list, and actual production version before releasing goods.
          </p>
        </div>
      </section>

      <section className="hs-section-soft" id="current-evidence">
        <div className="hs-container hs-section max-w-5xl">
          <p className="hs-eyebrow">Current public evidence</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Separate 2026 records make fit and fire evidence distinct.</h2>
          <div className="hs-muted mt-5 grid gap-4 text-base leading-7">
            <p>
              The <a className={sourceLinkClass} href={cpscVoomfRecall}>August 6 CPSC Voomf recall</a> covers about 2,401 China-made play-yard and crib mattresses. CPSC says the play-yard mattresses may not adequately fit certain play yards, creating an entrapment hazard; the full-sized crib mattresses separately violate the mandatory mattress-set flammability standard. CPSC reported one inadequate-fit report and no injuries. These are different findings within one recall, not evidence that every variant failed in the same way.
            </p>
            <p>
              In a separate <a className={sourceLinkClass} href={cpscCriblikeWarning}>July 2 Criblike warning</a>, CPSC identified aftermarket models that may not fit certain play yards or non-full-size cribs. The warning also describes a narrow model/date and host-crib exception. That precise exception shows why a generic “fits most” claim cannot substitute for a tested host-model list. <a className={sourceLinkClass} href={babylistProductRecalls}>Babylist includes the Voomf case in its current 2026 roundup</a>; this is independent coverage, not proof of search volume.
            </p>
          </div>
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
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Connect the actual mattress to its claimed host.</h2>
            <p className="hs-muted mt-4 text-base leading-7">
              For every model and lot, compare the approved sample, construction, dimensions, thickness, flatness, floor-support structure, cover, seams, and markings with sampled finished goods. For aftermarket products, check the original-equipment mattress reference and the named crib or play-yard models against the qualified compatibility file. A production substitution or a different host model changes the evidence question. <a className={sourceLinkClass} href={cpscCribMattressGuidance}>CPSC guidance</a> says testing must address each intended compatible host model.
            </p>
            <p className="hs-muted mt-4 text-base leading-7">
              Photograph model and lot identifiers on the mattress, label, retail pack, and carton; reconcile them with the purchase order and packing list. Check that compatibility claims, warnings, and instructions name the same scope. The importer must determine whether part 1241, other crib or play-yard provisions, flammability standards, and children’s product rules apply to the exact sale configuration.
            </p>
          </div>
          <div className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-6 shadow-[var(--hs-shadow-sm)]">
            <h3 className="text-xl font-extrabold text-[var(--hs-text)]">Request one release pack</h3>
            <ul className="mt-5 grid gap-4 text-sm leading-6 text-[var(--hs-muted)]">
              {[
                'Destination, importer, product category, exact mattress models, intended host models, factory, lots, quantities, and carton map.',
                'Approved sample, bill of materials, dimensions, thickness, support structure, construction drawings, and controlled change log.',
                'Complete host-model compatibility tests, other applicable test reports, tested-sample identity, laboratory scope, and Children’s Product Certificate.',
                'Retail listing, label, warnings, instructions, tracking marks, package artwork, and outer-carton identity.',
                'Failed-unit IDs, segregation record, qualified disposition, any needed retest, correction, and repeat inspection.',
              ].map((item) => (
                <li className="flex gap-2" key={item}>
                  <CheckCircle2 aria-hidden className="mt-1 size-4 shrink-0 text-[var(--hs-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <EvidenceDecisionMatrix
        id="decision-table"
        title="Turn a mismatch into a named lot decision."
        intro="A matching tape-measure reading alone does not clear a different host model, construction, warning, or production lot."
        rows={article.decisionRows}
      />

      <section className="hs-section-white" id="public-case">
        <div className="hs-container hs-section max-w-5xl">
          <p className="hs-eyebrow">Public case example</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Voomf: one recall, two different evidence failures</h2>
          <div className="hs-muted mt-5 grid gap-4 text-base leading-7">
            <p><strong className="text-[var(--hs-text)]">What happened:</strong> The <a className={sourceLinkClass} href={cpscVoomfRecall}>CPSC recall notice of August 6, 2026</a> identifies Voomf play-yard and crib mattresses sold online and made in China. It says the play-yard products may not adequately fit certain play yards, while the full-sized crib mattresses violate a mattress-set flammability standard. The notice reports one inadequate-fit report and no injuries.</p>
            <p><strong className="text-[var(--hs-text)]">What evidence was public:</strong> CPSC identifies the tri-fold play-yard mattress model BYL001, separate crib-mattress description, labels, sale period, importer, hazards, and refund remedy. It does not publish a complete laboratory file or establish the root cause for another manufacturer’s goods.</p>
            <p><strong className="text-[var(--hs-text)]">Buyer lesson:</strong> Maintain separate test and release tracks for host-model compatibility and applicable flammability requirements. Tie each report and <a className={sourceLinkClass} href={cpscChildrensProductCertificate}>Children’s Product Certificate</a> to the exact variant, tested sample, approved build, and named production lots. Trace the same identity into the label and cartons.</p>
            <p><strong className="text-[var(--hs-text)]">Limits of comparison:</strong> The recall does not prove other crib mattresses or suppliers are unsafe. It gives no permission to infer an unreported material or factory cause. Huang Sourcing did not participate in this recall. A buyer-side inspection cannot certify regulatory compliance or guarantee every unit.</p>
          </div>
        </div>
      </section>

      <EvidenceBasisSection
        intro="This guide uses two separate 2026 CPSC records, current CPSC business guidance, independent Babylist coverage, and buyer-side sourcing analysis. The official records control case facts; the release workflow is our analysis."
        items={[
          'Voomf is a recall with one reported fit issue and no reported injuries; Criblike is a separate CPSC warning with its own affected model/date scope.',
          'Current CPSC guidance requires aftermarket compatibility to be established for each intended crib or play-yard model, with matching product, package, and instruction claims.',
          'Testing, certificate scope, and legal release belong to the responsible importer and qualified specialists; Huang Sourcing did not work on either public case.',
        ]}
      />

      <section className="hs-section-white" id="limits">
        <div className="hs-container hs-section max-w-5xl">
          <div className="flex items-center gap-3">
            <ShieldAlert aria-hidden className="size-7 text-amber-700" />
            <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Scope limits and stop rules</h2>
          </div>
          <p className="hs-muted mt-4 text-base leading-7">
            Product classification, fit testing, firmness, flammability, labeling, and certificate obligations depend on the exact mattress and sale configuration. <a className={sourceLinkClass} href={cpscCribMattressGuidance}>CPSC’s crib-mattress FAQ</a> explains that generic size-based compatibility cannot meet aftermarket requirements. <a className={sourceLinkClass} href={cpscThirdPartyTesting}>Third-party testing guidance</a> and the <a className={sourceLinkClass} href={cpscChildrensProductCertificate}>CPC guidance</a> define specialist and importer responsibilities.
          </p>
          <p className="hs-muted mt-4 text-base leading-7">
            Hold affected stock if a claimed host model has no supporting test, a production build differs from the tested sample, the fit check fails, a required warning or model label is absent, reports and CPC do not identify the product, or cartons mix untraceable versions. Obtain a documented qualified disposition, any necessary new testing, corrected claims or goods, and a repeat shipment check before limited release.
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
            <p className="mt-3 max-w-3xl text-base leading-7 text-white/80">Share the exact mattress and host models, approved sample, full reports, CPC, labels, lots, carton map, and pickup date. Huang Sourcing can scope a China-side comparison and document gaps for qualified review.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton analyticsLabel="Check crib mattresses before shipment" analyticsLocation="crib_mattress_article_final_cta" className="hs-btn-primary min-h-12 px-6" href={whatsappHref} size="lg" variant="default">Check Before Shipment</ContactAgentButton>
              <Button asChild className="min-h-12 border-white/30 bg-white text-[var(--hs-navy)] hover:bg-white/90" size="lg" variant="outline"><Link href="/qc-inspection-china">View Inspection Service</Link></Button>
              <Button asChild className="min-h-12 border-white/30 bg-transparent text-white hover:bg-white/10" size="lg" variant="outline"><Link href="/free-china-sourcing-risk-check">Free Risk Check</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="hs-section-soft" id="sources">
        <div className="hs-container hs-section">
          <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Sources</h2>
          <p className="hs-muted mt-3 max-w-3xl text-sm leading-6">Public sources checked September 30, 2026 Beijing time. CPSC controls case and regulatory facts; independent coverage is an attention signal. None implies Huang Sourcing involvement.</p>
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
