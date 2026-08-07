import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  cpscEfilingChinaImportsArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  pullStringTeethingToyChecksChinaArticleHref,
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

type CheckGroup = { items: string[]; title: string }
type DecisionRow = { buyerDecision: string; riskNode: string; whatToConfirm: string }
type RelatedLink = { href: string; label: string; note: string }
type SourceNote = { href: string; label: string; note: string }

export const pullStringTeethingToyChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: pullStringTeethingToyChecksChinaArticleHref,
  title: 'Pull-String Teething Toy Checks Before Shipping from China',
  metaTitle: 'Pull-String Teething Toy Checks from China',
  metaDescription:
    'Check pull-string teething toy identity, test evidence, string geometry, labels, batches, cartons, and release decisions before shipping from China.',
  publishedDate: 'August 8, 2026',
  publishedDateIso: '2026-08-08T03:29:48+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Pull-String Teething Toy Checks Before Shipping from China',
  eyebrow: 'Toy evidence - finished-lot checks - payment and shipment release',
  image: {
    alt: 'Neutral AI illustration of a generic silicone sensory toy, caliper, blank checklist, batch tag, sample pouch, and carton on an inspection desk',
    height: 941,
    src: '/images/pull-string-teething-toy-checks-china.webp',
    width: 1672,
  },
  imageVariants: [
    { height: 941, src: '/images/pull-string-teething-toy-checks-china.webp', width: 1672 },
    {
      height: 945,
      src: '/images/pull-string-teething-toy-checks-china-4x3.webp',
      width: 1260,
    },
    {
      height: 945,
      src: '/images/pull-string-teething-toy-checks-china-1x1.webp',
      width: 945,
    },
  ],
  intro:
    'Before releasing balance payment or shipment for pull-string teething toys made in China, freeze the destination, age grading, intended use, exact model, manufacturer, factory, string geometry, materials, production lot, test sample, Children’s Product Certificate, tracking labels, retail pack, and carton map. Hold any lot that cannot be tied to the buyer-approved product and current qualified evidence.',
  answerSummary:
    'Use three separate gates: importer-led classification and compliance review, qualified third-party testing for the exact product, and buyer-side comparison of sampled finished goods with the approved model and evidence file. A China-side inspection can document identity, visible construction, buyer-approved dimensions, labels, packaging, quantities, and lot traceability. It cannot certify ASTM F963 compliance, replace CPSC-accepted laboratory testing, prove chemical safety, or guarantee that every unit is free of choking risk.',
  primaryCta: { label: 'Check Toys Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side pull-string teething toy evidence and quality check before shipment.

Destination market, intended use, age grade, model/SKU, and responsible importer:
Manufacturer, factory, production dates, lots, quantity, and carton map:
Approved sample, drawings, materials, string geometry, and tolerances:
Applicable standards, qualified test reports, CPC, and exact sample coverage:
Tracking labels, warnings, instructions, retail packaging, and carton files:
Known changes or concerns:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#classification', label: 'Classification and scope' },
    { href: '#evidence-chain', label: 'Evidence chain' },
    { href: '#physical-checks', label: 'Physical shipment checks' },
    { href: '#labels-traceability', label: 'Labels and traceability' },
    { href: '#inspection-limits', label: 'Inspection limits' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze the exact product name, intended use, age grade, model, manufacturer, factory, materials, string count, cross-sections, end shapes, openings, body geometry, production dates, lots, labels, package, and carton version',
    'Have the importer and qualified compliance parties determine whether the item is a toy, a teether under CPSC jurisdiction, or a product whose pain-relief claims could change the regulatory pathway',
    'Require current testing by a CPSC-accepted third-party laboratory for every applicable children’s-product rule, including the relevant ASTM F963 sections identified by qualified parties',
    'Map the full report, sample photos, model, manufacturer, factory, materials, dimensions, dates, results, and limitations to the Children’s Product Certificate and the exact production lot',
    'Compare sampled finished goods with the approved sample and controlled drawings for string geometry, ends, openings, body, seams, attachments, surfaces, contamination, colour, assembly, and visible workmanship',
    'Check permanent tracking labels on product and packaging, age grading, warnings, instructions, model and lot identity, responsible-party details, barcode, retail pack, carton marks, quantity, and packing list',
    'Hold mixed models, unapproved geometry or materials, unexplained substitutions, mismatched reports, missing traceability, unclear claims, inaccessible goods, or supplier-only declarations',
    'Release only named models, production dates, lots, quantities, and cartons after documented correction, qualified disposition, and repeat inspection where the buyer requires it',
  ],
  checkGroups: [
    {
      title: 'Product identity and classification',
      items: [
        'Destination, intended use, age grade, marketing claims, model, manufacturer, factory, production date, lot, responsible importer, and approved changes are controlled',
        'The importer and qualified parties record the applicable product category, rules, standards, test sections, certification duty, and eFiling responsibility rather than relying on a marketplace category',
      ],
    },
    {
      title: 'Geometry and qualified evidence',
      items: [
        'Controlled drawings define every string cross-section, length, end shape, opening, attachment, body feature, material, tolerance, and measurement method used for approval',
        'Laboratory identity, CPSC acceptance, report number, exact sample, standard edition, tested sections, results, limitations, CPC, and production relationship are verified independently',
      ],
    },
    {
      title: 'Finished goods and pack-out',
      items: [
        'Sampled units match the approved geometry, materials, colourway, moulded parts, seams, attachments, surfaces, markings, warnings, package, lot, and visible condition',
        'Product and package tracking labels, age grading, instructions, barcode, carton quantity, carton marks, packing list, and destination file are consistent and readable',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, carton map, supplier change, controlled rework, qualified retest decision, revised files, and repeat inspection remain traceable',
        'Cleared and unresolved models, dates, lots, and cartons stay separated; final release names exact scope and open conditions instead of giving a blanket pass',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why pull-string teething toy release evidence matters now',
      paragraphs: [
        'On July 23, 2026, the U.S. Consumer Product Safety Commission announced a recall of about 5,918 Sili Factory pull-string teething toys manufactured by Shenzhen Aojieni Silicone Technology. CPSC said the silicone strings were smaller and longer than permitted under the mandatory toy standard and could reach the back of a child’s throat. The agency reported one gagging incident and no reported injury.',
        'This was not an isolated product notice. CPSC announced separate 2026 recalls for LiKee and GOPO pull-string teething toys with the same stated string-geometry problem. The LiKee record covered about 24,400 units and ten reports of respiratory distress or choking; the GOPO record covered about 70,410 units and three reports. Independent KOAT coverage also brought the GOPO recall to a broader audience in June 2026.',
        'The records concern different brands, companies, models, batches, sales periods, quantities, incidents, and remedies. They do not prove that every teething toy, China supplier, factory, or lot has the same problem. They show why a buyer should connect qualified testing and certification to the exact mass-production geometry and lot before payment or shipment release.',
      ],
      bullets: [
        'A supplier PDF, “ASTM tested” claim, marketplace badge, or test-report cover page is not enough to identify the tested product or current production',
        'A change to string length, cross-section, end feature, mould, material, attachment, body opening, factory, age grade, claim, or label can change the evidence question',
        'A passed visual inspection is not a substitute for required third-party testing by a CPSC-accepted laboratory',
        'Correction leverage is strongest while the goods and balance payment remain controlled and affected cartons can still be separated',
      ],
    },
    {
      id: 'classification',
      title: 'Classify the product and freeze the exact design first',
      paragraphs: [
        'The importer should document what the product is, who it is for, and what its claims mean before selecting tests. CPSC says teethers and teething toys intended to soothe a child fall under its jurisdiction and identifies ASTM F963 teether requirements. A product marketed primarily to relieve teething pain may raise a different FDA jurisdiction question. Age grading, advertising, instructions, package language, online listing, physical design, and foreseeable use should tell one consistent story.',
        'Build a controlled model record connecting the product name and SKU to the manufacturer, factory, age grade, materials, colourways, body dimensions, every string cross-section and length, end geometry, openings, seams, attachments, mould number, package, tracking labels, warnings, production dates, and lots. Use drawings and measurement methods chosen by qualified parties; do not reverse-engineer a proprietary standard from a recall headline.',
        'Put safety-relevant revisions through written change control. If the supplier changes the silicone formulation, pigment, mould, string geometry, end shape, attachment, body, factory, subcontractor, age claim, label, instruction, or package after testing, hold the affected lot until qualified parties decide whether review, new samples, retesting, or a new certificate is required.',
      ],
      bullets: [
        'Control the purchase order, approved sample, dimensional drawing, material specification, bill of materials, mould list, artwork, label file, test sample record, and change log',
        'Photograph the approved reference from the same angles and measurement points required during production inspection',
        'Require each approved change to name the first affected production date, lot, unit range, and cartons',
        'Reject unexplained aliases or evidence showing a different manufacturer, factory, geometry, age grade, material, model, or sample photo',
      ],
    },
    {
      id: 'evidence-chain',
      title: 'What should the testing and certification chain show?',
      paragraphs: [
        'CPSC states that toys intended primarily for children 12 and under generally require third-party testing by a CPSC-accepted laboratory for applicable toy-safety requirements. Its current ASTM F963 chart identifies teethers and teething toys as a section requiring third-party testing. The importer or manufacturer then bases the Children’s Product Certificate on applicable test results; the certificate does not replace the report or prove an untested production change.',
        'Review the complete report, not a cropped result table. Record the laboratory, acceptance scope, report number, issue date, standard and edition, tested sections, client, manufacturer, factory, model, materials, dimensions, age grade, sample receipt and test dates, sample photos, results, deviations, and limitations. Confirm the laboratory through the official CPSC list and map the report to the certificate and current lot.',
        'The evidence chain should also show how tested samples were selected and how production remains consistent with them. Supplier declarations, raw-material reports, component tests, or a certificate for a similar toy can support investigation, but they do not automatically establish compliance for the finished product being shipped.',
      ],
      bullets: [
        'Verify the laboratory and relevant acceptance scope at the official CPSC laboratory search, not only through supplier contact details',
        'Match report sample photos and identifiers to controlled product drawings and the approved reference',
        'Check that the CPC names the finished product, applicable rules, importer or domestic manufacturer, records custodian, production place and date, testing place and date, and laboratory as required',
        'Escalate partial reports, edited screenshots, missing photos, inconsistent dates, model-family claims without rationale, or files that cannot be confirmed at the claimed source',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled mass production with the approved physical and documentary reference while the goods remain accessible. The useful output is a traceable record of model and lot identity, visible construction, buyer-approved measurements, workmanship, labels, packaging, quantities, mismatches, and affected carton scope.',
        'Inspect the body, each string, end features, openings, joints, seams, attachments, moulding, flash, sharp points or edges, surface condition, contamination, odour, loose matter, colour, deformation, damage, and consistency against buyer-approved criteria. Record each sampled unit, tool, measurement point, result, tolerance, photo, lot, and carton rather than summarizing the batch as “looks good.”',
        'Use only approved methods and competent personnel. An inspector should not put the toy in a mouth, use a child for a trial, improvise gagging or choking simulations, invent gauges or forces, copy a recall description as a test method, or perform chemical and mechanical safety testing outside the agreed qualified setup.',
      ],
      bullets: [
        'Photograph product and package tracking labels, model, lot, age grade, each string and end, body openings, attachment points, warnings, instructions, retail pack, inner pack, and carton context',
        'Use buyer-approved drawings, calibrated tools, measurement points, tolerances, sampling, defect classes, photo rules, and stop conditions',
        'Quantify mixed, loose, detached, stretched, torn, cracked, sharp, contaminated, deformed, mislabeled, unreadable, or out-of-tolerance findings',
        'Keep destructive checks and mechanical, chemical, migration, flammability, abuse, torque, tension, small-parts, and teether testing separate from ordinary saleable-stock inspection',
      ],
    },
    {
      id: 'labels-traceability',
      title: 'Connect tracking labels, claims, packages, and cartons',
      paragraphs: [
        'Children’s products need durable identifying information on the product and packaging to the extent practicable. The importer and qualified advisers should define the required manufacturer or private-labeler identity, production location and date, batch or run information, and other source details, then check that the chosen format remains legible and consistent across the lot.',
        'Match the product, retail pack, instructions, online listing, CPC, report, packing list, and cartons. Confirm the model, age grade, intended use, responsible party, tracking code, warnings, cleaning instructions, barcode, country-of-origin marking, quantity, and destination language. A correct carton label cannot repair an incorrect product or missing qualified evidence.',
        'Keep claims disciplined. “Food grade,” “BPA free,” “non-toxic,” “ASTM certified,” “CPSC approved,” “choke-proof,” or similar wording needs qualified support and precise scope. CPSC enforces rules and accepts laboratories for defined testing; it does not pre-approve every consumer product or turn a supplier claim into a safety guarantee.',
      ],
      bullets: [
        'Keep product and package tracking codes linked to factory, production date, batch, mould or line where useful, and the carton map',
        'Do not describe a supplier declaration, component report, or marketplace listing as finished-product certification',
        'Do not let the online listing, package, instructions, test report, and physical toy describe different age grades or intended uses',
        'Hold unreadable, removable, missing, mixed, or contradictory identifiers until corrected and rechecked',
      ],
    },
    {
      id: 'inspection-limits',
      title: 'Where does inspection stop and qualified testing begin?',
      paragraphs: [
        'Toy classification, standard selection, teether probes or fixtures, abuse conditioning, torque, tension, compression, small-parts, chemical-content, migration, flammability, and other safety evaluations use defined methods, apparatus, sample preparation, acceptance criteria, and competent interpretation. Required children’s-product testing belongs with CPSC-accepted laboratories and the responsible compliance parties.',
        'Huang Sourcing can organize buyer-approved files and compare visible goods with controlled references. It does not classify the product for law, purchase proprietary standards on the importer’s behalf, select every applicable rule, certify compliance, issue a laboratory report or CPC, submit eFiling, authorize claims, or guarantee child safety.',
        'A passed sampled inspection supports a buyer’s hold, correction, re-inspection, payment, or pickup decision only within its stated scope. It cannot cure missing test evidence, validate unapproved design changes, or prove that every unit outside the sample will perform safely.',
      ],
      bullets: [
        'Do not improvise mouth, throat, choking, bite, pull, torque, abuse, flammability, or chemical tests during an ordinary inspection',
        'Do not infer compliance from soft material, large-looking parts, a familiar shape, a prior order, or supplier assurances',
        'Do not use one passed sample to excuse mixed lots, substitutions, weak tracking, or inaccessible cartons',
        'Escalate legal, laboratory, engineering, medical-device, certification, eFiling, marketplace, and recall questions to the responsible qualified parties',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Classification or applicable scope is unclear',
      whatToConfirm:
        'Intended use, claims, age grade, destination, product category, applicable rules and standards, required test sections, certificate duty, and responsible importer are documented by qualified parties.',
      buyerDecision:
        'Hold testing assumptions, production approval, payment, and shipment until the scope is resolved.',
    },
    {
      riskNode: 'Report, CPC, and product do not align',
      whatToConfirm:
        'Laboratory acceptance, full report, sample photos, model, manufacturer, factory, geometry, materials, dates, results, limitations, CPC, and current lot map to one controlled design.',
      buyerDecision:
        'Hold the affected model and lot; obtain source confirmation, corrected documents, new samples, or qualified retesting.',
    },
    {
      riskNode: 'Finished geometry or materials changed',
      whatToConfirm:
        'Every string, end, opening, attachment, body feature, material, colourant, mould, factory, production date, lot, and approved change matches the controlled reference.',
      buyerDecision:
        'Segregate affected goods and require qualified change disposition before re-inspection or release.',
    },
    {
      riskNode: 'Sampled goods and pack-out match',
      whatToConfirm:
        'Buyer-approved physical checks, tracking labels, age grading, warnings, instructions, retail packs, cartons, quantities, and lot records pass within the stated sampling scope.',
      buyerDecision:
        'Release only the named cleared model, lot, quantity, and cartons while recording every limitation and open condition.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'CPSC Sili Factory recall checked August 8, 2026 Beijing time for the recall date, China manufacturer, batch identity, units, hazard statement, incident status, sales period, and remedy.',
    'Separate CPSC LiKee and GOPO records used to establish a recurring 2026 incident pattern while keeping each company, model, quantity, incident count, sales period, and remedy distinct.',
    'Independent KOAT coverage used as a separate recent-attention signal for the GOPO recall; it is not used to replace the primary CPSC records.',
    'Current CPSC teether, toy-safety, ASTM F963, laboratory, CPC, tracking-label, and eFiling guidance used for compliance boundaries and source-verification steps.',
    'Buyer-controlled product specification, approved sample, drawings, material file, change log, report, CPC, labels, package, packing list, carton map, inspection criteria, and release rules used for the practical decision framework.',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Recalls/2026/Aojieni-Silicone-Recalls-Sili-Factory-Pull-String-Teething-Toys-Due-to-Risk-of-Serious-Injury-or-Death-from-Choking-Violate-Mandatory-Standard-for-Toys',
      label: 'CPSC - Sili Factory pull-string teething toy recall',
      note: 'Primary July 23, 2026 record identifying the China manufacturer, batch DS250238, about 5,918 units, string-geometry violation, one gagging report, Amazon sales period, and refund remedy.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/LiKee-Pull-String-Teething-Toys-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Choking-Violate-Mandatory-Standard-for-Toys-Sold-on-Amazon-by-ChilanTech',
      label: 'CPSC - LiKee pull-string teething toy recall',
      note: 'Primary June 11, 2026 record covering about 24,400 units, a named model, China manufacturer and importer, the same stated geometry issue, ten respiratory-distress or choking reports, and a replacement remedy.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/GOPO-Toys-Recalls-Pull-String-Teething-Toys-Due-to-Risk-of-Serious-Injury-or-Death-from-Choking-Violate-Mandatory-Standard-for-Toys',
      label: 'CPSC - GOPO pull-string teething toy recall',
      note: 'Primary June 18, 2026 record covering about 70,410 China-made units, six listed batches, three reported respiratory-distress or choking incidents, Amazon sales, and a refund remedy.',
    },
    {
      href: 'https://www.koat.com/article/pull-string-teething-toys-recalled-because-of-choking-risk/71668144',
      label: 'KOAT - pull-string teething toy recall coverage',
      note: 'Independent June 22, 2026 coverage of the GOPO recall and stated choking risk, used as a current public-attention signal rather than as the primary case record.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Toy-Safety',
      label: 'CPSC - toy safety business guidance',
      note: 'Current official guidance on mandatory ASTM F963 versions, applicable toy sections, third-party testing, CPSC-accepted laboratories, and Children’s Product Certificate responsibilities.',
    },
    {
      href: 'https://www.cpsc.gov/FAQ/Teethers-and-Teething-Toys',
      label: 'CPSC - teethers and teething toys guidance',
      note: 'Official classification guidance distinguishing CPSC-jurisdiction teethers intended to soothe a child from products whose pain-relief purpose may raise an FDA jurisdiction question.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Toy-Safety/ASTM-F-963-Chart',
      label: 'CPSC - ASTM F963 requirements chart',
      note: 'Official chart identifying relevant toy-standard sections and whether third-party testing is required, including the teether and teething-toy section.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/Lab-Accreditation',
      label: 'CPSC - laboratory accreditation and acceptance',
      note: 'Official entry point for checking CPSC-accepted third-party laboratories and understanding laboratory acceptance scope.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/Childrens-Product-Certificate',
      label: 'CPSC - Children’s Product Certificate guidance',
      note: 'Official guidance on certificate content, who issues it, the relationship to test records, and furnishing requirements for children’s products.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/tracking-label',
      label: 'CPSC - children’s product tracking label guidance',
      note: 'Official guidance on source, production, and batch-identifying information for children’s products and packaging to the extent practicable.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Purchase order, destination, intended use, age grade, exact model and SKU list, manufacturer, factory, production dates, lots, quantities, claims, colours, materials, dimensions, tolerances, and responsible importer',
    'Approved sample record, dimensional drawings, every string and end geometry, body openings, attachments, material specifications, bill of materials, mould list, packaging artwork, and every approved change notice',
    'Applicable-rule and standard review, test plan, complete laboratory reports, sample photos, CPSC laboratory acceptance record, CPC, supporting certificates, source files, and an index mapping each file to the exact order',
    'Final product and package tracking labels, age grading, warnings, instructions, country-of-origin marking, responsible-party information, barcode, retail-pack artwork, carton marks, packing list, and carton map',
    'Buyer-approved sampling plan, calibrated tools, measurement points, tolerances, workmanship criteria, defect definitions, stop rules, photo requirements, and balance-payment or pickup decision',
    'Any known geometry, choking, detachment, tear, material, chemical, odour, contamination, evidence, certificate, label, package, supplier-change, or mixed-lot concern and the affected quantity',
  ],
  redFlags: [
    'The supplier will not identify the manufacturer, factory, exact model, intended use, age grade, materials, geometry, moulds, production lot, test sample, or design changes',
    'The report, sample photos, CPC, product, package, online listing, or cartons show different models, manufacturers, factories, geometry, materials, age grades, dates, or claims',
    'Evidence is cropped, edited, incomplete, outside the laboratory’s CPSC acceptance scope, or cannot be confirmed through the claimed source',
    'A supplier declaration, component result, raw-material report, marketplace badge, or “ASTM certified” phrase is presented as proof for the finished toy',
    'Sampled goods show mixed or unapproved strings, ends, openings, attachments, moulding, materials, colours, tracking codes, labels, packages, models, dates, lots, or factories',
    'Strings, ends, body features, seams, attachments, surfaces, or packages are loose, torn, cracked, sharp, contaminated, deformed, unreadable, inconsistent, or outside buyer-approved tolerances',
    'Age grading, warnings, instructions, intended use, cleaning language, claims, CPC, test scope, online listing, and physical product contradict one another',
    'The correction plan lacks affected quantity, segregation, qualified redesign or retest disposition, controlled work instructions, revised files, carton mapping, or repeat inspection',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible products, identifiers, buyer-approved measurements, materials as represented, workmanship, labels, packages, cartons, quantities, and controlled files with the agreed reference set in China',
    'Huang Sourcing does not classify the product for law, select every applicable rule, provide legal or product-safety engineering advice, certify compliance, issue a laboratory report or CPC, submit eFiling, or authorize safety claims',
    'Visual checks and ordinary buyer-approved measurements cannot prove ASTM F963 compliance, chemical content, migration, flammability, abuse performance, torque, tension, small-parts outcomes, teether requirements, or freedom from choking risk',
    'Sampling cannot guarantee every unit outside the agreed scope, and mixed lots, sealed cartons, weak traceability, inaccessible goods, unsafe setups, or missing approved references reduce confidence',
    'The importer, manufacturer, qualified laboratory, compliance adviser, broker, marketplace, retailer, authorities, caregivers, and end users remain responsible for their product-specific decisions',
    'A passed pre-shipment inspection does not guarantee CPSC compliance, certificate validity, eFiling acceptance, customs release, marketplace approval, recall avoidance, or safe use after shipment',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'How to verify a China laboratory report',
      note: 'Check laboratory identity, acceptance scope, report source, sample photos, exact-model coverage, dates, results, limitations, and production mismatches.',
    },
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'CPSC eFiling for China imports',
      note: 'Coordinate certificate data, product identifiers, importer responsibility, broker handoff, and shipment records where the exact product requires it.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control plan for China manufacturing',
      note: 'Build approved references, change control, qualified testing, inspections, corrections, and payment holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Match tracking labels, age grading, warnings, instructions, claims, barcodes, retail packs, carton marks, quantities, and correction evidence.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Define the photos, tools, measurements, traceability, mismatches, affected quantity, decisions, and scope limits the report should show.',
    },
    {
      href: '/qc-inspection-china',
      label: 'QC inspection in China',
      note: 'Use buyer-approved product, packaging, quantity, and evidence checks while the actual goods are still accessible at the supplier.',
    },
    {
      href: '/before-balance-payment-qc-china',
      label: 'Inspection before balance payment',
      note: 'Keep correction and payment leverage until cleared and unresolved models, lots, quantities, and cartons are visible.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, testing, packaging, payment, pickup, supplier, and Amazon FBA decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
}

export function makePullStringTeethingToyChecksChinaArticleMetadata(): Metadata {
  const article = pullStringTeethingToyChecksChinaArticle

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

export function makePullStringTeethingToyChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(pullStringTeethingToyChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Pull-string teething toy pre-shipment release checklist',
      itemListElement: pullStringTeethingToyChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
