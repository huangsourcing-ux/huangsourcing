import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  lithiumBatteryAirShippingChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  powerBankChecksChinaArticleHref,
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

type CheckGroup = {
  items: string[]
  title: string
}

type DecisionRow = {
  buyerDecision: string
  riskNode: string
  whatToConfirm: string
}

type RelatedLink = {
  href: string
  label: string
  note: string
}

type SourceNote = {
  href: string
  label: string
  note: string
}

export const powerBankChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: powerBankChecksChinaArticleHref,
  title: 'Power Bank Quality Checks Before Shipping from China',
  metaTitle: 'Power Bank Quality Checks Before China Shipment',
  metaDescription:
    'Use recent CPSC power bank cases to check model, serial, lot, battery evidence, visible condition, and carton scope before payment or pickup in China.',
  publishedDate: 'July 27, 2026',
  publishedDateIso: '2026-07-27T03:45:00+08:00',
  modifiedDate: 'September 29, 2026',
  modifiedDateIso: '2026-09-29T03:23:47+08:00',
  h1: 'Power Bank Quality Checks Before Shipping from China',
  eyebrow: 'Batch identity - product evidence - payment and shipment release',
  image: {
    alt: 'Neutral illustrative quality inspection of generic power banks, batch labels, cartons, scanner, and caliper before China shipment',
    height: 900,
    src: '/images/power-bank-quality-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/power-bank-quality-checks-china.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/power-bank-quality-checks-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/power-bank-quality-checks-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Before releasing balance payment or pickup for power banks in China, screen the exact model against current recalls and warnings. Then verify that each production lot, serial system, approved construction, technical file, visible condition, retail pack, and carton describes the same product. Hold affected or unidentified stock, any unit with a heat or swelling signal, and batches whose changes or corrections cannot be traced.',
  answerSummary:
    'Use three separate gates: qualified product-safety and laboratory review, buyer-side physical and document inspection, and dangerous-goods transport approval. A pre-shipment inspection can find visible and traceability problems, but it cannot prove lithium-cell safety, predict latent failure, issue a test report, or guarantee carrier or marketplace acceptance.',
  primaryCta: {
    label: 'Check Power Banks Before Shipment',
  },
  secondaryCta: {
    href: '#release-checklist',
    label: 'See Release Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side power bank quality and evidence check before shipment.

Product / model / SKU:
Capacity and output claims:
Factory and production lot:
Approved sample and specifications:
Test reports and transport documents:
Packaging and label files:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#identity-evidence', label: 'Identity and evidence' },
    { href: '#physical-checks', label: 'Physical checks' },
    { href: '#test-transport-boundary', label: 'Testing and transport boundary' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Search current CPSC recalls and warnings for the exact brand, model, aliases, factory, and known battery configuration; isolate any matching stock and follow the official notice rather than relying on a sample inspection',
    'Freeze the approved model, capacity, cell and pack construction, ports, firmware or protection-board version, enclosure, supplier, factory, lot, and sales claims before inspection',
    'Tie the purchase order, bill of materials, approved sample, drawings, label files, laboratory reports, UN 38.3 evidence, Safety Data Sheet, and transport documents to the same production version',
    'Trace sampled units by model, serial or date code, production lot, retail pack, master carton, and packing-list line',
    'Inspect for swelling, enclosure lift, seam gaps, distortion, cracking, impact marks, leakage, odor, discoloration, heat marks, loose ports, rattling, corrosion, or reworked labels',
    'Compare dimensions, weight, finish, port layout, indicators, accessories, warnings, capacity and output marking, importer details, barcodes, and package identity with approved references',
    'Run only buyer-approved, safe functional checks with suitable equipment and written limits; stop and isolate any unit showing abnormal heat, odor, noise, deformation, or unstable operation',
    'Separate visible inspection from accredited laboratory work and dangerous-goods decisions; do not treat a sample charge test as proof of cell safety, capacity, cycle life, or transport eligibility',
    'Release only when mismatches are quantified, affected stock is segregated, corrections are documented by lot and carton, required retesting is decided by qualified parties, and re-inspection evidence is complete',
  ],
  checkGroups: [
    {
      title: 'Order and batch identity',
      items: [
        'Model, SKU, nominal capacity and energy, input and output ratings, connector layout, color, dimensions, weight, accessories, sales channel, destination, factory, production date, lot, and serial or date-code format',
        'Purchase order, approved sample, bill of materials, drawings, change record, packing list, retail pack, carton mark, and unit identifiers all point to the same production version',
      ],
    },
    {
      title: 'Product condition and construction',
      items: [
        'Enclosure flatness, seam closure, fasteners, port alignment, indicator windows, buttons, finish, label permanence, accessories, and absence of visible swelling, cracks, leakage, corrosion, heat or impact damage',
        'Buyer-approved safe functional sample: charging and output behavior, indicator sequence, port fit, cable fit, basic control operation, abnormal heat or odor stop rule, and result traceability',
      ],
    },
    {
      title: 'Technical and compliance evidence',
      items: [
        'Applicant, manufacturer, factory, model, cell and pack identity, ratings, photos, sample dates, report scope, results, issue date, laboratory details, and destination-specific requirements',
        'Qualified decisions for product safety, claimed capacity and performance, applicable certifications, report coverage after changes, marketplace evidence, and whether new testing is required',
      ],
    },
    {
      title: 'Pack-out and release control',
      items: [
        'Unit warning and rating label, model and serial visibility, barcode, importer or responsible-party information, manual, retail-pack protection, terminal protection, accessories, carton quantity, weight, marks, and lot segregation',
        'Affected quantity, hold tag, carton map, correction instruction, replacement or rework record, retest decision, re-inspection result, balance-payment status, and forwarder handoff',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why power bank release evidence deserves attention now',
      paragraphs: [
        'Two September 2026 CPSC actions renew the release question. On September 24, CPSC announced a recall of about 21,380 China-made NEWDERY ZHX-PB22 power banks. The notice records nine reports of explosion or ignition, including one reported serious fire causing $2 million in property damage and one reported burn injury. On September 17, CPSC warned consumers to stop using Hererod PW40 and EW40 jump-starter/power banks after 16 fire reports, including seven reports of property damage. A warning is not the same action as a recall; both require a buyer to check exact product identity before release.',
        'Earlier official records show this is broader than one brand. In April 2026, CPSC reannounced a Casely wireless power bank recall after additional reports. The INIU BI-B41 recall covered named model and serial groups. Together, these records make model, serial, lot, and carton mapping operational evidence, not administrative decoration. They do not identify the root cause of any unrelated production batch.',
        'These public records do not prove that every China-made power bank, supplier, or order is unsafe. They show why a buyer should not release an untraceable or visibly abnormal batch and why absence of visible defects cannot replace qualified engineering, laboratory, certification, and transport review.',
      ],
      bullets: [
        'Before payment or pickup, record the date, official notice URL, exact model and serial scope checked, matching stock, and person responsible for the disposition',
        'A supplier statement that the same cell or same report was used is not enough when the model, factory, bill of materials, rating, report photo, or production date differs',
        'A clean-looking sample does not prove the internal cells, protection circuit, welds, insulation, capacity, or bulk lot meet requirements',
        'A report file does not prove that production matches the tested sample or that the report is authentic, current, complete, and applicable to the destination',
        'Correction leverage is strongest before balance payment and pickup, while segregation, document review, controlled rework, retesting, re-inspection, or cancellation remains practical',
      ],
    },
    {
      id: 'identity-evidence',
      title: 'Which model, cell, pack, and production lot are being released?',
      paragraphs: [
        'Begin with product identity, not a generic checklist. Record the exact power-bank model, SKU, advertised capacity, watt-hour rating, input and output specifications, connector arrangement, wireless-charging claim if any, dimensions, weight, enclosure, accessory set, destination, factory, production date, lot, and serial or date-code logic.',
        'Then connect the order to the evidence. A buyer or qualified specialist should compare the bill of materials, approved sample, drawings, change notices, report photos, laboratory applicant and manufacturer, cell and pack identity, protection design, label artwork, packaging, and transport documents. If production changed, disclose the change before deciding whether prior reports still apply.',
      ],
      bullets: [
        'Ask for an order-specific evidence index listing each file, model, report number, laboratory, issue date, sample identity, factory, lot, and destination',
        'Compare report and document identifiers with the unit label, retail pack, carton, packing list, purchase order, and final sales claim',
        'Escalate any changed cell supplier, cell model, pack layout, protection board, enclosure, port, cable, adhesive, insulation, firmware, factory, rating, or capacity claim',
        'Treat missing, duplicated, overwritten, inconsistent, or easily removable serial and lot marks as a release problem until traceability is restored',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a buyer-side inspection check on the physical batch?',
      paragraphs: [
        'A useful inspection compares sampled units with approved references and records every result by SKU and lot. It should cover enclosure geometry, seams, buttons, ports, indicators, finish, unit labels, accessories, retail packaging, carton protection, quantities, and any visible sign of swelling, heat, leakage, corrosion, impact, or undocumented rework.',
        'Functional checks need a buyer-approved method, suitable equipment, safe charging conditions, and stop criteria. A short sample check may confirm basic input, output, indicators, controls, or connector fit. It must not be described as proof of rated capacity, protection performance, abuse tolerance, cycle life, or battery safety.',
      ],
      bullets: [
        'Photograph the full unit, ratings, model and serial or date code, every port, seams, indicators, accessory set, retail pack, lot mark, and carton mark in context',
        'Compare dimensions and weight against approved tolerances; unexplained drift can be a clue that construction or supplied components changed',
        'Open cartons across the agreed sampling plan to detect mixed models, lots, label revisions, accessories, packaging, or correction status',
        'Stop use, isolate the item, protect personnel and property, and follow the buyer’s qualified safety process if swelling, heat, odor, smoke, leakage, hissing, sparking, or damaged cells are suspected',
      ],
    },
    {
      id: 'test-transport-boundary',
      title: 'What must remain with laboratories, compliance teams, and carriers?',
      paragraphs: [
        'Product inspection and laboratory evaluation answer different questions. An accredited or otherwise qualified laboratory may be needed for destination-specific electrical, battery, capacity, electromagnetic, chemical, transport, or marketplace requirements. The importer and advisers must decide the applicable standards, sample plan, report validity, certificate language, and whether production changes require new testing.',
        'Transport approval is a separate gate. The shipper, forwarder, carrier, dangerous-goods specialist, and destination authorities decide classification, documentation, state of charge, packing instruction, labels, marks, quantity limits, acceptance, and routing. A passed visual inspection does not authorize air or ocean carriage.',
      ],
      bullets: [
        'Do not use an open-circuit voltage reading, short charge cycle, USB load, sample teardown, factory aging sheet, supplier declaration, SDS, or UN 38.3 summary as a substitute for every other required test or approval',
        'Do not assume a report for a bare cell automatically covers the finished power bank, or that a report for one finished model covers changed cells, ratings, pack layouts, factories, or model families',
        'Keep product-release, marketplace, customs, and dangerous-goods decisions separately approved and version controlled',
        'Reconfirm current carrier and marketplace instructions before production, labeling, booking, pickup, and shipment because acceptance rules can change',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Recall or warning scope may match the order',
      whatToConfirm:
        'Official notice, model aliases, unit and carton identifiers, production dates, supplier explanation, affected quantity, and stock segregation',
      buyerDecision:
        'Stop release of matching or unidentified stock; follow the official action and obtain qualified disposition before any further shipment decision.',
    },
    {
      riskNode: 'Identity and traceability align',
      whatToConfirm:
        'PO, model, rating, cell and pack references, factory, lot, serial system, approved sample, reports, labels, packs, cartons, and packing list identify the same version',
      buyerDecision:
        'Continue, correct records, segregate unknown stock, expand traceability checks, or hold payment and pickup.',
    },
    {
      riskNode: 'Physical batch is consistent',
      whatToConfirm:
        'Sampled units match approved dimensions, weight, ports, finish, labels, accessories, packaging, cartons, and show no visible swelling, heat, leakage, impact, corrosion, or rework concern',
      buyerDecision:
        'Release the cleared scope, isolate affected units, quantify the lot, investigate, rework, replace, or re-inspect.',
    },
    {
      riskNode: 'Technical evidence covers production',
      whatToConfirm:
        'Qualified parties accept the laboratory, applicant, manufacturer, model, cell and pack identity, sample, report scope, results, issue date, changes, and destination use',
      buyerDecision:
        'Approve, obtain source files, verify with the laboratory, submit changed samples, retest, redesign, or stop the order.',
    },
    {
      riskNode: 'Correction and transport handoff are controlled',
      whatToConfirm:
        'Affected quantities, carton map, safe correction instruction, replacement, retest decision, re-inspection, final documents, dangerous-goods review, and pickup approval are recorded',
      buyerDecision:
        'Release only the cleared range, hold affected cartons, change routing, delay balance payment, or delay pickup.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official CPSC NEWDERY and Hererod September 2026 records, the earlier Casely, Super Off-Road, and INIU cases, and CPSC battery guidance checked September 29, 2026 Beijing time; independent 2026 portable-charger coverage supports continuing public attention.',
    'Buyer-approved purchase order, product specification, drawings, bill of materials, approved sample, change records, test plan, report set, label and packaging files, packing list, and release rules.',
    'Physical model and lot identifiers, enclosure, ports, buttons, indicators, unit labels, accessories, retail packs, cartons, quantities, visible condition, and safe buyer-approved functional observations.',
    'Separate qualified decisions from laboratories, compliance advisers, importers, marketplaces, forwarders, dangerous-goods specialists, and carriers where their responsibility begins.',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Recalls/2026/NEWDERY-Power-Banks-Recalled-Due-to-Fire-and-Burn-Hazards-Risk-of-Serious-Injury-Sold-on-Amazon',
      label: 'CPSC - NEWDERY ZHX-PB22 power bank recall',
      note: 'Primary September 24, 2026 record for the named model, China origin, affected quantity, fire reports, injury report, and remedy.',
    },
    {
      href: 'https://www.cpsc.gov/Warnings/2026/CPSC-Urges-Consumers-to-Stop-Using-Hererod-Jump-Starters-Power-Banks-Immediately-Due-to-Risk-of-Serious-Injury-and-Death-from-Fire-Hazard',
      label: 'CPSC - Hererod PW40 and EW40 safety warning',
      note: 'Primary September 17, 2026 warning for two China-made jump-starter/power bank models and 16 reported fires.',
    },
    {
      href: 'https://www.cpsc.gov/Regulations-Laws--Standards/Voluntary-Standards/Topics/Batteries',
      label: 'CPSC - battery safety and voluntary standards',
      note: 'Official background on battery hazards, system-level testing, and UL 2056 as a voluntary power-bank standard.',
    },
    {
      href: 'https://www.whec.com/wp-content/uploads/2026/04/SAFE-AT-HOME-FULL-REPORT-2026.pdf',
      label: 'WHEC - 2026 Safe at Home portable charger report',
      note: 'Independent 2026 consumer coverage of portable-charger recalls and fire concerns; not a source for the September case counts.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/Super-Off-Road-Solar-Power-Banks-Recalled-Due-to-Overheating-Imported-by-Spector-Co',
      label: 'CPSC - Super Off-Road solar power bank recall',
      note: 'Primary June 25, 2026 case record for a China-made power bank, battery-swelling reports, model description, affected quantity, and recall scope.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/Casely-Reannounces-Recall-of-Wireless-Portable-Power-Banks-Due-to-Risk-of-Serious-Injury-or-Death-from-Fire-and-Burn-Hazards-One-Fatality-Reported-After-2025-Recall',
      label: 'CPSC - Casely power bank recall reannouncement',
      note: 'Primary April 2026 record documenting the prior recall, additional overheating and fire reports, one fatality, and a February 2026 airplane incident.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/INIU-Recalls-Power-Banks-Due-to-Fire-and-Burn-Hazards-Sold-on-Amazon',
      label: 'CPSC - INIU BI-B41 power bank recall',
      note: 'Primary record for the China-made model and affected serial groups, reported overheating and fires, injuries, property damage, and model-level traceability.',
    },
    {
      href: 'https://www.techradar.com/phones/this-popular-anker-rival-has-just-recalled-a-power-bank-due-to-a-fire-hazard-heres-what-to-do',
      label: 'TechRadar - independent INIU recall coverage',
      note: 'Independent reporting that explains the affected model and serial scope and relays the official incident record and disposal warning.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Purchase order, final specification, model and SKU list, nominal capacity and energy, input and output ratings, connector layout, dimensions, weight, finish, accessories, destination, and sales-channel claims',
    'Approved sample record, drawings, bill of materials, cell and pack references, protection-board details, factory and supplier list, production dates, lots, serial or date-code logic, and every approved change notice',
    'Laboratory reports, sample photos, certificates, declarations, UN 38.3 evidence, Safety Data Sheet, transport files, marketplace requests, and an index mapping each file to the order',
    'Final unit rating label, warnings, manual, barcode, importer or responsible-party information, retail-pack artwork, carton marks, packing list, and carton map',
    'Buyer-approved inspection method, safe functional-check limits, sampling plan, defect definitions, stop rules, photo requirements, and balance-payment or pickup decision',
    'Any known swelling, heat, odor, leakage, charging, capacity, port, label, document, packaging, damage, or supplier-change concern and the affected quantity',
  ],
  redFlags: [
    'The supplier will not identify the cell, pack, protection-board, factory, production lot, serial logic, or changes behind the finished product',
    'Report photos, model names, ratings, applicant, manufacturer, factory, dates, or sample descriptions do not match the order',
    'A report is cropped, incomplete, edited, expired where relevant, outside the laboratory’s scope, or cannot be confirmed through a qualified verification process',
    'Units show swelling, raised seams, distortion, cracked cases, heat or impact marks, leakage, odor, corrosion, loose ports, rattling, or inconsistent weight',
    'Serial, date, lot, barcode, retail-pack, carton, and packing-list identifiers cannot be reconciled or appear duplicated, overwritten, or applied after correction',
    'The supplier uses a brief charging video, multimeter photo, aging sheet, SDS, declaration, or UN 38.3 file as proof of every product-safety and performance claim',
    'Cartons mix models, lots, ratings, label revisions, accessories, packaging, or corrected and uncorrected units',
    'The correction plan lacks affected quantity, segregation, safe technical instruction, replacement or rework traceability, retest decision, carton map, or repeat inspection',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible products, identifiers, files, labels, accessories, retail packs, cartons, quantities, and buyer-approved observations with the agreed reference set in China',
    'Huang Sourcing does not design battery systems, open or destructively test cells, authenticate every document, certify safety or compliance, issue laboratory or transport reports, or provide legal advice',
    'Visual inspection and short functional sampling cannot prove internal cell quality, protection performance, rated capacity, cycle life, abuse tolerance, electromagnetic performance, chemical compliance, product safety, or absence of latent defects',
    'Sampling cannot guarantee every unit outside the agreed scope, and sealed products, mixed lots, weak traceability, inaccessible factories, unsafe test conditions, or restricted equipment reduce confidence',
    'The importer, manufacturer, qualified laboratory, engineer, compliance adviser, broker, marketplace, forwarder, dangerous-goods specialist, carrier, and authorities remain responsible for their product-specific decisions',
    'A passed pre-shipment inspection does not guarantee marketplace approval, customs release, carrier acceptance, safe transport, recall avoidance, or safe performance after shipment',
  ],
  relatedLinks: [
    {
      href: lithiumBatteryAirShippingChinaArticleHref,
      label: 'Lithium battery air shipping from China',
      note: 'Use the separate transport checklist for UN 38.3 evidence, dangerous-goods declarations, state-of-charge instructions, packing, labels, and carrier handoff.',
    },
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'How to verify a China laboratory report',
      note: 'Check report identity, laboratory scope, sample photos, model coverage, dates, source confirmation, and mismatch escalation.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control plan for China manufacturing',
      note: 'Build approved references, change control, laboratory gates, inspections, corrections, and payment holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Match unit ratings, warnings, barcodes, manuals, retail packs, carton marks, quantities, and correction evidence before release.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Define the photos, traceability, observable results, mismatches, affected quantity, and scope limits the release report should show.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, report, packaging, payment, pickup, and supplier decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
}

export function makePowerBankChecksChinaArticleMetadata(): Metadata {
  const article = powerBankChecksChinaArticle

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: article.href,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: article.href,
      siteName: 'Huang Sourcing',
      type: 'article',
      publishedTime: article.publishedDateIso,
      modifiedTime: article.modifiedDateIso,
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

export function makePowerBankChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(powerBankChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Power bank pre-shipment release checklist',
      itemListElement: powerBankChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
