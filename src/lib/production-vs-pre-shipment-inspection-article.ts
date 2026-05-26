import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { productionVsPreShipmentInspectionArticleHref } from '@/lib/site-links'
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

export const productionVsPreShipmentInspectionArticle = {
  href: productionVsPreShipmentInspectionArticleHref,
  title: 'When Should You Inspect Goods: During Production or Before Shipment?',
  metaTitle: 'Production vs Pre-Shipment Inspection',
  metaDescription:
    'Compare during-production inspection vs pre-shipment inspection in China. Know when to inspect, hold payment, request rework, or release shipment.',
  publishedDate: 'May 26, 2026',
  publishedDateIso: '2026-05-26T09:00:00-04:00',
  h1: 'When Should You Inspect Goods: During Production or Before Shipment?',
  eyebrow: 'Production vs pre-shipment inspection',
  image: {
    alt: 'Agent Huang checking in-process goods and packed export cartons to choose inspection timing in China',
    height: 900,
    src: '/images/production-vs-pre-shipment-inspection.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/production-vs-pre-shipment-inspection.webp', width: 1600 },
    { height: 1200, src: '/images/production-vs-pre-shipment-inspection-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/production-vs-pre-shipment-inspection-1x1.webp', width: 1200 },
  ],
  intro:
    'Inspect during production when the buyer still needs time to catch process, material, color, component, or assembly problems before the order is finished. Inspect before shipment when the goods are finished or packed and the buyer needs evidence before balance payment, pickup, or shipment release.',
  answerSummary:
    'The right timing depends on the buyer decision. During-production inspection helps decide whether to correct the order while production is still moving. Pre-shipment inspection helps decide whether to release balance payment, approve pickup, request final rework, or re-check before goods leave China. For first orders, customized products, tight tolerances, or suppliers with unclear quality control, both checks may be safer.',
  primaryCta: {
    href: '/qc-inspection-china',
    label: 'Plan Inspection Timing',
  },
  secondaryCta: {
    href: '#decision-table',
    label: 'Compare inspection timing',
  },
  whatsappMessage: `Hi Agent Huang,

I need help deciding whether to inspect during production, before shipment, or both.

Product:
Supplier / factory location:
Order quantity:
Production stage:
Balance payment or pickup deadline:
Main concern:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#timing-matters', label: 'Timing leverage' },
    { href: '#during-production', label: 'During production' },
    { href: '#before-shipment', label: 'Before shipment' },
    { href: '#decision-table', label: 'Timing decisions' },
    { href: '#field-notes', label: 'Field notes' },
    { href: '#evidence-basis', label: 'Evidence basis' },
    { href: '#documents', label: 'What to send' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Inspect during production when defects can still be corrected before the full order is finished',
    'Inspect before shipment when finished goods, packaging, labels, cartons, and pickup readiness need final buyer-side evidence',
    'Use during-production inspection for custom specs, new suppliers, repeated sample concerns, tight tolerances, or materials that can drift during bulk production',
    'Use pre-shipment inspection before releasing the balance, approving pickup, or allowing cartons to leave the supplier',
    'Use both when a first order is important, correction time is short, or the cost of late discovery is high',
    'Neither timing replaces lab testing, certification review, legal compliance, or a clear written product specification',
  ],
  sections: [
    {
      id: 'timing-matters',
      title: 'Why inspection timing changes buyer leverage',
      paragraphs: [
        'Inspection timing is not just a calendar question. It changes what the buyer can still do. During production, the buyer may still ask the supplier to correct materials, process, assembly, finish, or packing direction before all units are completed. Before shipment, the buyer is usually deciding whether the finished order can move, whether payment should be released, or whether correction is still required.',
        'If the buyer waits until everything is packed, some problems may still be fixable, but correction becomes slower and more expensive. If the buyer inspects too early without a clear production stage, the check may not reflect final product, final packing, or final shipment readiness.',
      ],
      bullets: [
        'During production protects correction leverage while goods are still being made',
        'Before shipment protects payment, pickup, and shipment-release decisions',
        'The inspection scope should match the next decision, not just the nearest available date',
        'A weak product specification makes either timing less useful because there is less evidence to compare against',
      ],
    },
    {
      id: 'during-production',
      title: 'When during-production inspection fits best',
      paragraphs: [
        'During-production inspection fits when the buyer needs early evidence while the order is still moving through the factory. It is most useful when materials, color, logo, assembly method, dimensions, surface finish, or packing direction can drift after sample approval.',
        'The goal is not to approve shipment. The goal is to catch meaningful issues while the supplier still has time to adjust the process, separate affected units, remake parts, or confirm whether the order should continue under the same instructions.',
      ],
      bullets: [
        'New supplier or first production order after sample approval',
        'Custom product, private label, logo, color, finish, accessory, or assembly details',
        'Early signs that the supplier is changing materials, packaging, labels, or subcontracting steps',
        'Production schedule is long enough that a mid-production correction can still matter',
        'Buyer needs evidence before allowing the supplier to continue producing the full order',
      ],
    },
    {
      id: 'before-shipment',
      title: 'When pre-shipment inspection fits best',
      paragraphs: [
        'Pre-shipment inspection fits when goods are finished or nearly finished and the buyer needs final evidence before balance payment, pickup, or shipment release. It can check sampled goods, visible defects, quantity signals, packaging, labels, carton condition, shipping marks, and readiness for handover.',
        'This timing is strong when the buyer needs a final go, hold, rework, relabel, repack, or re-check decision. It is weaker for problems that should have been caught earlier, such as wrong material choice or a process defect already repeated across the full order.',
      ],
      bullets: [
        'Supplier says goods are finished and asks for the balance payment',
        'Forwarder pickup is being scheduled and cartons need readiness evidence',
        'Packaging, barcode, FNSKU, carton label, shipping mark, or SKU separation risk matters',
        'Buyer needs report photos before approving shipment release',
        'The inspection decision is approve, hold payment, request rework, delay pickup, or re-check',
      ],
    },
    {
      id: 'field-notes',
      title: 'Agent Huang field notes on choosing one timing or both',
      paragraphs: [
        'The risky pattern is assuming one inspection timing can answer every question. A mid-production check can show whether the factory is following the right direction, but it cannot fully confirm final packing and shipment readiness. A pre-shipment check can show finished goods and cartons, but it may be late if the same defect already spread across most of the production run.',
        'From a China-side workflow view, the buyer should look at the next money or movement decision. If the supplier is still making goods and quality direction is uncertain, inspect during production. If the goods are finished and the next step is payment, pickup, or shipment release, inspect before shipment. If both moments carry real risk, split the scope instead of forcing one report to do too much.',
      ],
      bullets: [
        'Do not use an early production check as proof that final cartons are shipment-ready',
        'Do not use a final pre-shipment report as a cure for unclear specs agreed too late',
        'When labels, cartons, and SKU separation matter, keep a final before-shipment check even if production was checked earlier',
        'When the supplier changes materials, packing method, or subcontracting plan, inspect sooner instead of waiting for all goods to finish',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'First production order',
      whatWasChecked:
        'Approved sample notes, production line status, material, color, finish, logo, assembly method, early defects, and supplier correction plan',
      buyerDecision: 'Inspect during production, ask for correction, continue production, or schedule a follow-up before shipment',
    },
    {
      riskNode: 'Custom or tolerance-sensitive product',
      whatWasChecked:
        'Critical dimensions, material notes, finish, functional checkpoints, workmanship, accessory fit, and sample comparison limits',
      buyerDecision: 'Use during-production inspection so the supplier can correct direction before all units are completed',
    },
    {
      riskNode: 'Finished goods before balance',
      whatWasChecked:
        'Finished product samples, visible defects, quantity signals, packaging, labels, carton marks, photos, and agreed buyer requirements',
      buyerDecision: 'Use pre-shipment inspection to release balance, hold payment, request rework, or re-check',
    },
    {
      riskNode: 'Pickup or shipment release',
      whatWasChecked:
        'Carton count, packing list, carton labels, shipping marks, FNSKU labels when relevant, carton condition, and pickup readiness',
      buyerDecision: 'Approve pickup, delay pickup, relabel, repack, or hold shipment before goods leave China',
    },
    {
      riskNode: 'High-risk first order',
      whatWasChecked:
        'Early production direction plus final finished goods, labels, cartons, packing list, and shipment readiness',
      buyerDecision: 'Use both checks when the buyer needs early correction evidence and final release evidence',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Buyer-stage facts: sample approval status, production percentage, balance payment deadline, pickup window, and shipment release pressure.',
    'Product and order evidence: PO, product specification, approved sample notes, defect concerns, label files, packing list, carton requirements, and supplier readiness claims.',
    'Onsite signals that differ by timing: production line output, in-process defects, material or assembly direction, finished goods, packed cartons, label application, and handover readiness.',
    'China-side inspection workflow judgment about what can still be corrected during production versus what can only be confirmed once goods are finished or packed.',
  ],
  whatToSend: [
    'Purchase order, pro forma invoice, product specification, approved sample notes, and defect concerns',
    'Current production status, production percentage, expected finish date, and supplier photos if available',
    'Factory address, supplier contact, inspection access details, and preferred inspection date or date range',
    'Packing list, carton count, carton marks, retail packaging, barcode files, FNSKU files, and label placement rules when relevant',
    'Balance payment deadline, forwarder pickup window, shipment deadline, and what result should trigger rework or re-check',
    'Main buyer concern: product quality direction, final shipment readiness, payment release, pickup approval, or both',
  ],
  redFlags: [
    'The supplier asks for balance payment before finished goods, packing, or labels can be checked',
    'The supplier says the order is almost finished but cannot confirm production percentage or finished quantity',
    'Materials, color, logo, packaging, or label files are still changing during production',
    'The approved sample is vague, missing, or different from current production photos',
    'The pickup date is being pushed before carton count, packing list, or label evidence is available',
    'The supplier refuses inspection access until the order is fully packed and payment is due',
    'A first-order supplier has no clear QC records or pushes only staged sample photos',
  ],
  scopeLimits: [
    'During-production inspection reduces early process and direction risk, but it cannot fully approve final packed shipment readiness',
    'Pre-shipment inspection reduces final product, packaging, label, carton, and release risk, but it may be too late to cheaply correct repeated production defects',
    'Neither timing replaces laboratory testing, certification review, legal compliance, customs advice, or contract enforcement',
    'Inspection can compare against the evidence provided; vague specs, missing samples, or late label files limit what can be judged',
    'A report supports buyer decisions, but it does not force supplier correction or guarantee future shipment performance',
    'Amazon receiving, marketplace compliance, customs clearance, and hidden internal defects remain separate risks unless specifically scoped elsewhere',
  ],
  relatedLinks: [
    {
      href: '/qc-inspection-china',
      label: 'QC Inspection China',
      note: 'Use when finished or in-process goods need buyer-side quality evidence in China.',
    },
    {
      href: '/qc-inspection-china-before-balance-payment',
      label: 'QC Inspection Before Balance Payment',
      note: 'Use when the immediate decision is whether to release final supplier payment.',
    },
    {
      href: '/pre-shipment-inspection-china-before-pickup',
      label: 'Pre-Shipment Inspection Before Pickup',
      note: 'Use when packed goods need carton, label, document, and pickup-readiness evidence.',
    },
    {
      href: '/china-qc-inspection-booking-checklist',
      label: 'China QC Inspection Booking Checklist',
      note: 'Use when you need to prepare files before confirming an inspection scope.',
    },
    {
      href: '/china-pre-shipment-inspection',
      label: 'China Pre-Shipment Inspection',
      note: 'Use for final buyer-side checks before shipment release or forwarder pickup.',
    },
    {
      href: '/sample-inspection-report-china',
      label: 'Sample Inspection Report China',
      note: 'Preview how inspection findings, photos, and decision notes can be presented.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Should I inspect goods during production or before shipment?',
      answer:
        'Inspect during production when you need early correction leverage before the order is finished. Inspect before shipment when goods are finished or packed and you need evidence before balance payment, pickup, or shipment release.',
    },
    {
      question: 'When does during-production inspection make sense?',
      answer:
        'It makes sense for new suppliers, first orders, custom products, tight tolerances, uncertain materials, logo or color risk, or any situation where catching a repeated defect early can still change the production direction.',
    },
    {
      question: 'When is pre-shipment inspection the better choice?',
      answer:
        'Pre-shipment inspection is better when the goods are finished or nearly finished and the buyer needs to decide whether to release balance payment, approve pickup, request rework, relabel, repack, or re-check.',
    },
    {
      question: 'Do I need both during-production and pre-shipment inspection?',
      answer:
        'Use both when the first order is important, the product is customized, defects would be expensive to fix late, or final carton, label, and shipment readiness still need buyer-side evidence before goods leave China.',
    },
    {
      question: 'Can pre-shipment inspection catch every problem if I skip during-production inspection?',
      answer:
        'No. It can catch visible final product, packaging, label, carton, and shipment-readiness issues within scope, but some repeated process or material problems are easier and cheaper to catch during production.',
    },
    {
      question: 'What should I send Huang Sourcing to choose the right timing?',
      answer:
        'Send the PO, product specs, approved sample notes, production status, supplier photos, factory address, balance deadline, pickup window, label files, packing requirements, and the decision you need after inspection.',
    },
  ] satisfies FaqItem[],
}

export function makeProductionVsPreShipmentInspectionArticleMetadata(): Metadata {
  const canonicalPath = productionVsPreShipmentInspectionArticle.href

  return {
    title: productionVsPreShipmentInspectionArticle.metaTitle,
    description: productionVsPreShipmentInspectionArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: productionVsPreShipmentInspectionArticle.metaTitle,
      description: productionVsPreShipmentInspectionArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        ...getArticleOpenGraphImages(productionVsPreShipmentInspectionArticle),
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: productionVsPreShipmentInspectionArticle.metaTitle,
      description: productionVsPreShipmentInspectionArticle.metaDescription,
      images: [productionVsPreShipmentInspectionArticle.image.src],
    },
  }
}

export function makeProductionVsPreShipmentInspectionArticleJsonLd() {
  return [
    makeArticleJsonLd(productionVsPreShipmentInspectionArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Production vs pre-shipment inspection timing checklist',
      itemListElement: productionVsPreShipmentInspectionArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(productionVsPreShipmentInspectionArticle.faqs),
  ]
}
