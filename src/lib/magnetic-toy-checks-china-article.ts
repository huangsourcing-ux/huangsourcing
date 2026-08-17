import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  cpscEfilingChinaImportsArticleHref,
  magneticToyChecksChinaArticleHref,
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

export const magneticToyChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: magneticToyChecksChinaArticleHref,
  title: 'Magnetic Toy Checks Before Shipping from China',
  metaTitle: 'Magnetic Toy Checks Before China Shipment',
  metaDescription:
    'Check magnetic toys before China shipment: exact model, age grade, magnet retention, lab evidence, CPC data, tracking labels, packaging, lots, and release.',
  publishedDate: 'August 1, 2026',
  publishedDateIso: '2026-08-01T03:29:11+08:00',
  modifiedDate: 'August 18, 2026',
  modifiedDateIso: '2026-08-18T03:24:59+08:00',
  h1: 'Magnetic Toy Checks Before Shipping from China',
  eyebrow: 'Exact model - magnet retention - payment and shipment release',
  image: {
    alt: 'Neutral illustrative inspection bench with unbranded wooden magnetic toy pieces, caliper, gauge, sample bags, and blank checklist before China shipment',
    height: 900,
    src: '/images/magnetic-toy-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/magnetic-toy-checks-china.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/magnetic-toy-checks-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/magnetic-toy-checks-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Before releasing balance payment or forwarder pickup for magnetic toys in China, freeze the exact product, intended age and play pattern, destination market, bill of materials, magnet construction, test sample, laboratory evidence, certification data, tracking marks, warnings, packaging, and production lot. Hold any scope where the physical shipment and approved evidence do not align.',
  answerSummary:
    'Use three separate gates: responsible product classification, qualified testing and certification for the exact model, and buyer-side inspection of sampled mass production. A China-side inspection can compare construction, accessible parts, dimensions, visible magnet security, markings, labels, documents, cartons, and correction evidence, but it cannot certify magnetic flux, reproduce every use-and-abuse test, or guarantee legal compliance.',
  primaryCta: {
    label: 'Check Magnetic Toys Before Shipment',
  },
  secondaryCta: {
    href: '#release-checklist',
    label: 'See Release Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side magnetic toy evidence and quality check before shipment.

Destination market:
Product, model, SKU, and intended age:
Play pattern and magnet locations:
Factory and production lot:
Approved sample, drawings, bill of materials, and specifications:
Test reports, CPC/GCC data, and applicable-standard review:
Tracking labels, warnings, packaging, and carton files:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#classification', label: 'Product classification' },
    { href: '#model-control', label: 'Exact model and lot' },
    { href: '#qualified-evidence', label: 'Qualified evidence' },
    { href: '#physical-checks', label: 'Physical shipment checks' },
    { href: '#marking-packaging', label: 'Marking and packaging' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze the destination market, intended age, play pattern, exact model and SKU, construction, magnet count and locations, materials, factory, production date, lot, packaging, and every approved change',
    'Require the importer and qualified compliance parties to identify which toy or general-use magnet rules, accepted standard version, tests, certificates, labels, filings, and marketplace duties apply',
    'Match the full laboratory report, test sample photos, manufacturer, factory, model, materials, magnet construction, age grade, dates, results, CPC or GCC data, and current production configuration',
    'Compare sampled mass production with the approved sample, drawings, bill of materials, magnet-retention method, dimensions, seams or enclosures, fasteners, adhesives, welds, molding, finish, and workmanship',
    'Use only buyer-approved inspection methods; do not improvise destructive pull, torque, tension, drop, impact, small-parts, or flux tests on finished goods',
    'Check producer and tracking marks, age grading, warnings, instructions, retail claims, barcode, lot identity, carton quantity, carton marks, and packing-list alignment',
    'Hold mixed, substituted, damaged, visibly loose, missing-magnet, undocumented, mislabeled, or untraceable scope until affected stock is segregated and qualified disposition is documented',
    'Release only named models, lots, and cartons after correction evidence and re-inspection are complete; keep unresolved testing, certification, regulatory, and importer decisions open',
  ],
  checkGroups: [
    {
      title: 'Classification and exact model',
      items: [
        'Destination, intended age, marketing, play pattern, model, SKU, dimensions, materials, magnet count, magnet locations, construction method, manufacturer, factory, date, lot, and approved revisions are controlled',
        'Purchase order, drawing, bill of materials, approved sample, report, certificate data, markings, instructions, retail pack, carton, and packing list identify the same production version',
      ],
    },
    {
      title: 'Qualified evidence',
      items: [
        'Applicable rule and standard review, laboratory and accreditation scope, report number, issue date, test sample photos, model, materials, magnet construction, age grade, results, limitations, and current status align',
        'CPC or GCC data and any CPSC eFiling record map to the exact imported finished product rather than a component, earlier design, generic supplier family, or another factory',
      ],
    },
    {
      title: 'Physical product and pack-out',
      items: [
        'Sampled toys match approved references for magnet enclosure, seams, plugs, fasteners, welds, molding, adhesive condition, dimensions, gaps, edges, points, damage, missing parts, visible looseness, and workmanship',
        'Producer and tracking marks, age grade, warnings, instructions, claims, barcode, lot, retail package, quantity, carton marks, and packing list remain complete, legible, and consistent',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, carton map, supplier-change record, correction instruction, qualified retest or certification decision, revised files, and repeat inspection are traceable',
        'Cleared and unresolved models, lots, and cartons remain separated; the final release names exact scope and open conditions instead of giving the whole order a blanket pass',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why magnetic toy shipment evidence matters now',
      paragraphs: [
        'On August 13, 2026, the U.S. Consumer Product Safety Commission announced a recall of about 213,500 Goody King magnetic building cube and block sets made in China. CPSC says the cubes can break or open and release small, powerful magnets. The importer reported at least 27 breakage or opening incidents and two children who required surgery after ingesting magnets. The affected models were sold on Amazon from January 2024 through July 2026.',
        'Associated Press separately reported the recall and the two surgeries on the day of the CPSC announcement. Earlier 2026 CPSC actions involving loose or liberated high-powered magnets, including the Daoen Zen Fidget Magnetic Ball Sets recall, show that the current Goody King case is not an isolated product-evidence question.',
        'On June 2, 2026, the Australian Competition and Consumer Commission said it had sent takedown requests to Amazon, eBay, Kogan, and Fruugo for listings involving banned or non-compliant magnetic toys and games. The ACCC also opened a limited review of its mandatory toys-containing-magnets standard, with submissions due July 31, 2026.',
        'The U.S. and Australian records do not prove that every China-made magnetic toy, seller, or factory has the same problem, and their legal requirements are not interchangeable. Together they show a current cross-market reason to verify product classification, exact-model evidence, enclosure and retention construction, labels, lot traceability, and shipment identity before goods move.',
      ],
      bullets: [
        'An age label, online category, promotional use, or supplier assurance does not settle product classification',
        'A report is useful only when its exact sample and scope align with current mass production',
        'A magnet that looks enclosed may still require qualified use-and-abuse and flux evaluation',
        'Correction leverage is strongest before balance payment and pickup, while segregation, redesign, retesting, relabeling, re-inspection, or cancellation remains practical',
      ],
    },
    {
      id: 'classification',
      title: 'Classify the product before choosing tests or labels',
      paragraphs: [
        'Start with destination market, intended age, marketing, instructions, play pattern, where magnetic properties matter, and whether magnets are loose, separable, or built into components. Do not let a marketplace title or a factory-selected age grade silently decide which rules apply.',
        'CPSC guidance says ASTM F963 is mandatory for children\'s toys under 16 CFR part 1250. It also explains that toys are generally products designed, manufactured, or marketed as playthings for children under 14, while U.S. third-party testing and CPC duties apply to toys intended primarily for children 12 or younger. Responsible compliance parties must determine the actual scope for the product.',
        'For U.S. toy magnets, CPSC summarizes ASTM F963 section 4.38: loose magnets or magnetic components that arrive loose or are liberated by use-and-abuse testing, fit the small-parts cylinder, and exceed the permitted flux threshold are restricted. Other magnet products can fall under a different rule. This is why buyers should not reuse a toy report for a stress-relief, jewelry, educational, or general-use magnet product without a documented scope review.',
      ],
      bullets: [
        'Record intended age and actual marketing across package, listing, instructions, advertising, and distributor files',
        'Identify every magnet and whether it is a play feature, hidden component, loose piece, removable accessory, fastener, or electrical component',
        'Document the responsible importer or compliance owner and the rule-selection decision',
        'Treat U.S., Australian, EU, UK, Canadian, and other market requirements as separate reviews unless qualified evidence shows accepted equivalence',
      ],
    },
    {
      id: 'model-control',
      title: 'Freeze magnet construction and the production lot',
      paragraphs: [
        'Build one controlled model record connecting the commercial SKU to the toy body, dimensions, materials, coatings, magnet grade and geometry, count, polarity where relevant, locations, enclosure depth, plugs, caps, seams, fasteners, welds, adhesive system, molding details, assembly process, factory, date, and lot.',
        'Match that record to approved sample photos and the laboratory sample. A family report should not silently cover different shapes, materials, magnet locations, enclosures, adhesives, or factories. Ask the laboratory or responsible compliance party to document any valid model-family relationship.',
        'Use change control for magnets, plastic or wood, adhesive, weld parameters, fasteners, wall thickness, plug dimensions, mold, assembly sequence, supplier, factory, labels, and age grade. Safety-relevant changes should trigger a qualified review before affected production is released.',
      ],
      bullets: [
        'Photograph every magnet location and enclosure detail on the approved sample',
        'Record first and last affected lots and cartons for every revision',
        'Keep approved and unapproved versions physically separated through packing and pickup',
        'Reject undocumented substitutions even when the finished toy looks similar',
      ],
    },
    {
      id: 'qualified-evidence',
      title: 'What should qualified reports and certificates establish?',
      paragraphs: [
        'Review the complete evidence chain: issuing laboratory, accreditation or CPSC acceptance where required, report number, standard and edition, applicable clauses, manufacturer, factory, exact model, age grade, materials, magnet construction, sample photos, receipt and test dates, results, limitations, and authorized certificate data.',
        'For U.S. children\'s toys that require certification, CPSC guidance says the manufacturer or importer issues a CPC based on applicable testing and lists 16 CFR part 1250 plus the relevant ASTM F963 sections. The importer remains responsible for accurate product and certificate information. A factory-created PDF does not transfer that responsibility.',
        'Compare the tested sample with current production before relying on a pass. A genuine report for an earlier design, another factory, a different magnet enclosure, or a generic component does not prove that the shipment matches the tested product.',
      ],
      bullets: [
        'Obtain the complete report rather than a certificate cover, cropped screenshot, or supplier summary',
        'Verify the issuer and laboratory scope at the claimed source where possible',
        'Map every result and limitation to the exact model, age grade, market, and production version',
        'Escalate missing pages, altered sample photos, inconsistent dates, unexplained model families, and reports that cannot be confirmed',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled finished goods with approved drawings, bills of materials, sample photos, report identifiers, markings, instructions, packaging files, and carton records while the order is accessible. The useful output is a traceable list of sampled units, magnet locations, visible construction, measurements, defects, mismatches, and affected quantities.',
        'Check product identity, dimensions, count and location of magnetic components, enclosure condition, seams, plugs, caps, fasteners, welds, molding, adhesive squeeze-out or gaps, cracks, deformation, rough edges, sharp points, missing parts, rattling, visible looseness, and damage. Use buyer-approved functional and workmanship checks only.',
        'Do not improvise destructive retention, drop, impact, torque, tension, compression, small-parts, flux, chemical, or abuse testing. Those methods require the applicable standard, calibrated equipment, conditioning, sample preparation, trained personnel, and responsible disposition. An onsite comparison can identify reasons to hold or retest; it cannot issue a compliance verdict.',
      ],
      bullets: [
        'Use buyer-approved sampling, tools, tolerances, defect definitions, and stop rules',
        'Photograph each magnet location, mismatch, sample number, model, lot, and carton context',
        'Quantify mixed or changed construction rather than describing it as a cosmetic issue',
        'Keep any destructive sample plan separate from saleable stock and under qualified written instructions',
      ],
    },
    {
      id: 'marking-packaging',
      title: 'Check tracking marks, warnings, instructions, and claims',
      paragraphs: [
        'CPSC guidance states that children\'s products must carry tracking information on both the product and packaging, allowing the manufacturer or private labeler, place and date of production, and batch or run to be identified. The exact producer markings, age grade, warnings, and instructional language depend on the product and applicable requirements.',
        'Compare final product marks, package panels, age claims, warning text, instructions, online listing files, barcodes, SKU, lot, retail pack, carton quantity, carton marks, and packing list with the approved artwork. A warning cannot cure a prohibited product design, failed test, or wrong classification.',
        'Inspect legibility, permanence where required, translation, placement, contrast, completeness, and consistency across sampled units. Treat mixed or missing traceability as a release issue because later correction, recall, and customer communication depend on knowing which units and lots are affected.',
      ],
      bullets: [
        'Do not let “adult,” “14+,” “educational,” or “not a toy” appear only as an unsupported label workaround',
        'Match package claims and listing claims to the same age and use assumptions used for testing',
        'Check product and package traceability separately rather than photographing one convenient carton',
        'Require revised artwork, controlled rework, affected-quantity records, and repeat inspection after corrections',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Classification and market',
      whatToConfirm:
        'Destination, intended age, marketing, play pattern, magnet use, responsible compliance owner, applicable rules, accepted standard version, testing, certification, and filing duties are documented.',
      buyerDecision:
        'Proceed only with a qualified route; hold or stop products whose legal category, age grade, market, or loose-magnet status remains unresolved.',
    },
    {
      riskNode: 'Exact-model evidence',
      whatToConfirm:
        'Laboratory, report, sample photos, model, manufacturer, factory, materials, magnet construction, age grade, dates, results, limitations, and CPC or GCC data align with production.',
      buyerDecision:
        'Release covered production only; escalate generic, partial, altered, unverifiable, expired, or mismatched evidence for qualified review or retesting.',
    },
    {
      riskNode: 'Magnet retention',
      whatToConfirm:
        'Sampled toys match the approved enclosure, seams, plugs, caps, fasteners, welds, adhesive, molding, dimensions, gaps, and workmanship with no visible looseness, damage, or substitution.',
      buyerDecision:
        'Accept only within the buyer-approved inspection plan; hold affected lots for segregation, correction, qualified testing, and re-inspection when construction differs.',
    },
    {
      riskNode: 'Marking and traceability',
      whatToConfirm:
        'Product and package tracking marks, producer identity, age grade, warnings, instructions, claims, barcode, lot, retail pack, cartons, and packing list are complete and consistent.',
      buyerDecision:
        'Hold missing, mixed, unreadable, unsupported, or conflicting scope until controlled correction and repeat inspection are complete.',
    },
    {
      riskNode: 'Shipment release',
      whatToConfirm:
        'Cleared models, lots, cartons, quantities, evidence versions, inspection samples, corrections, open conditions, and responsible release owner are named.',
      buyerDecision:
        'Release only the documented cleared scope; do not turn a sampled inspection into a blanket guarantee for the entire order or future production.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'The August 13, 2026 CPSC Goody King recall for about 213,500 China-made magnetic building sets, including the reported breakage or opening incidents and two ingestion surgeries',
    'Independent Associated Press reporting used to confirm current public attention and distinguish reporting from the primary regulator record',
    'Current CPSC toy-safety guidance for ASTM F963, magnet provisions, use-and-abuse context, tracking marks, testing, and CPC responsibilities',
    'The May 28, 2026 CPSC Daoen recall plus the June 2, 2026 ACCC cross-marketplace takedown action and July 2026 mandatory-standard review as broader incident and enforcement context',
    'Buyer-side exact-model, document, construction, marking, packaging, lot, correction, and release evidence that can be compared before goods leave China',
    'Explicit separation between visible shipment inspection and qualified classification, testing, certification, regulatory, importer, marketplace, and legal responsibilities',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Recalls/2026/Goody-King-Magnetic-Building-Cubes-and-Blocks-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Magnetic-Ingestion-Hazard-Imported-by-Yi-Suen-Commerce',
      label: 'CPSC - Goody King magnetic building toys recall',
      note: 'Primary August 13, 2026 public case identifying about 213,500 China-made magnetic building sets, affected model numbers, Amazon sales period, breakage or opening reports, two ingestion surgeries, and the refund remedy.',
    },
    {
      href: 'https://apnews.com/article/b22a06f9394392e0da55e96b074e976a',
      label: 'Associated Press - Goody King recall report',
      note: 'Independent August 13, 2026 reporting on the CPSC action, affected unit count, magnet-release mechanism, incidents, injuries, models, sales channel, and remedy.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/Daoen-Recalls-Zen-Magnetic-Promotional-Ball-Sets-Due-to-Risk-of-Serious-Injury-or-Death-from-Magnet-Ingestion-Violate-Mandatory-Standard-for-Toys',
      label: 'CPSC - Daoen Zen magnetic ball sets recall',
      note: 'Earlier May 28, 2026 primary record identifying about 1,000 China-made loose high-powered magnetic ball sets, the mandatory-toy-standard violation, distribution period, no reported incidents or injuries, and disposal remedy.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Toy-Safety',
      label: 'CPSC - Toy Safety Business Guidance',
      note: 'Primary current guidance covering 16 CFR part 1250, ASTM F963 applicability, age scope, magnet section 4.38, testing, CPC certification, tracking labels, and version dates.',
    },
    {
      href: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Magnets',
      label: 'CPSC - magnets safety and recall hub',
      note: 'Primary CPSC hub linking current magnet recalls, warnings, safety materials, regulations, and historical public records.',
    },
    {
      href: 'https://www.accc.gov.au/media-release/accc-issues-takedown-requests-to-amazon-ebay-kogan-and-fruugo-for-toys-and-games-containing-potentially-deadly-small-magnets',
      label: 'ACCC - magnetic toy marketplace takedown action',
      note: 'Primary June 2, 2026 cross-marketplace action explaining the investigation, affected listing types, permanent-ban context, magnet-toy standard, supplier duties, and enforcement focus.',
    },
    {
      href: 'https://consultation.accc.gov.au/accc/toys-containing-magnets-limited-review/consult_view/',
      label: 'ACCC - limited review of the magnet-toy standard',
      note: 'Primary current consultation describing the Australian standard scope, design, construction, testing, and labeling coverage, the limited-review questions, and the July 31, 2026 submission deadline.',
    },
    {
      href: 'https://www.cpsc.gov/FAQ/eFiling-Frequently-Asked-Questions-FAQ',
      label: 'CPSC - eFiling frequently asked questions',
      note: 'Primary current guidance for determining which imported regulated consumer products require certificate data and how importers remain responsible for accurate filings.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Destination market, product use, intended age, marketing and listing files, exact model and SKU list, dimensions, materials, magnet count, magnet geometry and locations, play pattern, and buyer-approved tolerances',
    'Approved sample record, full photos, drawings, bill of materials, magnet and enclosure specifications, adhesive or weld specifications, assembly instructions, manufacturer, factory, dates, lots, carton map, and every change notice',
    'Applicable-rule review, complete laboratory reports, issuer and laboratory details, sample photos, current status, scope and limitations, CPC or GCC data, eFiling plan where applicable, and an index mapping every file to the exact order',
    'Final producer and tracking marks, age grade, warnings, instructions, listing claims, retail-pack artwork, barcode, SKU, lot code, carton marks, and packing list',
    'Buyer-approved sampling plan, tools, measurements, workmanship criteria, defect classes, stop rules, photo requirements, any qualified destructive-test sample plan, and the payment or pickup decision',
    'Any known loose-magnet, rattle, crack, enclosure, adhesive, weld, fastener, material, report, label, supplier-change, or prior test concern and its affected quantity',
  ],
  redFlags: [
    'The supplier relies on an age label, listing category, warning, or “not a toy” claim without a documented product-classification review',
    'The report shows another manufacturer, factory, model, age grade, material, magnet construction, sample photo, standard version, date, or product category',
    'Only a certificate cover, cropped screenshot, supplier summary, component report, or unverifiable laboratory file is available',
    'Sampled toys have mixed magnet count, grade claim, location, enclosure, seams, plugs, fasteners, welds, adhesive, molding, dimensions, or materials',
    'A magnet is missing, visible, rattling, loose, cracked out of its enclosure, or accessible after ordinary handling',
    'Product and package tracking marks, producer details, age grade, warnings, instructions, SKU, lot, barcode, carton marks, or packing list conflict',
    'The factory performs improvised pull, impact, drop, flux, or small-parts tests without the approved method, calibrated equipment, trained operator, or traceable samples',
    'The correction plan lacks affected quantity, segregation, qualified retest or certification disposition, controlled work instructions, revised files, carton map, or repeat inspection',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible magnetic toys, documents, buyer-approved dimensions, magnet locations, enclosure construction, seams, plugs, fasteners, welds, adhesive condition, markings, packages, cartons, quantities, and workmanship with an agreed reference set in China',
    'Huang Sourcing does not select legal requirements, certify ASTM F963 or other compliance, conduct laboratory flux or full use-and-abuse testing, issue a CPC or GCC, submit importer eFiling, authorize marketplace listings, or give legal advice',
    'A visual or buyer-defined onsite check cannot prove magnetic flux, internal adhesive strength, chemical composition, abuse-test performance, long-term retention, or compliance with every destination-market requirement',
    'Sampling cannot guarantee every unit outside the agreed scope, and sealed cartons, mixed lots, weak traceability, inaccessible goods, or missing approved references reduce confidence',
    'The manufacturer, importer, laboratory, compliance owner, broker, marketplace, retailer, authorities, and end user remain responsible for their product-specific decisions',
    'A passed pre-shipment inspection does not guarantee regulatory compliance, certificate validity, eFiling acceptance, customs release, marketplace approval, recall avoidance, or safe performance after shipment',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'How to verify a China laboratory report',
      note: 'Check issuer, laboratory scope, sample photos, exact-model coverage, dates, results, limitations, source confirmation, and production mismatches.',
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
      note: 'Match tracking marks, warnings, instructions, claims, age grade, model and lot identity, retail packs, cartons, and correction evidence.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Define the photos, tools, measurements, traceability, mismatches, affected quantities, decisions, and limits the report should show.',
    },
    {
      href: '/qc-inspection-china',
      label: 'QC inspection in China',
      note: 'Compare buyer-approved product, packaging, quantity, and evidence references while the actual goods are still accessible.',
    },
    {
      href: '/before-balance-payment-qc-china',
      label: 'Inspection before balance payment',
      note: 'Keep correction and payment leverage until the cleared and unresolved shipment scope is visible.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, report, testing, packaging, payment, pickup, and supplier decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
}

export function makeMagneticToyChecksChinaArticleMetadata(): Metadata {
  const article = magneticToyChecksChinaArticle

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

export function makeMagneticToyChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(magneticToyChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Magnetic toy pre-shipment release checklist',
      itemListElement: magneticToyChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
