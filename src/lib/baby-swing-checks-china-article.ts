import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  babySwingChecksChinaArticleHref,
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

const cpscTalecoCase =
  'https://www.cpsc.gov/Recalls/2026/Taleco-Gear-Recalls-Baby-Jumpers-Baby-Swings-and-2-in-1-Baby-Jumper-Swings-Due-to-Risk-of-Serious-Injury-or-Death-from-Fall-and-Strangulation-Hazards'
const healthCanadaTalecoCase =
  'https://recalls-rappels.canada.ca/en/alert-recall/taleco-gear-2-1-jumper-swing-recalled-due-fall-and-strangulation-hazards'
const cpscInfantSwingGuidance =
  'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Infant-Swings'
const cpscCertificateGuidance =
  'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Certificates'
const cbmeBabyProductCoverage =
  'https://www.cbmexpochina.com/baby-product-compliance-and-quality-checks-buyers-should-know-before-sourcing-in-china/'

export const babySwingChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: babySwingChecksChinaArticleHref,
  title: 'Baby Swing Checks Before Shipping from China',
  metaTitle: 'Baby Swing Checks Before Shipping from China',
  metaDescription:
    'Check baby swing classification, stability and restraint evidence, production identity, labels, registration materials, cartons, and release decisions in China.',
  publishedDate: 'August 17, 2026',
  publishedDateIso: '2026-08-17T03:26:23+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Baby Swing Checks Before Shipping from China',
  eyebrow: 'Exact-model evidence - finished-lot checks - shipment release',
  image: {
    alt: 'Neutral AI illustration of an unbranded infant swing beside a blank inspection checklist, measuring tools, fasteners, and an open shipping carton',
    height: 900,
    src: '/images/baby-swing-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/baby-swing-checks-china.webp', width: 1600 },
    { height: 1200, src: '/images/baby-swing-checks-china-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/baby-swing-checks-china-1x1.webp', width: 1200 },
  ],
  intro:
    'Before paying the balance or allowing pickup for baby swings made in China, freeze the exact product class, model, manufacturer, factory, construction, production batch, qualified test evidence, Children’s Product Certificate data, labels, registration materials, retail pack, and carton map. Hold the shipment when the tested sample and packed lot cannot be tied to the same controlled version.',
  answerSummary:
    'Use three connected gates: importer-led classification and requirement review, qualified performance evidence for the exact swing, and a buyer-side comparison of sampled production with approved references. Routine inspection can document identity, visible construction, assembly, locks, restraints, workmanship, labels, quantities, and pack-out. It cannot reproduce mandatory stability, structural, folding, restraint, dynamic-load, or strap-accessibility tests, certify compliance, or guarantee safe use.',
  primaryCta: { label: 'Check Baby Swings Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side baby swing evidence and quality check before shipment.

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
    'Freeze the destination, importer, intended age and use, product class, model, factory, frame, feet, seat, restraints, hanging straps, openings, folding and locking design, drive components, production date, batch, retail pack, and carton version',
    'Have the importer and qualified advisers map infant-swing, combination-product, toy-accessory, chemical, electrical, labeling, certification, registration, and import-filing requirements',
    'Map complete qualified reports to the exact manufacturer, factory, model, configuration, materials, test sample photos, dates, methods, results, limitations, and current production revision',
    'Confirm qualified evidence addresses the applicable stability, structural integrity, dynamic and static loading, unintentional folding, restraint, seat-angle, opening, pinch, and strap-accessibility topics',
    'Compare sampled production with approved drawings and references for identity, dimensions, frame, feet, seat, restraint routing, locks, fasteners, drive parts, accessories, edges, workmanship, and visible condition',
    'Check permanent product and tracking identity, warnings, instructions, registration form or method, retail-pack identity, barcode, carton marks, quantities, destination segregation, and packing list',
    'Hold mixed models, unexplained substitutions, unsupported combination products, missing or mismatched reports, incomplete certificate data, failed samples, unapproved rework, or cartons without batch traceability',
    'Release only named models, production dates, batches, quantities, and cartons after documented correction, qualified disposition, and repeat inspection or testing where required',
  ],
  checkGroups: [
    {
      title: 'Identity and product scope',
      items: [
        'Destination, importer, product class, intended age and use, exact model, manufacturer, factory, construction, production date, batch, sales channel, and approved changes are controlled',
        'PO, approved sample, drawings, bill of materials, reports, certificate data, labels, registration materials, package, listing, and cartons describe one production version',
      ],
    },
    {
      title: 'Qualified performance evidence',
      items: [
        'Complete reports identify the tested sample and address the applicable stability, load, structural, folding, restraint, seat-angle, opening, pinch, strap, electrical, and accessory requirements selected by qualified parties',
        'Laboratory identity and scope where relevant, dates, methods, results, sample photos, model or family coverage, deviations, limitations, and relationship to current production are reviewable',
      ],
    },
    {
      title: 'Finished goods and pack-out',
      items: [
        'Sampled units match approved frame geometry, feet, joints, seat, restraints, strap routing, locks, fasteners, drive or power parts, accessories, markings, instructions, and workmanship limits',
        'Tracking identity, warnings, registration materials, barcode, protective retail pack, carton quantity, carton marks, destination, and packing list are consistent and readable',
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
      title: 'Why baby swing release evidence matters now',
      paragraphs: [
        'On August 13, 2026, the U.S. Consumer Product Safety Commission recalled a Taleco Gear group covering baby jumpers, a baby swing, and two 2-in-1 jumper-and-swing configurations. CPSC said the products could become unstable and that hanging restraint straps and seat openings could create strangulation hazards. The notice reports about 41,100 units sold in the United States across the recalled group, at least 52 hazard reports, and at least 32 reported injuries including head bumps and a bloody nose.',
        'Health Canada published a coordinated notice for the black 2-in-1 Jumper & Swing-A, model Jumper-01. It identifies Shanxi Yida Technology Co., Ltd. in China as manufacturer and records 150 Canadian sales; the Canadian notice also preserves the U.S. incident and injury scope. These are public recall records, not a finding about every baby swing or China factory.',
        'Current search results combine official swing rules with broad supplier checklists, but they rarely connect product classification, exact-model laboratory evidence, production revisions, inspected cartons, and the buyer’s payment or pickup decision. That handoff is where a China-side evidence check is most useful.',
      ],
      bullets: [
        'A supplier statement that a swing is “CPSC,” “ASTM,” or “CPSIA” compliant needs complete source evidence and exact model scope',
        'A jumper, swing, cradle swing, travel swing, or combination product may follow a different requirement map; the commercial name alone does not settle classification',
        'Changes to frame geometry, feet, joints, folding locks, seat angle, restraints, straps, openings, motor, controller, adapter, toys, fasteners, factory, or materials can change the evidence question',
        'Correction leverage is strongest before final payment and pickup, while affected batches and cartons can still be held, tested, reworked, relabeled, repacked, or rejected',
      ],
      citations: [
        { href: cpscTalecoCase, label: 'CPSC Taleco Gear recall' },
        { href: healthCanadaTalecoCase, label: 'Health Canada coordinated recall' },
        { href: cbmeBabyProductCoverage, label: 'CBME China buyer compliance overview' },
      ],
    },
    {
      id: 'exact-scope',
      title: 'Freeze the exact swing, product class, factory, and batch',
      paragraphs: [
        'Build one controlled model record connecting the marketplace SKU to the product class, manufacturer, factory, drawings, bill of materials, frame and foot geometry, seat, restraints, hanging straps, openings, joints, locks, drive or power system, accessories, warnings, packaging, production date, and batch. A shared shell, seller listing, or model-family name does not prove that two swings use the same safety-critical construction.',
        'Keep every change visible. If the factory substitutes tubing, feet, joints, pivots, locks, seat fabric, restraint webbing, buckles, fasteners, plastics, motor, controller, adapter, toys, labels, packaging, tooling, subcontractor, or production site after testing, hold the affected lot until qualified parties decide whether review, new samples, retesting, or certificate changes are required.',
        'Classify combination products before relying on a report. A 2-in-1 product may present swing, jumper, activity, toy, electrical, or other questions that are not answered merely because one mode has a report.',
      ],
      bullets: [
        'Control approved drawings, specifications, tolerances, bill of materials, sample photos, packaging artwork, test-sample identity, and change log',
        'Identify the first affected date, batch, quantity, and carton range for every approved change',
        'Photograph repeatable identity points on the frame, seat label, drive housing, power supply, retail pack, and cartons',
        'Reject unexplained model aliases, unsupported family coverage, or report photos that do not match production',
      ],
    },
    {
      id: 'performance-evidence',
      title: 'What should qualified infant-swing evidence connect?',
      paragraphs: [
        'CPSC business guidance says the U.S. infant-and-cradle-swing rule is codified at 16 CFR part 1223 and incorporates the Commission-accepted ASTM F2088 version. For products manufactured after September 14, 2024, the guidance identifies ASTM F2088-24. Listed requirement areas include structural integrity, stability, unintentional folding, restraint systems, seat angles, openings, scissoring, shearing and pinching, tethered strap accessibility, powered-swing provisions, labeling, and toy accessories.',
        'The importer and qualified product-safety specialists should select the controlling destination rules, standards, methods, laboratory, sample plan, and acceptance criteria. Review the full report rather than a cover page: record the laboratory and relevant scope, client, manufacturer, factory, exact model and configuration, sample photos, receipt and test dates, methods, results, deviations, and limitations.',
        'For U.S. children’s products, CPSC guidance says manufacturers and importers must issue a Children’s Product Certificate based on appropriate testing and identifies 16 CFR part 1223 as the infant-and-cradle-swing citation. Certificate data and underlying reports should describe current production; neither a logo nor a generic certificate image proves coverage.',
      ],
      bullets: [
        'Confirm reports with the claimed laboratory or official database where a source-verification route exists',
        'Match sample photos, frame, feet, joints, locks, seat, restraint routing, openings, drive parts, accessories, materials, labels, and identifiers to the approved reference and current lot',
        'Escalate cropped files, edited results, inconsistent dates, missing photos, unclear methods, unsupported combination-product coverage, or reports issued to another product',
        'Keep qualified prescribed testing separate from routine buyer-side inspection and supplier demonstrations',
      ],
      citations: [
        { href: cpscInfantSwingGuidance, label: 'CPSC Infant & Cradle Swings Business Guidance' },
        { href: verifyChinaLabTestReportArticleHref, label: 'Huang Sourcing laboratory report verification guide' },
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled production with approved references while the goods remain accessible. The useful output is a traceable record of model and batch identity, visible construction, dimensions, assembly, locks, restraint routing, components, workmanship, labels, packaging, quantities, defects, mismatches, and affected carton scope.',
        'Inspect the frame, feet, joints, seat attachment, restraint webbing and buckles, strap routing, folding or latching points, fasteners, protective parts, exposed edges, drive housing, buyer-approved accessories, visible wiring, adapter identity, surface condition, markings, instructions, and retail-pack protection against approved criteria. Record the sampled unit, observation or buyer-approved measurement, result, photo, batch, and carton.',
        'Stop and isolate a unit that tips during ordinary approved handling, collapses, unlocks, sheds a component, exposes a sharp edge, has damaged structure, has misrouted or missing restraint parts, or differs materially from the approved build. Preserve the evidence and affected quantity for qualified investigation instead of improvising a destructive or safety-critical test on saleable stock.',
      ],
      bullets: [
        'Use buyer-approved sampling, defect classes, dimensions, visual references, tools, handling limits, stop rules, and photo requirements',
        'Check identity before and after assembly, folding, or adjustment so every finding remains tied to a model and batch',
        'Quantify mixed, incomplete, damaged, unstable, unlocked, misassembled, sharp, cracked, mislabeled, unreadable, or poorly packed units',
        'Keep prescribed stability, structural, impact, cyclic, load, folding, restraint, opening, strap, chemical, electrical, and toy-accessory testing outside ordinary inspection',
      ],
    },
    {
      id: 'labels-registration',
      title: 'Connect tracking, registration, instructions, and cartons',
      paragraphs: [
        'CPSC guidance says durable infant or toddler products must carry permanent English identification including the domestic manufacturer or importer, contact information, model name or number, and manufacture date, in addition to children’s-product tracking-label requirements. It also says product registration forms are required so consumers can be contacted about recalls or other safety information.',
        'Match the swing, instruction manual, registration method, retail pack, online listing, test report, certificate data, packing list, and cartons. Warnings and instructions cannot repair an unsafe design, failed performance, missing restraint part, unstable structure, or unsupported model scope.',
        'CPSC’s current certificate guidance states that revised certificate content and electronic filing took effect July 8, 2026 for general imported consumer products subject to certification. The importer should own the filing decision and verify the exact current requirements; an inspection can compare supplied identifiers and document versions but cannot file or approve the entry.',
      ],
      bullets: [
        'Keep product and package identifiers linked to manufacturer, factory, production date, batch, destination, and carton map',
        'Do not let the listing, swing, instructions, registration materials, report, certificate data, adapter, retail pack, and carton describe different models or parties',
        'Hold unreadable, removable, missing, mixed, or contradictory identity and tracking information until corrected and rechecked',
        'Photograph identity and traceability details in product, retail-pack, inner-pack, and carton context',
      ],
      citations: [
        { href: cpscInfantSwingGuidance, label: 'CPSC swing labeling and registration guidance' },
        { href: cpscCertificateGuidance, label: 'CPSC certificate and eFiling update' },
      ],
    },
    {
      id: 'inspection-limits',
      title: 'Where does inspection stop and qualified testing begin?',
      paragraphs: [
        'Mandatory stability, structural, static and dynamic loading, folding, restraint, seat-angle, opening, pinch, strap-accessibility, electrical, chemical, and other safety assessments use defined fixtures, forces, conditioning, sample preparation, cycle counts, acceptance criteria, and competent interpretation. Those tasks belong with qualified laboratories and responsible compliance parties.',
        'An inspector should not use an infant, place an improvised load in the seat, alter safety parts, create a strap-entanglement scenario, or invent stability, drop, impact, endurance, or electrical tests. Any special or destructive check needs an approved method, controlled setup, selected samples, responsible party, and documented disposition.',
        'A passed sampled inspection supports a buyer decision only within its stated scope. It cannot cure missing evidence, validate unapproved design changes, prove every unsampled unit, certify compliance, or promise customs, marketplace, recall, or safe-use outcomes.',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Identity and product route',
      evidence: 'Destination, importer, product class, intended age and use, exact model, manufacturer, factory, construction, production dates, batches, listing, and approved changes align.',
      buyerDecision: 'Hold aliases, mixed batches, unclear classification, unsupported combination modes, or unexplained production changes until qualified review and correction.',
    },
    {
      riskNode: 'Qualified performance evidence',
      evidence: 'Complete reports map the tested swing and configuration to applicable performance requirements, methods, results, photos, dates, deviations, limitations, and current production.',
      buyerDecision: 'Hold missing, partial, mismatched, changed, or unverifiable evidence; route testing and retest decisions to qualified parties.',
    },
    {
      riskNode: 'Finished-goods comparison',
      evidence: 'Sampled production matches approved frame, feet, joints, seat, restraints, straps, locks, fasteners, drive parts, accessories, workmanship, labels, and pack-out.',
      buyerDecision: 'Hold affected models and cartons for quantified correction, engineering disposition, repeat inspection, or qualified testing.',
    },
    {
      riskNode: 'Tracking and release',
      evidence: 'Permanent identity, tracking, warnings, instructions, registration materials, certificate data, retail packs, quantities, cartons, and correction records stay linked.',
      buyerDecision: 'Release only named models, dates, batches, quantities, and cartons with documented open conditions and importer approval.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'August 13, 2026 CPSC recall record for the Taleco Gear product group, including stated instability and strangulation hazards, model table, incident and injury scope, China origin, sales period, quantity, and remedy',
    'Separate Health Canada coordinated record for the black 2-in-1 Jumper & Swing-A, including model, manufacturer, China origin, Canadian sales, U.S. incident scope, and recall instructions',
    'Current CPSC infant-and-cradle-swing business guidance covering the rule, accepted standard version, performance categories, labeling, registration, and certification responsibilities',
    'Current CPSC certificate and eFiling guidance plus July 2026 industry coverage used only as public context for importer attention to compliance and pre-shipment controls',
    'Buyer-side sourcing analysis that keeps classification, regulatory, laboratory, certificate, inspection, importer, and release responsibilities separate',
  ],
  whatToSend: [
    'Destination markets, importer details, sales channels, intended age/use, product classification, model and SKU list, manufacturer and factory names, production dates, batches, quantities, and carton map',
    'Purchase order, approved drawings and samples, bill of materials, dimensions, tolerances, assembly references, frame and foot details, seat and restraint specifications, drive or power parts, accessories, and change log',
    'Complete qualified reports, laboratory verification details, tested-sample photos, model or family-coverage rationale, combination-mode assessment, certificate data, and unresolved technical questions',
    'Product and tracking labels, warnings, instructions, registration form or online method, retail-pack artwork, adapter markings where applicable, barcode files, online listing, carton marks, and packing list',
    'Approved sampling plan, defect classes, inspection methods, safe handling limits, stop rules, photo list, correction evidence, and decision owner',
    'Balance-payment and pickup deadlines, hold authority, factory contacts, rework or retest plan, and exact conditions required for release',
  ],
  redFlags: [
    'The report names a different product class, model, factory, frame, foot, seat, restraint, strap, lock, drive, accessory, power, or production configuration',
    'The supplier provides only a certificate image, test-report cover, marketplace badge, or generic compliance statement',
    'Production changed safety-relevant components, tooling, subcontractor, or factory after testing without qualified disposition',
    'Swing, jumper, and combination-product reports are treated as interchangeable without a documented requirement and model-scope assessment',
    'Sampled units tip during ordinary approved handling, collapse, unlock, omit or misroute restraint parts, expose sharp edges, show damaged structure, or differ from the approved reference',
    'The factory proposes an infant demonstration, improvised load, strap scenario, endurance run, or unapproved fixture as proof of compliance',
    'Failed or corrected units cannot be mapped to affected models, quantities, batches, and cartons',
  ],
  scopeLimits: [
    'A routine China-side inspection does not reproduce mandatory performance, chemical, or electrical testing and is not a compliance certification',
    'Sampling does not prove every unit outside the inspected sample or guarantee future safe use',
    'Document comparison cannot authenticate every statement without source confirmation and qualified review',
    'Visual checks cannot validate internal loads, long-term durability, hidden material properties, software or electrical protection, or every foreseeable misuse',
    'Huang Sourcing does not decide legal classification, issue a CPC, eFile certificate data, approve a laboratory, or guarantee customs or marketplace acceptance',
  ],
  relatedLinks: [
    {
      href: babyWalkerChecksChinaArticleHref,
      label: 'Baby walker checks',
      note: 'Keep wheeled infant-walker step-edge and parking-device evidence separate from infant-swing stability, folding, restraint, and strap requirements.',
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
      href: cpscTalecoCase,
      label: 'U.S. CPSC - Taleco Gear baby jumper and swing recall',
      note: 'Primary public record dated August 13, 2026 describing the recalled product group, model table, instability and strangulation hazards, incident and injury scope, China origin, sales channels, quantity, and remedy.',
    },
    {
      href: healthCanadaTalecoCase,
      label: 'Health Canada - Taleco Gear 2-in-1 Jumper & Swing-A recall',
      note: 'Separate government record dated August 13, 2026 identifying model Jumper-01, the China manufacturer, Canadian quantity, U.S. incident scope, and the coordinated recall.',
    },
    {
      href: cpscInfantSwingGuidance,
      label: 'U.S. CPSC - Infant & Cradle Swings Business Guidance',
      note: 'Current official guidance on 16 CFR part 1223, accepted ASTM F2088 versions, performance topics, durable-product labeling, registration, and CPC responsibilities.',
    },
    {
      href: cpscCertificateGuidance,
      label: 'U.S. CPSC - Certificates of Compliance and eFiling update',
      note: 'Current official summary of revised certificate content and electronic filing requirements effective July 8, 2026 for imported products subject to certification.',
    },
    {
      href: cbmeBabyProductCoverage,
      label: 'CBME China - Baby-product compliance and quality checks',
      note: 'Secondary July 2026 industry context used only to show current importer attention to product files, supplier controls, qualified testing, and pre-shipment inspection.',
    },
  ] satisfies SourceNote[],
}

export function makeBabySwingChecksChinaArticleMetadata(): Metadata {
  const article = babySwingChecksChinaArticle

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

export function makeBabySwingChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(babySwingChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Baby swing pre-shipment release checklist',
      itemListElement: babySwingChecksChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
