import type { Metadata } from 'next'

import { chinaQcInspectionBookingChecklistArticleHref } from '@/lib/site-links'
import { getAbsoluteUrl } from '@/lib/site-url'
import {
  makeFaqPageJsonLd,
  makeOrganizationReference,
} from '@/lib/structured-data'

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

export const chinaQcInspectionBookingChecklistArticle = {
  href: chinaQcInspectionBookingChecklistArticleHref,
  title: 'What to Send Before Booking a China QC Inspection',
  metaTitle: 'China QC Inspection Booking Checklist',
  metaDescription:
    'Before booking a China QC inspection, send product specs, PO details, factory address, packing list, label files, photos, deadlines, and the buyer decision you need.',
  h1: 'What to Send Before Booking a China QC Inspection',
  eyebrow: 'China QC inspection booking checklist',
  image: {
    alt: 'China QC inspector reviewing product specs, packing files, sample parts, and export cartons before an inspection booking',
    height: 900,
    src: '/images/china-qc-inspection-booking-checklist.webp',
    width: 1600,
  },
  intro:
    'A China QC inspection is easier to quote, schedule, and scope when the buyer sends the right files before booking. The goal is not to create paperwork for its own sake. The goal is to help Agent Huang understand what should be checked, where the goods are, when the decision is due, and what evidence the buyer needs before payment, pickup, or shipment.',
  answerSummary:
    'Before booking, send the purchase order, product specifications, approved sample notes, factory address, supplier contact, target inspection date, order quantity, carton count, packing list, label files, product photos, and your main buyer decision. Complete inputs help decide whether to inspect now, hold, ask the supplier for missing evidence, relabel, repack, or schedule a re-check.',
  primaryCta: {
    href: '/qc-inspection-china',
    label: 'Send QC files for review',
  },
  secondaryCta: {
    href: '#what-to-send',
    label: 'See what to send',
  },
  whatsappMessage: `Hi Agent Huang,

I want to book a China QC inspection and need you to review the files first.

Product:
Factory location:
Order quantity / cartons:
Inspection date or deadline:
Files I can send:
Main concern:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#what-to-send', label: 'What to send' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#field-notes', label: 'Field notes' },
    { href: '#missing-files', label: 'Missing files' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Purchase order, pro forma invoice, SKU list, quantity, and carton count',
    'Product specification, approved sample notes, photos, drawings, and critical tolerances',
    'Factory address, supplier contact, product readiness status, and target inspection date',
    'Packing list, carton marks, shipping marks, retail packaging, inserts, and accessories',
    'Barcode, FNSKU, carton label, warning label, and SKU separation requirements',
    'Defect concerns, special function checks, and what counts as a serious issue',
    'Payment deadline, pickup window, or shipment deadline tied to the QC result',
    'The buyer decision needed after the report: approve, hold, rework, relabel, repack, or re-check',
  ],
  sections: [
    {
      id: 'why-files-matter',
      title: 'Why the files matter before booking QC',
      paragraphs: [
        'A QC inspector can only compare goods against the information provided. If the buyer sends a vague product name and a factory city, the scope becomes vague too. If the buyer sends the PO, product specs, label files, carton requirements, and the decision deadline, the inspection can focus on the real buyer risk.',
        'The useful question before booking is simple: what evidence will let you decide the next step? For some buyers, that is balance payment. For others, it is pickup approval, relabeling, repacking, supplier correction, or a re-check before the goods leave China.',
      ],
      bullets: [
        'Clear product specs reduce arguments about what the supplier promised',
        'Label and packing files make barcode, FNSKU, carton mark, and SKU separation checks possible',
        'Factory contact and timing prevent scheduling delays after payment or pickup deadlines appear',
        'A clear buyer decision keeps the report focused instead of becoming a generic photo set',
      ],
    },
    {
      id: 'what-to-send',
      title: 'What to send before booking a China QC inspection',
      paragraphs: [
        'Send the files that define the order, the files that define the packaging, and the files that define the decision you need to make. The inspector should know what product is expected, what packaging is required, what labels should be present, and what would make you hold payment or delay pickup.',
        'If some documents are not ready, send what you have and say what is missing. Missing files are part of the risk picture. Agent Huang can tell you whether the inspection can still be scoped, whether the supplier should prepare more evidence first, or whether the booking should wait.',
      ],
      bullets: [
        'Order files: PO, pro forma invoice, order quantity, SKU list, model numbers, color or size breakdown, and carton count',
        'Product files: final spec sheet, approved sample notes, product photos, drawings, dimensions, material notes, and critical defect list',
        'Factory files: factory address, supplier contact, production status, inspection access, and preferred date or date range',
        'Packing files: packing list, inner packaging, retail box artwork, inserts, manuals, accessories, carton marks, and shipping marks',
        'Label files: barcode, FNSKU, carton label, warning label, country-of-origin mark, SKU separation rule, and label placement requirement',
        'Decision context: balance payment deadline, forwarder pickup window, shipment deadline, and what result would trigger rework or re-check',
      ],
    },
    {
      id: 'field-notes',
      title: 'Agent Huang field notes before the inspection date',
      paragraphs: [
        'Many QC problems start before the inspector arrives. The supplier says the goods are ready, but the packing list is changing. The buyer wants barcode checks, but the label file was never sent. The factory confirms a date, but the cartons are still being sealed or moved to another warehouse.',
        'From the China side, file readiness is a practical risk signal. When the supplier can confirm the address, contact, finished quantity, carton count, label files, and pickup timing, the inspection is easier to schedule and the report is more useful. When those details are unclear, the buyer should slow down before paying the balance or arranging pickup.',
      ],
      bullets: [
        'Ask the supplier to confirm finished quantity and carton count before locking the inspection date',
        'Send approved sample notes early when color, finish, logo, or accessory details matter',
        'Do not wait until the morning of inspection to send label files or FBA requirements',
        'Treat changing packing lists or vague factory addresses as a reason to ask for clarification before booking',
      ],
    },
    {
      id: 'missing-files',
      title: 'What if you do not have every document yet?',
      paragraphs: [
        'You can still start with partial information. Send the supplier link, product photos, quote, order stage, factory city, target date, and your main concern. Agent Huang can identify which files are required before the inspection is confirmed.',
        'The important thing is to separate missing information from acceptable scope limits. If label files are missing, label checks cannot be meaningful. If the approved sample is unclear, the report can still show visible product condition, but it cannot fully confirm sample match.',
      ],
      bullets: [
        'Book only after the critical evidence for your buyer decision is available',
        'Ask the supplier to provide updated packing files before inspection if carton count keeps changing',
        'Scope the inspection honestly when documents are incomplete',
        'Use a pre-booking review to decide whether QC, supplier verification, or pickup inspection is the better next step',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Product scope unclear',
      whatWasChecked:
        'PO, product specification, approved sample notes, photos, model, SKU count, color, size, material, and critical defect list',
      buyerDecision: 'Send missing specs, narrow the QC scope, or delay booking until requirements are clear',
    },
    {
      riskNode: 'Factory timing unclear',
      whatWasChecked:
        'Factory address, supplier contact, production status, finished quantity, carton count, and target inspection date',
      buyerDecision: 'Book the inspection date, ask the supplier for readiness evidence, or wait before paying the balance',
    },
    {
      riskNode: 'Packing and labels at risk',
      whatWasChecked:
        'Packing list, carton marks, shipping marks, barcode files, FNSKU files, warning labels, and label placement requirements',
      buyerDecision: 'Include label checks, request relabeling, repack before pickup, or use China-side prep support',
    },
    {
      riskNode: 'Payment or pickup pressure',
      whatWasChecked:
        'Balance deadline, forwarder pickup window, shipment deadline, supplier pressure, and decision needed after the report',
      buyerDecision: 'Inspect now, hold payment, delay pickup, or arrange a re-check after supplier correction',
    },
    {
      riskNode: 'Special checks requested',
      whatWasChecked:
        'Function checks, measurement points, simple assembly checks, accessories, manuals, inserts, and any safety-sensitive limits',
      buyerDecision: 'Confirm onsite checks, remove unsupported checks, or use lab testing or specialist review separately',
    },
  ] satisfies DecisionRow[],
  whatToSend: [
    'Purchase order, pro forma invoice, order quantity, SKU list, model numbers, and color or size breakdown',
    'Product specification, approved sample notes, product photos, drawings, dimensions, material notes, and critical defect list',
    'Factory address, supplier contact person, inspection access details, production status, and preferred inspection date',
    'Packing list, carton count, carton dimensions, retail packaging, inserts, manuals, accessories, shipping marks, and carton marks',
    'Barcode files, FNSKU files, carton labels, warning labels, country-of-origin marks, SKU separation rules, and label placement notes',
    'Balance payment deadline, pickup window, shipment deadline, and the exact decision you need after the inspection report',
  ],
  redFlags: [
    'The supplier asks you to book or pay the balance before confirming finished quantity and carton count',
    'The factory address is vague, changes late, or points to a warehouse instead of the production site without explanation',
    'The packing list, label files, or SKU breakdown keeps changing near the inspection date',
    'The supplier says barcode, FNSKU, carton label, or packaging mistakes can be fixed after pickup',
    'Product specs are still being discussed while the supplier claims bulk goods are ready',
    'The supplier refuses buyer-side inspection or pushes immediate pickup before documents are complete',
  ],
  scopeLimits: [
    'A pre-booking file review improves QC scope, but it does not guarantee every hidden defect will be found',
    'QC inspection checks visible product, packaging, label, carton, and simple agreed points; it does not replace lab testing or certification review',
    'If approved samples, drawings, or label files are missing, the report can only compare against the available information',
    'If goods are not finished or cartons are not packed, shipment-readiness checks may need a later inspection date',
    'QC evidence supports buyer decisions, but it does not force supplier correction or resolve disputes by itself',
    'Amazon, customs, legal, and regulated compliance outcomes require separate review beyond ordinary onsite QC',
  ],
  relatedLinks: [
    {
      href: '/qc-inspection-china',
      label: 'QC Inspection China',
      note: 'Use this service page when goods are finished or nearly finished and buyer-side inspection is needed.',
    },
    {
      href: '/what-to-send-before-china-inspection',
      label: 'What to send before booking',
      note: 'Use the broader prep guide when you are comparing QC, supplier verification, PSI, FBA prep, or sample consolidation.',
    },
    {
      href: '/before-balance-payment-qc-china',
      label: 'Before Balance Payment QC',
      note: 'Use this stage page when the immediate decision is whether to release final supplier payment.',
    },
    {
      href: '/sample-inspection-report-china',
      label: 'Sample Inspection Report',
      note: 'Preview the style of photo-backed evidence, defect notes, and decision support a buyer should expect.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What is the most important thing to send before booking a China QC inspection?',
      answer:
        'Send the purchase order, product specifications, approved sample notes, factory address, supplier contact, target inspection date, order quantity, carton count, packing list, label files, and the buyer decision you need after the report.',
    },
    {
      question: 'Can I book QC before the packing list is final?',
      answer:
        'You can start a pre-booking review, but the inspection date should usually be confirmed after finished quantity, carton count, packing method, and label requirements are clear enough to check.',
    },
    {
      question: 'Do I need to send FNSKU or barcode files before QC?',
      answer:
        'Yes, if label accuracy matters. Send barcode files, FNSKU files, carton labels, warning labels, and label placement requirements before inspection so label checks can be included in the scope.',
    },
    {
      question: 'What if my supplier will not provide the factory address?',
      answer:
        'That is a risk signal. Send the supplier link, quote, contact details, and what the supplier refused to share so Huang Sourcing can advise whether to verify the supplier, ask harder questions, or delay payment.',
    },
    {
      question: 'Does sending these files replace the inspection itself?',
      answer:
        'No. The files make the QC scope clearer. The inspection still needs onsite evidence from products, cartons, packaging, labels, and agreed checks before the buyer approves payment, pickup, or shipment.',
    },
  ] satisfies FaqItem[],
}

export function makeChinaQcInspectionBookingChecklistArticleMetadata(): Metadata {
  const canonicalPath = chinaQcInspectionBookingChecklistArticle.href

  return {
    title: chinaQcInspectionBookingChecklistArticle.metaTitle,
    description: chinaQcInspectionBookingChecklistArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: chinaQcInspectionBookingChecklistArticle.metaTitle,
      description: chinaQcInspectionBookingChecklistArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        {
          url: chinaQcInspectionBookingChecklistArticle.image.src,
          width: chinaQcInspectionBookingChecklistArticle.image.width,
          height: chinaQcInspectionBookingChecklistArticle.image.height,
          alt: chinaQcInspectionBookingChecklistArticle.image.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: chinaQcInspectionBookingChecklistArticle.metaTitle,
      description: chinaQcInspectionBookingChecklistArticle.metaDescription,
      images: [chinaQcInspectionBookingChecklistArticle.image.src],
    },
  }
}

export function makeChinaQcInspectionBookingChecklistArticleJsonLd() {
  const pageUrl = getAbsoluteUrl(chinaQcInspectionBookingChecklistArticle.href)

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: chinaQcInspectionBookingChecklistArticle.title,
      description: chinaQcInspectionBookingChecklistArticle.metaDescription,
      url: pageUrl,
      inLanguage: 'en',
      image: getAbsoluteUrl(chinaQcInspectionBookingChecklistArticle.image.src),
      author: {
        '@type': 'Person',
        name: 'Agent Huang',
      },
      publisher: makeOrganizationReference(),
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': pageUrl,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'China QC inspection booking checklist',
      itemListElement: chinaQcInspectionBookingChecklistArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(chinaQcInspectionBookingChecklistArticle.faqs),
  ]
}
