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
  cpscSleepMachineRecall,
  opssSleepMachineRecall,
  usSleepMachineNotice,
  ukSleepMachineNotice,
  sleepMachineChecksChinaArticle as article,
  makeSleepMachineChecksChinaArticleJsonLd,
} from '@/lib/sleep-machine-checks-china-article'
import { buildWhatsAppHref } from '@/lib/site-links'

const sourceLinkClass = 'hs-text-link font-semibold'

export function SleepMachineChecksChinaArticlePage() {
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeSleepMachineChecksChinaArticleJsonLd()} />
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
                analyticsLabel="Check sleep machine lots"
                analyticsLocation="sleep_machine_article_hero"
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
              Original charging-configuration diagram. It is not a recalled product, a laboratory result, or documentary evidence of the case.
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
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">What must match before a sleep machine shipment moves?</h2>
          <p className="hs-muted mt-4 text-base leading-7">{article.answer}</p>
          <p className="hs-muted mt-4 text-base leading-7">
            The <a className={sourceLinkClass} href={ukSleepMachineNotice}>manufacturer’s UK recall notice</a> describes overheating when the affected device is used with certain charging devices that were not supplied with it. That makes the adapter-excluded retail pack a concrete sourcing question: who defines, evaluates and communicates the acceptable charging configuration?
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
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">What changes when the adapter is sold separately?</h2>
            <p className="hs-muted mt-4 text-base leading-7">The release file still needs a defined power-supply specification. Ask the supplier and qualified lab to identify the device input requirements, permitted charging arrangement and any restrictions that belong in the instructions. Record whether an adapter is included, optional or customer-supplied. Keep that decision consistent across the purchase specification, retail box, manual and destination-market listing artwork provided for review.</p>
            <p className="hs-muted mt-4 text-base leading-7">For an included adapter, record its exact model and markings alongside the device and cable. For a cable-only pack, check that the reviewed instructions identify the required supply clearly. If one document says “any USB charger” while another specifies a narrower arrangement, hold that version for technical reconciliation. Do not invent a wattage rule or assume that a physically matching connector proves compatibility.</p>
            <p className="hs-muted mt-4 text-base leading-7">Compare production against the approved reference using a plan agreed with the responsible parties. Record device and box codes together, cable identity, charging-port condition, pack contents and instruction revision. Perform only the agreed checks with the approved configuration. A short playback or charging indication is a function observation, not an electrical or thermal safety assessment.</p>
          </div>
          <div className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-6 shadow-[var(--hs-shadow-sm)]">
            <h3 className="text-xl font-extrabold text-[var(--hs-text)]">Request one configuration release pack</h3>
            <ul className="mt-5 grid gap-4 text-sm leading-6 text-[var(--hs-muted)]">
              {[
                'Destination, importer, model, hardware revision, battery identity, intended modes and factory.',
                'Cable part ID and adapter model if included; reviewed supply requirements if sold separately.',
                'Complete reports, sample photos, tested charging arrangement, limitations and component change records.',
                'Approved device markings, manual, retail box and accessory list for each market version.',
                'Unit and box date codes, quantities, lot-to-carton map, open issues and correction records.',
              ].map((item) => <li className="flex gap-2" key={item}><CheckCircle2 aria-hidden className="mt-1 size-4 shrink-0 text-[var(--hs-accent)]" /><span>{item}</span></li>)}
            </ul>
            <p className="hs-muted mt-5 text-sm leading-6">Screen recall identity before operating samples. For affected Love to Dream stock, follow the <a className={sourceLinkClass} href={usSleepMachineNotice}>manufacturer’s U.S. recall instructions</a> or the applicable destination notice. Replacing a charger is not the published remedy for recalled units.</p>
          </div>
        </div>
      </section>

      <EvidenceDecisionMatrix
        id="decision-table"
        title="Turn a mismatch into a named lot decision."
        intro="A sound demo does not clear an undocumented charging arrangement, mixed market pack, or unresolved safety issue."
        rows={article.decisionRows}
      />

      <section className="hs-section-white" id="public-case">
        <div className="hs-container hs-section max-w-5xl">
          <p className="hs-eyebrow">Public case example</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Love to Dream: charging compatibility and different market scopes</h2>
          <div className="hs-muted mt-5 grid gap-4 text-base leading-7">
            <p><strong className="text-[var(--hs-text)]">What happened:</strong> On September 24, 2026, <a className={sourceLinkClass} href={cpscSleepMachineRecall}>CPSC recalled China-made Love To Dream portable sleep machines</a> because an incompatible charger can cause battery overheating and fire or burn injury risk. Its notice reports no incidents or injuries and offers a refund for affected units.</p>
            <p><strong className="text-[var(--hs-text)]">What evidence was public:</strong> The U.S. record and the earlier <a className={sourceLinkClass} href={opssSleepMachineRecall}>September 10 UK OPSS notice</a> identify the same model with different affected date-code lists. These are separate market scopes, not interchangeable lists or two independent sets of incidents.</p>
          </div>
          <div className="mt-6 overflow-x-auto rounded-[var(--hs-radius)] border border-[var(--hs-border)]">
            <table className="w-full text-left text-sm leading-6">
              <caption className="bg-[var(--hs-bg-soft)] p-4 text-left font-bold">Published recall identifiers — check the destination notice</caption>
              <thead className="bg-[var(--hs-navy)] text-white"><tr><th scope="col" className="p-4">Market / record</th><th scope="col" className="p-4">Model</th><th scope="col" className="p-4">Affected date codes</th></tr></thead>
              <tbody className="hs-muted bg-white">
                <tr><td className="p-4"><a className={sourceLinkClass} href={cpscSleepMachineRecall}>U.S. CPSC 26-798</a></td><td className="p-4">LTD-SM23</td><td className="p-4">7W15TN</td></tr>
                <tr className="border-t border-[var(--hs-border)]"><td className="p-4"><a className={sourceLinkClass} href={opssSleepMachineRecall}>UK OPSS 2609-0065</a></td><td className="p-4">LTD-SM23</td><td className="p-4">7T12TN, 7W15TN, 8P01TN</td></tr>
              </tbody>
            </table>
          </div>
          <div className="hs-muted mt-5 grid gap-4 text-base leading-7">
            <p><strong className="text-[var(--hs-text)]">Buyer lesson:</strong> Build a model–date-code–market map before inspecting mixed inventory. Connect each unit and retail pack to a carton range, then assess charging evidence for the exact configuration. This is our proposed sourcing workflow, not an inspection procedure prescribed by either regulator.</p>
            <p><strong className="text-[var(--hs-text)]">Limits of comparison:</strong> The notices do not publish a complete failure investigation or a universal charger specification. An unlisted date code is not proof of general product safety. CPSC identifies its recalled units as China-made; OPSS records the UK product’s origin as unknown. Huang Sourcing did not inspect, supply or participate in this case.</p>
          </div>
        </div>
      </section>

      <EvidenceBasisSection
        intro="This guide draws on cited regulator and manufacturer recall records, with a separate current coverage signal. The inspection and release recommendations are buyer-side sourcing analysis."
        items={[
          'Official notices establish the reported hazard, identifiers and action for their own market. They do not establish the safety of other models or lots.',
          'The proposed evidence pack connects product configuration, instructions and stock identity. It cannot replace qualified design assessment or laboratory testing.',
          'Sampling records only the agreed inspected scope. Release decisions should identify unresolved conditions, responsible parties and the precise cartons covered.',
        ]}
      />

      <section className="hs-section-white" id="limits">
        <div className="hs-container hs-section max-w-5xl">
          <div className="flex items-center gap-3">
            <ShieldAlert aria-hidden className="size-7 text-amber-700" />
            <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">What can a shipment check establish?</h2>
          </div>
          <p className="hs-muted mt-4 text-base leading-7">It can record whether sampled goods and retail packs match approved documents, and make discrepancies visible before payment or pickup. It cannot certify electrical safety, safe sound exposure, suitability for infant use, every unit in the order, or destination-market compliance. Have qualified specialists determine the requirements and evaluation needed for the exact design, intended use and market.</p>
          <p className="hs-muted mt-4 text-base leading-7">Do not charge recalled units, try combinations of unknown adapters, open battery enclosures or reproduce an overheating condition during a routine inspection. Stop and escalate abnormal operation. Keep affected stock segregated and obtain an authorized disposition. The <a className={sourceLinkClass} href={usSleepMachineNotice}>manufacturer’s U.S. notice</a> directs affected customers to stop use and follow its recall process; ordinary relabeling or a passed spot check cannot override that instruction.</p>
          <p className="hs-muted mt-4 text-base leading-7">For non-recalled stock with a documented change, retain before-and-after component and instruction records. Ask qualified parties whether additional evaluation is required, verify the correction on identified stock, and re-inspect the relevant scope. Keep battery transport documentation and carrier acceptance separate from finished-product charging evidence.</p>
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
            <p className="mt-3 max-w-3xl text-base leading-7 text-white/80">Share the model, battery and cable identities, adapter inclusion policy, reviewed instructions, full reports, date codes, market versions and carton map. Huang Sourcing can scope a China-side comparison and document gaps before the balance-payment or pickup deadline.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton analyticsLabel="Check sleep machines before shipment" analyticsLocation="sleep_machine_article_final_cta" className="hs-btn-primary min-h-12 px-6" href={whatsappHref} size="lg" variant="default">Check Before Shipment</ContactAgentButton>
              <Button asChild className="min-h-12 border-white/30 bg-white text-[var(--hs-navy)] hover:bg-white/90" size="lg" variant="outline"><Link href="/qc-inspection-china">View Inspection Service</Link></Button>
              <Button asChild className="min-h-12 border-white/30 bg-transparent text-white hover:bg-white/10" size="lg" variant="outline"><Link href="/free-china-sourcing-risk-check">Free Risk Check</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="hs-section-soft" id="sources">
        <div className="hs-container hs-section">
          <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Sources</h2>
          <p className="hs-muted mt-3 max-w-3xl text-sm leading-6">Public sources checked October 3, 2026 Beijing time. Official records control case facts. <a className={sourceLinkClass} href="https://www.nbcnews.com/select/shopping/love-to-dream-recall-2026-rcna599943">NBC Select coverage</a> provided a separate attention signal. No source implies Huang Sourcing involvement.</p>
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
