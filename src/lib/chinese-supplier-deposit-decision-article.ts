import type { Metadata } from 'next'

import { chineseSupplierDepositDecisionArticleHref } from '@/lib/site-links'
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

export const chineseSupplierDepositDecisionArticle = {
  href: chineseSupplierDepositDecisionArticleHref,
  title: 'Should I Pay a 30% Deposit to a Chinese Supplier?',
  metaTitle: 'Chinese Supplier Deposit Decision',
  metaDescription:
    'Decide whether to pay a 30% deposit to a Chinese supplier. Check supplier identity, PI terms, bank details, sample evidence, and payment red flags first.',
  h1: 'Should I Pay a 30% Deposit to a Chinese Supplier?',
  eyebrow: 'Chinese supplier deposit decision',
  image: {
    alt: 'Agent Huang reviewing supplier documents, a pro forma invoice, payment terms, and product samples before a 30 percent deposit decision in China',
    height: 900,
    src: '/images/chinese-supplier-deposit-decision.webp',
    width: 1600,
  },
  intro:
    'A 30% deposit is common in China sourcing, but common does not mean automatic. The buyer decision is not simply whether the supplier sounds professional. The decision is whether the supplier identity, payment path, PI terms, product evidence, and correction plan are clear enough before money leaves your account.',
  answerSummary:
    'Pay a 30% deposit only when the supplier details match, the bank beneficiary is explained, the PI locks the right product scope, and the next inspection or correction step is agreed. Hold payment, request more proof, reduce the first order, change payment terms, or stop if the evidence does not support the risk.',
  primaryCta: {
    href: '/supplier-verification-china',
    label: 'Check 30% Deposit Risk',
  },
  secondaryCta: {
    href: '#what-to-check',
    label: 'See what to check',
  },
  whatsappMessage: `Hi Agent Huang,

I need help deciding whether to pay a 30% deposit to a Chinese supplier.

Supplier link / company name:
Product:
Order value:
Deposit amount:
PI / payment terms:
Main concern:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#what-to-check', label: 'What to check' },
    { href: '#deposit-scope', label: 'What the deposit secures' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#field-notes', label: 'Field notes' },
    { href: '#documents', label: 'What to send' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Company name, Chinese name, business license, invoice issuer, and contact identity match or are clearly explained',
    'Bank beneficiary, payment currency, and payment instructions match the supplier story before transfer',
    'The PI includes product specs, model, material, color, packaging, labels, quantity, price, lead time, and balance timing',
    'The deposit purpose is specific: material purchase, tooling, sample approval, production slot, or packaging purchase',
    'Sample evidence or product photos match the exact item you plan to order, not only a catalog or best-looking unit',
    'Inspection timing before balance payment or pickup is written into the production plan',
    'Refund, rework, delay, and correction responsibilities are discussed before payment pressure starts',
    'The buyer has a clear decision path: pay, hold, request proof, reduce risk, or stop before deposit',
  ],
  sections: [
    {
      id: 'why-thirty-percent',
      title: 'Why a 30% deposit is common but still needs a risk check',
      paragraphs: [
        'Many Chinese suppliers ask for 30% deposit and 70% balance before shipment. That split is normal in many product categories because the supplier may need to buy materials, reserve production time, or start packaging work. Normal payment terms, however, do not verify the supplier.',
        'Before deposit, the buyer still has leverage. After deposit, the supplier may already control the timeline, the production explanation, and the correction discussion. That is why the 30% question should be treated as a supplier verification and payment-release decision, not just a routine admin step.',
      ],
      bullets: [
        'A common deposit split does not prove the supplier is safe',
        'A polished profile does not prove the bank account is appropriate',
        'A cheap quote does not prove the PI is specific enough for later inspection',
        'A rushed deadline should not replace evidence before payment',
      ],
    },
    {
      id: 'what-to-check',
      title: 'What to check before paying a Chinese supplier deposit',
      paragraphs: [
        'Start with alignment. The supplier profile, legal company name, Chinese name, business license, quote, PI, bank beneficiary, email signature, website, and claimed factory role should not tell different stories. Some differences can be legitimate, but they should be explained before payment.',
        'Then check the order itself. The PI should make later QC possible. If the PI only says a loose product name and a total amount, it gives the buyer less evidence when defects, wrong packaging, wrong labels, or shipment delays appear later.',
      ],
      bullets: [
        'Identity: business license, Chinese company name, registered address, and contact identity',
        'Payment path: invoice issuer, bank beneficiary, bank location, currency, and written reason for any mismatch',
        'Product scope: model, dimensions, materials, color, finish, logo, accessories, packaging, labels, and tolerances',
        'Commercial terms: MOQ, unit price, tooling, samples, lead time, deposit amount, balance timing, and Incoterms',
        'Correction path: what happens if sample, production, packaging, or inspection evidence fails',
      ],
    },
    {
      id: 'deposit-scope',
      title: 'What the 30% deposit should actually secure',
      paragraphs: [
        'The deposit should not be vague money sent into a vague promise. Ask what the supplier will do after receiving it and what proof you will receive before the balance is due. The answer should be concrete enough to support the next buyer decision.',
        'For some orders, the deposit secures raw materials. For others, it covers tooling, packaging, sample confirmation, or production scheduling. If the supplier cannot explain what the deposit unlocks, the buyer should slow down and request a clearer PI or production plan.',
      ],
      bullets: [
        'Material purchase or component reservation for the exact product',
        'Tooling, mold, sample, or pre-production confirmation when relevant',
        'Packaging, labels, inserts, carton marks, or branded elements agreed in writing',
        'Production lead time and the checkpoint before balance payment',
        'Supplier correction responsibility if the output does not match the agreed scope',
      ],
    },
    {
      id: 'field-notes',
      title: 'Agent Huang field notes from before-deposit decisions',
      paragraphs: [
        'The warning sign is rarely one strange sentence. It is usually a cluster: the English company name is slightly different, the bank beneficiary belongs to another entity, the supplier says factory but shows trader-style evidence, and the PI leaves out the details the buyer will need later for QC.',
        'Agent Huang treats the deposit stage as the cheapest point to slow down. The goal is not to accuse the supplier. The goal is to ask practical questions before the buyer funds production and loses leverage.',
      ],
      bullets: [
        'Ask why the payment beneficiary differs before you wire money',
        'Do not let a 30% deposit replace supplier identity checks',
        'Use the PI as a future inspection reference, not just a payment request',
        'Write the inspection timing before balance payment into the order discussion',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Supplier identity',
      whatWasChecked:
        'Business license, Chinese name, profile name, invoice issuer, contact identity, website, and claimed factory or trader role',
      buyerDecision: 'Pay, request clarification, scope supplier verification, or stop before deposit',
    },
    {
      riskNode: 'Payment path',
      whatWasChecked:
        'Bank beneficiary, company match, payment currency, payment country or region, invoice details, and any third-party payment explanation',
      buyerDecision: 'Pay only if the payment path is explained; hold or change terms if it is unclear',
    },
    {
      riskNode: 'PI and order scope',
      whatWasChecked:
        'Product specs, samples, packaging, labels, quantity, pricing, lead time, balance timing, and correction terms',
      buyerDecision: 'Approve PI, revise PI, reduce order size, or request sample confirmation first',
    },
    {
      riskNode: 'Production evidence',
      whatWasChecked:
        'Sample photos, factory or warehouse evidence, product-category fit, production responsibility, and timeline logic',
      buyerDecision: 'Proceed, ask for stronger evidence, compare samples, or arrange onsite verification',
    },
    {
      riskNode: 'Next checkpoint',
      whatWasChecked:
        'Inspection before balance payment, photo evidence, rework plan, pickup timing, and shipment release conditions',
      buyerDecision: 'Pay deposit with a written checkpoint, hold payment, or renegotiate the process',
    },
  ] satisfies DecisionRow[],
  whatToSend: [
    'Supplier profile, website, Alibaba page, or other supplier link',
    'Business license, company name in English and Chinese, and contact details',
    'Quote, PI, bank payment instructions, deposit request, and payment deadline',
    'Product photos, sample photos, specifications, packaging requirements, and label files',
    'Order value, planned quantity, target ship date, and balance payment timing',
    'Any warning signs you noticed, including company-name mismatch, payment pressure, or unclear factory role',
  ],
  redFlags: [
    'The supplier pushes for a 30% deposit before company and bank details are clear',
    'The PI company, supplier profile, and bank beneficiary do not match and no clear explanation is provided',
    'The supplier refuses reasonable business license, sample, factory, or product-scope evidence',
    'The PI is too vague to support later QC inspection or payment-dispute discussion',
    'The supplier says inspection is unnecessary or can happen only after full payment',
    'The quote is unusually low, the lead time is unrealistic, or the MOQ logic does not match the product',
    'The supplier changes payment details near the transfer date',
  ],
  scopeLimits: [
    'A buyer-side deposit risk check reduces visible supplier and payment risk; it does not promise zero risk',
    'It does not replace legal due diligence, contract review, dispute recovery, or escrow advice',
    'It does not replace laboratory testing, certification review, customs compliance, or regulated product checks',
    'It does not prove every hidden production issue before goods are made',
    'It does not guarantee future production quality without QC inspection before balance payment or pickup',
    'It does not make supplier-paid recommendations; the output supports the buyer decision',
  ],
  relatedLinks: [
    {
      href: '/supplier-verification-china',
      label: 'Supplier Verification China',
      note: 'Use when you need buyer-side supplier identity, payment, and PI risk review before deposit.',
    },
    {
      href: '/how-to-verify-chinese-supplier-before-deposit',
      label: 'Verify Chinese supplier before deposit',
      note: 'Use this deeper guide when company details, quote terms, and payment risk need a full checklist.',
    },
    {
      href: '/before-deposit-china-supplier-check',
      label: 'Before deposit supplier check',
      note: 'Use when the immediate stage decision is whether the first transfer should wait.',
    },
    {
      href: '/factory-vs-trading-company-china-practical-signals-buyers-can-check',
      label: 'Factory vs trading company signals',
      note: 'Use when the supplier role is unclear before paying the deposit.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Is a 30% deposit normal when buying from a Chinese supplier?',
      answer:
        'Yes, 30% deposit and 70% balance is common in many China sourcing orders. But normal terms still need a supplier identity, payment path, PI, sample, and inspection-timing check before payment.',
    },
    {
      question: 'Should I pay a 30% deposit to a new Chinese supplier?',
      answer:
        'Pay only if the supplier identity, bank beneficiary, PI details, product evidence, and next checkpoint are clear enough for your risk level. If there are mismatches or pressure, hold payment and ask for proof first.',
    },
    {
      question: 'What should be in the PI before I pay the deposit?',
      answer:
        'The PI should include the exact product, quantity, unit price, specifications, packaging, labels, lead time, deposit amount, balance timing, inspection timing, and correction responsibility.',
    },
    {
      question: 'What if the supplier bank account name is different?',
      answer:
        'Do not ignore it. Some mismatches have legitimate explanations, but the supplier should explain the relationship in writing before payment. If the explanation is unclear, pause the deposit decision.',
    },
    {
      question: 'Can Huang Sourcing check a supplier before I send the deposit?',
      answer:
        'Yes. Send the supplier link, company name, quote or PI, payment instructions, product details, order value, deposit request, and your concern so visible risk can be reviewed from the buyer side.',
    },
    {
      question: 'Does a supplier verification check guarantee the order will be safe?',
      answer:
        'No. It reduces visible risk before deposit, but it does not replace legal due diligence, lab testing, compliance review, or later QC inspection before balance payment or shipment release.',
    },
  ] satisfies FaqItem[],
}

export function makeChineseSupplierDepositDecisionArticleMetadata(): Metadata {
  const canonicalPath = chineseSupplierDepositDecisionArticle.href

  return {
    title: chineseSupplierDepositDecisionArticle.metaTitle,
    description: chineseSupplierDepositDecisionArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: chineseSupplierDepositDecisionArticle.metaTitle,
      description: chineseSupplierDepositDecisionArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        {
          url: chineseSupplierDepositDecisionArticle.image.src,
          width: chineseSupplierDepositDecisionArticle.image.width,
          height: chineseSupplierDepositDecisionArticle.image.height,
          alt: chineseSupplierDepositDecisionArticle.image.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: chineseSupplierDepositDecisionArticle.metaTitle,
      description: chineseSupplierDepositDecisionArticle.metaDescription,
      images: [chineseSupplierDepositDecisionArticle.image.src],
    },
  }
}

export function makeChineseSupplierDepositDecisionArticleJsonLd() {
  const pageUrl = getAbsoluteUrl(chineseSupplierDepositDecisionArticle.href)

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: chineseSupplierDepositDecisionArticle.title,
      description: chineseSupplierDepositDecisionArticle.metaDescription,
      url: pageUrl,
      inLanguage: 'en',
      image: getAbsoluteUrl(chineseSupplierDepositDecisionArticle.image.src),
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
      name: 'Chinese supplier 30 percent deposit decision checklist',
      itemListElement: chineseSupplierDepositDecisionArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(chineseSupplierDepositDecisionArticle.faqs),
  ]
}
