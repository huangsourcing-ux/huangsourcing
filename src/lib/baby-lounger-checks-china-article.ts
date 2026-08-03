import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  babyLoungerChecksChinaArticleHref,
  buyerSideInspectionReportArticleHref,
  cpscEfilingChinaImportsArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
  verifyChinaLabTestReportArticleHref,
} from '@/lib/site-links'

type ArticleSection = {
  bullets?: string[]
  id: string
  paragraphs: string[]
  title: string
}

type CheckGroup = { items: string[]; title: string }
type DecisionRow = { buyerDecision: string; riskNode: string; whatToConfirm: string }
type RelatedLink = { href: string; label: string; note: string }
type SourceNote = { href: string; label: string; note: string }

export const babyLoungerChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: babyLoungerChecksChinaArticleHref,
  title: 'Baby Lounger Checks Before Shipping from China',
  metaTitle: 'Baby Lounger Checks Before China Shipment',
  metaDescription:
    'Check baby loungers before China shipment: product route, test evidence, firmness, sidewalls, seams, labels, registration, lots, and release.',
  publishedDate: 'August 4, 2026',
  publishedDateIso: '2026-08-04T03:30:56+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Baby Lounger Checks Before Shipping from China',
  eyebrow: 'Product route - finished-lot evidence - payment and shipment release',
  image: {
    alt: 'Neutral AI illustration of an empty unbranded baby lounger, foam insert, cover, measuring tools, test fixtures, blank labels, checklist, and carton on an inspection bench',
    height: 900,
    src: '/images/baby-lounger-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/baby-lounger-checks-china.webp', width: 1600 },
    {
      height: 1200,
      src: '/images/baby-lounger-checks-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/baby-lounger-checks-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Before releasing balance payment or forwarder pickup for baby loungers made in China, freeze the destination, intended use, marketing, design, model, factory, materials, qualified test scope, labels, registration materials, production dates, lots, and cartons. Hold any shipment scope that does not match its approved compliance and production file.',
  answerSummary:
    'Use three separate gates: qualified classification of the product route, qualified testing and certification for the exact model and production scope, and buyer-side inspection of sampled finished goods. A China-side inspection can document construction, dimensions, seams, visible firmness or angle comparisons, labels, packaging, workmanship, and lot mismatches, but it cannot replace prescribed performance testing, issue a Children’s Product Certificate, decide the legal route, or guarantee safety.',
  primaryCta: { label: 'Check Loungers Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side baby lounger evidence and quality check before shipment.

Destination market and intended use:
Factory, brand owner, model/SKU, materials, and production lot:
Approved sample, specification, dimensions, seams, foam, and cover:
Applicable-rule review, full test reports, CPC data, and laboratory details:
Warnings, tracking labels, registration materials, packaging, and carton files:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#product-route', label: 'Define the product route' },
    { href: '#qualified-evidence', label: 'Reports and CPC data' },
    { href: '#physical-checks', label: 'Finished-goods checks' },
    { href: '#labels-registration', label: 'Labels and registration' },
    { href: '#change-control', label: 'Changes and lot release' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Document destination, intended use, sleep or awake-use marketing, product geometry, age range, model/SKU, materials, factory, production dates, lot, sales listing, and package claims before choosing the regulatory and evidence route',
    'Require the importer and qualified compliance parties to identify whether the product falls under infant support cushion, infant sleep product, nursing pillow, infant pillow ban, toy-accessory, or another applicable requirement',
    'Match complete laboratory reports, sample photos, methods, results, limitations, manufacturer, factory, model, materials, dates, CPC data, and eFiling fields to the exact order',
    'Compare sampled mass production with the approved sample and specification for sidewalls, occupant surface, incline, bounded openings, seams, restraints, cover, foam, dimensions, removable parts, workmanship, and model identity',
    'Check permanent warnings, manufacturer or importer contact data, model or identification number, manufacturing date, tracking information, registration form, barcode, SKU, packaging, quantities, and carton marks',
    'Keep firmness, sidewall-angle, seam-force, opening-probe, incline, chemical, durability, and regulatory conclusions with qualified methods and parties; onsite observations are not substitute test results',
    'Hold substituted foam, changed geometry, mixed labels, generic reports, unsupported claims, untraceable lots, failed dimensions, damaged goods, or unresolved product-route questions',
    'Release only named models, colors, material versions, production dates, lots, quantities, and cartons after controlled correction, qualified disposition, and repeat inspection where needed',
  ],
  checkGroups: [
    {
      title: 'Product route and exact model',
      items: [
        'Destination, intended use, marketing, product category, age range, geometry, model, materials, accessories, manufacturer, factory, production date, lot, and responsible compliance owner are controlled',
        'Purchase order, specification, approved sample, listing, test samples, CPC data, labels, registration materials, retail pack, carton, and packing list describe the same finished product route',
      ],
    },
    {
      title: 'Qualified performance evidence',
      items: [
        'Applicable rules, laboratory acceptance, report number, methods, sample photos, model, foam, fabric, seams, geometry, dates, results, limits, and certificate scope align',
        'Qualified evidence covers the shipped product rather than an early prototype, another lounger shape, a different foam or cover, another factory, or a generic product family',
      ],
    },
    {
      title: 'Physical product and pack-out',
      items: [
        'Sampled units match approved dimensions, sidewalls, incline reference, openings, seams, cover fit, foam, restraints prohibition, removable parts, workmanship, warning placement, and product identity',
        'Tracking, manufacturer or importer details, model, manufacturing date, registration materials, barcode, SKU, lot, retail package, quantity, carton marks, and packing list are complete and consistent',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, carton map, supplier change, correction instruction, qualified retest or certificate disposition, revised files, and repeat inspection remain traceable',
        'Cleared and unresolved models, materials, dates, lots, and cartons stay separated; the final release names exact scope and open conditions instead of giving a blanket pass',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why baby lounger shipment evidence matters now',
      paragraphs: [
        'On July 30, 2026, the U.S. Consumer Product Safety Commission expanded the Cpzzkq baby lounger recall to additional colors. CPSC states that the padding could obstruct an infant’s breathing, that the products violated the mandatory infant support cushion standard, and that the China-made loungers were sold online in the United States.',
        'The expanded action followed repeated 2026 records for baby loungers made in China, including BBWOO, CooCooBaby, VEVOR, and Joyful Journeys products. The public records do not all cite the same rule or design defect, which is exactly why a buyer should resolve intended use, marketing, product geometry, and applicable requirements before approving tests or production.',
        'CPSC states that its infant support cushion requirements apply to products manufactured after May 5, 2025. Separately, revised certificate content and import eFiling requirements for covered regulated products took effect July 8, 2026, increasing the operational value of exact model, manufacturer, test, and certificate data before entry.',
      ],
      bullets: [
        'Repeated public actions do not prove every baby lounger, supplier, factory, material, or lot has the same problem',
        'The marketing name “baby lounger” does not by itself settle which federal rules apply',
        'A genuine test report is useful only when its samples and scope match current production',
        'Correction leverage is strongest before balance payment and pickup, while redesign, retesting, relabeling, segregation, or cancellation remains practical',
      ],
    },
    {
      id: 'product-route',
      title: 'Define the product route before approving design or evidence',
      paragraphs: [
        'Start with design, materials, intended use, age range, instructions, warnings, listing copy, photos, packaging, and how the product is presented to consumers. CPSC defines infant support cushions broadly and includes infant loungers, positioners, props, and some dual-use nursing pillows, while excluding products covered by certain other durable infant or toddler standards.',
        'Some 2026 CPSC baby lounger actions cite the infant support cushion rule; others cite the infant sleep products rule. Do not ask a factory, marketplace category, or product nickname to resolve that distinction. The responsible importer and qualified compliance resources should document the route before the supplier freezes geometry, materials, test samples, labels, registration materials, and claims.',
        'Do not attempt to cure a physical or intended-use mismatch by changing listing words after production. Product construction, warnings, instructions, package claims, sales content, approved evidence, and shipped units must tell the same story.',
      ],
      bullets: [
        'Freeze intended use and every sleep, nap, rest, tummy-time, feeding, positioning, travel, or floor-use claim across all channels',
        'Map accessories and convertible configurations separately when they change how an infant contacts or uses the product',
        'Escalate borderline cushions, pillows, mats, nests, loungers, and sleep-positioning claims for documented qualified review',
        'Treat U.S., Canadian, EU, UK, and other destination requirements as separate reviews unless qualified evidence establishes the scope',
      ],
    },
    {
      id: 'qualified-evidence',
      title: 'What should test reports and certificate data establish?',
      paragraphs: [
        'Review the complete evidence chain: responsible manufacturer or importer, applicable rules, issuing laboratory, CPSC acceptance where required, report number, test methods, sample photos, product dimensions, sidewalls, occupant surface, foam, fabric, seams, removable parts, model, factory, production dates, results, limitations, and authorized certificate data.',
        'CPSC guidance lists performance requirements for infant support cushions including restraint prohibition, seam strength, bounded openings, maximum incline, firmness, and sidewall angle. These prescribed checks require the applicable method, probes, force or angle measurement, controlled samples, trained personnel, and qualified interpretation; they are not ordinary visual inspection claims.',
        'Children’s products subject to a CPSC rule generally require third-party testing by a CPSC-accepted laboratory and a Children’s Product Certificate issued by the domestic manufacturer or importer. A supplier-created PDF, logo, or report cover does not transfer the importer’s responsibility or prove that current production matches the sample.',
      ],
      bullets: [
        'Obtain complete reports and sample records instead of a certificate cover, screenshot, seller summary, or cropped pass page',
        'Verify the laboratory and relevant acceptance scope through independently obtained source details',
        'Map every result and limitation to the exact model, materials, configuration, factory, production dates, and lot',
        'Escalate missing pages, altered sample photos, inconsistent dates, unexplained product families, or files that cannot be confirmed',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled finished loungers with approved specifications, samples, bill of materials, report identifiers, label artwork, registration materials, packaging files, and carton records while the order remains accessible. The useful output is a traceable list of sampled models, material versions, dimensions, construction details, defects, mismatches, and affected quantities.',
        'Check model identity, overall dimensions, occupant surface, sidewall shape and consistency, visible incline against an approved reference, bounded openings, seams and stitches, restraint absence where required, foam and cover identity, zippers and removable parts, sharp points, contamination, workmanship, warning placement, tracking information, retail packaging, quantities, and carton alignment.',
        'Do not improvise firmness, seam-force, probe, sidewall-angle, incline, chemical, durability, or legal conclusions. Onsite evidence can show a mismatch or reason to hold and retest; it cannot reproduce the prescribed laboratory procedure or issue a compliance verdict.',
      ],
      bullets: [
        'Use buyer-approved sampling, measurement points, tolerances, defect classes, tools, and stop rules',
        'Photograph each sample number, model, date code, lot, measurement, mismatch, label, package, and carton context',
        'Quantify mixed foam, covers, seams, geometry, labels, or accessories rather than calling them cosmetic differences',
        'Keep regulatory laboratory samples and destructive testing separate from ordinary saleable-stock inspection',
      ],
    },
    {
      id: 'labels-registration',
      title: 'Check warnings, tracking, registration, and pack-out',
      paragraphs: [
        'CPSC guidance states that infant support cushions need permanent warnings and durable-product information including manufacturer or importer name, U.S. contact details, model or product identification, and manufacture date. Children’s-product tracking requirements also apply, and durable infant or toddler products require registration materials.',
        'Compare final sewn-in labels, warning artwork, model and date identifiers, manufacturer or importer details, tracking information, registration form, instructions, barcode, SKU, lot code, retail package, carton quantity, carton marks, and packing list with approved files and responsible-party instructions.',
        'Inspect legibility, permanence where required, placement, completeness, and consistency across sampled units. A warning or registration card cannot cure the wrong product route, changed geometry, failed testing, substituted materials, or missing lot evidence.',
      ],
      bullets: [
        'Check product labels and packaging or tracking information separately rather than photographing one convenient carton',
        'Match sales-page and package claims to the same intended use used in the qualified compliance review',
        'Confirm registration materials identify the correct responsible party and exact model family',
        'Require revised artwork, controlled rework, affected-quantity records, and repeat inspection after label or pack-out corrections',
      ],
    },
    {
      id: 'change-control',
      title: 'Control foam, geometry, cover, factory, and lot changes',
      paragraphs: [
        'A change that looks minor to a purchasing team can change the tested product. New foam density, padding thickness, sidewall profile, seam construction, fabric, zipper, opening, accessory, supplier, factory, model name, packaging claim, or manufacturing date range should enter written change control before it reaches mass production.',
        'Ask the responsible technical and compliance parties whether the approved evidence still covers the change. Identify the first affected unit and carton, keep cleared and unresolved production physically separated, and map any new samples, reports, certificate data, artwork, or inspection criteria to the revised scope.',
        'If correction happens after a failed inspection, retain the original finding. A defensible release shows affected quantity, segregation, rework instructions, qualified disposition, revised evidence, repeat inspection samples, cleared carton range, and remaining open conditions.',
      ],
      bullets: [
        'Do not accept undocumented substitutions because color, feel, or overall appearance seems similar',
        'Trace foam, covers, hardware, sewing, assembly, finished units, dates, lots, and cartons through one version record',
        'Hold mixed old and new configurations until affected scope and qualified evidence are reconciled',
        'Release a named lot and carton range, not a supplier promise that “all goods are now fixed”',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Product route and claims',
      whatToConfirm:
        'Destination, intended use, marketing, configuration, age range, responsible compliance owner, applicable rules, testing, certification, tracking, registration, and filing duties are documented.',
      buyerDecision:
        'Proceed only with a qualified route; hold loungers whose support-cushion, sleep-product, nursing-pillow, infant-pillow, accessory, or destination status remains unresolved.',
    },
    {
      riskNode: 'Exact-model test evidence',
      whatToConfirm:
        'Laboratory, reports, sample photos, methods, model, geometry, foam, cover, seams, factory, dates, results, limits, CPC, and eFiling data align with production.',
      buyerDecision:
        'Release covered production only; escalate generic, partial, altered, unverifiable, or mismatched scope for qualified review, redesign, correction, or retesting.',
    },
    {
      riskNode: 'Construction and workmanship',
      whatToConfirm:
        'Sampled loungers match approved dimensions, occupant surface, sidewalls, openings, visible incline, seams, foam, cover, removable parts, accessories, and buyer tolerances.',
      buyerDecision:
        'Accept only within the approved inspection plan; hold affected lots for segregation, correction, qualified disposition, and repeat inspection when production differs.',
    },
    {
      riskNode: 'Warnings and traceability',
      whatToConfirm:
        'Permanent warnings, responsible-party contact, model, manufacturing date, tracking, registration form, instructions, SKU, lot, retail pack, cartons, and packing list are consistent.',
      buyerDecision:
        'Hold missing, mixed, unreadable, unsupported, or conflicting scope until controlled correction and repeat inspection are complete.',
    },
    {
      riskNode: 'Shipment release',
      whatToConfirm:
        'Cleared models, material versions, production dates, lots, cartons, quantities, evidence versions, inspection samples, corrections, open conditions, and release owner are named.',
      buyerDecision:
        'Release only documented cleared scope; do not turn a sampled inspection into a blanket guarantee for the order or future production.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'The April 23 and July 30, 2026 CPSC Cpzzkq baby lounger recall records and other current CPSC baby lounger actions',
    'Current CPSC infant support cushion guidance for scope, performance, warnings, tracking, registration, third-party testing, and CPC duties',
    'The July 8, 2026 effective date for revised CPSC certificate content and import eFiling requirements',
    'Buyer-side exact-model, construction, measurement, label, packaging, lot, correction, and release evidence that can be compared before goods leave China',
    'Explicit separation between visible shipment inspection and qualified classification, laboratory, certification, importer, customs, marketplace, and legal responsibilities',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Recalls/2026/Recall-of-Cpzzkq-Baby-Loungers-Expanded-Due-to-Risk-of-Serious-Injury-or-Death-from-Suffocation-Hazard-Violate-Mandatory-Standard-for-Infant-Support-Cushions-Sold-on-Amazon-by-CetoPMax',
      label: 'CPSC - expanded Cpzzkq baby lounger recall',
      note: 'Primary July 30, 2026 public case identifying added models, the infant support cushion violation, padding-related suffocation hazard, China manufacture, U.S. online sales, affected unit scope, and no reported incidents or injuries.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/Cpzzkq-Baby-Loungers-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Suffocation-Hazard-Violates-Mandatory-Standard-for-Infant-Support-Cushions-Sold-on-Amazon-by-CetoPMax',
      label: 'CPSC - original Cpzzkq baby lounger recall',
      note: 'Primary April 23, 2026 record for the original 2,100-unit scope, model description, China retailer and manufacture, U.S. sales period, hazard, and remedy.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Infant-Support-Cushions',
      label: 'CPSC - infant support cushions business guidance',
      note: 'Primary current guidance for scope, May 5, 2025 applicability, general and performance requirements, warnings, durable-product information, registration forms, testing, and CPC duties.',
    },
    {
      href: 'https://www.ecfr.gov/current/title-16/chapter-II/subchapter-B/part-1243',
      label: 'eCFR - 16 CFR part 1243 infant support cushions',
      note: 'Official current regulatory text. Product-specific decisions should use the controlling rule, incorporated standard, CPSC guidance, and qualified compliance resources.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Certificates',
      label: 'CPSC - certificates of compliance and eFiling update',
      note: 'Primary current notice stating the July 8, 2026 effective date for general imported regulated products and electronic filing of certificate data for covered imports.',
    },
    {
      href: 'https://publications.aap.org/aapnews/news/34339/Health-alerts-Baby-loungers-teething-toys-crib',
      label: 'American Academy of Pediatrics - 2026 baby-product health alerts',
      note: 'Independent March 2026 professional coverage of the BBWOO baby lounger recall and other current infant-product safety actions.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/Lab-Accreditation',
      label: 'CPSC - accepted laboratories and accreditation',
      note: 'Primary laboratory resource for checking acceptance and scope where third-party testing of children’s products is required.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Destination market, intended use, marketing and listing files, age range, exact model/SKU and configuration list, design drawings, dimensions, materials, accessories, and documented product-route review',
    'Approved sample, specification, bill of materials, foam and fabric details, seam construction, cover and closure files, manufacturer, factory, production dates, lots, carton map, and every change notice',
    'Complete laboratory reports, issuer and acceptance details, sample photos, test methods, current status, scope and limitations, CPC and eFiling data, and an index mapping each file to the order',
    'Final warnings, manufacturer or importer contact data, model and date markings, tracking information, registration form, instructions, retail-pack artwork, barcode, SKU, lot code, carton marks, and packing list',
    'Buyer-approved sampling plan, measurement points, tools, tolerances, workmanship criteria, defect classes, stop rules, photo requirements, any laboratory sample plan, and payment or pickup decision',
    'Any known foam, geometry, seam, opening, incline, cover, accessory, report, label, supplier-change, test, rework, or prior inspection concern and its affected quantity',
  ],
  redFlags: [
    'The supplier relies on a product name, “awake use” claim, marketplace category, report logo, or seller assurance without a documented product route',
    'The report shows another factory, model, geometry, foam, cover, seam, accessory, sample, production date, standard, or lot',
    'Only a certificate cover, cropped screenshot, supplier summary, prototype file, or unverifiable laboratory document is available',
    'Sampled units have mixed foam, dimensions, sidewalls, openings, seams, covers, zippers, accessories, warnings, tracking, model, or date identity',
    'The supplier treats a visual push, hand squeeze, pull, or angle check as prescribed performance testing',
    'Warnings, manufacturer or importer details, model, date, tracking, registration materials, SKU, lot, carton marks, or packing list conflict',
    'Listing or package claims changed after testing, while the physical product and approved evidence did not enter qualified review',
    'The correction plan lacks affected quantity, segregation, qualified retest or certificate disposition, controlled work instructions, revised files, carton map, or repeat inspection',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible baby loungers, documents, buyer-approved dimensions, materials, construction, seams, covers, removable parts, warnings, registration materials, packages, cartons, quantities, and workmanship with an agreed reference set in China',
    'Huang Sourcing does not select legal requirements, classify the product for the importer, conduct prescribed regulatory performance or chemical testing, issue a CPC, submit importer eFiling, authorize marketplace listings, or give legal advice',
    'A visual or buyer-defined onsite check cannot prove firmness, seam-force performance, head-probe compliance, sidewall angle, incline compliance, chemical composition, durability, suffocation risk, or compliance with every destination requirement',
    'Sampling cannot guarantee every unit outside the agreed scope, and sealed cartons, mixed lots, weak traceability, inaccessible goods, or missing approved references reduce confidence',
    'The manufacturer, importer, laboratory, compliance owner, broker, marketplace, retailer, authorities, caregivers, and end users remain responsible for their product-specific decisions',
    'A passed pre-shipment inspection does not guarantee regulatory compliance, certificate validity, eFiling acceptance, customs release, marketplace approval, recall avoidance, or safe performance after shipment',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'How to verify a China laboratory report',
      note: 'Check issuer, laboratory scope, sample photos, exact-product coverage, dates, results, limitations, source confirmation, and production mismatches.',
    },
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'CPSC eFiling for China imports',
      note: 'Coordinate exact finished-product certificate data, product identifiers, importer responsibility, broker handoff, and entry records.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control plan for China manufacturing',
      note: 'Build approved references, change control, qualified testing, inspections, corrections, and payment holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Match warnings, tracking, registration materials, claims, SKU and lot identity, retail packs, cartons, and correction evidence.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Define the photos, tools, measurements, traceability, mismatches, affected quantities, decisions, and limits the report should show.',
    },
    {
      href: '/qc-inspection-china',
      label: 'QC inspection in China',
      note: 'Compare buyer-approved product, packaging, quantity, measurements, and evidence while the actual goods are still accessible.',
    },
    {
      href: '/before-balance-payment-qc-china',
      label: 'Inspection before balance payment',
      note: 'Keep correction and payment leverage until cleared and unresolved shipment scope is visible.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, reports, testing, packaging, payment, pickup, and supplier decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
}

export function makeBabyLoungerChecksChinaArticleMetadata(): Metadata {
  const article = babyLoungerChecksChinaArticle

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

export function makeBabyLoungerChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(babyLoungerChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Baby lounger pre-shipment release checklist',
      itemListElement: babyLoungerChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
