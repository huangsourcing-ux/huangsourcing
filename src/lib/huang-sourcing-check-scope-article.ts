import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { huangSourcingCheckScopeArticleHref } from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

type ArticleSection = {
  bullets?: string[]
  id: string
  paragraphs: string[]
  title: string
}

type ScopeCard = {
  checks: string[]
  decision: string
  stage: string
}

type DecisionRow = {
  buyerDecision: string
  riskNode: string
  whatWasChecked: string
}

type FaqItem = {
  answer: string
  question: string
}

type RelatedLink = {
  href: string
  label: string
  note: string
}

export const huangSourcingCheckScopeArticle = {
  href: huangSourcingCheckScopeArticleHref,
  title: 'What Huang Sourcing Can and Cannot Check',
  metaTitle: 'Huang Sourcing Check Scope',
  metaDescription:
    'Understand what Huang Sourcing can and cannot check before supplier verification, QC inspection, FBA prep, sample comparison, or China shipment release.',
  publishedDate: 'June 1, 2026',
  publishedDateIso: '2026-06-01T09:00:00-04:00',
  h1: 'What Huang Sourcing Can and Cannot Check',
  eyebrow: 'Huang Sourcing check scope',
  image: {
    alt: 'Agent Huang reviewing supplier documents, product samples, cartons, and inspection scope evidence in China',
    height: 900,
    src: '/images/huang-sourcing-check-scope.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/huang-sourcing-check-scope.webp', width: 1600 },
    { height: 1200, src: '/images/huang-sourcing-check-scope-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/huang-sourcing-check-scope-1x1.webp', width: 1200 },
  ],
  intro:
    'Huang Sourcing can check visible, practical sourcing evidence in China: supplier identity signals, product samples, onsite QC findings, carton readiness, labels, FBA prep details, and shipment-stage facts that help a buyer decide whether to proceed, hold, correct, re-check, or stop. It cannot turn an order into a zero-risk deal.',
  answerSummary:
    'Use Huang Sourcing when the question is buyer-side evidence before money or goods move. Use a specialist when the question needs legal certainty, laboratory testing, customs classification, regulated certification, marketplace approval, or a guarantee about future supplier behavior.',
  primaryCta: {
    href: '/free-china-sourcing-risk-check',
    label: 'Ask What We Can Check',
  },
  secondaryCta: {
    href: '#scope-map',
    label: 'View scope map',
  },
  whatsappMessage: `Hi Agent Huang,

I need help deciding what Huang Sourcing can and cannot check for my China order.

Product:
Supplier link / company name:
Order stage:
Decision I need to make:
Files or photos available:
Deadline:
Main concern:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#buyer-decision', label: 'Buyer decision first' },
    { href: '#can-check', label: 'What can be checked' },
    { href: '#cannot-check', label: 'What cannot be promised' },
    { href: '#field-notes', label: 'Field notes' },
    { href: '#scope-map', label: 'Scope map' },
    { href: '#decision-table', label: 'Decision table' },
    { href: '#evidence-basis', label: 'Evidence basis' },
    { href: '#documents', label: 'What to send' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Huang Sourcing can check visible supplier identity, company-role signals, quote terms, product range, and buyer-stage risk before deposit',
    'Huang Sourcing can compare samples, organize sample evidence, and help buyers decide whether a supplier should stay on the shortlist',
    'Huang Sourcing can inspect visible product condition, workmanship, packaging, labels, carton marks, and shipment readiness when the scope is clear',
    'Huang Sourcing can check FBA prep evidence such as FNSKU labels, carton labels, SKU separation, packing details, and pickup readiness in China',
    'Huang Sourcing cannot guarantee that a supplier is legally risk-free, financially stable, honest forever, or safe for every future order',
    'Huang Sourcing cannot replace laboratory testing, legal due diligence, customs advice, product certification, or regulated compliance review',
    'Huang Sourcing cannot guarantee Amazon, customs, marketplace, warehouse, or platform approval decisions after the goods leave China',
    'Huang Sourcing cannot find hidden defects, untested functions, or every unit-level issue unless those checks are specifically included and realistically accessible',
  ],
  sections: [
    {
      id: 'buyer-decision',
      title: 'Start with the buyer decision, not the service name',
      paragraphs: [
        'The useful question is not "Can you check everything?" It is "What decision do I need evidence for right now?" A buyer before deposit needs a different check from a buyer before balance payment, forwarder pickup, FBA shipment, or supplier selection after samples.',
        'Huang Sourcing is strongest when the decision can be supported by visible China-side evidence: documents, supplier signals, sample condition, product photos, onsite inspection findings, label files, carton condition, pickup readiness, or correction proof.',
      ],
      bullets: [
        'Before deposit: check supplier identity signals, quote terms, company-role clues, and warning signs',
        'Before choosing a supplier: check and compare sample evidence from multiple suppliers',
        'Before balance payment: check visible product condition, quantity signals, packing, labels, and defects',
        'Before pickup or FBA shipment: check cartons, labels, SKU separation, shipment files, and readiness',
      ],
    },
    {
      id: 'can-check',
      title: 'What Huang Sourcing can check from China',
      paragraphs: [
        'Huang Sourcing can collect and interpret practical evidence that helps an overseas buyer slow down a risky payment, approve a shipment, request correction, or book a deeper onsite check. The check is buyer-side: it is not supplier-paid marketing, and it is not a promise that the supplier has no risk.',
        'The scope can be desk-based, onsite, sample-based, QC-based, or shipment-based depending on what is still accessible in China. The earlier the buyer asks, the more options exist for correction before money or goods move.',
      ],
      bullets: [
        'Supplier profile, company name consistency, address signals, business scope, quote terms, MOQ, lead time, and payment-pressure signs',
        'Factory or trading company clues from product range, communication, photos, documents, address, and order behavior',
        'Sample receipt, photos, basic comparison, packaging observations, visible finish differences, and consolidation evidence',
        'Product condition, workmanship, quantity signals, simple function when scoped, packaging, labels, carton marks, and defect photos',
        'FNSKU labels, carton labels, shipping marks, SKU separation, carton count, packing-list match, and forwarder pickup readiness',
      ],
    },
    {
      id: 'cannot-check',
      title: 'What Huang Sourcing cannot prove or promise',
      paragraphs: [
        'Some questions need a licensed laboratory, lawyer, customs broker, certification body, marketplace compliance team, or the buyer platform itself. Huang Sourcing can help identify when those questions exist, but it should not pretend to replace those specialists.',
        'A practical check also depends on access. If the supplier blocks entry, refuses documents, hides cartons, changes files after the check, or the goods have already left China, the report can document the limitation but cannot create evidence that was not available.',
      ],
      bullets: [
        'Legal ownership, contract enforceability, litigation risk, debt status, or final dispute outcome',
        'Laboratory test results, regulated product safety certification, chemical compliance, or full technical compliance approval',
        'Customs classification, tariff advice, destination import permission, or customs clearance approval',
        'Amazon, Walmart, TikTok Shop, warehouse, or marketplace acceptance after arrival',
        'Future supplier behavior, future production quality, hidden defects, every unit in a large order, or damage after shipment',
      ],
    },
    {
      id: 'field-notes',
      title: 'Agent Huang field notes on setting the right scope',
      paragraphs: [
        'Many problems start because the buyer asks for a broad promise instead of a specific decision. A better request is "Can you help me decide whether to pay the deposit?" or "Can you check if cartons are ready before pickup?" That makes the evidence useful.',
        'When the concern is outside scope, the honest answer should be clear. For example, Huang Sourcing can check whether a certificate file was provided and whether the visible product matches the order context, but a formal compliance conclusion belongs to a lab, certification expert, lawyer, customs broker, or marketplace review process.',
      ],
      bullets: [
        'Define the stage: before deposit, before balance, before pickup, before FBA shipment, or before supplier selection',
        'Define the evidence: documents, photos, samples, onsite inspection, label files, carton checks, or correction proof',
        'Define the decision: approve, hold, inspect, relabel, repack, re-check, request specialist review, or stop',
        'Define the limits so the report is used as decision support, not as a zero-risk guarantee',
      ],
    },
  ] satisfies ArticleSection[],
  scopeCards: [
    {
      stage: 'Before deposit',
      checks: [
        'Supplier identity signals',
        'Company-role and quote consistency',
        'Payment pressure and missing evidence',
      ],
      decision: 'Pay, hold, ask more questions, verify further, or stop',
    },
    {
      stage: 'Before supplier selection',
      checks: [
        'Sample receipt and photo evidence',
        'Visible sample quality and packaging',
        'Supplier comparison notes',
      ],
      decision: 'Shortlist, request revision, compare again, or avoid',
    },
    {
      stage: 'Before balance payment',
      checks: [
        'Visible product defects',
        'Quantity and packing signals',
        'Labels, cartons, and report photos',
      ],
      decision: 'Approve, hold balance, request rework, or re-inspect',
    },
    {
      stage: 'Before pickup or FBA shipment',
      checks: [
        'Carton marks and labels',
        'FNSKU or SKU separation evidence',
        'Packing-list and shipment readiness',
      ],
      decision: 'Approve pickup, delay, relabel, repack, or re-check',
    },
    {
      stage: 'Outside a standard check',
      checks: [
        'Legal, lab, customs, certification, or platform approval questions',
        'Hidden defects and future behavior',
        'Goods no longer accessible in China',
      ],
      decision: 'Pause and involve the right specialist or adjust scope',
    },
  ] satisfies ScopeCard[],
  decisionRows: [
    {
      riskNode: 'New supplier before deposit',
      whatWasChecked:
        'Supplier profile, company name, address signals, business scope, quote terms, payment pressure, product range, and missing evidence',
      buyerDecision: 'Pay deposit, hold, request stronger proof, book supplier verification, or stop before payment',
    },
    {
      riskNode: 'Factory or trader role unclear',
      whatWasChecked:
        'Company-role clues, product category fit, documents, photos, address consistency, communication behavior, and quote details',
      buyerDecision: 'Treat as caution, verify further, request onsite evidence, compare suppliers, or avoid',
    },
    {
      riskNode: 'Samples from several suppliers',
      whatWasChecked:
        'Sample receipt, photos, dimensions when scoped, finish, packaging, labeling, visible differences, and forwarding readiness',
      buyerDecision: 'Shortlist one supplier, request revised samples, compare again, or pause supplier selection',
    },
    {
      riskNode: 'Production ready for balance payment',
      whatWasChecked:
        'Visible product condition, defects, quantity signals, packaging, labels, carton marks, simple function when scoped, and report photos',
      buyerDecision: 'Release balance, hold payment, request rework, negotiate correction, or re-inspect',
    },
    {
      riskNode: 'Forwarder pickup or FBA shipment close',
      whatWasChecked:
        'Carton condition, packing list, shipping marks, FNSKU or carton labels, SKU separation, pickup access, and correction proof',
      buyerDecision: 'Approve pickup, delay collection, relabel, repack, inspect again, or change routing',
    },
    {
      riskNode: 'Regulated, legal, customs, or platform issue',
      whatWasChecked:
        'Available files and visible order context only, plus whether the question exceeds a practical China-side sourcing check',
      buyerDecision: 'Do not rely on a sourcing report alone; involve lab, legal, customs, certification, or marketplace specialists',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Buyer-stage facts: whether the decision is before deposit, before supplier selection, before balance payment, before pickup, before FBA shipment, or after goods have left China.',
    'Document and file evidence: supplier profiles, company names, quotes, invoices, payment terms, product specs, SKU lists, label files, packing lists, certificates provided by the supplier, and correction notes.',
    'Physical and onsite evidence: samples, product condition, visible defects, packaging, labels, carton marks, carton condition, quantity signals, FNSKU labels, SKU separation, and warehouse or factory access.',
    'China-side workflow judgment: whether evidence is enough for a buyer decision, whether onsite checking is needed, whether rework is realistic, or whether the question belongs to a lab, lawyer, customs broker, certification expert, or marketplace review.',
  ],
  whatToSend: [
    'Supplier link, company name, contact person, quote, proforma invoice, payment terms, and order stage',
    'Product photos, product specification, sample photos, drawing or reference sample notes, and packaging requirements',
    'Order quantity, SKU list, variants, carton count, units per carton, packing list, and shipment deadline',
    'Current supplier evidence: documents, certificates, factory photos, production photos, label photos, carton photos, or correction proof',
    'The buyer decision you need: pay deposit, choose supplier, release balance, approve pickup, relabel, repack, re-check, or stop',
    'Any question you suspect may need lab testing, legal review, customs advice, certification review, or marketplace compliance support',
  ],
  redFlags: [
    'The buyer asks for a guarantee that the supplier is safe instead of a specific evidence-based decision',
    'The supplier refuses to share company name, address, PI, packing list, label files, or basic order evidence',
    'The supplier pushes for deposit, balance payment, or pickup before the buyer has enough visible evidence',
    'The request depends on legal, lab, customs, certification, or marketplace approval but no specialist is involved',
    'The goods already left China, but the buyer still expects a China-side inspection to prove carton contents',
    'Product defects, labeling issues, or carton problems are suspected, but the scope only asks for a quick photo check',
    'The supplier blocks onsite access or limits what can be photographed, opened, counted, or tested',
    'Files changed after inspection, such as SKU lists, shipment plans, label files, or packing instructions',
  ],
  scopeLimits: [
    'Huang Sourcing checks practical, visible sourcing and shipment evidence; it does not sell zero-risk guarantees',
    'Supplier verification does not replace legal due diligence, credit checks, contract review, or a full factory audit when those are required',
    'QC inspection does not guarantee every unit, hidden defects, untested functions, or future transit damage unless the scope and access allow those checks',
    'FBA prep and label checks do not guarantee Amazon receiving approval, listing approval, marketplace compliance, or account decisions',
    'Document checks can review what was provided and whether it fits the order context, but they do not authenticate every certificate or replace a certification body',
    'If access, timing, supplier cooperation, or order information is limited, the report should state the limitation and the buyer should decide whether to hold or expand the scope',
  ],
  relatedLinks: [
    {
      href: '/china-sourcing-services',
      label: 'China Sourcing Services',
      note: 'Use this overview when you are still choosing between supplier verification, sample work, QC, shipment checks, or FBA prep.',
    },
    {
      href: '/free-china-sourcing-risk-check',
      label: 'Free Sourcing Risk Check',
      note: 'Use this when the first question is what kind of check fits your current buyer decision.',
    },
    {
      href: '/scope-limitations',
      label: 'Scope & Limitations',
      note: 'Read the trust policy page for the broader promise limits behind Huang Sourcing reports.',
    },
    {
      href: '/supplier-verification-china',
      label: 'Supplier Verification China',
      note: 'Use before deposit when supplier identity, quote terms, or company-role signals are unclear.',
    },
    {
      href: '/qc-inspection-china',
      label: 'QC Inspection China',
      note: 'Use before balance payment when product condition, defects, packaging, labels, or carton evidence matters.',
    },
    {
      href: '/amazon-fba-prep-china',
      label: 'Amazon FBA Prep China',
      note: 'Use before FBA shipment when labels, cartons, SKU separation, and pickup readiness need physical evidence.',
    },
    {
      href: '/sample-inspection-report-china',
      label: 'Sample Inspection Report',
      note: 'Preview how photo evidence and buyer decision notes can be presented in a practical report.',
    },
    {
      href: '/china-sourcing-risk-guides',
      label: 'China Sourcing Risk Guides',
      note: 'Use the resource hub to choose the right buyer-stage guide before money or goods move.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What can Huang Sourcing check for overseas buyers?',
      answer:
        'Huang Sourcing can check practical, visible China-side evidence such as supplier identity signals, quote and payment clues, sample evidence, onsite QC findings, packaging, labels, cartons, FBA prep details, and shipment readiness when the scope and access allow it.',
    },
    {
      question: 'Can Huang Sourcing guarantee a supplier is safe?',
      answer:
        'No. Huang Sourcing can reduce visible risk and help buyers make a better decision before payment or shipment, but it cannot guarantee legal safety, future supplier behavior, financial stability, or every future order outcome.',
    },
    {
      question: 'Can Huang Sourcing check product quality?',
      answer:
        'Yes, within a defined scope. QC inspection can check visible product condition, workmanship, packaging, labels, carton marks, quantity signals, and simple function when scoped, but it does not replace laboratory testing or guarantee every unit.',
    },
    {
      question: 'Can Huang Sourcing check certificates or compliance documents?',
      answer:
        'Huang Sourcing can review whether files were provided and whether they match the order context, but formal certificate authentication, product safety compliance, customs classification, and legal conclusions require specialist review.',
    },
    {
      question: 'Can Huang Sourcing check Amazon FBA readiness?',
      answer:
        'Yes, for visible China-side prep evidence such as FNSKU labels, carton labels, SKU separation, packing details, carton condition, and pickup readiness. It cannot guarantee Amazon receiving, listing approval, or marketplace compliance decisions.',
    },
    {
      question: 'How do I know which Huang Sourcing check I need?',
      answer:
        'Send the supplier link, product, order stage, deadline, available files, and the buyer decision you need to make. Agent Huang can suggest whether a free risk check, supplier verification, sample work, QC inspection, pre-shipment check, FBA prep, or specialist review fits best.',
    },
  ] satisfies FaqItem[],
}

export function makeHuangSourcingCheckScopeArticleMetadata(): Metadata {
  const canonicalPath = huangSourcingCheckScopeArticle.href

  return {
    title: huangSourcingCheckScopeArticle.metaTitle,
    description: huangSourcingCheckScopeArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: huangSourcingCheckScopeArticle.metaTitle,
      description: huangSourcingCheckScopeArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        ...getArticleOpenGraphImages(huangSourcingCheckScopeArticle),
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: huangSourcingCheckScopeArticle.metaTitle,
      description: huangSourcingCheckScopeArticle.metaDescription,
      images: [huangSourcingCheckScopeArticle.image.src],
    },
  }
}

export function makeHuangSourcingCheckScopeArticleJsonLd() {
  return [
    makeArticleJsonLd(huangSourcingCheckScopeArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Huang Sourcing check scope decision list',
      itemListElement: huangSourcingCheckScopeArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(huangSourcingCheckScopeArticle.faqs),
  ]
}
