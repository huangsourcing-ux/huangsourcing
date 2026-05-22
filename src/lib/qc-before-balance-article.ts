import type { Metadata } from 'next'

import {
  businessEmail,
  qcBeforeBalanceArticleHref,
} from '@/lib/site-links'
import { getAbsoluteUrl } from '@/lib/site-url'

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

export const qcBeforeBalanceArticle = {
  href: qcBeforeBalanceArticleHref,
  title: 'QC Inspection in China Before Balance Payment: What to Check',
  metaTitle: 'QC Inspection in China Before Balance Payment: What to Check',
  metaDescription:
    'Use this QC inspection China before balance payment checklist to check finished goods, defects, packaging, labels, cartons, and shipment readiness before final payment.',
  h1: 'QC Inspection in China Before Balance Payment: What to Check',
  eyebrow: 'QC inspection China before balance payment',
  image: {
    alt: 'Agent Huang checking finished goods packaging and cartons before balance payment in China',
    height: 900,
    src: '/images/service-qc-inspection.webp',
    width: 1600,
  },
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
  sections: [
    {
      id: 'why-before-balance',
      title: 'Why QC inspection before balance payment matters',
      paragraphs: [
        'Before balance payment, the supplier still has a reason to correct issues. After payment, the buyer often has less leverage, and every correction may compete with pickup schedules, warehouse space, and freight deadlines.',
        'The inspection should not be a generic photo collection. It should focus on the defects, packaging issues, label mistakes, and shipment blockers that affect the buyer decision in front of you.',
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
      title: 'What to check during QC inspection in China before balance payment',
      paragraphs: [
        'The exact checklist depends on your product, but the structure should stay practical: check what the supplier promised, what the buyer approved, what the shipment needs, and what would be expensive to fix after pickup.',
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
      title: 'Agent Huang field notes from the balance-payment stage',
      paragraphs: [
        'The most common problem is not a dramatic factory failure. It is a small mismatch that becomes expensive because nobody checked it before payment: a wrong barcode, an accessory missing from every box, cartons weaker than expected, or a logo printed in the wrong position.',
        'Supplier photos often show the best-looking units. A buyer-side inspection needs wider context: sampled goods, carton rows, packaging details, label close-ups, defect examples, and a clear note about what was not checked.',
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
        {
          url: qcBeforeBalanceArticle.image.src,
          width: qcBeforeBalanceArticle.image.width,
          height: qcBeforeBalanceArticle.image.height,
          alt: qcBeforeBalanceArticle.image.alt,
        },
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
  const pageUrl = getAbsoluteUrl(qcBeforeBalanceArticle.href)

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: qcBeforeBalanceArticle.title,
      description: qcBeforeBalanceArticle.metaDescription,
      url: pageUrl,
      inLanguage: 'en',
      image: getAbsoluteUrl(qcBeforeBalanceArticle.image.src),
      author: {
        '@type': 'Person',
        name: 'Agent Huang',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Huang Sourcing',
        url: getAbsoluteUrl('/'),
        email: businessEmail,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': pageUrl,
      },
    },
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
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: qcBeforeBalanceArticle.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: getAbsoluteUrl('/'),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'China sourcing risk guides',
          item: getAbsoluteUrl('/china-sourcing-risk-guides'),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: qcBeforeBalanceArticle.title,
          item: pageUrl,
        },
      ],
    },
  ]
}
