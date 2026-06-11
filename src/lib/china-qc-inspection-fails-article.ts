import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { chinaQcInspectionFailsArticleHref } from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

type ArticleSection = {
  bullets?: string[]
  id: string
  paragraphs: string[]
  title: string
}

type CheckGroup = {
  checks: string[]
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

export const chinaQcInspectionFailsArticle = {
  href: chinaQcInspectionFailsArticleHref,
  title: 'What Happens If a China QC Inspection Fails?',
  metaTitle: 'China QC Inspection Failed: Next Steps',
  metaDescription:
    'Learn what to do after a China QC inspection fails: hold payment, confirm defects, request rework or sorting, collect evidence, and decide when to re-inspect.',
  publishedDate: 'June 11, 2026',
  publishedDateIso: '2026-06-11T00:00:08-04:00',
  h1: 'What Happens If a China QC Inspection Fails?',
  eyebrow: 'What happens if a China QC inspection fails?',
  image: {
    alt: 'China-side QC inspector separating failed product samples with red defect tags before a rework decision',
    height: 900,
    src: '/images/china-qc-inspection-fails.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/china-qc-inspection-fails.webp', width: 1600 },
    { height: 1200, src: '/images/china-qc-inspection-fails-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/china-qc-inspection-fails-1x1.webp', width: 1200 },
  ],
  intro:
    'A failed China QC inspection does not automatically mean the entire order must be rejected. It means the report found one or more results outside the agreed inspection criteria, and the buyer needs to stop automatic payment or shipment release long enough to confirm the defect pattern, correction path, and evidence required before the goods move.',
  answerSummary:
    'After a China QC inspection fails, hold balance payment and pickup unless the commercial decision is already clear. Confirm which SKU, defect class, sample result, packaging point, or label requirement failed. Then choose acceptance, rework, sorting, replacement, relabeling, repacking, or re-inspection based on the evidence and buyer risk.',
  primaryCta: {
    href: '/qc-inspection-china',
    label: 'Review failed inspection',
  },
  secondaryCta: {
    href: '#decision-table',
    label: 'See next-step matrix',
  },
  whatsappMessage: `Hi Agent Huang,

My China QC inspection failed and I need help reviewing the next step.

Product / SKU:
Inspection date:
Failed checkpoints:
Supplier response:
Balance payment status:
Pickup deadline:
Main decision needed:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#meaning', label: 'What failure means' },
    { href: '#immediate-actions', label: 'Immediate actions' },
    { href: '#rework-reinspection', label: 'Rework and re-inspection' },
    { href: '#decision-table', label: 'Decision matrix' },
    { href: '#field-notes', label: 'Field notes' },
    { href: '#evidence-basis', label: 'Evidence basis' },
    { href: '#documents', label: 'What to send' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Pause automatic balance payment, pickup approval, or shipment release until the failed points and buyer decision are clear',
    'Confirm the failure against the approved sample, product specification, defect classification, packaging files, label files, and any agreed sampling or AQL rule',
    'Identify the affected SKU, color, size, lot, carton range, defect type, and whether the finding appears isolated or repeated',
    'Request a written correction plan naming rework, sorting, replacement, relabeling, repacking, responsibility, timing, and proof',
    'Use supplier photos or video only for narrow, visible corrections that can be traced back to the failed checkpoints',
    'Schedule a re-inspection when correction affects a meaningful part of the order or cannot be confirmed reliably from supplier evidence alone',
  ],
  checkGroups: [
    {
      title: 'Hold release when',
      checks: [
        'The failure affects critical buyer requirements, repeated major defects, product function, missing parts, mixed SKUs, labels, or shipment readiness',
        'The supplier disputes the report without matching each failed checkpoint to evidence',
        'Balance payment or pickup would remove practical leverage before correction is verified',
      ],
    },
    {
      title: 'Correct and verify when',
      checks: [
        'Rework, sorting, replacement, relabeling, or repacking is practical while goods remain accessible in China',
        'The supplier can identify affected goods and provide a written correction method, responsible person, and completion timing',
        'A follow-up evidence set or re-inspection can verify the same failed checkpoints after correction',
      ],
    },
    {
      title: 'Release only when',
      checks: [
        'The buyer formally accepts the deviation, or correction evidence closes the failed points within the agreed scope',
        'Remaining defects and limits are understood rather than hidden behind a general supplier promise',
        'Payment, pickup, and shipment decisions match the residual commercial risk',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'meaning',
      title: 'Does a failed China QC inspection mean rejecting the whole order?',
      paragraphs: [
        'A failed China QC inspection means the sampled goods or checked shipment evidence did not meet the agreed acceptance criteria. It does not automatically prove every unit is defective or require full rejection. The buyer should identify what failed, how broadly it may apply, and whether correction can be verified before payment or pickup.',
        'Failure may come from product defects, dimensions, workmanship, missing accessories, simple function checks, packaging, labels, carton marks, quantity signals, or a sampling result above an agreed limit. The report should make the failed checkpoint traceable to photos, sample records, SKU details, and the requirement used for comparison.',
      ],
      bullets: [
        'Separate critical, major, and minor findings when the inspection scope uses defect classifications',
        'Separate product-quality failure from packaging, label, carton, quantity, or document failure',
        'Check whether the failure affects one sampled unit, one SKU, one lot, or a repeated pattern across the inspected sample',
        'Do not treat a supplier promise to fix everything as proof that correction is complete',
      ],
    },
    {
      id: 'immediate-actions',
      title: 'What should the buyer do immediately after inspection fails?',
      paragraphs: [
        'The buyer should first pause any automatic release decision, read the failed checkpoints against the purchase order and approved files, and ask the supplier for a written response. The next action should name the affected goods, correction method, deadline, evidence, and whether balance payment or pickup remains on hold.',
        'Do not negotiate from the word “failed” alone. Use the actual evidence: defect photos, sampled quantity, SKU or carton references, measurements, function results, packaging findings, and inspector notes. This keeps the supplier discussion tied to observable issues instead of turning into a general argument about whether the order is “good enough.”',
      ],
      bullets: [
        'Download and preserve the original report, photos, measurements, and defect list',
        'Mark which failed points are commercial deal-breakers and which may be accepted by the buyer',
        'Ask whether affected goods can be isolated, sorted, repaired, replaced, relabeled, or repacked',
        'Set the evidence required before payment, pickup, or shipment release can resume',
      ],
    },
    {
      id: 'rework-reinspection',
      title: 'Should the supplier rework the goods and should I re-inspect?',
      paragraphs: [
        'Request supplier rework when the failed point is correctable and responsibility is commercially clear. Re-inspect when correction changes a meaningful portion of the order, cartons must be reopened, defects were repeated, or supplier photos cannot prove the same checkpoints across the affected goods. Narrow corrections may sometimes be verified with traceable evidence.',
        'The follow-up check should not become a vague second inspection. It should reference the original failed items, the supplier correction list, affected SKU or carton range, and any new risk created by rework. Repacking, replacement, sorting, or relabeling can introduce quantity, mix-up, packaging, and shipment-readiness errors that also need confirmation.',
      ],
      bullets: [
        'Use re-inspection for repeated workmanship, function, dimension, assortment, quantity, or packaging failures',
        'Use traceable supplier evidence only when the correction is narrow, visible, and tied to the original defect references',
        'Recheck carton count, SKU separation, labels, and packing condition after cartons are reopened for correction',
        'Keep balance payment and pickup timing aligned with verified correction, not only promised completion',
      ],
    },
    {
      id: 'field-notes',
      title: 'What does Agent Huang see after a failed inspection?',
      paragraphs: [
        'A recurring China-side pattern is that a supplier answers a failed report with a few close-up photos and says the issue is fixed. The buyer should match each failed checkpoint, affected SKU or carton group, correction method, and corrected quantity to the report. If that traceability is missing, hold release or re-inspect instead of treating a photo folder as proof.',
        'Another common pattern is pressure to accept a discount before the buyer understands the defect spread. A price adjustment may be a commercial option, but it does not repair function, labeling, packaging, or customer-return risk. First define the residual defect and affected goods; then decide whether acceptance, correction, replacement, or shipment delay fits the order.',
      ],
      bullets: [
        'Match every correction claim to an original failed checkpoint',
        'Ask how corrected and uncorrected goods were separated',
        'Confirm whether cartons were reopened and whether packing or labels need another check',
        'Do not release because the pickup date is close if the evidence is still incomplete',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Critical or safety-related visible finding',
      whatWasChecked:
        'Failed checkpoint, affected product or SKU, visible evidence, agreed critical criteria, immediate isolation, and whether specialist testing or review is required',
      buyerDecision: 'Stop payment and release, isolate affected goods, escalate beyond ordinary QC where needed, and do not rely on a discount alone',
    },
    {
      riskNode: 'Repeated major product defect',
      whatWasChecked:
        'Defect type, sampled quantity, frequency, SKU or lot pattern, approved sample or specification comparison, and realistic correction method',
      buyerDecision: 'Request rework, sorting, replacement, or rejection discussion; keep balance and pickup on hold; schedule re-inspection',
    },
    {
      riskNode: 'Localized or repairable defect',
      whatWasChecked:
        'Affected units, traceability, repair or replacement method, separation controls, corrected quantity, and proof required after correction',
      buyerDecision: 'Approve targeted correction, require traceable evidence, and re-inspect if the affected scope cannot be proved remotely',
    },
    {
      riskNode: 'Packaging, label, or carton failure',
      whatWasChecked:
        'Retail packaging, barcode or label files, label placement, SKU separation, carton marks, carton condition, count, and repacking impact',
      buyerDecision: 'Relabel or repack before pickup, then verify carton count, labels, packing condition, and shipment readiness again',
    },
    {
      riskNode: 'Minor deviation the buyer may accept',
      whatWasChecked:
        'Visible severity, affected sample, customer or marketplace impact, approved tolerance, commercial consequence, and written buyer acceptance',
      buyerDecision: 'Accept only as an explicit buyer decision, document the deviation, and avoid describing acceptance as a passed inspection',
    },
    {
      riskNode: 'Supplier says correction is complete',
      whatWasChecked:
        'Correction list, before-and-after evidence, affected SKU or cartons, corrected quantity, reopened packing, and original failed checkpoints',
      buyerDecision: 'Release only after evidence closes the failed points; use re-inspection when the correction scope or traceability remains uncertain',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Inspection evidence: original report, defect photos, measurements, simple function results, sampled quantity, SKU or carton references, and inspector notes.',
    'Order requirements: purchase order, product specification, approved sample notes, packaging rules, label files, defect classification, and any agreed sampling or AQL criteria.',
    'Correction evidence: supplier response, rework or sorting plan, affected quantity, responsible person, completion timing, before-and-after photos, and reopened carton details.',
    'Buyer-stage facts: unpaid balance, pickup booking, shipment deadline, goods accessibility, correction leverage, and the commercial consequence of accepting residual defects.',
    'China-side workflow judgment connecting failed findings to a practical hold, correction, re-inspection, acceptance, pickup, or shipment-release decision.',
  ],
  whatToSend: [
    'The complete inspection report, original photo set, defect summary, measurements, sampled quantity, and any inspector comments',
    'Purchase order, product specification, approved sample notes, packaging requirements, label files, and agreed defect or AQL rules',
    'Supplier written response, proposed correction method, affected quantity, rework timing, and any before-and-after evidence',
    'Product and SKU list, order quantity, carton count, factory location, production status, and whether goods are already packed',
    'Balance payment status, forwarder pickup booking, shipment deadline, and whether the supplier is pressuring release',
    'The decision you need: accept, hold, rework, sort, replace, relabel, repack, re-inspect, delay pickup, or stop shipment',
  ],
  redFlags: [
    'The supplier says internal QC passed but does not answer the third-party report checkpoint by checkpoint',
    'Correction photos cannot be tied to an SKU, carton group, affected quantity, or original defect reference',
    'The supplier wants full balance payment before rework is finished or verified',
    'Pickup is still scheduled even though cartons must be reopened, relabeled, sorted, or repacked',
    'The supplier offers a discount immediately but avoids defining how widespread the defect is',
    'The buyer accepts a deviation verbally without documenting the remaining defect and commercial risk',
    'A serious visible finding is treated as ordinary cosmetic QC even though specialist testing or compliance review may be needed',
  ],
  scopeLimits: [
    'A failed sampled inspection does not prove every unit in the order is defective, and a passed re-inspection does not prove every unit is defect-free',
    'QC can verify visible, measurable, and agreed checks within scope, but it cannot guarantee hidden quality, long-term durability, or future field performance',
    'Ordinary QC does not replace laboratory testing, certification review, regulated product compliance, engineering validation, legal advice, or customs advice',
    'A report and re-inspection support the buyer decision but do not force supplier rework, replacement, refund, or contract enforcement',
    'Supplier photos may support narrow correction checks, but they are weaker when affected quantity, traceability, or repeated defects remain unclear',
    'Accepting a discount or deviation is a buyer commercial decision and does not convert failed goods into compliant or defect-free goods',
  ],
  relatedLinks: [
    {
      href: '/qc-inspection-china',
      label: 'QC Inspection China',
      note: 'Use buyer-side inspection evidence before payment, correction, or shipment release.',
    },
    {
      href: '/qc-inspection-china-before-balance-payment',
      label: 'QC Before Balance Payment',
      note: 'Use when the immediate decision is whether final supplier payment should remain on hold.',
    },
    {
      href: '/buyer-side-inspection-report',
      label: 'Buyer-Side Inspection Report',
      note: 'Review what a useful report should show about defects, packing, evidence, and next actions.',
    },
    {
      href: '/china-qc-inspection-booking-checklist',
      label: 'China QC Booking Checklist',
      note: 'Prepare clearer product files, checkpoints, and decision rules before the inspection.',
    },
    {
      href: '/qc-vs-pre-shipment-inspection',
      label: 'QC vs Pre-Shipment Inspection',
      note: 'Choose the right follow-up scope for product correction or final shipment release.',
    },
    {
      href: '/scope-limitations',
      label: 'Inspection Scope Limitations',
      note: 'Understand what onsite evidence can and cannot prove before making a commercial decision.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Should I pay the balance if a China QC inspection fails?',
      answer:
        'Normally, do not release the balance automatically. First confirm the failed checkpoints, supplier correction plan, evidence required, and whether the payment terms give you a practical right to hold. Payment decisions also depend on the contract and commercial relationship.',
    },
    {
      question: 'Does a failed QC inspection mean all goods are defective?',
      answer:
        'No. A sampled inspection shows what was found in the inspected sample and scope. It may reveal a repeated pattern, but it does not prove the condition of every unit. Use defect frequency, traceability, and correction evidence to decide the next step.',
    },
    {
      question: 'Who pays for rework and re-inspection after a failed inspection?',
      answer:
        'Responsibility depends on the purchase agreement, inspection terms, supplier commitment, and cause of failure. Buyers should clarify correction and re-inspection responsibility before production where possible rather than assume the report itself creates a payment obligation.',
    },
    {
      question: 'Can supplier photos prove that failed goods were fixed?',
      answer:
        'They can support a narrow visible correction when the photos are traceable to the original failed checkpoint, SKU or carton group, and corrected quantity. They are not strong proof when repeated defects, sorting, repacking, or broad rework must be verified.',
    },
    {
      question: 'When is a re-inspection necessary after QC failure?',
      answer:
        'Re-inspection is appropriate when defects were repeated, correction affects a meaningful portion of the order, cartons were reopened, function or dimensions failed, affected goods cannot be traced remotely, or payment and pickup depend on independent correction evidence.',
    },
  ] satisfies FaqItem[],
}

export function makeChinaQcInspectionFailsArticleMetadata(): Metadata {
  const canonicalPath = chinaQcInspectionFailsArticle.href

  return {
    title: chinaQcInspectionFailsArticle.metaTitle,
    description: chinaQcInspectionFailsArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: chinaQcInspectionFailsArticle.metaTitle,
      description: chinaQcInspectionFailsArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [...getArticleOpenGraphImages(chinaQcInspectionFailsArticle)],
    },
    twitter: {
      card: 'summary_large_image',
      title: chinaQcInspectionFailsArticle.metaTitle,
      description: chinaQcInspectionFailsArticle.metaDescription,
      images: [chinaQcInspectionFailsArticle.image.src],
    },
  }
}

export function makeChinaQcInspectionFailsArticleJsonLd() {
  return [
    makeArticleJsonLd(chinaQcInspectionFailsArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Next steps after a failed China QC inspection',
      itemListElement: chinaQcInspectionFailsArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(chinaQcInspectionFailsArticle.faqs),
  ]
}
