import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { supplierVerificationVsFactoryAuditArticleHref } from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

type ArticleSection = {
  bullets?: string[]
  id: string
  paragraphs: string[]
  title: string
}

type ScopeRow = {
  auditScope: string
  buyerDecision: string
  checkArea: string
  verificationScope: string
}

type DecisionRow = {
  buyerDecision: string
  riskNode: string
  whatWasChecked: string
}

type EvidenceGroup = {
  items: string[]
  title: string
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

export const supplierVerificationVsFactoryAuditArticle = {
  href: supplierVerificationVsFactoryAuditArticleHref,
  title: 'Is Supplier Verification the Same as a Factory Audit?',
  metaTitle: 'Supplier Verification vs Factory Audit',
  metaDescription:
    'Supplier verification vs factory audit: know which China-side check fits before deposit, onsite review, payment release, or supplier onboarding.',
  h1: 'Is Supplier Verification the Same as a Factory Audit?',
  eyebrow: 'Supplier verification vs factory audit',
  publishedDate: 'May 25, 2026',
  publishedDateIso: '2026-05-25T01:29:03-04:00',
  image: {
    alt: 'Agent Huang comparing supplier verification documents with factory audit scope inside a China factory office',
    height: 900,
    src: '/images/supplier-verification-vs-factory-audit.webp',
    variants: [
      { height: 900, src: '/images/supplier-verification-vs-factory-audit.webp', width: 1600 },
      { height: 900, src: '/images/supplier-verification-vs-factory-audit-4x3.webp', width: 1200 },
      { height: 1200, src: '/images/supplier-verification-vs-factory-audit-1x1.webp', width: 1200 },
    ],
    width: 1600,
  },
  intro:
    'No. Supplier verification and a factory audit answer different buyer decisions. Supplier verification is usually an early China-side risk check before deposit, supplier selection, or payment release. A factory audit is a deeper onsite review of the factory site, management system, production capability, and operating controls.',
  answerSummary:
    'Use supplier verification when you need to decide whether to continue, ask harder questions, hold payment, or request an onsite check. Use a factory audit when the buyer needs structured evidence that a factory can support a larger order, vendor program, compliance requirement, or long-term supply relationship.',
  primaryCta: {
    href: '/supplier-verification-china',
    label: 'Supplier Verification',
  },
  secondaryCta: {
    href: '#scope-comparison',
    label: 'Compare the scope',
  },
  whatsappMessage: `Hi Agent Huang,

I need help deciding whether supplier verification or a factory audit is the right check.

Supplier link / company name:
Product:
Order stage:
Deposit or payment deadline:
Factory address if available:
Main concern:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#scope-comparison', label: 'Scope comparison' },
    { href: '#verification-scope', label: 'Supplier verification' },
    { href: '#audit-scope', label: 'Factory audit' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#evidence-basis', label: 'Evidence basis' },
    { href: '#documents', label: 'What to send' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Supplier verification checks visible identity, quote, payment, address, product-fit, and order-stage signals before a buyer commits more money',
    'A factory audit checks the onsite factory system, production capability, equipment, process controls, quality management, and working conditions within a defined audit scope',
    'Before deposit, supplier verification is often the faster decision filter because the buyer needs to know whether to pay, pause, or ask for deeper proof',
    'For a large order, regulated buyer program, or long-term vendor setup, a factory audit may be needed after basic supplier identity and payment risk are clear',
    'Neither check replaces pre-shipment QC, product testing, legal due diligence, contract review, or customs compliance work when those are required',
    'If the supplier identity, bank account, factory address, and production role do not align, verify first and avoid treating polished audit claims as payment evidence',
  ],
  scopeRows: [
    {
      checkArea: 'Buyer timing',
      verificationScope:
        'Early supplier selection, before deposit, before balance, or when payment and company details feel unclear',
      auditScope:
        'Before approving a factory as a vendor, placing a larger order, or confirming long-term production capability',
      buyerDecision: 'Choose the check that matches the next money or approval decision',
    },
    {
      checkArea: 'Main evidence',
      verificationScope:
        'Business license, Chinese legal name, quote, proforma invoice, bank beneficiary, address signals, sample source, and buyer-stage facts',
      auditScope:
        'Onsite production floor, equipment, QC process, management system, document control, warehouse, capacity, and working environment',
      buyerDecision: 'Use verification for visible mismatch risk; use audit for factory capability and control evidence',
    },
    {
      checkArea: 'Typical output',
      verificationScope:
        'Buyer-side risk notes, matched or mismatched signals, questions to ask, and a practical proceed, caution, hold, or stop recommendation',
      auditScope:
        'Structured onsite findings, audit checklist, photos, score or observations, and factory improvement or approval notes',
      buyerDecision: 'Request the output that will actually support payment, supplier approval, or onboarding',
    },
    {
      checkArea: 'What it cannot prove',
      verificationScope:
        'Cannot prove every onsite process, future production quality, full ownership, compliance status, or hidden operational problems',
      auditScope:
        'Cannot guarantee future quality, eliminate fraud risk, replace product inspection, or prove every future shipment will match the audit day',
      buyerDecision: 'Keep scope limits visible before releasing money or relying on one report',
    },
  ] satisfies ScopeRow[],
  sections: [
    {
      id: 'why-confused',
      title: 'Why buyers confuse supplier verification with a factory audit',
      paragraphs: [
        'Both services are used to reduce supplier risk, so suppliers and buyers often use the words loosely. The practical difference is the buyer decision. Supplier verification asks whether this supplier identity, payment path, product claim, and order-stage evidence are consistent enough to continue. A factory audit asks whether the physical factory and its operating system are strong enough for a defined production relationship.',
        'A buyer before deposit usually does not need a long audit scorecard first. They need to know whether the supplier name, Chinese license, quote issuer, bank account, factory role, and product capability signals fit together. When those basics are unclear, a full audit may be premature because the buyer may not even know which factory should be audited.',
      ],
      bullets: [
        'Use supplier verification to decide whether to pay, pause, ask for documents, request onsite proof, or stop before deposit',
        'Use a factory audit to decide whether a factory can be approved for larger production, vendor onboarding, or deeper capability review',
        'Do not use supplier verification as proof that the factory passed a full onsite audit',
        'Do not use an old audit report as proof that today\'s payment entity, order address, and product source are safe',
      ],
    },
    {
      id: 'verification-scope',
      title: 'What supplier verification checks before the buyer commits',
      paragraphs: [
        'Supplier verification is a buyer-side risk filter. It connects the documents and claims in front of the buyer to the next decision: continue, hold, verify onsite, change payment terms, or reject the supplier. The check is especially useful before deposit because that is when the buyer still has leverage and can slow down unclear claims.',
        'Agent Huang looks for alignment across visible evidence. The Chinese legal name should connect to the business license. The quote and proforma invoice should connect to the payment beneficiary. The claimed factory role should connect to an address, product category, sample source, and production evidence. When those signals conflict, the buyer should not treat a sales answer as verification.',
      ],
      bullets: [
        'Company identity: Chinese legal name, unified credit code, business scope, company chop, and profile name',
        'Payment risk: proforma invoice, bank beneficiary, account name, deposit request, quote issuer, and company-name consistency',
        'Supplier role: factory, trading company, exporter, sourcing middleman, or mixed role based on address and production signals',
        'Order-stage evidence: sample source, product photos, packaging marks, claimed factory address, pickup address, and current payment deadline',
        'Decision output: proceed, ask for more proof, schedule onsite visit, hold payment, or stop before deposit',
      ],
    },
    {
      id: 'audit-scope',
      title: 'What a factory audit usually checks onsite',
      paragraphs: [
        'A factory audit is deeper and more site-focused. It normally looks at the production location, management controls, process flow, equipment, warehouse, QC system, document control, capacity signals, and working conditions within an agreed audit scope. The buyer is checking whether the factory itself can support the order or vendor relationship.',
        'That onsite depth is useful when the supplier is important enough to justify it. It is also slower and more dependent on factory access. If the buyer only has a supplier link, a quote, and an urgent deposit request, verification may be the better first step. If the buyer already knows the factory and needs approval evidence, an audit may be the right next step.',
      ],
      bullets: [
        'Factory site: production area, warehouse, QC area, packing area, equipment, and product-category fit',
        'Management system: process control, inspection records, document control, nonconforming product handling, and corrective action practice',
        'Capacity signals: production line status, machine type, staff arrangement, subcontracting risk, and order load fit',
        'Audit limits: an audit is a point-in-time onsite review and does not replace shipment-specific QC or product testing',
      ],
    },
    {
      id: 'field-notes',
      title: 'Agent Huang field notes on choosing the right check',
      paragraphs: [
        'The risky moment is when a buyer asks for one kind of evidence and receives another. A supplier may send a business license when the buyer needs factory-site proof. Another supplier may send an old audit certificate when the buyer needs to know whether today\'s bank account and invoice match the company selling this order.',
        'From a China-side workflow view, the order stage should drive the scope. Before deposit, verify identity and payment risk. Before supplier approval, consider an onsite audit if the order justifies it. Before balance payment, inspect the actual goods. Before pickup or FBA shipment, check carton, label, and handover readiness.',
      ],
      bullets: [
        'If the supplier refuses basic Chinese company information, start with verification and slow down payment',
        'If the buyer must approve a factory for repeated production, define a factory audit scope clearly',
        'If goods are already finished, a factory audit is not a substitute for QC inspection of that shipment',
        'If the supplier changes company name, bank account, or pickup address, treat it as a verification issue before money moves',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Before deposit',
      whatWasChecked:
        'Chinese business license, legal name, quote issuer, proforma invoice, bank beneficiary, supplier role, product fit, and deposit request',
      buyerDecision: 'Use supplier verification to pay, pause, request clearer proof, or stop before deposit',
    },
    {
      riskNode: 'Factory role unclear',
      whatWasChecked:
        'Registered address, claimed factory address, production evidence, sample source, sales claims, and inspection or visit access',
      buyerDecision: 'Verify the supplier role first, then decide whether an onsite factory audit is needed',
    },
    {
      riskNode: 'Large order or vendor onboarding',
      whatWasChecked:
        'Production floor, equipment, QC process, warehouse, management controls, capacity signals, and audit-scope checklist',
      buyerDecision: 'Use a factory audit when supplier approval requires structured onsite capability evidence',
    },
    {
      riskNode: 'Before balance payment',
      whatWasChecked:
        'Finished goods, quantity, defects, packaging, labels, carton marks, inspection photos, and order-specific requirements',
      buyerDecision: 'Use QC inspection; do not rely on supplier verification or factory audit as shipment approval',
    },
    {
      riskNode: 'Before pickup or FBA shipment',
      whatWasChecked:
        'Carton count, packing list, pickup address, FNSKU labels, carton labels, SKU separation, and handover readiness',
      buyerDecision: 'Use shipment readiness or prep checks before goods leave China',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    {
      title: 'Document and payment evidence',
      items: [
        'Chinese business license, Chinese legal name, unified credit code, company chop, quote, proforma invoice, bank beneficiary, and payment terms',
        'Whether the company receiving money matches the company selling, quoting, producing, or arranging the order',
      ],
    },
    {
      title: 'Onsite and production signals',
      items: [
        'Claimed factory address, workshop photos or visit access, production category fit, machine/process evidence, QC area, packing area, and warehouse context',
        'Whether the evidence supports a verification decision or justifies a deeper factory audit',
      ],
    },
    {
      title: 'Buyer-stage workflow',
      items: [
        'Deposit deadline, sample status, order value, supplier approval needs, balance-payment leverage, pickup timing, and FBA shipment risk',
        'Which decision the buyer needs now: approve, hold, audit, inspect, re-check, relabel, repack, delay pickup, or stop',
      ],
    },
  ] satisfies EvidenceGroup[],
  whatToSend: [
    'Supplier website, marketplace profile, contact name, Chinese company name, and business license if available',
    'Quotation, proforma invoice, bank beneficiary, deposit request, payment terms, and any company chop photos',
    'Product photos, sample notes, specification sheet, packaging expectations, and order quantity',
    'Claimed factory address, office address, pickup address, inspection address, and any supplier-provided workshop photos',
    'Any audit report, certificate, factory introduction, or onsite photos the supplier already shared',
    'The buyer decision needed: pay deposit, request audit, approve factory, hold balance, inspect goods, or delay pickup',
  ],
  redFlags: [
    'The supplier says verification and factory audit are the same without explaining scope',
    'The company name on the profile, license, quote, invoice, and bank account does not match',
    'The supplier sends an old audit report but refuses current business license, invoice, or payment-account clarification',
    'The factory address changes when an onsite audit, inspection, or pickup is discussed',
    'The supplier claims factory ownership but only provides showroom photos or sales-office images',
    'The buyer is asked to pay urgently before the Chinese company identity and bank beneficiary are clear',
    'The supplier treats a factory audit as a replacement for pre-shipment QC on finished goods',
  ],
  scopeLimits: [
    'Supplier verification reduces visible supplier, quote, payment, and order-stage risk, but it does not prove every onsite factory control',
    'A factory audit gives deeper onsite evidence within its scope, but it does not guarantee future production quality or shipment-specific conformity',
    'Neither supplier verification nor factory audit replaces legal due diligence, contract review, tax advice, customs advice, or dispute resolution',
    'Neither check replaces laboratory testing, regulated product certification, or compliance review when those are required',
    'Neither check guarantees Amazon receiving approval, FBA compliance, customs clearance, or future supplier behavior',
    'The right scope depends on the buyer decision, order value, product risk, documents available, factory access, and payment stage',
  ],
  relatedLinks: [
    {
      href: '/supplier-verification-china',
      label: 'Supplier Verification China',
      note: 'Use when the immediate decision is whether a supplier is safe enough to continue before payment.',
    },
    {
      href: '/supplier-verification-china-checklist',
      label: 'Supplier verification China checklist',
      note: 'Use a broader checklist for license, company identity, payment, sample, and shipment-stage risk.',
    },
    {
      href: '/how-to-verify-chinese-supplier-before-deposit',
      label: 'How to verify a Chinese supplier before deposit',
      note: 'Use when the buyer needs a clear first-payment decision before money moves.',
    },
    {
      href: '/factory-vs-trading-company-china-practical-signals-buyers-can-check',
      label: 'Factory vs trading company practical signals',
      note: 'Use when the factory role is unclear before supplier selection or deposit.',
    },
    {
      href: '/qc-inspection-china-before-balance-payment',
      label: 'QC before balance payment',
      note: 'Use when finished goods need inspection evidence before the balance is released.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Is supplier verification the same as a factory audit?',
      answer:
        'No. Supplier verification is an early buyer-side risk check of supplier identity, payment, quote, address, role, and order-stage evidence. A factory audit is a deeper onsite review of the factory site, capability, process controls, and operating system within a defined audit scope.',
    },
    {
      question: 'Which check should I use before paying a deposit?',
      answer:
        'Before deposit, supplier verification is usually the first check because the buyer needs to decide whether the company identity, payment path, product fit, and supplier role are consistent enough to continue. If those signals are unclear, pause payment or request deeper onsite proof.',
    },
    {
      question: 'When does a factory audit make sense?',
      answer:
        'A factory audit makes sense when the buyer needs structured onsite evidence before approving a factory for a larger order, repeated production, vendor onboarding, or a buyer program that requires factory capability and management-system review.',
    },
    {
      question: 'Does supplier verification include an onsite visit?',
      answer:
        'Not automatically. Supplier verification can identify whether an onsite visit or factory audit is needed. If the buyer needs factory-floor evidence, the onsite scope should be quoted and agreed separately.',
    },
    {
      question: 'Can a factory audit replace pre-shipment QC inspection?',
      answer:
        'No. A factory audit reviews the factory system and capability. Pre-shipment QC checks the actual finished goods, quantity, defects, packaging, labels, carton marks, and shipment-specific requirements before balance payment or pickup.',
    },
    {
      question: 'What should I send Huang Sourcing to choose the right scope?',
      answer:
        'Send the supplier link, Chinese company name, business license, quote, proforma invoice, bank details, product photos, claimed factory address, order stage, payment deadline, and the decision you need: verify, audit, inspect, hold payment, or stop.',
    },
  ] satisfies FaqItem[],
}

export function makeSupplierVerificationVsFactoryAuditArticleMetadata(): Metadata {
  const canonicalPath = supplierVerificationVsFactoryAuditArticle.href

  return {
    title: supplierVerificationVsFactoryAuditArticle.metaTitle,
    description: supplierVerificationVsFactoryAuditArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: supplierVerificationVsFactoryAuditArticle.metaTitle,
      description: supplierVerificationVsFactoryAuditArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: getArticleOpenGraphImages(supplierVerificationVsFactoryAuditArticle),
    },
    twitter: {
      card: 'summary_large_image',
      title: supplierVerificationVsFactoryAuditArticle.metaTitle,
      description: supplierVerificationVsFactoryAuditArticle.metaDescription,
      images: [supplierVerificationVsFactoryAuditArticle.image.src],
    },
  }
}

export function makeSupplierVerificationVsFactoryAuditArticleJsonLd() {
  return [
    makeArticleJsonLd(supplierVerificationVsFactoryAuditArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Supplier verification vs factory audit buyer decision checklist',
      itemListElement: supplierVerificationVsFactoryAuditArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(supplierVerificationVsFactoryAuditArticle.faqs),
  ]
}
