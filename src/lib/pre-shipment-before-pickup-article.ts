import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { preShipmentBeforePickupArticleHref } from '@/lib/site-links'
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

export const preShipmentBeforePickupArticle = {
  href: preShipmentBeforePickupArticleHref,
  title: 'Pre-Shipment Inspection China Before Forwarder Pickup',
  metaTitle: 'Pre-Shipment Inspection China',
  metaDescription:
    'Use this pre-shipment inspection China before forwarder pickup guide to decide whether to release pickup, delay pickup, relabel, repack, or re-check cartons.',
  publishedDate: 'May 21, 2026',
  publishedDateIso: '2026-05-21T22:16:02-04:00',
  modifiedDate: 'June 16, 2026',
  modifiedDateIso: '2026-06-16T09:00:00-04:00',
  h1: 'Pre-Shipment Inspection China Before Forwarder Pickup',
  eyebrow: 'Pre-shipment inspection China',
  image: {
    alt: 'Agent Huang checking staged export cartons and pickup documents before forwarder pickup in China',
    height: 900,
    src: '/images/pre-shipment-inspection-china-before-pickup.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/pre-shipment-inspection-china-before-pickup.webp', width: 1600 },
    { height: 1200, src: '/images/pre-shipment-inspection-china-before-pickup-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/pre-shipment-inspection-china-before-pickup-1x1.webp', width: 1200 },
  ],
  intro:
    'Pre-shipment inspection in China is most useful when it protects a real forwarder pickup decision. Once the forwarder collects the goods, carton problems, label mistakes, missing boxes, and document gaps become harder to fix. This guide explains what overseas buyers should confirm before pickup while the supplier can still correct visible issues.',
  answerSummary:
    'A practical PSI before forwarder pickup should answer one buyer decision: release pickup, delay pickup, relabel, repack, hold shipment, or re-check. The inspection should show what was checked, what evidence was captured, what the supplier must fix, and what limits remain.',
  primaryCta: {
    href: '/china-pre-shipment-inspection',
    label: 'Book PSI',
  },
  secondaryCta: {
    href: '#what-to-confirm',
    label: 'See what to confirm',
  },
  whatsappMessage: `Hi Agent Huang,

I want to book pre-shipment inspection before pickup.

Product:
Factory / warehouse location:
Cartons / units:
Pickup date:
Forwarder contact:
Main concern:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#what-to-confirm', label: 'What to confirm' },
    { href: '#decision-table', label: 'Pickup decisions' },
    { href: '#field-notes', label: 'Field notes' },
    { href: '#documents', label: 'What to send' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Final carton count against the packing list and purchase order',
    'Carton condition, sealing, strapping, palletizing, and visible damage',
    'Shipping marks, carton labels, barcodes, FNSKU or shipment labels when relevant',
    'Product, SKU, color, model, and quantity signals from carton-level evidence',
    'Packing list, commercial invoice, pickup address, warehouse contact, and loading window',
    'Mixed-carton, missing-carton, wrong-label, or wrong-pickup-address risks',
    'Photos of cartons, labels, shipping marks, warehouse area, and pickup readiness',
    'Decision notes for release pickup, delay pickup, request correction, or re-check',
  ],
  sections: [
    {
      id: 'why-before-pickup',
      title: 'Should I release forwarder pickup after PSI?',
      paragraphs: [
        'Buyers should release forwarder pickup only when the PSI confirms cartons, labels, documents, and pickup details against the order evidence. If carton count, shipping marks, pickup address, or carton condition is still unclear, the practical decision is to delay pickup while the supplier can still correct visible shipment blockers.',
        'Before pickup, the buyer still has a chance to stop the handover, ask the supplier to correct labels, replace damaged cartons, update documents, or confirm missing quantities. After pickup, every correction may involve warehouse fees, relabeling fees, freight delays, and arguments about who caused the problem.',
      ],
      bullets: [
        'Release pickup when cartons, labels, documents, and loading details match',
        'Delay pickup when carton count, pickup address, or packing list is unclear',
        'Request correction when labels, marks, or carton condition create shipment risk',
        'Re-check when supplier corrections affect a meaningful part of the shipment',
      ],
    },
    {
      id: 'what-to-confirm',
      title: 'What buyers should confirm during pre-shipment inspection in China',
      paragraphs: [
        'Pre-shipment inspection in China should compare the packed shipment against the packing list, purchase order, label files, shipping marks, pickup address, and forwarder plan. The inspection should produce carton-level photos and notes that support a release, relabel, repack, hold, or re-check decision before goods leave supplier control.',
        'Agent Huang looks for consistency between the packing list, actual cartons, labels, shipping marks, warehouse contact, and pickup plan. A clean product inspection can still become a bad shipment if the wrong cartons are handed to the forwarder.',
      ],
      bullets: [
        'Carton count: actual cartons, units per carton, total quantity, missing cartons, and overpacked or underpacked cartons',
        'Carton condition: crushed corners, weak sealing, wet cartons, torn cartons, poor strapping, and damaged pallets',
        'Labels and marks: shipping marks, carton labels, SKU labels, barcodes, Amazon FBA labels, and label placement',
        'Documents: packing list, commercial invoice, supplier contact, forwarder contact, pickup address, and loading time',
        'Handover readiness: warehouse access, cartons staged for pickup, loading area, local delivery responsibility, and waiting-fee risk',
        'Shipment blockers: mixed SKUs, wrong labels, missing accessories, unfinished packing, or address changes without explanation',
      ],
    },
    {
      id: 'field-notes',
      title: 'What does Agent Huang see in before-pickup checks?',
      paragraphs: [
        'Agent Huang treats before-pickup PSI as a handover-risk check, not a warehouse photo request. The useful evidence is whether the cartons staged for pickup match the buyer documents, labels, and forwarder plan. When the evidence does not reconcile, the pickup decision should slow down before goods leave the supplier.',
        'A recurring before-pickup pattern Agent Huang sees is a supplier saying the shipment is ready while the packing list has just changed and only a few clean carton photos are shared. The buyer-side check is to compare the final carton count, shipping marks, carton labels, and staged-goods photos against the pickup plan. When the numbers or labels do not reconcile, the practical decision is to hold pickup or re-check after correction.',
        'Supplier photos often show the cartons that look easiest to photograph. Buyer-side PSI should show the broader handover situation: carton rows, labels, damage examples, packing-list comparison, and whether goods are physically ready for pickup.',
      ],
      bullets: [
        'Do not approve pickup from one clean carton photo',
        'Ask for carton-count evidence when the packing list changed recently',
        'Treat pickup address changes as a risk signal until explained',
        'Confirm labels before cartons leave the supplier, especially for FBA or multi-SKU shipments',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Cartons packed',
      whatWasChecked:
        'Carton count, carton sealing, carton condition, pallet or stack condition, visible damage, and whether cartons are staged for pickup',
      buyerDecision: 'Release pickup, request repacking, replace damaged cartons, or delay pickup',
    },
    {
      riskNode: 'Labels applied',
      whatWasChecked:
        'Shipping marks, carton labels, barcodes, FNSKU labels, SKU separation, and label placement',
      buyerDecision: 'Approve handover, relabel before pickup, or route through prep support',
    },
    {
      riskNode: 'Documents ready',
      whatWasChecked:
        'Packing list, commercial invoice, carton count, gross weight, volume, pickup address, and contact details',
      buyerDecision: 'Approve pickup, update documents, or pause until the supplier confirms details',
    },
    {
      riskNode: 'Forwarder pickup',
      whatWasChecked:
        'Loading window, warehouse access, supplier contact, forwarder contact, local delivery responsibility, and waiting-fee risk',
      buyerDecision: 'Release pickup, change pickup time, clarify cost responsibility, or escalate logistics risk',
    },
    {
      riskNode: 'Shipment blockers',
      whatWasChecked:
        'Mixed cartons, missing cartons, damaged cartons, wrong labels, unfinished packing, or unexplained pickup address changes',
      buyerDecision: 'Hold shipment, request correction, re-check, or separate affected cartons',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Final carton count, packing list, commercial invoice, shipping marks, pickup address, supplier contact, and forwarder timing shared before release.',
    'Carton, label, packing, quantity, and loading-readiness photo evidence captured while the supplier can still correct visible issues.',
    'China-side pre-shipment and forwarder handover workflow judgment from checking whether cartons are actually ready to leave the supplier.',
    'Buyer-stage decision context: release pickup, delay pickup, request correction, hold shipment, or re-check after supplier updates.',
  ],
  whatToSend: [
    'Purchase order, invoice, and packing list',
    'Final carton count, unit count, gross weight, and volume if available',
    'Product photos, SKU list, model or color list, and carton-level requirements',
    'Carton labels, shipping marks, barcode files, FNSKU files, and shipment labels when relevant',
    'Factory or warehouse address, supplier contact, forwarder contact, and pickup window',
    'Photos or notes about any recent supplier change, label change, packing-list change, or pickup urgency',
  ],
  redFlags: [
    'The supplier says goods are ready but cannot confirm final carton count',
    'Packing list, commercial invoice, and actual carton count do not match',
    'Carton labels or shipping marks are missing, unclear, or recently changed',
    'The pickup address is different from the verified supplier address without a clear reason',
    'Cartons are damaged, wet, weakly sealed, or not staged for pickup',
    'The supplier asks the forwarder to pick up before inspection photos or carton evidence are available',
    'Multi-SKU or FBA shipments are packed without clear SKU separation or label evidence',
  ],
  scopeLimits: [
    'Pre-shipment inspection before pickup reduces visible shipment-readiness risk, but it does not remove every hidden product issue',
    'It does not replace laboratory testing, certification review, legal compliance, or customs advice',
    'It does not guarantee defects inside sealed cartons unless opening and checking are included in the scope',
    'It does not guarantee forwarder performance, port schedules, customs clearance, or Amazon receiving approval',
    'It does not replace a clear packing list, label files, and pickup instructions from the buyer',
    'It gives buyer-side evidence for a pickup decision, not a guarantee that the shipment will have no future delay',
  ],
  relatedLinks: [
    {
      href: '/china-pre-shipment-inspection',
      label: 'China Pre-Shipment Inspection',
      note: 'Book PSI when packed goods need buyer-side evidence before shipment release.',
    },
    {
      href: '/before-forwarder-pickup-inspection-china',
      label: 'Before Forwarder Pickup',
      note: 'Use this stage page when the immediate decision is whether pickup should proceed.',
    },
    {
      href: '/sample-inspection-report-china',
      label: 'Sample Inspection Report',
      note: 'Preview the photo evidence and decision notes buyers can receive.',
    },
    {
      href: '/before-amazon-fba-shipment-china',
      label: 'Before Amazon FBA Shipment',
      note: 'Use when labels, SKU separation, and FBA shipment-plan risk need checking before release.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What is pre-shipment inspection in China?',
      answer:
        'Pre-shipment inspection in China is a buyer-side check before goods leave the supplier or warehouse. Before forwarder pickup, it can confirm visible product condition, cartons, labels, packing list, shipping marks, pickup address, and handover readiness depending on the agreed scope.',
    },
    {
      question: 'When should I book pre-shipment inspection before pickup?',
      answer:
        'Book it when goods are packed or nearly packed, before the forwarder collects them. The inspection is most useful while the supplier can still correct carton, label, document, or shipment-readiness issues.',
    },
    {
      question: 'What should buyers confirm before forwarder pickup?',
      answer:
        'Confirm final carton count, packing list, commercial invoice, carton condition, labels, shipping marks, pickup address, supplier contact, forwarder contact, loading window, and whether the cartons are physically staged for pickup.',
    },
    {
      question: 'Can PSI check Amazon FBA labels?',
      answer:
        'Yes, if the FNSKU files, carton labels, shipment plan, SKU list, and packing requirements are provided before inspection. FBA receiving approval is still a separate Amazon process.',
    },
    {
      question: 'Does pre-shipment inspection replace QC inspection before balance payment?',
      answer:
        'No. QC before balance payment focuses more on finished product and packaging evidence before final payment. PSI before pickup focuses on shipment readiness, cartons, labels, documents, and handover risk.',
    },
  ] satisfies FaqItem[],
}

export function makePreShipmentBeforePickupArticleMetadata(): Metadata {
  const canonicalPath = preShipmentBeforePickupArticle.href

  return {
    title: preShipmentBeforePickupArticle.metaTitle,
    description: preShipmentBeforePickupArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: preShipmentBeforePickupArticle.metaTitle,
      description: preShipmentBeforePickupArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        ...getArticleOpenGraphImages(preShipmentBeforePickupArticle),
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: preShipmentBeforePickupArticle.metaTitle,
      description: preShipmentBeforePickupArticle.metaDescription,
      images: [preShipmentBeforePickupArticle.image.src],
    },
  }
}

export function makePreShipmentBeforePickupArticleJsonLd() {
  return [
    makeArticleJsonLd(preShipmentBeforePickupArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Pre-shipment inspection China before forwarder pickup checklist',
      itemListElement: preShipmentBeforePickupArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(preShipmentBeforePickupArticle.faqs),
  ]
}
