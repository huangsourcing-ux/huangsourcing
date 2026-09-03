import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  preShipmentBeforePickupArticleHref,
  qcBeforeBalanceArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  rattleTeetherChecksChinaArticleHref,
  resourceGuideHref,
  smallBallToyChecksChinaArticleHref,
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

export const cpscSheinSpiralToyRecall =
  'https://www.cpsc.gov/Recalls/2026/SHEIN-Distribution-Corporation-Recalls-Spiral-Toys-Due-to-Risk-of-Serious-Injury-or-Death-from-Choking-Hazard-Violate-Small-Ball-Ban'
const cpscBeestechSpiralToyRecall =
  'https://www.cpsc.gov/Recalls/2026/Childrens-Toys-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Choking-Hazard-Violates-the-Small-Ball-Ban-Sold-on-Amazon-by-Beestech'
const cpsc2025SpiralToyRecall =
  'https://www.cpsc.gov/Recalls/2025/Childrens-Toys-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Choking-Violates-the-Small-Ball-Ban-Sold-on-Shein-by-STWUQIKONG'
const cpscSmallPartsFaq =
  'https://www.cpsc.gov/FAQ/Small-Parts-and-Choking-Hazard-Labeling-FAQs'
const cpscToySafetyGuidance =
  'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Toy-Safety'
const cpscEcommerceViolations =
  'https://www.cpsc.gov/Business--Manufacturing/Online-Sellers-Safety-Guide/Common-Ecommerce-Safety-Violations'
const cpscTestingCertification =
  'https://www.cpsc.gov/Business--Manufacturing/Testing-Certification'
const toyAssociationReport =
  'https://www.toyassociation.org/Common/Uploaded%20files/toyassociation/industryreports/temu-shein-report-summary.pdf'
const toyAssociationStudy =
  'https://www.toyassociation.org/PressRoom2/News/2025_News/study-highlights-the-importance-of-shopping-from-trusted-toy-brands-and-retailers-this-cyber-monday.aspx'

export const smallBallToyChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: smallBallToyChecksChinaArticleHref,
  title: 'Small-Ball Toy Checks Before Shipping from China',
  metaTitle: 'Small-Ball Toy Checks Before Shipping from China',
  metaDescription:
    'Check toy age grading, small-ball dimensions, exact-model evidence, labels, production lots, retail packs, and cartons before shipping from China.',
  publishedDate: 'September 4, 2026',
  publishedDateIso: '2026-09-04T03:27:01+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Small-Ball Toy Checks Before Shipping from China',
  eyebrow: 'Age grade - small-ball evidence - production lot - release',
  image: {
    alt: 'Neutral AI illustration of a generic ball-run toy, different-size balls, a small-parts gauge, caliper, blank packaging, and inspection checklist',
    height: 900,
    src: '/images/small-ball-toy-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/small-ball-toy-checks-china.webp', width: 1600 },
    { height: 1200, src: '/images/small-ball-toy-checks-china-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/small-ball-toy-checks-china-1x1.webp', width: 1200 },
  ],
  intro:
    'Before paying the balance or releasing a U.S.-bound toy order from China, freeze the intended age, play pattern, exact model, every ball and component dimension, approved artwork, qualified test scope, production lots, retail packs, and cartons. Hold the order when a toy aimed at children under three contains a small ball or when age claims, warnings, evidence, and finished goods do not describe one controlled product.',
  answerSummary:
    'Use four connected gates: a qualified party determines intended age and applicable requirements; a competent laboratory evaluates the exact product under the required methods; China-side inspection compares sampled production with the approved model and files; and the buyer releases only named lots and carton ranges after mismatches close. A caliper or visual inspection can document dimensions and identity, but it cannot replace prescribed gauges, conditioning, use-and-abuse testing, certification, or importer responsibility.',
  primaryCta: { label: 'Check Toy Shipment Evidence' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side small-ball toy evidence and quality check before shipment.

Destination, importer, sales channels, intended age, and product classification:
Exact models, play pattern, balls, components, factory, and subcontractors:
Approved samples, drawings, dimensions, bill of materials, and change history:
Applicable requirements, qualified test plan, CPC, reports, and lot records:
Production dates, lots, quantities, retail packs, sets, and carton map:
Age grade, warnings, tracking labels, barcodes, and online-listing references:
Known ball-size, loose-part, labeling, packaging, or complaint issues:
Balance-payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#define-product', label: 'Age and product scope' },
    { href: '#evidence-chain', label: 'Evidence chain' },
    { href: '#physical-checks', label: 'Factory checks' },
    { href: '#test-boundary', label: 'Test boundary' },
    { href: '#change-control', label: 'Change control' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze the destination, responsible party, intended age, play pattern, exact model, set contents, ball and component geometry, materials, factory, lot, retail pack, listing, and carton map',
    'Have qualified parties determine the product classification, reasonable age grade, current requirements, prescribed methods, sample plan, warning route, certification, and importer duties',
    'Map complete reports and certificates to the exact tested model, manufacturer, factory, sample photos, ball sizes, components, age grade, methods, results, dates, and current production revision',
    'Compare sampled production with approved drawings, bill of materials, samples, ball count and accessible dimensions, component retention, markings, tracking labels, warnings, instructions, barcodes, retail packs, and cartons',
    'Keep buyer-side visual and dimensional checks separate from prescribed small-ball gauges, small-parts cylinders, use-and-abuse sequences, chemical work, and other qualified testing',
    'Select destructive samples from named production lots, record raw results and failures, and prevent tested or altered units from returning to saleable stock',
    'Hold conflicting age claims, undersized balls, released small parts, changed molds or materials, missing evidence, incorrect warnings, mixed builds, and untraceable cartons',
    'Release only named models, lots, retail packs, and carton ranges after qualified disposition, controlled correction, repeat inspection, or re-testing where required',
  ],
  checkGroups: [
    {
      title: 'Age and product identity',
      items: [
        'Purchase order, intended-use brief, listing, artwork, drawing, bill of materials, approved sample, report, CPC, tracking label, barcode, packing list, and carton identify the same model and age grade',
        'Every ball, marble-like object, loose part, break-off component, accessory, spare, packaging item, and assembled play pattern is identified without hiding a small object inside a family SKU',
      ],
    },
    {
      title: 'Qualified evidence map',
      items: [
        'Responsible importer, applicable requirements, CPSC-accepted laboratory where required, test plan, samples, conditioning, gauges, use-and-abuse sequence, results, deviations, and certificate are current and traceable',
        'The tested sample photos, molds, ball and component dimensions, materials, connections, markings, age claims, warnings, factory, and revision match production',
      ],
    },
    {
      title: 'Production and pack-out',
      items: [
        'Sampled lots match approved balls, components, colors, molds, surfaces, assembly, set contents, labels, instructions, retail packs, quantities, and carton segregation',
        'Buyer-defined measurements use suitable calibrated tools and record the feature, location, sample, reading, tolerance, lot, carton, method, and limitation',
      ],
    },
    {
      title: 'Hold and release control',
      items: [
        'Age-grade conflicts, small-ball or small-part findings, evidence gaps, substitutions, mixed revisions, damage, rework, failed samples, and affected quantities remain separately traceable',
        'The release record names cleared models, lots, retail packs, carton ranges, corrections, re-test or re-inspection results, open limits, and the buyer-authorized decision maker',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why small-ball toy release evidence matters now',
      paragraphs: [
        'On September 3, 2026, the U.S. Consumer Product Safety Commission announced the recall of about 963 China-made spiral toys imported by SHEIN. CPSC said the toys contained small balls while being intended for children under three, violating the small-ball ban and creating a choking hazard. The notice identifies the product, listing channel, SKU label, China origin, sale period, and remedy; it reports no incidents or injuries.',
        'This was not the first matching public signal. CPSC recalled another China-made spiral tower toy sold on Amazon on April 2, 2026, and a similar SHEIN-listed spiral tower toy on August 14, 2025. Separately, a November 2025 Toy Association report says a CPSC-accredited laboratory found a small-ball failure and age-warning problem in a toddler ball tower purchased from SHEIN. Together, these records show a repeated age-grade, ball-size, labeling, and evidence-control issue around a recognizable play pattern.',
        'The sourcing lesson is specific: price, listing acceptance, a 3+ sticker, supplier assurance, or one clean finished sample does not close the release decision. The intended audience, actual play pattern, exact ball geometry, required warning route, qualified test results, certificate, and packed production version must agree before money or goods move.',
      ],
      bullets: [
        'Treat intended age and reasonable consumer use as controlled inputs, not a label chosen after the product is built',
        'Separate intrinsic small balls from components that become small objects after use-and-abuse testing',
        'Do not infer compliance from a caliper reading, supplier test video, marketplace listing, report cover, or warning alone',
        'Use payment and pickup leverage while affected lots can still be segregated, corrected, re-tested, re-inspected, or stopped in China',
      ],
      citations: [
        { href: cpscSheinSpiralToyRecall, label: 'CPSC SHEIN Spiral Toy recall 26-732' },
        { href: cpscBeestechSpiralToyRecall, label: 'CPSC Beestech spiral tower recall 26-365' },
        { href: toyAssociationReport, label: 'Toy Association laboratory report summary' },
      ],
    },
    {
      id: 'define-product',
      title: 'Define intended age, play pattern, balls, and components first',
      paragraphs: [
        'Start with how the toy is designed, described, promoted, packaged, and commonly used. CPSC explains that intended use for children under three is not decided only by the printed label: stated intent, advertising and promotion, and whether consumers commonly recognize the product for that age are relevant factors. The importer and qualified product-safety resources should document the conclusion before testing, artwork approval, or production release.',
        'Map the entire set. A smooth ball supplied for rolling, a near-spherical character, a bead, a marble-like piece, a detachable knob, and a fragment released after testing may enter different definitions or test paths. Do not collapse small balls and small parts into one factory shorthand. Exact product classification, measurement method, age band, use-and-abuse sequence, warning, and certification requirements need qualified treatment.',
        'Freeze the ball diameters and shape, component geometry, materials, molds, connections, set count, tower openings, intended play action, packaging, listing images, age statements, warnings, tracking marks, factory, and revision. If any of those change, the responsible parties should assess whether earlier evidence still covers the shipped version.',
      ],
      bullets: [
        'Record every product name, model, SKU, age claim, destination, sales channel, set configuration, ball count, component count, and package version',
        'Keep the listing, box, insert, instructions, certificate, test sample, physical lot, barcode, and carton marks on one controlled identity',
        'Escalate a supplier proposal to solve an under-three design issue by adding a 3+ label without a documented qualified age determination',
        'Reject “same family” evidence when ball geometry, play pattern, age grade, mold, factory, material, component path, or warning route differs',
      ],
      citations: [
        { href: cpscSmallPartsFaq, label: 'CPSC small parts and choking hazard FAQs' },
        { href: cpscToySafetyGuidance, label: 'CPSC Toy Safety Business Guidance' },
      ],
    },
    {
      id: 'evidence-chain',
      title: 'What should the test and certification evidence connect?',
      paragraphs: [
        'Build an evidence chain from the qualified requirements assessment to the exact test sample and current production. Check the applicant, manufacturer, factory, product and model, intended age, sample photos, drawings, bill of materials, ball dimensions, component list, methods, conditioning, use-and-abuse sequence, gauges, sample sizes, acceptance criteria, actual results, failures, dates, report status, and deviations.',
        'CPSC guidance explains that children’s products subject to applicable rules generally require third-party testing at a CPSC-accepted laboratory and a Children’s Product Certificate issued by the responsible domestic manufacturer or importer. A supplier declaration, cropped report cover, laboratory logo, similar model, or marketplace document does not by itself show that the shipped toy was tested or properly certified.',
        'Tie production control to that evidence. Mold and cavity identity, incoming ball and component checks, material lots, assembly settings, connection controls, line records, change notices, rework, production dates, lot codes, and final testing need traceability where the control plan requires them. A passing prototype does not automatically cover later substitutions or mixed production.',
      ],
      bullets: [
        'Verify the laboratory and applicable acceptance scope through independently obtained CPSC records where required',
        'Escalate missing pages, edited results, unsupported model families, inconsistent names, unexplained age grades, missing photos, undisclosed failures, or another factory',
        'Keep regulatory classification, qualified product testing, routine inspection, certification, customs filing, marketplace review, and commercial release as separate decisions',
        'Route a ball, component, mold, material, connection, factory, age-grade, listing, label, or packaging change through documented review before relying on earlier evidence',
      ],
      citations: [
        { href: cpscTestingCertification, label: 'CPSC testing and certification guidance' },
        { href: verifyChinaLabTestReportArticleHref, label: 'Huang Sourcing lab report verification guide' },
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A routine inspection can compare sampled saleable goods with approved references while the lot remains accessible. Useful checks include exact model and age identity, set contents, ball count, buyer-defined accessible dimensions, molded parts, connection points, obvious loose pieces, surface condition, assembly, markings, tracking label, warnings, instructions, barcode, retail pack, quantity, damage, and carton identity.',
        'Use suitable calibrated tools only for buyer-defined dimensional checks and record the feature, measurement location, method, tolerance, reading, sample, lot, and limitation. A caliper is not the prescribed small-ball test fixture, and a visual comparison is not a small-parts cylinder or use-and-abuse result. When a formal test is required, route it to the qualified plan and equipment.',
        'Open cartons across the approved sample and look for mixed balls, molds, cavities, components, materials, labels, age grades, instructions, retail packs, SKUs, and old revisions. Photograph findings with scale and context. Quantify each mismatch by affected model, lot, quantity, retail pack, and carton range instead of swapping the visibly wrong samples and releasing the rest.',
      ],
      bullets: [
        'Check identity before workmanship: model, age grade, factory, production date, lot, ball and component count, pack, barcode, packing list, and carton marks',
        'Compare buyer-approved accessible dimensions, shapes, colors, materials, molded features, connections, surface quality, assembly, set contents, and artwork',
        'Document missing, substituted, undersized, loose, cracked, sharp, rough, damaged, contaminated, mislabeled, or untraceable items without claiming a legal conclusion',
        'Keep saleable samples, destructive lot samples, laboratory samples, retains, reworked samples, and failed stock separately identified',
      ],
    },
    {
      id: 'test-boundary',
      title: 'Separate routine inspection from prescribed small-ball and use-and-abuse tests',
      paragraphs: [
        'Small-ball, small-parts, and foreseeable use-and-abuse evaluations are not casual factory demonstrations. CPSC guidance distinguishes small balls from small parts and describes use-and-abuse work that can include impact, flexure, torque, tension, and compression before a released object is evaluated. The exact definitions, fixtures, sequence, age band, conditioning, forces, sample plan, and criteria depend on the product and applicable requirements.',
        'If an approved plan includes controlled factory-side destructive checks, identify sacrificed units in advance, draw them from the named lot, use suitable calibrated equipment and trained personnel, preserve raw readings and failure photographs, and prevent altered products from returning to saleable stock. Do not improvise a pass from one ball placed beside a ruler or through an unverified gauge.',
        'Stop the check when the method, fixture, reference, operator competence, calibration, conditioning, acceptance criterion, sample identity, or disposal path is missing. A buyer-side inspector can witness and document an approved procedure, but cannot create regulatory criteria, certify the toy, or convert an incomplete method into compliance evidence.',
      ],
      bullets: [
        'Define which observations are non-destructive, which samples are sacrificed, and which decisions stay with a competent laboratory or other qualified party',
        'Record test method, age band, conditioning, sequence, equipment ID, calibration status, raw results, failures, photos, deviations, and disposition',
        'Treat an intrinsic small ball, a released small object, a failed method, or an invalid sample as a traceable hold condition rather than a finding to average away',
        'Require qualified review before changing a sample size, method, threshold, warning, or retest rule after a failure',
      ],
      citations: [
        { href: cpscSmallPartsFaq, label: 'CPSC testing and age-determination FAQs' },
        { href: cpscEcommerceViolations, label: 'CPSC common e-commerce safety violations' },
      ],
    },
    {
      id: 'change-control',
      title: 'How should buyers control corrections and lot release?',
      paragraphs: [
        'Require written notice before changing a ball or component dimension, shape, mold, cavity, resin, coating, supplier, connection, set count, tower geometry, factory, subcontractor, age grade, listing, warning, tracking mark, retail pack, or carton. Compare the proposed version with the qualified evidence map before allowing it into production.',
        'When inspection or qualified testing finds a mismatch or failure, quarantine the affected lots and carton ranges. Record the condition, suspected scope, removed stock, correction instruction, revised artwork or components, line clearance, qualified re-test decision, re-inspection sampling, result, and buyer authorization. Do not solve an evidence problem by changing only the visible samples.',
        'Release is a named-lot decision. The final record should identify exact models, production dates, quantities, ball and component revisions, test evidence, destructive sample IDs, corrections, retail packs, labels, carton ranges, remaining exceptions, and the buyer-authorized person who accepted the documented limits.',
      ],
      bullets: [
        'Do not mix pre-change and post-change goods under one model, lot, report, certificate, barcode, retail pack, or carton range without traceable review',
        'Segregate failed, corrected, re-tested, re-inspected, cleared, and unresolved quantities physically and in records',
        'Verify that corrected age grades, warnings, tracking labels, listings, instructions, packs, barcodes, and cartons still map to the corrected product',
        'Release only after required evidence and physical checks close; a shipping deadline or marketplace listing does not resolve an open choking-risk condition',
      ],
      citations: [
        { href: qualityControlChinaManufacturingPlanArticleHref, label: 'Huang Sourcing manufacturing QC plan' },
        { href: cpscSheinSpiralToyRecall, label: 'CPSC exact product and SKU record' },
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Intended age or product route is unresolved',
      evidence: 'The listing, box, instructions, certificate, report, supplier, and buyer use different age grades, model names, play patterns, or requirement maps.',
      buyerDecision: 'Hold approval and production release. Obtain a qualified age and requirements decision before using inspection or artwork as a release gate.',
    },
    {
      riskNode: 'Exact-model small-ball evidence is missing',
      evidence: 'Only a declaration, report cover, similar toy, caliper photo, informal gauge video, or certificate without a traceable sample and full results is available.',
      buyerDecision: 'Hold the affected model and lot. Obtain qualified exact-product evidence and resolve certificate scope before payment or pickup.',
    },
    {
      riskNode: 'Production differs from the tested construction',
      evidence: 'Ball geometry, component, mold, material, set contents, factory, age grade, listing, label, retail pack, or carton differs from the controlled reference.',
      buyerDecision: 'Quarantine affected lots. Document the change, assess evidence impact, correct, re-test, and re-inspect as the qualified disposition requires.',
    },
    {
      riskNode: 'A small ball, released part, or label conflict is found',
      evidence: 'Lot-linked inspection or qualified testing identifies an undersized ball, accessible small object, failed component, unreasonable age claim, missing warning, or mixed stock.',
      buyerDecision: 'Do not average the issue away. Define scope, stop or correct the design or artwork, obtain qualified review, and repeat the required checks.',
    },
    {
      riskNode: 'Evidence and physical lot align',
      evidence: 'Exact models, intended age, balls, components, reports, certificate, changes, inspection results, labels, quantities, lots, packs, and cartons are traceable with no unresolved condition.',
      buyerDecision: 'The buyer may release only the named models, lots, retail packs, and carton ranges while retaining the evidence package and stated limits.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Primary case record: CPSC recall 26-732, announced September 3, 2026, for China-made SHEIN spiral toys with small balls intended for children under three',
    'Repeated official pattern: CPSC recalls 26-365 and 25-433 for similar China-made spiral tower toys sold through Amazon and SHEIN',
    'Independent testing signal: The Toy Association’s November 2025 public report on testing by a CPSC-accredited laboratory, including a toddler ball tower with a small-ball failure and age-warning concern',
    'Current official guidance: CPSC toy safety, small-parts and choking FAQs, e-commerce violation guidance, and testing and certification resources',
    'Buyer-side analysis: product definition, evidence mapping, visible inspection, prescribed-test boundaries, change control, lot segregation, and payment or shipment release',
  ],
  whatToSend: [
    'Destination markets, responsible party, importer, sales channels, intended age, product category, play pattern, listing claims, and deadlines',
    'Exact model and set list, drawings, ball and component dimensions, materials, molds and cavities, bill of materials, approved samples, and revision history',
    'Qualified age determination, applicable-requirements assessment, risk assessment, test plan, complete reports, CPC, raw lot-test records, deviations, failures, and retest rules',
    'Factory and subcontractor identities, incoming-material and molded-part records, assembly controls, production dates, lots, quantities, and change notices',
    'Age grade, choking warnings, tracking labels, instructions, barcodes, listing copy, retail artwork, set contents, packing list, carton marks, and destination segregation plan',
    'Inspection sampling plan, approved defect classes and limits, buyer-defined accessible dimensions, tools, tolerances, destructive sample selection, methods, and disposition',
    'Known small-ball, small-part, loose-component, age-grade, warning, mold, material, packaging, complaint, rework, or mixed-version concerns',
    'Balance-payment terms, forwarder pickup date, factory access, responsible compliance contacts, and the buyer’s named release authority',
  ],
  scopeLimits: [
    'A routine sampled inspection does not determine intended age, legal product classification, applicable requirements, or whether the exact design passes prescribed small-ball, small-parts, use-and-abuse, chemical, or other safety tests.',
    'A caliper reading, visual comparison, label, supplier video, certificate title, or passing saleable sample does not replace the required fixtures, methods, conditioning, qualified interpretation, or complete exact-product evidence.',
    'Huang Sourcing does not create regulatory acceptance criteria, issue laboratory results or a Children’s Product Certificate, submit importer filings, approve listings, manage recalls, or replace qualified legal, compliance, engineering, or medical advice.',
    'Sampling cannot guarantee every unit, future production, consumer behavior, or lifecycle outcome; sealed cartons, mixed lots, weak traceability, inaccessible goods, or missing approved references reduce confidence.',
    'The cited public cases concern named products and sellers. They do not prove every toy, ball-run design, Chinese supplier, factory, marketplace listing, model, or lot has the same problem or cause.',
    'The importer and buyer remain responsible for design, age grading, testing, certification, labeling, tracking, reporting, corrective action, payment release, shipment release, and downstream monitoring.',
  ],
  relatedLinks: [
    {
      href: '/qc-inspection-china',
      label: 'QC inspection in China',
      note: 'Scope a buyer-side exact-model, lot, workmanship, label, quantity, and pack-out comparison before shipment.',
    },
    {
      href: rattleTeetherChecksChinaArticleHref,
      label: 'Rattle and teether checks',
      note: 'Review the separate connection-retention and loose-component decision for infant rattles and teethers.',
    },
    {
      href: qcBeforeBalanceArticleHref,
      label: 'QC before balance payment',
      note: 'Connect findings, missing evidence, corrective action, and repeat checks to the payment decision.',
    },
    {
      href: preShipmentBeforePickupArticleHref,
      label: 'Pre-shipment inspection before pickup',
      note: 'Keep unresolved lots, retail packs, and cartons from moving before closure.',
    },
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China lab report',
      note: 'Check issuer, applicant, model, factory, sample, methods, results, dates, and scope.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks',
      note: 'Align model, age grade, warnings, tracking label, barcode, retail pack, listing, and carton.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Turn observations, dimensions, defects, photos, affected quantities, lots, and limits into a release record.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, testing, packaging, payment, pickup, and shipment decisions.',
    },
  ] satisfies RelatedLink[],
  sourceNotes: [
    {
      href: cpscSheinSpiralToyRecall,
      label: 'U.S. CPSC - SHEIN Spiral Toy recall 26-732',
      note: 'Primary September 3, 2026 case record for the exact product, small-ball violation, intended audience, quantity, SKU label, sale period, importer, China origin, incidents, and remedy.',
    },
    {
      href: cpscBeestechSpiralToyRecall,
      label: 'U.S. CPSC - Beestech spiral tower recall 26-365',
      note: 'Independent April 2, 2026 official case involving a similar China-made spiral tower toy, small balls, under-three use, online sale, model identity, and refund.',
    },
    {
      href: cpsc2025SpiralToyRecall,
      label: 'U.S. CPSC - STWUQIKONG spiral tower recall 25-433',
      note: 'Earlier August 14, 2025 official case showing the repeated product pattern without implying that every similar-looking toy shares the same source or failure.',
    },
    {
      href: cpscSmallPartsFaq,
      label: 'U.S. CPSC - small parts and choking hazard FAQs',
      note: 'Official guidance on intended age, small parts, small balls, choking labels, use-and-abuse testing, exemptions, and scope boundaries.',
    },
    {
      href: cpscToySafetyGuidance,
      label: 'U.S. CPSC - Toy Safety Business Guidance',
      note: 'Current official overview of the mandatory toy standard, small-part requirements, testing, certification, and product-specific sections.',
    },
    {
      href: toyAssociationReport,
      label: 'The Toy Association - Temu and SHEIN test report summary',
      note: 'Independent November 2025 evidence describing testing by a CPSC-accredited laboratory, including a toddler ball tower with a small-ball failure and incorrect warning concern.',
    },
    {
      href: toyAssociationStudy,
      label: 'The Toy Association - public study overview',
      note: 'Public institutional summary of the study design, tested online-marketplace toy sample, laboratory basis, and broader labeling and age-grade findings.',
    },
    {
      href: cpscTestingCertification,
      label: 'U.S. CPSC - testing and certification',
      note: 'Official source for third-party testing, CPSC-accepted laboratories, certificates, and the responsible domestic manufacturer or importer.',
    },
  ] satisfies SourceNote[],
}

export function makeSmallBallToyChecksChinaArticleMetadata(): Metadata {
  const article = smallBallToyChecksChinaArticle

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

export function makeSmallBallToyChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(smallBallToyChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Small-ball toy pre-shipment release checklist',
      itemListElement: smallBallToyChecksChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
