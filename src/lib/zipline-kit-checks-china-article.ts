import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
  verifyChinaLabTestReportArticleHref,
  ziplineKitChecksChinaArticleHref,
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

export const ziplineKitChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: ziplineKitChecksChinaArticleHref,
  title: 'Zipline Kit Checks Before Shipping from China',
  metaTitle: 'Zipline Kit Checks Before Shipping from China',
  metaDescription:
    'Check backyard zipline kits before China shipment: exact components, cable and brake evidence, markings, instructions, lots, cartons, and release.',
  publishedDate: 'August 6, 2026',
  publishedDateIso: '2026-08-06T03:28:45+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Zipline Kit Checks Before Shipping from China',
  eyebrow: 'Component evidence - finished-lot checks - payment and pickup release',
  image: {
    alt: 'Neutral AI illustration of generic uninstalled zipline cable, turnbuckle, trolley, spring brake, seat, harness, caliper, blank checklist, and export cartons on an inspection bench',
    height: 900,
    src: '/images/zipline-kit-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/zipline-kit-checks-china.webp', width: 1600 },
    {
      height: 1200,
      src: '/images/zipline-kit-checks-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/zipline-kit-checks-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Before releasing balance payment or forwarder pickup for backyard zipline kits made in China, freeze the destination, intended users, rated load, installation assumptions, exact cable, turnbuckle or ratchet, trolley, seat or harness, brake system, hardware, factory, instructions, production lot, and cartons. Hold any shipment scope whose physical components or identity do not match the approved evidence file.',
  answerSummary:
    'Use three separate gates: qualified product-scope and destination review, qualified structural and braking evidence for the exact kit, and buyer-side comparison of sampled finished goods with approved components and pack-out. A China-side inspection can document identity, cable diameter and length against buyer specifications, visible construction, component counts, markings, instructions, packaging, quantities, damage, and lot mismatches. It cannot safely improvise a loaded ride, certify a load rating, validate anchors or trees at the installation site, decide legal applicability, or guarantee that a cable, seat, turnbuckle, trolley, harness, or brake will not fail.',
  primaryCta: { label: 'Check Zipline Kits Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side zipline kit evidence and quality check before shipment.

Destination market, intended users, installation setting, and rated load:
Exact model/SKU, factory, production lot, quantity, and carton map:
Cable, tensioning hardware, trolley, seat/harness, brake, stops, and accessories:
Approved sample, drawings, bill of materials, dimensions, and tolerances:
Applicable-standard review, complete laboratory/engineering reports, and qualified disposition:
Instructions, warnings, labels, retail packaging, and carton files:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#product-scope', label: 'Kit and use scope' },
    { href: '#qualified-evidence', label: 'Reports and test scope' },
    { href: '#physical-checks', label: 'Finished-goods checks' },
    { href: '#change-control', label: 'Changes and traceability' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Document destination, intended users and age range, installation setting, maximum stated load, kit length, model/SKU, factory, production dates, lot, online claims, instructions, warnings, and package identity',
    'Require the importer and qualified product-safety, engineering, laboratory, and legal parties to identify the current requirements and relevant standards for the exact product and market before approving test scope or production',
    'Map complete reports, calculations, sample photos, methods, results, limitations, cable, connectors, trolley, seat or harness, brake system, hardware, factory, dates, and authorized changes to the order',
    'Compare sampled mass production with the approved sample, drawings, bill of materials, and tolerances for cable construction, diameter and length, terminations, tensioning parts, trolley, seat/harness, brake, stops, guards, fasteners, and accessories',
    'Check permanent product and component identity, rated-load and user warnings, installation and maintenance instructions, traceability, barcode, SKU, retail pack, quantities, carton protection, and carton marks',
    'Keep proof-load, fatigue, braking-distance, dynamic-load, corrosion, anchor, tree, clearance, installation, and compliance conclusions with qualified parties; ordinary onsite observations are not substitute test results',
    'Hold substituted or mixed cables, seats, harnesses, trolleys, turnbuckles, ratchet straps, brakes, stops, connectors, instructions, claims, date codes, lots, or cartons until their scope is resolved',
    'Release only named models, component versions, production dates, lots, quantities, and cartons after documented correction, qualified disposition, and repeat inspection where needed',
  ],
  checkGroups: [
    {
      title: 'Scope, users, and exact kit',
      items: [
        'Destination, intended users, age range, installation setting, kit length, stated load, model, factory, production date, lot, and responsible compliance owner are controlled',
        'Purchase order, drawings, bill of materials, approved sample, test samples, reports, claims, instructions, warnings, retail pack, carton, and packing list describe the same finished kit',
      ],
    },
    {
      title: 'Qualified structural and braking evidence',
      items: [
        'Applicable requirements, standard edition, laboratory or engineer, report number, methods, sample photos, components, results, limits, dates, and destination review align',
        'Evidence covers the shipped cable, terminations, tensioning parts, trolley, seat or harness, brake, stops, hardware, factory, and configuration rather than another prototype or product family',
      ],
    },
    {
      title: 'Physical product and pack-out',
      items: [
        'Sampled kits match approved component identity, count, dimensions, visible construction, finish, fasteners, moving-part condition, warnings, instructions, and workmanship',
        'Model, production lot, barcode, SKU, installation file, maintenance information, spare parts, retail package, quantity, carton marks, and carton protection are complete and consistent',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, carton map, supplier change, correction instruction, qualified retest or engineering disposition, revised files, and repeat inspection remain traceable',
        'Cleared and unresolved models, component versions, dates, lots, and cartons stay separated; the final release names exact scope and open conditions',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why zipline kit shipment evidence matters now',
      paragraphs: [
        'On July 30, 2026, the U.S. Consumer Product Safety Commission announced the recall of about 60,720 TT Trsmima zipline kits and 19,120 sold-separately spring brakes manufactured in China. The record says cable, turnbuckle, or seat components could break or detach, and the spring brakes could fail to slow riders safely. CPSC reported 21 component-failure reports with at least eight injuries and 19 brake-failure reports with at least 12 injuries.',
        'The 2026 event was not the first public record of a China-made backyard zipline component failure. In April 2024, CPSC recalled about 6,600 Jugader kits after 20 reports of stainless-steel cable breakage and nine injuries. That recall offered a replacement cable and updated installation instructions. The newer recall covers different named products and a broader set of failure points, so the records should not be collapsed into one case.',
        'These recalls do not prove that every zipline kit, supplier, factory, cable, brake, or production lot has the same defect. They show a recurring buyer decision: qualify the exact product and its evidence before approving production, then confirm that sampled mass-production components and instructions still match the reviewed version before payment or pickup.',
      ],
      bullets: [
        'A listing phrase such as “aircraft cable,” “heavy duty,” “stainless,” or “up to 380 lb” is a claim, not proof of exact-kit performance',
        'Kit length, slope assumptions, cable and termination construction, tensioning parts, trolley, seat or harness, brake, stops, anchors, user range, and instructions can change the evidence question',
        'A genuine report or engineering file is useful only when its sample and complete configuration match the current production kit',
        'Correction leverage is strongest before balance payment and pickup, while replacement, testing, relabeling, segregation, or cancellation remains practical',
      ],
    },
    {
      id: 'product-scope',
      title: 'Define the kit, user, installation, and destination scope first',
      paragraphs: [
        'Freeze what is actually sold: kit length, intended user and age range, maximum stated load, cable construction, diameter and terminations, turnbuckle or ratchet tensioning system, tree protection, trolley, seat, rope, belt or harness, spring brake or other braking system, end stops, carabiners, fasteners, tools, accessories, and every installation or maintenance document. Separately identify stand-alone replacement brakes or components.',
        'CPSC’s playground-equipment business guidance directs manufacturers and importers to review applicable requirements and points home-playground suppliers to ASTM F1148. ASTM’s public F1148-21 scope describes home playground equipment for children over 18 months through 10 years and sections on materials, performance, structural integrity, installation, maintenance, labeling, and information. Those pages help frame questions; they do not establish that a particular kit is covered or compliant. The responsible parties must determine the exact legal and standards route for the finished product, claims, users, and destination.',
        'Installation conditions are part of the use case but cannot be frozen by inspecting a boxed kit in China. Tree or support condition, span, sag, slope, clearance, landing area, anchor design, tension, user behavior, weather, maintenance, and assembly affect the installed system. The product file should state its assumptions, limits, inspection intervals, replacement criteria, and stop-use conditions clearly enough for qualified review.',
      ],
      bullets: [
        'Separate children-only, mixed-age, adult, residential, public, commercial, portable, permanent, kit, and replacement-component claims for qualified scope review',
        'Control every load, length, speed, brake, material, corrosion, installation, compatibility, and supervision claim across listing, packaging, labels, and instructions',
        'Document the destination, importer, intended users, and installation context before approving the test and evidence plan',
        'Escalate new lengths, cables, terminations, seats, harnesses, trolleys, brakes, accessories, rated loads, factories, or bundled components before mass production',
      ],
    },
    {
      id: 'qualified-evidence',
      title: 'What should the engineering and test-scope file establish?',
      paragraphs: [
        'Review the complete evidence chain: responsible manufacturer or importer, destination, product classification, applicable requirements and standards, issuing laboratory or engineer, report number, methods, calculations, sample photos, drawings, bill of materials, dimensions, materials, component sources, rated load, test conditions, results, limitations, dates, factory, installation assumptions, and authorized changes.',
        'Evidence for one component is not evidence for the assembled kit. A cable report does not establish the strength of its termination, turnbuckle, ratchet, trolley, seat rope, belt, harness, carabiner, anchor interface, spring brake, stop, or installed system. Conversely, a finished-kit report cannot automatically cover later substituted components, new lengths, higher load claims, different installation geometry, or a new factory.',
        'CPSC’s manufacturing best-practices guidance tells suppliers to identify applicable legal requirements and voluntary standards, address safety in design and production, and maintain quality-control and corrective-action processes. Buyers can use that official guidance to structure evidence and supplier questions, while leaving applicability, engineering adequacy, testing, certification, and legal conclusions to qualified responsible parties.',
      ],
      bullets: [
        'Obtain complete reports, calculations, drawings, sample records, and change history instead of a cover page, supplier summary, marketplace badge, or cropped pass result',
        'Confirm the issuing party, report status, exact sample, complete configuration, factory, dates, methods, results, load conditions, installation assumptions, and limitations through independent contact details',
        'Ask qualified parties whether a component, material, source, factory, length, load, brake, instruction, or claim change requires new review, calculation, or testing',
        'Escalate missing pages, altered sample photos, unexplained model families, inconsistent dates, obsolete editions, or files that cannot be confirmed',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled boxed kits with approved drawings, bill of materials, golden sample, report identifiers, component specifications, warnings, instructions, packaging files, and carton records while the order remains accessible. The useful output is a traceable list of sampled model and component versions, measurements, visible defects, mismatches, and affected quantities.',
        'Check model and lot identity; component count; cable label, length, diameter, strand appearance, coating, visible kinks, flattening, corrosion, broken wires, and end terminations; turnbuckle or ratchet dimensions; trolley construction and wheel movement; seat, rope, belt, or harness construction; brake and stop identity; carabiners, fasteners, guards, tree protection, tools, warnings, installation steps, maintenance schedule, spare parts, and retail/carton pack-out against the buyer-approved plan.',
        'Do not suspend a person, rig an improvised anchor, or run an informal loaded ride during an ordinary factory inspection. Proof load, dynamic load, fatigue, braking distance, impact, corrosion, retention, installation, clearance, tree or support, and failure-mode evaluations require controlled methods, suitable fixtures, trained personnel, safe test areas, calibrated equipment, and qualified interpretation. Onsite evidence can show a mismatch or reason to hold and retest; it cannot reproduce an engineering validation program.',
      ],
      bullets: [
        'Use buyer-approved sampling, component drawings, measurement points, tolerances, defect classes, tools, photo requirements, and stop rules',
        'Photograph each sample number, model, production or lot code, cable and termination, tensioning part, trolley, seat/harness, brake, stop, connector, instruction set, package, and carton context',
        'Quantify substituted, mixed, missing, damaged, corroded, unlabeled, or out-of-tolerance components instead of calling them cosmetic differences',
        'Keep engineering samples, destructive tests, proof loads, dynamic tests, and installation validation separate from ordinary saleable-stock inspection',
      ],
    },
    {
      id: 'change-control',
      title: 'Control cable, hardware, brake, instruction, and factory changes',
      paragraphs: [
        'A change that looks minor to purchasing can alter the reviewed system. New cable source or construction, swage or loop, thimble, turnbuckle, ratchet, carabiner, trolley wheel, bearing, handle, seat, rope, belt, harness, spring, stopper, fastener, tree protector, finish, rated load, kit length, factory, package claim, installation step, or maintenance interval should enter written change control before mass production.',
        'Ask the responsible engineering, laboratory, product-safety, and compliance parties whether approved evidence still covers the change. Identify the first affected unit and carton, keep cleared and unresolved production physically separated, and map new samples, calculations, reports, instructions, warnings, or inspection criteria to the revised scope.',
        'If correction follows a failed inspection, retain the original finding. A defensible release shows affected quantity, segregation, controlled rework instructions, qualified disposition, revised evidence, repeat inspection samples, cleared carton range, and remaining open conditions.',
      ],
      bullets: [
        'Do not accept undocumented substitutions because a component looks similar or carries the same generic material description',
        'Trace component supplier and version, assembly, instructions, warnings, finished kit, production date, lot, SKU, and carton through one change record',
        'Hold mixed old and new configurations until affected scope and qualified evidence are reconciled',
        'Release a named model, component version, lot, and carton range—not a supplier promise that “all goods are fixed”',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Product and use scope',
      whatToConfirm:
        'Destination, intended users, installation setting, kit length, stated load, product claims, component list, responsible party, and qualified standards route are documented.',
      buyerDecision:
        'Proceed only with a qualified scope; hold kits whose user, load, installation, component, toy, playground, residential, or commercial classification remains unresolved.',
    },
    {
      riskNode: 'Exact-kit evidence',
      whatToConfirm:
        'Laboratory or engineer, reports, calculations, sample photos, methods, cable, terminations, tensioning, trolley, seat/harness, brake, hardware, factory, dates, results, and limitations align.',
      buyerDecision:
        'Release covered production only; escalate generic, partial, obsolete, unverifiable, or mismatched scope for qualified review, redesign, correction, or retesting.',
    },
    {
      riskNode: 'Components and workmanship',
      whatToConfirm:
        'Sampled kits match approved component identity, count, dimensions, construction, finish, terminations, moving-part condition, accessories, and buyer tolerances.',
      buyerDecision:
        'Hold affected lots for segregation, correction, qualified disposition, and repeat inspection when any load-bearing, retention, braking, or identity element differs.',
    },
    {
      riskNode: 'Instructions and pack-out',
      whatToConfirm:
        'User and load limits, installation, tension, braking, clearances, supervision, maintenance, replacement, stop-use warnings, model/lot identity, quantities, and cartons match approved files.',
      buyerDecision:
        'Hold missing, conflicting, removable, mixed, or model-inaccurate information; relabeling cannot cure an unsupported component or system design.',
    },
    {
      riskNode: 'Lot release',
      whatToConfirm:
        'Affected quantity, hold status, correction, qualified disposition, repeat inspection, open conditions, and cleared carton range are recorded.',
      buyerDecision:
        'Release named models, component versions, lots, quantities, and cartons only; keep unresolved scope on hold before payment and pickup.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'CPSC recall 26-632, published July 30, 2026, for China-made TT Trsmima zipline kits and spring brakes, including component failures, brake failures, injuries, affected quantities, sales period, and remedy',
    'Trsmima’s public recall notice confirming the affected kit and brake categories, stated design defects, stop-use direction, and component destruction steps',
    'CPSC recall 24-199 for China-made Jugader zipline kits, documenting a separate 2024 cable-break pattern, injuries, replacement cable, and updated instructions',
    'Current CPSC playground-equipment and manufacturing best-practices guidance, checked August 6, 2026 Beijing time',
    'ASTM International’s public F1148-21 scope page, used to frame home-playground evidence questions without supplying a product-specific applicability or compliance verdict',
    'Buyer-side sourcing analysis connecting those public records to exact-kit evidence, change control, finished-goods inspection, pack-out, hold, correction, and lot release',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Recalls/2026/Trsmima-Zipline-Kits-and-Zipline-Spring-Brakes-Recalled-Due-to-Fall-and-Collision-Hazards-Manufactured-by-Trsmima',
      label: 'CPSC Trsmima zipline kits and spring brakes recall',
      note: 'Primary July 30, 2026 record for the China-made products, exact component and braking hazards, reported incidents and injuries, affected quantities, sales period, and remedy.',
    },
    {
      href: 'https://tt-trsmima.com/pages/product-recall-notice',
      label: 'Trsmima public recall notice',
      note: 'Manufacturer notice confirming the recalled kit and spring-brake categories, stated defects, stop-use direction, and recall procedure.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2024/Zipline-Kits-Recalled-Due-to-Fall-Hazard-Sold-Exclusively-on-Amazon-com-by-Jugader',
      label: 'CPSC Jugader zipline kit recall',
      note: 'Primary April 11, 2024 record for a separate China-made kit, cable failures, reported injuries, replacement cable, and updated installation instructions.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Playground-Equipment',
      label: 'CPSC playground-equipment business guidance',
      note: 'Official starting point for applicable-requirement, toy, certificate, third-party testing, and home-playground standard questions; exact scope remains product-specific.',
    },
    {
      href: 'https://store.astm.org/f1148-21.html',
      label: 'ASTM F1148-21 official scope page',
      note: 'Official public scope and section overview for home playground equipment, including structural integrity, installation, maintenance, labeling, and information topics.',
    },
    {
      href: 'https://www.cpsc.gov/business--manufacturing/business-education/business-guidance/BestPractices',
      label: 'CPSC manufacturing best practices',
      note: 'Official supplier guidance covering applicable requirements, voluntary standards, safe design and production, quality control, and corrective-action planning.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Destination, intended users and age range, residential/public/commercial setting, installation assumptions, claimed load, kit length, exact model/SKU and configuration list, drawings, component specifications, and documented product-scope review',
    'Approved sample, bill of materials, cable source/construction/diameter/length/terminations, tensioning system, trolley, seat/rope/belt/harness, brake, stops, connectors, fasteners, accessories, factory, production dates, lots, carton map, and every change notice',
    'Complete laboratory reports, engineering calculations, issuer details, sample photos, methods, standard editions, current status, load and installation conditions, results, limitations, and an index mapping each file to the order',
    'Final rated-load and user warnings, installation/tension/braking/clearance instructions, supervision and maintenance steps, inspection and replacement criteria, stop-use conditions, responsible-party details, model/lot marks, retail artwork, barcode, SKU, carton marks, and packing list',
    'Buyer-approved sampling plan, component measurements, tools, tolerances, workmanship criteria, defect classes, stop rules, photo requirements, any qualified destructive-test plan, and the payment or pickup decision',
    'Any known cable, termination, turnbuckle, ratchet, trolley, seat, rope, belt, harness, brake, stop, connector, load-claim, report, supplier-change, test, rework, or prior inspection concern and its affected quantity',
  ],
  redFlags: [
    'The supplier relies on “heavy duty,” “aircraft cable,” a load claim, material label, marketplace badge, report logo, or seller assurance without complete exact-kit evidence',
    'The evidence shows another cable, termination, length, tensioning part, trolley, seat/harness, brake, stop, connector, load, factory, sample, date, standard edition, or model family',
    'Only a report cover, cropped screenshot, supplier summary, prototype file, component certificate, or unverifiable laboratory/engineering document is available',
    'Sampled kits have mixed cable, turnbuckle, ratchet, trolley, seat, rope, belt, harness, brake, stop, carabiner, fastener, warning, instruction, model, or lot identity',
    'The factory treats a hanging weight, worker ride, improvised anchor, hand pull, or wheel spin as proof of load capacity, fatigue life, brake distance, installation safety, or legal compliance',
    'Load, age, span, slope, anchor, clearance, braking, supervision, maintenance, replacement, or stop-use information conflicts across listing, instructions, labels, and packaging',
    'The supplier changed a load-bearing, retention, braking, installation, or identity element after testing without documented qualified review',
    'The correction plan lacks affected quantity, segregation, qualified disposition, controlled work instructions, revised files, carton map, or repeat inspection',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible zipline kit components, documents, buyer-approved dimensions, construction, cable and termination details, trolley, seat/harness, brake, stops, connectors, warnings, instructions, packages, cartons, quantities, and workmanship with an agreed reference set in China',
    'Huang Sourcing does not select legal requirements, classify the product for the importer, perform engineering design, conduct prescribed proof-load, dynamic, fatigue, braking, impact, corrosion, retention, anchor, or installation testing, certify standards conformity, or give legal advice',
    'An ordinary visual or buyer-defined onsite check cannot prove rated load, cable or termination strength, seat/harness retention, brake distance, fatigue life, installation safety, anchor or tree suitability, clearance, or compliance with every destination requirement',
    'Sampling cannot guarantee every unit outside the agreed scope, and sealed cartons, mixed lots, weak traceability, inaccessible goods, or missing approved references reduce confidence',
    'The manufacturer, importer, engineer, laboratory, compliance owner, installer, property owner, marketplace, retailer, authorities, supervisors, and users remain responsible for their product- and site-specific decisions',
    'A passed pre-shipment inspection does not guarantee regulatory compliance, report validity, safe installation, customs release, marketplace approval, recall avoidance, or safe performance after shipment',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'How to verify a China laboratory report',
      note: 'Check issuer, scope, sample photos, exact-product coverage, dates, methods, results, limitations, source confirmation, and production mismatches.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control plan for China manufacturing',
      note: 'Build approved references, component change control, qualified testing, inspections, corrections, and payment holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Match load and user warnings, installation and maintenance instructions, model/lot identity, retail packs, cartons, and correction evidence.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Define the photos, tools, measurements, traceability, mismatches, affected quantities, decisions, and limits the report should show.',
    },
    {
      href: '/qc-inspection-china',
      label: 'QC inspection in China',
      note: 'Compare buyer-approved components, packaging, quantity, measurements, and evidence while the actual goods are still accessible.',
    },
    {
      href: '/before-balance-payment-qc-china',
      label: 'Inspection before balance payment',
      note: 'Keep correction and payment leverage until cleared and unresolved shipment scope is visible.',
    },
    {
      href: '/pre-shipment-inspection-china-before-pickup',
      label: 'Pre-shipment inspection before pickup',
      note: 'Keep the goods accessible until model, component, lot, packaging, correction, and release evidence is complete.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, reports, testing, packaging, payment, pickup, and supplier decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
}

export function makeZiplineKitChecksChinaArticleMetadata(): Metadata {
  const article = ziplineKitChecksChinaArticle

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

export function makeZiplineKitChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(ziplineKitChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Zipline kit pre-shipment release checklist',
      itemListElement: ziplineKitChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
