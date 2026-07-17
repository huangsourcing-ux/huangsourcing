import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  cpscEfilingChinaImportsArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
  waterBeadToyCpscChecklistArticleHref,
} from '@/lib/site-links'

type ArticleSection = { bullets?: string[]; id: string; paragraphs: string[]; title: string }
type CheckGroup = { items: string[]; title: string }
type DecisionRow = { buyerDecision: string; riskNode: string; whatToConfirm: string }
type FaqItem = { answer: string; question: string }
type RelatedLink = { href: string; label: string; note: string }
type SourceNote = { href: string; label: string; note: string }

export const waterBeadToyCpscChecklistArticle = {
  author: 'editorial-team' as const,
  href: waterBeadToyCpscChecklistArticleHref,
  title: 'Water Bead Toy Imports from China: 2026 CPSC Checklist',
  metaTitle: 'Water Bead Toy Imports: 2026 CPSC Checklist',
  metaDescription:
    'Check water bead toy size, acrylamide, warnings, CPC data, test identity, packaging, and cartons before paying or shipping China-sourced orders to the U.S.',
  publishedDate: 'July 18, 2026',
  publishedDateIso: '2026-07-18T09:00:00+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Water Bead Toy Imports from China: 2026 CPSC Checklist',
  eyebrow: '16 CFR 1250.4 - test evidence - pre-shipment release',
  image: {
    alt: 'Neutral illustration of a China-side water bead toy inspection with generic sample bags, warning artwork, test files, and a bead measurement',
    height: 900,
    src: '/images/water-bead-toy-cpsc-checklist.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/water-bead-toy-cpsc-checklist.webp', width: 1600 },
    { height: 1200, src: '/images/water-bead-toy-cpsc-checklist-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/water-bead-toy-cpsc-checklist-1x1.webp', width: 1200 },
  ],
  intro:
    'For U.S.-bound water bead toys manufactured after March 12, 2026, final payment and pickup should wait until the importer-approved test plan, size-limit and acrylamide evidence, required warnings, Children’s Product Certificate data, and physical shipment all identify the same product and production version.',
  answerSummary:
    'Use a two-part release gate. First, a CPSC-accepted laboratory and qualified compliance adviser should decide scope, sampling, testing, warnings, and certification. Then a China-side check can compare those approved references with the actual dry beads, contained-bead toys, retail packs, labels, cartons, lot records, and corrections. Hold release when the specialist decision or shipment match is unclear.',
  primaryCta: { label: 'Check Water Bead Orders Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side water bead toy evidence check before shipment.

Product / SKU count:
Water bead format and intended use:
U.S. importer or marketplace:
Supplier / factory location:
Approved warning and packaging files:
Test reports and CPC draft:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#rule-scope', label: 'Scope and identity' },
    { href: '#test-evidence', label: 'Test evidence' },
    { href: '#warnings-packout', label: 'Warnings and pack-out' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Confirm whether the exact product is a water bead toy or a toy containing water beads within 16 CFR 1250.4; do not infer scope from a supplier listing title',
    'Record the dry bead dimensions, composition, color, format, quantity, intended use, age grade, SKU, lot, and whether beads are loose, contained, or supplied inside another toy',
    'Obtain CPSC-accepted third-party laboratory evidence for the applicable size-limit, acrylamide, and other children’s-product requirements',
    'Tie the test report and CPC data to the same manufacturer, product, bead formulation, dimensions, lot or production period, and packaging version',
    'Compare the importer-approved warning with the final toy, retail package, bead container, hangtag, sticker, and multi-pack configuration as applicable',
    'Open sampled cartons when scoped to detect mixed bead formats, old warnings, missing labels, unapproved packs, or substituted lots',
    'Separate visual measurements and document matching from laboratory conclusions; an inspector cannot reproduce or certify the mandatory tests',
    'Hold payment or pickup until affected stock is controlled, corrections follow approved instructions, and re-check evidence is complete',
  ],
  checkGroups: [
    {
      title: 'Product and rule scope',
      items: [
        'Toy type, intended use, age grade, dry-bead dimensions, material, loose or contained configuration, SKU, lot, and sales presentation',
        'Qualified decision on whether 16 CFR 1250.4, other toy requirements, CPC certification, and CPSC eFiling apply',
      ],
    },
    {
      title: 'Laboratory traceability',
      items: [
        'CPSC-accepted lab, test method, sample identity, report date, bead formulation, size category, result, and applicant or manufacturer details',
        'Change control for polymer, colorant, supplier, dry size, toy enclosure, container, warning, and production location',
      ],
    },
    {
      title: 'Warnings and packaging',
      items: [
        'Approved warning content, location, contrast, legibility, durability, package or container placement, and individual-label needs',
        'Physical retail pack, bead container, contained-bead toy, hangtag or sticker, instructions, barcode, and carton-version match',
      ],
    },
    {
      title: 'Bulk and release evidence',
      items: [
        'Opened-carton views, sampled SKU and lot coverage, mixed-version checks, packing-list traceability, and correction records',
        'Affected quantity, segregation, rework instruction, re-check result, importer approval, payment hold, and pickup status',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why water bead evidence is a current China sourcing issue',
      paragraphs: [
        'CPSC’s mandatory water bead toy standard took effect on March 12, 2026 for products manufactured after that date. The agency’s business guidance identifies three rule categories: an expansion-size limit, an extractable-acrylamide limit, and warnings for covered toys, packaging, containers, or individual products in specified configurations.',
        'The risk is not only historical. In May 2026, the UK Office for Product Safety and Standards published a recall for 110,000 clear water beads sold through Shein, identified China as the country of origin, and later updated the notice to record an end-user recall. U.S. and UK requirements differ, but the recent record shows why intended use, product identity, physical pack-out, and destination-specific evidence must stay connected.',
      ],
      bullets: [
        'A generic supplier statement such as non-toxic or safety tested does not establish compliance with the applicable CPSC tests',
        'A passing report for one bead formula or dimension may not cover a changed polymer, color, supplier, size, lot, or toy enclosure',
        'Correct warning artwork in a PDF does not show that every required product, package, or container has the approved version',
        'Correction leverage is strongest while relabeling, segregation, testing, rework, or cancellation can still happen before pickup',
      ],
    },
    {
      id: 'rule-scope',
      title: 'Which water bead product and production version are being released?',
      paragraphs: [
        'Start with classification and identity, not a checklist detached from the product. CPSC defines water beads broadly as liquid-absorbing polymer shapes that expand when soaked, but the 2026 rule applies to covered water bead toys and toys containing water beads. CPSC also notes that some water bead products not marketed as children’s toys fall outside this rule.',
        'The importer, CPSC-accepted laboratory, compliance adviser, or counsel should decide the applicable rule set. The China-side evidence task is narrower: document what the supplier made and packed, then compare it with the product, test sample, CPC, warning, artwork, and lot the qualified parties approved.',
      ],
      bullets: [
        'Record exact product name, SKU, age grade, intended use, sales listing, package copy, and whether a child can access the beads',
        'Record dry-bead dimensions, formulation or material reference, color, count, supplier, production date, and lot code',
        'Identify whether beads are loose, inside a container, sealed inside another toy, sold in a multi-pack, or supplied without packaging',
        'Reconfirm scope after changes to the bead, supplier, enclosure, packaging, warning, instructions, or marketing claim',
      ],
    },
    {
      id: 'test-evidence',
      title: 'What should buyers verify in the test and certificate file?',
      paragraphs: [
        'CPSC guidance says covered dry beads that fit entirely within the small-parts cylinder must meet a specified fully expanded size test, and all covered water beads must stay within the extractable-acrylamide limit. These are controlled laboratory determinations, not visual inspection claims.',
        'Ask the qualified laboratory or adviser to confirm the method, sample plan, results, and whether the evidence covers every variation. Then compare report identifiers with the order: manufacturer, applicant, product name, bead dimensions, formulation, color or family logic, test dates, production version, and CPC citation should not drift across files.',
      ],
      bullets: [
        'Verify that the laboratory appears in CPSC’s accepted-laboratory system for the relevant scope when third-party testing is required',
        'Keep the tested sample or documented reference tied to the final SKU, lot, artwork, and packaging version',
        'Escalate supplier, polymer, colorant, dry-size, production-site, or enclosure changes before release',
        'Do not use a caliper photo, soak demonstration, supplier certificate, or generic chemical report as a substitute for the required test evidence',
      ],
    },
    {
      id: 'warnings-packout',
      title: 'How should warnings and physical pack-out be checked?',
      paragraphs: [
        'Use the importer-approved warning files as the reference, then inspect the complete physical sales configuration. Depending on the covered product, CPSC guidance addresses warnings on the water bead toy, packaging, bead container, contained-bead toy, packaging for that toy, or an individual hangtag or sticker when packaging is absent.',
        'Photograph each required surface in context, not only a detached label. Open cartons across the agreed sample to look for old artwork, mixed lots, missing containers, hidden warnings, unreadable print, changed bead formats, and rework that did not reach all affected units.',
      ],
      bullets: [
        'Compare warning wording, layout, placement, visibility, contrast, and package or product coverage with the approved reference',
        'Trace every inspected pack to SKU, lot, carton, packing-list line, production record, and test or CPC file',
        'Segregate old and corrected stock and record the affected quantity before rework begins',
        'Repeat the agreed inspection after correction; a photo of one corrected unit does not establish that the bulk order was corrected',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Scope and identity are confirmed',
      whatToConfirm: 'Qualified parties map the covered toy, intended use, bead format, age grade, applicable tests, warnings, certificate, and filing duties',
      buyerDecision: 'Continue the check, seek specialist clarification, change the product plan, or hold release.',
    },
    {
      riskNode: 'Test evidence matches the order',
      whatToConfirm: 'Lab, sample, manufacturer, bead formulation, dimensions, result, production version, and CPC data align with each SKU and lot',
      buyerDecision: 'Release after qualified approval, obtain corrected evidence, test the changed version, or stop the order.',
    },
    {
      riskNode: 'Warnings match physical stock',
      whatToConfirm: 'Every applicable toy, package, container, hangtag, sticker, and multi-pack uses the approved warning and version',
      buyerDecision: 'Approve, relabel, segregate old stock, expand inspection, or hold pickup.',
    },
    {
      riskNode: 'Corrections are controlled',
      whatToConfirm: 'Affected quantities are identified, reworked to approved instructions, documented by carton or lot, and re-checked',
      buyerDecision: 'Release, hold affected cartons, re-inspect, or delay final payment and pickup.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official CPSC 2026 water bead rule announcement, business guidance, 16 CFR 1250.4, certification guidance, and the 2023 Buffalo Games recall checked July 18, 2026 Beijing time.',
    'The UK OPSS 2026 recall of 110,000 China-origin water beads and independent Associated Press coverage used as current incident and public-attention context, not as U.S. legal guidance.',
    'Buyer-approved product specifications, intended-use decision, dry-bead details, packaging and warning artwork, test reports, CPC draft, specialist instructions, and change records.',
    'Physical beads, contained-bead toy, retail packaging, container, warning placement, carton mix, lot records, and correction evidence observed in China.',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Water-Bead-Toys-Business-Guidance',
      label: 'CPSC - Water Bead Toys Business Guidance',
      note: 'Primary business guidance for 16 CFR 1250.4 scope, size-limit, acrylamide, warning, and Children’s Product Certificate requirements.',
    },
    {
      href: 'https://www.cpsc.gov/Newsroom/News-Releases/2026/CPSC%E2%80%99s-New-Federal-Water-Beads-Safety-Standard-Takes-Effect-to-Protect-Children-from-Deadly-Hazard',
      label: 'CPSC - 2026 water bead standard announcement',
      note: 'Official March 12, 2026 announcement confirming the effective date, core requirements, injury context, and rule-scope limitation.',
    },
    {
      href: 'https://www.govinfo.gov/content/pkg/FR-2025-12-12/pdf/2025-22643.pdf',
      label: 'Federal Register - final water bead toy rule',
      note: 'Official final rule adding 16 CFR 1250.4; laboratories and compliance advisers should interpret and apply the product-specific methods.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2023/Buffalo-Games-Recalls-Chuckle-Roar-Ultimate-Water-Beads-Activity-Kits-Due-to-Serious-Ingestion-Choking-and-Obstruction-Hazards-One-Infant-Death-Reported-Sold-Exclusively-at-Target',
      label: 'CPSC - Buffalo Games water bead activity kit recall',
      note: 'Primary public case documenting the 2023 recall, reported incidents, approximate units, importer, country of manufacture, and remedy.',
    },
    {
      href: 'https://www.gov.uk/product-safety-alerts-reports-recalls/product-safety-report-110000-pcs-clear-water-beads-sold-via-shein-2604-0218',
      label: 'UK OPSS - 2026 recall of 110,000 clear water beads',
      note: 'Independent official incident record identifying a China-origin product and a May-June 2026 recall; UK law does not define U.S. compliance.',
    },
    {
      href: 'https://apnews.com/article/dbee5655aa2602d9840334c5afce0c09',
      label: 'Associated Press - retailer action on water beads',
      note: 'Independent background on marketplace attention after safety concerns and the Buffalo Games recall; the CPSC sources remain the rule authority.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'SKU list, intended use, age grade, sales listing, product photos, order quantity, carton count, production date, lot codes, and U.S. sales configuration',
    'Dry-bead dimensions, material or formulation reference, color, count, supplier, and whether beads are loose, contained, or supplied inside another toy',
    'Importer or adviser scope decision, approved warning files, package dielines, container labels, hangtags, stickers, manuals, and revision status',
    'CPSC-accepted laboratory details, test request, sample identity, report, CPC draft, applicable-rule citations, and change assessment',
    'Packing list, carton marks, production records, approved reference sample, correction rules, affected-quantity control, and re-check instructions',
    'Payment deadline, pickup date, factory contact, importer release authority, and clear rules for which mismatches block release',
  ],
  redFlags: [
    'The supplier markets the same beads as a toy, craft, sensory aid, decoration, or agricultural product without a qualified U.S. scope decision',
    'The test report cannot be tied to the exact dry size, polymer or formulation, color logic, manufacturer, production version, SKU, or lot',
    'A supplier uses an in-house soak test, caliper photo, non-toxic claim, or generic chemical sheet as the main compliance evidence',
    'Warnings exist in artwork but are missing, hidden, unreadable, or inconsistent across the toy, package, container, hangtag, sticker, or multi-pack',
    'Cartons mix old and new warnings, different bead formats, substitute suppliers, unapproved enclosures, or lots without traceability',
    'The factory changes formulation, colorant, size, supplier, production site, enclosure, package, or marketing after testing',
    'The correction plan has no affected quantity, segregation record, carton map, approved instruction, or repeat check',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible beads, products, packages, warnings, cartons, lot records, supplier files, and correction evidence with buyer-approved references in China',
    'Huang Sourcing does not classify a product under CPSC rules, perform mandatory size or acrylamide testing, issue a CPC, authenticate reports, or provide legal advice',
    'Visual inspection and simple measurements cannot prove the 16 CFR 1250.4 expansion-size limit, extractable-acrylamide limit, warning compliance, product safety, or customs acceptance',
    'Sampling cannot guarantee every unit outside the agreed scope, and sealed cartons, mixed lots, weak traceability, or restricted access reduce confidence',
    'The importer, CPSC-accepted laboratory, compliance adviser, broker, marketplace team, or counsel remains responsible for product-specific decisions',
    'CPSC rules, laboratory scopes, certificate filing, and marketplace requirements can change; reconfirm time-sensitive instructions before production, payment, filing, and shipment',
  ],
  relatedLinks: [
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'CPSC eFiling for China imports',
      note: 'Connect the product-specific CPC data to the July 2026 import filing and broker handoff.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Control artwork revisions, barcode, carton, correction, and final-payment evidence across the order.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control plan for China manufacturing',
      note: 'Build test references, approved samples, inspections, and shipment hold points into production.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Define the photos, lot traceability, measurements, mismatches, and scope limits the release report should show.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related supplier, inspection, packaging, payment, and pickup decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Does the 2026 CPSC rule cover every water bead product?',
      answer: 'No. CPSC states that some water bead products not marketed as children’s toys fall outside this rule. The exact intended use, presentation, product configuration, and other applicable rules need qualified review.',
    },
    {
      question: 'Can a factory soak test prove the size requirement?',
      answer: 'No. A factory demonstration or inspection measurement can support identity checks, but it does not replace the specified method, controlled conditions, sampling, CPSC-accepted laboratory work, or qualified compliance decision.',
    },
    {
      question: 'Should a buyer hold payment for a warning mismatch?',
      answer: 'Escalate the mismatch before release. The importer and qualified adviser should approve the correction, affected scope, documentation, and any need for testing before the order is re-checked.',
    },
    {
      question: 'What if the supplier changes the bead formula or size after testing?',
      answer: 'Pause release and disclose the change to the importer, laboratory, and compliance adviser. They should decide whether the existing evidence still applies or new testing, certification, and warnings are required.',
    },
    {
      question: 'Can Huang Sourcing certify CPSC compliance?',
      answer: 'No. Huang Sourcing can compare China-side physical and document evidence with buyer-approved references. Classification, testing, certification, filing, and legal approval remain with qualified parties.',
    },
  ] satisfies FaqItem[],
}

export function makeWaterBeadToyCpscChecklistArticleMetadata(): Metadata {
  const article = waterBeadToyCpscChecklistArticle
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: article.href },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: article.href,
      siteName: 'Huang Sourcing',
      type: 'article',
      publishedTime: article.publishedDateIso,
      images: getArticleOpenGraphImages(article),
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.image.src],
    },
  }
}

export function makeWaterBeadToyCpscChecklistArticleJsonLd() {
  return [
    makeArticleJsonLd(waterBeadToyCpscChecklistArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Water bead toy pre-shipment release checklist',
      itemListElement: waterBeadToyCpscChecklistArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
