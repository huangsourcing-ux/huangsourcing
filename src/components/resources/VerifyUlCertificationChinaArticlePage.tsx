import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileSearch,
  FileText,
  Link2,
  SearchCheck,
  ShieldCheck,
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
import { buildWhatsAppHref } from '@/lib/site-links'
import {
  makeVerifyUlCertificationChinaArticleJsonLd,
  verifyUlCertificationChinaArticle,
} from '@/lib/verify-ul-certification-china-article'

function BulletList({ items }: { items: string[] }) {
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

export function VerifyUlCertificationChinaArticlePage() {
  const article = verifyUlCertificationChinaArticle
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeVerifyUlCertificationChinaArticleJsonLd()} />
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
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {article.intro}
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-base leading-7">
              {article.answerSummary}
            </p>
            <ArticleByline
              author={article.author}
              modifiedDate={article.modifiedDate}
              publishedDate={article.publishedDate}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={article.primaryCta.label}
                analyticsLocation="verify_ul_certification_china_article_hero"
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
            <p className="hs-muted mt-3 text-xs leading-5">
              Original neutral evidence-flow illustration; no certification logo,
              product, factory, person, or document from the cited public case is shown.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Capture', 'Search', 'Match', 'Decide'].map((item) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href="#verification-checklist"
                  key={item}
                >
                  <span className="block text-xs uppercase text-[var(--hs-accent)]">
                    Evidence gate
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
                How do you verify a supplier&apos;s UL certification claim?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                Read the exact identifier from the actual product mark, check it in the
                official UL Product iQ database, and match the record to the legal
                holder, product category, certification service, destination, model,
                ratings, factory relationship, approved construction, and current
                order. If any link is missing, treat the claim as unresolved and hold
                the affected deposit or production approval.
              </p>
              <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                {article.quickChecks.map((item, index) => (
                  <li
                    className="flex min-h-16 gap-3 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-card-warm)] p-4 text-sm leading-6 text-[var(--hs-muted)]"
                    key={item}
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-xs font-extrabold text-white">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal as="section" className="mt-12 scroll-mt-24" id="verification-checklist">
              <div className="flex items-center gap-3">
                <div className="hs-icon-box size-12">
                  <SearchCheck aria-hidden className="size-6" />
                </div>
                <div>
                  <p className="hs-eyebrow">Before-deposit evidence module</p>
                  <h2 className="mt-1 text-3xl font-extrabold text-[var(--hs-text)]">
                    UL certification verification checklist
                  </h2>
                </div>
              </div>
              <p className="hs-muted mt-4 text-base leading-7">
                This module connects a public certification record to the supplier,
                product, factory, and payment gate. It does not grant certification,
                interpret proprietary files, replace laboratory work, or provide a
                legal conclusion.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {article.checkGroups.map((group) => (
                  <section
                    className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 shadow-[var(--hs-shadow-sm)]"
                    key={group.title}
                  >
                    <div className="flex items-center gap-2">
                      <BadgeCheck aria-hidden className="size-5 text-[var(--hs-accent)]" />
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
                      Read the{' '}
                      <a
                        className="hs-text-link"
                        href="https://cases.justia.com/federal/district-courts/washington/wawdce/2%3A2026cv00271/357898/22/0.pdf"
                        rel="noreferrer"
                        target="_blank"
                      >
                        signed federal consent judgment and permanent injunction
                      </a>{' '}
                      together with the{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.cpsc.gov/Newsroom/News-Releases/2026/US-Consumer-Product-Safety-Commission-Launches-Crackdown-on-Fake-Safety-Labels-Used-to-Push-Dangerous-Foreign-Products-into-US-Homes"
                        rel="noreferrer"
                        target="_blank"
                      >
                        CPSC counterfeit-mark crackdown
                      </a>
                      . The first is a consent judgment with a stated no-admission
                      provision; the second is a regulator announcement and inquiry.
                    </p>
                  ) : null}

                  {section.id === 'capture-mark' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      UL&apos;s{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.ul.com/resources/enhanced-marks-and-badges-and-smart-ul-certification"
                        rel="noreferrer"
                        target="_blank"
                      >
                        enhanced and smart mark guidance
                      </a>{' '}
                      explains certification attributes, country codes, unique
                      identifiers, and the distinction between marks and promotional
                      badges.
                    </p>
                  ) : null}

                  {section.id === 'official-record' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Start with UL&apos;s official{' '}
                      <a
                        className="hs-text-link"
                        href="https://www.ul.com/software/product-sourcing-and-certifications-database"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Product iQ certification database guidance
                      </a>
                      , which lists supported search fields and UL&apos;s independent
                      contact route for validity questions.
                    </p>
                  ) : null}

                  {section.id === 'reports-changes' ? (
                    <p className="hs-muted mt-5 text-sm leading-6">
                      Use the separate{' '}
                      <Link className="hs-text-link" href="/verify-china-lab-test-report">
                        China laboratory report verification guide
                      </Link>{' '}
                      for laboratory status, report integrity, exact sample, model,
                      factory, date, result, amendment, and production-match checks.
                    </p>
                  ) : null}
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </section>

      <EvidenceDecisionMatrix
        id="decision-table"
        intro="Name the exact evidence used, the models and factories it covers, unresolved conditions, and the person responsible for release. A directory hit should not conceal a holder, model, construction, or production mismatch."
        rows={article.decisionRows}
        title="Turn a certification claim into a deposit decision."
      />

      <EvidenceBasisSection
        className="hs-section-white"
        intro="This guide combines a signed federal court record, current regulator enforcement context, official UL directory guidance, and the supplier-to-production evidence a buyer can organize before a first payment."
        items={article.evidenceBasis}
      />

      <section className="hs-section-soft scroll-mt-24" id="public-case">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <p className="hs-eyebrow">Public case example</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Amazon and UL case: a product listing claim was not the certification record.
            </h2>
            <div className="hs-muted mt-4 grid gap-4 text-base leading-7">
              <p>
                <strong className="text-[var(--hs-text)]">What happened:</strong> In
                July 2026, the U.S. District Court for the Western District of
                Washington entered a consent judgment and permanent injunction in
                Amazon.com Inc. et al. v. Jiangmen Meijiasheng Bicycle Co. Ltd. et al.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">
                  What evidence was public:
                </strong>{' '}
                The{' '}
                <a
                  className="hs-text-link"
                  href="https://cases.justia.com/federal/district-courts/washington/wawdce/2%3A2026cv00271/357898/22/0.pdf"
                  rel="noreferrer"
                  target="_blank"
                >
                  signed court filing
                </a>{' '}
                states that Amazon and UL alleged unauthorized use of UL marks on
                e-bikes, records the claims resolved by consent, and restricts future
                unauthorized or misleading use. It also says the defendants did not
                admit liability, wrongdoing, or a violation of law by consenting.
                Independent{' '}
                <a
                  className="hs-text-link"
                  href="https://www.bicycleretailer.com/industry-news/2026/07/07/amazon-and-ul-win-suit-over-false-ul-certifications-e-bike-and-e-scooter"
                  rel="noreferrer"
                  target="_blank"
                >
                  Bicycle Retailer coverage
                </a>{' '}
                provides the contemporary industry context and named-party summary.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">Buyer lesson:</strong> A
                supplier logo, marketplace statement, badge, PDF, or model-family claim
                should not release a deposit. Read the identifier from the actual mark,
                confirm the official record, and connect the holder and covered product
                to the supplier, factory, approved construction, and order.
              </p>
              <p>
                <strong className="text-[var(--hs-text)]">
                  Limits of comparison:
                </strong>{' '}
                The consent judgment does not prove every e-bike, China supplier, or
                certification claim is false, and it is not a liability finding after
                trial. Huang Sourcing had no role in the case. A buyer-side evidence
                check cannot grant certification or replace UL, laboratory, importer,
                regulator, marketplace, or legal decisions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white scroll-mt-24" id="documents">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <div className="hs-icon-box size-12">
              <FileSearch aria-hidden className="size-6" />
            </div>
            <p className="hs-eyebrow mt-5">Verification preparation</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What should the buyer send before a supplier check?
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Send the commercial, company, product, certification, and payment files
              together. Missing links should remain explicit open conditions instead
              of being filled with supplier assumptions.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {article.whatToSend.map((item, index) => (
              <Reveal
                className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 shadow-[var(--hs-shadow-sm)]"
                key={item}
                staggerIndex={index}
              >
                <div className="flex gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-sm font-extrabold text-white">
                    {index + 1}
                  </span>
                  <p className="hs-muted text-sm leading-6">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-[var(--hs-radius)] border border-amber-300 bg-amber-50 p-6 shadow-[var(--hs-shadow-sm)]">
            <div className="flex items-center gap-3">
              <AlertTriangle aria-hidden className="size-6 text-amber-700" />
              <h2 className="text-2xl font-extrabold text-[var(--hs-text)]">
                Certification claim red flags
              </h2>
            </div>
            <BulletList items={article.redFlags} />
          </Reveal>

          <Reveal
            className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-6 shadow-[var(--hs-shadow-sm)]"
            delayMs={100}
          >
            <div className="flex items-center gap-3">
              <Link2 aria-hidden className="size-6 text-[var(--hs-accent)]" />
              <h2 className="text-2xl font-extrabold text-[var(--hs-text)]">
                A defensible deposit record
              </h2>
            </div>
            <div className="mt-5 grid gap-4 text-sm leading-6 text-[var(--hs-muted)]">
              <p>
                Name the cleared supplier, certification holder, factory, destination,
                category, model, rating, construction version, mark identifier,
                Product iQ record, evidence date, open conditions, and release owner.
              </p>
              <p>
                If evidence is corrected later, preserve the original mismatch, obtain
                independent confirmation, update the controlled files, and release only
                the exact scope supported by the new record.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white scroll-mt-24" id="scope-limits">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <ShieldCheck aria-hidden className="size-6" />
            </div>
            <p className="hs-eyebrow mt-5">Scope limits</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What this check can and cannot prove.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Keep a sourcing check useful by separating public-record matching and
              visible China-side evidence from certification, technical, importer,
              marketplace, regulator, and legal responsibilities.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={article.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Related buyer decisions</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Carry verified evidence through production and shipment.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {article.relatedLinks.map((item) => (
              <Link
                className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)] transition-transform hover:-translate-y-0.5 hover:border-[var(--hs-accent)]"
                href={item.href}
                key={item.href}
              >
                <h3 className="font-extrabold text-[var(--hs-text)]">{item.label}</h3>
                <p className="hs-muted mt-2 text-sm leading-6">{item.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent-strong)]">
                  Open guide <ArrowRight aria-hidden className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section">
          <Reveal className="rounded-[var(--hs-radius)] bg-[var(--hs-navy)] p-7 text-white shadow-[var(--hs-shadow-lg)] sm:p-9">
            <div className="grid gap-7 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <SearchCheck aria-hidden className="size-7 text-[var(--hs-accent)]" />
                  <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[var(--hs-accent)]">
                    Before the supplier deposit
                  </p>
                </div>
                <h2 className="mt-4 text-3xl font-extrabold">
                  Turn an unclear certification claim into a payment decision.
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-white/80">
                  Share the supplier, factory, product, mark, Product iQ, report,
                  sample, quote, and payment files. Huang Sourcing can scope a focused
                  China-side evidence check before you approve production or transfer a
                  deposit.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-4">
                <ContactAgentButton
                  analyticsLabel="Check certification evidence before deposit"
                  analyticsLocation="verify_ul_certification_china_article_final_cta"
                  className="hs-btn-primary min-h-12 px-6"
                  href={whatsappHref}
                  size="lg"
                  variant="default"
                >
                  Check Before Deposit
                </ContactAgentButton>
                <Button
                  asChild
                  className="min-h-12 border-white/30 bg-white text-[var(--hs-navy)] hover:bg-white/90"
                  size="lg"
                  variant="outline"
                >
                  <Link href="/before-deposit-china-supplier-check">
                    View Before-Deposit Check
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section">
          <Reveal>
            <div className="flex items-center gap-3">
              <FileText aria-hidden className="size-6 text-[var(--hs-accent)]" />
              <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Sources</h2>
            </div>
            <p className="hs-muted mt-3 max-w-3xl text-sm leading-6">
              Public court, regulator, certification-owner, and independent industry
              sources checked August 2, 2026 Beijing time. Links are descriptive so
              buyers can inspect each record&apos;s scope, date, and limits directly.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {article.sourceNotes.map((source) => (
                <a
                  className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)]"
                  href={source.href}
                  key={source.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="inline-flex items-start gap-2 font-extrabold text-[var(--hs-text)]">
                    {source.label}
                    <ExternalLink
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]"
                    />
                  </span>
                  <span className="hs-muted mt-2 block text-sm leading-6">
                    {source.note}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
