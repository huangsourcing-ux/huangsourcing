import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { chinaQcInspectionFailsArticleHref } from '@/lib/site-links'

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

type CloseoutRow = {
  record: string
  supplierOrChecker: string
  buyerGate: string
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

export const qcCloseoutSources = {
  isoIaf:
    'https://committee.iso.org/files/live/sites/tc176sc2/files/documents/ISO%209001%20Auditing%20Practices%20Group%20docs/Auditing%20General/APG-ReviewNonconformity2015.pdf',
  asq8d: 'https://asq.org/quality-resources/eight-disciplines-8d',
  nistSampling: 'https://www.itl.nist.gov/div898/handbook/pmc/section2/pmc21.htm',
} as const

export const chinaQcInspectionFailsArticle = {
  href: chinaQcInspectionFailsArticleHref,
  title: 'What Happens If a China QC Inspection Fails?',
  metaTitle: 'China QC Inspection Failed: Next Steps',
  metaDescription:
    'Use a failed-inspection closeout packet to trace affected SKUs and cartons, supplier correction, verification, buyer disposition, and pickup instructions.',
  publishedDate: 'June 11, 2026',
  publishedDateIso: '2026-06-11',
  modifiedDate: 'October 25, 2026 (Beijing time)',
  modifiedDateIso: '2026-10-24T19:26:28Z',
  h1: 'What Happens If a China QC Inspection Fails?',
  eyebrow: 'What happens if a China QC inspection fails?',
  image: {
    alt: 'Illustration of product samples separated with defect tags for a failed-inspection review',
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
    'A failed China QC inspection leaves the buyer with a release decision, not a verdict on every unit. Before instructing payment or pickup, trace each failed criterion to the affected goods, record what the supplier changed, and decide what independent evidence is needed to close the finding.',
  answerSummary:
    'Build one closeout packet: original report ID and failed criterion; SKU, lot and carton containment; named supplier action and corrected quantity; scoped verification and its limits; written buyer disposition; then a separate payment and forwarder instruction under the agreed terms.',
  primaryCta: {
    href: '/qc-inspection-china',
    label: 'Review failed inspection',
  },
  secondaryCta: {
    href: '#closeout-packet',
    label: 'Use closeout packet',
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
    { href: '#closeout-packet', label: 'Closeout packet' },
    { href: '#decision-table', label: 'Decision matrix' },
    { href: '#evidence-basis', label: 'Evidence basis' },
    { href: '#sources', label: 'Sources' },
    { href: '#documents', label: 'What to send' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Keep the original report ID, failed criterion, photos and agreed specification together',
    'Map potentially affected SKUs, lots, units and cartons; identify goods held apart from ready stock',
    'Get a named supplier action owner, due date, method, corrected count and evidence references',
    'Choose a follow-up check that can test the original finding and any risk introduced by rework',
    'Record the buyer’s written acceptance, further correction, rejection or unresolved status',
    'Issue payment, pickup and forwarder instructions separately under the agreed terms and actual disposition',
  ],
  checkGroups: [
    {
      title: 'Keep the disposition open when',
      checks: [
        'The failed criterion, affected goods or applicable acceptance rule is disputed or unclear',
        'The supplier cannot separate affected and unaffected units or cartons',
        'Verification has not covered the original finding or rework-created packing risks',
      ],
    },
    {
      title: 'Correct and verify',
      checks: [
        'Record the supplier owner, date, method, completed count and location of corrected goods',
        'Retain before-and-after records that point to the original report and specific SKUs or cartons',
        'Scope the follow-up check to the corrected population and any goods still on hold',
      ],
    },
    {
      title: 'Issue a written disposition',
      checks: [
        'Identify accepted goods, remaining exceptions and who approved any deviation',
        'Tell the supplier and forwarder exactly which cartons may move and which remain held',
        'Check payment and delivery terms before sending a separate commercial instruction',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'meaning',
      title: 'Does a failed China QC inspection mean rejecting the whole order?',
      paragraphs: [
        'The report records a finding against its agreed scope and acceptance criteria. If it used lot acceptance sampling, the result supports a lot-disposition decision; it does not measure the quality of every unit. The buyer still needs to identify the affected population and what remains uncertain.',
        'Start with the report ID, inspection date, failed checkpoint and criterion. Attach the relevant specification revision, photo or measurement IDs, sample result, and SKU or carton references. If these identifiers are absent, request clarification before agreeing to a correction scope.',
      ],
      bullets: [
        'Keep the original sampled result separate from the supplier’s later claim that the lot has been fixed',
        'Separate product, packaging, label, carton and quantity findings so each receives an appropriate follow-up check',
        'Identify whether a finding is confined to a unit, SKU, lot, shift or carton range as far as records allow',
      ],
    },
    {
      id: 'immediate-actions',
      title: 'What should the buyer do immediately after inspection fails?',
      paragraphs: [
        'Ask the supplier to identify and segregate potentially affected goods while the finding is reviewed. Reconcile the order quantity, inspected lot, affected SKU and carton map so unreviewed stock is not silently treated as corrected stock.',
        'Send a written request tied to each report finding: what will be sorted, reworked, replaced, relabeled or repacked; who owns it; when it will be complete; and how many units and cartons are involved. Whether payment or pickup can be deferred depends on the purchase terms and the buyer’s own commercial decision.',
      ],
      bullets: [
        'Preserve the report and attachments before a revised supplier file obscures the original result',
        'Record the supplier’s count of held, corrected, replaced and still-unreviewed goods',
        'Tell the forwarder when a booked pickup is pending a buyer disposition',
      ],
    },
    {
      id: 'rework-reinspection',
      title: 'Should the supplier rework the goods and should I re-inspect?',
      paragraphs: [
        'A correction fixes the detected goods or records; cause analysis asks why the finding occurred; a recurrence action addresses that cause. The ISO/IAF Auditing Practices Group explains this distinction in educational auditor guidance. For a localized, traceable packing error, a proportionate correction and verification may be enough; a repeated or unexplained failure may justify a separate cause-and-recurrence plan.',
        'Agree the follow-up scope before correction closes: the original failed checkpoint, the corrected units or cartons, and any new mix-up or packing risk. A traceable remote record may establish a narrow visible change; broader sorting, function or repeated defects may need an onsite re-check. State which population was checked and what was outside scope.',
      ],
      bullets: [
        'For a recurring problem, request evidence that the proposed cause and recurrence action were tested, not a generic “staff retrained” statement',
        'After cartons are reopened, reconcile corrected counts, labels, carton marks and packing list revisions',
        'Do not call a re-inspection “100% verified” if it examined only a sample',
      ],
    },
  ] satisfies ArticleSection[],
  closeoutRows: [
    {
      record: '1. Failed finding and rule',
      supplierOrChecker:
        'Original report ID, inspection date, failed checkpoint or defect code, applicable specification revision, sample result, and photo or measurement IDs.',
      buyerGate:
        'Can the buyer and supplier point to the same requirement and observed failure? Keep disputed or missing references open.',
    },
    {
      record: '2. Affected goods and containment',
      supplierOrChecker:
        'SKU or variant, lot or shift if known, unit count, carton range, location, and a map of held, unaffected, and unreviewed stock.',
      buyerGate:
        'Do the counts reconcile with the order and packing list? Do not infer that unchecked goods were corrected.',
    },
    {
      record: '3. Supplier correction',
      supplierOrChecker:
        'Named action owner, target and actual completion dates, correction method, corrected or replaced count, and before-and-after evidence tied to report IDs.',
      buyerGate:
        'Is the action complete for the stated population? A planned date or a few unlinked photos are not closeout evidence.',
    },
    {
      record: '4. Cause and recurrence action, when warranted',
      supplierOrChecker:
        'For repeated or unexplained findings, a separate cause record, responsible owner, recurrence action, completion evidence, and follow-up date.',
      buyerGate:
        'Keep immediate goods correction separate from a longer-running process fix. Ask whether the proposed cause was tested.',
    },
    {
      record: '5. Scoped verification',
      supplierOrChecker:
        'Checker, date, corrected population, original checkpoints retested, sample or full-check method, new packing risks checked, result, and explicit exclusions.',
      buyerGate:
        'Does the evidence support only the stated population and checks? Commission a wider check when the unverified exposure matters.',
    },
    {
      record: '6. Buyer disposition and handoff',
      supplierOrChecker:
        'Buyer’s written accepted, further-correction, rejected, or still-held status by SKU and carton; any approved deviation and remaining exceptions.',
      buyerGate:
        'Only after that decision, send distinct payment, supplier release, pickup and forwarder instructions consistent with the agreement and final carton map.',
    },
  ] satisfies CloseoutRow[],
  decisionRows: [
    {
      riskNode: 'Possible safety or regulated-product issue',
      whatWasChecked:
        'Report reference, affected SKU or lot, observed evidence and whether the question exceeds visual inspection scope',
      buyerDecision: 'Keep the disposition open and obtain qualified product-specific review; this guide cannot clear safety or compliance',
    },
    {
      riskNode: 'Repeated major product defect',
      whatWasChecked:
        'Defect type, sampled quantity, frequency, SKU or lot pattern, approved sample or specification comparison, and realistic correction method',
      buyerDecision: 'Ask for containment, correction and a scoped re-check; decide payment and pickup under the agreed terms',
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
      buyerDecision: 'Record which findings the evidence closes and which remain open; use a broader check when the population or traceability remains uncertain',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Inspection evidence: original report, defect photos, measurements, simple function results, sampled quantity, SKU or carton references, and inspector notes.',
    'Order requirements: purchase order, product specification, approved sample notes, packaging rules, label files, defect classification, and any agreed sampling or AQL criteria.',
    'Correction evidence: supplier response, rework or sorting plan, affected quantity, responsible person, completion timing, before-and-after photos, and reopened carton details.',
    'Buyer-stage facts: unpaid balance, pickup booking, shipment deadline, goods accessibility, correction leverage, and the commercial consequence of accepting residual defects.',
    'Editorial synthesis of public quality guidance into a buyer-side document and handoff workflow; this is not an account of a Huang Sourcing client case.',
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
    'A report and re-inspection support a buyer decision but do not establish rights to withhold payment, force rework or obtain a refund; the agreement and relevant advice control those questions',
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
        'Do not treat a failed report as an automatic payment rule. Confirm the finding and supplier response, then follow the purchase terms and your written commercial disposition. Ask qualified advisers about disputed rights or obligations.',
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
      modifiedTime: chinaQcInspectionFailsArticle.modifiedDateIso,
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
  ]
}
