import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  mattressFlammabilityChecksChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
  verifyChinaLabTestReportArticleHref,
} from '@/lib/site-links'

type SourceLink = { href: string; label: string }
type ArticleSection = {
  bullets?: string[]
  citations?: SourceLink[]
  id: string
  paragraphs: string[]
  title: string
}
type CheckGroup = { items: string[]; title: string }
type DecisionRow = { buyerDecision: string; evidence: string; riskNode: string }
type RelatedLink = { href: string; label: string; note: string }
type SourceNote = SourceLink & { note: string }

const cpscTrwzinyCase =
  'https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-TRWZINY-12-inch-Mattresses-Immediately-Due-to-Risk-of-Serious-Injury-or-Death-from-Fire-Violate-Mandatory-Standard-for-Mattress-Sets'
const cpscEvlwzlCase =
  'https://www.cpsc.gov/Recalls/2026/EVLWZL-and-Gunugu-Mattresses-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Fire-Hazard-Violates-Mandatory-Standard-for-Mattress-Flammability'
const cpscMattressGuidance =
  'https://www.cpsc.gov/FAQ/Mattresses-Mattress-Pads-Mattress-Sets'
const ecfrPart1632 =
  'https://www.ecfr.gov/current/title-16/chapter-II/subchapter-D/part-1632'
const ecfrPart1633 =
  'https://www.ecfr.gov/current/title-16/chapter-II/subchapter-D/part-1633'
const mofcomEvlwzlCoverage =
  'https://chinawto.mofcom.gov.cn/article/jsbl/alzs/202605/20260503628182.shtml'

export const mattressFlammabilityChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: mattressFlammabilityChecksChinaArticleHref,
  title: 'Mattress Flammability Checks Before Shipping from China',
  metaTitle: 'Mattress Flammability Checks Before China Shipment',
  metaDescription:
    'Check mattress prototypes, 16 CFR 1632 and 1633 evidence, materials, labels, production lots, compressed packs, and release decisions before China shipment.',
  publishedDate: 'August 13, 2026',
  publishedDateIso: '2026-08-13T03:25:45+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Mattress Flammability Checks Before Shipping from China',
  eyebrow: 'Prototype evidence - material control - shipment release',
  image: {
    alt: 'Neutral AI illustration of a generic mattress cutaway, anonymous material samples, blank sewn label, measuring tools, checklist, and export cartons for a China-side evidence review',
    height: 900,
    src: '/images/mattress-flammability-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/mattress-flammability-checks-china.webp', width: 1600 },
    { height: 900, src: '/images/mattress-flammability-checks-china-4x3.webp', width: 1200 },
    { height: 1000, src: '/images/mattress-flammability-checks-china-1x1.webp', width: 1000 },
  ],
  intro:
    'Before releasing balance payment or pickup for mattresses made in China, connect each finished model and production lot to its qualified prototype, flammability records, current material build, permanent label, General Certificate of Conformity data, compressed package, and carton map. Hold the shipment when the evidence and physical goods do not describe the same controlled version.',
  answerSummary:
    'Use three separate gates: importer-led scope and rule review, qualified 16 CFR parts 1632 and 1633 evidence for the relevant prototype, and buyer-side comparison of sampled production with approved references. A routine inspection can document identity, dimensions, visible materials, workmanship, labels, pack-out, and traceability. It cannot reproduce smoldering or open-flame tests, qualify a prototype, certify compliance, or guarantee fire safety.',
  primaryCta: { label: 'Check Mattresses Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side mattress evidence and quality check before shipment.

Destination, importer, sales channels, exact models/SKUs, sizes, and intended sale configuration:
Manufacturer, factory, production dates, lots, quantities, and carton map:
Qualified prototype IDs, 16 CFR 1632/1633 records, reports, GCC data, and model coverage:
Approved ticking, barrier, foam/core, tape edge, quilting, foundation, bill of materials, and change log:
Permanent label artwork, compressed-pack identity, cartons, and packing list:
Known substitutions, test failures, corrections, or evidence concerns:
Balance-payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#exact-prototype', label: 'Prototype and model scope' },
    { href: '#flammability-evidence', label: 'Flammability evidence' },
    { href: '#material-control', label: 'Materials and changes' },
    { href: '#physical-checks', label: 'Physical shipment checks' },
    { href: '#labels-records', label: 'Labels and records' },
    { href: '#inspection-limits', label: 'Inspection limits' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze the destination, importer, exact model, size, thickness, sale with or without a foundation, manufacturer, factory, production date, lot, compressed-pack version, label, and carton identity',
    'Have the importer and qualified advisers confirm product scope and the current requirements that apply to the exact mattress, mattress pad, or mattress set',
    'Map complete part 1632 smoldering-ignition records and part 1633 open-flame records to the relevant prototype, tested build, sample identity, laboratory, dates, results, and limitations',
    'Compare the approved ticking, quilting, tape edge, barrier, upholstery, foam or spring core, adhesive, thread, foundation, assembly method, and permitted substitutions with current production',
    'Check sampled finished goods for model, dimensions, thickness, mass-production construction, seams, tape edge, quilting, workmanship, odors or contamination specified by the buyer, and visible damage',
    'Check the permanent part 1633 label, manufacture month and year, model and prototype IDs, manufacturer and importer details, sale configuration statement, GCC data, package, carton marks, quantities, and packing list',
    'Hold mixed lots, unexplained component substitutions, missing or mismatched prototype records, incomplete labels, failed samples, uncontrolled rework, or cartons that cannot be tied to a named lot',
    'Release only named models, production lots, quantities, packages, and cartons after documented correction, qualified disposition, and repeat inspection or testing where required',
  ],
  checkGroups: [
    {
      title: 'Identity and prototype scope',
      items: [
        'Destination, importer, model, size, thickness, foundation configuration, manufacturer, factory, prototype ID, production date, lot, quantity, and approved changes are controlled',
        'PO, approved sample, specification, bill of materials, reports, prototype records, GCC data, label, package, listing, packing list, and cartons describe one saleable version',
      ],
    },
    {
      title: 'Qualified flammability evidence',
      items: [
        'Complete part 1632 and part 1633 records identify the tested prototype, construction, sample, laboratory, test dates, methods, results, photographs, and applicable limitations',
        'Qualified-prototype, confirmed-prototype, pooling, manufacturing, quality-assurance, substitution, failure-disposition, and retention records are available where applicable',
      ],
    },
    {
      title: 'Production and pack-out',
      items: [
        'Sampled units match approved ticking, quilt, tape edge, barrier, upholstery, core, adhesive, thread, foundation, assembly, dimensions, workmanship, and visible-condition limits',
        'Permanent label identity, manufacture date, model and prototype IDs, certification statement, sale configuration, compressed pack, carton quantity, marks, and packing list align',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, lot and carton map, supplier change, controlled rework, qualified retest decision, revised records, and repeat inspection remain traceable',
        'Cleared and unresolved models, dates, lots, packages, and cartons stay separated; final release names the exact scope and every open condition',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why mattress flammability evidence matters now',
      paragraphs: [
        'On July 23, 2026, the U.S. Consumer Product Safety Commission warned consumers to stop using about 1,425 TRWZINY 12-inch queen mattresses sold on Amazon. CPSC said the mattresses violated the mandatory flammability standard for mattress sets and posed a fire risk. The record identifies a China retailer, a January-to-April 2026 sales period, and stacked side-seam labels.',
        'This was not an isolated 2026 record. On May 7, CPSC recalled about 670 EVLWZL and Gunugu 10- and 12-inch compressed mattresses sold on Amazon, Walmart, and Wayfair because they violated the mandatory mattress flammability standard. China’s Ministry of Commerce WTO/TBT portal separately reported that recall and the China origin of the products.',
        'The records involve different companies, models, channels, quantities, remedies, and evidence. They do not prove every mattress, supplier, factory, or lot has the same problem. They show why a marketplace listing, generic “fireproof” claim, law label, supplier declaration, or report cover cannot replace exact-prototype evidence and controlled production before shipment.',
      ],
      bullets: [
        'A supplier statement that a mattress is “CPSC,” “16 CFR,” or “fire retardant” compliant needs complete source evidence and precise prototype scope',
        'Changes to ticking, quilt build, barrier, foam, batting, core, tape edge, adhesive, thread, assembly, foundation, supplier, or factory can change the evidence question',
        'A visual check, lighter demonstration, material certificate, or burn of a loose swatch does not reproduce the prescribed mattress test program',
        'Correction leverage is strongest before final payment and pickup, while affected lots can still be held, reviewed, tested, reworked, relabeled, repacked, or rejected',
      ],
      citations: [
        { href: cpscTrwzinyCase, label: 'CPSC TRWZINY mattress warning' },
        { href: cpscEvlwzlCase, label: 'CPSC EVLWZL and Gunugu mattress recall' },
        { href: mofcomEvlwzlCoverage, label: 'China MOFCOM WTO/TBT recall coverage' },
      ],
    },
    {
      id: 'exact-prototype',
      title: 'Freeze the exact prototype, sale configuration, factory, and lot',
      paragraphs: [
        'Start with classification and the sale configuration. CPSC guidance explains that mattresses generally fall under both 16 CFR part 1632 and part 1633, while definitions and narrow exclusions depend on the product. A mattress intended for sale with a foundation and one intended for sale without a foundation can require distinct part 1633 prototype treatment.',
        'Build one controlled model record connecting the marketplace SKU to the manufacturer, factory, model, size, thickness, intended foundation, prototype IDs, specifications, bill of materials, construction drawings, sample photos, label, compressed pack, production date, lot, and cartons. Size alone may be treated differently from a construction change, but that decision belongs to the responsible compliance parties using the rule and records.',
        'Keep every change visible. If the factory substitutes a textile, fire barrier, foam, batting, core, adhesive, tape edge, thread, quilting pattern, foundation, assembly method, component supplier, subcontractor, or production site after testing, hold the affected production until qualified parties document whether the original prototype still applies or new qualification is needed.',
      ],
      bullets: [
        'Control approved specifications, layer build, component trade names or controlled identities, densities and dimensions, drawings, samples, labels, package artwork, and change log',
        'Identify the first affected date, lot, quantity, package, and carton range for every approved or suspected change',
        'Photograph repeatable identity points on the mattress, permanent label, compressed package, inner protection, and cartons',
        'Reject unexplained model aliases, prototype-family claims without rationale, or report photographs and construction details that do not match production',
      ],
      citations: [
        { href: cpscMattressGuidance, label: 'CPSC mattress scope and prototype guidance' },
        { href: ecfrPart1633, label: 'Current 16 CFR part 1633 text' },
      ],
    },
    {
      id: 'flammability-evidence',
      title: 'What should qualified flammability evidence connect?',
      paragraphs: [
        'CPSC’s current guidance separates two federal standards. Part 1632 addresses smoldering ignition and uses lighted cigarettes on defined mattress surface locations. Part 1633 addresses open-flame performance during a 30-minute test and includes peak and early total heat-release criteria. The applicable evidence must map to the actual product scope rather than to a similar mattress or a loose material alone.',
        'Review the complete records, not only a pass page. Capture the laboratory and responsible parties, prototype identification, sample construction, photographs, receipt and test dates, conditions, procedures, individual results, deviations, failures and disposition, substitutions, pooling or confirmation where used, manufacturing lots, quality-assurance controls, and record-retention owner.',
        'The importer and qualified product-safety specialists should select the controlling requirements, prototype route, laboratory, sample plan, certificate basis, and acceptance decision. A General Certificate of Conformity should identify the applicable rules and supporting records for the imported product; a certificate does not replace those records or prove that production stayed unchanged.',
      ],
      bullets: [
        'Confirm reports with the claimed laboratory or official verification route where one exists',
        'Match tested ticking, seams, quilt, tape edge, barrier, upholstery, foam or spring core, adhesive, thread, foundation, assembly, labels, and identifiers to the approved build and current lot',
        'Escalate cropped files, edited results, inconsistent dates, missing construction details, unclear sample identity, unsupported grouping, or reports issued to another product',
        'Keep qualified prescribed testing separate from routine buyer-side inspection, supplier demonstrations, and material-only screening',
      ],
      citations: [
        { href: cpscMattressGuidance, label: 'CPSC mattress flammability FAQ' },
        { href: ecfrPart1632, label: 'Current 16 CFR part 1632 text' },
        { href: ecfrPart1633, label: 'Current 16 CFR part 1633 text' },
        { href: verifyChinaLabTestReportArticleHref, label: 'Huang Sourcing laboratory report verification guide' },
      ],
    },
    {
      id: 'material-control',
      title: 'Control production materials and substitutions by lot',
      paragraphs: [
        'The buyer needs a production evidence chain, not a one-time sample story. Compare approved component identities and construction with purchase records, incoming records, issue-to-line records, work instructions, in-process checks, finished-lot records, and retained samples where those controls are part of the agreed quality plan.',
        'For part 1632, the regulation and CPSC guidance address prototype construction and controlled routes for certain ticking or tape-edge substitutions. Part 1633 defines a prototype by materials, components, design, and assembly and includes records for qualified and confirmed prototypes and quality assurance. Do not infer that a cheaper “equivalent” material is allowed merely because color, feel, or thickness looks similar.',
        'When a substitution appears, identify the exact old and new material, supplier, specification, first production date, affected lot and quantity, prototype impact, open records, and physical carton scope. Segregate affected goods until the responsible parties issue a documented disposition.',
      ],
      bullets: [
        'Tie receiving labels and internal material codes to the approved bill of materials without relying on an unverifiable supplier nickname',
        'Check that barrier continuity, seams, quilting, tape edge, closures, and assembly match approved visual references in sampled finished goods',
        'Record mixed materials, missing layers, unusual seams, inconsistent thickness, contamination, wetness, damage, or rework specified as buyer inspection points',
        'Treat chemistry, composition, flammability, durability, and hidden internal construction as laboratory or controlled-production questions beyond ordinary visual inspection',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled mass production with approved references while the goods remain accessible. The useful output is a traceable record of model and lot identity, dimensions, visible construction at buyer-approved access points, seams, quilting, tape edge, workmanship, permanent labels, compressed packs, quantities, cartons, defects, mismatches, and affected scope.',
        'Measure the approved dimensions and thickness after the agreed conditioning or expansion time where applicable. Check cover and seam quality, tape edge, quilting pattern, handles if fitted, zipper or closure restrictions, label attachment and legibility, visible contamination or moisture, specified odor limits, compression damage, retail-pack protection, carton condition, barcode, and carton marks against controlled criteria.',
        'Do not cut saleable mattresses, ignite components, or improvise a flame test during routine inspection. Any destructive construction verification, sample disassembly, chemical screen, or prescribed flammability testing needs an approved method, selected samples, safe facility, responsible party, and documented disposition.',
      ],
      bullets: [
        'Use buyer-approved sampling, defect classes, conditioning time, dimensions, tolerances, visual references, tools, handling limits, stop rules, and photo requirements',
        'Check identity before and after unboxing or expansion so every finding remains tied to a model, production date, lot, package, and carton',
        'Quantify mixed, undersized, damaged, wet, contaminated, poorly sewn, mislabeled, unreadable, under-expanded, over-compressed, or poorly packed units',
        'Keep smoldering, open-flame, heat-release, chemical, material-composition, durability, and hidden-build conclusions outside routine inspection',
      ],
    },
    {
      id: 'labels-records',
      title: 'Connect the permanent label, GCC data, package, and cartons',
      paragraphs: [
        'CPSC guidance says each mattress set subject to part 1633 must bear a permanent, conspicuous, legible English label with specified manufacturer and importer details, manufacture month and year, model identification, prototype identification, certification statement, and whether it is intended for sale alone or with a foundation. The responsible parties should verify the exact current label format and any other federal, state, destination, marketplace, or retailer requirements.',
        'Match the sewn label to the prototype records, GCC data, PO, approved specification, marketplace listing, compressed package, barcode, packing list, and carton. A correct-looking label cannot repair a failed prototype, unsupported substitution, missing record, or production build that differs from the qualified design.',
        'Photograph labels and identifiers in context and preserve the carton map. If different models, prototype IDs, dates, lots, or sale configurations appear inside one shipment, hold and segregate them until the buyer and responsible compliance parties resolve the exact scope.',
      ],
      bullets: [
        'Keep product and package identifiers linked to manufacturer, factory, production date, lot, quantity, and carton range',
        'Do not let the listing, mattress, label, reports, prototype records, GCC data, package, packing list, and carton describe different products or parties',
        'Hold unreadable, removable, missing, mixed, or contradictory identity and certification information until corrected and rechecked',
        'Use the legal and compliance team’s approved label artwork; the inspection compares implementation and does not author or approve regulatory content',
      ],
      citations: [
        { href: cpscMattressGuidance, label: 'CPSC mattress labeling and recordkeeping guidance' },
        { href: ecfrPart1633, label: '16 CFR part 1633 labeling and records' },
      ],
    },
    {
      id: 'inspection-limits',
      title: 'Where does inspection stop and qualified testing begin?',
      paragraphs: [
        'Part 1632 and part 1633 testing uses defined samples, conditioning, ignition sources, equipment, instrumentation, locations, timing, procedures, safety controls, measurements, acceptance criteria, and competent interpretation. Those tasks belong with qualified laboratories and responsible manufacturers, importers, and compliance advisers.',
        'An inspector should not use a lighter, cigarette, torch, improvised burner, loose swatch, or factory demonstration to claim mattress compliance. A material document can support traceability, but it does not by itself establish the performance of the assembled mattress or mattress set.',
        'A passed sampled inspection supports a buyer decision only within its stated scope. It cannot cure missing evidence, validate an unapproved prototype change, prove every unsampled unit, certify compliance, or promise customs, marketplace, recall, or fire-safety outcomes.',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Product and prototype identity',
      evidence: 'Destination, importer, exact model, size, thickness, sale configuration, manufacturer, factory, prototype IDs, production dates, lots, packages, and approved changes align.',
      buyerDecision: 'Hold aliases, mixed lots, unclear scope, or unexplained construction changes until qualified review and traceable correction.',
    },
    {
      riskNode: 'Qualified flammability evidence',
      evidence: 'Complete part 1632 and part 1633 records map the tested build and prototypes to current production, methods, results, photographs, substitutions, quality controls, and limitations.',
      buyerDecision: 'Hold missing, partial, mismatched, changed, failed, or unverifiable evidence; route qualification and retest decisions to responsible parties.',
    },
    {
      riskNode: 'Finished-goods comparison',
      evidence: 'Sampled production matches approved dimensions, visible construction, seams, quilting, tape edge, labels, packages, workmanship, quantities, and carton requirements.',
      buyerDecision: 'Hold affected models and cartons for quantified correction, engineering or compliance disposition, repeat inspection, or qualified testing.',
    },
    {
      riskNode: 'Traceability and release',
      evidence: 'Permanent labels, prototype records, GCC data, production lots, compressed packs, packing list, cartons, and correction evidence stay linked.',
      buyerDecision: 'Release only named models, dates, lots, quantities, packages, and cartons with documented open conditions and importer approval.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'July 23, 2026 CPSC product safety warning for TRWZINY 12-inch queen mattresses, including the stated flammability violation, China retailer, sales period, quantity, label location, and consumer action',
    'Separate May 7, 2026 CPSC recall for EVLWZL and Gunugu compressed mattresses, including sizes, platforms, China retailers, manufacture, quantity, violation, and repair remedy',
    'Current CPSC mattress guidance and current eCFR text for the purpose, scope, prototypes, test programs, substitutions, records, labels, and limits under 16 CFR parts 1632 and 1633',
    'Independent China Ministry of Commerce WTO/TBT coverage of the May 2026 U.S. recall of China-made EVLWZL and Gunugu mattresses',
    'Buyer-side sourcing analysis that keeps laboratory, regulatory, manufacturer, importer, inspection, correction, and release responsibilities separate',
  ],
  whatToSend: [
    'Destination markets, importer details, sales channels, exact models and SKUs, sizes, thicknesses, intended foundation configurations, manufacturer and factory names, production dates, lots, quantities, and carton map',
    'Purchase order, approved specification and sample, construction drawings, full bill of materials, controlled component identities, dimensions, tolerances, assembly methods, packaging references, and change log',
    'Complete part 1632 and part 1633 reports and records, laboratory verification details, tested-sample photographs, prototype or pooling rationale, GCC data, and unresolved technical questions',
    'Permanent label artwork, model and prototype IDs, manufacture-date rules, certification and sale-configuration statements, compressed-pack artwork, barcode files, listing, carton marks, and packing list',
    'Approved sampling plan, expansion or conditioning instructions, defect classes, inspection methods, safe handling limits, stop rules, photo list, correction evidence, and decision owner',
    'Balance-payment and pickup deadlines, hold authority, factory contacts, affected-lot isolation plan, rework or retest route, and exact conditions required for release',
  ],
  redFlags: [
    'The reports or records name a different prototype, factory, ticking, barrier, foam or core, tape edge, quilt, assembly, foundation, label, or production version',
    'The supplier provides only a certificate image, report cover, marketplace badge, loose material sheet, or generic compliance statement',
    'Production changed a fire-performance-relevant material, component, supplier, factory, or assembly method without qualified disposition',
    'Mattresses mix manufacture dates, lots, labels, prototype IDs, sale configurations, packages, or construction inside the same shipment',
    'Sampled units have missing layers at approved access points, uncontrolled rework, wetness, contamination, seam failures, compression damage, or label mismatches',
    'The factory proposes a lighter, swatch burn, improvised flame, or visual appearance as proof of compliance',
    'Failed, corrected, or substituted units cannot be mapped to affected quantities, lots, packages, and cartons',
  ],
  scopeLimits: [
    'A routine China-side inspection does not reproduce part 1632 or part 1633 tests and is not a compliance certification',
    'Sampling does not prove every unit outside the inspected sample or guarantee fire performance or future safe use',
    'Document comparison cannot authenticate every statement without source confirmation and qualified review',
    'Visual checks cannot validate heat release, ignition resistance, chemical composition, hidden layers, internal continuity, or long-term durability',
    'Huang Sourcing does not decide legal classification, qualify a prototype, issue a GCC, approve a laboratory, or guarantee customs or marketplace acceptance',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China laboratory report',
      note: 'Check the issuer, scope, sample identity, photographs, factory, dates, methods, results, limitations, and source.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'China manufacturing QC plan',
      note: 'Build approved materials, prototype evidence, change control, qualified testing, inspections, corrections, and holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks',
      note: 'Match permanent mattress identity, prototype IDs, manufacture date, compressed package, barcode, carton marks, quantities, and files.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report',
      note: 'Define photos, sampling, measurements, lot traceability, defects, affected quantity, decisions, and stated scope limits.',
    },
    {
      href: '/qc-inspection-china',
      label: 'QC inspection in China',
      note: 'Compare buyer-approved construction, labels, packages, quantities, and evidence while the actual goods remain accessible.',
    },
    {
      href: '/before-balance-payment-qc-china',
      label: 'Before balance-payment check',
      note: 'Hold, correct, re-inspect, or release a named lot before money and goods move.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, testing, packaging, payment, pickup, supplier, and shipment decisions.',
    },
  ] satisfies RelatedLink[],
  sourceNotes: [
    {
      href: cpscTrwzinyCase,
      label: 'U.S. CPSC - TRWZINY 12-inch mattress warning',
      note: 'Primary public record dated July 23, 2026 describing the mandatory flammability violation, China retailer, label details, sales period, quantity, and consumer action.',
    },
    {
      href: cpscEvlwzlCase,
      label: 'U.S. CPSC - EVLWZL and Gunugu mattress recall',
      note: 'Separate primary record dated May 7, 2026 describing the violation, compressed products, sizes, platforms, China companies, manufacture, quantity, and repair remedy.',
    },
    {
      href: cpscMattressGuidance,
      label: 'U.S. CPSC - Mattresses, Mattress Pads, and Mattress Sets FAQ',
      note: 'Current official guidance on scope, parts 1632 and 1633, prototypes, testing, records, labeling, and narrow exemptions.',
    },
    {
      href: ecfrPart1632,
      label: 'eCFR - 16 CFR part 1632',
      note: 'Current authoritative regulatory text for smoldering-ignition scope, prototype testing, construction, substitutions, procedures, criteria, and records.',
    },
    {
      href: ecfrPart1633,
      label: 'eCFR - 16 CFR part 1633',
      note: 'Current authoritative regulatory text for open-flame performance, prototype controls, testing, quality assurance, records, and labels.',
    },
    {
      href: mofcomEvlwzlCoverage,
      label: 'China MOFCOM WTO/TBT - U.S. recall of China-made mattresses',
      note: 'Independent May 2026 government trade-measures coverage identifying the EVLWZL and Gunugu products, China origin, and U.S. flammability issue.',
    },
  ] satisfies SourceNote[],
}

export function makeMattressFlammabilityChecksChinaArticleMetadata(): Metadata {
  const article = mattressFlammabilityChecksChinaArticle

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

export function makeMattressFlammabilityChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(mattressFlammabilityChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Mattress pre-shipment release checklist',
      itemListElement: mattressFlammabilityChecksChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
