import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { qcBeforeBalanceArticleHref } from '@/lib/site-links'
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

type CheckGroup = {
  checks: string[]
  title: string
}

type RelatedLink = {
  href: string
  label: string
  note: string
}

export const qcBeforeBalanceArticle = {
  href: qcBeforeBalanceArticleHref,
  title: 'QC Inspection in China Before Balance Payment: What to Check',
  metaTitle: 'QC Inspection Before Balance Payment',
  metaDescription:
    'Use this QC inspection China before balance payment checklist to check finished goods, defects, packaging, labels, cartons, and shipment readiness before final payment.',
  publishedDate: 'May 21, 2026',
  publishedDateIso: '2026-05-21T21:58:27-04:00',
  modifiedDate: 'June 6, 2026',
  modifiedDateIso: '2026-06-06T06:07:39-04:00',
  h1: 'QC Inspection in China Before Balance Payment: What to Check',
  eyebrow: 'QC inspection China before balance payment',
  image: {
    alt: 'China-side QC inspector checking finished goods packaging and carton labels before balance payment',
    height: 900,
    src: '/images/qc-inspection-china-before-balance-payment.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/qc-inspection-china-before-balance-payment.webp', width: 1600 },
    { height: 1200, src: '/images/qc-inspection-china-before-balance-payment-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/qc-inspection-china-before-balance-payment-1x1.webp', width: 1200 },
  ],
  intro:
    'Balance payment is the moment when many buyers still have leverage. Once final payment is released, wrong labels, visible defects, missing accessories, weak cartons, or unclear packing become harder to fix. This guide explains what overseas buyers should check before paying the balance while the goods are still in China.',
  answerSummary:
    'A useful QC inspection before balance payment should answer one practical buyer decision: pay, hold payment, request rework, sort the goods, re-inspect, or stop shipment release. The inspection should show what was checked, what was found, and what limits remain.',
  primaryCta: {
    href: '/qc-inspection-china',
    label: 'Book QC',
  },
  secondaryCta: {
    href: '#what-to-check',
    label: 'See what to check',
  },
  whatsappMessage: `Hi Agent Huang,

I want to book QC inspection before balance payment.

Product:
Factory location:
Order quantity / cartons:
Balance payment deadline:
Critical checkpoints:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#what-to-check', label: 'What to check' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#field-notes', label: 'Field notes' },
    { href: '#documents', label: 'What to send' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Finished quantity and carton count against the order',
    'Product appearance, workmanship, dimensions, color, logo, and visible defects',
    'Simple function checks when they are included in the agreed scope',
    'Accessories, manuals, inserts, spare parts, and set completeness',
    'Packaging, carton strength, carton marks, barcodes, and label placement',
    'FNSKU, carton labels, poly bag warnings, or SKU separation for Amazon-bound goods',
    'Packing list, commercial invoice, and shipment-readiness signals',
    'Defect photos and decision notes for payment, rework, sorting, or re-inspection',
  ],
  checkGroups: [
    {
      title: 'Finished goods evidence',
      checks: [
        'Bulk units compared with the purchase order, approved sample notes, and product photos',
        'Visible defects photographed with enough context to support repair, sorting, or replacement',
        'Simple function or fit checks only when they are safe and agreed before inspection',
      ],
    },
    {
      title: 'Packing and carton evidence',
      checks: [
        'Retail packaging, accessories, manuals, inserts, and set completeness before carton sealing',
        'Carton count, carton condition, packing method, shipping marks, and carton label placement',
        'SKU separation, barcode, FNSKU, warning label, or carton-label checks when shipment rules require them',
      ],
    },
    {
      title: 'Payment-release evidence',
      checks: [
        'Packing list, commercial invoice, balance deadline, pickup timing, and supplier correction window',
        'Clear report notes separating accepted points, failed points, scope limits, and recommended next action',
        'Decision support for pay, hold, rework, sort, relabel, re-inspect, or delay pickup',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-before-balance',
      title: 'Should I pay the balance after supplier photos only?',
      paragraphs: [
        'Before balance payment, run QC if the goods are finished enough to check product condition, cartons, labels, and packing evidence. Hold the balance when the report shows unresolved defects, missing accessories, weak cartons, wrong labels, or documents that do not match the shipment. Pay only when evidence supports release and the limits are clear.',
        'Supplier photos are useful pre-check signals, but they are not a buyer-side inspection. A balance-payment QC report should connect sampled goods, carton rows, label close-ups, packaging details, and defect examples to the practical decision in front of you.',
      ],
      bullets: [
        'Release the balance only when evidence supports shipment approval',
        'Hold payment when defects, missing items, or packing gaps are still unresolved',
        'Request rework or sorting before goods leave the supplier',
        'Schedule re-inspection when the correction affects a meaningful part of the order',
      ],
    },
    {
      id: 'what-to-check',
      title: 'What should a China QC inspection check before balance payment?',
      paragraphs: [
        'A China QC inspection before balance payment should check finished quantity, visible defects, specification match, accessories, retail packaging, carton strength, carton labels, shipping marks, and document consistency. The checklist should be tied to the buyer decision, because a beautiful sample does not prove the bulk goods are ready for final payment.',
        'For Agent Huang, the useful question is not whether one perfect sample looks good. The useful question is whether the bulk goods, cartons, labels, packing, and documents are consistent enough for the buyer to release the final payment.',
      ],
      bullets: [
        'Product condition: scratches, dents, stains, glue marks, poor finishing, wrong color, wrong logo, or visible workmanship problems',
        'Specification match: size, material, color, model, version, accessories, manuals, packaging, and any approved sample notes',
        'Quantity and cartons: finished quantity, carton count, packing method, mixed-SKU risk, and missing-carton signals',
        'Packaging and labels: retail box, poly bag, warning labels, barcodes, carton marks, shipping marks, and label placement',
        'Function checks: only the simple checks that were agreed before inspection and can be safely performed onsite',
        'Shipment readiness: packing list, commercial invoice, carton condition, loading access, and pickup timing signals',
      ],
    },
    {
      id: 'field-notes',
      title: 'What does Agent Huang see at the balance-payment stage?',
      paragraphs: [
        'A recurring balance-payment pattern is that supplier photos show neat finished units, but carton-level checks reveal a packing issue that would be costly after pickup. Common signals include an accessory missing from packed sets, a carton label placed on the wrong side, or mixed-SKU cartons that do not match the packing list. The practical decision is to hold payment until the supplier sorts, relabels, or repacks the affected goods and provides evidence that the correction was done.',
        'The most useful field note is not dramatic. It is a small mismatch caught while the buyer still has leverage: wrong barcode evidence, incomplete set packing, carton weakness, logo placement, or shipping marks that do not match the order.',
      ],
      bullets: [
        'Do not approve balance payment from close-up beauty photos only',
        'Ask for carton-level evidence when packaging or labels affect the shipment',
        'Treat missing accessories as an order issue, not a small packing detail',
        'Keep the inspection scope honest when lab testing or destructive checks are required',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Goods finished',
      whatWasChecked:
        'Finished quantity, sampled units, visible workmanship, appearance, color, size, logo, and order-specific details',
      buyerDecision: 'Pay balance, hold payment, or request rework before release',
    },
    {
      riskNode: 'Packaging ready',
      whatWasChecked:
        'Retail packaging, inserts, manuals, accessories, carton strength, carton marks, and packing method',
      buyerDecision: 'Approve packing, require repacking, or sort affected cartons',
    },
    {
      riskNode: 'Labels applied',
      whatWasChecked:
        'Barcodes, FNSKU labels, carton labels, warning labels, SKU separation, and label placement',
      buyerDecision: 'Approve pickup, relabel before pickup, or route through a prep warehouse',
    },
    {
      riskNode: 'Defects found',
      whatWasChecked:
        'Defect type, defect photos, approximate severity, affected samples, and whether the issue is correctable',
      buyerDecision: 'Request repair, replacement, sorting, discount discussion, or re-inspection',
    },
    {
      riskNode: 'Shipment release',
      whatWasChecked:
        'Packing list, commercial invoice, carton count, warehouse readiness, pickup contact, and visible shipment blockers',
      buyerDecision: 'Release goods, delay pickup, or escalate before freight is booked',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Purchase order, product specification, approved sample notes, packing requirements, label files, carton details, and balance-payment timing.',
    'Finished-goods, defect, quantity, packaging, label, carton, and document evidence checked while the buyer still controls the balance payment.',
    'China-side QC workflow judgment from connecting onsite findings to supplier correction, rework, sorting, re-inspection, or payment hold decisions.',
    'Scope limits that separate visible QC evidence from legal certainty, hidden defects, laboratory testing, certification, or future supplier behavior.',
  ],
  whatToSend: [
    'Purchase order, pro forma invoice, and final product specification',
    'Approved sample notes, product photos, and critical defect list',
    'Factory address, supplier contact, and preferred inspection date',
    'Packing list, carton count, carton label files, barcode files, and shipping marks',
    'FNSKU files, shipment plan, and prep requirements for Amazon FBA orders',
    'Balance payment deadline and the decision you need to make after the report',
  ],
  redFlags: [
    'The supplier asks for balance payment before showing full production or carton evidence',
    'Photos show only a few perfect units and avoid bulk goods or cartons',
    'Carton count, packing list, or label files are still changing near pickup',
    'The supplier says packaging or label mistakes can be fixed after pickup',
    'The supplier refuses buyer-side inspection or pushes to ship immediately',
    'Test reports or certificates do not match the exact model or material being shipped',
  ],
  scopeLimits: [
    'QC inspection before balance payment reduces visible product, packaging, label, and shipment-readiness risk, but it does not remove every hidden issue',
    'It does not replace laboratory testing, certification review, legal compliance, or customs advice',
    'It does not guarantee defects outside the agreed sampling and inspection scope will be found',
    'It does not guarantee Amazon receiving approval, marketplace listing approval, or customer review outcomes',
    'It does not replace clear product specifications; vague requirements create vague inspection results',
    'It does not resolve supplier disputes by itself, but it gives photo-backed evidence for the buyer decision',
  ],
  relatedLinks: [
    {
      href: '/qc-inspection-china',
      label: 'QC Inspection China',
      note: 'Book buyer-side QC when goods are finished or nearly finished before balance payment.',
    },
    {
      href: '/before-balance-payment-qc-china',
      label: 'Before Balance Payment QC China',
      note: 'Use this stage page when your immediate decision is whether to release final payment.',
    },
    {
      href: '/sample-inspection-report-china',
      label: 'Sample Inspection Report',
      note: 'Preview the photo evidence and decision notes buyers can receive.',
    },
    {
      href: '/before-forwarder-pickup-inspection-china',
      label: 'Before Forwarder Pickup',
      note: 'Use when cartons are packed and the next risk is pickup or warehouse handover.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'When should I book QC inspection before balance payment?',
      answer:
        'Book it when production is finished or close enough that products, cartons, packaging, and labels are available to check before you release the final payment.',
    },
    {
      question: 'What should be checked before I pay the balance to a China supplier?',
      answer:
        'Check finished quantity, visible product defects, specifications, accessories, packaging, labels, carton marks, packing list, and shipment-readiness evidence before paying the balance.',
    },
    {
      question: 'Can Huang Sourcing check labels and packaging during QC?',
      answer:
        'Yes. Send barcode files, carton label requirements, packaging specs, and any FBA or marketplace prep rules before inspection so they can be included in the scope.',
    },
    {
      question: 'Does QC inspection replace lab testing?',
      answer:
        'No. QC inspection is a buyer-side onsite check for visible issues and agreed simple checks. Lab testing, certification, and regulated compliance review are separate scopes.',
    },
    {
      question: 'What if the inspection finds defects before balance payment?',
      answer:
        'Use the report to hold payment, request rework, sort affected goods, replace missing items, negotiate next steps, or schedule a re-inspection before pickup.',
    },
  ] satisfies FaqItem[],
}

export function makeQcBeforeBalanceArticleMetadata(): Metadata {
  const canonicalPath = qcBeforeBalanceArticle.href

  return {
    title: qcBeforeBalanceArticle.metaTitle,
    description: qcBeforeBalanceArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: qcBeforeBalanceArticle.metaTitle,
      description: qcBeforeBalanceArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        ...getArticleOpenGraphImages(qcBeforeBalanceArticle),
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: qcBeforeBalanceArticle.metaTitle,
      description: qcBeforeBalanceArticle.metaDescription,
      images: [qcBeforeBalanceArticle.image.src],
    },
  }
}

export function makeQcBeforeBalanceArticleJsonLd() {
  return [
    makeArticleJsonLd(qcBeforeBalanceArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'QC inspection China before balance payment checklist',
      itemListElement: qcBeforeBalanceArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(qcBeforeBalanceArticle.faqs),
  ]
}
