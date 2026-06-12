import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { packagingLabelCheckBeforePaymentArticleHref } from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

type ArticleSection = {
  bullets?: string[]
  id: string
  paragraphs: string[]
  title: string
}

type CheckGroup = {
  items: string[]
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

export const packagingLabelCheckBeforePaymentArticle = {
  href: packagingLabelCheckBeforePaymentArticleHref,
  title: 'Product Packaging and Label Checks Before Final Payment',
  metaTitle: 'Packaging & Label Checks Before Payment',
  metaDescription:
    'Check product packaging, barcodes, unit labels, carton marks, and packing evidence before final payment to decide whether to approve, relabel, repack, or re-inspect.',
  publishedDate: 'June 12, 2026',
  publishedDateIso: '2026-06-12T09:00:00-04:00',
  h1: 'Product Packaging and Label Checks Before Final Payment',
  eyebrow: 'Product packaging and label checks before final payment',
  image: {
    alt: 'Agent Huang comparing packaging specifications with unit labels and export cartons before final payment',
    height: 900,
    src: '/images/packaging-label-check-before-payment.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/packaging-label-check-before-payment.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/packaging-label-check-before-payment-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/packaging-label-check-before-payment-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Final payment should wait until packaging and label evidence matches the approved order. A good-looking product can still become unsellable, delayed, or expensive to correct when the retail box, barcode, warning label, SKU identity, carton mark, or packing method is wrong.',
  answerSummary:
    'Before releasing the balance, compare approved packaging and label files with physical units and cartons, check placement and readability across sampled packs, confirm SKU separation and carton records, and hold payment when mismatches still need relabeling, repacking, sorting, or re-inspection.',
  primaryCta: {
    href: '/qc-inspection-china',
    label: 'Check Packaging & Labels',
  },
  secondaryCta: {
    href: '#release-checklist',
    label: 'See Release Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need packaging and label checks before final payment.

Product / SKU count:
Factory location:
Order quantity / cartons:
Packaging and label files:
Final payment deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#supplier-photos', label: 'Supplier photo limits' },
    { href: '#what-to-check', label: 'What to check' },
    { href: '#field-notes', label: 'Field note' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Approved packaging artwork and revision match the physical retail pack',
    'Product name, model, color, size, quantity, and SKU identity are consistent',
    'Barcodes and unit labels are present, readable, correctly placed, and not covered',
    'Warning labels, country-of-origin marks, inserts, and manuals match buyer files',
    'Inner packs and master cartons use the agreed quantity and protection method',
    'Carton marks, shipping marks, dimensions, weights, and carton numbers are consistent',
    'Mixed-SKU cartons are separated and traceable to the packing list',
    'Correction photos and re-check evidence exist before final payment is released',
  ],
  checkGroups: [
    {
      title: 'Retail packaging',
      items: [
        'Artwork revision, color, finish, print position, product image, and visible damage',
        'Box, bag, tray, insert, seal, accessory position, and agreed protective materials',
      ],
    },
    {
      title: 'Unit labels',
      items: [
        'Product label, model, variation, barcode, warning, origin mark, and placement',
        'Readability, adhesion, wrinkles, overlap, orientation, and packaging-surface fit',
      ],
    },
    {
      title: 'Cartons and packing',
      items: [
        'Units per carton, inner packs, dividers, void fill, carton closure, and protection',
        'Carton marks, shipping marks, gross and net weight, dimensions, and numbering',
      ],
    },
    {
      title: 'Release evidence',
      items: [
        'Wide carton photos, opened-carton views, label close-ups, and sampled SKU coverage',
        'Packing list match, correction record, affected stock separation, and re-check result',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'supplier-photos',
      title: 'Should I release final payment from supplier packaging photos?',
      paragraphs: [
        'Supplier photos alone are not enough when they show only one correct box or label. Before final payment, the buyer needs evidence that approved artwork, unit labels, carton marks, packing quantities, and SKU separation are consistent across the physical order, while correction is still practical in China.',
        'Ask for wide views that connect units to opened cartons, close-ups that show label placement, and records that connect carton numbers to the packing list. A polished close-up can confirm one example; it cannot show whether other cartons use an older label file or mixed product version.',
      ],
      bullets: [
        'Hold payment when photos cannot connect the checked unit to the bulk order',
        'Request more evidence when only front-facing retail boxes are shown',
        'Require correction and re-check when artwork or label revisions are mixed',
        'Approve only the points supported by the agreed sampling and photo scope',
      ],
    },
    {
      id: 'what-to-check',
      title: 'What packaging and labels should be checked before final payment?',
      paragraphs: [
        'Check the complete packing chain: product identity, retail packaging, inserts, unit labels, inner packs, master cartons, and shipment marks. Each physical item should be compared with the buyer-approved file or order requirement, then connected to the correct SKU, carton count, and packing-list record before payment release.',
        'Packaging checks should cover both presentation and protection. Label checks should cover both content and application. A correct barcode file is not enough if the wrong label was applied, the print is unreadable, the placement crosses an opening edge, or one SKU carries another SKU label.',
      ],
      bullets: [
        'Compare current physical packs with the final approved artwork, not an early quotation image',
        'Check label content, dimensions, print quality, position, adhesion, and scan result when scoped',
        'Open sampled cartons to confirm units per carton, SKU identity, and internal protection',
        'Match carton marks and carton numbers to the packing list and shipment plan',
      ],
    },
    {
      id: 'barcode-evidence',
      title: 'How should barcode and label evidence be verified?',
      paragraphs: [
        'Barcode and label evidence should connect the buyer file to the printed label, the applied unit, the correct SKU, and the packed carton. The practical release decision depends on that chain, not on a scanner beep or a detached label sample shown without product and carton context.',
        'Where scanning is included, record which barcode type and sampled units were checked. Also inspect quiet zones, contrast, wrinkles, curved surfaces, seams, openings, and transparent wrapping that may affect readability. Marketplace acceptance, customs treatment, and regulated labeling still require separate compliance review.',
      ],
      bullets: [
        'Use buyer-supplied final files as the comparison source',
        'Photograph labels in place on the product or packaging',
        'Trace sampled labels back to SKU and carton identity',
        'Separate scanability evidence from legal or marketplace compliance claims',
      ],
    },
    {
      id: 'field-notes',
      title: 'Agent Huang field note: mixed label revisions inside packed cartons',
      paragraphs: [
        'A recurring pre-payment pattern is that the supplier sends one close-up of a correct retail label while packed cartons contain mixed artwork revisions. The buyer-side check is to compare the approved label file, unit packaging, inner pack, and carton sample across opened cartons, then trace each SKU to the packing list.',
        'When versions cannot be reconciled, the practical decision is to hold final payment, separate affected stock, relabel, and re-check before pickup. This pattern does not prove every unit is wrong, but it reveals version-control risk before the buyer loses payment leverage or the goods leave supplier control.',
      ],
      bullets: [
        'Treat mixed revisions as a traceability problem, not only a cosmetic issue',
        'Keep corrected and uncorrected stock physically separated',
        'Request updated carton-level evidence after relabeling or repacking',
        'Re-inspect when the correction affects many cartons or several SKUs',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Packaging file matches',
      whatWasChecked:
        'Approved artwork revision, physical retail pack, print placement, finish, inserts, seals, and visible packaging condition',
      buyerDecision: 'Approve packaging point or request targeted correction evidence',
    },
    {
      riskNode: 'Label identity matches',
      whatWasChecked:
        'Product name, model, variation, barcode, warning label, origin mark, placement, adhesion, and sampled readability',
      buyerDecision: 'Approve labels, relabel affected stock, or separate the wrong SKU',
    },
    {
      riskNode: 'Carton packing matches',
      whatWasChecked:
        'Units per carton, inner pack, SKU separation, protection, carton closure, carton mark, dimensions, and packing-list connection',
      buyerDecision: 'Approve packing, repack cartons, correct marks, or update records',
    },
    {
      riskNode: 'Mismatch is isolated',
      whatWasChecked:
        'Affected samples, carton locations, revision pattern, correction method, segregated stock, and supplier correction photos',
      buyerDecision: 'Hold the affected portion, require sorting, or accept after scoped re-check',
    },
    {
      riskNode: 'Evidence is incomplete',
      whatWasChecked:
        'Missing approved files, limited carton access, unclear SKU coverage, inconsistent packing list, or unverified correction status',
      buyerDecision: 'Hold final payment and expand evidence before pickup or release',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Buyer-approved packaging artwork, product specification, barcode and label files, warning-label requirements, inserts, manuals, and approved sample notes.',
    'Physical evidence from retail packs, applied unit labels, inner packs, opened cartons, carton marks, packing quantities, and shipment records.',
    'Buyer-stage facts including final payment timing, supplier correction access, pickup schedule, SKU count, carton count, and whether rework can still happen in China.',
    'China-side inspection workflow connecting visible mismatches to sorting, relabeling, repacking, correction evidence, re-inspection, or payment-hold decisions.',
  ],
  whatToSend: [
    'Final approved packaging artwork with clear revision or approval status',
    'Product specification, SKU list, color and size variations, and approved sample notes',
    'Unit label, barcode, warning label, country-of-origin mark, and placement files',
    'Insert, manual, accessory, sealing, inner-pack, and protective-packing requirements',
    'Packing list, units per carton, carton dimensions, weights, carton marks, and shipping marks',
    'Final payment deadline, pickup date, and the result that should trigger correction or re-check',
  ],
  redFlags: [
    'The supplier asks for final payment before packaging or label files are frozen',
    'Evidence shows only one retail box and no opened cartons or bulk context',
    'Barcode or label close-ups cannot be connected to the correct SKU and carton',
    'Carton marks, units per carton, or packing-list records keep changing near pickup',
    'Old and new artwork revisions appear in the same production order',
    'The supplier proposes fixing labels after pickup without a controlled correction plan',
  ],
  scopeLimits: [
    'Packaging and label checks reduce visible release risk but do not guarantee every unit is correct outside the agreed sampling scope',
    'A visual or scan check does not prove legal labeling compliance, customs acceptance, certification, or marketplace approval',
    'The check cannot confirm hidden packaging damage, future adhesive performance, or transport damage that occurs after inspection',
    'Barcode scan evidence applies only to the symbology, device, files, and sampled labels included in the agreed scope',
    'Packaging protection can be reviewed visually, but laboratory transit testing and formal drop, vibration, or compression testing are separate scopes',
    'A report supports the buyer decision; it does not settle contractual disputes or guarantee supplier correction after payment',
  ],
  relatedLinks: [
    {
      href: '/qc-inspection-china',
      label: 'QC Inspection China',
      note: 'Use buyer-side inspection when physical goods and packing need evidence before balance payment.',
    },
    {
      href: '/before-balance-payment-qc-china',
      label: 'Before Balance Payment QC',
      note: 'Use the buyer-stage page when the immediate decision is whether to release final payment.',
    },
    {
      href: '/china-qc-inspection-booking-checklist',
      label: 'China QC Booking Checklist',
      note: 'Prepare product, packaging, label, carton, and decision files before the inspector visits.',
    },
    {
      href: '/before-forwarder-pickup-inspection-china',
      label: 'Before Forwarder Pickup',
      note: 'Check shipment readiness again when corrected cartons are about to leave supplier control.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What packaging should I check before final payment?',
      answer:
        'Check the approved retail pack, inserts, manuals, accessories, seals, inner packs, units per carton, protective materials, master cartons, carton marks, and physical packing condition against the final buyer-approved requirements.',
    },
    {
      question: 'How do I check product labels before paying a China supplier?',
      answer:
        'Provide the final label files and check product identity, model, variation, barcode, warnings, origin marks, print quality, placement, adhesion, readability, and connection to the correct SKU and carton.',
    },
    {
      question: 'Should I hold final payment for a packaging or label mistake?',
      answer:
        'Hold payment when the mismatch affects product identity, saleability, compliance review, customer use, shipment records, or many units and the supplier has not completed a controlled correction with evidence.',
    },
    {
      question: 'Are supplier photos enough to approve packaging and labels?',
      answer:
        'Not when photos show only selected units. Ask for evidence that connects approved files, applied labels, opened cartons, SKU coverage, carton marks, packing quantities, and any completed corrections.',
    },
    {
      question: 'Can Huang Sourcing guarantee barcode or marketplace acceptance?',
      answer:
        'No. Huang Sourcing can check visible label details and agreed scan points, but marketplace acceptance, listing rules, customs treatment, and regulated labeling compliance are separate decisions outside a normal visual inspection.',
    },
  ] satisfies FaqItem[],
}

export function makePackagingLabelCheckBeforePaymentArticleMetadata(): Metadata {
  const canonicalPath = packagingLabelCheckBeforePaymentArticle.href

  return {
    title: packagingLabelCheckBeforePaymentArticle.metaTitle,
    description: packagingLabelCheckBeforePaymentArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: packagingLabelCheckBeforePaymentArticle.metaTitle,
      description: packagingLabelCheckBeforePaymentArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [...getArticleOpenGraphImages(packagingLabelCheckBeforePaymentArticle)],
    },
    twitter: {
      card: 'summary_large_image',
      title: packagingLabelCheckBeforePaymentArticle.metaTitle,
      description: packagingLabelCheckBeforePaymentArticle.metaDescription,
      images: [packagingLabelCheckBeforePaymentArticle.image.src],
    },
  }
}

export function makePackagingLabelCheckBeforePaymentArticleJsonLd() {
  return [
    makeArticleJsonLd(packagingLabelCheckBeforePaymentArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Product packaging and label checks before final payment',
      itemListElement: packagingLabelCheckBeforePaymentArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(packagingLabelCheckBeforePaymentArticle.faqs),
  ]
}
