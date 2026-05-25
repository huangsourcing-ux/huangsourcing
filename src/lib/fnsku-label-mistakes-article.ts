import type { Metadata } from 'next'

import { fnskuLabelMistakesArticleHref } from '@/lib/site-links'
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

export const fnskuLabelMistakesArticle = {
  href: fnskuLabelMistakesArticleHref,
  title: 'FNSKU Label Mistakes: What to Check Before Goods Leave China',
  metaTitle: 'FNSKU Label Mistakes: What to Check Before Goods Leave China',
  metaDescription:
    'Use this FNSKU label check China guide before shipment to confirm SKU match, barcode readability, label placement, old barcode coverage, and pickup decisions.',
  h1: 'FNSKU Label Mistakes: What to Check Before Goods Leave China',
  eyebrow: 'FNSKU label check China',
  image: {
    alt: 'Agent Huang checking FNSKU labels on Amazon FBA goods before they leave China',
    height: 900,
    src: '/images/fnsku-label-mistakes-before-goods-leave-china.webp',
    width: 1600,
  },
  intro:
    'An FNSKU label mistake is easy to miss when the supplier sends one clean close-up photo. It becomes expensive after goods leave China, when relabeling means prep fees, receiving delays, stranded inventory risk, or a shipment that has to be rerouted before Amazon can receive it.',
  answerSummary:
    'A practical FNSKU label check in China should answer one buyer decision: approve pickup, relabel affected units, cover conflicting retail barcodes, reopen cartons for evidence, route through FBA prep, or delay shipment until the label risk is corrected.',
  primaryCta: {
    href: '/amazon-fba-prep-china',
    label: 'FBA Prep',
  },
  secondaryCta: {
    href: '#what-to-check',
    label: 'See label checks',
  },
  whatsappMessage: `Hi Agent Huang,

I need FBA prep help for an FNSKU label issue in China.

Product:
SKUs:
Units / cartons:
Factory or warehouse location:
FNSKU files ready?:
Carton labels ready?:
Pickup deadline:
Main label concern:
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
    'FNSKU file version, SKU name, ASIN or listing reference, and product variant match',
    'Barcode readability with a scanner and clear photo evidence of the scanned unit',
    'Label placement on a flat surface, not over a seam, curve, shrink edge, or opening flap',
    'Old UPC, EAN, retail barcode, factory barcode, or wrong FNSKU coverage when required',
    'SKU separation by color, size, bundle, multipack, product version, or kit contents',
    'Carton-level evidence showing which units were labeled and which cartons are ready',
    'Correction evidence after relabeling, not only a message saying the labels were fixed',
    'Pickup decision notes: approve, relabel, reopen cartons, send to prep warehouse, or delay',
  ],
  sections: [
    {
      id: 'why-before-shipment',
      title: 'Why FNSKU label mistakes should be checked before goods leave China',
      paragraphs: [
        'FNSKU label errors are usually visible before shipment. The problem is that buyers often see only one sample label photo, while the real risk sits across many units, similar variants, sealed cartons, or labels printed from an older file.',
        'Checking before pickup keeps the correction close to the goods. The supplier or prep team can relabel units, cover old barcodes, separate affected SKUs, or reopen cartons while the goods are still accessible in China.',
      ],
      bullets: [
        'Approve pickup only when FNSKU labels match the final SKU list and shipment plan',
        'Hold shipment if the supplier cannot show label evidence by SKU group and carton',
        'Relabel before freight moves when wrong files or old barcodes are found',
        'Use FBA prep support when the supplier has packed goods but label evidence is weak',
      ],
    },
    {
      id: 'what-to-check',
      title: 'What to check during an FNSKU label check in China',
      paragraphs: [
        'A useful FNSKU label check China process is not just asking whether labels were printed. The check should connect the label file, the physical unit, the SKU group, the carton, and the pickup decision.',
        'Agent Huang looks for label evidence in context: which product was labeled, which barcode was scanned, whether conflicting barcodes are covered, and whether similar SKUs were kept separate before cartons leave the supplier or prep warehouse.',
      ],
      bullets: [
        'FNSKU match: final label file, SKU, ASIN or listing reference, product color, size, version, bundle, and quantity',
        'Barcode readability: scanner result, print quality, contrast, label damage, wrinkles, and barcode orientation',
        'Placement risk: curved surfaces, edges, seams, shrink-wrap glare, opening flaps, corners, or labels likely to peel',
        'Conflicting barcode risk: uncovered UPC, EAN, retail barcode, factory barcode, wrong FNSKU, or duplicate label',
        'SKU separation: similar variants, mixed units, kit components, multipacks, cartons with more than one SKU, and carton-level notes',
        'Correction proof: before and after photos, affected quantity, relabeled cartons, and whether pickup should wait for re-check',
      ],
    },
    {
      id: 'field-notes',
      title: 'Agent Huang field notes from FNSKU label checks',
      paragraphs: [
        'The most common FNSKU problem is not a dramatic missing label. It is a quiet mismatch: a blue item with the white item FNSKU, a label printed from last week\'s file, a retail barcode left uncovered, or one variant mixed into a carton after labeling.',
        'Supplier photos can be technically true and still incomplete. One good-looking FNSKU photo does not prove that every SKU group, carton, or relabeled batch is correct.',
      ],
      bullets: [
        'Ask for label evidence by SKU group, not one generic label photo',
        'Treat similar colors, sizes, bundles, and versions as separate risk nodes',
        'Check old retail barcodes before cartons are sealed or handed to the forwarder',
        'Use correction photos tied to quantity and cartons, not only a supplier chat message',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Wrong FNSKU file',
      whatWasChecked:
        'Label file version, SKU list, ASIN or listing reference, variant details, and whether the printed label matches the physical product',
      buyerDecision: 'Approve labels, stop printing, relabel affected units, or delay pickup',
    },
    {
      riskNode: 'Unreadable barcode',
      whatWasChecked:
        'Scanner result, print contrast, label wrinkles, barcode damage, shrink-wrap glare, and photo evidence after scanning',
      buyerDecision: 'Approve, reprint labels, relabel damaged units, or re-check after correction',
    },
    {
      riskNode: 'Bad label placement',
      whatWasChecked:
        'Flatness, seam and edge risk, curved packaging, carton or unit opening points, peel risk, and visibility after packing',
      buyerDecision: 'Keep placement, move labels, relabel only affected units, or require prep warehouse handling',
    },
    {
      riskNode: 'Conflicting barcode',
      whatWasChecked:
        'UPC, EAN, retail barcode, factory barcode, wrong FNSKU, duplicate label, and whether old barcodes are fully covered',
      buyerDecision: 'Cover conflicting barcodes, relabel units, reopen cartons, or pause FBA shipment',
    },
    {
      riskNode: 'Mixed SKU evidence',
      whatWasChecked:
        'SKU separation, similar variants, carton contents, packing list, units per carton, and whether correction photos match the affected cartons',
      buyerDecision: 'Approve pickup, separate SKUs, create carton-level notes, repack, or route through FBA prep',
    },
  ] satisfies DecisionRow[],
  whatToSend: [
    'Final FNSKU label files, SKU list, ASIN or listing reference, and product variant details',
    'Product photos, packaging photos, quantity per SKU, carton count, and units per carton',
    'Carton label files, shipment plan, packing list, and forwarder pickup deadline',
    'Any old UPC, EAN, retail barcode, factory barcode, or wrong label risk you already noticed',
    'Bundle, set, multipack, expiration date, lot number, insert, or special prep requirements',
    'The decision you need after the check: approve pickup, relabel, reopen cartons, prep warehouse, or delay',
  ],
  redFlags: [
    'Supplier sends one close-up FNSKU photo but no SKU group or carton context',
    'The FNSKU file changed after printing or after cartons were sealed',
    'Similar color, size, version, bundle, or multipack SKUs are stored together',
    'Retail barcodes, factory barcodes, or older FNSKU labels are still visible on the unit',
    'Labels are applied over seams, curved areas, shrink-wrap wrinkles, or carton edges',
    'The supplier says labels can be fixed after pickup or at the forwarder without a clear plan',
    'Packing list, carton count, or SKU quantities do not match the label files or shipment plan',
  ],
  scopeLimits: [
    'An FNSKU label check in China reduces visible label risk, but it does not guarantee Amazon receiving approval',
    'It does not replace listing approval, marketplace compliance, product safety testing, or legal review',
    'It does not confirm hidden carton contents unless carton opening and unit-level checks are included in the scope',
    'It does not guarantee that every Amazon warehouse scanner or receiving system will behave the same way',
    'It does not control Amazon receiving speed, inventory placement, stranded inventory decisions, or seller account rules',
    'It works best when the buyer provides final label files, SKU list, carton details, and a clear pickup deadline before the check',
  ],
  relatedLinks: [
    {
      href: '/amazon-fba-prep-china',
      label: 'Amazon FBA Prep China',
      note: 'Use when labels, cartons, SKU separation, and prep handling need China-side support before shipment.',
    },
    {
      href: '/fnsku-label-check-china',
      label: 'FNSKU Label Check China',
      note: 'Use when the main risk is whether FNSKU labels, placement, and old barcode coverage are correct.',
    },
    {
      href: '/amazon-fba-prep-china-fnsku-carton-labels',
      label: 'Amazon FBA prep checklist',
      note: 'Use when the buyer also needs carton labels, SKU separation, and shipment-plan readiness checked.',
    },
    {
      href: '/before-amazon-fba-shipment-china',
      label: 'Before Amazon FBA Shipment',
      note: 'Use when the buyer decision is whether Amazon-bound goods should leave China now.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What is an FNSKU label check in China?',
      answer:
        'An FNSKU label check in China confirms whether Amazon FBA unit labels match the correct SKU, scan properly, are placed correctly, cover conflicting barcodes when required, and have enough evidence before goods leave China.',
    },
    {
      question: 'What FNSKU label mistakes should buyers check before shipment?',
      answer:
        'Buyers should check wrong label files, old FNSKU labels, uncovered UPC or EAN barcodes, unreadable barcodes, poor placement, mixed SKU cartons, and missing correction evidence after relabeling.',
    },
    {
      question: 'Can FNSKU labels be fixed before pickup in China?',
      answer:
        'Yes. If goods are still at the supplier or prep warehouse, affected units can often be relabeled, old barcodes can be covered, cartons can be reopened, and corrected evidence can be checked before pickup release.',
    },
    {
      question: 'Is one supplier photo enough to approve FNSKU labels?',
      answer:
        'Usually no. One close-up label photo does not prove every SKU group, carton, or relabeled batch is correct. Ask for SKU-level and carton-level evidence when the shipment is Amazon-bound.',
    },
    {
      question: 'Does an FNSKU label check guarantee Amazon receiving?',
      answer:
        'No. A China-side FNSKU label check reduces visible label and packing risk, but Amazon receiving, listing compliance, warehouse processing, and seller account decisions remain separate.',
    },
  ] satisfies FaqItem[],
}

export function makeFnskuLabelMistakesArticleMetadata(): Metadata {
  const canonicalPath = fnskuLabelMistakesArticle.href

  return {
    title: fnskuLabelMistakesArticle.metaTitle,
    description: fnskuLabelMistakesArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: fnskuLabelMistakesArticle.metaTitle,
      description: fnskuLabelMistakesArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        {
          url: fnskuLabelMistakesArticle.image.src,
          width: fnskuLabelMistakesArticle.image.width,
          height: fnskuLabelMistakesArticle.image.height,
          alt: fnskuLabelMistakesArticle.image.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fnskuLabelMistakesArticle.metaTitle,
      description: fnskuLabelMistakesArticle.metaDescription,
      images: [fnskuLabelMistakesArticle.image.src],
    },
  }
}

export function makeFnskuLabelMistakesArticleJsonLd() {
  const pageUrl = getAbsoluteUrl(fnskuLabelMistakesArticle.href)

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: fnskuLabelMistakesArticle.title,
      description: fnskuLabelMistakesArticle.metaDescription,
      url: pageUrl,
      inLanguage: 'en',
      image: getAbsoluteUrl(fnskuLabelMistakesArticle.image.src),
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
      name: 'FNSKU label check China checklist',
      itemListElement: fnskuLabelMistakesArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(fnskuLabelMistakesArticle.faqs),
  ]
}
