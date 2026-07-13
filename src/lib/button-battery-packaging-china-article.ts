import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  buttonBatteryPackagingChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  whatToSendBeforeChinaInspectionHref,
} from '@/lib/site-links'

type ArticleSection = { bullets?: string[]; id: string; paragraphs: string[]; title: string }
type CheckGroup = { items: string[]; title: string }
type DecisionRow = { buyerDecision: string; riskNode: string; whatToConfirm: string }
type FaqItem = { answer: string; question: string }
type RelatedLink = { href: string; label: string; note: string }
type SourceNote = { href: string; label: string; note: string }

export const buttonBatteryPackagingChinaArticle = {
  author: 'editorial-team' as const,
  href: buttonBatteryPackagingChinaArticleHref,
  title: 'Button Battery Packaging Checks Before Shipping from China',
  metaTitle: 'Button Battery Packaging Checks from China',
  metaDescription:
    'Check button and coin battery packaging, warnings, compartments, test files, and carton evidence before paying or shipping China-sourced products to the U.S.',
  publishedDate: 'July 14, 2026',
  publishedDateIso: '2026-07-14T09:00:00+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Button Battery Packaging Checks Before Shipping from China',
  eyebrow: 'Reese’s Law - packaging evidence - pre-shipment release',
  image: {
    alt: 'Illustration of a China-side inspector checking generic coin-battery packaging, warning artwork, and a product battery compartment',
    height: 900,
    src: '/images/button-battery-packaging-check-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/button-battery-packaging-check-china.webp', width: 1600 },
    { height: 1200, src: '/images/button-battery-packaging-check-china-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/button-battery-packaging-check-china-1x1.webp', width: 1200 },
  ],
  intro:
    'For U.S.-bound products containing button or coin batteries, final payment and pickup should wait until the battery type, child-resistant packaging, required warnings, battery-compartment construction, test evidence, and packed goods can be traced to the same SKU. A correct sample or detached label does not prove the shipment matches.',
  answerSummary:
    'Use a two-part release gate: qualified specialists confirm which Reese’s Law, 16 CFR part 1263, packaging, labeling, and testing requirements apply; a China-side check then compares those approved references with the physical product, retail pack, loose or included batteries, manuals, cartons, and correction evidence. Hold release when either the legal reference or the shipment match is unclear.',
  primaryCta: { label: 'Check Battery Packaging Before Shipment' },
  secondaryCta: { href: '#efiling-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side button or coin battery packaging check before shipment.

Product / SKU count:
Battery type and how supplied:
U.S. importer or marketplace:
Supplier / factory location:
Approved warning and packaging files:
Test reports:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#efiling-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#data-elements', label: 'Scope map' },
    { href: '#product-identity', label: 'Physical evidence' },
    { href: '#broker-handoff', label: 'Release file' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Identify the exact battery chemistry, size, model, whether it is replaceable, and whether it is sold separately, pre-installed, or packed with the product',
    'Get qualified confirmation of the rules that apply to the battery package, product package, product, instructions, and battery compartment',
    'Compare approved warning artwork with the final retail package, product, manual, and any separately packed battery',
    'Check child-resistant packaging evidence for separately supplied button or coin batteries; do not infer compliance from appearance',
    'Compare battery-compartment fasteners, access method, construction, and production version with the tested product reference',
    'Tie test reports and declarations to the same manufacturer, model, materials, battery configuration, and production version',
    'Open sampled cartons when scoped to detect mixed artwork, old packaging, loose batteries, missing manuals, or changed components',
    'Hold payment or pickup until mismatches are corrected, affected stock is controlled, and re-check evidence is complete',
  ],
  checkGroups: [
    {
      title: 'Battery and product scope',
      items: [
        'Battery chemistry, diameter, height, model, quantity, replaceability, and whether supplied loose, included, or installed',
        'Product SKU, age grade, model, variation, compartment design, manual, and final U.S. listing context',
      ],
    },
    {
      title: 'Packaging and warnings',
      items: [
        'Battery package and product-package construction, seals, approved warning content, placement, size, contrast, and legibility',
        'Product and instruction warnings, destination language, artwork revision, and consistency across every packaging layer',
      ],
    },
    {
      title: 'Construction and test traceability',
      items: [
        'Compartment fastener, tool or simultaneous-action access, use-and-abuse test reference, and production-version match',
        'Test applicant, manufacturer, model, battery type, report date, standard citation, and material or component changes',
      ],
    },
    {
      title: 'Bulk and release evidence',
      items: [
        'Opened-carton views, sampled SKU coverage, loose-battery control, packing-list match, and old-version segregation',
        'Correction instructions, affected quantities, rework records, re-check result, importer approval, and pickup hold status',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why button-battery evidence is a current China sourcing issue',
      paragraphs: [
        'CPSC’s 2026 recall record continues to show button and coin battery risks involving packaging, warnings, and product construction. On May 14, 2026, CPSC recalled China-made LiCB CR2032 batteries because the agency said they were not in child-resistant packaging and lacked required warning labels. Other 2026 notices concern products whose battery compartments or warnings did not meet applicable requirements.',
        'The sourcing decision happens before goods leave China. Importers need legal and laboratory decisions from qualified partners, but they also need evidence that the approved product, packaging, warnings, and files are the versions actually packed for shipment.',
      ],
      bullets: [
        'A supplier’s generic declaration does not establish that the final battery package or product version is covered',
        'Warning artwork can be correct in a PDF while old or mixed versions remain in cartons',
        'A visual check cannot prove child resistance or use-and-abuse performance, but it can reveal traceability and version mismatches',
        'Payment and pickup leverage is strongest while repackaging, relabeling, sorting, or re-inspection can still happen in China',
      ],
    },
    {
      id: 'data-elements',
      title: 'Which battery, package, and product does the rule cover?',
      paragraphs: [
        'Start by mapping the exact supply configuration. A button or coin battery may be sold by itself, included loose with a consumer product, or installed in a product. CPSC guidance distinguishes requirements for battery packaging from requirements for consumer products containing or designed to use these batteries.',
        'Do not turn that map into a legal conclusion during inspection. The importer, qualified laboratory, compliance adviser, or counsel should confirm applicable requirements, exemptions, test methods, warning specifications, and certificate obligations. The China-side task is to compare their approved references with the order.',
      ],
      bullets: [
        'Record battery chemistry, model, dimensions, count, and how the customer receives it',
        'Record product model, age grade, replaceability, compartment access, and all packaging layers',
        'Separate product-package warnings from warnings required on battery packaging, the product, and instructions',
        'Reconfirm scope after any battery, compartment, packaging, manual, supplier, or product revision',
      ],
    },
    {
      id: 'product-identity',
      title: 'What physical evidence should be checked before shipment?',
      paragraphs: [
        'Compare buyer-approved packaging and warning files with physical retail packs across the agreed sample. Check whether warnings are present, legible, unobstructed, and on the intended surface. Trace the observed battery and compartment back to the correct SKU, carton, packing-list line, test file, and production version.',
        'For products, document the compartment fastener and access method without claiming the construction passed mandatory performance tests. For separately supplied batteries, document packaging format and seals without claiming a visual review proves child resistance. Escalate every mismatch to the importer and qualified specialist.',
      ],
      bullets: [
        'Photograph the complete package and contextual close-ups, not only a detached label sample',
        'Open cartons across SKUs and packing locations when the agreed sampling plan permits',
        'Check for loose batteries, mixed battery models, missing manuals, changed screws, old artwork, and rework residue',
        'Keep tested-reference photos and approved files beside final inspection evidence',
      ],
    },
    {
      id: 'broker-handoff',
      title: 'What should be in the release file?',
      paragraphs: [
        'The release file should connect the compliance decision to the shipment: product and battery identifiers, approved artwork, packaging specification, test reports, certificates when required, manufacturer details, packing records, inspection evidence, corrections, and the importer’s release instruction.',
        'If the factory changes the battery, compartment, packaging supplier, warning layout, materials, or manual after testing or approval, pause release. A specialist should decide whether the change requires new testing, revised documentation, or other action before China-side correction and re-check.',
      ],
      bullets: [
        'Freeze one approved revision for product, packaging, warnings, manuals, and battery configuration',
        'Record who approved the compliance reference and who can authorize release',
        'Separate visually confirmed facts from supplier statements and specialist conclusions',
        'Keep correction and re-check evidence tied to affected quantities and carton locations',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Rule and configuration are mapped',
      whatToConfirm: 'Battery type, supply mode, product scope, applicable warnings, packaging rules, tests, and exemptions are confirmed by qualified parties',
      buyerDecision: 'Continue the check, seek specialist clarification, or hold production release.',
    },
    {
      riskNode: 'Approved files match physical goods',
      whatToConfirm: 'Packaging, warnings, product, manual, battery, compartment, SKU, and carton records use the same approved revision',
      buyerDecision: 'Approve the sampled evidence, correct and sort stock, or expand/repeat inspection.',
    },
    {
      riskNode: 'Test traceability is intact',
      whatToConfirm: 'Report manufacturer, model, battery configuration, compartment, materials, dates, and production version align with the order',
      buyerDecision: 'Release after specialist approval, obtain revised evidence, or pause for testing.',
    },
    {
      riskNode: 'Corrections are controlled',
      whatToConfirm: 'Affected quantities are segregated, reworked to approved instructions, documented, and re-checked before pickup',
      buyerDecision: 'Release, hold affected cartons, re-inspect, or delay pickup.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official CPSC Reese’s Law FAQ, business guidance, Federal Register labeling rule, and 2026 recall records checked July 14, 2026 Beijing time.',
    'Buyer-approved product specifications, battery details, packaging and warning artwork, manuals, test reports, certificates, and specialist instructions.',
    'Physical product, battery package, retail packaging, warning placement, battery compartment, cartons, packing records, and correction evidence observed in China.',
    'Scope is limited to evidence comparison; legal applicability, testing sufficiency, certification, and compliance decisions stay with qualified parties.',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Recalls/2026/Lithium-Coin-Batteries-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Battery-Ingestion-Violates-Federal-Statute-for-Child-Resistant-Packaging-of-Coin-Batteries-Imported-and-Sold-on-Amazon-by-LiCB',
      label: 'CPSC - LiCB CR2032 coin battery recall',
      note: 'Official May 14, 2026 recall stating that about 94,000 China-made batteries lacked required child-resistant packaging and warning labels; the public case used below.',
    },
    {
      href: 'https://www.cpsc.gov/FAQ/Button-Cell-and-Coin-Battery-FAQs',
      label: 'CPSC - Button Cell and Coin Battery FAQs',
      note: 'Official guidance explaining product, packaging, warning, battery-compartment, testing, exemption, and effective-date questions under Reese’s Law.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Button-Cell-and-Coin-Battery',
      label: 'CPSC - Button cell and coin battery business guidance',
      note: 'Official business guidance for consumer products and packages containing or designed to use button cell or coin batteries.',
    },
    {
      href: 'https://www.federalregister.gov/documents/2023/09/21/2023-20334/safety-standard-for-button-cell-or-coin-batteries-and-consumer-products-containing-such-batteries',
      label: 'Federal Register - Button or coin battery safety standard',
      note: 'Official final rule source for 16 CFR part 1263, including performance and labeling requirements; product-specific interpretation requires qualified review.',
    },
    {
      href: 'https://chinawto.mofcom.gov.cn/article/jsbl/alzs/202605/20260503629133.shtml',
      label: 'China MOFCOM trade alert - U.S. recall of China-made coin batteries',
      note: 'Independent public cross-border coverage of the May 2026 recall, used as a current attention signal rather than a substitute for the CPSC record.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'SKU list, product models, age grades, product photos, order quantity, carton count, and final U.S. sales configuration',
    'Battery chemistry, model, dimensions, quantity, supplier, and whether each battery is loose, included, or installed',
    'Approved battery-package, product-package, product, manual, and warning artwork with revision status',
    'Packaging specifications, compartment drawings, bill of materials, fastener details, and approved reference sample',
    'Test reports, certificates when required, manufacturer and applicant records, specialist decisions, and change history',
    'Packing list, carton marks, supplier contacts, payment deadline, pickup date, correction rules, and release authority',
  ],
  redFlags: [
    'The supplier cannot identify the exact battery model or how it differs across SKUs',
    'Warnings exist in artwork but are missing, hidden, unreadable, or inconsistent on physical packs',
    'A separately supplied battery is loose or packaged differently from the approved/tested reference',
    'The compartment screw, door, access method, battery holder, or product material changed after testing',
    'Test reports describe a different model, manufacturer, battery, compartment, or production version',
    'Cartons mix old and new packaging, manuals, warnings, or battery configurations',
    'The supplier proposes relabeling or repacking without segregation, quantity control, and re-check evidence',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible product, battery, package, warning, carton, supplier, and document evidence with buyer-provided references in China',
    'Huang Sourcing does not certify Reese’s Law compliance, perform mandatory child-resistance or use-and-abuse testing, authenticate reports, or provide legal advice',
    'Visual inspection cannot prove child resistance, warning compliance, compartment performance, certificate validity, product safety, customs acceptance, or marketplace approval',
    'Sampling cannot guarantee every unit outside the agreed scope, and sealed cartons or restricted factory access reduce confidence',
    'The importer, qualified laboratory, compliance adviser, marketplace team, broker, or counsel remains responsible for product-specific decisions',
    'CPSC rules and guidance can change; confirm time-sensitive requirements before production, filing, payment, and shipment',
  ],
  relatedLinks: [
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Use the general release guide to control artwork, barcode, carton, and correction evidence across the order.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control plan for China manufacturing',
      note: 'Build compliance references, approved samples, inspections, and hold points into one production plan.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Define which photos, measurements, traceability facts, and limits the release report should show.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before booking China QC',
      note: 'Prepare final files, SKU coverage, sampling instructions, and buyer decision rules before inspection.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Does every product with a button battery have the same requirements?',
      answer: 'No. Requirements depend on the battery, product, supply configuration, age grade, applicable rules, and possible exemptions. Use current CPSC guidance and qualified product-specific advice.',
    },
    {
      question: 'Can a visual inspection prove child-resistant packaging?',
      answer: 'No. It can document packaging construction, seals, warnings, revisions, and shipment match, but it cannot replace required testing or a qualified compliance decision.',
    },
    {
      question: 'Should I hold final payment for a warning-label mismatch?',
      answer: 'A mismatch should be escalated before release. The buyer and qualified specialist should decide the correction, affected scope, re-check, and whether testing or documentation must change.',
    },
    {
      question: 'What if the factory changes the battery or compartment after testing?',
      answer: 'Pause release and disclose the change to the importer, laboratory, and compliance adviser. They should decide whether the existing evidence still applies or new testing and documents are required.',
    },
    {
      question: 'Can Huang Sourcing certify Reese’s Law compliance?',
      answer: 'No. Huang Sourcing can compare China-side physical and document evidence with buyer-approved references. Testing, certification, legal interpretation, and compliance approval remain with qualified parties.',
    },
  ] satisfies FaqItem[],
}

export function makeButtonBatteryPackagingChinaArticleMetadata(): Metadata {
  const article = buttonBatteryPackagingChinaArticle
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

export function makeButtonBatteryPackagingChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(buttonBatteryPackagingChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Button battery packaging pre-shipment checklist',
      itemListElement: buttonBatteryPackagingChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
