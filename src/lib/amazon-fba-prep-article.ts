import type { Metadata } from 'next'

import {
  amazonFbaPrepArticleHref,
  businessEmail,
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

export const amazonFbaPrepArticle = {
  href: amazonFbaPrepArticleHref,
  title: 'Amazon FBA Prep in China: FNSKU, Carton Labels, SKU Separation',
  metaTitle: 'Amazon FBA Prep in China: FNSKU, Carton Labels, SKU Separation',
  metaDescription:
    'Use this Amazon FBA prep China checklist before shipment to confirm FNSKU labels, carton labels, SKU separation, packing rules, and pickup readiness.',
  h1: 'Amazon FBA Prep in China: FNSKU, Carton Labels, SKU Separation',
  eyebrow: 'Amazon FBA prep China',
  image: {
    alt: 'Agent Huang checking FNSKU labels carton labels and SKU separation for Amazon FBA prep in China',
    height: 900,
    src: '/images/amazon-fba-prep-fnsku-carton-labels.webp',
    width: 1600,
  },
  intro:
    'Amazon FBA prep in China is most useful before cartons leave the supplier or forwarder warehouse. Once goods are moving, wrong FNSKU labels, missing carton labels, mixed SKUs, or unclear shipment-plan details can turn a simple shipment into relabeling fees, receiving delays, or stranded inventory.',
  answerSummary:
    'A practical FBA prep check should answer one buyer decision: ship direct to FBA, correct labels, separate SKUs, route through a prep warehouse, or delay pickup. The useful evidence is carton-level and SKU-level, not just a few close-up label photos.',
  primaryCta: {
    href: '/amazon-fba-prep-china',
    label: 'Ask FBA quote',
  },
  secondaryCta: {
    href: '#what-to-check',
    label: 'See FBA checks',
  },
  whatsappMessage: `Hi Agent Huang,

I need an FBA prep quote in China.

Product:
SKUs:
Units / cartons:
Factory or warehouse location:
FNSKU / carton label files ready?:
Pickup or shipment deadline:
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
    'FNSKU files, unit labels, barcode readability, and label placement',
    'Carton labels, shipping marks, shipment ID labels, and label placement',
    'SKU separation by carton, product version, color, size, bundle, or set',
    'Poly bag warnings, suffocation warnings, set labels, expiration dates, and lot labels when relevant',
    'Carton count, units per carton, gross weight, carton dimensions, and carton condition',
    'Shipment plan, SKU list, carton-level packing details, and pickup readiness',
    'Photo evidence of unit labels, carton labels, separated SKUs, and correction needs',
    'Decision notes for direct FBA shipment, relabeling, repacking, prep warehouse routing, or delay',
  ],
  sections: [
    {
      id: 'why-before-shipment',
      title: 'Why Amazon FBA prep in China should be checked before shipment',
      paragraphs: [
        'FBA prep mistakes are usually small, visible, and expensive later. A wrong FNSKU, mixed SKU carton, missing carton label, or unlabeled bundle can create Amazon receiving problems after the goods are already overseas.',
        'Checking in China gives the buyer a chance to correct labels, separate SKUs, repack cartons, or route goods through a prep warehouse before freight and receiving delays begin.',
      ],
      bullets: [
        'Ship direct to FBA only when labels, cartons, and shipment plan line up',
        'Delay pickup if FNSKU labels or carton labels are not confirmed',
        'Separate SKUs before shipment when mixed cartons create receiving risk',
        'Use a prep warehouse when supplier-side prep is unclear or incomplete',
      ],
    },
    {
      id: 'what-to-check',
      title: 'What to check: FNSKU, carton labels, and SKU separation',
      paragraphs: [
        'A useful Amazon FBA prep China check should not stop at asking whether labels were printed. The question is whether the correct labels are placed on the correct units and cartons, and whether the shipment matches the plan that Amazon or the seller created.',
        'Agent Huang looks for SKU-level and carton-level evidence: unit labels, carton labels, packing method, carton count, SKU separation, and whether the supplier or warehouse understands the prep rule for this exact order.',
      ],
      bullets: [
        'FNSKU labels: correct file, correct SKU, readable barcode, stable placement, and no conflicting retail barcode when it should be covered',
        'Carton labels: correct carton label files, shipment labels, shipping marks, visible placement, and no missing or duplicate labels',
        'SKU separation: one SKU per carton when required, clear separation for color or size variants, and no mixed units without carton-level notes',
        'Prep rules: poly bag warning, set label, bundle label, fragile protection, expiration date, lot number, country of origin, and insert requirements when relevant',
        'Carton details: carton count, unit count, gross weight, carton dimensions, carton condition, and whether cartons are ready for pickup',
        'Shipment-plan fit: whether the packing list and carton labels match the shipment plan, SKU list, and forwarder pickup plan',
      ],
    },
    {
      id: 'field-notes',
      title: 'Agent Huang field notes from FBA prep checks',
      paragraphs: [
        'The riskiest FBA prep problems are often not dramatic. They are quiet mismatches: one SKU label printed from an old file, a shipment label applied to the wrong carton, similar color variants packed together, or a bundle missing a set label.',
        'Supplier photos can look convincing because they show labels close up. Buyer-side evidence should show the label in context: product, SKU group, carton, carton count, and shipment plan relationship.',
      ],
      bullets: [
        'Do not approve FBA shipment from one close-up FNSKU photo',
        'Ask for SKU-group photos when color, size, bundle, or multi-pack variants are similar',
        'Check carton labels before cartons are sealed or handed to the forwarder',
        'Treat unclear shipment-plan files as a buyer-side risk, not only a supplier task',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'FNSKU labels',
      whatWasChecked:
        'FNSKU files, unit labels, barcode readability, placement, SKU match, and conflicting barcode risk',
      buyerDecision: 'Approve unit labels, relabel, cover wrong barcodes, or pause shipment',
    },
    {
      riskNode: 'Carton labels',
      whatWasChecked:
        'Carton labels, shipment labels, shipping marks, label placement, carton count, and duplicate or missing labels',
      buyerDecision: 'Approve pickup, relabel cartons, update shipment files, or delay release',
    },
    {
      riskNode: 'SKU separation',
      whatWasChecked:
        'SKU groups, color and size variants, bundles, sets, units per carton, mixed-carton signals, and packing-list match',
      buyerDecision: 'Ship as packed, separate SKUs, create carton-level notes, or repack',
    },
    {
      riskNode: 'Prep rules',
      whatWasChecked:
        'Poly bag warnings, set labels, bundle labels, expiration dates, lot labels, inserts, and product-specific prep requirements',
      buyerDecision: 'Approve prep, add missing labels, repack affected goods, or route through prep warehouse',
    },
    {
      riskNode: 'FBA shipment release',
      whatWasChecked:
        'Shipment plan, packing list, carton condition, pickup address, forwarder contact, and deadline risk',
      buyerDecision: 'Ship direct to FBA, delay pickup, use prep warehouse, or re-check after correction',
    },
  ] satisfies DecisionRow[],
  whatToSend: [
    'FNSKU label files, carton label files, shipment plan, and SKU list',
    'Product photos, unit count, carton count, units per carton, and packing method',
    'Bundle, set, poly bag, expiration date, lot label, insert, or special prep requirements',
    'Factory or warehouse address, supplier contact, forwarder contact, and pickup window',
    'Any recent listing change, label-file change, shipment-plan change, or SKU separation concern',
    'The decision you need after the check: direct FBA shipment, prep warehouse, relabeling, or pickup release',
  ],
  redFlags: [
    'Supplier photos show one label close-up but not the SKU group or cartons',
    'FNSKU files, carton labels, or shipment plan changed after packing started',
    'Similar color, size, or bundle variants are stored together without clear SKU separation',
    'Carton labels are missing, duplicated, placed on the wrong cartons, or applied after sealing without evidence',
    'Supplier says Amazon labels can be fixed after pickup',
    'Carton count, units per carton, or shipment-plan details do not match the packing list',
    'The supplier has never handled the category or cannot explain FBA prep requirements for this order',
  ],
  scopeLimits: [
    'Amazon FBA prep in China reduces visible prep and shipment-readiness risk, but it does not guarantee Amazon receiving approval',
    'It does not replace marketplace compliance, product safety testing, listing approval, or legal review',
    'It does not guarantee hidden carton contents unless opening and checking are included in the scope',
    'It does not guarantee every barcode will scan in every Amazon warehouse system',
    'It does not control Amazon receiving speed, inventory placement, warehouse processing, or stranded inventory decisions after arrival',
    'It works best when the buyer provides final label files, shipment plan, SKU list, and clear prep rules before the check',
  ],
  relatedLinks: [
    {
      href: '/amazon-fba-prep-china',
      label: 'Amazon FBA Prep China',
      note: 'Ask for China-side FBA prep support when labels, cartons, and SKU separation need hands-on handling.',
    },
    {
      href: '/fnsku-label-check-china',
      label: 'FNSKU Label Check China',
      note: 'Use when the main risk is unit labels, carton labels, or label placement before shipment.',
    },
    {
      href: '/before-amazon-fba-shipment-china',
      label: 'Before Amazon FBA Shipment',
      note: 'Use when the buyer decision is whether cartons should leave China for Amazon now.',
    },
    {
      href: '/before-forwarder-pickup-inspection-china',
      label: 'Before Forwarder Pickup',
      note: 'Use when carton handover, pickup address, and logistics readiness also need checking.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What is Amazon FBA prep in China?',
      answer:
        'Amazon FBA prep in China means preparing goods before shipment to Amazon, including FNSKU labels, carton labels, SKU separation, packing rules, poly bag warnings, bundle labels, and shipment-plan alignment when relevant.',
    },
    {
      question: 'Should FNSKU labels be checked before shipment?',
      answer:
        'Yes. FNSKU labels should be checked before pickup or shipment release because wrong, missing, duplicated, or poorly placed labels can create Amazon receiving delays and relabeling costs later.',
    },
    {
      question: 'Can Huang Sourcing check carton labels and SKU separation?',
      answer:
        'Yes. Send FNSKU files, carton labels, shipment plan, SKU list, packing details, and pickup deadline so carton labels and SKU separation can be checked in China.',
    },
    {
      question: 'Can goods ship directly from China to Amazon FBA?',
      answer:
        'Yes, but direct shipment is safest when unit labels, carton labels, SKU separation, carton count, and shipment-plan details are confirmed before pickup.',
    },
    {
      question: 'Does FBA prep in China guarantee Amazon will receive the shipment?',
      answer:
        'No. China-side prep reduces visible label and packing risk, but Amazon receiving approval, marketplace compliance, warehouse processing, and listing status are separate from the prep check.',
    },
  ] satisfies FaqItem[],
}

export function makeAmazonFbaPrepArticleMetadata(): Metadata {
  const canonicalPath = amazonFbaPrepArticle.href

  return {
    title: amazonFbaPrepArticle.metaTitle,
    description: amazonFbaPrepArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: amazonFbaPrepArticle.metaTitle,
      description: amazonFbaPrepArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        {
          url: amazonFbaPrepArticle.image.src,
          width: amazonFbaPrepArticle.image.width,
          height: amazonFbaPrepArticle.image.height,
          alt: amazonFbaPrepArticle.image.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: amazonFbaPrepArticle.metaTitle,
      description: amazonFbaPrepArticle.metaDescription,
      images: [amazonFbaPrepArticle.image.src],
    },
  }
}

export function makeAmazonFbaPrepArticleJsonLd() {
  const pageUrl = getAbsoluteUrl(amazonFbaPrepArticle.href)

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: amazonFbaPrepArticle.title,
      description: amazonFbaPrepArticle.metaDescription,
      url: pageUrl,
      inLanguage: 'en',
      image: getAbsoluteUrl(amazonFbaPrepArticle.image.src),
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
      name: 'Amazon FBA prep China checklist',
      itemListElement: amazonFbaPrepArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: amazonFbaPrepArticle.faqs.map((faq) => ({
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
          name: amazonFbaPrepArticle.title,
          item: pageUrl,
        },
      ],
    },
  ]
}
