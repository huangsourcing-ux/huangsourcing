import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { amazonFbaPrepArticleHref } from '@/lib/site-links'

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

type RelatedLink = {
  href: string
  label: string
  note: string
}

type SourceNote = {
  href: string
  label: string
  note: string
}

export const amazonFbaPrepArticle = {
  author: 'editorial-team' as const,
  href: amazonFbaPrepArticleHref,
  title: 'Amazon FBA Prep in China After Amazon Ended Prep Services',
  metaTitle: 'Amazon FBA Prep China After 2026 Changes',
  metaDescription:
    'Amazon ended US FBA prep and item-labeling services in 2026. Check barcodes, labels, packaging, cartons, and release evidence before goods leave China.',
  publishedDate: 'May 23, 2026',
  publishedDateIso: '2026-05-23T03:53:10-04:00',
  modifiedDate: 'July 25, 2026',
  modifiedDateIso: '2026-07-25T03:45:00+08:00',
  h1: 'Amazon FBA Prep in China After Amazon Ended Prep Services',
  eyebrow: 'Barcode - packaging - carton evidence - release decision',
  image: {
    alt: 'Illustration of China-side FBA barcode labeling, SKU separation, and carton preparation before shipment',
    height: 900,
    src: '/images/amazon-fba-prep-fnsku-carton-labels.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/amazon-fba-prep-fnsku-carton-labels.webp', width: 1600 },
    { height: 1200, src: '/images/amazon-fba-prep-fnsku-carton-labels-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/amazon-fba-prep-fnsku-carton-labels-1x1.webp', width: 1200 },
  ],
  intro:
    'Amazon ended prep and item-labeling services for US FBA shipments on January 1, 2026. Sellers now need the supplier, a China prep partner, or another qualified provider to finish the required barcodes, packaging, labels, and shipment-box work before inventory reaches Amazon. Check the actual goods while correction is still possible, not after the forwarder collects them.',
  answerSummary:
    'Release only when the current marketplace instructions, shipment plan, SKU files, unit-level preparation, box labels, quantities, and photo evidence agree. Otherwise correct the affected units or cartons, move them through a prep partner, or hold pickup. China-side checking cannot guarantee Amazon acceptance or decide product compliance.',
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
    { href: '#amazon-2026-change', label: '2026 service change' },
    { href: '#what-to-check', label: 'Prep checklist' },
    { href: '#public-case', label: 'Public case' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#sources', label: 'Sources' },
    { href: '#documents', label: 'What to send' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Confirm the seller or named provider—not Amazon—is assigned the current prep and label work',
    'Match the barcode type and final label file to every SKU, variation, condition, bundle, and unit',
    'Check barcode readability, flat placement, and whether conflicting barcodes must be covered',
    'Confirm current product-specific bagging, bubble-wrap, set, loose-product, and warning requirements',
    'Match shipment-box labels, carton count, units per carton, weights, dimensions, and packing list',
    'Show each checked SKU and carton in context, including exceptions and correction evidence',
    'Reconcile the current shipment plan, marketplace, destination, pickup window, and handoff owner',
    'Approve direct shipment, correct, repack, use a prep partner, or hold pickup',
  ],
  sections: [
    {
      id: 'amazon-2026-change',
      title: 'What changed for Amazon FBA prep in 2026?',
      paragraphs: [
        'Amazon’s official announcement says US FBA prep and item-labeling services stopped on January 1, 2026. The change covers inventory sent directly to FBA and inventory passing through Amazon Warehousing and Distribution, Amazon Global Logistics, Amazon SEND, or the Supply Chain Portal. Amazon also removed AMAZON as an accepted prepOwner or labelOwner value in US Fulfillment Inbound API operations.',
        'Amazon’s July 7, 2026 seller guide places preparation before inbound delivery: choose the right barcode, apply readable labels, package each product securely, follow product-specific instructions, and remove or cover unintended shipping-box barcodes. The guide says inadequate preparation may lead to refusal, return, or repackaging at the seller’s expense.',
      ],
      bullets: [
        'Name the party responsible for unit preparation, item labeling, shipment-box work, and corrections',
        'Do not use an old workflow that assumes an Amazon fulfillment center will complete missing prep',
        'Pull current instructions from the destination marketplace and active shipment plan for this order',
        'Hold pickup when responsibility, files, or correction capacity remains unclear',
      ],
    },
    {
      id: 'what-to-check',
      title: 'What should buyers check before cartons leave China?',
      paragraphs: [
        'Start with the active Seller Central shipment plan and final seller files. Amazon can use manufacturer barcodes, Amazon barcodes, or Transparency codes in different circumstances, so “add an FNSKU” is not a universal instruction. The seller should identify the barcode route and provide the exact files and current product-specific preparation requirements.',
        'Then connect each file to physical evidence. Show the label on the correct product and outer preparation, show SKU or variation groups, count cartons and units, record shipment-box labels, and document corrections. A close-up barcode photo without product, carton, and shipment context is not enough for a release decision.',
      ],
      bullets: [
        'Unit identity: ASIN, FNSKU or other approved barcode, seller SKU, variation, condition, and product title',
        'Label execution: correct file, legibility, placement, adhesion, outside visibility, and conflicting-barcode treatment',
        'Product preparation: secure packaging, loose-product control, bagging, bubble wrap, sets, sharp or fragile protection, and category instructions',
        'Shipment boxes: correct labels, no unintended scannable barcodes, box count, units, weight, dimensions, condition, and destination match',
        'Exception control: affected quantity, segregated stock, correction owner, correction photos, recount, and re-check result',
      ],
    },
    {
      id: 'evidence-workflow',
      title: 'How should China-side evidence support the release decision?',
      paragraphs: [
        'Set the evidence plan before the visit or warehouse check. Define which SKUs and cartons will be opened, what files are final, how barcode readability will be checked, what product-specific prep applies, and which defects require correction or a hold. Preserve photos with SKU and carton context rather than accepting unlabeled image batches.',
        'If the order changes after checking—new label files, a different product version, repacking, a revised shipment plan, or mixed replacement stock—the earlier evidence may no longer support release. Reconcile the changed scope and re-check the affected units or cartons before pickup.',
      ],
      bullets: [
        'Use a SKU-and-carton sampling or full-check plan appropriate to the order and decision',
        'Record both conforming evidence and exceptions; do not photograph only the best examples',
        'Separate corrected stock from unchecked or rejected stock and preserve the corrected count',
        'Release only against the current shipment plan and the responsible seller’s written instructions',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Prep and label owner',
      whatWasChecked:
        'Named seller, factory, China prep partner, or other provider; current marketplace; shipment plan; work instructions; and correction capacity',
      buyerDecision: 'Confirm responsibility, assign a qualified prep owner, or hold pickup',
    },
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
  evidenceBasis: [
    'Amazon’s official service-change announcement for US FBA shipments and its July 7, 2026 public prep, packaging, and labeling guide.',
    'Independent supply-chain reporting used to distinguish Amazon’s announcement from Huang Sourcing’s buyer-side interpretation.',
    'Buyer-provided active shipment plan, barcode and box-label files, SKU list, product-specific instructions, packing list, and pickup deadline.',
    'SKU-level, unit-level, and carton-level evidence showing checked examples, exceptions, corrected quantities, and release limits.',
  ],
  sourceNotes: [
    {
      href: 'https://developer-docs.amazon.com/sp-api/lang-en_US/changelog/us-fba-prep-and-labeling-services-to-end-january-1-2026',
      label: 'Amazon - US FBA prep and labeling services ended January 1, 2026',
      note: 'Primary Amazon announcement covering the service end, affected inbound routes, and Fulfillment Inbound API owner changes.',
    },
    {
      href: 'https://sell.amazon.com/blog/fba-packaging-prep-labeling',
      label: 'Amazon - FBA prep, packaging, and labeling guide',
      note: 'Current July 7, 2026 public guidance on barcode types, label application, packaging, product-specific prep, shipping boxes, and possible consequences of inadequate preparation.',
    },
    {
      href: 'https://www.supplychaindive.com/news/amazon-fba-prep-item-labeling-services-end/756289/',
      label: 'Supply Chain Dive - Amazon ends US FBA prep and labeling services',
      note: 'Independent August 1, 2025 report summarizing Amazon’s operational change and the shift to seller, manufacturing-partner, or third-party preparation.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'FNSKU label files, carton label files, shipment plan, and SKU list',
    'Product photos, unit count, carton count, units per carton, and packing method',
    'Bundle, set, poly bag, expiration date, lot label, insert, or special prep requirements',
    'Factory or warehouse address, supplier contact, forwarder contact, and pickup window',
    'Any recent listing change, label-file change, shipment-plan change, or SKU separation concern',
    'The decision you need after the check: direct FBA shipment, prep warehouse, relabeling, or pickup release',
  ],
  redFlags: [
    'The shipment workflow still identifies Amazon as the party that will complete missing prep or item labeling',
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
    'Amazon rules, program availability, barcode eligibility, product-specific prep, fees, and shipment workflows can change by marketplace, product, account, and date',
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
        ...getArticleOpenGraphImages(amazonFbaPrepArticle),
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
  return [
    makeArticleJsonLd(amazonFbaPrepArticle),
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
  ]
}
