import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  alibabaSupplierVerificationHref,
  alibabaSupplierVerificationPaymentArticleHref,
} from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

type ArticleSection = {
  bullets?: string[]
  id: string
  paragraphs: string[]
  title: string
}

type ChecklistGroup = {
  buyerDecision: string
  id: string
  items: string[]
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

export const alibabaSupplierVerificationPaymentArticle = {
  href: alibabaSupplierVerificationPaymentArticleHref,
  title: 'Alibaba Supplier Verification Checklist Before Payment',
  metaTitle: 'Alibaba Supplier Verification Checklist',
  metaDescription:
    'Use this Alibaba supplier verification checklist before payment. Check company identity, PI, bank beneficiary, product evidence, red flags, and when to hold payment.',
  publishedDate: 'June 4, 2026',
  publishedDateIso: '2026-06-04T09:00:00-04:00',
  h1: 'Alibaba Supplier Verification Checklist Before Payment',
  eyebrow: 'Alibaba supplier verification checklist',
  image: {
    alt: 'Agent Huang reviewing an Alibaba supplier profile, business documents, payment instructions, product sample, and checklist before buyer payment',
    height: 900,
    src: '/images/alibaba-supplier-verification-payment.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/alibaba-supplier-verification-payment.webp', width: 1600 },
    { height: 1200, src: '/images/alibaba-supplier-verification-payment-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/alibaba-supplier-verification-payment-1x1.webp', width: 1200 },
  ],
  intro:
    'An Alibaba supplier page can look complete, but the payment decision still depends on buyer-side evidence. Before you release a deposit, sample payment, tooling fee, or balance payment, check whether the supplier identity, PI, bank path, product scope, and next inspection checkpoint fit together.',
  answerSummary:
    'Do not treat an Alibaba profile, sales response, or low quote as verification by itself. Pay only when the company, payment instructions, pro forma invoice, product evidence, and correction plan are clear enough. Hold payment, request proof, revise the PI, arrange onsite checking, or stop when the evidence does not support the transfer.',
  primaryCta: {
    href: alibabaSupplierVerificationHref,
    label: 'Check Alibaba Supplier Risk',
  },
  secondaryCta: {
    href: '#payment-checklist',
    label: 'See the checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need help checking an Alibaba supplier before payment.

Alibaba supplier link:
Company name:
Product:
Payment stage:
PI / bank details:
Main concern:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#payment-checklist', label: 'Payment checklist' },
    { href: '#what-to-check', label: 'What to check' },
    { href: '#payment-path', label: 'Payment path' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#evidence-basis', label: 'Evidence basis' },
    { href: '#documents', label: 'What to send' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Alibaba supplier profile name, Chinese legal name, business license, quote issuer, PI issuer, and payment beneficiary match or are clearly explained',
    'The supplier role is clear enough: factory, trading company, exporter, agent, or mixed role tied to the actual order',
    'The PI locks product specification, quantity, materials, finish, packaging, labels, lead time, payment split, and inspection timing',
    'Bank details are not changed casually and any third-party or offshore beneficiary is explained in writing before payment',
    'The product evidence matches the exact item you are paying for, not only catalog photos, showroom samples, or a best-looking unit',
    'The buyer has a written checkpoint before the next payment: sample approval, production photo set, onsite check, QC inspection, or rework confirmation',
    'Any red flag leads to a buyer decision: pay, hold, revise PI, verify onsite, inspect, reduce order size, or stop before payment',
  ],
  checklistGroups: [
    {
      id: 'identity',
      title: 'Company identity',
      items: [
        'Alibaba profile name, Chinese company name, business license, registered address, and contact identity',
        'Whether the company quoting, invoicing, producing, exporting, and receiving money is the same entity or a clearly explained related entity',
        'Supplier role signals from address, product category, sample source, factory photos, and willingness to accept verification',
      ],
      buyerDecision:
        'Continue only if the supplier identity is consistent enough. Hold payment or request verification if company names, roles, or addresses conflict.',
    },
    {
      id: 'payment',
      title: 'Payment path',
      items: [
        'PI issuer, bank beneficiary, account name, payment currency, bank country or region, and latest payment instruction history',
        'Written explanation for personal accounts, unrelated companies, Hong Kong entities, or beneficiary names that differ from the supplier profile',
        'Whether payment pressure is replacing normal document review before the buyer has enough evidence',
      ],
      buyerDecision:
        'Pay only when the beneficiary and payment path make sense. Hold or change terms if the account story is unclear.',
    },
    {
      id: 'pi-scope',
      title: 'PI and order scope',
      items: [
        'Exact product name, model, material, size, color, finish, accessories, packaging, labels, carton marks, quantity, price, and lead time',
        'Deposit, sample fee, tooling fee, balance timing, Incoterms, pickup point, and inspection timing before balance or shipment release',
        'Correction responsibility if the product, packaging, label, or shipment evidence fails before the next payment',
      ],
      buyerDecision:
        'Revise the PI before payment if it cannot support later QC, payment discussion, or shipment release decisions.',
    },
    {
      id: 'product-evidence',
      title: 'Product and production evidence',
      items: [
        'Sample photos, pre-production sample notes, workshop or warehouse context, category fit, packaging sample, label files, and current order photos',
        'Whether the evidence belongs to this supplier and this order, not a generic catalog, borrowed factory image, or unrelated product line',
        'The next proof point after payment: sample approval, material photo, production start, inspection booking, or carton readiness evidence',
      ],
      buyerDecision:
        'Proceed only when the product evidence supports the order. Ask for stronger proof, reduce order size, or arrange an onsite check if the evidence is thin.',
    },
  ] satisfies ChecklistGroup[],
  sections: [
    {
      id: 'what-to-check',
      title: 'What to check on an Alibaba supplier before payment',
      paragraphs: [
        'Start with alignment, not trust language. The Alibaba profile, Chinese legal company, business license, quote, PI, bank beneficiary, contact identity, and claimed factory role should not tell different stories. Some differences can be legitimate, but the supplier should explain them before money moves.',
        'Then check whether the order details are specific enough to protect the next buyer decision. If the PI only says a broad product name and total price, it will be hard to argue later about wrong material, wrong logo, missing accessories, weak carton, or unclear labels.',
      ],
      bullets: [
        'Company identity: Chinese legal name, license, unified credit code, registered address, contact identity, and supplier profile name',
        'Supplier role: factory, trading company, exporter, sourcing agent, or mixed role based on visible evidence',
        'Order scope: model, material, dimensions, finish, packaging, labels, accessories, quantity, lead time, and QC checkpoint',
        'Payment terms: deposit, sample fee, tooling fee, balance timing, bank beneficiary, currency, and reason for any mismatch',
      ],
    },
    {
      id: 'payment-path',
      title: 'Why the bank beneficiary matters before payment',
      paragraphs: [
        'A supplier can sound professional while the payment path still creates avoidable risk. The buyer should know who receives the money, why that entity receives it, and how it connects to the supplier selling the order. A mismatch is not automatically fraud, but it is not something to ignore.',
        'Before payment, ask for the PI and payment instructions in writing. If the beneficiary changes near transfer date, the bank account belongs to a personal name, or the supplier asks you to pay a different company without explanation, slow down and request proof before release.',
      ],
      bullets: [
        'Match the beneficiary against the PI issuer and supplier identity',
        'Ask for written explanation when the payment entity differs',
        'Do not let an urgent production slot replace bank-path review',
        'Keep the buyer decision clear: pay, hold, change terms, or stop',
      ],
    },
    {
      id: 'field-notes',
      title: 'Agent Huang field notes from China-side supplier checks',
      paragraphs: [
        'The strongest warning sign is usually a cluster, not one odd detail. A supplier may use a polished Alibaba page, but the English name, Chinese company name, PI issuer, bank beneficiary, factory address, and product evidence can still point in different directions.',
        'Agent Huang treats the pre-payment moment as the lowest-cost time to slow down. The goal is not to accuse the supplier. The goal is to connect visible evidence to a practical buyer decision before leverage drops.',
      ],
      bullets: [
        'Ask practical questions before the supplier controls the timeline',
        'Use the PI as a future inspection reference, not just a payment request',
        'Do not accept a profile badge or sales answer as payment-path proof',
        'Write the next checkpoint before the next payment is due',
      ],
    },
    {
      id: 'after-check',
      title: 'What to do after the checklist result',
      paragraphs: [
        'A clean checklist does not mean zero risk. It means the visible supplier, payment, product, and order evidence is strong enough for the next scoped decision. The next decision may still be to inspect before balance payment or check cartons before pickup.',
        'If the checklist finds gaps, do not rush to pay and hope the supplier fixes the details later. Ask for missing proof, revise the PI, reduce the first order size, use safer terms, arrange onsite verification, or stop before payment if the evidence remains weak.',
      ],
      bullets: [
        'Proceed when identity, PI, bank path, product evidence, and next checkpoint are clear',
        'Hold payment when company names, beneficiary, product scope, or timeline are unclear',
        'Escalate to onsite verification when documents cannot resolve the mismatch',
        'Inspect before balance payment if goods are already in production or finished',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Alibaba profile and company identity',
      whatWasChecked:
        'Supplier profile, Chinese legal name, business license, registered address, contact identity, claimed factory or trader role, and product category fit',
      buyerDecision: 'Continue, request verification, ask for more proof, or stop before payment',
    },
    {
      riskNode: 'PI and quote',
      whatWasChecked:
        'PI issuer, quote terms, exact specs, quantity, price, lead time, deposit or balance timing, Incoterms, packaging, labels, and correction responsibility',
      buyerDecision: 'Approve PI, revise PI, reduce order size, or hold payment until scope is clear',
    },
    {
      riskNode: 'Bank beneficiary',
      whatWasChecked:
        'Beneficiary name, account ownership, bank country or region, currency, payment instruction changes, and explanation for any entity mismatch',
      buyerDecision: 'Pay only if explained; hold, change terms, or stop if the payment path is unclear',
    },
    {
      riskNode: 'Product evidence',
      whatWasChecked:
        'Sample evidence, product photos, packaging sample, label files, workshop or warehouse context, current order evidence, and product-category fit',
      buyerDecision: 'Proceed, request sample proof, arrange onsite check, or delay payment',
    },
    {
      riskNode: 'Next checkpoint',
      whatWasChecked:
        'Sample approval, production evidence, QC timing before balance, rework responsibility, pickup readiness, and shipment release conditions',
      buyerDecision: 'Pay with a written checkpoint, hold payment, inspect, re-check, or delay pickup',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Alibaba supplier profile, Chinese company identity, business license, quote, PI, bank beneficiary, and payment instructions shared before money moves.',
    'Product sample, packaging, label, carton, order specification, workshop, warehouse, and production-stage evidence available before the next payment.',
    'Buyer-stage facts such as deposit deadline, sample fee, tooling fee, balance timing, pickup plan, FBA shipment risk, and correction leverage.',
    'China-side sourcing workflow judgment with clear limits around legal certainty, hidden defects, platform status, customs compliance, and future supplier behavior.',
  ],
  whatToSend: [
    'Alibaba supplier link and any other supplier website or profile',
    'Chinese company name, English company name, business license, and contact details',
    'Quote, PI, bank payment instructions, payment deadline, and requested payment amount',
    'Product photos, approved sample notes, specification sheet, packaging requirements, label files, and carton requirements',
    'Order value, quantity, payment stage, target ship date, pickup plan, and balance-payment timing',
    'Any mismatch, pressure, changed bank detail, unclear factory role, or product evidence concern you noticed',
  ],
  redFlags: [
    'The Alibaba profile name, PI issuer, business license, and bank beneficiary do not match and the supplier cannot explain why',
    'The supplier pushes payment before sharing basic Chinese company or PI details',
    'Payment is requested to a personal account, unrelated company, or changed account near transfer date',
    'The PI is too vague to support later QC inspection, rework discussion, or balance-payment decision',
    'The supplier refuses reasonable proof of product, sample, packaging, or production responsibility',
    'The supplier says inspection is unnecessary or can happen only after full payment',
    'Factory address, pickup address, invoice company, or contact identity changes when verification is discussed',
  ],
  scopeLimits: [
    'An Alibaba supplier verification checklist reduces visible supplier, payment, and order-stage risk; it does not promise zero risk',
    'It does not replace legal due diligence, contract review, dispute recovery, tax advice, or escrow advice',
    'It does not replace laboratory testing, regulated product compliance, customs review, or certification ownership checks when those are required',
    'It does not prove every hidden production issue before goods are made or packed',
    'It does not guarantee platform protection, supplier performance, customs clearance, Amazon receiving approval, or future shipment quality',
    'It works best when the buyer provides the current supplier link, PI, bank details, product scope, order stage, and decision deadline',
  ],
  relatedLinks: [
    {
      href: alibabaSupplierVerificationHref,
      label: 'Alibaba Supplier Verification',
      note: 'Use when you need a focused buyer-side check of an Alibaba supplier before money moves.',
    },
    {
      href: '/supplier-verification-china-checklist',
      label: 'Supplier verification China checklist',
      note: 'Use the broader checklist for supplier identity, payment, production, pickup, and shipment-stage risk.',
    },
    {
      href: '/how-to-verify-chinese-supplier-before-deposit',
      label: 'How to verify a Chinese supplier before deposit',
      note: 'Use when the immediate decision is whether the first payment should be released.',
    },
    {
      href: '/chinese-supplier-deposit-decision',
      label: 'Should I pay a 30% supplier deposit?',
      note: 'Use when the payment question is specifically a 30% deposit release decision.',
    },
    {
      href: '/qc-inspection-china-before-balance-payment',
      label: 'QC before balance payment',
      note: 'Use when finished goods need product, packaging, carton, and label evidence before balance release.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'How do I verify an Alibaba supplier before payment?',
      answer:
        'Check the Alibaba profile against the Chinese legal name, business license, PI issuer, bank beneficiary, product evidence, order scope, and next inspection checkpoint. Pay only when those signals are consistent enough for your risk level.',
    },
    {
      question: 'Is an Alibaba supplier profile enough to release payment?',
      answer:
        'No. A supplier profile is useful context, but it does not replace checking the company identity, payment path, PI details, product evidence, and buyer-stage risks before deposit or balance payment.',
    },
    {
      question: 'What if the bank beneficiary is different from the supplier name?',
      answer:
        'Pause and ask for a written explanation before payment. Some entity differences can be legitimate, but the buyer should understand the relationship and risk before sending money.',
    },
    {
      question: 'What documents should I ask an Alibaba supplier for before paying?',
      answer:
        'Ask for the Chinese business license, Chinese company name, quote, PI, bank instructions, product specification, sample or production evidence, packaging and label requirements, and inspection timing before the next payment.',
    },
    {
      question: 'Can Huang Sourcing check an Alibaba supplier before I pay?',
      answer:
        'Yes. Send the Alibaba supplier link, company name, PI, bank details, product information, payment stage, and your concern. Huang Sourcing can review visible supplier and payment risk from the buyer side.',
    },
    {
      question: 'Does supplier verification guarantee the Alibaba order is safe?',
      answer:
        'No. It reduces visible risk before payment, but it does not replace legal due diligence, lab testing, regulated compliance review, or QC inspection before balance payment or shipment release.',
    },
  ] satisfies FaqItem[],
}

export function makeAlibabaSupplierVerificationPaymentArticleMetadata(): Metadata {
  const canonicalPath = alibabaSupplierVerificationPaymentArticle.href

  return {
    title: alibabaSupplierVerificationPaymentArticle.metaTitle,
    description: alibabaSupplierVerificationPaymentArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: alibabaSupplierVerificationPaymentArticle.metaTitle,
      description: alibabaSupplierVerificationPaymentArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: getArticleOpenGraphImages(alibabaSupplierVerificationPaymentArticle),
    },
    twitter: {
      card: 'summary_large_image',
      title: alibabaSupplierVerificationPaymentArticle.metaTitle,
      description: alibabaSupplierVerificationPaymentArticle.metaDescription,
      images: [alibabaSupplierVerificationPaymentArticle.image.src],
    },
  }
}

export function makeAlibabaSupplierVerificationPaymentArticleJsonLd() {
  return [
    makeArticleJsonLd(alibabaSupplierVerificationPaymentArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Alibaba supplier verification checklist before payment',
      itemListElement: alibabaSupplierVerificationPaymentArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(alibabaSupplierVerificationPaymentArticle.faqs),
  ]
}
