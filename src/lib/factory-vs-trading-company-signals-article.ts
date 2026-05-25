import type { Metadata } from 'next'

import { factoryVsTradingCompanySignalsArticleHref } from '@/lib/site-links'
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

export const factoryVsTradingCompanySignalsArticle = {
  href: factoryVsTradingCompanySignalsArticleHref,
  title: 'Factory vs Trading Company in China: Practical Signals Buyers Can Check',
  metaTitle: 'Factory vs Trading Company in China: Practical Signals Buyers Can Check',
  metaDescription:
    'Use this factory vs trading company China guide to check license, address, production evidence, sample origin, quote signals, and deposit decisions.',
  h1: 'Factory vs Trading Company in China: Practical Signals Buyers Can Check',
  eyebrow: 'factory vs trading company China',
  image: {
    alt: 'Agent Huang checking factory and trading company verification signals in China before deposit',
    height: 900,
    src: '/images/factory-vs-trading-company-practical-signals.webp',
    width: 1600,
  },
  intro:
    'The factory vs trading company question matters most before a buyer pays a deposit or builds a production plan around one supplier. A trading company is not automatically a bad choice, and a factory is not automatically safe. The risk is not knowing who controls production, who receives payment, and who can fix problems when quality or timing changes.',
  answerSummary:
    'A practical factory vs trading company China check should answer one buyer decision: proceed with the supplier, verify the factory role, request clearer documents, visit the production site, adjust payment risk, or pause before deposit.',
  primaryCta: {
    href: '/supplier-verification-china',
    label: 'Supplier Verification',
  },
  secondaryCta: {
    href: '#what-to-check',
    label: 'See practical signals',
  },
  whatsappMessage: `Hi Agent Huang,

I need supplier verification for a factory vs trading company question in China.

Supplier link:
Company name:
Product:
Quote / proforma invoice:
Factory address:
Deposit amount:
Main concern:
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
    'Chinese business license, legal company name, credit code, and business scope',
    'Registered address, quoted factory address, pickup address, and map or site-photo consistency',
    'Production floor evidence, workshop access, machine photos, line capacity, and staff role',
    'Whether the supplier can arrange a factory visit or only sends polished showroom photos',
    'Sample origin, sample labels, packaging marks, carton marks, and whether samples match the quoted producer',
    'Quotation, proforma invoice, payment beneficiary, company chop, and bank-account consistency',
    'Whether MOQ, lead time, tooling, QC, and after-sales answers match claimed production control',
    'Decision notes for proceed, verify more, visit factory, change payment terms, or pause deposit',
  ],
  sections: [
    {
      id: 'why-before-deposit',
      title: 'Why factory vs trading company signals should be checked before deposit',
      paragraphs: [
        'Many buyer problems start when the supplier role is assumed instead of checked. The website says manufacturer, the sales person says factory, the quote looks normal, and the buyer pays a deposit before knowing whether the company actually owns production or is coordinating through another factory.',
        'The goal is not to reject every trading company. Some traders coordinate small orders, multi-SKU sourcing, export documents, and communication better than a factory. The buyer risk is paying as if the supplier controls production when the supplier may only control communication.',
      ],
      bullets: [
        'Proceed when the supplier role, payment entity, and production evidence are aligned',
        'Ask for supplier verification when the quote, license, address, or factory evidence conflicts',
        'Request a factory visit when production capability is the buyer decision',
        'Pause before deposit when the supplier cannot explain who produces, who invoices, and who fixes issues',
      ],
    },
    {
      id: 'what-to-check',
      title: 'What practical signals buyers can check',
      paragraphs: [
        'A practical factory vs trading company China check does not rely on one question: "Are you a factory?" It compares visible signals across documents, addresses, payment details, production evidence, and sample origin.',
        'Agent Huang looks for alignment. The business license should connect to the company name. The factory address should connect to the production site. The quote and bank details should connect to the company taking responsibility. The sample should connect to the same production source the buyer is about to pay.',
      ],
      bullets: [
        'Company identity: Chinese legal name, business license, unified credit code, company chop, and export or trading scope',
        'Address signals: registered address, office address, claimed factory address, actual production address, and pickup or inspection address',
        'Production evidence: workshop photos, machine type, process steps, line capacity, QC area, packing area, and whether the site matches the product category',
        'Factory access: whether an onsite visit, video walk-through, or third-party check can happen at the claimed production site',
        'Sample origin: sample tag, sample packaging, carton mark, supplier label, product version, and whether the sample came from the same source as bulk production',
        'Commercial consistency: quote issuer, proforma invoice, payment beneficiary, bank account, deposit request, warranty promise, and who signs correction responsibility',
      ],
    },
    {
      id: 'field-notes',
      title: 'Agent Huang field notes from supplier role checks',
      paragraphs: [
        'The biggest warning sign is usually not that a company is a trader. It is when the supplier keeps changing the story: one company name on the profile, another name on the license, a different factory address for inspection, and a separate payment beneficiary for the deposit.',
        'A real factory can still outsource work. A trading company can still be a useful sourcing partner. The buyer needs enough evidence to decide whether the supplier role fits the order size, quality risk, payment stage, and correction expectations.',
      ],
      bullets: [
        'Do not judge by showroom photos alone; connect the photo to an address and product process',
        'Check the payment entity before deposit, not after the supplier sends a proforma invoice',
        'Treat similar company names as a risk until the Chinese legal name and business license are clear',
        'Ask who can authorize rework, replacement, or refund if production does not match the approved sample',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Company identity',
      whatWasChecked:
        'Business license, Chinese legal name, credit code, company chop, online profile name, and quote issuer',
      buyerDecision: 'Proceed, request clearer documents, or stop before deposit if identity does not align',
    },
    {
      riskNode: 'Address consistency',
      whatWasChecked:
        'Registered address, claimed factory address, actual production site, inspection address, and pickup address',
      buyerDecision: 'Verify remotely, book onsite visit, ask for factory evidence, or hold payment',
    },
    {
      riskNode: 'Production capability',
      whatWasChecked:
        'Workshop evidence, machines, production line, QC area, packing area, capacity answers, and product-category fit',
      buyerDecision: 'Use as factory, use as coordinator, request factory visit, or find another supplier',
    },
    {
      riskNode: 'Sample origin',
      whatWasChecked:
        'Sample tags, packaging, carton marks, material notes, supplier labels, and whether sample source matches bulk source',
      buyerDecision: 'Approve sample source, ask for source proof, compare samples, or delay supplier selection',
    },
    {
      riskNode: 'Payment and responsibility',
      whatWasChecked:
        'Proforma invoice, bank beneficiary, company name, deposit request, correction promise, warranty notes, and who signs the order',
      buyerDecision: 'Pay deposit, change payment terms, request verification, or pause the order',
    },
  ] satisfies DecisionRow[],
  whatToSend: [
    'Supplier website, marketplace profile, Alibaba page, or sales contact details',
    'Chinese business license, English company name, Chinese company name, and business card if available',
    'Quotation, proforma invoice, bank beneficiary, payment terms, deposit amount, and company chop photos',
    'Claimed factory address, office address, pickup address, inspection address, and any map pin or site photos',
    'Product photos, sample photos, sample tags, carton marks, packaging marks, and approved sample notes',
    'The decision you need after the check: pay deposit, verify factory role, visit factory, compare samples, or stop',
  ],
  redFlags: [
    'Supplier refuses to share the Chinese business license or only sends a cropped certificate image',
    'Marketplace profile, license, quotation, invoice, and bank beneficiary use different company names',
    'The supplier says they are a factory but cannot provide a production address or visit option',
    'Photos show a showroom, office, or sample wall but no process evidence for the quoted product',
    'The factory address changes when inspection, pickup, or payment is discussed',
    'Sample labels, carton marks, or packaging suggest a different producer than the quoted supplier',
    'The sales person cannot explain who handles rework, replacement, refund, or QC correction after deposit',
  ],
  scopeLimits: [
    'A factory vs trading company check reduces visible supplier-role risk, but it does not guarantee future production performance',
    'It does not replace legal due diligence, contract review, tax advice, product compliance testing, or financial audit',
    'It does not prove full factory ownership unless official ownership records and onsite evidence are included in scope',
    'It cannot guarantee that the supplier will not subcontract part of production later',
    'It does not prove every machine, worker, or production line is dedicated to the buyer order',
    'It works best when the buyer provides final supplier documents, quote, payment details, product requirements, and current order stage',
  ],
  relatedLinks: [
    {
      href: '/supplier-verification-china',
      label: 'Supplier Verification China',
      note: 'Use when the buyer needs a China-side check before deposit or supplier selection.',
    },
    {
      href: '/supplier-verification-china-checklist',
      label: 'Supplier verification China checklist',
      note: 'Use a broader checklist for license, company identity, quote, and payment-risk evidence.',
    },
    {
      href: '/how-to-verify-chinese-supplier-before-deposit',
      label: 'How to verify a Chinese supplier before deposit',
      note: 'Use when the immediate decision is whether the first payment should be released.',
    },
    {
      href: '/factory-vs-trading-company-china',
      label: 'Factory vs trading company China',
      note: 'Use the shorter risk guide when you need a compact overview of the supplier-role question.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Is a trading company in China always risky?',
      answer:
        'No. A trading company can be useful for small orders, multi-SKU sourcing, communication, export coordination, and supplier management. The risk is not knowing whether the company controls production, payment responsibility, and correction decisions for this order.',
    },
    {
      question: 'How can buyers check if a supplier is a factory or trading company?',
      answer:
        'Buyers can compare the Chinese business license, registered address, claimed factory address, production floor evidence, sample origin, quote issuer, proforma invoice, and bank beneficiary before paying a deposit.',
    },
    {
      question: 'What is the most important factory vs trading company signal before deposit?',
      answer:
        'The most important signal is alignment. The company identity, payment entity, production address, sample source, and correction responsibility should point to the same supplier role before the buyer releases deposit.',
    },
    {
      question: 'Can Huang Sourcing verify supplier role in China?',
      answer:
        'Yes. Send the supplier link, company name, business license, quote, payment details, product photos, and claimed factory address so Agent Huang can check visible supplier-role signals before deposit.',
    },
    {
      question: 'Does supplier verification prove factory ownership?',
      answer:
        'Not by itself. Supplier verification can reduce visible role and document risk, but proving ownership may require official records, onsite evidence, and a clearly scoped verification process.',
    },
  ] satisfies FaqItem[],
}

export function makeFactoryVsTradingCompanySignalsArticleMetadata(): Metadata {
  const canonicalPath = factoryVsTradingCompanySignalsArticle.href

  return {
    title: factoryVsTradingCompanySignalsArticle.metaTitle,
    description: factoryVsTradingCompanySignalsArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: factoryVsTradingCompanySignalsArticle.metaTitle,
      description: factoryVsTradingCompanySignalsArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        {
          url: factoryVsTradingCompanySignalsArticle.image.src,
          width: factoryVsTradingCompanySignalsArticle.image.width,
          height: factoryVsTradingCompanySignalsArticle.image.height,
          alt: factoryVsTradingCompanySignalsArticle.image.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: factoryVsTradingCompanySignalsArticle.metaTitle,
      description: factoryVsTradingCompanySignalsArticle.metaDescription,
      images: [factoryVsTradingCompanySignalsArticle.image.src],
    },
  }
}

export function makeFactoryVsTradingCompanySignalsArticleJsonLd() {
  const pageUrl = getAbsoluteUrl(factoryVsTradingCompanySignalsArticle.href)

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: factoryVsTradingCompanySignalsArticle.title,
      description: factoryVsTradingCompanySignalsArticle.metaDescription,
      url: pageUrl,
      inLanguage: 'en',
      image: getAbsoluteUrl(factoryVsTradingCompanySignalsArticle.image.src),
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
      name: 'Factory vs trading company China practical signals checklist',
      itemListElement: factoryVsTradingCompanySignalsArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(factoryVsTradingCompanySignalsArticle.faqs),
  ]
}
