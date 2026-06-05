import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { supplierVerificationChinaLimitsArticleHref } from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

type ArticleSection = {
  bullets?: string[]
  id: string
  paragraphs: string[]
  title: string
}

type ProofRow = {
  buyerDecision: string
  cannotProve: string
  canSupport: string
  checkArea: string
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

export const supplierVerificationChinaLimitsArticle = {
  href: supplierVerificationChinaLimitsArticleHref,
  title: 'Supplier Verification China: What It Can and Cannot Prove',
  metaTitle: 'Supplier Verification China Limits',
  metaDescription:
    'Supplier verification China guide: what buyer-side checks can prove before deposit, what they cannot prove, and when to hold payment or verify onsite.',
  h1: 'Supplier Verification China: What It Can and Cannot Prove',
  eyebrow: 'Supplier verification China limits',
  publishedDate: 'June 5, 2026',
  publishedDateIso: '2026-06-05T09:00:00-04:00',
  image: {
    alt: 'Agent Huang checking supplier verification documents, payment evidence, samples, and carton labels in a China factory office',
    height: 900,
    src: '/images/supplier-verification-china-limits.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/supplier-verification-china-limits.webp', width: 1600 },
    { height: 1200, src: '/images/supplier-verification-china-limits-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/supplier-verification-china-limits-1x1.webp', width: 1200 },
  ],
  intro:
    'Supplier verification in China can reduce visible supplier, payment, and order-stage risk before a buyer sends money. It can connect documents, company names, bank details, product evidence, and address signals to a practical decision. It cannot prove that the supplier is legally perfect, honest forever, or safe for every future order.',
  answerSummary:
    'Use supplier verification when you need a proceed, hold, verify further, or stop decision before deposit, sample payment, tooling fee, balance payment, or supplier selection. Keep the limits clear: verification supports buyer judgment from available evidence; it is not a legal guarantee, factory audit, QC inspection, lab test, or platform approval.',
  primaryCta: {
    href: '/supplier-verification-china',
    label: 'Check Supplier Verification Scope',
  },
  secondaryCta: {
    href: '#proof-matrix',
    label: 'See proof limits',
  },
  whatsappMessage: `Hi Agent Huang,

I need help understanding what supplier verification can and cannot prove for my China supplier.

Supplier link / company name:
Product:
Payment stage:
Files available:
Main concern:
Decision deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#what-to-check', label: 'What to check' },
    { href: '#what-it-proves', label: 'What it can prove' },
    { href: '#what-it-cannot-prove', label: 'What it cannot prove' },
    { href: '#field-notes', label: 'Field notes' },
    { href: '#proof-matrix', label: 'Proof matrix' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#evidence-basis', label: 'Evidence basis' },
    { href: '#documents', label: 'What to send' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Supplier verification China checks visible identity, payment, quote, address, role, product, and order-stage evidence before the buyer commits more money',
    'A clean check can support a continue, hold, request onsite proof, change payment terms, inspect later, or stop-before-deposit decision',
    'The check can confirm whether the company name, business license, PI issuer, bank beneficiary, and supplier profile appear consistent enough for the next step',
    'The check can identify mismatch risk around factory role, trader role, payment account, product category, pickup address, or sample source',
    'The check cannot guarantee supplier honesty, legal safety, financial health, future quality, hidden defects, customs clearance, or marketplace approval',
    'If the buyer needs factory-floor capability evidence, shipment-specific QC, lab testing, legal certainty, or regulated compliance review, supplier verification is not enough by itself',
  ],
  sections: [
    {
      id: 'what-to-check',
      title: 'How do I verify a Chinese supplier before deposit?',
      paragraphs: [
        'Verify a Chinese supplier before deposit by matching the supplier identity, Chinese legal name, business license, PI issuer, bank beneficiary, product evidence, claimed factory role, and order-stage facts. The buyer decision is simple: pay only when visible evidence supports the next step, and hold payment when the evidence conflicts.',
        'Agent Huang looks for alignment instead of relying on one polished profile or sales answer. The quote, proforma invoice, bank account, address, product photos, sample source, and supplier role should tell one coherent story. When they do not, the buyer still has leverage before deposit and can ask for clearer proof.',
      ],
      bullets: [
        'Company identity: Chinese legal name, business license, unified credit code, registered address, and contact details',
        'Payment path: PI issuer, bank beneficiary, account name, currency, deposit request, and any changed payment instructions',
        'Supplier role: factory, trading company, exporter, sourcing middleman, or mixed role based on available evidence',
        'Order evidence: product scope, sample source, specification, packaging needs, claimed factory address, pickup address, and timing',
        'Buyer decision: proceed, hold payment, request more proof, verify onsite, reduce order size, or stop before deposit',
      ],
    },
    {
      id: 'what-it-proves',
      title: 'What can supplier verification in China prove?',
      paragraphs: [
        'Supplier verification can prove whether the visible evidence available now is consistent enough for a scoped buyer decision. It can support identity, payment-path, supplier-role, product-fit, and order-stage conclusions when documents and China-side signals align. It should be treated as decision support, not as a promise that all supplier risk is gone.',
        'Useful proof is usually practical and bounded. A verified Chinese legal name can support company identity. A matched PI and bank beneficiary can support payment-path confidence. A claimed factory address plus production evidence can support a role judgment. None of those facts should be stretched beyond the evidence actually checked.',
      ],
      bullets: [
        'The company named in the license, profile, quote, PI, and bank path appears consistent or has an explained mismatch',
        'The supplier role is credible enough for the order stage based on address, product category, photos, samples, and access signals',
        'The order scope is clear enough to support later inspection, correction, or balance-payment discussion',
        'The buyer has a practical next action: pay, pause, ask more questions, arrange onsite proof, inspect goods, or stop',
      ],
    },
    {
      id: 'what-it-cannot-prove',
      title: 'What can supplier verification not prove?',
      paragraphs: [
        'Supplier verification cannot prove that a China supplier is risk-free, financially stable, legally perfect, or reliable for every future order. It cannot replace a factory audit, legal due diligence, lab test, regulated compliance review, product certification check, customs advice, pre-shipment inspection, or marketplace approval. Use the result within its scope.',
        'The limit matters because buyers sometimes ask verification to answer questions it cannot honestly answer. A business license does not prove future quality. A matched bank account does not prove all production will pass. A supplier video does not prove every onsite control. Each evidence type has a boundary.',
      ],
      bullets: [
        'Legal certainty, dispute outcome, contract enforceability, debt status, tax status, or litigation risk',
        'Full factory capability, management-system strength, labor conditions, process control, or capacity without an onsite audit scope',
        'Shipment-specific product quality, hidden defects, every unit condition, or correction completion without QC inspection access',
        'Laboratory test results, regulated certification ownership, chemical compliance, customs classification, or marketplace approval',
        'Future supplier behavior, future production quality, future bank-account safety, or damage after goods leave China',
      ],
    },
    {
      id: 'field-notes',
      title: 'Agent Huang field notes on using verification results',
      paragraphs: [
        'Agent Huang treats supplier verification as a payment-timing tool. The best result is not a vague safe or unsafe label; it is a reasoned decision before leverage drops. When names, payment details, product evidence, and address signals align, the buyer may proceed with safeguards. When they conflict, slow down.',
        'The most useful report states what was checked, what matched, what did not match, and what should happen next. If the next question is onsite capability, use a factory audit. If goods are finished, use QC inspection. If cartons are ready for pickup or FBA, check shipment readiness.',
      ],
      bullets: [
        'Ask for verification before deposit, not after the supplier already controls the timeline',
        'Treat unexplained company-name, PI, bank, factory-address, or pickup-address changes as payment-risk questions',
        'Use verification to decide whether a deeper onsite check is worth booking',
        'Do not release balance payment based only on early supplier verification when finished goods need QC evidence',
      ],
    },
  ] satisfies ArticleSection[],
  proofRows: [
    {
      checkArea: 'Company identity',
      canSupport:
        'The profile name, Chinese legal name, business license, quote issuer, PI issuer, and contact identity appear consistent enough for the current buyer decision.',
      cannotProve:
        'It does not prove legal perfection, debt status, ownership disputes, tax compliance, litigation risk, or every hidden company relationship.',
      buyerDecision:
        'Continue only if names and roles align or the supplier explains the relationship clearly in writing.',
    },
    {
      checkArea: 'Payment path',
      canSupport:
        'The bank beneficiary, PI issuer, account name, payment currency, and deposit request connect logically to the supplier selling the order.',
      cannotProve:
        'It does not guarantee future bank-account safety, recoverability after transfer, or that no fraud can happen later.',
      buyerDecision:
        'Pay only when the payment path is clear; hold or change terms when the beneficiary story is weak.',
    },
    {
      checkArea: 'Factory or trader role',
      canSupport:
        'Address signals, product category, sample source, factory photos, communication behavior, and visit access can support a likely supplier-role judgment.',
      cannotProve:
        'It does not prove full factory ownership, production capacity, management controls, or working conditions without an onsite audit.',
      buyerDecision:
        'Verify onsite or audit when factory capability matters to supplier approval or a larger order.',
    },
    {
      checkArea: 'Product and order scope',
      canSupport:
        'The product specification, sample evidence, packaging notes, label needs, quantity, lead time, and inspection checkpoint can be checked for clarity.',
      cannotProve:
        'It does not prove the final shipment quality, hidden defects, lab compliance, or that every unit will match the sample.',
      buyerDecision:
        'Use verification before payment, then use QC inspection before balance or pickup when goods exist.',
    },
  ] satisfies ProofRow[],
  decisionRows: [
    {
      riskNode: 'Before deposit',
      whatWasChecked:
        'Business license, Chinese legal name, supplier profile, quote, PI issuer, bank beneficiary, claimed factory role, product evidence, and deposit pressure',
      buyerDecision: 'Pay, hold payment, request clearer proof, verify onsite, reduce first order size, or stop before deposit',
    },
    {
      riskNode: 'Company-name mismatch',
      whatWasChecked:
        'English name, Chinese legal name, business license, PI company, bank account, exporter identity, contact identity, and written supplier explanation',
      buyerDecision: 'Continue only if the relationship is explained; otherwise hold payment or reject the payment path',
    },
    {
      riskNode: 'Factory role unclear',
      whatWasChecked:
        'Registered address, claimed factory address, product category, sample source, workshop or warehouse photos, visit access, and sales claims',
      buyerDecision: 'Treat as caution, request onsite proof, book a factory audit, compare suppliers, or stop',
    },
    {
      riskNode: 'Before balance payment',
      whatWasChecked:
        'Whether the question is still supplier identity or has moved to finished goods, packaging, labels, quantity, defects, and correction evidence',
      buyerDecision: 'Use QC inspection before release; supplier verification alone is not shipment approval',
    },
    {
      riskNode: 'Regulated or platform-sensitive product',
      whatWasChecked:
        'Supplier-provided certificate files, product context, label or packaging files, and whether the question exceeds a sourcing verification scope',
      buyerDecision: 'Pause and involve lab, legal, customs, certification, or marketplace specialists when required',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    {
      title: 'Document evidence',
      items: [
        'Chinese business license, Chinese legal name, unified credit code, company chop, supplier profile, quote, PI, bank beneficiary, and payment instructions',
        'Whether the company selling, invoicing, exporting, producing, and receiving money appears to be the same entity or a clearly explained related entity',
      ],
    },
    {
      title: 'Product and location evidence',
      items: [
        'Product photos, sample notes, specification, packaging requirements, label files, carton or pickup details, and claimed factory or warehouse address',
        'Whether the visible product and address signals fit the claimed supplier role and the current order stage',
      ],
    },
    {
      title: 'Buyer-stage workflow',
      items: [
        'Deposit deadline, sample payment, tooling fee, balance-payment timing, supplier selection stage, pickup plan, and FBA shipment risk when relevant',
        'Which decision the buyer needs now: approve, hold, verify onsite, inspect, re-check, relabel, repack, delay pickup, or stop',
      ],
    },
  ] satisfies EvidenceGroup[],
  whatToSend: [
    'Supplier website, marketplace profile, contact name, English company name, Chinese company name, and business license if available',
    'Quotation, proforma invoice, bank beneficiary, payment instructions, requested payment amount, payment deadline, and payment terms',
    'Product photos, sample photos, specification sheet, packaging requirements, label files, carton marks, and order quantity',
    'Claimed factory address, registered address, pickup address, inspection address, warehouse address, and supplier-provided onsite photos',
    'Any certificate file, audit report, factory introduction, company presentation, or old inspection document the supplier shared',
    'The buyer decision needed: pay deposit, hold payment, verify onsite, choose supplier, inspect goods, release balance, or delay pickup',
  ],
  redFlags: [
    'The supplier profile, license, PI issuer, quote company, and bank beneficiary use different names without a clear written explanation',
    'The supplier pushes for deposit before sharing Chinese company identity, business license, PI, or bank-beneficiary details',
    'Payment is requested to a personal account, unrelated company, or changed account near transfer date',
    'The supplier claims to be a factory but avoids sharing a factory address, production evidence, or onsite visit access',
    'The supplier sends generic catalog photos, old audit reports, or certificates that do not connect to this order',
    'The PI is too vague to support later QC, rework, payment discussion, packaging correction, or shipment release',
    'The supplier says verification, factory audit, QC inspection, and compliance review are all the same thing',
  ],
  scopeLimits: [
    'Supplier verification China reduces visible supplier, payment, and order-stage risk; it does not promise zero risk',
    'It does not replace legal due diligence, contract review, dispute recovery, tax advice, customs advice, or escrow advice',
    'It does not replace a factory audit when the buyer needs onsite factory capability, process, capacity, or management-system evidence',
    'It does not replace QC inspection when finished goods, packaging, labels, carton marks, quantity, or visible defects need shipment-specific checking',
    'It does not replace laboratory testing, certification-body review, regulated product compliance, or marketplace approval checks',
    'It does not guarantee supplier honesty, future production quality, Amazon receiving approval, customs clearance, or future bank-account safety',
  ],
  relatedLinks: [
    {
      href: '/supplier-verification-china',
      label: 'Supplier Verification China',
      note: 'Use when you need buyer-side supplier, payment, and company evidence before money moves.',
    },
    {
      href: '/supplier-verification-china-checklist',
      label: 'Supplier verification China checklist',
      note: 'Use a broader checklist for company identity, payment, product, sample, and shipment-stage risk.',
    },
    {
      href: '/supplier-verification-vs-factory-audit',
      label: 'Supplier verification vs factory audit',
      note: 'Use when you need to choose between early verification and deeper onsite factory audit scope.',
    },
    {
      href: '/how-to-verify-chinese-supplier-before-deposit',
      label: 'How to verify a Chinese supplier before deposit',
      note: 'Use when the next decision is whether to pay a supplier deposit.',
    },
    {
      href: '/qc-inspection-china-before-balance-payment',
      label: 'QC before balance payment',
      note: 'Use when goods are finished and the buyer needs shipment-specific product evidence.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What can supplier verification in China prove?',
      answer:
        'Supplier verification in China can support a scoped buyer decision from visible evidence: company identity, PI and bank-path consistency, supplier role, product fit, address signals, and order-stage risk. It should show what matched, what did not match, and whether the buyer should proceed, hold, verify further, or stop.',
    },
    {
      question: 'What can supplier verification not prove?',
      answer:
        'Supplier verification cannot prove that a supplier is risk-free, legally perfect, financially stable, honest forever, or safe for every future order. It also cannot replace legal due diligence, factory audit, QC inspection, lab testing, customs advice, regulated compliance review, or marketplace approval.',
    },
    {
      question: 'Is a business license enough to verify a Chinese supplier?',
      answer:
        'No. A business license is useful identity evidence, but it is not enough by itself. The buyer should also check the Chinese legal name, profile name, quote, PI issuer, bank beneficiary, supplier role, product evidence, address signals, and the current payment or order stage.',
    },
    {
      question: 'Can supplier verification prove a factory owns the production site?',
      answer:
        'Supplier verification can identify factory-role signals and mismatches, but it should not be treated as full proof of factory ownership or capability. If factory ownership, production capacity, process control, or working conditions matter, define an onsite factory audit scope.',
    },
    {
      question: 'Can supplier verification replace pre-shipment inspection?',
      answer:
        'No. Supplier verification checks supplier and order-stage risk, usually before money or supplier approval decisions. Pre-shipment inspection checks the actual finished goods, quantity, defects, packaging, labels, carton marks, and shipment readiness before balance payment or pickup.',
    },
    {
      question: 'What should I send Huang Sourcing for supplier verification?',
      answer:
        'Send the supplier link, Chinese company name, business license, quote, proforma invoice, bank details, product photos, sample notes, claimed factory or pickup address, payment deadline, and the decision you need: pay, hold, verify onsite, inspect, or stop.',
    },
  ] satisfies FaqItem[],
}

export function makeSupplierVerificationChinaLimitsArticleMetadata(): Metadata {
  const canonicalPath = supplierVerificationChinaLimitsArticle.href

  return {
    title: supplierVerificationChinaLimitsArticle.metaTitle,
    description: supplierVerificationChinaLimitsArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: supplierVerificationChinaLimitsArticle.metaTitle,
      description: supplierVerificationChinaLimitsArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: getArticleOpenGraphImages(supplierVerificationChinaLimitsArticle),
    },
    twitter: {
      card: 'summary_large_image',
      title: supplierVerificationChinaLimitsArticle.metaTitle,
      description: supplierVerificationChinaLimitsArticle.metaDescription,
      images: [supplierVerificationChinaLimitsArticle.image.src],
    },
  }
}

export function makeSupplierVerificationChinaLimitsArticleJsonLd() {
  return [
    makeArticleJsonLd(supplierVerificationChinaLimitsArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Supplier verification China proof limits checklist',
      itemListElement: supplierVerificationChinaLimitsArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(supplierVerificationChinaLimitsArticle.faqs),
  ]
}
