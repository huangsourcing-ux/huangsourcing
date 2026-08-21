import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qcBeforeBalanceArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
  slidePlaysetChecksChinaArticleHref,
  toddlerTowerChecksChinaArticleHref,
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

export const cpscSlidePlaysetWarning =
  'https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-Slide-Playsets-Immediately-Due-to-Risk-of-Serious-Injury-and-Death-from-Head-and-Neck-Entrapment-Hazards-One-Death-Reported-Manufactured-by-Wenzhou-Yidian-Amusement-Equipment-Co-Ltd'
const cpscPlaygroundBusinessGuidance =
  'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Playground-Equipment'
const astmF1148Scope = 'https://store.astm.org/f1148-24.html'
const cpscIndoorClimberTaskGroup =
  'https://www.cpsc.gov/Newsroom/Public-Calendar/2026-05-04-160000/ASTM-F1509-Task-Group-on-Indoor-Climbers'
const cpscPlaygroundHandbook =
  'https://www.cpsc.gov/s3fs-public/325_PublicPlaygroundSafetyHandbook2025_7-30-25_0.pdf'
const cnnGrayCoverage =
  'https://www.fox19.com/2026/08/16/toddlers-death-sparks-urgent-warning-about-popular-playsets/'

export const slidePlaysetChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: slidePlaysetChecksChinaArticleHref,
  title: 'Slide Playset Checks Before Shipping from China',
  metaTitle: 'Slide Playset Checks Before Shipping from China',
  metaDescription:
    'Check slide playset openings, age and use scope, structure, hardware, labels, reports, traceability, and cartons before China shipment.',
  publishedDate: 'August 22, 2026',
  publishedDateIso: '2026-08-22T03:31:18+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Slide Playset Checks Before Shipping from China',
  eyebrow: 'Entrapment - structure - age scope - shipment release',
  image: {
    alt: 'Neutral AI illustration of an unbranded toddler slide playset with crawl openings, steps, inspection gauges, measuring tools, checklist, and shipping carton',
    height: 900,
    src: '/images/slide-playset-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/slide-playset-checks-china.webp', width: 1600 },
    {
      height: 1200,
      src: '/images/slide-playset-checks-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/slide-playset-checks-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Before paying the balance or allowing pickup for a slide playset made in China, freeze the destination, intended age, indoor or outdoor use, product classification, exact model, assembly configuration, openings, access points, platform, slide, steps, guardrails, fasteners, material, labels, instructions, production lot, and carton map. Hold the lot when those elements do not describe one approved version.',
  answerSummary:
    'Use four linked gates: responsible-party requirements mapping, qualified product evidence for the exact design, buyer-side comparison of sampled production with approved references, and traceable correction or release. Routine inspection can document identity, accessible dimensions, assembly, visible openings, workmanship, hardware, labels, quantities, and pack-out. It cannot prove head-entrapment performance, structural integrity, stability, impact attenuation, chemical limits, age suitability, or legal compliance.',
  primaryCta: { label: 'Check Slide Playsets Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side slide playset evidence and quality check before shipment.

Destination, importer, sales channel, indoor/outdoor use, and intended ages:
Exact models, assembly configurations, dimensions, materials, and accessories:
Manufacturer, factory, mold or tool versions, production dates, batches, quantities, and carton map:
Applicable requirements, standards, complete reports, certificate references, and filing data:
Approved samples, drawings, bill of materials, labels, instructions, hardware, and packaging:
Known changes, failures, substitutions, rework, evidence gaps, or mixed production:
Balance-payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#freeze-version', label: 'Freeze the version' },
    { href: '#document-chain', label: 'Evidence chain' },
    { href: '#physical-checks', label: 'Factory checks' },
    { href: '#labels-traceability', label: 'Labels and traceability' },
    { href: '#inspection-limits', label: 'Inspection limits' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze destination, responsible party, intended ages, indoor or outdoor use, exact model, complete assembly, dimensions, materials, openings, platform, slide, steps, guardrails, hardware, labels, instructions, production lot, and carton version',
    'Have qualified parties map the exact product and use to applicable playground, toy, chemical, labeling, certification, and filing requirements before selecting evidence or inspection criteria',
    'Map complete reports and certificate references to the manufacturer, factory, exact model, assembly configuration, materials, age scope, sample photos, dates, methods, results, deviations, and limitations',
    'Control drawings, bills of materials, molds, wall thickness, resin and colorant, openings, joints, fasteners, anchors, slide geometry, access points, guardrails, labels, instructions, and every approved change',
    'Compare sampled production for identity, accessible dimensions, openings, assembly fit, fastener engagement, cracks, warpage, sharp flash, pinch or shear points, stability setup, labels, hardware, and pack-out',
    'Hold unapproved geometry, mixed parts, incomplete hardware, open joints, cracks, unstable-looking assembly, unreadable age or setup information, unsupported reports, or cartons that cannot be mapped to a production lot',
    'Route entrapment probes, structural loads, stability, impact attenuation, dynamic use, chemical limits, and other prescribed performance questions to qualified laboratories or engineers',
    'Release only named models, configurations, batches, quantities, accessory packs, and cartons after documented correction, qualified disposition, and repeat inspection or testing where required',
  ],
  checkGroups: [
    {
      title: 'Controlled product identity',
      items: [
        'Destination, responsible party, age and use scope, manufacturer, factory, model, complete assembly, material, mold or tool version, production lot, and approved changes are controlled',
        'PO, drawings, bill of materials, test sample, reports, labels, instructions, hardware pack, online listing, retail pack, and cartons describe one version',
      ],
    },
    {
      title: 'Qualified design evidence',
      items: [
        'Responsible parties select applicable requirements and complete files identify the tested product, use and age scope, geometry, materials, factory, methods, results, photos, dates, deviations, and limits',
        'A standard name, report cover, supplier declaration, marketplace badge, or certification logo is never accepted without scope and exact-model verification',
      ],
    },
    {
      title: 'Finished goods and assembly',
      items: [
        'Sampled units match the approved openings, access, platform, slide, steps, guardrails, joints, fasteners, material, color, hardware, labels, instructions, and pack-out',
        'Model, date or lot code, mold-cavity marks where used, accessory pack, carton marks, quantities, destination segregation, and packing list remain aligned',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, component and mold lots, carton map, supplier changes, controlled rework, qualified disposition, revised files, and repeat checks remain traceable',
        'Cleared and unresolved models, configurations, batches, hardware packs, and cartons stay separated; final release states every open condition',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why slide playset release evidence matters now',
      paragraphs: [
        'On August 13, 2026, the U.S. Consumer Product Safety Commission warned consumers to stop using Model WPX-4 indoor and outdoor slide playsets manufactured in China. CPSC said multiple openings could admit a child\'s torso but not the head, creating head-and-neck entrapment hazards. The agency reported one fatal entrapment involving a 17-month-old child and said the manufacturer had not agreed to an acceptable recall.',
        'The warning received continuing national and local coverage over the following days. Separately, CPSC participated in a May 2026 ASTM task group discussing development of a voluntary safety standard for home toddler climbing equipment for ages 6 through 36 months. That standards work is not a finding about the WPX-4 product, but it shows that indoor toddler climbing and sliding products remain a current classification and safety-evidence issue.',
        'The buyer decision is specific: do not release a lot because the playset looks complete or because a report names a broadly similar product. Exact age and use claims, assembly configuration, openings, access, structural parts, hardware, labels, instructions, test-sample identity, and mass production must remain connected.',
      ],
      bullets: [
        'Treat every opening formed by panels, rails, steps, tunnels, platforms, slide interfaces, and add-on parts as controlled geometry',
        'Do not infer safe use from rounded plastic, bright colors, a low platform, a child photo, or a supplier assembly video',
        'Keep indoor-toy, home-playground, toddler-climber, and public-use assumptions separate until the responsible party documents the exact classification and requirements',
        'Correction leverage is strongest before final payment and pickup, while parts, configurations, batches, hardware packs, and cartons can still be isolated and rechecked',
      ],
      citations: [
        { href: cpscSlidePlaysetWarning, label: 'CPSC WPX-4 slide playset warning' },
        { href: cnnGrayCoverage, label: 'CNN and Gray News coverage' },
        { href: cpscIndoorClimberTaskGroup, label: 'CPSC indoor climber task group notice' },
      ],
    },
    {
      id: 'freeze-version',
      title: 'Freeze intended use, age scope, and complete geometry first',
      paragraphs: [
        'Start with destination, responsible party, intended ages, supervision and installation assumptions, indoor or outdoor use, home or public setting, exact model, and every allowed configuration. Freeze overall dimensions, platform and slide geometry, steps, ladders, tunnels, guardrails, handholds, barriers, openings, joints, fasteners, anchors, accessories, surface contact points, materials, colors, labels, instructions, factory, molds, and bill-of-material revision.',
        'Do not let one family name hide multiple configurations. Adding or removing a vehicle-shaped side unit, tunnel panel, basketball hoop, swing, guardrail, step, connector, anchor, or decorative opening can change access, openings, load paths, stability, use zone, instructions, and evidence coverage. The PO, drawings, approved sample, qualified evidence, production records, labels, listing, and cartons should identify the version actually being shipped.',
        'CPSC business guidance says the applicable framework depends on whether equipment is for home or public use and notes that a small indoor slide may be considered a children\'s toy. ASTM identifies F1148-24 as the active home-playground equipment specification and states its scope includes climbing, sliding, and crawling for defined ages and settings. These sources help frame questions; the importer and qualified advisers must determine the requirements for the exact product and market.',
      ],
      bullets: [
        'Record the requirements owner, sources checked, date, applicable editions, exact-product rationale, assumptions, and unresolved conditions',
        'Treat a new opening, panel, mold, resin, thickness, fastener, anchor, slide angle, platform height, step, guardrail, accessory, supplier, process, subcontractor, or factory as a controlled change',
        'Keep destination, age, indoor/outdoor, home/public, and configuration versions physically and digitally segregated',
        'Reject model identities that exist only in a listing but cannot be found on the product, instructions, retail pack, production record, or controlled cross-reference',
      ],
      citations: [
        { href: cpscPlaygroundBusinessGuidance, label: 'CPSC playground equipment business guidance' },
        { href: astmF1148Scope, label: 'ASTM F1148-24 scope and status' },
      ],
    },
    {
      id: 'document-chain',
      title: 'What should the design and test evidence connect?',
      paragraphs: [
        'Review complete evidence rather than a report cover, standard name, certification mark, or supplier declaration. Record the issuer, client, manufacturer, factory, exact model, assembly configuration, intended ages and setting, sample photos, drawings, materials, mold or tool revision, receipt and test dates, standard edition, methods, results, deviations, limitations, and any family-coverage rationale.',
        'Compare the tested sample photographs and identifiers with the approved reference, current drawings, bill of materials, incoming-material records, mass-production units, labels, instructions, accessory packs, online listing, and cartons. A real report for a shorter slide, different guardrail, different opening pattern, different accessory configuration, or another factory does not answer the shipment question.',
        'Control post-test changes. If the supplier changes a panel, opening, slide, platform, step, guardrail, joint, fastener, anchor, material, wall thickness, colorant, mold, tool, supplier, process, subcontractor, factory, age claim, or instruction, hold the affected lot until the responsible party documents whether existing evidence still applies or new evaluation is required.',
      ],
      bullets: [
        'Escalate cropped files, edited results, inconsistent dates, unreadable identifiers, missing sample photos, unclear test methods, unsupported family claims, or evidence issued to another factory',
        'Link resin, molded-part, hardware, label, instruction, and accessory purchase or production records to the finished lots and cartons under review',
        'Separate laboratory conclusions from buyer-side identity, workmanship, assembly, quantity, packaging, and traceability observations',
        'Keep failed or conditional results visible; do not replace them with a factory video, child demonstration, or improvised gauge',
      ],
      citations: [
        { href: astmF1148Scope, label: 'ASTM F1148-24 home playground equipment scope' },
        { href: verifyChinaLabTestReportArticleHref, label: 'Huang Sourcing lab report verification guide' },
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled finished goods with approved references while the lot remains accessible. The useful output is a traceable record of model, configuration, dimensions, panels, openings, platform, slide, steps, guardrails, joints, fasteners, hardware, visible material and finish, labels, instructions, quantities, defects, mismatches, and affected cartons.',
        'Assemble sampled units using the approved instructions and supplied hardware without improvising missing parts. Check part identity, fit, fastener engagement, caps, anchors, panel alignment, rocking or distortion, sharp flash or edges, cracks, voids, warpage, pinching or shearing interfaces, protrusions, accessible gaps, slide surface and sidewalls, platform barriers, steps, handholds, retail pack, and carton protection.',
        'Use buyer-approved measurement points and tolerances for ordinary comparison. Preserve photos showing the full configuration and the measurement reference. If a suspected opening, stability, strength, impact, chemical, or age-scope concern appears, stop the ordinary check, isolate the sample, and route it to the responsible qualified party rather than improvising a pass/fail method.',
      ],
      bullets: [
        'Use an approved sampling plan, defect classes, assembly method, measurement list, photo list, prohibited actions, and traceability scheme',
        'Record opening and dimension observations as comparison evidence, not as proof that prescribed probes, forces, conditioning, or standard criteria passed',
        'Quantify missing, substituted, loose, cracked, warped, sharp, poorly fitting, mislabeled, unreadable, incomplete, mixed, or poorly packed units and parts',
        'Do not use children for a demonstration or improvise head, torso, finger, strength, stability, impact, fall, or chemical testing at the packing line',
      ],
    },
    {
      id: 'labels-traceability',
      title: 'Connect age, setup, evidence, hardware, and cartons',
      paragraphs: [
        'Match the model, intended age and setting, manufacturer or responsible-party identity, date or lot code, assembly and anchoring instructions, warnings, maintenance information, online listing, qualified evidence, hardware pack, packing list, and cartons. Responsible parties should approve the content and placement; an inspection compares controlled artwork and physical output rather than writing missing safety language at the factory.',
        'Photograph the model and lot identity together with the complete configuration, major panels, openings, slide, platform, steps, hardware pack, instruction version, retail pack, and carton. When molded parts use cavity or tool marks, keep those identifiers linked to production and correction records so affected parts and cartons can be isolated.',
        'A correct carton cannot cure a changed playset. If different panels, openings, fasteners, materials, age claims, instruction revisions, or accessories are mixed under one SKU, hold the affected quantity until the product identity, evidence scope, correction, and carton mapping are restored.',
      ],
      bullets: [
        'Do not let reports, labels, instructions, listings, retail packs, hardware bags, packing lists, and cartons describe different models or configurations',
        'Hold missing, unreadable, removable, mixed, or contradictory model, age, setup, anchoring, warning, and lot information until corrected and rechecked',
        'Photograph corrected units and closed cartons with sample, batch, hardware-pack, and correction identity',
        'Keep the importer or destination responsible party as decision owner for requirements, certificate content, filing, marketplace acceptance, and shipment release',
      ],
    },
    {
      id: 'inspection-limits',
      title: 'Where does inspection stop and qualified evaluation begin?',
      paragraphs: [
        'Head, neck, torso, finger or limb entrapment, structural loads, dynamic stability, tip-over, slide and platform performance, impact attenuation, fall zones, age grading, material and chemical limits, and other safety or compliance assessments can require defined probes, forces, conditioning, fixtures, calibrated instruments, repetitions, controlled surfaces, competent operators, and formal interpretation. Those tasks belong with qualified laboratories, engineers, and responsible compliance parties.',
        'The 2025 CPSC Public Playground Safety Handbook explains why feet-first entry can trap a child when the torso passes but the head does not. It also describes probe-based evaluation for public playground openings. That guidance helps explain the hazard mechanism; it is not a substitute for selecting and applying the exact requirements and methods for a home, indoor, toddler, toy, or public-use product.',
        'A passed sampled inspection supports a buyer decision only within its stated scope. It cannot cure a design hazard, validate an unapproved change, prove every unsampled unit, establish age suitability, issue a certificate, replace qualified testing, or guarantee marketplace, customs, recall, or safe-use outcomes.',
      ],
      citations: [{ href: cpscPlaygroundHandbook, label: 'CPSC 2025 Public Playground Safety Handbook' }],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Exact use, age, model, and configuration',
      evidence: 'Destination, responsible party, setting, ages, manufacturer, factory, model, panels, openings, slide, platform, steps, guardrails, hardware, materials, batch, listing, and approved changes align.',
      buyerDecision: 'Hold ambiguous classifications, mixed configurations, missing parts, unsupported age or setting claims, or unexplained geometry and material changes.',
    },
    {
      riskNode: 'Qualified design evidence',
      evidence: 'Complete files map the tested product, assembly, geometry, materials, factory, methods, results, photos, dates, deviations, limitations, and current production revision.',
      buyerDecision: 'Hold missing, partial, mismatched, changed, failed, or unverifiable evidence; route standards and performance decisions to qualified parties.',
    },
    {
      riskNode: 'Finished-goods comparison',
      evidence: 'Sampled production matches approved identity, configuration, accessible dimensions, joints, fasteners, workmanship, hardware, labels, instructions, quantities, and pack-out.',
      buyerDecision: 'Hold affected parts, models, configurations, batches, hardware packs, and cartons for correction, qualified disposition, repeat inspection, or laboratory testing.',
    },
    {
      riskNode: 'Traceability and release',
      evidence: 'Model and lot codes, mold or cavity identity where used, reports, labels, instructions, hardware, retail packs, quantities, cartons, and correction records stay linked.',
      buyerDecision: 'Release only named models, configurations, batches, quantities, hardware packs, and cartons with documented open conditions and importer approval.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'August 13, 2026 CPSC WPX-4 warning covering China manufacture, exact model identity, hazardous openings, one reported fatal entrapment, lack of an acceptable manufacturer recall, and consumer action',
    'August 2026 CNN and Gray News coverage used as an independent current-attention signal, not as a substitute for the CPSC primary record',
    'Current CPSC playground equipment business guidance used to distinguish home, public, and possible indoor-toy classifications without deciding the exact product requirements',
    'ASTM F1148-24 scope page used only to identify the active home-playground equipment category and covered activities and settings, not to claim that a product complies',
    'May 2026 CPSC indoor-climber task group notice used as a current standards-development signal for ages 6 through 36 months, not as a finding about the cited playset',
    'CPSC 2025 Public Playground Safety Handbook used to explain entrapment mechanisms and the need for proper probes and methods, with its public-playground scope kept explicit',
    'Buyer-side sourcing analysis connecting exact-model documents, design and change control, sampled finished-goods observations, carton traceability, and hold-or-release decisions',
  ],
  whatToSend: [
    'Destination markets, importer or responsible party, sales channels, home or public setting, indoor or outdoor use, intended ages, supervision and installation assumptions, exact models, configurations, dimensions, production dates, batches, quantities, and carton map',
    'Purchase order, approved drawings and samples, bill of materials, exploded assembly, panels, openings, slide, platform, steps, guardrails, joints, fasteners, anchors, materials, wall thicknesses, tolerances, mold or tool records, and change log',
    'Complete qualified reports, issuer-verification details, certificate references, test-sample photos, exact-model or family-coverage rationale, laboratory or engineering dispositions, applicable certificate and filing support, and unresolved compliance questions',
    'Model and lot artwork, age and use claims, warnings, assembly and anchoring instructions, maintenance information, retail-pack artwork, barcodes, online listings, hardware and accessory maps, carton marks, and packing list',
    'Approved sampling plan, defect classes, assembly method, measurement instructions, prohibited actions, stop rules, photo list, correction evidence, and decision owner',
    'Balance-payment and pickup deadlines, hold authority, factory contacts, qualified retest plan, affected-part and mold traceability, and exact conditions required for release',
  ],
  redFlags: [
    'The report, certificate reference, drawing, listing, or approved sample names a different manufacturer, factory, model, age scope, use setting, configuration, material, mold, or production version',
    'The supplier provides only a standard name, report cover, certification logo, marketplace badge, factory video, or generic declaration',
    'Production changed an opening, panel, slide, platform, step, guardrail, joint, fastener, anchor, material, thickness, mold, supplier, process, subcontractor, or factory without qualified disposition',
    'Sampled units show unintended openings, gaps, incomplete engagement, loose or missing fasteners, cracks, warpage, sharp flash, protrusions, pinching or shearing interfaces, distorted slides, unstable-looking setup, or mismatched instructions',
    'The factory proposes using a child, homemade head or torso gauge, improvised load, drop, impact, tip-over, or chemical method as proof of safety or compliance',
    'Failed or corrected parts cannot be mapped to affected models, configurations, molds, batches, quantities, hardware packs, and cartons',
  ],
  scopeLimits: [
    'A routine China-side inspection does not reproduce prescribed entrapment, structural-load, stability, impact, fall, age-grading, chemical, or other qualified testing and is not a compliance certification',
    'Sampling does not prove every unit outside the inspected sample or guarantee future assembly, durability, outdoor aging, installation, supervision, or safe-use performance',
    'Document comparison cannot authenticate every statement without issuer confirmation, official-directory checks where available, and qualified review',
    'Visual and buyer-approved assembly checks cannot validate hidden material properties, every load path, every possible opening after wear or misassembly, or every foreseeable misuse',
    'Huang Sourcing does not select legal requirements, approve product design or age grading, issue certifications, submit importer filings, or guarantee customs, marketplace, recall, or consumer outcomes',
  ],
  relatedLinks: [
    {
      href: toddlerTowerChecksChinaArticleHref,
      label: 'Toddler tower shipment checks',
      note: 'Compare a related child climbing product while keeping tower stability, openings, platform, access, and age evidence separate from slide playsets.',
    },
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China laboratory report',
      note: 'Check the issuer, scope, sample photos, exact model and configuration, factory, dates, methods, results, limitations, and verification route.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'China manufacturing QC plan',
      note: 'Build approved references, mold and material change control, qualified testing, inspections, corrections, and holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks',
      note: 'Match model, age and use information, warnings, assembly instructions, hardware packs, barcodes, carton marks, quantities, and correction evidence.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report',
      note: 'Define photos, sampling, measurements, assembly observations, traceability, defects, affected quantity, decisions, and stated limits.',
    },
    {
      href: qcBeforeBalanceArticleHref,
      label: 'QC before balance payment',
      note: 'Keep correction, qualified review, repeat testing, and re-inspection leverage before final payment and pickup.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, testing, packaging, payment, pickup, supplier, and shipment decisions.',
    },
  ] satisfies RelatedLink[],
  sourceNotes: [
    {
      href: cpscSlidePlaysetWarning,
      label: 'U.S. CPSC - WPX-4 slide playset warning',
      note: 'Primary public record dated August 13, 2026 identifying the China-made model, head-and-neck entrapment hazard, one reported fatality, manufacturer response status, and consumer action.',
    },
    {
      href: cpscPlaygroundBusinessGuidance,
      label: 'U.S. CPSC - Playground equipment business guidance',
      note: 'Current official guidance distinguishing home and public playground equipment and noting that a small indoor slide may be considered a children\'s toy, depending on the product.',
    },
    {
      href: astmF1148Scope,
      label: 'ASTM International - F1148-24 scope',
      note: 'Independent standards-organization page identifying the active home-playground specification, intended activities, ages, settings, and exclusions; it does not prove compliance for any product.',
    },
    {
      href: cpscIndoorClimberTaskGroup,
      label: 'U.S. CPSC - 2026 indoor climber task group notice',
      note: 'Official current standards-development notice for home toddler climbing equipment ages 6 through 36 months; not a rule or product finding.',
    },
    {
      href: cpscPlaygroundHandbook,
      label: 'U.S. CPSC - 2025 Public Playground Safety Handbook',
      note: 'Official handbook used to explain head-entrapment mechanisms and probe-based evaluation while preserving its public-playground scope.',
    },
    {
      href: cnnGrayCoverage,
      label: 'CNN and Gray News - slide playset warning coverage',
      note: 'Independent August 16, 2026 coverage used as a current public-attention signal and cross-check of the warning date, model, manufacturer location, and CPSC action.',
    },
  ] satisfies SourceNote[],
}

export function makeSlidePlaysetChecksChinaArticleMetadata(): Metadata {
  const article = slidePlaysetChecksChinaArticle

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

export function makeSlidePlaysetChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(slidePlaysetChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Slide playset pre-shipment release checklist',
      itemListElement: slidePlaysetChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
