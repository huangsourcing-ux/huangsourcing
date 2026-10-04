import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileText,
  Globe2,
  PackageCheck,
  Scale,
  Tags,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import {
  ArticleByline,
  EvidenceBasisSection,
  EvidenceDecisionMatrix,
} from '@/components/resources/ArticleTrustSignals'
import { JsonLd } from '@/components/seo/JsonLd'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  euLowValueParcelDutyChinaArticle,
  makeEuLowValueParcelDutyChinaArticleJsonLd,
  parcelSources,
} from '@/lib/eu-low-value-parcel-duty-china-2026-article'
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

export function EuLowValueParcelDutyChinaArticlePage() {
  const article = euLowValueParcelDutyChinaArticle
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeEuLowValueParcelDutyChinaArticleJsonLd()} />
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
              modifiedDate={article.modifiedDate}
              publishedDate={article.publishedDate}
            />
            <p className="hs-muted mt-3 text-sm leading-6">
              Updated by{' '}
              <Link className="font-bold text-[var(--hs-accent)] underline underline-offset-4" href="/about">
                Huang Sourcing Editorial Team
              </Link>
              . This update is based on cited public records, carrier and shipping-software
              guidance, and buyer-side sourcing analysis.
            </p>
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {article.intro}
            </p>
            <p className="hs-muted mt-2 text-sm leading-6">
              See the{' '}
              <a className="hs-text-link" href={parcelSources.commissionGuidance}>
                Commission guidance on product identifiers
              </a>{' '}
              and{' '}
              <a className="hs-text-link" href={parcelSources.dhl}>
                DHL&apos;s scope and shipment instructions
              </a>.
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-base leading-7">
              {article.answerSummary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={article.primaryCta.label}
                analyticsLocation="eu_low_value_parcel_duty_article_hero"
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
                />
              </div>
            </div>
            <p className="hs-muted mt-2 text-xs leading-5">
              Illustrative packaging check; not a photograph of the cited EU control operation.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Item Type', 'Product ID', 'Labels', 'Handoff'].map((item) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href="#parcel-duty-checklist"
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
                What should EU sellers check before China parcels ship?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                Treat customs duty and product identifiers as separate checks. Confirm
                the applicable duty route with the EU declarant, then agree how each
                product identifier (PID) will be sent in the customs data. Before
                dispatch, match the identifier to the actual goods, listing, labels,
                invoice and safety file. Hold release if the carrier cannot accept
                the data or the identifier points to a different product.
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

            <Reveal as="section" className="mt-12 scroll-mt-24" id="parcel-duty-checklist">
              <div className="flex items-center gap-3">
                <div className="hs-icon-box size-12">
                  <PackageCheck aria-hidden className="size-6" />
                </div>
                <div>
                  <p className="hs-eyebrow">China-side evidence module</p>
                  <h2 className="mt-1 text-3xl font-extrabold text-[var(--hs-text)]">
                    EU low-value parcel duty checklist
                  </h2>
                </div>
              </div>
              <p className="hs-muted mt-4 text-base leading-7">
                The check is practical: connect each product type to the parcel,
                listing, label, invoice, product identifier, safety file, and seller
                handoff before the supplier or warehouse releases the shipment.
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
                  {section.sources ? (
                    <p className="hs-muted mt-3 text-sm leading-6">
                      Sources:{' '}
                      {section.sources.map((source, sourceIndex) => (
                        <span key={source.href}>
                          {sourceIndex > 0 ? '; ' : null}
                          <a
                            className="text-[var(--hs-accent)] underline underline-offset-4"
                            href={source.href}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {source.label}
                          </a>
                        </span>
                      ))}
                    </p>
                  ) : null}
                  {section.bullets ? <BulletList items={section.bullets} /> : null}
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="hs-section-soft scroll-mt-24" id="pid-handoff">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">PID evidence handoff</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Match the identifier to the goods before the data handoff.
            </h2>
            <p className="hs-muted mt-4 text-base leading-7">
              Use this working file to reconcile product identity while corrections
              are still possible in China. Have the carrier or EU declarant confirm
              the accepted identifier, field and transmission format; a supplier
              spreadsheet alone does not establish that customs received the PID.
            </p>
            <p className="hs-muted mt-3 text-sm leading-6">
              Source:{' '}
              <a className="text-[var(--hs-accent)] underline underline-offset-4" href={parcelSources.commissionGuidance} rel="noreferrer" target="_blank">
                European Commission low-value parcel guidance, product identifiers
              </a>
              . The checks and hold reasons below are Huang Sourcing editorial analysis.
            </p>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <table className="block w-full text-left text-sm leading-6 md:table md:table-fixed">
              <caption className="sr-only">PID evidence and reasons to hold China-side shipment release</caption>
              <thead className="hidden bg-[var(--hs-navy)] text-white md:table-header-group">
                <tr>
                  <th className="p-4 md:w-1/4" scope="col">ID</th>
                  <th className="p-4" scope="col">China-side evidence</th>
                  <th className="p-4" scope="col">Hold reason</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {article.pidRows.map((row) => (
                  <tr className="block border-t border-[var(--hs-border)] first:border-t-0 md:table-row" key={row.identifier}>
                    <th className="block bg-[var(--hs-bg-soft)] p-4 align-top font-extrabold text-[var(--hs-text)] md:table-cell" scope="row">
                      {row.identifier}
                    </th>
                    <td className="block p-4 align-top text-[var(--hs-muted)] md:table-cell">
                      <span className="mb-1 block font-bold text-[var(--hs-text)] md:hidden">China-side evidence</span>
                      {row.evidence}
                    </td>
                    <td className="block p-4 pt-0 align-top text-[var(--hs-muted)] md:table-cell md:pt-4">
                      <span className="mb-1 block font-bold text-[var(--hs-text)] md:hidden">Hold reason</span>
                      {row.hold}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="hs-section-white scroll-mt-24" id="public-case">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <p className="hs-eyebrow">Public case example</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              EU controls of toys and small electronics: keep product identity traceable.
            </h2>
            <p className="hs-muted mt-4 text-base leading-7">
              On January 7, 2026, the European Commission reported results from a
              Priority Control Area operation covering 20,000 toys and small electronic
              devices. More than half of the checked products were non-compliant.
              Of a selected subset sent for laboratory testing, 84% were found dangerous.
              That 84% is not a rate for all inspected products, all imports or goods
              from China. Huang Sourcing did not participate in this operation.{' '}
              <a className="text-[var(--hs-accent)] underline underline-offset-4" href={parcelSources.publicCase} rel="noreferrer" target="_blank">
                Read the Commission&apos;s public control-operation findings
              </a>
              .
            </p>
            <p className="hs-muted mt-4 text-base leading-7">
              <strong className="text-[var(--hs-text)]">Buyer lesson:</strong> when a
              seller file, barcode or online listing identifies a different model
              from the one packed in China, the evidence trail breaks. Photograph the
              actual product and its label, connect those images to the declared
              identifier, and keep the matching product-safety records together.
              Ask for correction before release when those references disagree.
            </p>
            <p className="hs-muted mt-4 text-base leading-7">
              The older operation remains relevant to the upcoming PID handoff because{' '}
              <a className="text-[var(--hs-accent)] underline underline-offset-4" href={parcelSources.commissionGuidance} rel="noreferrer" target="_blank">
                section 3.5 of the Commission&apos;s parcel guidance
              </a>{' '}
              connects product identifiers and traceability with the safety-control
              problem illustrated by that operation. An identifier helps connect
              records; it does not prove that a product is safe or compliant.
            </p>
            <p className="hs-muted mt-4 text-base leading-7">
              Arrange a{' '}
              <Link className="text-[var(--hs-accent)] underline underline-offset-4" href="/qc-inspection-china">
                China-side quality-control inspection
              </Link>{' '}
              while corrections are possible, set the{' '}
              <Link className="text-[var(--hs-accent)] underline underline-offset-4" href="/before-forwarder-pickup-inspection-china">
                before-pickup release decision
              </Link>
              , and use the{' '}
              <Link className="text-[var(--hs-accent)] underline underline-offset-4" href="/china-sourcing-risk-guides">
                China sourcing risk guides
              </Link>{' '}
              for related buyer checks.
            </p>
          </Reveal>
        </div>
      </section>

      <EvidenceDecisionMatrix
        id="decision-table"
        intro="Use this table to decide whether a low-value parcel flow is ready for supplier release, fulfillment, correction, specialist review, or a hold before dispatch."
        rows={article.decisionRows}
        title="Turn parcel data into a shipment-release decision."
      />

      <EvidenceBasisSection
        className="hs-section-white"
        intro="This guide uses cited public EU records, carrier guidance and shipping-software implementation material, with buyer-side sourcing analysis of the product, label, parcel and document evidence that can be checked while goods are still in China."
        items={article.evidenceBasis}
      />

      <section className="hs-section-soft" id="source-notes">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <Globe2 aria-hidden className="size-6" />
            </div>
            <p className="hs-eyebrow mt-5">Public sources and evidence</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Verify the customs rule, then check the parcel evidence.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              These sources explain the EUR 3 duty, the former EUR 150 exemption,
              low-value e-commerce volumes, product identifiers, and compliance
              enforcement context. They do not replace shipment-specific EU customs,
              VAT, product safety, or legal advice.
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
                <h3 className="text-base font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">
                  {source.label}
                </h3>
                <p className="hs-muted mt-2 text-sm leading-6">{source.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">
                  Open public source <ExternalLink aria-hidden className="size-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="documents">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <FileText aria-hidden className="size-6" />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              What to send before the parcel evidence check.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Send final product, customs, label, and seller-handoff references so
              the check can compare the physical parcel flow against the file the EU
              side expects to use.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={article.whatToSend} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="red-flags">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <AlertTriangle aria-hidden className="size-6" />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              EU parcel duty red flags before dispatch.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Pause when item grouping, product identifiers, labels, safety files,
              or seller/declarant handoff cannot be tied to the real parcel flow.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={article.redFlags} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="scope-limits">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <div className="hs-icon-box size-12">
              <Scale aria-hidden className="size-6" />
            </div>
            <p className="hs-eyebrow mt-5">Scope limits</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              A China-side check is not EU customs compliance approval.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              The report can show what was visible and provided before dispatch. It
              cannot decide tariff classification, VAT treatment, IOSS status,
              customs acceptance, product compliance, or consumer-charge rules.
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
              Build parcel evidence into the shipment decision.
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
                <h3 className="text-lg font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">
                  {link.label}
                </h3>
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
          <Reveal>
            <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-3">
            {article.faqs.map((faq, index) => (
              <Reveal key={faq.question} staggerIndex={index}>
                <details className="group hs-card bg-white p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-[var(--hs-text)] marker:content-none">
                    <span>{faq.question}</span>
                    <span
                      aria-hidden
                      className="text-xl leading-none text-[var(--hs-accent)] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="hs-muted mt-3 border-t border-[var(--hs-border)] pt-3 text-sm leading-6">
                    {faq.answer}
                  </p>
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
                <Globe2 aria-hidden className="size-4" /> Before EU-bound parcels leave China
              </div>
              <h2 className="mt-3 text-3xl font-extrabold">
                Check item identity, product identifiers, labels, and parcel data
                before dispatch.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send the SKU list, parcel data, seller handoff, product identifiers,
                label files, safety files, invoice drafts, and dispatch deadline
                before fulfillment release.
              </p>
            </div>
            <ContactAgentButton
              analyticsLabel={article.primaryCta.label}
              analyticsLocation="eu_low_value_parcel_duty_article_final"
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
