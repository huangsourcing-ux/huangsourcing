import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileText,
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
  amazonFbaPrepArticle,
  makeAmazonFbaPrepArticleJsonLd,
} from '@/lib/amazon-fba-prep-article'
import { buildWhatsAppHref } from '@/lib/site-links'

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--hs-muted)]">
      {items.map((item) => (
        <li className="flex gap-2" key={item}>
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function AmazonFbaPrepArticlePage() {
  const whatsappHref = buildWhatsAppHref(amazonFbaPrepArticle.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeAmazonFbaPrepArticleJsonLd()} />
      <SiteBreadcrumbs
        currentPath={amazonFbaPrepArticle.href}
        items={[
          { label: 'China sourcing risk guides', href: '/china-sourcing-risk-guides' },
          { label: amazonFbaPrepArticle.title },
        ]}
      />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="min-w-0 lg:col-span-6">
            <p className="hs-eyebrow">{amazonFbaPrepArticle.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold text-[var(--hs-text)] sm:text-5xl">
              {amazonFbaPrepArticle.h1}
            </h1>
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {amazonFbaPrepArticle.intro}
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-base leading-7">
              {amazonFbaPrepArticle.answerSummary}
            </p>
            <ArticleByline
              author={amazonFbaPrepArticle.author}
              modifiedDate={amazonFbaPrepArticle.modifiedDate}
              publishedDate={amazonFbaPrepArticle.publishedDate}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={amazonFbaPrepArticle.primaryCta.label}
                analyticsLocation="amazon_fba_prep_article_hero"
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                href={whatsappHref}
                size="lg"
                variant="default"
              >
                {amazonFbaPrepArticle.primaryCta.label}
              </ContactAgentButton>
              <Button
                asChild
                className="hs-btn-secondary h-12 px-6 text-sm sm:px-8"
                size="lg"
                variant="outline"
              >
                <a href={amazonFbaPrepArticle.secondaryCta.href}>
                  {amazonFbaPrepArticle.secondaryCta.label}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delayMs={120}>
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] shadow-[var(--hs-shadow-md)]">
              <div className="relative aspect-video">
                <Image
                  alt={amazonFbaPrepArticle.image.alt}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src={amazonFbaPrepArticle.image.src}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                'FNSKU',
                'Carton Labels',
                'SKU Groups',
                'Release',
              ].map((item) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href="#decision-table"
                  key={item}
                >
                  <span className="block text-xs uppercase text-[var(--hs-accent)]">Check</span>
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
                <ClipboardCheck className="size-6" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl font-extrabold text-[var(--hs-text)]">
                Article guide
              </h2>
              <nav aria-label="Article table of contents" className="mt-5 grid gap-2">
                {amazonFbaPrepArticle.tableOfContents.map((item) => (
                  <a
                    className="inline-flex min-h-10 items-center justify-between gap-3 rounded-md bg-white px-3 text-sm font-extrabold text-[var(--hs-text)] ring-1 ring-[var(--hs-border)] transition-colors hover:text-[var(--hs-accent-strong)] hover:ring-[var(--hs-accent)]"
                    href={item.href}
                    key={item.href}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="size-4 shrink-0 text-[var(--hs-muted-soft)]" aria-hidden />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="min-w-0 lg:col-span-8">
            <Reveal>
              <p className="hs-eyebrow">Quick answer</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
                What should be checked before FBA shipment?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                Confirm who owns prep, then match current barcode and packaging
                instructions to the units, cartons, shipment plan, and correction evidence
                before goods leave China.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {amazonFbaPrepArticle.quickChecks.map((item, index) => (
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

            <div className="mt-12 grid gap-12">
              {amazonFbaPrepArticle.sections.map((section, index) => (
                <Reveal as="section" className="scroll-mt-24" id={section.id} key={section.id} staggerIndex={index}>
                  <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">{section.title}</h2>
                  <div className="hs-muted mt-4 grid gap-4 text-base leading-7">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? <BulletList items={section.bullets} /> : null}
                  {section.id === 'amazon-2026-change' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Verify the service change in Amazon&apos;s{' '}
                      <a
                        className="hs-text-link"
                        href="https://developer-docs.amazon.com/sp-api/lang-en_US/changelog/us-fba-prep-and-labeling-services-to-end-january-1-2026"
                        rel="noreferrer"
                        target="_blank"
                      >
                        official FBA prep and labeling announcement
                      </a>{' '}
                      and check current execution details in Amazon&apos;s{' '}
                      <a
                        className="hs-text-link"
                        href="https://sell.amazon.com/blog/fba-packaging-prep-labeling"
                        rel="noreferrer"
                        target="_blank"
                      >
                        July 2026 prep, packaging, and labeling guide
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

      <section className="hs-section-soft scroll-mt-24" id="public-case">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Public case example</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Amazon ended US FBA prep and item-labeling services.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <Reveal className="hs-card bg-white p-6">
              <h3 className="text-xl font-extrabold text-[var(--hs-text)]">
                What happened and what was public
              </h3>
              <p className="hs-muted mt-4 text-sm leading-7">
                Amazon announced that prep and item-labeling services for US FBA
                shipments would no longer be available from January 1, 2026. The
                announcement covers inventory sent directly to FBA and inventory
                passing through AWD, AGL, Amazon SEND, or the Supply Chain Portal. It
                also says AMAZON would no longer be accepted as prepOwner or
                labelOwner in US Fulfillment Inbound API operations.
              </p>
              <a
                className="hs-text-link mt-5 inline-flex items-center gap-2 text-sm font-extrabold"
                href="https://developer-docs.amazon.com/sp-api/lang-en_US/changelog/us-fba-prep-and-labeling-services-to-end-january-1-2026"
                rel="noreferrer"
                target="_blank"
              >
                Read Amazon&apos;s primary announcement
                <ExternalLink aria-hidden className="size-4" />
              </a>
            </Reveal>
            <Reveal className="hs-card bg-[var(--hs-card-warm)] p-6" delayMs={80}>
              <h3 className="text-xl font-extrabold text-[var(--hs-text)]">
                Buyer lesson and limits
              </h3>
              <p className="hs-muted mt-4 text-sm leading-7">
                The release question has moved upstream: identify the responsible prep
                party and verify the actual units and cartons before pickup. Do not
                assume a destination fulfillment center will complete missing work.
              </p>
              <p className="hs-muted mt-4 text-sm leading-7">
                This case does not prove that every supplier or shipment has a prep
                defect. It does not establish which barcode or product-specific rule
                applies to a particular ASIN, marketplace, account, or shipment plan.
                The seller remains responsible for current Amazon instructions and the
                final release decision.
              </p>
              <a
                className="hs-text-link mt-5 inline-flex items-center gap-2 text-sm font-extrabold"
                href="https://www.supplychaindive.com/news/amazon-fba-prep-item-labeling-services-end/756289/"
                rel="noreferrer"
                target="_blank"
              >
                Read independent supply-chain coverage
                <ExternalLink aria-hidden className="size-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="hs-section-soft" id="decision-table">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">FBA prep decision table</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What was checked and what the buyer can decide.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              The goal is not just label placement. The goal is to decide whether
              cartons can move to Amazon, need correction, or should route through prep support.
            </p>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <div className="grid bg-[var(--hs-navy)] text-sm font-extrabold text-white md:grid-cols-3">
              <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">Risk node</div>
              <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">What was checked</div>
              <div className="p-4">Buyer decision</div>
            </div>
            {amazonFbaPrepArticle.decisionRows.map((row) => (
              <div
                className="grid border-t border-[var(--hs-border)] text-sm leading-6 text-[var(--hs-muted)] md:grid-cols-3"
                key={row.riskNode}
              >
                <div className="bg-[var(--hs-bg-soft)] p-4 font-extrabold text-[var(--hs-text)] md:border-r md:border-[var(--hs-border)]">
                  {row.riskNode}
                </div>
                <div className="p-4 md:border-r md:border-[var(--hs-border)]">{row.whatWasChecked}</div>
                <div className="p-4">{row.buyerDecision}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EvidenceBasisSection
        className="hs-section-white"
        intro="This guide combines Amazon’s current public instructions, independent coverage of the service change, and buyer-provided SKU, label, carton, and shipment evidence that can be compared before pickup."
        items={amazonFbaPrepArticle.evidenceBasis}
      />

      <section className="hs-section-soft scroll-mt-24" id="sources">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Sources</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Public records used for this update
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {amazonFbaPrepArticle.sourceNotes.map((source, index) => (
              <Reveal
                className="hs-card bg-white p-5"
                key={source.href}
                staggerIndex={index}
              >
                <a
                  className="hs-text-link inline-flex items-start gap-2 font-extrabold"
                  href={source.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>{source.label}</span>
                  <ExternalLink aria-hidden className="mt-0.5 size-4 shrink-0" />
                </a>
                <p className="hs-muted mt-3 text-sm leading-6">{source.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white scroll-mt-24" id="documents">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <FileText className="size-6" aria-hidden />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              What to send for an FBA prep quote.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Send final label files and shipment-plan details before the check so the
              China-side prep can be scoped around the real pickup decision.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={amazonFbaPrepArticle.whatToSend} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="red-flags">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <AlertTriangle className="size-6" aria-hidden />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              Red flags before FBA shipment.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              If these signals appear while goods are still in China, slow the pickup
              decision and ask for label, SKU, or carton evidence.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={amazonFbaPrepArticle.redFlags} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="limits">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <p className="hs-eyebrow">Scope limits</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What Amazon FBA prep in China cannot guarantee.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              FBA prep reduces visible China-side prep risk. It does not promise
              that every Amazon, compliance, or warehouse issue disappears after shipment.
            </p>
            <BulletList items={amazonFbaPrepArticle.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Related next steps</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Move from article to the right FBA check.
            </h2>
          </Reveal>
          <div className="grid gap-3 lg:col-span-8 md:grid-cols-2">
            {amazonFbaPrepArticle.relatedLinks.map((link, index) => (
              <Link
                className="hs-link-card group bg-white p-5"
                href={link.href}
                key={link.href}
                style={{ transitionDelay: `${index * 35}ms` }}
              >
                <h3 className="text-lg font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">
                  {link.label}
                </h3>
                <p className="hs-muted mt-2 text-sm leading-6">{link.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">
                  Open page
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="hs-container hs-section">
          <Reveal className="hs-cta-band px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="relative">
              <p className="text-sm font-extrabold text-red-200">Before FBA shipment</p>
              <h2 className="mt-3 text-3xl font-extrabold">
                Ask for an FBA prep quote before cartons leave China.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send the active shipment plan, barcode and box-label files, SKU list,
                carton count, product-specific prep instructions, pickup date, and the
                correction decision you need.
              </p>
            </div>
            <ContactAgentButton
              analyticsLabel={amazonFbaPrepArticle.primaryCta.label}
              analyticsLocation="amazon_fba_prep_article_final"
              className="relative mt-7 h-12 bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] lg:mt-0"
              href={whatsappHref}
              size="lg"
              variant="default"
            >
              Ask FBA quote
            </ContactAgentButton>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
