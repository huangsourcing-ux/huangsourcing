import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { forwarderPickupChinaRisksArticleHref } from '@/lib/site-links'
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

export const forwarderPickupChinaRisksArticle = {
  href: forwarderPickupChinaRisksArticleHref,
  title: 'What Can Go Wrong Before Forwarder Pickup in China?',
  metaTitle: 'Forwarder Pickup China Risks',
  metaDescription:
    'See what can go wrong before forwarder pickup in China: carton count gaps, wrong labels, damaged cartons, pickup address changes, and shipment blockers.',
  publishedDate: 'May 29, 2026',
  publishedDateIso: '2026-05-29T09:00:00-04:00',
  h1: 'What Can Go Wrong Before Forwarder Pickup in China?',
  eyebrow: 'Forwarder pickup China risks',
  image: {
    alt: 'Agent Huang checking damaged export cartons and pickup paperwork before forwarder pickup in China',
    height: 900,
    src: '/images/forwarder-pickup-china-risks.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/forwarder-pickup-china-risks.webp', width: 1600 },
    { height: 1200, src: '/images/forwarder-pickup-china-risks-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/forwarder-pickup-china-risks-1x1.webp', width: 1200 },
  ],
  intro:
    'Before forwarder pickup in China, the goods may look finished but still not be ready to leave the supplier. Carton count gaps, wrong labels, damaged boxes, address changes, unfinished packing, or inconsistent documents can turn a simple pickup into a shipment delay.',
  answerSummary:
    'The buyer decision is practical: release pickup, delay pickup, ask the supplier to correct, hold shipment, or re-check. A before-pickup check should compare carton evidence, label files, packing documents, warehouse readiness, and forwarder timing while the supplier can still fix visible problems.',
  primaryCta: {
    href: '/before-forwarder-pickup-inspection-china',
    label: 'Check Before Pickup',
  },
  secondaryCta: {
    href: '#decision-table',
    label: 'See pickup risks',
  },
  whatsappMessage: `Hi Agent Huang,

I want to check pickup risk before my forwarder collects goods in China.

Product:
Factory / warehouse location:
Cartons / units:
Pickup date:
Forwarder contact:
Main concern:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#what-can-go-wrong', label: 'What can go wrong' },
    { href: '#cartons-labels', label: 'Cartons and labels' },
    { href: '#handover-documents', label: 'Handover documents' },
    { href: '#decision-table', label: 'Pickup decisions' },
    { href: '#field-notes', label: 'Field notes' },
    { href: '#evidence-basis', label: 'Evidence basis' },
    { href: '#documents', label: 'What to send' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Carton count does not match the packing list, purchase order, or supplier message',
    'Cartons are crushed, wet, weakly sealed, poorly strapped, or not fit for pickup',
    'Shipping marks, carton labels, barcodes, FNSKU labels, or SKU labels are missing or wrong',
    'Mixed SKUs, loose accessories, or unclear carton separation could confuse warehouse receiving',
    'Pickup address, warehouse contact, loading time, or local delivery responsibility changed late',
    'Goods are not staged, packing is unfinished, or warehouse access is not ready for the driver',
    'Packing list, commercial invoice, gross weight, volume, or carton count information conflicts',
    'Supplier pushes pickup before buyer-side photos, correction evidence, or a re-check are available',
  ],
  sections: [
    {
      id: 'what-can-go-wrong',
      title: 'Why the pickup window is a buyer risk point',
      paragraphs: [
        'Forwarder pickup is the handover moment when goods start moving away from the supplier. Before that moment, the buyer still has a realistic chance to ask for carton replacement, relabeling, packing-list correction, SKU separation, or a short re-check.',
        'After pickup, the same problem may become a warehouse fee, a delayed shipment, a relabeling job, a dispute about damage, or a missing-carton argument. That is why the before-pickup check should focus on shipment readiness, not just whether the product was manufactured.',
      ],
      bullets: [
        'Approve pickup only when carton, label, document, and loading evidence match',
        'Delay pickup when the supplier cannot prove final carton count or readiness',
        'Request correction when labels, carton condition, or packing-list signals create shipment risk',
        'Re-check when supplier fixes affect meaningful cartons, SKUs, or shipment documents',
      ],
    },
    {
      id: 'cartons-labels',
      title: 'Carton and label problems that can block pickup',
      paragraphs: [
        'Carton-level issues often look small until the forwarder receives the shipment. Wrong shipping marks, missing barcodes, damaged cartons, weak sealing, mixed SKUs, or unclear FBA labels can create downstream warehouse and receiving problems.',
        'A useful pickup check compares actual cartons against the packing list and label files. It should show broad carton rows, examples of labels, any damage, SKU separation, and whether cartons are physically ready to be handed over.',
      ],
      bullets: [
        'Damaged, wet, crushed, soft, or poorly sealed cartons',
        'Shipping marks, carton labels, SKU labels, barcodes, or FNSKU labels applied incorrectly',
        'Mixed cartons, unclear SKU separation, or missing carton-level identifiers',
        'Supplier photos showing only clean cartons instead of the full staged shipment',
        'Palletizing, strapping, shrink wrap, or loading readiness that does not match the pickup plan',
      ],
    },
    {
      id: 'handover-documents',
      title: 'Documents, address, and timing issues before handover',
      paragraphs: [
        'A shipment can be physically packed and still fail the pickup decision if the documents or handover details do not line up. Packing list, commercial invoice, carton count, gross weight, volume, pickup address, warehouse contact, and loading window all affect the forwarder handover.',
        'Late changes deserve attention. If the pickup address changes, the carton count changes, or the supplier asks the driver to collect before evidence is shared, the buyer should slow down and ask what changed before approving movement.',
      ],
      bullets: [
        'Packing list and actual carton count do not match',
        'Commercial invoice, gross weight, volume, or SKU list conflicts with warehouse evidence',
        'Pickup address, contact person, or loading time changes without a clear reason',
        'The warehouse is not ready, goods are not staged, or access for the driver is unclear',
        'Supplier and forwarder each expect the other side to solve local delivery or waiting-fee issues',
      ],
    },
    {
      id: 'field-notes',
      title: 'Agent Huang field notes before forwarder pickup',
      paragraphs: [
        'The most common pickup risk pattern is approving movement from a few clean photos. A buyer needs enough evidence to know whether the full shipment, not one easy carton, is actually ready for handover.',
        'From the China-side workflow view, pickup approval should be tied to a visible decision record: what was checked, what did not match, what the supplier corrected, and whether a re-check is needed before the driver arrives.',
      ],
      bullets: [
        'Treat changed pickup addresses as a risk signal until explained',
        'Ask for carton-count evidence when the packing list was revised near pickup',
        'Do not accept label correction promises without photo evidence when labels affect receiving',
        'Keep the forwarder pickup window movable until shipment blockers are cleared',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Carton count mismatch',
      whatWasChecked:
        'Actual carton count, units per carton, packing list, purchase order, supplier message, and staged warehouse photos',
      buyerDecision: 'Delay pickup, correct the packing list, find missing cartons, or re-check after correction',
    },
    {
      riskNode: 'Damaged cartons',
      whatWasChecked:
        'Crushed corners, wet cartons, torn surfaces, weak sealing, poor strapping, pallet condition, and whether damage affects handover',
      buyerDecision: 'Request repacking, replace cartons, separate affected cartons, or hold pickup',
    },
    {
      riskNode: 'Wrong labels or shipping marks',
      whatWasChecked:
        'Carton labels, shipping marks, SKU labels, barcodes, FNSKU labels when relevant, and placement against buyer files',
      buyerDecision: 'Relabel before pickup, route to prep support, or re-check label corrections',
    },
    {
      riskNode: 'Mixed SKU or FBA risk',
      whatWasChecked:
        'SKU separation, carton identifiers, shipment labels, FNSKU files, accessories, bundle notes, and carton-level evidence',
      buyerDecision: 'Hold shipment, sort cartons, relabel, separate mixed goods, or use prep support',
    },
    {
      riskNode: 'Pickup address or timing changed',
      whatWasChecked:
        'Factory or warehouse address, supplier contact, forwarder contact, loading time, local delivery duty, and waiting-fee risk',
      buyerDecision: 'Confirm the new plan, change pickup time, pause collection, or escalate logistics risk',
    },
    {
      riskNode: 'Goods not staged',
      whatWasChecked:
        'Warehouse access, loading bay readiness, cartons staged for pickup, unfinished packing, and whether the driver can collect without confusion',
      buyerDecision: 'Delay pickup until goods are staged, ask for readiness photos, or schedule a re-check',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Buyer-stage facts: pickup window, forwarder contact, balance payment status, shipment urgency, and whether goods can still be corrected before leaving the supplier.',
    'Document evidence: purchase order, packing list, commercial invoice, carton count, gross weight, volume, label files, shipping marks, and pickup address.',
    'Onsite and photo evidence: staged carton rows, carton condition, label placement, SKU separation, damaged-carton examples, warehouse access, and loading readiness.',
    'China-side handover workflow judgment from checking whether the supplier, buyer, and forwarder are aligned before freight moves.',
  ],
  whatToSend: [
    'Purchase order, invoice, packing list, SKU list, and expected final carton count',
    'Carton labels, shipping marks, barcode files, FNSKU files, shipment labels, and label placement requirements',
    'Factory or warehouse address, supplier contact, forwarder contact, pickup date, and pickup time window',
    'Supplier photos of cartons, staged goods, labels, packing, and any damaged or corrected cartons',
    'Gross weight, volume, carton dimensions, pallet details, and local delivery responsibilities if available',
    'Main buyer decision: approve pickup, delay pickup, request correction, relabel, repack, or re-check',
  ],
  redFlags: [
    'The supplier says pickup is ready but cannot confirm final carton count',
    'Only close-up carton photos are shared, with no broad warehouse or staged-shipment view',
    'The packing list changes shortly before pickup without a clear explanation',
    'Carton labels, shipping marks, barcodes, or FNSKU files were changed late',
    'The pickup address is different from the inspected or quoted supplier address',
    'Cartons are damaged, wet, weakly sealed, or not staged for loading',
    'The supplier pushes the forwarder to collect before buyer-side evidence is available',
    'Supplier, warehouse, and forwarder contacts disagree on loading time or responsibility',
  ],
  scopeLimits: [
    'A before-pickup check reduces visible shipment-readiness risk, but it does not prove every hidden product condition inside sealed cartons',
    'It does not replace product testing, certification review, customs advice, legal contract review, or marketplace compliance checks',
    'It does not guarantee forwarder performance, port timing, customs clearance, warehouse receiving, or Amazon acceptance',
    'It can compare against files and evidence provided; missing specs, late labels, or vague packing instructions limit what can be judged',
    'It supports pickup decisions, but it cannot force supplier correction or remove all freight and receiving risk after goods leave the supplier',
  ],
  relatedLinks: [
    {
      href: '/before-forwarder-pickup-inspection-china',
      label: 'Before Forwarder Pickup Inspection',
      note: 'Use when the immediate buyer decision is whether forwarder collection should proceed.',
    },
    {
      href: '/pre-shipment-inspection-china-before-pickup',
      label: 'Pre-Shipment Inspection Before Pickup',
      note: 'Use when packed goods need carton, label, document, and handover evidence.',
    },
    {
      href: '/china-pre-shipment-inspection',
      label: 'China Pre-Shipment Inspection',
      note: 'Use for final buyer-side checks before shipment release or pickup approval.',
    },
    {
      href: '/production-vs-pre-shipment-inspection',
      label: 'Production vs Pre-Shipment Inspection',
      note: 'Use when you are deciding whether to inspect earlier, before shipment, or both.',
    },
    {
      href: '/china-qc-inspection-booking-checklist',
      label: 'China QC Inspection Booking Checklist',
      note: 'Use when you need to prepare the files before confirming inspection scope.',
    },
    {
      href: '/sample-inspection-report-china',
      label: 'Sample Inspection Report',
      note: 'Preview how photo evidence and decision notes can be presented.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What can go wrong before forwarder pickup in China?',
      answer:
        'Common problems include carton count mismatches, damaged cartons, wrong labels, missing shipping marks, mixed SKUs, unfinished packing, changed pickup addresses, inconsistent documents, and supplier pressure to release goods before evidence is available.',
    },
    {
      question: 'Should I inspect before forwarder pickup?',
      answer:
        'Yes, if carton count, labels, shipping marks, packing list, carton condition, SKU separation, pickup address, or handover readiness could affect your shipment. The check is most useful while the supplier can still correct visible issues.',
    },
    {
      question: 'Can label or carton problems be fixed after pickup?',
      answer:
        'Sometimes, but it is usually harder and may involve warehouse fees, relabeling fees, delays, or disputes about who caused the problem. Correcting visible carton and label issues before pickup usually gives the buyer more leverage.',
    },
    {
      question: 'What documents should be checked before pickup?',
      answer:
        'Check the purchase order, packing list, commercial invoice, carton count, SKU list, gross weight, volume, shipping marks, label files, pickup address, supplier contact, forwarder contact, and loading window.',
    },
    {
      question: 'Is a before-pickup check the same as product QC?',
      answer:
        'No. Product QC focuses on product condition and defects within the agreed scope. A before-pickup check focuses more on shipment readiness, cartons, labels, documents, staging, and the handover decision.',
    },
    {
      question: 'What should I send before booking a before-pickup check?',
      answer:
        'Send the PO, packing list, SKU list, label files, shipping marks, carton count, warehouse address, supplier contact, forwarder contact, pickup date, and the decision you need after the check.',
    },
  ] satisfies FaqItem[],
}

export function makeForwarderPickupChinaRisksArticleMetadata(): Metadata {
  const canonicalPath = forwarderPickupChinaRisksArticle.href

  return {
    title: forwarderPickupChinaRisksArticle.metaTitle,
    description: forwarderPickupChinaRisksArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: forwarderPickupChinaRisksArticle.metaTitle,
      description: forwarderPickupChinaRisksArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        ...getArticleOpenGraphImages(forwarderPickupChinaRisksArticle),
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: forwarderPickupChinaRisksArticle.metaTitle,
      description: forwarderPickupChinaRisksArticle.metaDescription,
      images: [forwarderPickupChinaRisksArticle.image.src],
    },
  }
}

export function makeForwarderPickupChinaRisksArticleJsonLd() {
  return [
    makeArticleJsonLd(forwarderPickupChinaRisksArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Forwarder pickup China risk checklist',
      itemListElement: forwarderPickupChinaRisksArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(forwarderPickupChinaRisksArticle.faqs),
  ]
}
