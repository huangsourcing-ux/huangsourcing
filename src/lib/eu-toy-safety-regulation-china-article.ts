import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  euGpsrLabelCheckChinaArticleHref,
  euToySafetyRegulationChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qcBeforeBalanceArticleHref,
  resourceGuideHref,
  waterBeadToyCpscChecklistArticleHref,
} from '@/lib/site-links'

type ArticleSection = { bullets?: string[]; id: string; paragraphs: string[]; title: string }
type CheckGroup = { items: string[]; title: string }
type DecisionRow = { buyerDecision: string; evidence: string; riskNode: string }
type FaqItem = { answer: string; question: string }
type RelatedLink = { href: string; label: string; note: string }
type SourceNote = { href: string; label: string; note: string }

export const euToySafetyRegulationChinaArticle = {
  author: 'editorial-team' as const,
  href: euToySafetyRegulationChinaArticleHref,
  title: 'EU Toy Safety Regulation: China Supplier Checklist',
  metaTitle: 'EU Toy Safety: China Supplier Checklist',
  metaDescription:
    'Check EU toy scope, safety files, tests, warnings, production identity, and future Digital Product Passport data before paying or shipping from China.',
  publishedDate: 'July 22, 2026',
  publishedDateIso: '2026-07-22T03:30:48+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'EU Toy Safety Regulation: China Supplier Checklist',
  eyebrow: 'EU toy evidence - China supplier files - DPP readiness',
  image: {
    alt: 'Neutral illustrative EU toy evidence-check setup with generic toys, technical files, material samples, caliper, plain carton, and a decorative data carrier',
    height: 900,
    src: '/images/eu-toy-safety-regulation-china-sourcing.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/eu-toy-safety-regulation-china-sourcing.webp', width: 1600 },
    { height: 1200, src: '/images/eu-toy-safety-regulation-china-sourcing-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/eu-toy-safety-regulation-china-sourcing-1x1.webp', width: 1200 },
  ],
  intro:
    'For EU-bound toys sourced from China, release decisions should connect the exact SKU to the current legal route, safety assessment, technical documentation, conformity evidence, warnings, production version, and packed goods. Regulation (EU) 2025/2509 entered into force on January 1, 2026, but its main requirements apply from August 1, 2030 after the transition period.',
  answerSummary:
    'Do not treat the future toy Digital Product Passport as a current substitute for the evidence required for a 2026 shipment. Use today’s applicable rules for immediate release, while building a stable product-data file for models expected to remain on sale into 2030. Hold payment or pickup when the qualified scope decision, laboratory or conformity route, technical file, warnings, model identity, or production match is unresolved.',
  primaryCta: { label: 'Check Toy Shipment Evidence' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side EU toy evidence and shipment check before final payment or pickup.

Product / model / SKU count:
EU destination country or marketplace:
Supplier / factory location:
Safety assessment and technical file available:
Test reports and conformity route:
Warnings / labels / instructions:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#current-vs-future', label: 'Current rules vs 2030' },
    { href: '#technical-file', label: 'Technical-file match' },
    { href: '#production-check', label: 'Production and pack-out' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Confirm the exact product is legally treated as a toy, its intended age and use, destination, model, SKU, materials, functions, accessories, packaging, and online offer',
    'Have the EU responsible party or qualified specialist map the rules and conformity route that apply to the shipment date rather than assuming the 2030 regime already applies',
    'Tie the safety assessment, technical documentation, declaration, test evidence, warning artwork, instructions, and product photos to the same factory and production version',
    'Check physical, mechanical, flammability, chemical, electrical, hygiene, age-grading, small-parts, and other relevant hazards through the qualified plan for the exact toy',
    'Compare sampled production with approved materials, colors, components, electronics, fasteners, seams, fillings, coatings, magnets, batteries, accessories, labels, and cartons',
    'Build a controlled data map for future DPP fields only when it helps long-lived products; do not invent identifiers or claim premature DPP compliance',
    'Record substitutions, report gaps, warning mismatches, mixed revisions, affected quantities, correction instructions, retest decisions, and re-inspection results',
    'Hold balance payment and pickup until the EU release owner accepts the product-specific evidence and the packed order matches it',
  ],
  checkGroups: [
    {
      title: 'Scope, user, and destination',
      items: [
        'Toy classification, intended and foreseeable use, age grade, functions, accessories, online claims, model, SKU, EU country, importer, and responsible economic operator',
        'Applicable present rules, harmonised standards or other conformity route, safety-assessment owner, test plan, technical-file owner, warnings, and release authority',
      ],
    },
    {
      title: 'Technical and test identity',
      items: [
        'Manufacturer, factory, applicant, report number, sample photos, model, materials, colors, components, electronics, battery, magnets, coatings, fillings, accessories, dates, and results',
        'Controlled drawings, bill of materials, specifications, safety assessment, declarations, certificates where relevant, amendment history, and approved reference sample',
      ],
    },
    {
      title: 'Warnings and future data',
      items: [
        'Product and packaging identifiers, traceability details, CE marking route, age warnings, hazard warnings, instructions, languages, importer details, online-offer information, and artwork revisions',
        'Future DPP data owner, stable model identifier, data carrier plan, document links, retention, access, change control, and 2030 transition assumptions clearly separated from current shipment requirements',
      ],
    },
    {
      title: 'Bulk order and release',
      items: [
        'Opened-carton coverage, model and lot traceability, material and component match, workmanship, function, labels, instructions, accessories, retail packs, carton marks, and destination segregation',
        'Affected quantity, stock isolation, approved correction, specialist or laboratory review, retest need, re-check evidence, payment hold, and pickup status',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why EU toy evidence is a current China sourcing issue',
      paragraphs: [
        'The European Commission says Regulation (EU) 2025/2509 entered into force on January 1, 2026 and will start applying on August 1, 2030 after a four-and-a-half-year transition. The new framework strengthens controls for harmful chemicals and introduces a Digital Product Passport for toys. Buyers with models, tooling, or supplier relationships expected to continue into 2030 now have a practical reason to clean up product identity and evidence architecture without misrepresenting future readiness as current compliance.',
        'Public enforcement keeps the immediate evidence problem visible. On July 20, 2026, the Commission announced a Digital Services Act fine against AliExpress concerning failures to assess and mitigate risks involving illegal, unsafe, or counterfeit products, expressly referring to unsafe toys among the wider product problem. That platform decision does not determine whether a specific SKU complies, but it is a current signal that marketplace availability is not a substitute for product-level evidence.',
      ],
      bullets: [
        'The main Toy Safety Regulation requirements are not generally applicable until August 1, 2030; avoid telling suppliers that every 2026 toy already needs the future DPP',
        'Toys marketed before that date still need the rules actually applicable to them, including product-specific safety, conformity, warning, traceability, and online-offer requirements',
        'A reusable data model is valuable only when its fields stay tied to the exact SKU, factory, bill of materials, evidence revision, and responsible EU party',
        'Payment leverage is strongest before unapproved material substitutions, mixed revisions, missing warnings, or incomplete documentation leave China',
      ],
    },
    {
      id: 'current-vs-future',
      title: 'Separate the current shipment gate from the 2030 DPP project',
      paragraphs: [
        'For a shipment releasing now, the importer and qualified adviser should identify the legislation, standards, conformity route, safety assessment, technical documentation, declaration, warnings, markings, traceability details, and online information required on the actual placing-on-market date. A supplier-created QR code, portal screenshot, marketplace badge, or generic CE file does not answer that product-specific decision.',
        'For a model expected to continue into 2030, the future-readiness project can begin with controlled identifiers and ownership: who creates the passport, which product model it covers, which evidence it points to, how revisions are approved, how long data remain accessible, and how the data carrier stays connected to the physical toy and packaging. The EUR-Lex summary says the future passport will replace the Toy Safety Directive declaration, remain available for 10 years, and have a reference registered before the toy is placed on the market under the new regime.',
      ],
      bullets: [
        'Keep “required now,” “planned for 2030,” and “awaiting implementing detail” in separate columns',
        'Do not invent a DPP identifier, QR destination, chemical conclusion, or regulatory approval simply to fill a supplier spreadsheet',
        'Assign one owner for legal scope and conformity, one for controlled product data, and one for physical production verification',
        'Revalidate the plan when the model, factory, materials, age grade, functions, software, warnings, importer, or target market changes',
      ],
    },
    {
      id: 'technical-file',
      title: 'How should the technical file and test evidence match the toy?',
      paragraphs: [
        'Start from the exact model and qualified hazard map. The official EUR-Lex summary lists physical and mechanical, flammability, chemical, electrical, hygiene, and radioactivity risks, and says manufacturers must perform a safety assessment and prepare technical documentation. The applicable evidence for a wooden stacking toy is not automatically enough for a plush toy, an electronic activity toy, a magnet set, or another material and age configuration.',
        'Compare the report applicant, manufacturer, factory, model family, sample photos, age grade, materials, coatings, colors, stuffing, seams, small parts, magnets, batteries, electronics, accessories, warnings, dates, methods, results, and amendments with the purchase order and current bill of materials. Missing pages, unexplained families, outdated samples, or a report from another factory should trigger qualified review before payment.',
      ],
      bullets: [
        'Use the full controlled report and safety assessment, not only a certificate cover, supplier summary, or marketplace approval screen',
        'Ask qualified parties whether differences in colorants, coatings, polymers, textiles, fillings, components, electronics, or suppliers require a new assessment or testing',
        'Keep declarations, report revisions, sample photos, drawings, bills of materials, warning files, instructions, and reference samples under change control',
        'Treat laboratory conclusions and legal conformity as specialist work; an inspection can verify identity and visible match but cannot reproduce every controlled safety test',
      ],
    },
    {
      id: 'production-check',
      title: 'What can be checked on production toys and packed cartons?',
      paragraphs: [
        'A China-side inspection can compare sampled goods with buyer-approved references: product and carton model codes, dimensions, colors, materials visible at inspection, seams, fasteners, accessible components, battery compartments, accessories, workmanship, function, labels, warnings, instructions, retail packaging, barcodes, lot information, and carton segregation. The sampling and test method should be supplied or approved by the buyer and qualified product-safety owner.',
        'When a mismatch appears, do not assume it is cosmetic or isolated. Define the affected production and carton range, isolate stock, record the old and new revisions, obtain an approved correction, decide whether specialist assessment or laboratory retesting is needed, and repeat the agreed checks before release. Physical inspection supports the evidence chain; it does not certify EU compliance.',
      ],
      bullets: [
        'Open cartons across the agreed sample and record the exact model, lot, production date, factory, destination, warning, instruction, accessory, and packaging revision found',
        'Compare production with the approved sample, specification, drawings, bill of materials, component schedule, artwork, report photos, and release checklist',
        'Flag mixed materials, substitute parts, inconsistent age grades, missing instructions, old labels, mismatched languages, loose components, inaccessible traceability, or undocumented rework',
        'Link every hold, correction, retest decision, waiver, and re-inspection result to a named approver and affected quantity',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Current legal route is confirmed',
      evidence: 'The EU owner maps the shipment date, toy scope, age and use, hazards, standards or conformity route, documentation, warnings, labels, online information, and responsible parties.',
      buyerDecision: 'Continue, clarify classification, obtain specialist review, change the product or listing, or hold the order.',
    },
    {
      riskNode: 'Technical evidence matches the model',
      evidence: 'Factory, model, bill of materials, sample photos, safety assessment, full reports, declarations, warnings, instructions, and revisions describe the same toy.',
      buyerDecision: 'Approve the evidence set, assess differences, replace documents, retest, redesign, or stop.',
    },
    {
      riskNode: 'Production and cartons match',
      evidence: 'Sampled units use approved materials, components, functions, markings, warnings, instructions, accessories, retail packs, model codes, and destination cartons.',
      buyerDecision: 'Release, expand inspection, segregate stock, rework, replace, retest, or hold payment and pickup.',
    },
    {
      riskNode: 'Future DPP data are controlled',
      evidence: 'Planned fields, product identifier, data owner, evidence links, retention, access, change control, and implementation assumptions are documented separately from present obligations.',
      buyerDecision: 'Continue structured preparation, correct the data model, await official detail, or avoid unsupported readiness claims.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'European Commission and EUR-Lex summaries of Regulation (EU) 2025/2509 checked July 22, 2026 Beijing time for entry into force, August 1, 2030 application, scope, hazards, technical documentation, warnings, economic-operator duties, and DPP direction.',
    'European Commission May 28, 2026 Temu DSA decision used as the public case, with Associated Press reporting used to show the company response and independent context.',
    'European Commission July 20, 2026 AliExpress DSA decision used only as a current platform-risk signal, not as proof about a specific supplier, product, or Huang Sourcing involvement.',
    'Buyer-approved product list, age grading, intended use, safety plan, technical file, full reports, declarations, drawings, bill of materials, artwork, reference sample, production goods, carton map, corrections, and release authority.',
  ],
  sourceNotes: [
    {
      href: 'https://single-market-economy.ec.europa.eu/sectors/toys/toy-safety_en',
      label: 'European Commission - EU toy safety overview',
      note: 'Official source for the current directive context, Regulation (EU) 2025/2509, January 1, 2026 entry into force, August 1, 2030 application, hazard categories, conformity routes, CE marking, and DPP direction.',
    },
    {
      href: 'https://eur-lex.europa.eu/EN/legal-content/summary/ensuring-the-safety-of-toys-on-the-eu-market.html',
      label: 'EUR-Lex - Regulation (EU) 2025/2509 summary',
      note: 'Official legal summary covering scope, safety assessment, technical documentation, chemical controls, warnings, economic-operator duties, DPP functions, market surveillance, and transition timing.',
    },
    {
      href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32025R2509',
      label: 'EUR-Lex - full Toy Safety Regulation text',
      note: 'Primary legal text for Regulation (EU) 2025/2509; product-specific conclusions should be made by the responsible EU party or qualified adviser.',
    },
    {
      href: 'https://digital-strategy.ec.europa.eu/en/news/commission-fines-temu-eu200-million-breaching-digital-services-act',
      label: 'European Commission - Temu DSA decision',
      note: 'Primary May 28, 2026 public case describing the platform risk-assessment failure and mystery-shopping evidence involving selected baby toys and chargers.',
    },
    {
      href: 'https://apnews.com/article/temu-european-union-brussels-ecommerce-digital-07f53e968da89562e3f032abfa626fa4',
      label: 'Associated Press - Temu decision and response',
      note: 'Independent report on the Commission decision, the mystery-shopping findings described by the Commission, and Temu’s stated disagreement and response.',
    },
    {
      href: 'https://digital-strategy.ec.europa.eu/en/news/commission-fines-aliexpress-eu550-million-breaching-digital-services-act',
      label: 'European Commission - AliExpress DSA decision',
      note: 'Primary July 20, 2026 trend signal concerning platform duties to assess and mitigate illegal, unsafe, or counterfeit product risks, including unsafe toys in the Commission statement.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Product name, intended and foreseeable use, age grade, model, SKU, variants, functions, accessories, materials, colors, order quantity, production dates, EU destination, importer, and marketplace',
    'Manufacturer and factory details, purchase order, controlled drawings, bill of materials, component and material specifications, supplier declarations, safety assessment, and approved sample',
    'Qualified rule and standard map, conformity route, laboratory details, full test reports, declarations, certificates where relevant, engineering assessments, and change approvals',
    'Approved product and packaging identifiers, CE and traceability plan, age and hazard warnings, instructions, languages, importer details, barcode, online-offer copy, and carton artwork',
    'Future DPP working data map when relevant, with every field labelled required now, planned for 2030, owner, source, revision, review status, and unresolved assumption',
    'Packing list, carton map, lot records, destination segregation, affected-quantity controls, correction instructions, retest decision, re-check rules, payment deadline, and pickup date',
  ],
  redFlags: [
    'The supplier says the toy is compliant because it has a CE mark, marketplace listing, QR code, certificate cover, or report for a similar model',
    'The report applicant, manufacturer, factory, model, age grade, materials, colors, components, accessories, sample photos, dates, or warnings do not match production',
    'One evidence file is used across different polymers, coatings, textiles, fillings, magnets, batteries, electronics, factories, or model families without qualified assessment',
    'The factory changes a material, colorant, coating, filling, seam, fastener, small part, magnet, battery, component, accessory, software function, supplier, or factory after testing',
    'Current requirements, future 2030 DPP planning, and unconfirmed implementing details are mixed together or presented as one approval claim',
    'Sample cartons contain mixed revisions, inconsistent age warnings, missing languages, different accessories, old instructions, substituted parts, or unexplained model codes',
    'The correction plan has no affected quantity, stock segregation, approved instruction, specialist review, retest decision, or repeat inspection evidence',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible toy construction, buyer-approved dimensions, materials visible at inspection, components, functions, labels, warnings, instructions, packaging, cartons, supplier files, and correction records in China',
    'Huang Sourcing does not decide legal toy scope, select standards, conduct a complete safety assessment, certify conformity, issue a declaration, approve CE marking, create an official DPP, authenticate reports, or provide legal advice',
    'Visual inspection and simple functional checks cannot prove chemical composition, flammability, electrical safety, mechanical durability, migration, foreseeable-use safety, cybersecurity, or conformity with every applicable method',
    'Sampling cannot guarantee every unit outside the agreed sample; sealed cartons, mixed lots, poor traceability, inaccessible components, destructive-test limits, or restricted factory access reduce confidence',
    'The manufacturer, EU importer, authorised representative where applicable, laboratory, notified body where applicable, product-safety specialist, marketplace team, customs representative, or counsel remains responsible for product-specific conclusions',
    'EU rules, harmonised standards, implementing acts, DPP technical details, national requirements, and marketplace instructions can change; reconfirm time-sensitive requirements before design, testing, production, listing, payment, and shipment',
  ],
  relatedLinks: [
    {
      href: euGpsrLabelCheckChinaArticleHref,
      label: 'EU GPSR label check for China sourcing',
      note: 'Connect responsible-person, product-identification, warning, traceability, and online-offer evidence to the wider current EU product-safety context.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Control warning, instruction, importer, language, barcode, retail-pack, and carton artwork revisions before final payment.',
    },
    {
      href: qcBeforeBalanceArticleHref,
      label: 'QC inspection before balance payment',
      note: 'Connect product identity, workmanship, function, quantity, packaging, evidence, and correction findings to a documented payment hold point.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Define the photos, model traceability, sampled checks, mismatches, corrections, and scope limits the report should show.',
    },
    {
      href: waterBeadToyCpscChecklistArticleHref,
      label: 'U.S. water bead toy CPSC checklist',
      note: 'Compare a separate U.S. product-specific evidence and release decision without applying it to the EU toy route.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related supplier, inspection, packaging, payment, and pickup decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Does every EU-bound toy need a Digital Product Passport in 2026?',
      answer: 'No. The European Commission says the new Toy Safety Regulation entered into force on January 1, 2026 but starts applying after the transition period on August 1, 2030. Use the rules applicable to the actual placing-on-market date and obtain qualified advice for transitional cases.',
    },
    {
      question: 'Can a QR code on the package prove toy compliance?',
      answer: 'No. A QR code only points somewhere. Buyers need controlled product identity, current legal and conformity decisions, safety assessment, technical documentation, test evidence, warnings, traceability, and a physical match to production.',
    },
    {
      question: 'Can one toy report cover different colors or materials?',
      answer: 'Do not assume it can. Colorants, coatings, polymers, textiles, fillings, components, electronics, accessories, and suppliers can change the hazard and evidence analysis. Disclose every difference to the responsible importer, laboratory, and product-safety specialist.',
    },
    {
      question: 'Can Huang Sourcing certify a toy for the EU?',
      answer: 'No. Huang Sourcing can compare China-side physical and document evidence with buyer-approved references. Legal classification, safety assessment, standards, testing, conformity, declarations, CE marking, and DPP decisions remain with responsible qualified parties.',
    },
  ] satisfies FaqItem[],
}

export function makeEuToySafetyRegulationChinaArticleMetadata(): Metadata {
  const article = euToySafetyRegulationChinaArticle
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

export function makeEuToySafetyRegulationChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(euToySafetyRegulationChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'EU toy safety evidence and shipment release checklist',
      itemListElement: euToySafetyRegulationChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
