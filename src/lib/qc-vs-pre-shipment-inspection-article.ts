import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { qcVsPreShipmentInspectionArticleHref } from '@/lib/site-links'
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

export const qcVsPreShipmentInspectionArticle = {
  href: qcVsPreShipmentInspectionArticleHref,
  title: 'QC Inspection vs Pre-Shipment Inspection in China',
  metaTitle: 'QC vs Pre-Shipment Inspection',
  metaDescription:
    'Compare QC inspection vs pre-shipment inspection in China. Know when to choose QC, PSI, or both before balance payment, pickup, or shipment release.',
  publishedDate: 'June 7, 2026',
  publishedDateIso: '2026-06-07T03:51:17-04:00',
  h1: 'QC Inspection vs Pre-Shipment Inspection in China',
  eyebrow: 'QC inspection vs pre-shipment inspection in China',
  image: {
    alt: 'China-side inspector comparing finished goods, packing, and cartons for QC and pre-shipment inspection scope',
    height: 900,
    src: '/images/qc-vs-pre-shipment-inspection.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/qc-vs-pre-shipment-inspection.webp', width: 1600 },
    { height: 1200, src: '/images/qc-vs-pre-shipment-inspection-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/qc-vs-pre-shipment-inspection-1x1.webp', width: 1200 },
  ],
  intro:
    'Many overseas buyers use QC inspection and pre-shipment inspection as if they mean the same thing. In China sourcing work, the safer question is not which term sounds correct. The safer question is what buyer decision the inspection must support before money or goods move.',
  answerSummary:
    'QC inspection is the broader buyer-side quality check. Pre-shipment inspection is a final-stage QC check when goods are finished, packed, or nearly ready to leave China. Choose the scope by the decision you need: correct production, hold balance payment, relabel or repack cartons, approve pickup, release shipment, or re-check.',
  primaryCta: {
    href: '/qc-inspection-china',
    label: 'Choose inspection scope',
  },
  secondaryCta: {
    href: '#decision-table',
    label: 'Compare QC and PSI',
  },
  whatsappMessage: `Hi Agent Huang,

I need help choosing between QC inspection, pre-shipment inspection, or both.

Product:
Supplier / factory location:
Production stage:
Order quantity / cartons:
Balance payment or pickup deadline:
Main concern:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#same-or-different', label: 'Same or different' },
    { href: '#choose-qc', label: 'Choose QC' },
    { href: '#choose-psi', label: 'Choose PSI' },
    { href: '#decision-table', label: 'Decision table' },
    { href: '#field-notes', label: 'Field notes' },
    { href: '#evidence-basis', label: 'Evidence basis' },
    { href: '#documents', label: 'What to send' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Use QC inspection as the broad buyer-side quality check when the scope may include in-process goods, finished goods, defects, dimensions, packaging, labels, or simple function checks',
    'Use pre-shipment inspection when goods are finished or packed and the buyer needs evidence before balance payment, pickup, or shipment release',
    'Use QC before balance payment when product defects, missing accessories, weak packaging, or label mistakes could still be corrected by the supplier',
    'Use PSI before forwarder pickup when carton count, carton condition, shipping marks, packing list, and handover readiness are the key risks',
    'Use both when early quality direction and final carton or label readiness are both high-risk',
    'Neither scope replaces lab testing, certification review, legal compliance, customs advice, or marketplace receiving approval',
  ],
  checkGroups: [
    {
      title: 'Choose broader QC when',
      checks: [
        'The product is still being made, quality direction is unclear, or sample details may drift during bulk production',
        'The buyer needs evidence on workmanship, dimensions, color, logo, material notes, accessories, or simple agreed function checks',
        'The next decision is correct production, sort affected units, request rework, hold balance payment, or schedule a re-check',
      ],
    },
    {
      title: 'Choose PSI when',
      checks: [
        'Goods are finished, packed, or close enough to check final quantity, packaging, labels, cartons, and shipment readiness',
        'The buyer needs evidence before releasing final payment, approving forwarder pickup, or allowing goods to leave China',
        'The scope must include carton count, packing list signals, carton labels, shipping marks, and visible handover blockers',
      ],
    },
    {
      title: 'Use both when',
      checks: [
        'The order is a first run, customized, tolerance-sensitive, or tied to a tight pickup or balance-payment deadline',
        'Early production risk and final shipment-readiness risk are both real enough that one report would answer only half the decision',
        'The buyer needs one check for correction leverage and another for final release evidence after packing',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'same-or-different',
      title: 'Is QC inspection the same as pre-shipment inspection in China?',
      paragraphs: [
        'QC inspection in China is a broad buyer-side quality check, while pre-shipment inspection is one final-stage form of QC. Choose QC when the question is quality direction or payment risk. Choose PSI when finished goods, cartons, labels, documents, and pickup readiness must be checked before release.',
        'The terms overlap because a PSI report often includes QC checks. The difference is timing and decision. A general QC scope can happen during production, before balance payment, or after rework. A PSI scope normally happens close to shipment, when final packing and handover evidence are available.',
      ],
      bullets: [
        'QC is the broader category: product, defect, specification, packaging, label, or function checks within scope',
        'PSI is a final-stage check: finished goods, cartons, packing list, labels, shipping marks, and shipment readiness',
        'The right term matters less than the decision the report must support',
        'A vague inspection request can miss the exact evidence the buyer needs before payment or pickup',
      ],
    },
    {
      id: 'choose-qc',
      title: 'When should I choose QC inspection instead of PSI?',
      paragraphs: [
        'Choose QC inspection instead of PSI when the buyer still needs correction leverage before the order is fully packed or shipped. QC is better for product defects, specification mismatch, sample comparison, accessory completeness, simple function checks, and balance-payment decisions that require product evidence before final release.',
        'QC can be scoped for finished goods, in-process goods, or a re-check after supplier correction. It is useful when the buyer is not only asking whether cartons can leave China, but whether the goods themselves match the order closely enough to continue, rework, sort, or pay.',
      ],
      bullets: [
        'The supplier asks for balance payment before broad product evidence is clear',
        'Sample approval notes, color, logo, size, material, assembly, or accessories need buyer-side comparison',
        'The order needs a re-check after sorting, repair, replacement, relabeling, or repacking',
        'The buyer needs defect photos and decision notes before approving payment or shipment release',
      ],
    },
    {
      id: 'choose-psi',
      title: 'When should I choose pre-shipment inspection?',
      paragraphs: [
        'Choose pre-shipment inspection when goods are finished or packed and the buyer needs final release evidence. PSI is best for carton count, carton condition, retail packaging, label placement, shipping marks, packing list signals, pickup blockers, and the decision to approve, delay, relabel, repack, or re-check.',
        'PSI is strongest when the report must answer whether goods can leave the supplier. It is weaker when the main risk is an early production direction problem, because final-stage evidence may show the defect only after it has already spread across packed goods.',
      ],
      bullets: [
        'Forwarder pickup is being scheduled and cartons must be checked before handover',
        'Carton labels, FNSKU labels, warning labels, shipping marks, or SKU separation matter',
        'The supplier claims the shipment is ready but packing list, carton count, or label evidence is still unclear',
        'The buyer needs final shipment-release evidence, not only product-level defect photos',
      ],
    },
    {
      id: 'field-notes',
      title: 'What does Agent Huang see when buyers choose the wrong scope?',
      paragraphs: [
        'A recurring China-side pattern is that a buyer asks for a pre-shipment inspection because the pickup date is close, but the real risk is a quality-direction problem that should have been checked earlier. The PSI can still document finished goods, defects, cartons, and labels, but it may be late for low-cost correction. When the problem is product direction, choose QC earlier; when the problem is final release, choose PSI.',
        'Another common pattern runs the other way: buyers request a broad QC report when the goods are already packed and the urgent decision is whether cartons can be handed to the forwarder. In that situation, final carton, label, packing list, and pickup-readiness evidence should be named clearly as PSI scope instead of buried inside a generic QC request.',
      ],
      bullets: [
        'Do not ask for PSI if the real decision is whether production should continue under the same instructions',
        'Do not ask for generic QC if the real decision is carton release before forwarder pickup',
        'Name the payment, pickup, rework, relabeling, or re-check decision before booking',
        'Keep scope limits visible so a final report is not treated as proof of hidden quality or compliance certainty',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Quality direction unclear',
      whatWasChecked:
        'Approved sample notes, product specification, in-process or finished units, visible defects, workmanship, dimensions, color, logo, and accessory completeness',
      buyerDecision: 'Choose QC inspection, request correction, sort affected goods, hold payment, or schedule a re-check',
    },
    {
      riskNode: 'Finished goods before balance',
      whatWasChecked:
        'Finished quantity, sampled goods, visible defects, packaging, labels, carton evidence, and balance-payment timing',
      buyerDecision: 'Choose QC before balance payment to pay, hold, rework, sort, relabel, or re-inspect',
    },
    {
      riskNode: 'Packed cartons before pickup',
      whatWasChecked:
        'Carton count, carton condition, packing list, shipping marks, carton labels, pickup contact, and handover readiness',
      buyerDecision: 'Choose PSI to approve pickup, delay pickup, repack, relabel, or stop release before goods leave China',
    },
    {
      riskNode: 'FBA or label-sensitive order',
      whatWasChecked:
        'FNSKU files, carton labels, barcode placement, warning labels, SKU separation, carton marks, and visible prep evidence',
      buyerDecision: 'Use QC or PSI depending on timing; keep a final PSI-style release check when labels and cartons matter',
    },
    {
      riskNode: 'First order or customized product',
      whatWasChecked:
        'Early production direction, sample comparison, critical specs, finished-goods evidence, final packing, labels, and carton readiness',
      buyerDecision: 'Use both checks when early correction and final release evidence are both needed',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Buyer-stage facts: production status, balance payment deadline, forwarder pickup window, shipment release pressure, and whether rework is still realistic.',
    'Product evidence: PO, specification, approved sample notes, defect priorities, accessory list, simple function scope, packaging requirements, and supplier photos.',
    'Final shipment evidence: packing list, carton count, carton condition, shipping marks, barcode or FNSKU files, label placement, and pickup readiness signals.',
    'China-side sourcing workflow judgment about which evidence can still support correction, payment hold, relabeling, repacking, pickup delay, or shipment release.',
  ],
  whatToSend: [
    'Purchase order, pro forma invoice, product specification, approved sample notes, and known defect concerns',
    'Current production status, finished quantity, supplier photos, expected packing date, and expected pickup date',
    'Factory address, supplier contact, inspection access details, and preferred inspection date or date range',
    'Packing list, carton count, carton marks, retail packaging, barcode files, FNSKU files, and label placement rules when relevant',
    'Balance payment deadline, forwarder pickup window, shipment deadline, and what result should trigger rework, relabeling, repacking, or re-check',
    'The decision you need after the report: correct production, hold balance, approve pickup, release shipment, or use both checks',
  ],
  redFlags: [
    'The supplier asks whether you want QC or PSI but cannot confirm production status, finished quantity, or packing readiness',
    'The buyer wants product correction but waits until all goods are packed and pickup is already scheduled',
    'The buyer wants pickup approval but sends only product photos and no packing list, carton count, or label files',
    'The supplier says inspection is unnecessary because internal QC already passed, but cannot share carton or defect evidence',
    'Label, carton, packing, or SKU separation details are still changing near balance payment or forwarder pickup',
    'The inspection request uses broad wording but does not name the buyer decision the report must support',
  ],
  scopeLimits: [
    'QC inspection reduces visible product, specification, defect, packaging, and label risk within the agreed scope, but it cannot prove every hidden defect',
    'Pre-shipment inspection reduces final packing, carton, label, document, and shipment-readiness risk, but it may be too late to cheaply fix repeated production problems',
    'Neither QC nor PSI replaces laboratory testing, certification review, regulated compliance review, legal advice, customs advice, or contract enforcement',
    'Inspection can compare only against the files and samples provided; vague specifications create weaker inspection conclusions',
    'A report supports buyer decisions, but it does not force supplier correction or guarantee future supplier behavior',
    'Marketplace receiving approval, Amazon FBA acceptance, customer review outcomes, and customs clearance remain separate risks unless specifically scoped elsewhere',
  ],
  relatedLinks: [
    {
      href: '/qc-inspection-china',
      label: 'QC Inspection China',
      note: 'Use when buyer-side quality evidence is needed before payment, rework, or shipment release.',
    },
    {
      href: '/china-pre-shipment-inspection',
      label: 'China Pre-Shipment Inspection',
      note: 'Use when finished or packed goods need final release evidence before leaving China.',
    },
    {
      href: '/qc-inspection-china-before-balance-payment',
      label: 'QC Inspection Before Balance Payment',
      note: 'Use when the immediate decision is whether to release final supplier payment.',
    },
    {
      href: '/pre-shipment-inspection-china-before-pickup',
      label: 'Pre-Shipment Inspection Before Pickup',
      note: 'Use when cartons, labels, packing list, and pickup readiness must be checked.',
    },
    {
      href: '/production-vs-pre-shipment-inspection',
      label: 'Production vs Pre-Shipment Inspection',
      note: 'Use when the question is whether to inspect during production, before shipment, or both.',
    },
    {
      href: '/china-qc-inspection-booking-checklist',
      label: 'China QC Inspection Booking Checklist',
      note: 'Use when preparing files before confirming the inspection scope.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Is QC inspection different from pre-shipment inspection?',
      answer:
        'Yes. QC inspection is the broader buyer-side quality check. Pre-shipment inspection is a final-stage QC check focused on finished goods, packaging, labels, cartons, documents, and shipment readiness before goods leave China.',
    },
    {
      question: 'Should I book QC inspection or pre-shipment inspection before balance payment?',
      answer:
        'Book QC before balance payment when product defects, specifications, packaging, labels, and supplier correction are still the main decision. Book PSI when goods are finished or packed and final release evidence is needed.',
    },
    {
      question: 'Can pre-shipment inspection replace QC inspection?',
      answer:
        'Pre-shipment inspection can include many QC checks, but it cannot replace earlier QC when the risk is production direction, material choice, repeated process defects, or corrections that should happen before packing.',
    },
    {
      question: 'Can one inspection cover both QC and PSI needs?',
      answer:
        'Sometimes. If goods are finished and accessible, one final inspection can check product quality plus packing and cartons. If early correction and final release evidence are both important, use two scoped checks.',
    },
    {
      question: 'What should I send Huang Sourcing to choose the right inspection?',
      answer:
        'Send the PO, product specs, approved sample notes, production status, supplier photos, factory address, balance deadline, pickup window, packing list, carton count, label files, and the decision you need after inspection.',
    },
  ] satisfies FaqItem[],
}

export function makeQcVsPreShipmentInspectionArticleMetadata(): Metadata {
  const canonicalPath = qcVsPreShipmentInspectionArticle.href

  return {
    title: qcVsPreShipmentInspectionArticle.metaTitle,
    description: qcVsPreShipmentInspectionArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: qcVsPreShipmentInspectionArticle.metaTitle,
      description: qcVsPreShipmentInspectionArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        ...getArticleOpenGraphImages(qcVsPreShipmentInspectionArticle),
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: qcVsPreShipmentInspectionArticle.metaTitle,
      description: qcVsPreShipmentInspectionArticle.metaDescription,
      images: [qcVsPreShipmentInspectionArticle.image.src],
    },
  }
}

export function makeQcVsPreShipmentInspectionArticleJsonLd() {
  return [
    makeArticleJsonLd(qcVsPreShipmentInspectionArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'QC inspection vs pre-shipment inspection decision checklist',
      itemListElement: qcVsPreShipmentInspectionArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(qcVsPreShipmentInspectionArticle.faqs),
  ]
}
