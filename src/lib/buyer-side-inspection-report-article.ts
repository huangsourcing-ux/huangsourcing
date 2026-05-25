import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { buyerSideInspectionReportArticleHref } from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

type ArticleSection = {
  bullets?: string[]
  id: string
  paragraphs: string[]
  title: string
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

type ReportModule = {
  decisionUse: string
  evidence: string
  title: string
}

export const buyerSideInspectionReportArticle = {
  href: buyerSideInspectionReportArticleHref,
  title: 'What Does a Buyer-Side Inspection Report Include?',
  metaTitle: 'Buyer-Side Inspection Report Guide',
  metaDescription:
    'Learn what a buyer-side inspection report should include: product photos, defects, quantities, packing, labels, scope limits, and buyer decisions before payment or pickup.',
  publishedDate: 'May 25, 2026',
  publishedDateIso: '2026-05-25T00:34:58-04:00',
  h1: 'What Does a Buyer-Side Inspection Report Include?',
  eyebrow: 'Buyer-side inspection report',
  image: {
    alt: 'Buyer-side QC inspector reviewing a photo-backed inspection report beside export cartons, product samples, packing evidence, and label sheets',
    height: 900,
    src: '/images/buyer-side-inspection-report.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/buyer-side-inspection-report.webp',
      width: 1600,
    },
    {
      height: 900,
      src: '/images/buyer-side-inspection-report-4x3.webp',
      width: 1200,
    },
    {
      height: 1200,
      src: '/images/buyer-side-inspection-report-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'A buyer-side inspection report is not just a folder of supplier photos. It should explain what was checked, what evidence was seen onsite, what defects or packing risks were found, and which buyer decision is now safer: release balance payment, hold, request rework, relabel, repack, re-inspect, delay pickup, or stop before the goods leave China.',
  answerSummary:
    'A useful buyer-side inspection report includes the order and scope, documents used, sampled goods, product photos, workmanship and function checks, measurements when relevant, defect findings, quantity and carton evidence, packaging and label checks, red flags, scope limits, and a clear decision note for the buyer. It should also say what could not be proven.',
  primaryCta: {
    href: '/qc-inspection-china',
    label: 'Send report requirements',
  },
  secondaryCta: {
    href: '#report-sections',
    label: 'See report sections',
  },
  whatsappMessage: `Hi Agent Huang,

I want to understand or scope a buyer-side inspection report before payment or pickup.

Product:
Supplier / factory location:
Order quantity / cartons:
Inspection stage:
Files I can send:
Main decision I need:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#report-sections', label: 'Report sections' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#evidence-basis', label: 'Evidence basis' },
    { href: '#what-to-send', label: 'What to send' },
    { href: '#red-flags', label: 'Weak report signs' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Order snapshot: buyer files, supplier, factory address, product, SKU list, quantity, and inspection date',
    'Inspection scope: what was agreed, which documents were used, and what checks were excluded',
    'Product evidence: sampled units, close-up photos, workmanship, dimensions, accessories, and basic function checks',
    'Defect summary: defect photos, count, severity, affected SKU or carton, and whether the issue repeats',
    'Packing and label evidence: inner packing, retail box, carton marks, barcodes, FNSKU files, and SKU separation',
    'Quantity and carton status: finished quantity, packed cartons, carton condition, and random carton selection',
    'Decision note: approve, hold balance, request rework, relabel, repack, re-inspect, or delay pickup',
    'Scope limits: missing files, inaccessible goods, untested compliance points, and what the report cannot prove',
  ],
  sections: [
    {
      id: 'decision-first',
      title: 'The report should start from the buyer decision',
      paragraphs: [
        'The best report is written around the decision the buyer has to make. A balance payment decision needs stronger product, defect, quantity, and packing evidence. A forwarder pickup decision needs carton condition, shipping marks, packed quantity, and readiness evidence. An Amazon-bound shipment may need FNSKU, carton label, SKU separation, and packaging checks before freight moves.',
        'If the report only says that the goods look acceptable, it is too weak for real sourcing risk. The report should connect the evidence to a practical next step while the supplier can still correct problems in China.',
      ],
      bullets: [
        'Approve only when the visible evidence supports the agreed order and scope',
        'Hold payment when defects, missing quantity, or unclear packing evidence still matter',
        'Request rework, relabeling, or repacking before pickup if the issue is still fixable',
        'Schedule a re-inspection when correction cannot be confirmed by supplier promises alone',
      ],
    },
    {
      id: 'what-includes',
      title: 'What a buyer-side inspection report usually includes',
      paragraphs: [
        'A complete report should identify the order being checked, the documents used for comparison, the sampling or photo approach, and the exact onsite evidence collected. The buyer should be able to see which products, cartons, labels, and packing details were checked instead of guessing from a few attractive photos.',
        'For practical China sourcing, the report should separate product condition from packing and label readiness. A product may look acceptable but still have wrong carton marks, mixed SKUs, missing accessories, or label risks that block pickup or FBA shipment.',
      ],
      bullets: [
        'Order, PO or PI reference, product name, SKU/model, quantity, carton count, factory address, and date',
        'Documents used: specifications, approved sample notes, packing list, label files, artwork, or buyer photos',
        'Product checks: appearance, workmanship, measurements, accessories, simple function checks, and visible defects',
        'Packing checks: retail packaging, inner protection, manuals, inserts, carton marks, shipping marks, and carton condition',
        'Label checks: barcode, FNSKU, warning label, country-of-origin mark, SKU separation, and label placement when files are provided',
        'Conclusion: findings, unresolved risks, buyer decision, and recommended next action',
      ],
    },
    {
      id: 'photo-evidence',
      title: 'Photo evidence should prove the finding, not decorate the report',
      paragraphs: [
        'Photos are useful only when they show the item, carton, label, or defect clearly enough for the buyer to understand the risk. A good report includes wide shots for context, close-ups for defects, and comparison photos when a product, label, or packing detail must match a buyer file.',
        'From the China side, Agent Huang treats photos as decision evidence. The important question is not whether the report looks busy. The question is whether the photos support a buyer action before money or goods move.',
      ],
      bullets: [
        'Use overview photos to show inspection location, packed cartons, and selected samples',
        'Use close-ups to show defects, labels, carton marks, accessories, dimensions, and packaging details',
        'Match photos against buyer files when sample color, logo, barcode, carton mark, or SKU split matters',
        'Call out unclear photos or inaccessible areas instead of pretending every point was verified',
      ],
    },
    {
      id: 'field-notes',
      title: 'Agent Huang field notes on weak inspection reports',
      paragraphs: [
        'Weak reports often fail because they are supplier-facing, not buyer-side. They may show finished goods but omit the PO comparison, carton count, label files, defect severity, missing accessories, or what the buyer should do next. This is risky when the supplier is pressing for balance payment or pickup.',
        'A buyer-side report should be honest about uncertainty. If the approved sample was not available, if cartons were not fully packed, if labels were missing, or if part of the warehouse could not be accessed, the report should say so clearly. That limitation may become the reason to hold payment or delay pickup.',
      ],
      bullets: [
        'Treat vague conclusions like "everything is fine" as a reason to ask what was actually checked',
        'Ask whether the report compared goods against buyer files or only supplier statements',
        'Look for a decision note that tells you whether to approve, hold, correct, or re-check',
        'Expect scope limits when documents, samples, labels, or factory access are incomplete',
      ],
    },
  ] satisfies ArticleSection[],
  reportModules: [
    {
      title: 'Order and scope',
      evidence:
        'PO or PI, SKU list, specification, approved sample notes, factory address, inspection date, and agreed checks.',
      decisionUse:
        'Confirms whether the report is checking the right order before the buyer relies on the findings.',
    },
    {
      title: 'Product condition',
      evidence:
        'Sampled units, workmanship photos, dimensions, accessories, color or finish notes, and simple function checks.',
      decisionUse:
        'Supports approve, hold, rework, replacement, sorting, or re-inspection decisions before balance payment.',
    },
    {
      title: 'Packing and labels',
      evidence:
        'Retail packaging, inner protection, manuals, carton marks, barcodes, FNSKU files, warning labels, and SKU separation.',
      decisionUse:
        'Shows whether relabeling, repacking, or China-side prep is needed before pickup or FBA shipment.',
    },
    {
      title: 'Quantity and cartons',
      evidence:
        'Finished quantity, packed carton count, carton condition, selected cartons, packing-list match, and shipment readiness.',
      decisionUse:
        'Helps decide whether pickup can proceed or whether the supplier must finish, repack, or explain missing goods.',
    },
    {
      title: 'Defects and red flags',
      evidence:
        'Defect photos, severity notes, repeated patterns, affected SKUs, supplier pressure, missing files, and blocked access.',
      decisionUse:
        'Gives the buyer leverage to hold payment, request correction, negotiate next steps, or stop shipment release.',
    },
    {
      title: 'Limits and next step',
      evidence:
        'Missing documents, unavailable samples, unchecked compliance points, hidden-defect limits, and recommended buyer action.',
      decisionUse:
        'Prevents the report from overstating certainty and points to the next check if risk remains open.',
    },
  ] satisfies ReportModule[],
  evidenceBasis: [
    'Buyer documents: PO, PI, specification sheet, approved sample notes, product photos, drawings, packing list, and label files when provided',
    'Onsite signals: factory or warehouse access, product readiness, selected samples, packed cartons, carton marks, label placement, and visible defect evidence',
    'Product and packing evidence: workmanship photos, measurements when scoped, accessory checks, inner packing, retail packaging, manuals, inserts, and carton condition',
    'Buyer-stage facts: deposit or balance pressure, forwarder pickup window, FBA shipment timing, supplier correction ability, and the decision deadline',
    'China-side workflow judgment: whether the evidence is strong enough to approve, hold, relabel, repack, rework, re-inspect, or delay pickup',
  ],
  decisionRows: [
    {
      riskNode: 'Order scope unclear',
      whatWasChecked:
        'PO, PI, SKU list, product specification, approved sample notes, factory address, inspection date, and buyer decision needed',
      buyerDecision: 'Send missing files, narrow the scope, or wait before treating the report as payment evidence',
    },
    {
      riskNode: 'Product condition risk',
      whatWasChecked:
        'Sampled units, workmanship photos, measurements, accessories, simple function checks, defects, and sample comparison where possible',
      buyerDecision: 'Approve, hold balance, request rework, replace affected goods, sort units, or schedule a re-inspection',
    },
    {
      riskNode: 'Packing and label risk',
      whatWasChecked:
        'Retail packaging, inner packing, manuals, carton marks, barcode files, FNSKU files, warning labels, and SKU separation',
      buyerDecision: 'Relabel, repack, use prep support, delay pickup, or approve packing only if evidence is clear',
    },
    {
      riskNode: 'Quantity or carton readiness risk',
      whatWasChecked:
        'Finished quantity, packed carton count, selected cartons, carton condition, packing-list match, and shipment readiness',
      buyerDecision: 'Approve pickup, hold pickup, ask for finished quantity proof, or re-check after packing is complete',
    },
    {
      riskNode: 'Missing evidence or access limits',
      whatWasChecked:
        'Missing buyer files, unavailable approved sample, supplier-controlled photos, inaccessible areas, unpacked goods, and untested compliance points',
      buyerDecision: 'Hold payment, request better access, clarify limits, or use lab testing, verification, or a later inspection separately',
    },
  ] satisfies DecisionRow[],
  whatToSend: [
    'Purchase order, pro forma invoice, SKU list, model numbers, order quantity, carton count, and factory address',
    'Product specification, approved sample notes, product photos, drawings, dimensions, material notes, and critical defect list',
    'Packing list, retail packaging artwork, manuals, inserts, accessories, carton marks, shipping marks, and carton dimensions',
    'Barcode, FNSKU, warning label, country-of-origin label, SKU separation rule, label placement file, and any FBA-related prep notes',
    'Supplier contact, production readiness status, inspection date target, forwarder pickup window, and balance payment deadline',
    'The exact decision you need after the report: approve, hold, rework, relabel, repack, re-inspect, delay pickup, or stop',
  ],
  redFlags: [
    'The report has photos but no clear order reference, scope, factory address, date, or document comparison',
    'The supplier controls the photos and the report does not show how samples or cartons were selected',
    'Defects are shown without severity, quantity, affected SKU, or buyer decision context',
    'Packing and labels are described as acceptable but barcode, FNSKU, carton mark, or SKU separation photos are missing',
    'The report says "pass" without explaining missing files, inaccessible goods, or scope limits',
    'The supplier asks for balance payment or pickup approval before the buyer has photo-backed evidence',
  ],
  scopeLimits: [
    'A buyer-side inspection report supports sourcing decisions, but it does not guarantee every unit is defect-free',
    'The report can check visible product, packing, label, carton, and agreed simple function points; it does not replace lab testing or certification review',
    'If specifications, approved samples, label files, or packing lists are missing, the report can only compare against available evidence',
    'Hidden defects, long-term durability, regulated compliance, legal claims, customs outcomes, and Amazon receiving approval require separate review',
    'If goods are unpacked, unfinished, inaccessible, moved to another warehouse, or blocked by the supplier, the report must state the limitation',
    'The report can help the buyer negotiate correction, but it does not force supplier cooperation by itself',
  ],
  relatedLinks: [
    {
      href: '/qc-inspection-china',
      label: 'QC Inspection China',
      note: 'Use this service page when finished goods need buyer-side inspection before balance payment or release.',
    },
    {
      href: '/china-qc-inspection-booking-checklist',
      label: 'China QC inspection booking checklist',
      note: 'Use this guide to prepare the files that make the report stronger before the inspector arrives.',
    },
    {
      href: '/qc-inspection-china-before-balance-payment',
      label: 'QC inspection before balance payment',
      note: 'Use this article when the report must support a hold or release decision before final payment.',
    },
    {
      href: '/sample-inspection-report-china',
      label: 'Sample inspection report',
      note: 'Preview the type of photo-backed evidence and scope notes buyers should expect.',
    },
    {
      href: '/before-forwarder-pickup-inspection-china',
      label: 'Before forwarder pickup',
      note: 'Use this stage page when the report must decide whether packed cartons can leave the supplier.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What does a buyer-side inspection report include?',
      answer:
        'It should include the order and inspection scope, documents used, sampled goods, product photos, defect findings, quantity and carton evidence, packing and label checks, scope limits, and a buyer decision note such as approve, hold, rework, relabel, repack, re-inspect, or delay pickup.',
    },
    {
      question: 'Should the report include photos?',
      answer:
        'Yes. A buyer-side report should include photos that prove the finding: overview photos, sampled units, defects, packing, carton marks, labels, accessories, and comparison evidence when buyer files are available.',
    },
    {
      question: 'Can an inspection report decide whether I should pay the balance?',
      answer:
        'It can support that decision by showing visible product, defect, quantity, packing, and label evidence before payment. It should not be treated as unlimited certainty, especially when files are missing or checks were outside the agreed scope.',
    },
    {
      question: 'Is a supplier-provided inspection report enough?',
      answer:
        'Sometimes it is useful background, but it is not the same as buyer-side evidence. Ask whether the report compared goods against your files, showed selected samples and cartons, documented defects, and stated scope limits.',
    },
    {
      question: 'Does a buyer-side inspection report replace lab testing?',
      answer:
        'No. Buyer-side inspection can check visible product, packing, label, carton, and simple agreed points. Lab testing, certification, legal compliance, customs, and regulated product claims require separate review.',
    },
    {
      question: 'Can the report include FNSKU, barcode, or carton label checks?',
      answer:
        'Yes, if you send the label files and placement requirements before inspection. The report can show whether labels are present, readable enough for visual review, placed correctly, and separated by SKU, but marketplace receiving approval is still outside normal onsite QC scope.',
    },
  ] satisfies FaqItem[],
}

export function makeBuyerSideInspectionReportArticleMetadata(): Metadata {
  const canonicalPath = buyerSideInspectionReportArticle.href

  return {
    title: buyerSideInspectionReportArticle.metaTitle,
    description: buyerSideInspectionReportArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: buyerSideInspectionReportArticle.metaTitle,
      description: buyerSideInspectionReportArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        ...getArticleOpenGraphImages(buyerSideInspectionReportArticle),
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: buyerSideInspectionReportArticle.metaTitle,
      description: buyerSideInspectionReportArticle.metaDescription,
      images: [buyerSideInspectionReportArticle.image.src],
    },
  }
}

export function makeBuyerSideInspectionReportArticleJsonLd() {
  return [
    makeArticleJsonLd(buyerSideInspectionReportArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Buyer-side inspection report sections',
      itemListElement: buyerSideInspectionReportArticle.reportModules.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        description: item.evidence,
      })),
    },
    makeFaqPageJsonLd(buyerSideInspectionReportArticle.faqs),
  ]
}
