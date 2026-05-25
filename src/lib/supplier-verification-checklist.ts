import type { Metadata } from 'next'

import {
  businessEmail,
  supplierVerificationChecklistHref,
} from '@/lib/site-links'
import { getAbsoluteUrl } from '@/lib/site-url'

type ChecklistStage = {
  buyerDecision: string[]
  checked: string[]
  fieldNote: string
  id: string
  summary: string
  title: string
}

type DecisionRow = {
  decision: string
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

export const supplierVerificationChecklist = {
  href: supplierVerificationChecklistHref,
  title: 'China Supplier Verification Checklist for Overseas Buyers',
  metaTitle: 'China Supplier Verification Checklist for Overseas Buyers',
  metaDescription:
    'Use this supplier verification China checklist before deposit, balance payment, pickup, or FBA shipment. Know what to check and when to stop.',
  h1: 'China Supplier Verification Checklist for Overseas Buyers',
  eyebrow: 'Supplier verification China checklist',
  image: {
    alt: 'Agent Huang checking China supplier cartons and documents before shipment',
    height: 900,
    src: '/images/service-supplier-verification.webp',
    width: 1600,
  },
  intro:
    'Finding a supplier in China is easy. Verifying whether that supplier is safe enough to receive your money is the harder part. This checklist is written for overseas buyers who need a practical decision before deposit, balance payment, pickup, or Amazon FBA shipment.',
  answerSummary:
    'A useful supplier verification checklist should connect each check to a buyer decision: pay, pause, renegotiate, inspect further, route to a prep warehouse, or walk away. The goal is not to collect documents. The goal is to find mismatches before money or goods are trapped.',
  primaryCta: {
    href: '/free-china-sourcing-risk-check',
    label: 'Free Risk Check',
  },
  secondaryCta: {
    href: '#stage-checklist',
    label: 'See the checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a free supplier verification risk check.

Supplier link / company name:
Product:
Order stage:
Deposit / balance / pickup deadline:
Main concern:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#stage-checklist', label: 'Stage checklist' },
    { href: '#before-deposit', label: 'Before deposit' },
    { href: '#before-balance-payment', label: 'Before balance payment' },
    { href: '#before-pickup', label: 'Before pickup' },
    { href: '#before-fba-shipment', label: 'Before FBA shipment' },
    { href: '#documents', label: 'Documents to request' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Chinese business license and registered company name',
    'Factory or trading company identity',
    'Contact person and payment account consistency',
    'Product category experience and production role',
    'Actual production, packing, and workshop status when relevant',
    'Sample, specification, and order consistency',
    'Compliance documents, test reports, and certificate ownership',
    'Packaging, labeling, carton marks, and FBA requirements',
    'Pre-shipment inspection evidence before balance payment',
    'Pickup readiness and logistics handover risk',
  ],
  stages: [
    {
      id: 'before-deposit',
      title: 'Before Deposit',
      summary:
        'Before paying a deposit, confirm whether the supplier is real, relevant, and consistent enough to continue. This is the cheapest time to slow down unclear claims.',
      checked: [
        'Chinese business license, Chinese company name, unified social credit code, registered address, legal representative, and business scope',
        'Supplier quotation, pro forma invoice, bank account, platform profile, email signature, and WeChat contact consistency',
        'Factory, trading company, export company, or sourcing middleman signals',
        'Product category fit, MOQ logic, lead time, tooling terms, and deposit request',
      ],
      buyerDecision: [
        'Pay deposit only if the company identity, contact identity, payment path, and product category fit together',
        'Pause if the supplier requests payment to a personal account, unrelated Hong Kong account, or different mainland company without a clear reason',
        'Walk away if the supplier refuses basic Chinese registration information or pressures payment before verification',
      ],
      fieldNote:
        'Agent Huang does not only ask whether a company is registered. A registered company can still be the wrong partner. The practical question is whether the company matches the product, payment path, and order risk.',
    },
    {
      id: 'before-balance-payment',
      title: 'Before Balance Payment',
      summary:
        'Before balance payment is the strongest checkpoint because the buyer has already paid a deposit but still has leverage. A supplier saying production is finished is not verification.',
      checked: [
        'Finished quantity, product appearance, dimensions, materials, color, logo placement, accessories, and manuals',
        'Packaging, carton strength, carton marks, barcode files, labels, and order-specific packing requirements',
        'For Amazon FBA: FNSKU labels, carton labels, poly bag warnings, set labels, carton weight, and carton dimensions',
        'For regulated products: whether certificates and test reports match the exact product, model, material, and applicant',
      ],
      buyerDecision: [
        'Pay balance only after goods, packaging, labels, and documents match the agreed order requirements',
        'Hold payment if defects, incomplete cartons, missing labels, or unclear finished quantity are found',
        'Renegotiate or request rework when the issue can be corrected before shipment release',
      ],
      fieldNote:
        'Close-up photos of perfect samples are weak evidence. Before balance, buyers need bulk-goods context: cartons, labels, quantities, packing details, and the actual condition of goods that will ship.',
    },
    {
      id: 'before-pickup',
      title: 'Before Pickup',
      summary:
        'Pickup is where small operational mistakes become expensive delays. Production may be acceptable, but the shipment can still fail if the handover is not ready.',
      checked: [
        'Pickup address, supplier contact, loading time, warehouse access, carton count, gross weight, and volume',
        'Packing list, commercial invoice, shipping marks, carton condition, and loading readiness',
        'Who is responsible for loading, local delivery fees, waiting fees, damaged cartons, and missing cartons',
        'Whether the pickup address matches the verified supplier or has a clear operational reason for being different',
      ],
      buyerDecision: [
        'Approve pickup only when carton count, documents, and loading readiness are confirmed',
        'Delay pickup if the supplier cannot provide final carton quantity or a packing list',
        'Escalate if the pickup address changes and the supplier cannot explain why',
      ],
      fieldNote:
        'A shipment that is almost ready is not ready. Forwarder pickup should be released only when cartons, documents, access, and contact details are specific enough for the handover to happen without guesswork.',
    },
    {
      id: 'before-fba-shipment',
      title: 'Before FBA Shipment',
      summary:
        'FBA shipments need stricter checking because Amazon problems often appear after goods are already overseas. The supplier may understand production but not Amazon receiving rules.',
      checked: [
        'Amazon shipment plan, FNSKU labels, carton labels, SKU separation, bundle rules, and poly bag rules',
        'Carton weight, carton dimensions, country of origin marking, fragile protection, and shipment-plan consistency',
        'For multi-SKU orders: carton-level SKU and quantity confirmation before goods leave China',
        'Whether goods should go directly to FBA or first route through a prep warehouse',
      ],
      buyerDecision: [
        'Ship to FBA only when production, carton labeling, and shipment plan are aligned',
        'Send to a prep warehouse first if labels, bundles, packaging, or SKU separation are uncertain',
        'Avoid direct-to-Amazon shipment if the supplier has never handled the category or cannot provide carton-level confirmation',
      ],
      fieldNote:
        'FBA risk is often created by small prep details: one wrong label, mixed SKU carton, missing warning label, or incorrect carton size can turn a cheap direct shipment into an expensive receiving problem.',
    },
  ] satisfies ChecklistStage[],
  decisionRows: [
    {
      riskNode: 'Before deposit',
      whatWasChecked:
        'Business license, Chinese company name, payment account, company-role signals, product category fit, and quote terms',
      decision: 'Pay, pause, ask for more evidence, or reject the supplier',
    },
    {
      riskNode: 'Before sample approval',
      whatWasChecked:
        'Material, size, logo, finish, function, packaging expectation, and spec gaps',
      decision: 'Approve sample, revise specification, or compare suppliers',
    },
    {
      riskNode: 'Before mass production',
      whatWasChecked:
        'Final specification sheet, order quantity, lead time, QC standard, packaging, and labels',
      decision: 'Start production or clarify gaps before the deposit becomes harder to recover',
    },
    {
      riskNode: 'Before balance',
      whatWasChecked:
        'Bulk goods, quantity, defects, packaging, labels, cartons, and documents',
      decision: 'Pay balance, hold payment, request rework, or schedule re-inspection',
    },
    {
      riskNode: 'Before pickup',
      whatWasChecked:
        'Carton count, packing list, pickup address, warehouse access, and loading readiness',
      decision: 'Release pickup, delay pickup, or escalate handover risk',
    },
    {
      riskNode: 'Before FBA shipment',
      whatWasChecked:
        'FNSKU labels, carton labels, SKU separation, Amazon packing rules, and shipment-plan fit',
      decision: 'Ship to FBA, correct prep issues, or route through a prep warehouse',
    },
  ] satisfies DecisionRow[],
  documents: [
    'Chinese business license',
    'Quotation with Chinese company name',
    'Pro forma invoice and bank account details',
    'Product specification sheet and approved sample notes',
    'Production photos or videos tied to the current order',
    'Packing list and commercial invoice',
    'Test reports or certificates when relevant',
    'Inspection photos or inspection report',
    'FNSKU label files, carton labels, and shipment-plan screenshots for FBA orders',
  ],
  redFlags: [
    'The supplier refuses to provide the Chinese company name',
    'Payment is requested to a personal account or unrelated company',
    'Quotation, invoice, bank beneficiary, and supplier profile use different names without explanation',
    'The supplier avoids showing bulk production or carton-level evidence',
    'Certificates do not match the exact product, model, material, or applicant',
    'The supplier says inspection is unnecessary before balance payment',
    'Final carton count is still unknown before pickup',
    'FBA labels, carton labels, or SKU separation are unclear before direct shipment',
  ],
  scopeLimits: [
    'Supplier verification reduces visible risk, but it does not remove all sourcing risk',
    'It does not replace legal due diligence, contract review, customs advice, or dispute resolution',
    'It does not replace laboratory testing, product certification, or regulated compliance review',
    'It cannot guarantee future production quality if the supplier changes materials or process later',
    'It cannot guarantee Amazon receiving approval, customs clearance speed, or sales performance',
    'It works best when the buyer provides clear specifications, payment terms, inspection standards, and shipping instructions',
  ],
  relatedLinks: [
    {
      href: '/supplier-verification-china',
      label: 'Supplier Verification China',
      note: 'Use when a new supplier needs a focused buyer-side review before deposit.',
    },
    {
      href: '/before-deposit-china-supplier-check',
      label: 'Before Deposit Supplier Check',
      note: 'Use when the immediate decision is whether to send the first payment.',
    },
    {
      href: '/before-balance-payment-qc-china',
      label: 'Before Balance Payment QC',
      note: 'Use when production is ready and you still control the balance payment.',
    },
    {
      href: '/before-amazon-fba-shipment-china',
      label: 'Before Amazon FBA Shipment',
      note: 'Use when FBA labels, carton rules, and shipment release need checking in China.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What is supplier verification in China?',
      answer:
        'Supplier verification in China means checking whether the supplier identity, company details, payment account, product capability, production status, documents, and shipment readiness match the buyer order requirements.',
    },
    {
      question: 'Is a Chinese business license enough to verify a supplier?',
      answer:
        'No. A business license only shows that a company exists. It does not prove that the company manufactures your product, controls production, owns the certificates, or can ship the order correctly.',
    },
    {
      question: 'When should I verify a China supplier?',
      answer:
        'Verify before deposit, before balance payment, before pickup, and before FBA shipment. Each stage has different risks and should support a specific buyer decision.',
    },
    {
      question: 'Can Huang Sourcing verify a supplier before I pay?',
      answer:
        'Yes. Send the supplier name or link, product, quotation, invoice, payment request, and current order stage. Huang Sourcing can review the visible risk points before you decide whether to pay.',
    },
    {
      question: 'What should I do if supplier information does not match?',
      answer:
        'Pause payment and ask for clarification. If the supplier cannot explain why the company name, bank account, invoice, or product documents do not match, treat the order as high risk.',
    },
    {
      question: 'Does supplier verification guarantee a risk-free order?',
      answer:
        'No. It reduces visible supplier and order-stage risk, but it does not replace legal due diligence, laboratory testing, product compliance review, or QC inspection when those are needed.',
    },
  ] satisfies FaqItem[],
}

export function makeSupplierVerificationChecklistMetadata(): Metadata {
  const canonicalPath = supplierVerificationChecklist.href

  return {
    title: supplierVerificationChecklist.metaTitle,
    description: supplierVerificationChecklist.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: supplierVerificationChecklist.metaTitle,
      description: supplierVerificationChecklist.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        {
          url: supplierVerificationChecklist.image.src,
          width: supplierVerificationChecklist.image.width,
          height: supplierVerificationChecklist.image.height,
          alt: supplierVerificationChecklist.image.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: supplierVerificationChecklist.metaTitle,
      description: supplierVerificationChecklist.metaDescription,
      images: [supplierVerificationChecklist.image.src],
    },
  }
}

export function makeSupplierVerificationChecklistJsonLd() {
  const pageUrl = getAbsoluteUrl(supplierVerificationChecklist.href)

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: supplierVerificationChecklist.title,
      description: supplierVerificationChecklist.metaDescription,
      url: pageUrl,
      inLanguage: 'en',
      image: getAbsoluteUrl(supplierVerificationChecklist.image.src),
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
      name: 'Supplier verification China checklist',
      itemListElement: supplierVerificationChecklist.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: supplierVerificationChecklist.faqs.map((faq) => ({
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
          name: supplierVerificationChecklist.title,
          item: pageUrl,
        },
      ],
    },
  ]
}
