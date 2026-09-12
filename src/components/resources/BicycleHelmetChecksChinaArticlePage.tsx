import { ArrowRight, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { ArticleByline, EvidenceBasisSection, EvidenceDecisionMatrix } from '@/components/resources/ArticleTrustSignals'
import { JsonLd } from '@/components/seo/JsonLd'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import { bicycleHelmetChecksChinaArticle, makeBicycleHelmetChecksChinaArticleJsonLd } from '@/lib/bicycle-helmet-checks-china-article'
import { buildWhatsAppHref } from '@/lib/site-links'

function BulletList({ items }: { items: string[] }) {
  return <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--hs-muted)]">{items.map((item) => (
    <li className="flex gap-2" key={item}><CheckCircle2 aria-hidden className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]" /><span>{item}</span></li>
  ))}</ul>
}

export function BicycleHelmetChecksChinaArticlePage() {
  const article = bicycleHelmetChecksChinaArticle
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)
  const publicCase = article.publicCase
  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeBicycleHelmetChecksChinaArticleJsonLd()} />
      <SiteBreadcrumbs currentPath={article.href} items={[{ label: 'China sourcing risk guides', href: '/china-sourcing-risk-guides' }, { label: article.title }]} />
      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="min-w-0 lg:col-span-6">
            <p className="hs-eyebrow">{article.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold text-[var(--hs-text)] sm:text-5xl">{article.h1}</h1>
            <p className="hs-muted mt-5 text-base leading-7 sm:text-lg sm:leading-8">{article.intro}</p>
            <p className="hs-muted mt-4 text-base leading-7">{article.answerSummary}</p>
            <ArticleByline author={article.author} publishedDate={article.publishedDate} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton analyticsLabel={article.primaryCta.label} analyticsLocation="bicycle_helmet_article_hero" className="hs-btn-primary min-h-12 px-6 text-sm" href={whatsappHref} size="lg" variant="default">{article.primaryCta.label}</ContactAgentButton>
              <Button asChild className="hs-btn-secondary min-h-12 px-6 text-sm" size="lg" variant="outline"><a href={article.secondaryCta.href}>{article.secondaryCta.label}</a></Button>
            </div>
          </Reveal>
          <Reveal className="min-w-0 self-center lg:col-span-6">
            <figure className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
              <Image alt={article.image.alt} className="h-auto w-full" height={article.image.height} priority sizes="(min-width: 1024px) 50vw, 100vw" src={article.image.src} width={article.image.width} />
              <figcaption className="hs-muted px-5 py-4 text-sm leading-6">Original buyer-side workflow diagram. It illustrates evidence handoffs; it is not a laboratory result or a photograph of either recalled product.</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
      <section className="hs-section-white scroll-mt-24" id="quick-answer">
        <div className="hs-container hs-section grid gap-10 lg:grid-cols-12">
          <aside className="min-w-0 lg:col-span-4"><nav aria-label="Article contents" className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-6 lg:sticky lg:top-24">
            <p className="hs-eyebrow">In this guide</p>
            {article.tableOfContents.map((item) => <a className="mt-3 flex items-center justify-between gap-3 text-sm font-semibold text-[var(--hs-text)] hover:text-[var(--hs-accent)]" href={item.href} key={item.href}>{item.label}<ArrowRight aria-hidden className="size-4 shrink-0" /></a>)}
          </nav></aside>
          <article className="min-w-0 lg:col-span-8">
            <Reveal><p className="hs-eyebrow">Quick answer</p><h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">What must match before the helmets leave China?</h2>
              <ol className="mt-6 grid gap-3 sm:grid-cols-2">{article.quickChecks.map((item, index) => <li className="flex gap-3 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-card-warm)] p-4 text-sm leading-6 text-[var(--hs-muted)]" key={item}><span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-xs font-extrabold text-white">{index + 1}</span><span>{item}</span></li>)}</ol>
            </Reveal>
            <Reveal as="section" className="mt-12 scroll-mt-24" id="release-checklist"><p className="hs-eyebrow">China-side evidence module</p><h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Bicycle helmet shipment release checklist</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">{article.checkGroups.map((group) => <section className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5" key={group.title}><h3 className="text-lg font-extrabold text-[var(--hs-text)]">{group.title}</h3><BulletList items={group.items} /></section>)}</div>
            </Reveal>
            <div className="mt-12 grid gap-12">{article.sections.map((section) => <Reveal as="section" className="scroll-mt-24" id={section.id} key={section.id}>
              <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">{section.title}</h2>
              <div className="hs-muted mt-4 grid gap-4 text-base leading-7">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              {section.bullets.length > 0 ? <BulletList items={section.bullets} /> : null}
              {section.citations.length > 0 ? <p className="hs-muted mt-5 text-sm leading-6">Evidence checked: {section.citations.map((citation, index) => <span key={citation.href}>{index > 0 ? '; ' : ''}<a className="hs-text-link" href={citation.href} rel="noreferrer" target="_blank">{citation.label}</a></span>)}.</p> : null}
            </Reveal>)}</div>
          </article>
        </div>
      </section>
      <EvidenceDecisionMatrix id="decision-table" intro="Name the model, size, configuration, production lot, and carton range in every disposition. Keep technical clearance, correction evidence, and commercial release visible." rows={article.decisionRows} title="Turn the evidence into a release decision" />
      <EvidenceBasisSection className="hs-section-white" intro="Researched from cited public records and independent standards coverage, with an original buyer-side inspection and release workflow." items={article.evidenceBasis} />
      <section className="hs-section-soft scroll-mt-24" id="public-case"><div className="hs-container hs-section max-w-4xl"><Reveal>
        <p className="hs-eyebrow">Public case example</p><h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">{publicCase.title}</h2>
        <div className="hs-muted mt-4 grid gap-4 text-base leading-7">
          <p><strong className="text-[var(--hs-text)]">What happened:</strong> {publicCase.facts} <a className="hs-text-link" href={publicCase.href} rel="noreferrer" target="_blank">{publicCase.label}</a>.</p>
          <p><strong className="text-[var(--hs-text)]">Public evidence:</strong> {publicCase.evidence}</p>
          <p><strong className="text-[var(--hs-text)]">Buyer lesson:</strong> {publicCase.lesson}</p>
          <p><strong className="text-[var(--hs-text)]">Limits of comparison:</strong> {publicCase.limits}</p>
          <p>{article.secondCase} <a className="hs-text-link" href={article.secondCaseHref} rel="noreferrer" target="_blank">CPSC Gudook recall 26-528</a>.</p>
        </div>
      </Reveal></div></section>
      <section className="hs-section-white scroll-mt-24" id="documents"><div className="hs-container hs-section"><Reveal><p className="hs-eyebrow">Inspection input</p><h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">What should the buyer send?</h2><BulletList items={article.whatToSend} /></Reveal></div></section>
      <section className="hs-section-soft scroll-mt-24" id="scope-limits"><div className="hs-container hs-section"><Reveal><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">What this inspection cannot prove</h2><BulletList items={article.scopeLimits} /></Reveal></div></section>
      <section className="hs-section-white"><div className="hs-container hs-section"><Reveal><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Related buyer decisions</h2><div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{article.relatedLinks.map((link) => <Link className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 hover:border-[var(--hs-accent)]" href={link.href} key={link.href}><span className="font-extrabold text-[var(--hs-text)]">{link.label}</span><span className="hs-muted mt-2 block text-sm leading-6">{link.note}</span></Link>)}</div></Reveal></div></section>
      <section className="bg-[var(--hs-navy)] text-white"><div className="hs-container hs-section"><Reveal className="grid items-center gap-8 lg:grid-cols-12"><div className="lg:col-span-8"><ShieldCheck aria-hidden className="size-7 text-[var(--hs-accent)]" /><h2 className="mt-4 text-3xl font-extrabold">Make the helmet release scope traceable.</h2><p className="mt-4 max-w-3xl text-base leading-7 text-white/75">Send the order matrix, approved references, complete evidence, production lots, carton map, and deadline. Huang Sourcing can scope a practical China-side comparison before balance payment or pickup.</p></div><div className="flex flex-col gap-3 lg:col-span-4">
        <ContactAgentButton analyticsLabel="Check helmets before shipment" analyticsLocation="bicycle_helmet_article_final_cta" className="hs-btn-primary min-h-12 px-6" href={whatsappHref} size="lg" variant="default">Check Before Shipment</ContactAgentButton>
        <Button asChild className="min-h-12 bg-white text-[var(--hs-navy)] hover:bg-white/90" size="lg"><Link href="/qc-inspection-china">View Inspection Service</Link></Button>
        <Button asChild className="min-h-12 border-white/30 bg-transparent text-white hover:bg-white/10" size="lg" variant="outline"><Link href="/free-china-sourcing-risk-check">Free Risk Check</Link></Button>
      </div></Reveal></div></section>
      <section className="hs-section-white scroll-mt-24" id="sources"><div className="hs-container hs-section"><Reveal><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Sources</h2><p className="hs-muted mt-3 text-sm leading-6">Public sources checked {article.publishedDate}, Beijing time. Links support the case facts, requirements, and standards context identified above.</p><div className="mt-6 grid gap-4 md:grid-cols-2">{article.sourceNotes.map((source) => <a className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 hover:border-[var(--hs-accent)]" href={source.href} key={source.href} rel="noreferrer" target="_blank"><span className="inline-flex items-start gap-2 font-extrabold text-[var(--hs-text)]">{source.label}<ExternalLink aria-hidden className="mt-0.5 size-4 shrink-0" /></span><span className="hs-muted mt-2 block text-sm leading-6">{source.note}</span></a>)}</div></Reveal></div></section>
      <SiteFooter />
    </main>
  )
}
