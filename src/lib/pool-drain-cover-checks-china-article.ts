import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  cpscEfilingChinaImportsArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  poolDrainCoverChecksChinaArticleHref,
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

export const poolDrainCoverChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: poolDrainCoverChecksChinaArticleHref,
  title: 'Pool Drain Cover Checks Before Shipping from China',
  metaTitle: 'Pool Drain Cover Checks from China',
  metaDescription:
    'Check pool drain covers for exact-model identity, permanent markings, certificate scope, flow rating, service life, instructions, hardware, and shipment release.',
  publishedDate: 'July 31, 2026',
  publishedDateIso: '2026-07-31T03:27:26+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Pool Drain Cover Checks Before Shipping from China',
  eyebrow: 'Exact model - VGBA evidence - payment and shipment release',
  image: {
    alt: 'Neutral illustrative quality-control bench with generic unbranded pool drain cover samples, caliper, fasteners, checklist, and cartons before China shipment',
    height: 900,
    src: '/images/pool-drain-cover-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/pool-drain-cover-checks-china.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/pool-drain-cover-checks-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/pool-drain-cover-checks-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Before releasing balance payment or forwarder pickup for pool or spa drain covers in China, freeze the exact model and match it to the applicable certificate, permanent product markings, flow rating, service life, orientation, system configuration, fasteners, instructions, packaging, and production lot. Hold the affected scope when identity or qualified evidence does not align.',
  answerSummary:
    'Use three separate gates: qualified product-compliance evidence, buyer-side inspection of the finished shipment, and site-specific selection and installation by responsible pool professionals. A China-side inspection can compare visible markings, dimensions, hardware, labels, instructions, cartons, and documents, but it cannot certify anti-entrapment performance or decide whether a cover fits a particular hydraulic system.',
  primaryCta: {
    label: 'Check Covers Before Shipment',
  },
  secondaryCta: {
    href: '#release-checklist',
    label: 'See Release Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side pool drain cover evidence and quality check before shipment.

Destination market and product use:
Brand / model / SKU:
Pool, spa, wall, or floor orientation:
Flow rating and service life:
Factory and production lot:
Approved sample, drawing, and specifications:
Certificate, report, and official directory record:
Permanent markings, instructions, hardware, packaging, and carton files:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#model-control', label: 'Exact model and lot' },
    { href: '#markings', label: 'Permanent markings' },
    { href: '#certificate-evidence', label: 'Certificate evidence' },
    { href: '#physical-checks', label: 'Physical shipment checks' },
    { href: '#installation-boundary', label: 'Installation boundary' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze the product type, exact model and SKU, cover shape, dimensions, sump interface, hole pattern, fasteners, orientation, system configuration, flow rating, service life, material, factory, date, lot, packaging, destination, and every approved change',
    'Require the importer and qualified pool-safety parties to identify the applicable CPSC rule and accepted standard version, certification route, GCC and eFiling duties, installation limits, local codes, and site-specific hydraulic decisions',
    'Match the certificate, report, certification-directory record, manufacturer, factory, model, drawings, sample photos, ratings, markings, instructions, packaging, and current production configuration',
    'Confirm that required identification and rating information is permanently present on the cover itself; do not substitute an order receipt, clear bag, retail label, or master carton for product markings',
    'Compare sampled covers with approved references for profile, openings, dimensions, fastener holes, material, molding, ribs, bosses, screws, finish, deformation, cracks, sharp edges, burrs, and visible workmanship',
    'Check installation and maintenance instructions, compatible sump or fitting information, approved fasteners, replacement timing, warnings, package claims, barcode, carton quantity, carton marks, and packing-list identity',
    'Treat flow, hair and body entrapment, structural, UV, durability, fastener, and hydraulic-system evaluations as qualified laboratory, certification, design, or installation work—not ordinary visual inspection',
    'Release only after every mismatch is quantified, affected stock is segregated, qualified retest or redesign decisions are documented, corrections remain traceable by lot and carton, and re-inspection is complete',
  ],
  checkGroups: [
    {
      title: 'Model and intended installation',
      items: [
        'Exact model, SKU, product type, round or square profile, nominal and measured dimensions, sump interface, screw-hole pattern, orientation, single- or multiple-drain configuration, flow rating, service life, material, factory, date, lot, and approved revisions',
        'Purchase order, drawing, approved sample, bill of materials, certificate, report, product mark, manual, retail pack, carton, and packing list all identify the same production version',
      ],
    },
    {
      title: 'Qualified evidence and marking',
      items: [
        'Applicable CPSC citation, accepted standard version, certification body, certificate or file number, manufacturer, factory, exact model, ratings, orientation, configuration, conditions, report sample photos, current status, and GCC data',
        'Permanent product marks show the identity and required rating information defined by the responsible compliance parties, and they remain legible after molding and finishing',
      ],
    },
    {
      title: 'Physical cover and pack-out',
      items: [
        'Profile, openings, ribs, bosses, dimensions, hole spacing, material, molding, wall thickness where specified, fastener type, thread and length, finish, deformation, cracks, burrs, loose matter, and visible workmanship match approved references',
        'Instructions, warnings, compatible fitting information, replacement timing, approved hardware, retail package, barcode, claims, carton quantity, carton marks, and packing list remain consistent and readable',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, carton map, supplier-change record, approved work instruction, replacement parts, qualified retest or certification decision, revised artwork, and repeat inspection are traceable',
        'Cleared and unresolved models, lots, and cartons remain separated; the final release names exact scope and open conditions rather than giving the whole order a blanket pass',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why pool drain cover release evidence matters now',
      paragraphs: [
        'On July 23, 2026, the U.S. Consumer Product Safety Commission announced separate recalls of OeyUoc and Sviyatp replacement pool drain covers made in China. Both notices say the covers violated the Virginia Graeme Baker Pool and Spa Safety Act, and both describe products that had package labels but no labeling or product identification on the cover itself.',
        'The July actions are part of a wider 2026 pattern. CPSC has also posted recalls involving other China-made pool or spa drain covers, including Crenlux, Houoto, Muscccm, Superbobi, Earthtec, Yeeluzan, Arrogantf, and TopHomer products. Independent current recall coverage also highlighted the OeyUoc action.',
        'These records do not prove that every China-made drain cover, supplier, factory, or order is noncompliant. They do show why buyers should not infer anti-entrapment performance from a familiar shape, two screws, an online listing, a package label, or words such as “suction fitting” without exact-model evidence.',
      ],
      bullets: [
        'A package label does not replace permanent identification and rating information required on the product',
        'A certificate is useful only when its manufacturer, model, ratings, configuration, sample, factory, and current production scope align',
        'A visible flow number does not prove the tested configuration, service life, orientation, installation compatibility, or certificate status',
        'Correction leverage is strongest before balance payment and pickup, while remarking, replacement, retesting, segregation, re-inspection, or cancellation remains practical',
      ],
    },
    {
      id: 'model-control',
      title: 'Freeze the exact model, configuration, and production lot',
      paragraphs: [
        'Build one controlled model record before relying on any document. Connect the commercial SKU to the molded identity, cover profile, dimensions, openings, ribs, bosses, sump or fitting interface, screw-hole pattern, supplied fasteners, orientation, system configuration, flow rating, service life, material, instructions, factory, production date, and lot.',
        'Do not treat appearance or diameter as a unique model identifier. Covers that look similar can have different flow ratings, hole patterns, sump-depth conditions, orientations, fasteners, expected lifetimes, or certification scope. A generic replacement claim should remain an open condition until responsible technical parties verify exact compatibility.',
        'Use change control for the mold, resin, UV package, ribs, openings, bosses, fasteners, label artwork, manufacturer, factory, or supplier. A safety-relevant change after the certified sample should trigger a documented decision from the importer, certification body, laboratory, designer, or other qualified party before the affected lot is released.',
      ],
      bullets: [
        'Photograph front, back, edge profile, every molded mark, hole pattern, supplied fasteners, label, instruction pages, retail pack, and carton marks on the approved reference',
        'Record first and last affected production lots and cartons for every revision',
        'Reject evidence for another manufacturer, factory, private-label alias, model, dimension, orientation, rating, service life, material, or product photo without a documented relationship',
        'Keep approved and unapproved versions physically separated through packing and pickup',
      ],
    },
    {
      id: 'markings',
      title: 'What permanent markings should buyers verify?',
      paragraphs: [
        'CPSC business guidance states that pool and spa drain covers must comply with the mandatory requirements in 16 CFR part 1450. CPSC compliance materials tell inspectors to confirm an accepted standard or VGB marking, a maximum flow value in gallons per minute, and other information used to identify the approved cover and its limits.',
        'The full marking set depends on the applicable accepted standard and certified configuration. The responsible parties should define the exact manufacturer and model identification, standard designation or certification mark, flow rating, service life, orientation, system configuration, and any other required information before inspection.',
        'Inspect molded, etched, or otherwise permanent marks on the cover itself under practical lighting. Record legibility, completeness, location, consistency across sampled units, and alignment with the certificate and approved artwork. Do not accept a bag sticker, order receipt, loose card, or carton-only label as a silent substitute.',
      ],
      bullets: [
        'Compare every sampled unit rather than photographing one convenient cover',
        'Check whether finishing, flash, sink, color, or mold wear makes marks unreadable',
        'Record conflicting flow values, model aliases, service-life statements, orientation marks, or standard designations as lot-level holds',
        'Do not infer certification from an invented logo, partial standard number, generic “VGB” claim, or copied mark',
      ],
    },
    {
      id: 'certificate-evidence',
      title: 'What should the certificate and report establish?',
      paragraphs: [
        'CPSC explains that manufacturers and importers of covered drain covers must issue a General Certificate of Conformity and use 16 CFR part 1450 as the applicable citation. The certificate should be based on the required testing or reasonable testing program and must identify the product and responsible parties accurately.',
        'Review the complete evidence chain: certification body, laboratory, report or file number, standard and edition, manufacturer, factory, model, product photos, dimensions, material, flow rating, orientation, system configuration, service life, tested samples, issue date, status, limitations, and authorized use of any mark. Confirm directory records at the claimed source where available.',
        'A certificate PDF is not a physical product check, and a physical inspection is not certification. Both are necessary but separate: the technical evidence defines the approved configuration, while inspection shows whether sampled mass production still appears to match that controlled reference.',
      ],
      bullets: [
        'Reject cropped certificates, edited screenshots, supplier-written summaries, missing report pages, unexplained model families, expired or withdrawn records, and evidence that cannot be confirmed with the claimed issuer',
        'Do not treat an NSF/ANSI/CAN 50 record for another pool-equipment function as proof of ANSI/APSP/ICC-16 coverage for a suction fitting',
        'Do not treat a material, fastener, or component certificate as finished-cover certification',
        'Map any July 2026 CPSC eFiling record to the exact GCC and imported finished product rather than to a generic supplier file',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled finished goods with approved drawings, samples, markings, certificate identifiers, instructions, packaging files, and carton records while the order is still accessible. The useful output is a traceable list of exact models, lots, sampled cartons, measurements, visible defects, mismatches, and affected quantities.',
        'Check overall profile, diameter or length and width, height, hole spacing, openings, ribs, bosses, mounting faces, wall thickness where the buyer supplies a method, material and color, molding quality, cracks, deformation, sharp edges, burrs, sink, short shots, flash, contamination, and visible damage. Compare supplied screws for quantity, material claim, diameter, thread, length, head, and fit only under an approved non-installation method.',
        'Check the manual and pack-out separately. Confirm model references, compatible fittings or sumps, approved fasteners, orientation, flow and service-life information, installation and maintenance instructions, warnings, replacement guidance, package claims, barcode, carton quantity, carton marks, and packing-list identity.',
      ],
      bullets: [
        'Use buyer-approved sampling, tools, tolerances, defect definitions, and stop rules',
        'Photograph every mismatch with a scale, model and lot context, sample number, and carton location',
        'Quantify mixed, missing, changed, or unreadable marks and instructions rather than describing them as isolated cosmetic defects',
        'Do not install the cover in a working pool, improvise a suction test, or represent a fit check on a loose fixture as site approval',
      ],
    },
    {
      id: 'installation-boundary',
      title: 'Where does shipment inspection stop?',
      paragraphs: [
        'CPSC distinguishes product compliance from the configuration of a public pool or spa. Site decisions can depend on actual pump flow, drain spacing, whether a drain can be blocked, sump geometry, piping, orientation, the cover rating, secondary anti-entrapment systems, local code, and installation and maintenance conditions.',
        'Those decisions belong with responsible pool designers, engineers, licensed installers, operators, authorities, importers, certification bodies, and other qualified parties. A pre-shipment inspector does not know the final hydraulic system merely because the purchase order names a cover diameter or flow rating.',
        'Huang Sourcing can organize buyer-approved evidence and compare visible production with controlled references. It does not select a cover for a pool, certify VGBA compliance, perform entrapment or hydraulic testing, approve an installation, issue a GCC, submit importer filings, or guarantee safe performance.',
      ],
      bullets: [
        'Do not convert a factory sample fixture into proof of sump, pipe, pump, or field compatibility',
        'Do not use the sum of printed flow ratings without a qualified system review',
        'Do not infer remaining service life from appearance or assume an old installation can reuse new hardware',
        'Keep product release conditional on any unresolved professional selection, certification, code, or installation decision',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Exact-model identity',
      whatToConfirm:
        'Molded identity, profile, dimensions, hole pattern, material, factory, lot, certificate, drawing, instructions, package, and packing list identify one controlled version.',
      buyerDecision:
        'Release the identified lot only when the records align; hold mixed, unlabeled, aliased, substituted, or undocumented scope.',
    },
    {
      riskNode: 'Markings and ratings',
      whatToConfirm:
        'Required permanent identification, accepted-standard or certification mark, flow rating, service life, orientation, and configuration information are legible and match approved evidence.',
      buyerDecision:
        'Hold units with missing, package-only, unreadable, conflicting, or unverified marks until qualified disposition and repeat inspection.',
    },
    {
      riskNode: 'Certificate scope',
      whatToConfirm:
        'Issuer, file, standard, manufacturer, factory, model, sample photos, dimensions, material, rating, configuration, date, status, conditions, and authorized mark use match production.',
      buyerDecision:
        'Release only covered production; escalate expired, withdrawn, partial, component-only, or unverifiable evidence.',
    },
    {
      riskNode: 'Physical production',
      whatToConfirm:
        'Sampled covers, openings, ribs, bosses, dimensions, fasteners, molding, finish, instructions, packages, quantities, and cartons match buyer-approved references.',
      buyerDecision:
        'Accept within the approved sampling and defect plan, or hold affected lots for segregation, correction, qualified review, and re-inspection.',
    },
    {
      riskNode: 'Site compatibility',
      whatToConfirm:
        'Responsible pool professionals have reviewed the actual sump, fasteners, orientation, pump flow, drain layout, service life, local code, installation, and maintenance conditions.',
      buyerDecision:
        'Do not treat a passed shipment inspection as permission to install; keep release conditional when the intended application remains unresolved.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Current CPSC recall records for OeyUoc and other 2026 China-made pool or spa drain covers',
    'Current CPSC business guidance for 16 CFR part 1450, GCC certification, and public pool or spa compliance checks',
    'Independent July 2026 recall coverage used only to confirm current public attention, not as a substitute for the primary record',
    'Buyer-side exact-model, marking, document, physical-product, instruction, packaging, correction, and release evidence that can be checked before goods leave China',
    'Explicit separation between visible shipment inspection and qualified testing, certification, hydraulic design, site selection, installation, code, and importer responsibilities',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Recalls/2026/OeyUoc-Pool-Drain-Covers-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Entrapment-and-Drowning-Hazards-Violate-Virginia-Graeme-Baker-Pool-Spa-Safety-Act-Sold-Exclusively-on-Amazon-by-Yuanxinxiang',
      label: 'CPSC - OeyUoc pool drain cover recall',
      note: 'Primary July 23, 2026 public case identifying China manufacture, Amazon sales, about 404 units, no product labeling or identification on the cover itself, a VGBA violation, and the recall remedy.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Pool-and-Spa-Drain-Covers',
      label: 'CPSC - pool and spa drain cover business guidance',
      note: 'Primary current guidance covering 16 CFR part 1450, the CPSC-accepted successor standard, public-pool requirements, GCC certification, and the correct certificate citation.',
    },
    {
      href: 'https://www.cpsc.gov/s3fs-public/FY24-VGBA-Drain-Cover-Compliance-Reminder-Letter.pdf?VersionId=SZQR2y7dvOKs4h_fbIFs_nJZ2ywK6GpZ',
      label: 'CPSC - public pool or spa drain cover checklist',
      note: 'Primary CPSC compliance checklist showing certificate, accepted-standard or VGB label, flow-rating, drain-layout, secondary-system, and related public-pool review points.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/Houoto-642-2150V-Pool-Drain-Covers-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Entrapment-and-Drowning-Hazards-Violate-Virginia-Graeme-Baker-Pool-Spa-Safety-Act-Sold-on-Amazon-by-Prosperity-goe-straight-up',
      label: 'CPSC - Houoto 642-2150V pool drain cover recall',
      note: 'Primary June 11, 2026 pattern record stating that covers lacked required product markings, service-life statements, and installation and maintenance instructions.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/Crenlux-Pool-Drain-Covers-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Entrapment-and-Drowning-Hazards-Violates-Virginia-Graeme-Baker-Pool-Spa-Safety-Act-Sold-on-Amazon-by-Eicong',
      label: 'CPSC - Crenlux pool drain cover recall',
      note: 'Primary June 4, 2026 record supporting the repeated current pattern across separate China manufacturers, retailers, models, and sales periods.',
    },
    {
      href: 'https://portal.phta.org/Store/Product-Catalog/Product-Details?productid=%7B471399AE-5518-E111-91BA-005056834D9B%7D',
      label: 'Pool & Hot Tub Alliance - ANSI/APSP/ICC-16 standard overview',
      note: 'Independent standards-body overview describing the suction-outlet fitting assembly standard, its marking, instruction, material, physical-test, and flow-rating scope, and its federal VGBA context.',
    },
    {
      href: 'https://www.41nbc.com/recall-watch-list-dressers-teething-toys-pool-equipment-lettuce-outbreak-safety-alerts-every-family-should-know/',
      label: '41NBC - July 2026 recall watch coverage',
      note: 'Independent current coverage cross-checking the OeyUoc product, Amazon sales period, stop-use advice, and recall action.',
    },
    {
      href: 'https://www.cpsc.gov/FAQ/eFiling-Frequently-Asked-Questions-FAQ',
      label: 'CPSC - eFiling frequently asked questions',
      note: 'Primary current guidance for determining which imported regulated consumer products require certificate data and how the importer remains responsible for accurate filing.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Purchase order, destination market, exact model and SKU list, product type, intended pool or spa application, orientation, system configuration, dimensions, sump or fitting interface, hole pattern, fasteners, flow rating, service life, material, and buyer-approved tolerances',
    'Approved sample record, front and back photos, drawings, bill of materials, mold and material specifications, fastener details, manufacturer, factory, production dates, lots, carton map, and every approved change notice',
    'Applicable-rule and standard review, full certificate and reports, official directory record, file number, issuer and laboratory details, sample photos, current status, scope and limitations, GCC draft, and an index mapping each file to the exact order',
    'Final molded-mark artwork, product label, installation and maintenance instructions, compatible fitting information, warnings, replacement guidance, retail-pack artwork, barcode, claims, carton marks, and packing list',
    'Buyer-approved sampling plan, tools, measurement method, tolerances, workmanship criteria, defect classes, stop rules, photo requirements, and balance-payment or pickup decision',
    'Any known marking, rating, certificate, material, mold, dimension, fastener, instruction, package, supplier-change, compatibility, or prior test concern and its affected quantity',
  ],
  redFlags: [
    'The cover has no permanent product identification, or identity appears only on a bag, order receipt, retail package, loose card, or carton',
    'Required standard, certification, flow, service-life, orientation, configuration, or model information is missing, unreadable, conflicting, or different across sampled units',
    'Certificate or report records show another manufacturer, factory, model, dimension, material, rating, configuration, sample photo, standard, date, status, or product category',
    'A component or unrelated pool-equipment certificate is presented as finished suction-cover certification',
    'Sampled covers show mixed resin, profile, openings, ribs, bosses, dimensions, fasteners, molded marks, labels, instructions, packages, or lot identity',
    'Covers or hardware are cracked, deformed, short-molded, flashed, burred, sharp, corroded, loose, incomplete, damaged, or inconsistent with approved references',
    'Installation or maintenance instructions omit the exact model, compatible fitting, approved fasteners, orientation, rating, replacement timing, warnings, or responsible-party details defined by the approved file',
    'The correction plan lacks affected quantity, segregation, qualified redesign or retest decision, certification update, revised artwork, approved work instruction, carton map, or repeat inspection',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible covers, markings, documents, buyer-approved dimensions, openings, ribs, bosses, fasteners, instructions, packages, cartons, quantities, and workmanship with an agreed reference set in China',
    'Huang Sourcing does not select legal requirements, certify VGBA compliance, conduct entrapment, structural, UV, durability, flow, or hydraulic testing, issue a GCC, authorize a mark, submit importer eFiling, or give legal or pool-engineering advice',
    'A visual check cannot prove anti-entrapment performance, material durability, UV resistance, maximum safe flow, service life, structural strength, or suitability for a specific sump, pump, drain layout, pool, or spa',
    'Sampling cannot guarantee every unit outside the agreed scope, and mixed lots, sealed cartons, weak traceability, inaccessible goods, or missing approved references reduce confidence',
    'The manufacturer, importer, certification body, laboratory, designer, engineer, installer, operator, broker, marketplace, retailer, authorities, and end user remain responsible for their product-specific decisions',
    'A passed pre-shipment inspection does not guarantee CPSC compliance, certificate validity, eFiling acceptance, customs release, marketplace approval, recall avoidance, correct installation, code approval, or safe performance after shipment',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'How to verify a China laboratory report',
      note: 'Check issuer, laboratory scope, sample photos, exact-model coverage, dates, source confirmation, results, limitations, and production mismatches.',
    },
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'CPSC eFiling for China imports',
      note: 'Coordinate the exact finished-product GCC data, product identifiers, importer responsibility, broker handoff, and entry records.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control plan for China manufacturing',
      note: 'Build approved references, change control, qualified testing, inspections, corrections, and payment holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Match product marks, ratings, warnings, instructions, claims, model and lot identity, retail packs, cartons, and correction evidence.',
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

export function makePoolDrainCoverChecksChinaArticleMetadata(): Metadata {
  const article = poolDrainCoverChecksChinaArticle

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

export function makePoolDrainCoverChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(poolDrainCoverChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Pool drain cover pre-shipment release checklist',
      itemListElement: poolDrainCoverChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
