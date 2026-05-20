import type { Metadata } from 'next'

import { businessEmail } from '@/lib/site-links'
import { getAbsoluteUrl } from '@/lib/site-url'

export type RiskGuideSlug =
  | 'fnsku-label-check-china'
  | 'alibaba-supplier-verification-china'
  | 'factory-vs-trading-company-china'

type FaqItem = {
  question: string
  answer: string
}

type RiskGuideLink = {
  href: string
  label: string
  note: string
}

export type RiskGuidePage = {
  slug: RiskGuideSlug
  title: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  imageAlt: string
  imageSrc: string
  intro: string
  primaryCtaLabel: string
  ctaMessage: string
  whenToUse: string[]
  riskSignals: string[]
  checks: string[]
  whatToSend: string[]
  buyerReceives: string[]
  scopeLimits: string[]
  internalLinks: RiskGuideLink[]
  faqs: FaqItem[]
}

export const riskGuidePages: Record<RiskGuideSlug, RiskGuidePage> = {
  'fnsku-label-check-china': {
    slug: 'fnsku-label-check-china',
    title: 'FNSKU Label Check China',
    metaTitle: 'FNSKU Label Check China Before FBA Shipment',
    metaDescription:
      'Check FNSKU labels, carton labels, SKU separation, packaging, and shipment-plan evidence in China before your Amazon FBA goods leave the supplier.',
    eyebrow: 'FNSKU label check China',
    h1: 'FNSKU label check in China before FBA shipment.',
    imageAlt:
      'FNSKU label check in China reviewing cartons labels and SKU separation before FBA shipment',
    imageSrc: '/images/service-fba-prep.webp',
    intro:
      'Use this guide when Amazon-bound goods are still in China and you need buyer-side evidence before cartons leave the supplier or forwarder. Huang Sourcing checks visible FNSKU labels, carton labels, SKU separation, packaging, and pickup readiness before the shipment moves.',
    primaryCtaLabel: 'Check FNSKU labels before shipment',
    ctaMessage: `Hi Agent Huang,

I need an FNSKU label check in China before FBA shipment.

Product:
SKUs:
Cartons / units:
Factory location:
FNSKU or carton label concern:
`,
    whenToUse: [
      'Before Amazon FBA cartons leave the supplier or forwarder in China',
      'When FNSKU files, carton labels, or shipment-plan details recently changed',
      'When multiple SKUs create mixed-label or mixed-carton risk',
      'When you need photo evidence before approving pickup or shipment release',
    ],
    riskSignals: [
      'Supplier photos show only a few labels and not the full carton situation',
      'FNSKU labels, carton labels, or SKU separation are unclear before pickup',
      'Cartons are sealed before label placement has been checked',
      'Amazon receiving delays would create inventory or cash-flow problems',
    ],
    checks: [
      'Visible FNSKU labels against files or requirements you provide',
      'Carton labels, shipping marks, and basic label placement',
      'SKU separation, carton condition, and packing details',
      'Photo evidence of labels, cartons, and correction needs',
      'Pickup readiness before goods leave China',
    ],
    whatToSend: [
      'FNSKU files, carton labels, and shipment plan',
      'SKU list, unit count, carton count, and product photos',
      'Factory address, supplier contact, forwarder contact, and pickup window',
      'Any insert, bundle, polybag, or special prep requirement',
    ],
    buyerReceives: [
      'FNSKU and carton label photo evidence',
      'Notes on visible mixed-label, missing-label, or SKU separation risk',
      'Practical recommendation before pickup or shipment release',
      'Next-step suggestions for supplier correction or broader FBA prep support',
    ],
    scopeLimits: [
      'We do not guarantee Amazon receiving approval or final FBA acceptance',
      'We do not replace marketplace compliance, listing approval, or product safety testing',
      'We do not guarantee hidden carton contents unless opening and checking is scoped',
      'We do not control Amazon warehouse processing after shipment',
    ],
    internalLinks: [
      {
        href: '/amazon-fba-prep-china',
        label: 'Amazon FBA Prep China',
        note: 'Use when labels, cartons, SKU separation, and prep coordination need a broader scope.',
      },
      {
        href: '/before-amazon-fba-shipment-china',
        label: 'Before Amazon FBA shipment',
        note: 'Use when the buyer decision is whether cartons should leave China now.',
      },
      {
        href: '/sample-inspection-report-china',
        label: 'Sample inspection report',
        note: 'Preview the type of photo evidence and decision notes a buyer receives.',
      },
      {
        href: '/free-china-sourcing-risk-check',
        label: 'Free Sourcing Risk Check',
        note: 'Start here if you are unsure whether this needs a label check, FBA prep, or broader QC.',
      },
    ],
    faqs: [
      {
        question: 'Can you check FNSKU labels before shipment from China?',
        answer:
          'Yes. Send the FNSKU files, shipment plan, SKU list, carton count, and supplier details so the visible label evidence can be checked before pickup or shipment release.',
      },
      {
        question: 'Can you check carton labels as well as unit labels?',
        answer:
          'Yes. Carton labels, shipping marks, FNSKU placement, SKU separation, and basic packing evidence can be checked when the requirements are provided.',
      },
      {
        question: 'Can you apply labels or only inspect them?',
        answer:
          'Both may be possible depending on location, volume, SKU count, and access. Send the label files and carton count so the correct scope can be quoted.',
      },
      {
        question: 'Does this guarantee Amazon will accept my shipment?',
        answer:
          'No. This reduces visible China-side prep risk before shipment, but Amazon receiving, marketplace compliance, and listing approval are separate decisions.',
      },
    ],
  },
  'alibaba-supplier-verification-china': {
    slug: 'alibaba-supplier-verification-china',
    title: 'Alibaba Supplier Verification China',
    metaTitle: 'Alibaba Supplier Verification China Before Deposit | Buyer-Side Check',
    metaDescription:
      'Verify an Alibaba supplier before sending a deposit. Huang Sourcing checks company identity, factory or trader signals, quote terms, and payment risk from China.',
    eyebrow: 'Alibaba supplier verification',
    h1: 'Alibaba supplier verification before deposit payment.',
    imageAlt:
      'Alibaba supplier verification reviewing company details quote and supplier evidence before deposit',
    imageSrc: '/images/service-supplier-verification.webp',
    intro:
      'Use this guide when an Alibaba supplier profile looks convincing but the company identity, factory role, quote terms, or deposit request still needs a buyer-side check. Huang Sourcing helps overseas buyers review visible supplier signals before money leaves the account.',
    primaryCtaLabel: 'Verify Alibaba supplier before deposit',
    ctaMessage: `Hi Agent Huang,

I need Alibaba supplier verification before deposit payment.

Alibaba supplier link:
Company name:
Product:
Quote / order value:
Main concern:
`,
    whenToUse: [
      'Before paying a deposit to a new Alibaba supplier',
      'When the profile, quote, invoice, or company name does not line up cleanly',
      'When the supplier claims to be a factory but the signals feel unclear',
      'When you need buyer-side questions before signing a PI or wiring money',
    ],
    riskSignals: [
      'Alibaba profile details and invoice company details do not match cleanly',
      'The supplier pushes for deposit payment before basic proof is clear',
      'The listed product range, address, or factory role feels inconsistent',
      'Quote terms, MOQ, lead time, tooling, or payment terms are vague',
    ],
    checks: [
      'Supplier identity and visible company consistency',
      'Factory vs trading company signals from available information',
      'Alibaba profile, website, quote, PI, MOQ, lead time, and payment-term risk',
      'Questions to ask before deposit payment',
      'Whether a deeper supplier verification or onsite visit should be scoped',
    ],
    whatToSend: [
      'Alibaba supplier link, company name, and contact details',
      'Quote, PI, payment terms, MOQ, lead time, and order value',
      'Product photos, specifications, and target quantity',
      'Any warning signs or questions you already noticed',
    ],
    buyerReceives: [
      'Buyer-side Alibaba supplier risk summary',
      'Factory or trader signal notes',
      'Quote and deposit-payment risk notes',
      'Practical next questions and a go, caution, or stop recommendation',
    ],
    scopeLimits: [
      'We do not promise zero supplier risk',
      'We do not replace legal due diligence, contract review, or dispute resolution',
      'We do not replace certification, lab testing, or regulated compliance checks',
      'We do not make supplier-paid recommendations',
    ],
    internalLinks: [
      {
        href: '/supplier-verification-china',
        label: 'Supplier Verification China',
        note: 'Use when the supplier needs a focused buyer-side verification scope.',
      },
      {
        href: '/before-deposit-china-supplier-check',
        label: 'Before deposit supplier check',
        note: 'Use when the immediate decision is whether to send deposit payment.',
      },
      {
        href: '/free-china-sourcing-risk-check',
        label: 'Free Sourcing Risk Check',
        note: 'Start here if you are unsure whether the visible risk needs paid verification.',
      },
      {
        href: '/sample-inspection-report-china',
        label: 'Sample inspection report',
        note: 'See how buyer-side evidence and limitations are presented before payment or shipment.',
      },
    ],
    faqs: [
      {
        question: 'Can you verify Alibaba suppliers before I pay?',
        answer:
          'Yes. Send the Alibaba supplier link, company name, quote, product, and order stage so visible supplier and payment risk can be reviewed before deposit.',
      },
      {
        question: 'Is Alibaba supplier verification the same as a factory audit?',
        answer:
          'No. This is an early buyer-side risk check. A full factory audit or onsite visit can be quoted separately when the order risk justifies it.',
      },
      {
        question: 'Can you tell whether the supplier is a factory or trader?',
        answer:
          'The check can review factory and trader signals from available evidence, but it does not make a legal guarantee about the supplier role.',
      },
      {
        question: 'Should I do this before samples or after samples?',
        answer:
          'If supplier identity or deposit pressure is unclear, check before deposit. If several suppliers are already sending samples, sample consolidation can help compare them before final selection.',
      },
    ],
  },
  'factory-vs-trading-company-china': {
    slug: 'factory-vs-trading-company-china',
    title: 'Factory vs Trading Company China',
    metaTitle: 'Factory vs Trading Company in China | Supplier Verification Guide',
    metaDescription:
      'Understand factory vs trading company signals in China before deposit. Learn what buyers can check remotely, what may need onsite evidence, and when supplier verification helps.',
    eyebrow: 'Factory vs trading company China',
    h1: 'Factory vs trading company in China before deposit.',
    imageAlt:
      'Factory vs trading company in China supplier verification signals before deposit',
    imageSrc: '/images/service-supplier-verification.webp',
    intro:
      'Use this guide when a Chinese supplier says they are a factory, but the company name, address, product range, quote, or Alibaba profile still feels unclear. The goal is not to punish trading companies. The goal is to understand who you are paying, who controls production, and what evidence you should request before deposit.',
    primaryCtaLabel: 'Check supplier role before deposit',
    ctaMessage: `Hi Agent Huang,

I need help checking whether a China supplier looks like a factory or trading company.

Supplier link / company name:
Product:
Quote / order value:
Current stage:
Main concern:
`,
    whenToUse: [
      'Before sending a deposit to a supplier claiming factory status',
      'When the company name, payment beneficiary, address, and profile do not line up cleanly',
      'When the product range looks too broad for one factory',
      'When you need practical questions before choosing supplier verification or onsite checking',
    ],
    riskSignals: [
      'The supplier claims factory pricing but avoids sharing factory address or production evidence',
      'The company sells many unrelated product categories without clear specialization',
      'Invoice, Alibaba profile, website, and payment beneficiary use different names',
      'The supplier cannot explain MOQ, lead time, tooling, or production constraints clearly',
    ],
    checks: [
      'Company identity, address, profile, quote, and PI consistency',
      'Factory vs trading company signals from available online and document evidence',
      'Product range and claimed production capability signals',
      'Questions to request before deposit or supplier selection',
      'Whether remote verification is enough or onsite evidence should be scoped',
    ],
    whatToSend: [
      'Supplier website, Alibaba link, company name, and contact details',
      'Quote, PI, payment beneficiary, MOQ, lead time, and order value',
      'Product photos, specifications, target quantity, and supplier claims',
      'Any factory photos, videos, licenses, or documents the supplier already shared',
    ],
    buyerReceives: [
      'Buyer-side notes on factory and trading company signals',
      'Risk questions to ask before deposit payment',
      'Practical recommendation on whether supplier verification or onsite checking fits',
      'Clear limits on what remote evidence can and cannot prove',
    ],
    scopeLimits: [
      'We do not make a legal guarantee about the supplier role',
      'We do not promise a factory is always better than a trading company',
      'We do not replace legal due diligence, certification review, or a formal factory audit',
      'We do not promise zero supplier or payment risk',
    ],
    internalLinks: [
      {
        href: '/supplier-verification-china',
        label: 'Supplier Verification China',
        note: 'Use when the supplier role, company details, quote, and payment risk need a focused buyer-side check.',
      },
      {
        href: '/how-to-verify-chinese-supplier-before-deposit',
        label: 'How to verify a Chinese supplier before deposit',
        note: 'Use when the payment decision is urgent and the buyer needs a broader deposit checklist.',
      },
      {
        href: '/alibaba-supplier-verification-china',
        label: 'Alibaba supplier verification',
        note: 'Use when supplier role questions started from an Alibaba profile or quote.',
      },
      {
        href: '/free-china-sourcing-risk-check',
        label: 'Free Sourcing Risk Check',
        note: 'Start here if you are unsure whether the visible risk needs paid verification.',
      },
    ],
    faqs: [
      {
        question: 'Is a factory always better than a trading company?',
        answer:
          'No. A good trading company can be useful for some buyers, and a weak factory can still create risk. The practical question is whether the supplier role, payment beneficiary, production control, and quote terms are clear enough before deposit.',
      },
      {
        question: 'Can supplier verification prove the company is the real factory?',
        answer:
          'Supplier verification can review visible factory and trading company signals from available evidence. A stronger onsite scope may be needed when the buyer needs photos, location evidence, or deeper confirmation.',
      },
      {
        question: 'What documents should I request before deposit?',
        answer:
          'Ask for company registration details, PI with matching beneficiary, factory address, product evidence, production photos when relevant, and clear quote terms including MOQ, lead time, tooling, and payment terms.',
      },
      {
        question: 'Should I reject a supplier if they are a trading company?',
        answer:
          'Not automatically. The buyer should understand the supplier role, margin, accountability, production access, and whether the company can provide enough evidence before payment or production starts.',
      },
    ],
  },
}

export const riskGuideSlugs = Object.keys(riskGuidePages) as RiskGuideSlug[]

export function getRiskGuidePage(slug: RiskGuideSlug) {
  return riskGuidePages[slug]
}

export function makeRiskGuideMetadata(page: RiskGuidePage): Metadata {
  const canonicalPath = `/${page.slug}`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${page.title} by Huang Sourcing`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
      images: ['/og-image.png'],
    },
  }
}

export function makeRiskGuideJsonLd(page: RiskGuidePage) {
  const pageUrl = getAbsoluteUrl(`/${page.slug}`)

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.metaTitle,
      description: page.metaDescription,
      url: pageUrl,
      inLanguage: 'en',
      publisher: {
        '@type': 'Organization',
        name: 'Huang Sourcing',
        url: getAbsoluteUrl('/'),
        email: businessEmail,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: page.faqs.map((faq) => ({
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
          name: page.title,
          item: pageUrl,
        },
      ],
    },
  ]
}
