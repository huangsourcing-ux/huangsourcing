import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileText,
  FlaskConical,
  Globe2,
  Scale,
  ShieldCheck,
  Tags,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import {
  ArticleByline,
  EvidenceBasisSection,
} from '@/components/resources/ArticleTrustSignals'
import { JsonLd } from '@/components/seo/JsonLd'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  makeSturdyDresserChecksChinaArticleJsonLd,
  sturdyDresserChecksChinaArticle,
} from '@/lib/sturdy-dresser-checks-china-article'
import { buildWhatsAppHref } from '@/lib/site-links'

function BulletList({ items }: { items: readonly string[] }) {
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

export function SturdyDresserChecksChinaArticlePage() {
  const article = sturdyDresserChecksChinaArticle
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeSturdyDresserChecksChinaArticleJsonLd()} />
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
            <ArticleByline
              author={article.author}
              modifiedDate={article.modifiedDate}
              publishedDate={article.publishedDate}
            />
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {article.intro}
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-base leading-7">
              {article.answerSummary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={article.primaryCta.label}
                analyticsLocation="sturdy_dresser_checks_china_article_hero"
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
                  unoptimized
                />
              </div>
            </div>
            <p className="hs-muted mt-3 text-xs leading-5">
              Neutral illustration of an inspection setup; it is not evidence from the
              public recall discussed below.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Scope', 'Test match', 'Parts and labels', 'Bulk release'].map((item) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href="#release-checklist"
                  key={item}
                >
                  <span className="block text-xs uppercase text-[var(--hs-accent)]">
                    Confirm
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
                What should a buyer check before a U.S.-bound dresser ships from China?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                First get a qualified scope, standard, test, and certificate decision for
                the exact dresser. Then verify that the tested sample, full report, CPC or
                GCC, approved structure, drawers or doors, hardware, warning, instructions,
                anti-tip kit, physical units, and cartons all describe the same production
                version before final payment or pickup.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {article.quickChecks.map((item, index) => (
                  <div
                    className="flex min-h-16 gap-3 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-card-warm)] p-4 text-sm leading-6 text-[var(--hs-muted)]"
                    key={item}
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-xs font-extrabold text-white">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal as="section" className="mt-12 scroll-mt-24" id="release-checklist">
              <div className="flex items-center gap-3">
                <div className="hs-icon-box size-12">
                  <FlaskConical aria-hidden className="size-6" />
                </div>
                <div>
                  <p className="hs-eyebrow">China-side evidence module</p>
                  <h2 className="mt-1 text-3xl font-extrabold text-[var(--hs-text)]">
                    STURDY dresser evidence and release checklist
                  </h2>
                </div>
              </div>
              <p className="hs-muted mt-4 text-base leading-7">
                This module connects specialist-approved technical references to the
                physical order. It does not turn an inspection into a controlled stability,
                structural, destructive, or standard-conformity laboratory test.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {article.checkGroups.map((group) => (
                  <section
                    className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 shadow-[var(--hs-shadow-sm)]"
                    key={group.title}
                  >
                    <div className="flex items-center gap-2">
                      <Tags aria-hidden className="size-5 text-[var(--hs-accent)]" />
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
                  {section.id === 'why-current' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Current basis:{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.cpsc.gov/Recalls/2026/Wade-Logan-Annyka-9-Drawer-Fabric-Dressers-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Tip-Over-and-Entrapment-Hazards-Violate-Mandatory-Standard-for-Clothing-Storage-Units-Imported-by-Ningbo-Jiangdong-Peter-International-Trading"
                        rel="noreferrer"
                        target="_blank"
                      >
                        CPSC Wade Logan Annyka dresser recall
                      </a>{' '}
                      and current{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.cpsc.gov/Business--Manufacturing/Business-Education/FAQ?p=3019&amp;tid%5B3022%5D=3022&amp;tid%5B3023%5D=3023&amp;tid%5B3026%5D=3026&amp;tid%5B3029%5D=3029&amp;tid%5B3031%5D=3031&amp;tid%5B3032%5D=3032&amp;tid%5B3033%5D=3033&amp;tid%5B3034%5D=3034&amp;tid%5B3035%5D=3035&amp;tid%5B3037%5D=3037"
                        rel="noreferrer"
                        target="_blank"
                      >
                        CPSC clothing-storage-unit guidance
                      </a>
                      .
                    </p>
                  ) : null}
                  {section.id === 'product-scope' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Apply the thresholds and qualified-scope limits in the{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.cpsc.gov/Business--Manufacturing/Business-Education/FAQ?p=3019&amp;tid%5B3022%5D=3022&amp;tid%5B3023%5D=3023&amp;tid%5B3026%5D=3026&amp;tid%5B3029%5D=3029&amp;tid%5B3031%5D=3031&amp;tid%5B3032%5D=3032&amp;tid%5B3033%5D=3033&amp;tid%5B3034%5D=3034&amp;tid%5B3035%5D=3035&amp;tid%5B3037%5D=3037"
                        rel="noreferrer"
                        target="_blank"
                      >
                        official CPSC business guidance
                      </a>
                      .
                    </p>
                  ) : null}
                  {section.id === 'test-files' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Public evidence-match examples:{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.cpsc.gov/Recalls/2026/Wade-Logan-Annyka-9-Drawer-Fabric-Dressers-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Tip-Over-and-Entrapment-Hazards-Violate-Mandatory-Standard-for-Clothing-Storage-Units-Imported-by-Ningbo-Jiangdong-Peter-International-Trading"
                        rel="noreferrer"
                        target="_blank"
                      >
                        CPSC Annyka fabric-dresser recall
                      </a>{' '}
                      and{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.cpsc.gov/Recalls/2026/7-Drawer-Dressers-Recalled-Du-to-Risk-of-Serious-Injury-or-Death-from-Tip-Over-and-Entrapment-Hazards-Violate-Mandatory-Standard-for-Clothing-Storage-Units-Sold-on-Amazon-com-by-Hasuit-Direct"
                        rel="noreferrer"
                        target="_blank"
                      >
                        CPSC Hasuit wood-dresser recall
                      </a>
                      .
                    </p>
                  ) : null}
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="hs-section-soft" id="decision-table">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Release decision table</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Turn dresser evidence into a payment or pickup decision.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Separate observable China-side evidence from scope classification,
              laboratory testing, certification, eFiling, and legal decisions that remain
              with responsible qualified parties.
            </p>
          </Reveal>
          <div className="mt-8 overflow-x-auto rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <table className="w-full min-w-3xl border-collapse text-left text-sm leading-6">
              <thead className="bg-[var(--hs-navy)] text-white">
                <tr>
                  <th className="p-4 font-extrabold" scope="col">Risk node</th>
                  <th className="border-l border-white/10 p-4 font-extrabold" scope="col">What to check</th>
                  <th className="border-l border-white/10 p-4 font-extrabold" scope="col">Buyer decision</th>
                </tr>
              </thead>
              <tbody>
                {article.decisionRows.map((row) => (
                  <tr className="border-t border-[var(--hs-border)]" key={row.riskNode}>
                    <th className="bg-[var(--hs-bg-soft)] p-4 align-top font-extrabold text-[var(--hs-text)]" scope="row">
                      {row.riskNode}
                    </th>
                    <td className="border-l border-[var(--hs-border)] p-4 align-top text-[var(--hs-muted)]">{row.whatToConfirm}</td>
                    <td className="border-l border-[var(--hs-border)] p-4 align-top text-[var(--hs-muted)]">{row.buyerDecision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <EvidenceBasisSection
        className="hs-section-white"
        intro="This guide is based on cited CPSC 2026 dresser recalls, current CPSC clothing-storage-unit and certificate guidance, and secondary marketplace-validation context, then narrowed to model, structure, hardware, warning, instruction, certificate, pack-out, carton, and correction evidence that can be compared before goods leave China."
        items={article.evidenceBasis}
      />

      <section className="hs-section-white" id="public-case">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <p className="hs-eyebrow">Public case example</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Annyka fabric dresser recall: the product name did not remove STURDY scope.
            </h2>
            <div className="hs-muted mt-4 grid gap-4 text-base leading-7">
              <p>
                On July 16, 2026, the U.S. Consumer Product Safety Commission announced a
                recall of about 180 Wade Logan Annyka nine-drawer fabric dressers. The
                official record identifies Wuxi Leclaire Home Products as the China
                manufacturer and Ningbo Jiangdong Peter International Trading as the
                importer. CPSC said the dressers were unstable when not anchored and
                violated the mandatory clothing-storage-unit standard required by the
                STURDY Act. The remedy was a refund after consumers documented disposal.
                Huang Sourcing was not involved in the product, companies, testing,
                import, enforcement, recall, or corrective action.
              </p>
              <p>
                The case is relevant to today&apos;s release decision because it involved a
                fabric-and-metal-frame dresser whose SKU and color appeared on the outer
                packaging. Buyers should connect the qualified scope decision, tested
                construction, full report, certificate, warning, instructions, anti-tip
                hardware, model label, production parts, and carton identity before
                release. The recall does not prove every fabric dresser, China factory, or
                supplier has the same risk, and visual inspection could not establish the
                official stability finding. The lesson is to prevent unapproved model or
                construction drift and keep laboratory evidence connected to the shipment.
              </p>
              <p>
                Read the{' '}
                <a
                  className="hs-text-link"
                  href="https://www.cpsc.gov/Recalls/2026/Wade-Logan-Annyka-9-Drawer-Fabric-Dressers-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Tip-Over-and-Entrapment-Hazards-Violate-Mandatory-Standard-for-Clothing-Storage-Units-Imported-by-Ningbo-Jiangdong-Peter-International-Trading"
                  rel="noreferrer"
                  target="_blank"
                >
                  official CPSC Wade Logan Annyka dresser recall
                </a>
                . Legal scope, standards, testing, certification, eFiling, and release
                decisions remain with the importer and qualified laboratory or adviser.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="source-notes">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12"><ShieldCheck aria-hidden className="size-6" /></div>
            <p className="hs-eyebrow mt-5">Source context</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Verify the technical plan, then check the shipment match.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              These sources support the public case, recurring-risk context, and current
              certification context. They do not replace product-specific laboratory,
              importer, customs, marketplace, or legal advice.
            </p>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2 lg:col-span-8">
            {article.sourceNotes.map((source, index) => (
              <a
                className="hs-link-card group bg-white p-5"
                href={source.href}
                key={source.href}
                rel="noreferrer"
                style={{ transitionDelay: `${index * 35}ms` }}
                target="_blank"
              >
                <h3 className="text-base font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">{source.label}</h3>
                <p className="hs-muted mt-2 text-sm leading-6">{source.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">
                  Open source <ExternalLink aria-hidden className="size-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="documents">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12"><FileText aria-hidden className="size-6" /></div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              What to send for a dresser evidence and shipment check.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Send final, version-controlled references so the physical evidence can be
              matched to the exact dresser, construction, parts, lot, and destination pack-out the
              importer expects to release.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8"><BulletList items={article.whatToSend} /></Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="red-flags">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12"><AlertTriangle aria-hidden className="size-6" /></div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              STURDY dresser red flags before shipment.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Pause payment or pickup when the scope decision, tested sample, full report,
              certificate, construction, hardware, model, lot, and packed order cannot be connected.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8"><BulletList items={article.redFlags} /></Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="scope-limits">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <div className="hs-icon-box size-12"><Scale aria-hidden className="size-6" /></div>
            <p className="hs-eyebrow mt-5">Scope limits</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              A China-side check is not STURDY compliance approval.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              The report can show what was visible, sampled, measured within an approved
              scope, and provided before shipment. It cannot reproduce controlled stability
              tests, issue a CPC or GCC, certify conformity, or decide legal compliance.
            </p>
            <BulletList items={article.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Related next steps</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Build test, model, and construction evidence into the shipment decision.
            </h2>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2 lg:col-span-8">
            {article.relatedLinks.map((link, index) => (
              <Link
                className="hs-link-card group bg-white p-5"
                href={link.href}
                key={link.href}
                style={{ transitionDelay: `${index * 35}ms` }}
              >
                <h3 className="text-lg font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">{link.label}</h3>
                <p className="hs-muted mt-2 text-sm leading-6">{link.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">
                  Open page <ArrowRight aria-hidden className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="faq">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Frequently asked questions</h2></Reveal>
          <div className="mt-6 grid gap-3">
            {article.faqs.map((faq, index) => (
              <Reveal key={faq.question} staggerIndex={index}>
                <details className="group hs-card bg-white p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-[var(--hs-text)] marker:content-none">
                    <span>{faq.question}</span>
                    <span aria-hidden className="text-xl leading-none text-[var(--hs-accent)] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="hs-muted mt-3 border-t border-[var(--hs-border)] pt-3 text-sm leading-6">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="hs-container hs-section">
          <Reveal className="hs-cta-band px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="relative">
              <div className="flex items-center gap-2 text-sm font-extrabold text-red-200">
                <Globe2 aria-hidden className="size-4" /> Before U.S.-bound dressers leave China
              </div>
              <h2 className="mt-3 text-3xl font-extrabold">
                Check tested construction, models, hardware, warnings, instructions, kits, and cartons while correction is practical.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send the SKU and model list, approved drawings, bill of materials, full
                reports, certificate, warnings, instructions, packing records, and release deadline
                before pickup.
              </p>
            </div>
            <ContactAgentButton
              analyticsLabel={article.primaryCta.label}
              analyticsLocation="sturdy_dresser_checks_china_article_final"
              className="relative mt-7 h-12 bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] lg:mt-0"
              href={whatsappHref}
              size="lg"
              variant="default"
            >
              {article.primaryCta.label}
            </ContactAgentButton>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
