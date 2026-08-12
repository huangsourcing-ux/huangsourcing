import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  babyLoungerChecksChinaArticleHref,
  babyWalkerChecksChinaArticleHref,
  buyerSideInspectionReportArticleHref,
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

const cpscWnttmtCase =
  'https://www.cpsc.gov/Recalls/2026/Wnttmt-Baby-Walkers-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Fall-and-Entrapment-Hazards-Violate-Mandatory-Standard-for-Infant-Walkers-Sold-on-Amazon-by-WURUI-BABY'
const cpscCiuseiCase =
  'https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-CiuseiAnx-Infant-Walkers-Immediately-Due-to-Risk-of-Serious-Injury-or-Death-from-Fall-Hazard-Violate-Mandatory-Standard-for-Infant-Walkers'
const cpscInfantWalkerGuidance =
  'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Infant-Walkers'
const cpscCertificateGuidance =
  'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Certificates'
const healthDayGoregentCoverage =
  'https://www.drugs.com/news/baby-walkers-sold-amazon-recalled-over-fall-risk-129343.html'

export const babyWalkerChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: babyWalkerChecksChinaArticleHref,
  title: 'Baby Walker Checks Before Shipping from China',
  metaTitle: 'Baby Walker Safety Checks Before China Shipment',
  metaDescription:
    'Check baby walker models, step-edge and stability evidence, labels, registration materials, production lots, cartons, and release decisions before China shipment.',
  publishedDate: 'August 12, 2026',
  publishedDateIso: '2026-08-12T08:25:14+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Baby Walker Checks Before Shipping from China',
  eyebrow: 'Performance evidence - finished-lot checks - shipment release',
  image: {
    alt: 'Neutral AI illustration of an unbranded infant walker beside a doorway gauge, step-edge fixture, ruler, blank checklist, and export cartons on a quality-control bench',
    height: 900,
    src: '/images/baby-walker-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/baby-walker-checks-china.webp', width: 1600 },
    { height: 900, src: '/images/baby-walker-checks-china-4x3.webp', width: 1200 },
    { height: 1000, src: '/images/baby-walker-checks-china-1x1.webp', width: 1000 },
  ],
  intro:
    'Before releasing balance payment or pickup for infant walkers made in China, freeze the exact model, manufacturer, factory, production date, batch, construction, test evidence, Children’s Product Certificate data, labels, registration materials, retail pack, and carton map. Hold the shipment when the tested sample and finished goods cannot be tied to the same controlled version.',
  answerSummary:
    'Use three separate gates: importer-led classification and requirement review, qualified performance evidence for the exact walker, and buyer-side comparison of sampled production with approved references. A routine inspection can document identity, assembly, visible construction, workmanship, labels, quantities, and pack-out. It cannot reproduce the mandatory stability, structural-integrity, step-edge, parking, or entrapment tests, certify compliance, or guarantee safe use.',
  primaryCta: { label: 'Check Baby Walkers Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side baby walker evidence and quality check before shipment.

Destination, importer, sales channel, exact models/SKUs, and intended age/use:
Manufacturer, factory, production dates, batches, quantity, and carton map:
Approved sample, drawings, bill of materials, dimensions, and tolerances:
Applicable requirements, qualified reports, sample photos, and model coverage:
CPC/eFiling data, labels, registration materials, instructions, and packaging:
Known changes, test failures, incidents, defects, or evidence concerns:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#exact-scope', label: 'Exact product scope' },
    { href: '#performance-evidence', label: 'Performance evidence' },
    { href: '#physical-checks', label: 'Physical shipment checks' },
    { href: '#labels-registration', label: 'Labels and registration' },
    { href: '#inspection-limits', label: 'Inspection limits' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze the destination, importer, intended age and use, model, factory, construction, wheel and brake-pad design, seat and leg-opening geometry, production date, batch, labels, registration materials, retail pack, and carton version',
    'Have the importer and qualified advisers identify the applicable durable-infant-product, toy-accessory, chemical, labeling, certification, registration, and import-filing requirements',
    'Map complete qualified reports to the exact walker, manufacturer, factory, model, configuration, materials, sample photos, test dates, methods, results, limitations, and current production version',
    'Confirm that qualified evidence addresses the required performance topics, including stability, structural integrity, prevention of falls down steps, parking devices where fitted, and relevant opening or entrapment requirements',
    'Compare sampled goods with approved drawings and references for identity, dimensions, assembly, locks, wheel and brake components, openings, fasteners, edges, accessories, workmanship, and visible condition',
    'Check permanent product identification, tracking, warnings, instructions, registration form or method, retail-pack identity, barcode, carton marks, quantities, and packing list',
    'Hold mixed models, unexplained substitutions, missing or mismatched reports, incomplete certificate data, failed samples, unapproved rework, or cartons that cannot be tied to a named production batch',
    'Release only named models, production dates, batches, quantities, and cartons after documented correction, qualified disposition, and repeat inspection or testing where required',
  ],
  checkGroups: [
    {
      title: 'Identity and product scope',
      items: [
        'Destination, importer, model, manufacturer, factory, construction, intended age and use, production date, batch, quantity, sales channel, and approved changes are controlled',
        'PO, approved sample, drawings, bill of materials, reports, certificate data, labels, registration materials, package, listing, and cartons describe one production version',
      ],
    },
    {
      title: 'Qualified performance evidence',
      items: [
        'Complete reports identify the tested sample and address applicable stability, structural-integrity, step-edge, parking, opening, latching, and accessory requirements selected by qualified parties',
        'Laboratory identity, acceptance scope where relevant, dates, methods, results, sample photos, model coverage, limitations, and relationship to current production are reviewable',
      ],
    },
    {
      title: 'Finished goods and pack-out',
      items: [
        'Sampled units match approved dimensions, assembly, locks, height settings, seat, openings, frame, base, wheels, brake parts, fasteners, edges, accessories, markings, and workmanship limits',
        'Tracking identity, warnings, instructions, registration materials, barcode, protective retail pack, carton quantity, carton marks, and packing list are consistent and readable',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, carton map, supplier change, controlled rework, qualified retest decision, revised documents, and repeat inspection remain traceable',
        'Cleared and unresolved models, dates, batches, and cartons stay separated; final release names the exact scope and every open condition',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why baby walker release evidence matters now',
      paragraphs: [
        'On August 6, 2026, CPSC announced a recall of about 1,310 Wnttmt infant walkers sold on Amazon. The agency said the walkers could pass through a standard doorway, fail to stop at the edge of a step, and allow a child to slip into an entrapment position through the leg openings. The public record identifies a China retailer, China manufacture, and a production-batch label under the seat.',
        'The same day, CPSC separately warned consumers to stop using about 544 CiuseiAnx infant walkers sold on Amazon. CPSC reported seven fall incidents, with six involving head injuries and/or hospitalizations, and said the China retailer had not agreed to an acceptable recall. Earlier 2026 recalls and independent HealthDay coverage document the same step-edge failure pattern in additional China-origin products.',
        'These records involve different sellers, models, batches, remedies, and evidence. They do not prove every baby walker, supplier, factory, or lot has the same defect. They show why marketplace claims, appearance, or a factory demonstration should not replace exact-model performance evidence and batch control before shipment.',
      ],
      bullets: [
        'A supplier statement that a walker is “CPSC,” “ASTM,” or “CPSIA” compliant needs complete source evidence and precise model scope',
        'Changes to frame geometry, base width, wheels, brake pads, seat, leg openings, height settings, locks, toys, fasteners, factory, or materials can change the evidence question',
        'A smooth roll on a factory floor does not reproduce the mandatory performance tests or prove that the walker will stop at a step edge',
        'Correction leverage is strongest before final payment and pickup, while batches and cartons can still be held, tested, reworked, relabeled, repacked, or rejected',
      ],
      citations: [
        { href: cpscWnttmtCase, label: 'CPSC Wnttmt Baby Walkers recall' },
        { href: cpscCiuseiCase, label: 'CPSC CiuseiAnx Infant Walkers warning' },
        { href: healthDayGoregentCoverage, label: 'HealthDay report on the Goregent recall' },
      ],
    },
    {
      id: 'exact-scope',
      title: 'Freeze the exact walker, construction, factory, and batch',
      paragraphs: [
        'Build one controlled model record connecting the marketplace SKU to the manufacturer, factory, drawings, bill of materials, frame and base dimensions, seat and leg openings, wheel assemblies, brake or parking parts, locks, height settings, accessories, warnings, packaging, production date, and batch. A shared shell shape or seller listing does not prove that two walkers use the same structure or safety-critical components.',
        'Keep every change visible. If the factory substitutes tubing, joints, wheels, brake pads, seat fabric, fasteners, plastics, locks, toys, labels, packaging, subcontractor, tooling, or factory after testing, hold affected production until qualified parties decide whether document review, new samples, testing, or certificate changes are required.',
        'Connect incoming material and component batches to finished walkers and cartons when the approved control plan requires it. Component records can support an investigation, but they do not automatically prove performance of the assembled finished product.',
      ],
      bullets: [
        'Control approved drawings, specifications, tolerances, bill of materials, sample photos, packaging artwork, and change log',
        'Identify the first affected date, batch, quantity, and carton range for every approved change',
        'Photograph repeatable identity points under the seat, on the frame and base, inside the pack, and on cartons',
        'Reject unexplained model aliases, report family claims without rationale, or sample photos that do not match production',
      ],
    },
    {
      id: 'performance-evidence',
      title: 'What should qualified performance evidence connect?',
      paragraphs: [
        'CPSC business guidance says the U.S. infant-walker rule is codified at 16 CFR part 1216 and incorporates the Commission-accepted ASTM F977 version with CPSC modifications. The listed requirement areas include stability, structural integrity, prevention of falls down steps, parking devices where applicable, openings, latching or locking mechanisms, labeling, protective components, and applicable toy-accessory requirements.',
        'The importer and qualified product-safety specialists should select the controlling destination requirements, standards, methods, laboratory, sample plan, and acceptance criteria. Review the full report rather than a cover page: record the laboratory, acceptance or accreditation scope where relevant, client, manufacturer, factory, exact model and configuration, sample photos, receipt and test dates, methods, results, deviations, and limitations.',
        'For U.S. children’s products, CPSC guidance states that manufacturers and importers must issue a Children’s Product Certificate based on appropriate testing and identifies 16 CFR part 1216 as the infant-walker citation. Certificate data and the underlying reports should describe current production; neither a logo nor a generic certificate image establishes model coverage.',
      ],
      bullets: [
        'Confirm reports with the claimed laboratory or official database where a verification route exists',
        'Match sample photos, geometry, wheel count, height settings, seat, openings, locks, accessories, materials, labels, and identifiers to the approved reference and current lot',
        'Escalate cropped files, edited results, inconsistent dates, missing photos, unclear methods, unapproved family coverage, or reports issued to another product',
        'Keep qualified prescribed testing separate from routine buyer-side inspection and supplier demonstrations',
      ],
      citations: [
        { href: cpscInfantWalkerGuidance, label: 'CPSC Infant Walkers Business Guidance' },
        { href: verifyChinaLabTestReportArticleHref, label: 'Huang Sourcing laboratory report verification guide' },
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled production with approved references while the goods remain accessible. The useful output is a traceable record of model and batch identity, visible construction, dimensions, assembly, locks, components, workmanship, labels, packaging, quantities, defects, mismatches, and affected carton scope.',
        'Inspect the frame, base, seat attachment, leg openings, wheel and brake-pad presence, height-setting locks, folding or latching points, fasteners, protective components, exposed edges, accessory attachment, surface condition, markings, instructions, and retail-pack protection against buyer-approved criteria. Record the sampled unit, tool or observation, result, photo, batch, and carton.',
        'Stop and isolate a unit that collapses, unlocks, sheds a component, exposes a sharp edge, has damaged structure, omits a specified brake part, or differs materially from the approved construction. Preserve the evidence and affected quantity for qualified investigation rather than improvising a destructive or safety-critical test on saleable stock.',
      ],
      bullets: [
        'Use buyer-approved sampling, defect classes, dimensions, visual references, tools, handling limits, stop rules, and photo requirements',
        'Check identity before and after assembly or adjustment so findings remain tied to a model and batch',
        'Quantify mixed, incomplete, damaged, unstable, unlocked, misassembled, sharp, cracked, mislabeled, unreadable, or poorly packed units',
        'Keep prescribed stability, structural, impact, cyclic, step-edge, opening, entrapment, chemical, and toy-accessory testing outside ordinary inspection',
      ],
    },
    {
      id: 'labels-registration',
      title: 'Connect tracking, registration, instructions, and cartons',
      paragraphs: [
        'CPSC guidance says durable infant or toddler products must carry permanent English identification including the domestic manufacturer or importer, contact information, model name or number, and manufacture date, in addition to children’s-product tracking-label requirements. It also says product registration forms are required so consumers can be contacted about recalls or other safety information.',
        'Match the product, instruction manual, registration method, retail pack, online listing, test report, certificate data, packing list, and cartons. Warnings and instructions cannot repair an unsafe design, failed performance, missing component, or unsupported model scope.',
        'CPSC’s current certificate guidance states that revised certificate content and electronic filing took effect July 8, 2026 for general imported consumer products subject to certification. The importer should own the filing decision and verify the exact current requirements; an inspection can compare supplied identifiers and document versions but cannot file or approve the entry.',
      ],
      bullets: [
        'Keep product and package identifiers linked to manufacturer, factory, production date, batch, and carton map',
        'Do not let the listing, walker, instructions, registration materials, report, certificate data, and carton describe different models or parties',
        'Hold unreadable, removable, missing, mixed, or contradictory identity and tracking information until corrected and rechecked',
        'Photograph identity and traceability details in product, retail-pack, inner-pack, and carton context',
      ],
      citations: [
        { href: cpscInfantWalkerGuidance, label: 'CPSC infant-walker labeling and registration guidance' },
        { href: cpscCertificateGuidance, label: 'CPSC certificate and eFiling update' },
      ],
    },
    {
      id: 'inspection-limits',
      title: 'Where does inspection stop and qualified testing begin?',
      paragraphs: [
        'Mandatory stability, structural-integrity, step-edge, parking, opening, entrapment, latching, accessory, chemical, and other safety assessments use defined fixtures, surfaces, forces, conditioning, sample preparation, cycle counts, acceptance criteria, and competent interpretation. Those tasks belong with qualified laboratories and responsible compliance parties.',
        'An inspector should not use a child, place a walker near a real staircase, invent a drop or load, remove safety parts, or improvise forces and test fixtures. Any special or destructive test needs an approved method, controlled setup, selected samples, responsible party, and documented disposition.',
        'A passed sampled inspection supports a buyer decision only within its stated scope. It cannot cure missing evidence, validate unapproved design changes, prove every unsampled unit, certify compliance, or promise customs, marketplace, recall, or safe-use outcomes.',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Identity and product route',
      evidence: 'Destination, importer, intended age and use, exact model, manufacturer, factory, construction, production dates, batches, listing, and approved changes align.',
      buyerDecision: 'Hold aliases, mixed batches, unclear classification, or unexplained production changes until qualified review and traceable correction.',
    },
    {
      riskNode: 'Qualified performance evidence',
      evidence: 'Complete reports map the tested walker, model and configuration to applicable performance requirements, methods, results, photos, dates, limitations, and current production.',
      buyerDecision: 'Hold missing, partial, mismatched, expired-by-change, or unverifiable evidence; route test and retest decisions to qualified parties.',
    },
    {
      riskNode: 'Finished-goods comparison',
      evidence: 'Sampled production matches approved dimensions, assembly, seat, openings, frame, base, wheels, brake parts, locks, fasteners, accessories, workmanship, and visible condition.',
      buyerDecision: 'Hold affected models and cartons for quantified correction, engineering disposition, repeat inspection, or qualified testing.',
    },
    {
      riskNode: 'Tracking and release',
      evidence: 'Permanent identity, tracking, warnings, instructions, registration materials, certificate data, retail packs, quantities, cartons, and correction records stay linked.',
      buyerDecision: 'Release only named models, dates, batches, quantities, and cartons with documented open conditions and importer approval.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'August 6, 2026 CPSC recall record for Wnttmt infant walkers, including stated hazards, China retailer and manufacture, batch label, sales period, quantity, and remedy',
    'Separate August 6, 2026 CPSC warning for CiuseiAnx infant walkers, including stated step-edge failure, seven reported falls, injury scope, China retailer, sales period, and lack of an acceptable recall',
    'Current CPSC infant-walker business guidance covering the rule, accepted standard version, requirement categories, labeling, registration, and certification responsibilities',
    'Current CPSC certificate/eFiling guidance and independent HealthDay coverage of a different 2026 China-origin infant-walker recall',
    'Buyer-side sourcing analysis that keeps regulatory, laboratory, certificate, inspection, importer, and release responsibilities separate',
  ],
  whatToSend: [
    'Destination markets, importer details, sales channels, intended age/use, model and SKU list, manufacturer and factory names, production dates, batches, quantities, and carton map',
    'Purchase order, approved drawings and samples, bill of materials, dimensions, tolerances, assembly references, wheel and brake details, seat and leg-opening specifications, accessories, and change log',
    'Complete qualified reports, laboratory verification details, tested-sample photos, model or family-coverage rationale, certificate data, and unresolved technical questions',
    'Product and tracking labels, warnings, instructions, registration form or online method, retail-pack artwork, barcode files, online listing, carton marks, and packing list',
    'Approved sampling plan, defect classes, inspection methods, safe handling limits, stop rules, photo list, correction evidence, and decision owner',
    'Balance-payment and pickup deadlines, hold authority, factory contacts, rework or retest plan, and exact conditions required for release',
  ],
  redFlags: [
    'The report names a different model, factory, wheel or brake configuration, seat, opening geometry, height setting, accessory set, or production version',
    'The supplier provides only a certificate image, test-report cover, marketplace badge, or generic compliance statement',
    'Production changed safety-relevant components or tooling after testing without qualified disposition',
    'Walkers mix dates, batches, labels, instructions, registration materials, or construction inside the same shipment',
    'Sampled units collapse, unlock, omit parts, expose sharp edges, show damaged structure, or differ from the approved reference',
    'The factory proposes a child demonstration, real-stair trial, improvised load, or unapproved fixture as proof of compliance',
    'Failed or corrected units cannot be mapped to affected quantities and cartons',
  ],
  scopeLimits: [
    'A routine China-side inspection does not reproduce mandatory performance or chemical testing and is not a compliance certification',
    'Sampling does not prove every unit outside the inspected sample or guarantee future safe use',
    'Document comparison cannot authenticate every statement without source confirmation and qualified review',
    'Visual checks cannot validate internal loads, long-term durability, hidden material properties, or every foreseeable misuse',
    'Huang Sourcing does not decide legal classification, issue a CPC, eFile certificate data, approve a laboratory, or guarantee customs or marketplace acceptance',
  ],
  relatedLinks: [
    {
      href: babyLoungerChecksChinaArticleHref,
      label: 'Baby lounger checks',
      note: 'Keep infant sleep-product geometry and support-cushion evidence separate from mobile infant-walker performance requirements.',
    },
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China laboratory report',
      note: 'Check the issuer, scope, sample photos, exact model, factory, dates, methods, results, limitations, and source.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'China manufacturing QC plan',
      note: 'Build approved references, component and change control, qualified testing, inspections, corrections, and holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks',
      note: 'Match product identity, warnings, instructions, tracking, registration materials, retail packs, carton marks, and quantities.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report',
      note: 'Define photos, sampling, measurements, traceability, defects, affected quantity, decisions, and stated scope limits.',
    },
    {
      href: '/qc-inspection-china',
      label: 'QC inspection in China',
      note: 'Compare buyer-approved construction, labels, packaging, quantity, and evidence while the actual goods remain accessible.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, testing, packaging, payment, pickup, supplier, and shipment decisions.',
    },
  ] satisfies RelatedLink[],
  sourceNotes: [
    {
      href: cpscWnttmtCase,
      label: 'U.S. CPSC - Wnttmt Baby Walkers recall',
      note: 'Primary public record dated August 6, 2026 describing doorway, step-edge and leg-opening hazards, China origin, production-batch identity, sales scope, quantity, and remedy.',
    },
    {
      href: cpscCiuseiCase,
      label: 'U.S. CPSC - CiuseiAnx Infant Walkers warning',
      note: 'Separate primary record dated August 6, 2026 describing the step-edge failure, reported falls and injuries, seller response, China retailer, product identity, sales scope, and quantity.',
    },
    {
      href: cpscInfantWalkerGuidance,
      label: 'U.S. CPSC - Infant Walkers Business Guidance',
      note: 'Current official guidance on 16 CFR part 1216, the accepted ASTM F977 version, requirement categories, durable-product labeling, registration, and certification.',
    },
    {
      href: cpscCertificateGuidance,
      label: 'U.S. CPSC - Certificates of Compliance and eFiling update',
      note: 'Current official effective-date and scope summary for revised certificate content and electronic filing requirements for imported products subject to certification.',
    },
    {
      href: healthDayGoregentCoverage,
      label: 'HealthDay - Baby walkers sold on Amazon recalled over fall risk',
      note: 'Independent March 25, 2026 coverage of a separate China-origin infant-walker recall, including model and production identity, sales channel, stated hazard, and remedy.',
    },
  ] satisfies SourceNote[],
}

export function makeBabyWalkerChecksChinaArticleMetadata(): Metadata {
  const article = babyWalkerChecksChinaArticle

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

export function makeBabyWalkerChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(babyWalkerChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Baby walker pre-shipment release checklist',
      itemListElement: babyWalkerChecksChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
