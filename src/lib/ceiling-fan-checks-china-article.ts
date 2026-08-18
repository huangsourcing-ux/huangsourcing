import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  ceilingFanChecksChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
  verifyChinaLabTestReportArticleHref,
  verifyUlCertificationChinaArticleHref,
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

const cpscHalwinRecall =
  'https://www.cpsc.gov/Recalls/2026/Hampton-Bay-Halwin-52-Inch-Ceiling-Fans-Recalled-Due-to-Impact-and-Injury-Hazards-Manufactured-by-Youngo-Limited'
const cpscHkcRecall =
  'https://www.cpsc.gov/Recalls/2022/Hong-Kong-China-Electric-Appliance-Manufacture-Company-Recalls-Ceiling-Fans-Due-to-Impact-Injury-Hazard'
const cpscMaraRecall =
  'https://www.cpsc.gov/Recalls/2021/King-of-Fans-Recalls-Hampton-Bay-Mara-Ceiling-Fans-Due-to-Injury-Hazard-Sold-Exclusively-at-Home-Depot'
const doeCeilingFanGuidance = 'https://www.energy.gov/cmei/buildings/ceiling-fans'
const doeComplianceEnforcement =
  'https://www.energy.gov/gc/compliance-certification-enforcement'

export const ceilingFanChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: ceilingFanChecksChinaArticleHref,
  title: 'Ceiling Fan Checks Before Shipping from China',
  metaTitle: 'Ceiling Fan Checks Before Shipping from China',
  metaDescription:
    'Check ceiling fan blade attachment, hardware, exact-model evidence, labels, cartons, and hold-or-release decisions before goods leave China.',
  publishedDate: 'August 19, 2026',
  publishedDateIso: '2026-08-19T03:26:20+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Ceiling Fan Checks Before Shipping from China',
  eyebrow: 'Blade attachment - exact-model evidence - shipment release',
  image: {
    alt: 'Neutral AI illustration of an unbranded ceiling fan inspection setup with blades, brackets, fasteners, measuring tools, and a checklist',
    height: 900,
    src: '/images/ceiling-fan-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/ceiling-fan-checks-china.webp', width: 1600 },
    { height: 1200, src: '/images/ceiling-fan-checks-china-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/ceiling-fan-checks-china-1x1.webp', width: 1200 },
  ],
  intro:
    'Before paying the balance or allowing pickup for ceiling fans made in China, freeze the exact model, manufacturer, factory, motor and flywheel assembly, blade set, blade brackets, fasteners, mounting system, electrical configuration, approved instructions, production batch, labels, retail pack, and carton map. Hold the lot when tested or approved references cannot be tied to the packed production version.',
  answerSummary:
    'Use three linked gates: responsible-party review of destination requirements, qualified evidence for the exact fan, and a buyer-side comparison of sampled production with controlled references. Routine inspection can document identity, visible blade-to-flywheel interfaces, hardware, assembly, workmanship, labels, quantities, and pack-out. It cannot prove engineering adequacy, reproduce endurance or abnormal-condition testing, certify compliance, or guarantee that a rotating assembly will remain secure in service.',
  primaryCta: { label: 'Check Ceiling Fans Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side ceiling fan evidence and quality check before shipment.

Destination, importer, sales channel, exact models/SKUs, and intended indoor/outdoor use:
Manufacturer, factory, production dates, batches, quantity, and carton map:
Approved sample, drawings, bill of materials, blade/flywheel/bracket/fastener specifications, and tolerances:
Applicable requirements, qualified reports, sample photos, certification records, and model coverage:
Assembly instructions, labels, remote/receiver, mounting hardware, packaging, and carton files:
Known changes, failures, loose parts, wobble concerns, defects, or evidence gaps:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#exact-scope', label: 'Exact product scope' },
    { href: '#retention-evidence', label: 'Blade-retention evidence' },
    { href: '#physical-checks', label: 'Physical shipment checks' },
    { href: '#labels-instructions', label: 'Labels and instructions' },
    { href: '#inspection-limits', label: 'Inspection limits' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze destination, importer, exact model, factory, rated indoor or covered-outdoor use, motor, flywheel, blade set, brackets, fasteners, mounting system, light kit, remote or receiver, production date, batch, retail pack, and carton version',
    'Have responsible and qualified parties map mechanical, electrical, radio, energy, labeling, certification, installation, and market-specific requirements before selecting the evidence package',
    'Map complete qualified reports and certifications to the exact manufacturer, factory, model, configuration, test-sample photos, dates, methods, results, limitations, and current production revision',
    'Control drawings, materials, dimensions, tolerances, fastener grade and finish, torque specification, locking method, blade mass range, bracket geometry, flywheel interface, mounting parts, and every approved change',
    'Compare sampled production for blade and bracket identity, hole pattern, fit, hardware count, thread condition, locking features, approved assembly sequence, visible damage, wiring, accessories, markings, instructions, and workmanship',
    'Check model, UPC or barcode, rating label, serial or date code, manufacturer or importer identity, instructions, warning content, retail-pack identity, carton marks, quantities, destination segregation, and packing list',
    'Hold mixed or substituted parts, missing hardware, wrong fasteners, damaged threads, deformed brackets, unmatched blades, unexplained fit, unsupported reports, unapproved rework, or cartons without lot traceability',
    'Release only named models, batches, quantities, and cartons after documented correction, qualified disposition, and repeat inspection or testing where required',
  ],
  checkGroups: [
    {
      title: 'Identity and configuration',
      items: [
        'Destination, importer, model, manufacturer, factory, use rating, motor, flywheel, blades, brackets, fasteners, mount, light, controls, production date, batch, and approved changes are controlled',
        'PO, sample, drawings, bill of materials, reports, certifications, instructions, labels, retail pack, listing, and cartons describe one production version',
      ],
    },
    {
      title: 'Blade-retention evidence',
      items: [
        'Qualified files identify the tested fan and cover the selected mechanical, electrical, energy, control, installation, and other destination-market requirements',
        'Approved blade mass, bracket and flywheel geometry, hole pattern, materials, fastener specification, locking method, assembly torque, tolerances, tests, and change history are reviewable',
      ],
    },
    {
      title: 'Finished goods and pack-out',
      items: [
        'Sampled units match approved blades, brackets, fasteners, motor and flywheel interface, mount, wiring, controls, light kit, markings, instructions, and workmanship limits',
        'Every required component is protected and counted; product identity, rating label, barcode, hardware pack, instructions, retail pack, carton marks, quantity, and packing list stay aligned',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, carton map, supplier change, controlled rework, engineering or laboratory disposition, revised files, and repeat checks remain traceable',
        'Cleared and unresolved models, batches, hardware packs, and cartons stay separated; final release names the exact scope and every open condition',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why ceiling fan release evidence matters now',
      paragraphs: [
        'On August 13, 2026, the U.S. Consumer Product Safety Commission announced the recall of about 9,460 Hampton Bay Halwin 52-inch indoor and covered-outdoor ceiling fans made by Youngo Limited in Huizhou, China. CPSC said fan blades could separate from the motor flywheel and reported 11 incidents involving blades breaking or separating. No injuries were reported in that notice.',
        'The event sits within a repeated public pattern rather than a one-off keyword. A December 2021 CPSC notice covered about 77,900 China-made Harbor Breeze and Honeywell ceiling fans after 60 blade-detachment reports. A December 2020 Hampton Bay Mara notice covered about 182,000 U.S. units after 47 blade-detachment reports, including two reports of a blade hitting a consumer.',
        'Those records do not establish one common root cause or prove every China-made fan has the same risk. They do show that exact-model identity, blade and bracket construction, the flywheel interface, controlled hardware, assembly evidence, and production traceability are practical release nodes before money or goods move.',
      ],
      bullets: [
        'A matching color, blade span, brand family, or marketplace listing does not prove the same motor, flywheel, bracket, fastener, locking method, or tested construction',
        'Blade material, mass, hole pattern, bracket geometry, fastener grade, coating, thread engagement, locking feature, torque, tooling, or factory changes can alter the evidence question',
        'A complete electrical or energy file does not by itself prove blade-retention or mounting performance, and a visual pass does not replace qualified testing',
        'Correction leverage is strongest before final payment and pickup, while affected parts, batches, hardware packs, and cartons can still be isolated and rechecked',
      ],
      citations: [
        { href: cpscHalwinRecall, label: 'CPSC Hampton Bay Halwin recall' },
        { href: cpscHkcRecall, label: 'CPSC HKC ceiling fan recall' },
        { href: cpscMaraRecall, label: 'CPSC Hampton Bay Mara recall' },
      ],
    },
    {
      id: 'exact-scope',
      title: 'Freeze the exact fan, factory, rotating assembly, and batch',
      paragraphs: [
        'Build one controlled model record connecting the marketplace SKU and rating label to the manufacturer, factory, motor, flywheel, blade set, brackets, fasteners, locking features, mounting plate or hanger, downrod or flush-mount configuration, light kit, receiver, remote, wiring, instructions, production date, batch, package, and carton. Model-family claims are not enough when safety-relevant parts differ.',
        'Keep every change visible. If the factory substitutes blade material, blade mass or finish, bracket alloy or geometry, flywheel, fastener grade or coating, washer, thread-locking method, motor, mounting hardware, wiring, receiver, light kit, factory, tooling, or assembly process after approval or testing, hold the affected lot until qualified parties decide whether review, new samples, testing, or certification updates are required.',
        'Control the relationship between components. A correct-looking blade with a changed bracket, a correct screw with insufficient thread engagement, or a complete hardware pack assigned to the wrong model can create a different production configuration even when the finished fan looks familiar.',
      ],
      bullets: [
        'Control approved drawings, specifications, tolerances, bill of materials, test-sample photos, assembly sequence, torque specification, packaging artwork, and change log',
        'Identify the first affected date, batch, quantity, component lot, hardware-pack lot, and carton range for every approved change',
        'Photograph repeatable identity points on the motor housing, rating label, flywheel, blades, brackets, hardware pack, retail pack, and cartons',
        'Reject unexplained aliases, mixed blade or bracket sets, unsupported family coverage, or report photos that do not match production',
      ],
    },
    {
      id: 'retention-evidence',
      title: 'What should blade-retention and product evidence connect?',
      paragraphs: [
        'The importer and qualified engineers or laboratories should select the controlling destination rules, standards, methods, sample plan, and acceptance criteria. Review complete evidence rather than logos or cover pages: record the issuer, laboratory scope where relevant, client, manufacturer, factory, exact model, tested configuration, sample photos, receipt and test dates, methods, results, deviations, and limitations.',
        'For the rotating assembly, connect the approved blade material and mass range, bracket and flywheel geometry, hole pattern, fastener specification, locking method, thread engagement, assembly torque, tolerances, fixtures, prescribed load or endurance methods, and results to the current lot. Routine inspection can compare many visible and measurable attributes, but engineering adequacy and performance conclusions belong with qualified parties.',
        'U.S. Department of Energy guidance separately states that covered ceiling fans must meet energy conservation standards and follow DOE test, certification, compliance, and enforcement rules. DOE energy certification and mechanical safety evidence answer different questions; neither should be used as a substitute for the other.',
      ],
      bullets: [
        'Confirm reports, certifications, and listings with the claimed issuer or official database where a source-verification route exists',
        'Match sample photos, motor, flywheel, blade set, brackets, fasteners, mount, light kit, controls, markings, and identifiers to the approved reference and current lot',
        'Escalate cropped files, edited results, inconsistent dates, unclear methods, missing photos, unsupported family coverage, or evidence issued to another model or factory',
        'Keep prescribed mechanical, electrical, energy, radio, environmental, and other qualified testing separate from routine buyer-side inspection',
      ],
      citations: [
        { href: doeCeilingFanGuidance, label: 'U.S. DOE ceiling fan standards and compliance guidance' },
        { href: doeComplianceEnforcement, label: 'U.S. DOE certification enforcement records' },
        { href: verifyChinaLabTestReportArticleHref, label: 'Huang Sourcing laboratory report verification guide' },
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled production with controlled references while the goods remain accessible. The useful output is a traceable record of model and batch identity, blade and hardware configuration, visible construction, buyer-approved measurements, assembly observations, workmanship, labels, packaging, quantities, defects, mismatches, and affected carton scope.',
        'Inspect approved identity and condition at the motor and flywheel, blade roots, brackets, holes, fasteners, washers or locking parts, mounting assembly, light kit, receiver, remote, wiring, finish, instructions, hardware packs, and protective packaging. Count parts and compare markings, material appearance, dimensions, fit, thread condition, visible seating, approved assembly sequence, and any buyer-specified torque evidence without inventing acceptance criteria.',
        'Stop and isolate a unit with a cracked or deformed blade or bracket, damaged or crossed thread, missing or wrong fastener, unexplained looseness or interference, unmatched blade set, damaged motor or flywheel, unsafe wiring condition, missing mounting part, or material mismatch. Preserve the unit and affected quantity for engineering or laboratory disposition instead of improvising a high-speed spin, pull, fatigue, or destructive test.',
      ],
      bullets: [
        'Use buyer-approved sampling, defect classes, dimensions, gauges, assembly method, torque tool and specification if authorized, handling limits, stop rules, and photo requirements',
        'Check identity before, during, and after approved assembly so every observation remains tied to a model, component set, batch, and carton',
        'Quantify mixed, incomplete, cracked, bent, stripped, corroded, loose, interfering, mismatched, mislabeled, unreadable, or poorly packed units and parts',
        'Keep prescribed retention, load, impact, fatigue, endurance, balance, vibration, abnormal-condition, electrical, energy, and radio testing outside ordinary inspection',
      ],
    },
    {
      id: 'labels-instructions',
      title: 'Connect rating labels, assembly instructions, hardware, and cartons',
      paragraphs: [
        'Match the fan, rating label, serial or date code, instructions, hardware pack, remote and receiver, retail pack, online listing, test report, certification record, packing list, and cartons. CPSC recall records repeatedly use model, UPC, finish, date code, or rating-label location to define affected products, showing why readable identity and carton traceability matter after shipment as well as before release.',
        'Assembly instructions should identify the intended mounting route, supplied hardware, blade and bracket sequence, fastener locations, required tools, electrical limits, use rating, warnings, and maintenance or tightening information selected by responsible parties. Instructions cannot repair weak construction, wrong hardware, failed performance, or an unsupported model.',
        'For U.S. energy rules, DOE says manufacturers, including importers, are responsible for applicable certification. The importer should own the filing and compliance decision. An inspection can compare supplied model identifiers, rating data, labels, packages, and document versions, but it cannot certify the product or approve market entry.',
      ],
      bullets: [
        'Keep fan and package identifiers linked to manufacturer, factory, production date, batch, hardware-pack lot, destination, and carton map',
        'Do not let the listing, fan, instructions, rating label, remote, receiver, reports, certifications, retail pack, and carton describe different models or parties',
        'Hold unreadable, removable, missing, mixed, or contradictory identity, rating, warning, instruction, and traceability information until corrected and rechecked',
        'Photograph identity and component evidence in product, hardware-pack, retail-pack, inner-pack, and carton context',
      ],
      citations: [
        { href: cpscHalwinRecall, label: 'CPSC Halwin model and rating-label details' },
        { href: doeCeilingFanGuidance, label: 'U.S. DOE ceiling fan compliance guidance' },
      ],
    },
    {
      id: 'inspection-limits',
      title: 'Where does inspection stop and qualified testing begin?',
      paragraphs: [
        'Mechanical retention, prescribed load, impact, fatigue, endurance, balance, vibration, abnormal operation, electrical, energy, radio, and other safety or compliance assessments can require defined fixtures, instruments, conditioning, sample preparation, cycle counts, acceptance criteria, and competent interpretation. Those tasks belong with qualified laboratories, engineers, and responsible compliance parties.',
        'An inspector should not suspend an improvised load from a blade, run a partly assembled fan, energize a rotating assembly on an unapproved fixture, guess a fastener torque, substitute thread locker, alter a bracket, or invent a high-speed or destructive test. Any special check needs an approved method, controlled setup, selected samples, stop rules, responsible party, and documented disposition.',
        'A passed sampled inspection supports a buyer decision only within its stated scope. It cannot cure missing evidence, validate unapproved changes, prove every unsampled unit, certify compliance, or promise customs, marketplace, installation, recall, or safe-use outcomes.',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Identity and product route',
      evidence: 'Destination, importer, exact model, manufacturer, factory, use rating, motor, flywheel, blade and bracket set, hardware, mount, production dates, batches, listing, and approved changes align.',
      buyerDecision: 'Hold aliases, mixed components, unclear use ratings, unsupported variants, or unexplained production changes until qualified review and correction.',
    },
    {
      riskNode: 'Qualified product evidence',
      evidence: 'Complete files map the tested fan and configuration to selected mechanical, electrical, energy, control, installation, and market requirements, methods, results, photos, dates, deviations, limitations, and current production.',
      buyerDecision: 'Hold missing, partial, mismatched, changed, or unverifiable evidence; route engineering, testing, and certification decisions to qualified parties.',
    },
    {
      riskNode: 'Finished-goods comparison',
      evidence: 'Sampled production matches approved motor, flywheel, blades, brackets, fasteners, locking method, mount, wiring, controls, light, workmanship, labels, instructions, and pack-out.',
      buyerDecision: 'Hold affected parts, models, and cartons for quantified correction, engineering disposition, repeat inspection, or qualified testing.',
    },
    {
      riskNode: 'Traceability and release',
      evidence: 'Rating identity, date or serial codes, hardware packs, instructions, reports, certifications, retail packs, quantities, cartons, and correction records stay linked.',
      buyerDecision: 'Release only named models, component sets, dates, batches, quantities, and cartons with documented open conditions and importer approval.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'August 13, 2026 CPSC Hampton Bay Halwin recall record, including the blade-to-motor-flywheel hazard, exact models and UPCs, rating-label location, 11 reported incidents, China manufacturer, sales period, quantity, and remedy',
    'Separate 2021 and 2020 CPSC ceiling fan records used to establish a repeated blade-detachment decision node without claiming one common defect or treating older events as current cases',
    'Current U.S. Department of Energy ceiling fan and enforcement pages covering energy standards, test procedures, importer certification responsibilities, and recent ceiling-fan certification cases',
    'Buyer-side sourcing analysis connecting exact-model documents, blade and hardware change control, sampled finished-goods observations, carton traceability, and hold-or-release decisions',
    'Explicit scope separation among engineering, laboratory, regulatory, certification, installation, inspection, importer, and shipment-release responsibilities',
  ],
  whatToSend: [
    'Destination markets, importer details, sales channels, intended indoor or covered-outdoor use, model and SKU list, manufacturer and factory names, production dates, batches, quantities, and carton map',
    'Purchase order, approved drawings and samples, bill of materials, blade and bracket specifications, flywheel interface, fastener and locking details, torque requirements, tolerances, mount, light, controls, wiring, packaging, and change log',
    'Complete qualified reports, issuer verification details, tested-sample photos, exact-model or family-coverage rationale, engineering dispositions, energy certification data, and unresolved technical questions',
    'Rating-label and date-code artwork, warnings, instructions, hardware-pack list, remote and receiver identity, retail-pack artwork, barcode or UPC files, online listing, carton marks, and packing list',
    'Approved sampling plan, defect classes, safe assembly and handling method, measurement and torque instructions where authorized, stop rules, photo list, correction evidence, and decision owner',
    'Balance-payment and pickup deadlines, hold authority, factory contacts, rework or retest plan, and exact conditions required for release',
  ],
  redFlags: [
    'The report or certification names a different model, factory, motor, flywheel, blade, bracket, fastener, mount, light, control, use rating, or production configuration',
    'The supplier provides only a test-report cover, certification logo, marketplace badge, energy label, or generic compliance statement',
    'Production changed blade mass or material, bracket or flywheel geometry, fastener grade, coating, locking method, tooling, assembly process, subcontractor, or factory without qualified disposition',
    'Hardware packs are mixed, incomplete, unlabeled, or mapped to the wrong model, blade set, bracket set, or mounting route',
    'Sampled units show cracked or deformed parts, damaged threads, wrong fasteners, loose or interfering fits, unmatched blades, unsafe wiring, or missing mounting components',
    'The factory proposes an improvised spin, pull, fatigue, load, vibration, torque, or destructive check as proof of compliance',
    'Failed or corrected parts and units cannot be mapped to affected models, component lots, quantities, batches, and cartons',
  ],
  scopeLimits: [
    'A routine China-side inspection does not reproduce mechanical, electrical, energy, radio, environmental, or other qualified testing and is not a compliance certification',
    'Sampling does not prove every unit outside the inspected sample or guarantee future retention, installation, durability, or safe use',
    'Document comparison cannot authenticate every statement without issuer confirmation and qualified review',
    'Visual and buyer-approved dimensional checks cannot validate hidden material properties, internal loads, long-term fatigue, motor protection, balance, vibration, software, or every foreseeable misuse',
    'Huang Sourcing does not select legal requirements, approve engineering, issue certifications, install fans, or guarantee customs, marketplace, recall, or consumer outcomes',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China laboratory report',
      note: 'Check the issuer, scope, sample photos, exact model, factory, dates, methods, results, limitations, and source.',
    },
    {
      href: verifyUlCertificationChinaArticleHref,
      label: 'Verify a claimed UL certification',
      note: 'Confirm the mark, organization, file or listing, exact model, manufacturer, status, scope, and production identity instead of relying on a logo.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'China manufacturing QC plan',
      note: 'Build approved references, component and change control, qualified testing, inspections, corrections, and holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks',
      note: 'Match product identity, rating labels, instructions, hardware packs, barcodes, retail packs, carton marks, and quantities.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report',
      note: 'Define photos, sampling, measurements, traceability, defects, affected quantity, decisions, and stated scope limits.',
    },
    {
      href: '/qc-inspection-china',
      label: 'QC inspection in China',
      note: 'Compare buyer-approved components, assembly, workmanship, labels, packaging, quantity, and evidence while the actual goods remain accessible.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, testing, packaging, payment, pickup, supplier, and shipment decisions.',
    },
  ] satisfies RelatedLink[],
  sourceNotes: [
    {
      href: cpscHalwinRecall,
      label: 'U.S. CPSC - Hampton Bay Halwin ceiling fan recall',
      note: 'Primary public record dated August 13, 2026 describing the blade-to-motor-flywheel hazard, exact models and UPCs, rating-label location, incidents, China manufacturer, sales period, quantity, and remedy.',
    },
    {
      href: cpscHkcRecall,
      label: 'U.S. CPSC - HKC ceiling fan recall',
      note: 'Separate primary record covering China-made Harbor Breeze and Honeywell models and 60 reports of blades detaching; used to show why the same release node remains relevant across distinct products.',
    },
    {
      href: cpscMaraRecall,
      label: 'U.S. CPSC - Hampton Bay Mara ceiling fan recall',
      note: 'Older primary record covering 47 blade-detachment reports, including two reported consumer impacts; included as a distinct historical comparison, not proof of the 2026 root cause.',
    },
    {
      href: doeCeilingFanGuidance,
      label: 'U.S. Department of Energy - Ceiling Fans',
      note: 'Current official page on ceiling fan energy conservation standards, test procedures, certification, compliance, enforcement, and recordkeeping.',
    },
    {
      href: doeComplianceEnforcement,
      label: 'U.S. Department of Energy - Compliance Certification Enforcement',
      note: 'Official enforcement page stating manufacturer and importer certification responsibilities and listing recent ceiling-fan certification cases; kept separate from mechanical safety evidence.',
    },
  ] satisfies SourceNote[],
}

export function makeCeilingFanChecksChinaArticleMetadata(): Metadata {
  const article = ceilingFanChecksChinaArticle

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

export function makeCeilingFanChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(ceilingFanChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Ceiling fan pre-shipment release checklist',
      itemListElement: ceilingFanChecksChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
