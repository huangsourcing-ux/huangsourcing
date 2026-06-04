import type { Metadata } from 'next'

import {
  articleContentUpdateDate,
  articleContentUpdateDateIso,
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { supplierDepositGuideHref } from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

type ArticleSection = {
  body: string[]
  bullets?: string[]
  id: string
  title: string
}

type FaqItem = {
  answer: string
  question: string
}

type EvidenceDecisionRow = {
  buyerDecision: string
  evidence: string
  riskNode: string
}

type RelatedLink = {
  href: string
  label: string
  note: string
}

export const supplierDepositGuide = {
  href: supplierDepositGuideHref,
  title: 'How to Verify a Chinese Supplier Before Sending a Deposit',
  metaTitle: 'Verify Chinese Supplier Before Deposit',
  metaDescription:
    'Learn how to verify a Chinese supplier before sending a deposit, including company checks, factory or trader signals, quote risks, payment red flags, and buyer-side next steps.',
  publishedDate: 'May 19, 2026',
  publishedDateIso: '2026-05-19T22:31:35-04:00',
  modifiedDate: articleContentUpdateDate,
  modifiedDateIso: articleContentUpdateDateIso,
  h1: 'How to Verify a Chinese Supplier Before Sending a Deposit',
  eyebrow: 'Supplier verification before deposit',
  image: {
    alt: 'Buyer-side checklist to verify a Chinese supplier before sending a deposit',
    height: 900,
    src: '/images/verify-chinese-supplier-before-deposit.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/verify-chinese-supplier-before-deposit.webp', width: 1600 },
    { height: 1200, src: '/images/verify-chinese-supplier-before-deposit-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/verify-chinese-supplier-before-deposit-1x1.webp', width: 1200 },
  ],
  intro:
    'A deposit changes the buyer position. Before money moves, the supplier still has a reason to answer questions, clarify company details, and show evidence. After payment, every correction becomes harder. This guide explains how overseas buyers can verify a Chinese supplier before deposit payment using practical, buyer-side checks.',
  summary:
    'Huang Sourcing supports buyers from the China side, but the goal is not to promise zero risk. The goal is to slow down unclear supplier claims, check visible company and factory signals, review quote and payment risks, and decide whether Supplier Verification is needed before the first transfer.',
  primaryCta: {
    href: '/supplier-verification-china',
    label: 'Book Supplier Verification',
  },
  secondaryCta: {
    href: '/free-china-sourcing-risk-check',
    label: 'Start with Free Risk Check',
  },
  whatsappMessage: `Hi Agent Huang,

I need buyer-side supplier verification before sending a deposit.

Supplier link / company name:
Product:
Quote / PI value:
Deposit amount:
Main concern:
`,
  tableOfContents: [
    { href: '#what-to-check', label: 'What to check before deposit' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#documents-to-request', label: 'Documents to request' },
    { href: '#factory-vs-trader', label: 'Factory vs trader signals' },
    { href: '#payment-risk', label: 'Payment risk' },
    { href: '#limits', label: 'What verification can and cannot prove' },
  ],
  sections: [
    {
      id: 'why-verify-before-deposit',
      title: 'Why verify a Chinese supplier before deposit payment?',
      body: [
        'Most supplier risk is easier to question before the first transfer. A supplier may have a polished profile, fast replies, and attractive pricing, but the real decision is whether the company details, factory role, quote terms, and payment request are consistent enough to justify deposit payment.',
        'Verification before deposit helps you decide whether to continue, ask for stronger evidence, reduce the order size, change payment terms, or stop before the risk becomes expensive.',
      ],
    },
    {
      id: 'company-details',
      title: 'Step 1: Check whether the company details match',
      body: [
        'Start with consistency. The company name on the supplier profile, business license, quotation, pro forma invoice, bank account, email signature, website, and shipping documents should not tell different stories.',
        'A mismatch is not always fraud. Many Chinese suppliers use group companies, trading entities, export companies, or sister factories. But every mismatch should be explained clearly before deposit payment.',
      ],
      bullets: [
        'Company name, Chinese name, and invoice name',
        'Business license details and registered address',
        'Bank account beneficiary and payment currency',
        'Website, email domain, and contact identity',
        'Product range and whether it matches the quoted item',
      ],
    },
    {
      id: 'factory-vs-trader',
      title: 'Step 2: Look for factory or trading company signals',
      body: [
        'Many overseas buyers ask whether a supplier is a factory or a trader. The better question is whether the supplier role is clear enough for your risk level. A trader can be useful, and a factory can still create problems. What matters is whether the supplier can explain production responsibility, quality control, lead time, and accountability.',
        'Buyer-side verification should look for factory or trader signals without treating one label as automatically safe.',
      ],
      bullets: [
        'Factory address, workshop photos, and production-line relevance',
        'Whether the product range is focused or unusually broad',
        'Who controls sampling, production, inspection, and corrections',
        'Whether the supplier can arrange onsite checks before payment or shipment',
      ],
    },
    {
      id: 'payment-risk',
      title: 'Step 3: Review the quote, PI, MOQ, lead time, and payment terms',
      body: [
        'A supplier can look legitimate and still create deposit risk through unclear quote terms. Before paying, review what the deposit actually secures: material purchase, tooling, sample confirmation, production slot, packaging, labels, or final goods.',
        'The PI should be specific enough that a later inspection can compare the order against the agreed scope. Vague terms make disputes harder after the deposit has been sent.',
      ],
      bullets: [
        'Unit price, MOQ, tooling, sample approval, and lead time',
        'Payment split, deposit amount, balance timing, and refund language',
        'Product specifications, packaging, labels, carton marks, and tolerances',
        'Inspection timing before balance payment or forwarder pickup',
      ],
    },
    {
      id: 'documents-to-request',
      title: 'Step 4: Ask for evidence before money moves',
      body: [
        'Good suppliers should be able to provide practical evidence before asking for a deposit. The evidence does not need to be perfect, but it should reduce uncertainty rather than create more questions.',
        'Ask for documents and photos that match the exact company and product being quoted. Generic certificates, copied factory images, or unrelated catalog photos should not carry the full decision.',
      ],
      bullets: [
        'Business license and clear company identity information',
        'Recent factory or warehouse photos related to your product category',
        'Sample photos, packaging examples, labels, and carton references',
        'PI, quote, payment instructions, and written inspection agreement',
        'Contact details for the person responsible for production follow-up',
      ],
    },
    {
      id: 'need-verification',
      title: 'Step 5: Decide whether you need buyer-side supplier verification',
      body: [
        'If the supplier details are simple, the order is small, and the evidence is consistent, a free risk check may be enough to decide the next question. If the deposit is meaningful, the supplier is new, the claims are unclear, or the payment pressure is high, buyer-side Supplier Verification can reduce visible risk before money moves.',
        'Huang Sourcing can review supplier identity signals, factory or trader indicators, quote terms, payment risk, and practical next questions from the China side before the buyer decides whether to pay.',
      ],
    },
    {
      id: 'red-flags',
      title: 'Red flags before sending a deposit',
      body: [
        'One warning sign does not automatically mean a supplier is unsafe, but multiple warning signs should slow the decision down. The goal is not to panic. The goal is to ask better questions before the deposit leaves your account.',
      ],
      bullets: [
        'The supplier rushes payment before company details are clear',
        'The invoice company, bank beneficiary, and supplier profile do not match',
        'The supplier refuses reasonable inspection or evidence requests',
        'The quoted product range is too broad for the claimed factory role',
        'The PI lacks product specs, packaging details, balance timing, or correction terms',
      ],
    },
    {
      id: 'what-verification-checks',
      title: 'What Supplier Verification can help check',
      body: [
        'Supplier Verification is a buyer-side decision support service. It is useful when you need a practical risk summary before deposit, not supplier-side sales support or a guarantee that every hidden issue has been removed.',
      ],
      bullets: [
        'Supplier identity and visible company consistency',
        'Factory or trading company signals from available evidence',
        'Quote, PI, payment-term, MOQ, lead-time, and deposit-risk notes',
        'Questions to ask before payment and suggested next steps',
        'Whether onsite verification, sample consolidation, or QC should be scoped next',
      ],
    },
    {
      id: 'limits',
      title: 'What this check does not guarantee',
      body: [
        'A responsible verification page should be clear about limits. No desk check or onsite visit can remove every sourcing risk. Supplier Verification helps reduce visible supplier and payment risk before deposit, but it does not replace legal due diligence, lab testing, customs compliance review, or a formal factory audit unless those services are specifically scoped.',
      ],
      bullets: [
        'It does not promise zero supplier risk',
        'It does not provide a legal guarantee or contract review',
        'It does not replace product certification or laboratory testing',
        'It does not guarantee future production quality without QC inspection',
        'It does not work as supplier-side sales support',
      ],
    },
  ] satisfies ArticleSection[],
  evidenceRows: [
    {
      riskNode: 'Company and payment identity',
      evidence:
        'Supplier profile, Chinese company name, business license, PI, bank beneficiary, email domain, and contact identity.',
      buyerDecision:
        'Pay only when the company and payment path are explained clearly enough for the order risk.',
    },
    {
      riskNode: 'Factory or trader role',
      evidence:
        'Factory address, product range, workshop or warehouse photos, production responsibility, sample control, and correction access.',
      buyerDecision:
        'Continue, verify deeper, or pause when the supplier role is unclear before deposit.',
    },
    {
      riskNode: 'Quote and PI scope',
      evidence:
        'MOQ, lead time, tooling, product specification, packaging, labels, inspection timing, and balance-payment terms.',
      buyerDecision:
        'Clarify or renegotiate before deposit if the PI cannot support later QC or correction decisions.',
    },
    {
      riskNode: 'Deposit release',
      evidence:
        'Order value, deposit amount, supplier pressure, available proof, next inspection point, and buyer deadline.',
      buyerDecision:
        'Pay, reduce exposure, hold payment, request more evidence, or stop before money moves.',
    },
  ] satisfies EvidenceDecisionRow[],
  relatedLinks: [
    {
      href: '/supplier-verification-china',
      label: 'Supplier Verification China',
      note: 'Use when you want buyer-side supplier verification before sending a deposit.',
    },
    {
      href: '/before-deposit-china-supplier-check',
      label: 'Before deposit supplier check',
      note: 'Use when the immediate decision is whether to pay a new Chinese supplier.',
    },
    {
      href: '/alibaba-supplier-verification-china',
      label: 'Alibaba supplier verification',
      note: 'Use when the supplier was found on Alibaba and profile details need review.',
    },
    {
      href: '/scope-limitations',
      label: 'Scope and limitations',
      note: 'Review what buyer-side sourcing support can and cannot promise.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Can you verify a Chinese supplier before I pay a deposit?',
      answer:
        'Yes. Send the supplier link, company name, quote or PI, product details, deposit request, and your main concern. Huang Sourcing can review visible supplier and payment risk before you decide whether to pay.',
    },
    {
      question: 'Is supplier verification the same as a factory audit?',
      answer:
        'No. Supplier verification is an early buyer-side risk check. A full factory audit or onsite visit can be quoted separately when the order value or risk level justifies it.',
    },
    {
      question: 'Can you prove whether a supplier is a real factory?',
      answer:
        'Verification can review factory and trader signals from available evidence, but it does not make a legal guarantee about the supplier role unless a deeper scoped audit is performed.',
    },
    {
      question: 'What should I send for supplier verification?',
      answer:
        'Send the supplier profile or website, company name, contact details, quote or PI, payment terms, product photos or specifications, order value, deposit amount, and any warning signs you noticed.',
    },
    {
      question: 'Does verification remove all supplier risk?',
      answer:
        'No. Verification reduces visible risk before deposit, but it does not replace legal due diligence, lab testing, product compliance review, or QC inspection during production or before shipment.',
    },
    {
      question: 'What happens if the supplier refuses to provide evidence?',
      answer:
        'That is a decision signal. A refusal does not automatically prove fraud, but it usually means the buyer should slow down, ask clearer questions, or avoid paying a meaningful deposit until the risk is explained.',
    },
  ] satisfies FaqItem[],
}

export function makeSupplierDepositGuideMetadata(): Metadata {
  const canonicalPath = supplierDepositGuide.href

  return {
    title: supplierDepositGuide.metaTitle,
    description: supplierDepositGuide.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: supplierDepositGuide.metaTitle,
      description: supplierDepositGuide.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        ...getArticleOpenGraphImages(supplierDepositGuide),
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: supplierDepositGuide.metaTitle,
      description: supplierDepositGuide.metaDescription,
      images: [supplierDepositGuide.image.src],
    },
  }
}

export function makeSupplierDepositGuideJsonLd() {
  return [
    makeArticleJsonLd(supplierDepositGuide),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Chinese supplier before deposit evidence checklist',
      itemListElement: supplierDepositGuide.evidenceRows.map((row, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: row.riskNode,
        description: row.evidence,
      })),
    },
    makeFaqPageJsonLd(supplierDepositGuide.faqs),
  ]
}
