import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { amazonSellersFbaPrepChinaArticleHref } from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

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

export const amazonSellersFbaPrepChinaArticle = {
  href: amazonSellersFbaPrepChinaArticleHref,
  title: 'Do Amazon Sellers Need FBA Prep in China?',
  metaTitle: 'Amazon Sellers FBA Prep China',
  metaDescription:
    'Decide whether Amazon sellers need FBA prep in China before pickup. Compare direct shipment, supplier prep, China prep support, destination prep, and re-check decisions.',
  publishedDate: 'May 31, 2026',
  publishedDateIso: '2026-05-31T09:00:00-04:00',
  h1: 'Do Amazon Sellers Need FBA Prep in China?',
  eyebrow: 'Amazon sellers FBA prep China',
  image: {
    alt: 'Agent Huang checking SKU separation and FBA prep evidence for Amazon sellers in China',
    height: 900,
    src: '/images/amazon-sellers-fba-prep-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/amazon-sellers-fba-prep-china.webp', width: 1600 },
    { height: 1200, src: '/images/amazon-sellers-fba-prep-china-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/amazon-sellers-fba-prep-china-1x1.webp', width: 1200 },
  ],
  intro:
    'Amazon sellers do not always need FBA prep in China. Some suppliers can label, pack, and separate SKUs correctly when the seller gives final files and clear instructions. But China-side FBA prep becomes useful when label evidence is weak, SKUs are mixed, packing rules are unclear, or pickup is close and the shipment cannot afford preventable receiving problems.',
  answerSummary:
    'The practical decision is not simply yes or no. Decide whether to ship direct from the supplier, ask the supplier to correct, use FBA prep support in China, route through a destination prep warehouse, or hold pickup for re-check. The answer depends on what was checked: FNSKU labels, carton labels, SKU separation, packing rules, shipment-plan files, carton condition, and pickup readiness.',
  primaryCta: {
    href: '/amazon-fba-prep-china',
    label: 'Ask FBA Prep Quote',
  },
  secondaryCta: {
    href: '#decision-table',
    label: 'Compare prep decisions',
  },
  whatsappMessage: `Hi Agent Huang,

I need help deciding whether my Amazon shipment needs FBA prep in China.

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
    { href: '#need-or-not', label: 'Need or not' },
    { href: '#china-prep-fit', label: 'When China prep fits' },
    { href: '#supplier-or-destination', label: 'Supplier or destination prep' },
    { href: '#decision-table', label: 'Prep decisions' },
    { href: '#field-notes', label: 'Field notes' },
    { href: '#evidence-basis', label: 'Evidence basis' },
    { href: '#documents', label: 'What to send' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'You may not need China-side FBA prep if the supplier can prove final labels, carton labels, SKU separation, carton count, and shipment-plan match',
    'Use FBA prep in China when FNSKU labels, carton labels, bundle labels, set labels, or old barcode coverage need physical handling',
    'Use prep support when color, size, bundle, multipack, or version variants are easy to mix before shipment',
    'Hold pickup when the shipment plan, packing list, carton labels, or SKU list changed after packing started',
    'Route through destination prep when goods are already overseas or Amazon compliance work needs local marketplace support',
    'Combine prep with QC when product quality, packaging defects, or carton condition are still uncertain',
    'Do not treat one clean label photo as proof that all SKUs and cartons are ready',
    'Final Amazon approval, listing compliance, receiving speed, and warehouse processing remain outside China-side prep',
  ],
  sections: [
    {
      id: 'need-or-not',
      title: 'The short answer: not every Amazon seller needs China-side FBA prep',
      paragraphs: [
        'If the supplier has experience with your category, has final label files, understands the shipment plan, and can show SKU-level and carton-level evidence, the seller may not need separate FBA prep in China. A focused label or pickup check may be enough.',
        'If the supplier evidence is thin, the order has many variants, labels changed late, or cartons are about to leave China, prep support can be cheaper than discovering the mistake after freight moves. The buyer should decide from evidence, not from the supplier saying everything is ready.',
      ],
      bullets: [
        'No extra prep may be needed when files, labels, cartons, and SKU separation clearly match',
        'China-side prep helps when correction is still physically possible before pickup',
        'Destination prep may fit when goods are already overseas or need marketplace-specific local handling',
        'A broader QC inspection may be needed if the risk is product quality, not only FBA preparation',
      ],
    },
    {
      id: 'china-prep-fit',
      title: 'When FBA prep in China makes sense',
      paragraphs: [
        'FBA prep in China makes sense when the work is visible, physical, and better corrected before the cartons leave the supplier or forwarder warehouse. That includes FNSKU labels, carton labels, SKU separation, inserts, bundle labels, poly bag warnings, set labels, and carton-level shipment evidence when relevant.',
        'The goal is to make the pickup decision safer. If a seller can approve pickup only after labels, cartons, and SKU groups are verified, then the prep check should create photo evidence and correction notes before the forwarder collects the goods.',
      ],
      bullets: [
        'FNSKU labels need to be printed, applied, checked, or corrected',
        'Carton labels, shipment labels, or shipping marks are missing or unclear',
        'Old retail barcodes, factory barcodes, or wrong labels need coverage',
        'Similar SKUs, colors, sizes, bundles, or multipacks need separation',
        'Supplier has packed cartons but cannot show enough label and SKU evidence',
        'Pickup is close and correction after shipment would be slower or more expensive',
      ],
    },
    {
      id: 'supplier-or-destination',
      title: 'When supplier prep or destination prep may be enough',
      paragraphs: [
        'Supplier prep may be enough when the supplier receives final files early, labels a test batch correctly, keeps SKU groups separate, and provides broad carton-level evidence. In that case, the seller may only need a before-pickup check rather than hands-on prep support.',
        'Destination prep may make sense when the shipment is already moving, when local marketplace handling is required after arrival, or when the seller wants a prep warehouse near the final receiving channel. The tradeoff is that obvious label and carton problems could travel overseas before correction.',
      ],
      bullets: [
        'Use supplier prep when the supplier can prove correct work before pickup',
        'Use China-side prep when the supplier cannot handle or document the prep reliably',
        'Use destination prep when goods are already overseas or local marketplace work is needed',
        'Use a re-check when supplier corrections affect meaningful quantities, SKUs, or cartons',
      ],
    },
    {
      id: 'field-notes',
      title: 'Agent Huang field notes on the FBA prep decision',
      paragraphs: [
        'The risky pattern is treating FBA prep as a label-printing task only. The real question is whether the final shipment can be received and processed without preventable China-side mistakes such as mixed SKUs, wrong carton labels, missing bundle labels, or old barcodes left visible.',
        'Supplier photos are useful, but they can be too narrow. A good prep decision needs context: the SKU group, the carton, the packing list, the shipment plan, the pickup window, and what should happen if one part does not match.',
      ],
      bullets: [
        'Ask for evidence by SKU group, not one generic product-label photo',
        'Confirm carton labels before cartons leave the supplier or forwarder warehouse',
        'Treat late shipment-plan or label-file changes as a re-check trigger',
        'Keep the decision practical: ship direct, correct, prep in China, prep at destination, or hold pickup',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Supplier already prepared goods',
      whatWasChecked:
        'Supplier label photos, SKU groups, carton labels, packing list, shipment-plan files, carton count, and pickup readiness',
      buyerDecision: 'Ship direct, request more evidence, or schedule a focused before-pickup check',
    },
    {
      riskNode: 'FNSKU or unit labels uncertain',
      whatWasChecked:
        'FNSKU files, label placement, barcode readability, SKU match, old barcode coverage, and correction proof',
      buyerDecision: 'Use China-side FBA prep, relabel affected units, cover old barcodes, or re-check',
    },
    {
      riskNode: 'Carton labels or shipment plan unclear',
      whatWasChecked:
        'Carton labels, shipment labels, carton count, units per carton, packing list, gross weight, dimensions, and file version',
      buyerDecision: 'Relabel cartons, correct documents, delay pickup, or approve release',
    },
    {
      riskNode: 'Mixed SKU or bundle risk',
      whatWasChecked:
        'Color, size, version, bundle, multipack, set labels, SKU separation, carton grouping, and packing-list match',
      buyerDecision: 'Separate SKUs, repack, add bundle or set labels, or route through prep support',
    },
    {
      riskNode: 'Product quality also uncertain',
      whatWasChecked:
        'Visible product defects, packaging defects, carton condition, sample comparison, label evidence, and shipment readiness',
      buyerDecision: 'Combine QC with FBA prep, hold balance, request rework, or re-check',
    },
    {
      riskNode: 'Goods already left China',
      whatWasChecked:
        'Current shipment location, available label files, destination warehouse options, receiving deadline, and remaining correction access',
      buyerDecision: 'Use destination prep, update warehouse instructions, or separate China-side prep from future orders',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Buyer-stage facts: whether goods are still in China, pickup window, shipment-plan status, SKU count, variant risk, and correction access before freight moves.',
    'File evidence: FNSKU files, carton label files, shipment plan, SKU list, packing list, carton count, units per carton, and supplier prep instructions.',
    'Physical evidence: unit labels, carton labels, old barcode coverage, SKU separation, bundle or set labels, carton condition, and staged pickup photos.',
    'China-side workflow judgment about whether the supplier can prove prep, whether hands-on prep is needed, or whether destination prep is the more realistic route.',
  ],
  whatToSend: [
    'FNSKU files, carton label files, shipment plan, SKU list, and listing or variant reference',
    'Product photos, packaging photos, unit count, carton count, units per carton, and packing method',
    'Bundle, set, multipack, poly bag, expiration date, lot label, insert, or special prep requirements',
    'Supplier prep photos, label photos, carton photos, and any correction evidence already received',
    'Factory or warehouse address, supplier contact, forwarder contact, pickup date, and shipment deadline',
    'The decision you need: ship direct, inspect only, prep in China, destination prep, relabel, repack, or delay pickup',
  ],
  redFlags: [
    'Supplier says FBA prep is done but shows only one close-up label photo',
    'FNSKU files, carton labels, shipment plan, or SKU list changed after packing started',
    'Similar color, size, bundle, version, or multipack SKUs are packed together without carton-level notes',
    'Old retail barcodes, factory barcodes, or wrong labels are still visible on units',
    'Carton count, units per carton, or shipment-plan details do not match the packing list',
    'Supplier has not handled this category or cannot explain the prep work for this exact order',
    'Forwarder pickup is scheduled before label, carton, and SKU evidence is available',
    'Product quality or packaging defects are still unclear, but the buyer is only checking labels',
  ],
  scopeLimits: [
    'FBA prep in China reduces visible label, packing, SKU separation, and pickup-readiness risk, but it does not guarantee Amazon receiving approval',
    'It does not replace Seller Central instructions, listing approval, marketplace compliance, product safety testing, customs advice, or legal review',
    'It does not guarantee hidden carton contents unless opening and unit-level checking are included in the scope',
    'It does not control Amazon receiving speed, inventory placement, stranded inventory decisions, account health, or fulfillment-center processing',
    'It works best when the seller provides final files before inspection; late label or shipment-plan changes can require re-checking',
    'If product quality is uncertain, FBA prep should not be treated as a substitute for QC inspection',
  ],
  relatedLinks: [
    {
      href: '/amazon-fba-prep-china',
      label: 'Amazon FBA Prep China',
      note: 'Use when the seller needs China-side prep support before pickup or shipment release.',
    },
    {
      href: '/amazon-fba-prep-china-fnsku-carton-labels',
      label: 'Amazon FBA Prep Checklist',
      note: 'Use when the next question is exactly what to check across labels, cartons, and SKUs.',
    },
    {
      href: '/fnsku-label-mistakes-before-goods-leave-china',
      label: 'FNSKU Label Mistakes',
      note: 'Use when the main risk is wrong FNSKU files, old barcodes, or label placement.',
    },
    {
      href: '/before-amazon-fba-shipment-china',
      label: 'Before Amazon FBA Shipment',
      note: 'Use when the buyer decision is whether Amazon-bound goods should leave China now.',
    },
    {
      href: '/fnsku-label-check-china',
      label: 'FNSKU Label Check China',
      note: 'Use when a focused visible label check is enough and broader prep is not needed.',
    },
    {
      href: '/sample-inspection-report-china',
      label: 'Sample Inspection Report',
      note: 'Preview how photo evidence and decision notes can be presented.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Do Amazon sellers need FBA prep in China?',
      answer:
        'Not always. Sellers may not need separate China-side FBA prep if the supplier can prove final labels, carton labels, SKU separation, packing details, and shipment-plan match. They should consider prep in China when label, carton, SKU, bundle, or pickup evidence is weak.',
    },
    {
      question: 'When is FBA prep in China worth it?',
      answer:
        'It is worth considering when goods are still in China and FNSKU labels, carton labels, old barcode coverage, SKU separation, bundle labels, set labels, poly bag warnings, or packing corrections need physical handling before pickup.',
    },
    {
      question: 'Can my supplier handle FBA prep without a prep company?',
      answer:
        'Sometimes. Supplier prep can work when the supplier receives final files early, understands the exact order, keeps SKUs separated, and provides strong carton-level evidence. If evidence is weak, use a focused check or prep support before pickup.',
    },
    {
      question: 'Is China-side prep better than a US prep warehouse?',
      answer:
        'China-side prep is useful when correction can happen before freight moves. A US or destination prep warehouse may fit better when goods are already overseas, when local marketplace handling is needed, or when the seller wants destination-side control.',
    },
    {
      question: 'Does FBA prep in China guarantee Amazon receiving?',
      answer:
        'No. China-side prep reduces visible prep risk, but Amazon receiving, listing compliance, marketplace rules, fulfillment-center processing, and seller account decisions remain separate.',
    },
    {
      question: 'What should I send to decide whether I need FBA prep?',
      answer:
        'Send FNSKU files, carton labels, shipment plan, SKU list, packing list, product photos, carton count, units per carton, supplier prep photos, pickup deadline, and the decision you need after the check.',
    },
  ] satisfies FaqItem[],
}

export function makeAmazonSellersFbaPrepChinaArticleMetadata(): Metadata {
  const canonicalPath = amazonSellersFbaPrepChinaArticle.href

  return {
    title: amazonSellersFbaPrepChinaArticle.metaTitle,
    description: amazonSellersFbaPrepChinaArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: amazonSellersFbaPrepChinaArticle.metaTitle,
      description: amazonSellersFbaPrepChinaArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        ...getArticleOpenGraphImages(amazonSellersFbaPrepChinaArticle),
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: amazonSellersFbaPrepChinaArticle.metaTitle,
      description: amazonSellersFbaPrepChinaArticle.metaDescription,
      images: [amazonSellersFbaPrepChinaArticle.image.src],
    },
  }
}

export function makeAmazonSellersFbaPrepChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(amazonSellersFbaPrepChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Amazon sellers FBA prep China decision checklist',
      itemListElement: amazonSellersFbaPrepChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(amazonSellersFbaPrepChinaArticle.faqs),
  ]
}
