import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  euToySafetyRegulationChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
  sandFilledToyAsbestosChecksChinaArticleHref,
  squishyToyChecksChinaArticleHref,
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

const opssGlitterCase =
  'https://www.gov.uk/product-safety-alerts-reports-recalls/product-safety-report-glitter-ice-cube-squeezy-toy-2607-0173'
const opssDumplingCase =
  'https://www.gov.uk/product-safety-alerts-reports-recalls/product-safety-report-squishy-dumpling-bun-squeeze-toy-2605-0199'
const axiosSquishyReport =
  'https://www.axios.com/local/des-moines/2026/07/27/iowa-needoh-burn-hot-car'
const cpscSqueezeToyCase =
  'https://www.cpsc.gov/Recall-Products/Squeeze-or-Squeaker-Toys'

export const squishyToyChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: squishyToyChecksChinaArticleHref,
  title: 'Squishy Toy Checks Before Shipping from China',
  metaTitle: 'Squishy Toy Safety Checks Before China Shipment',
  metaDescription:
    'Check squishy toy fill evidence, seams, small parts, labels, lots, cartons, and release decisions before shipping liquid-filled sensory toys from China.',
  publishedDate: 'August 10, 2026',
  publishedDateIso: '2026-08-10T15:27:49-04:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Squishy Toy Checks Before Shipping from China',
  eyebrow: 'Fill evidence - finished-lot checks - payment and shipment release',
  image: {
    alt: 'Neutral AI illustration of generic liquid-filled squishy toys, sample bags, laboratory vials, caliper, blank checklist, gloves, and an export carton on an inspection bench',
    height: 900,
    src: '/images/squishy-toy-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/squishy-toy-checks-china.webp', width: 1600 },
    { height: 900, src: '/images/squishy-toy-checks-china-4x3.webp', width: 1200 },
    { height: 1000, src: '/images/squishy-toy-checks-china-1x1.webp', width: 1000 },
  ],
  intro:
    'Before releasing balance payment or pickup for liquid- or gel-filled squishy toys made in China, freeze the exact model, intended age, shell material, fill formulation, production lot, qualified test evidence, markings, retail pack, and carton map. Hold any shipment when the goods, reports, or traceability do not describe the same approved version.',
  answerSummary:
    'Use three separate gates: importer-led classification and requirement review, qualified laboratory evidence for the exact finished toy and fill, and buyer-side comparison of sampled production with approved references. A China-side inspection can document identity, seams, visible leakage, detachable parts, workmanship, labels, quantities, and pack-out. It cannot prove microbiological or chemical safety, certify compliance, reproduce laboratory abuse tests, or guarantee every unit will remain intact in use.',
  primaryCta: { label: 'Check Squishy Toys Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side squishy toy evidence and quality check before shipment.

Destination, intended age, exact models/SKUs, and responsible importer:
Manufacturer, factory, production dates, lots, quantity, and carton map:
Approved samples, shell materials, fill formulation, drawings, and tolerances:
Applicable standards, qualified reports, sample photos, and exact-model coverage:
Labels, warnings, instructions, retail packs, and carton files:
Known changes, leakage, odour, small-parts, or evidence concerns:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#product-control', label: 'Exact product and fill' },
    { href: '#qualified-evidence', label: 'Qualified evidence' },
    { href: '#physical-checks', label: 'Physical shipment checks' },
    { href: '#labels-traceability', label: 'Labels and traceability' },
    { href: '#inspection-limits', label: 'Inspection limits' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze the destination, intended use, age grade, model, shell material, fill formulation, colour, scent, dimensions, weight, attachments, manufacturer, factory, production date, lot, labels, package, and carton version',
    'Have the importer and qualified advisers identify the applicable toy, chemical, microbiological, mechanical, flammability, labeling, certification, and filing requirements for the destination',
    'Map complete qualified reports to the finished toy, shell and fill, manufacturer, factory, exact model, colour or formulation family, sample photos, dates, methods, results, limitations, and production version',
    'Compare sampled goods with the approved sample and specifications for shape, dimensions, mass, seams, closures, shell condition, visible fill, odour, contamination, detachable parts, accessories, and workmanship',
    'Use only buyer-approved, low-risk inspection methods and stop if a unit leaks, ruptures, exposes fill, releases a part, or shows abnormal odour, residue, swelling, tackiness, cracking, or deformation',
    'Check product and package identifiers, age grading, warnings, instructions, destination language, traceability, barcode, retail-pack protection, carton marks, quantities, and packing list',
    'Hold mixed formulations, unexplained substitutions, mismatched reports, incomplete source files, missing tracking, failed samples, unapproved rework, or goods that cannot be tied to named cartons',
    'Release only named models, production dates, lots, quantities, and cartons after correction evidence, qualified disposition, and repeat inspection where required',
  ],
  checkGroups: [
    {
      title: 'Exact identity and destination',
      items: [
        'Destination, intended age and use, model, manufacturer, factory, shell, fill, colour or scent, production date, lot, importer, sales channel, and approved changes are controlled',
        'PO, approved sample, specifications, report samples, labels, instructions, retail pack, carton, online listing, and packing list describe one production version',
      ],
    },
    {
      title: 'Fill and qualified evidence',
      items: [
        'Shell and fill identity, formulation ownership, supplier and batch records, finished-product sample photos, methods, results, limitations, and destination scope align',
        'Qualified parties decide the microbiological, chemical, migration, flammability, mechanical, small-parts, abuse, labeling, and certification evidence needed for the exact toy',
      ],
    },
    {
      title: 'Finished goods and pack-out',
      items: [
        'Sampled units match approved shape, mass, dimensions, seams, closure, surface, colour, fill appearance, accessories, markings, visible condition, and buyer-approved workmanship limits',
        'Model and lot identifiers, age grade, warnings, instructions, barcode, protective retail pack, carton quantity, carton marks, and packing list are consistent and readable',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, carton map, supplier change, controlled rework, qualified retest decision, revised files, waste control, and repeat inspection remain traceable',
        'Cleared and unresolved models, formulas, dates, lots, and cartons stay separated; final release names exact scope and every open condition',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why squishy toy release evidence matters now',
      paragraphs: [
        'On August 10, 2026, the UK Office for Product Safety and Standards published two separate reports for liquid-filled squishy toys originating in China. Testing described aerobic microbial, yeast, and mould levels above the expected limit. One report also identified detachable small parts, while both records noted labeling or marking gaps and border action.',
        'Separate July reporting examined a rise in published U.S. incident reports involving leaking or heat-exposed squishy sensory toys. That reporting carefully noted that CPSC incident reports are not necessarily independently verified and do not establish causation. It still provides a distinct current-attention signal alongside the UK laboratory-based product reports.',
        'The records concern different products, companies, fills, hazards, rules, markets, and evidence. They do not prove every squishy toy, China supplier, factory, or lot has the same problem. They show why visible seams, a supplier declaration, or a generic “non-toxic” claim cannot replace exact-product evidence and lot control.',
      ],
      bullets: [
        'A “food grade,” “non-toxic,” CE, UKCA, ASTM, EN 71, CPSIA, or laboratory-tested claim needs source evidence and precise product scope',
        'Shell resin, plasticizer, pigment, scent, preservative, gel, liquid, beads, powder, glitter, closure, factory, subcontractor, or process changes can alter the evidence question',
        'Microbiological and chemical hazards may be invisible during an ordinary visual inspection',
        'Correction leverage is strongest before final payment and pickup, while lots and cartons can still be held, tested, reworked, relabeled, repacked, or rejected',
      ],
      citations: [
        { href: opssGlitterCase, label: 'UK OPSS Glitter Ice Cube Squeezy Toy report' },
        { href: opssDumplingCase, label: 'UK OPSS Squishy Dumpling Bun report' },
        { href: axiosSquishyReport, label: 'Axios report on current squishy-toy incidents' },
      ],
    },
    {
      id: 'product-control',
      title: 'Freeze the exact toy, shell, fill, and lot first',
      paragraphs: [
        'Build one controlled model record connecting the marketplace name and SKU to the intended age and use, shell material, fill type and formulation, pigments, scents or glitter, closure method, dimensions, target mass, accessories, warnings, manufacturer, factory, production date, and lot. A shared shape or colour does not establish that two products use the same materials or process.',
        'Keep formulation and supplier changes visible. If the factory substitutes the shell compound, fill ingredients, preservative system, pigment, scent, glitter, internal beads, adhesive, welding or sealing process, subcontractor, package, or factory after testing, hold the affected production until qualified parties decide whether review, new samples, testing, or certification changes are required.',
        'Connect incoming material and fill batches to finished-goods lots and cartons. Supplier certificates and raw-material results can support an investigation, but they do not automatically prove the safety or performance of the finished toy after mixing, filling, sealing, storage, and transport.',
      ],
      bullets: [
        'Control the purchase order, bill of materials, formulation identifier, material specifications, approved sample, dimensions, mass tolerance, process limits, artwork, and change log',
        'Require every approved change to identify the first affected production date, lot, quantity, and carton range',
        'Photograph the approved reference and inspection details from repeatable angles',
        'Reject unexplained aliases, family reports without rationale, or sample photos that do not match production',
      ],
    },
    {
      id: 'qualified-evidence',
      title: 'What should qualified test evidence connect?',
      paragraphs: [
        'The importer and product-safety specialists should select the destination rules, standards, methods, laboratories, sample plans, and acceptance criteria. Depending on the product and market, the evidence question may include microbiological quality, restricted chemicals, migration, flammability, small parts, mechanical abuse, leakage, labeling, age grading, traceability, certification, and import filing.',
        'Review the complete report and its source, not a screenshot or cover page. Record the laboratory, accreditation or acceptance scope where relevant, client, manufacturer, factory, exact model, shell and fill description, formulation or colour coverage, sample photos, receipt and test dates, methods, results, deviations, uncertainty or limitations, and relationship to current production.',
        'A test result is not permanent permission to change the product. Link the tested sample to controlled materials and production, and route significant changes through qualified review. If evidence covers only part of the toy, keep the uncovered questions visible rather than expanding the conclusion.',
      ],
      bullets: [
        'Confirm reports with the claimed laboratory or official database where a verification route exists',
        'Match sample photos, identifiers, mass, dimensions, materials, fill and closure details to the approved reference and current lot',
        'Escalate cropped files, edited result tables, inconsistent dates, missing photos, unknown methods, unclear units, unapproved family coverage, or reports issued to another product',
        'Keep qualified testing separate from routine buyer-side inspection and supplier self-declarations',
      ],
      citations: [
        { href: verifyChinaLabTestReportArticleHref, label: 'Huang Sourcing laboratory report verification guide' },
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled production with approved references while the goods remain accessible. The useful output is a traceable record of model and lot identity, visible construction, dimensions, mass, seams, closures, workmanship, labels, packaging, quantities, defects, mismatches, and affected carton scope.',
        'Inspect shell surfaces, moulding, seams, welds or plugs, attachments, sharp points or edges, tackiness, cracks, punctures, deformation, residue, visible leaks, foreign matter, abnormal odour, colour consistency, fill appearance, accessories, and retail-pack protection against buyer-approved criteria. Record the sampled unit, method, result, photo, lot, and carton.',
        'Stop and isolate a unit that leaks, ruptures, exposes fill, releases a part, or shows abnormal residue, swelling, odour, cracking, or deformation. Do not continue handling simply to make the defect more dramatic. Preserve the evidence, affected quantity, and chain of custody for qualified investigation.',
      ],
      bullets: [
        'Use buyer-approved sampling, defect classes, dimensions, mass tolerance, visual references, tools, handling limits, stop rules, and photo requirements',
        'Check sample identity before and after any approved observation so findings stay tied to a model and lot',
        'Quantify mixed, leaking, torn, punctured, tacky, cracked, deformed, contaminated, mislabeled, unreadable, underfilled, or overfilled units',
        'Keep destructive, chemical, microbial, migration, flammability, mechanical abuse, heat, bite, ingestion, and small-parts testing outside ordinary saleable-stock inspection',
      ],
    },
    {
      id: 'labels-traceability',
      title: 'Connect warnings, tracking, packages, and cartons',
      paragraphs: [
        'Match product identifiers, production or batch codes, age grading, warnings, instructions, responsible-party details, country-of-origin marking, barcode, retail pack, online listing, reports, packing list, and cartons. The importer and qualified advisers should define the exact destination content and durability requirements.',
        'Warnings should address intended use and known misuse only when supported and required; they cannot repair an unsafe design, contaminated fill, weak seam, detachable part, missing evidence, or incorrect age classification. Claims such as washable, reusable, hypoallergenic, non-toxic, food grade, or safe for young children need qualified support and precise limits.',
        'Protect each unit from puncture, crushing, heat, contamination, and package transfer during storage and shipment according to buyer-approved specifications and qualified advice. A carton pass does not prove the fill is safe, but poor protection can create visible damage and make an otherwise controlled lot harder to trace.',
      ],
      bullets: [
        'Keep product and package identifiers linked to factory, date, lot, formulation or material batch where useful, and carton map',
        'Do not let the listing, product, retail pack, instructions, report, and carton describe different ages, fills, materials, quantities, or models',
        'Hold unreadable, removable, missing, mixed, or contradictory identifiers until corrected and rechecked',
        'Photograph model and lot details in product, retail-pack, inner-pack, and carton context',
      ],
    },
    {
      id: 'inspection-limits',
      title: 'Where does inspection stop and qualified testing begin?',
      paragraphs: [
        'Microbiological analysis, chemical-content and migration testing, flammability, mechanical abuse, small-parts evaluation, heat conditioning, aging, leakage or durability protocols, and other safety assessments use defined methods, apparatus, sample preparation, controls, acceptance criteria, and competent interpretation. Those tasks belong with qualified laboratories and responsible compliance parties.',
        'An inspector should not cut or puncture saleable units, taste or touch the fill, place the toy in a mouth, microwave or heat it, use a child for a trial, improvise bite or ingestion simulations, or invent forces and cycle counts. Any destructive or special test needs an approved method, safe setup, selected samples, responsible party, and disposal plan.',
        'A passed sampled inspection supports a buyer decision only within its stated scope. It cannot cure missing evidence, validate unapproved formulation changes, prove that invisible hazards are absent, guarantee every unit outside the sample, or promise customs, marketplace, recall, or safe-use outcomes.',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Identity and classification',
      evidence: 'Destination, intended age and use, exact model, manufacturer, factory, shell, fill, claims, listing, production dates, lots, and approved changes align.',
      buyerDecision: 'Hold ambiguous classifications, aliases, mixed lots, or unexplained production changes until qualified review and traceable correction.',
    },
    {
      riskNode: 'Qualified evidence',
      evidence: 'Full reports and source checks map methods, sample photos, shell and fill, model, factory, dates, results, limitations, and current production.',
      buyerDecision: 'Hold missing, partial, unverifiable, mismatched, expired-in-scope, or supplier-only evidence; obtain qualified disposition or new testing.',
    },
    {
      riskNode: 'Finished goods',
      evidence: 'Sampled units match approved dimensions, mass, shell, fill appearance, seams, closure, surface, accessories, markings, and workmanship limits.',
      buyerDecision: 'Segregate affected cartons; correct under a controlled plan and repeat the agreed inspection, or reject the named lot.',
    },
    {
      riskNode: 'Labels and pack-out',
      evidence: 'Product, retail pack, instructions, listing, tracking codes, barcode, carton marks, quantities, and destination language are consistent.',
      buyerDecision: 'Relabel or repack only with importer-approved files, controlled work instructions, reconciliation, and re-inspection.',
    },
    {
      riskNode: 'Final release',
      evidence: 'Cleared model, formulation, production dates, lots, quantities, cartons, report versions, inspection sample, corrections, and open limits are recorded.',
      buyerDecision: 'Release only that named scope; keep unresolved goods on hold and separate laboratory or compliance acceptance from the QC decision.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'UK OPSS reports published August 10, 2026 document two separate China-origin liquid-filled squishy-toy cases, test findings, marking gaps, and border action',
    'Independent Axios reporting published July 27, 2026 supplies a separate current-attention signal and explicitly preserves the limits of unverified incident reports and causal inference',
    'The public case module separates documented facts, visible evidence, buyer lesson, and limits and does not imply Huang Sourcing participated in the case',
    'Buyer-side guidance distinguishes qualified laboratory work from observable product, lot, label, package, carton, correction, and release evidence in China',
    'The article does not claim that a sampled inspection proves compliance, invisible fill safety, customs acceptance, marketplace approval, recall avoidance, or safe use',
  ],
  whatToSend: [
    'Purchase order, destination, intended use and age, exact models and SKUs, manufacturer, factory, production dates, lots, quantities, claims, colours, scents, dimensions, mass tolerances, and responsible importer',
    'Approved samples, shell and fill specifications, formulation identifiers, bill of materials, supplier and batch controls, closure drawings, visual references, package artwork, and every approved change notice',
    'Applicable-rule review, test plan, complete laboratory reports, sample photos, source verification records, certificates or filings where required, and an index mapping each file to the exact production version',
    'Final product and package identifiers, tracking codes, age grading, warnings, instructions, country-of-origin marking, responsible-party details, barcode, retail-pack artwork, carton marks, packing list, and carton map',
    'Buyer-approved sampling, defect definitions, dimensions, mass limits, tools, safe handling, stop rules, photo requirements, rework rules, and balance-payment or pickup decision',
    'Known leakage, rupture, odour, residue, tackiness, small-parts, fill, microbial, chemical, evidence, label, package, supplier-change, storage, transport, or mixed-lot concerns and affected quantities',
  ],
  redFlags: [
    'The supplier will not identify the manufacturer, factory, shell, fill, formulation or batch control, subcontractors, production lot, test sample, or design changes',
    'The report, sample photos, product, package, online listing, certificate, or cartons show different models, fills, materials, factories, ages, dates, quantities, or claims',
    'Evidence is cropped, edited, incomplete, unverifiable, outside the laboratory scope, or presented as generic coverage without a technical rationale',
    'A supplier declaration, raw-material result, marketplace badge, CE or UKCA mark, or “non-toxic” phrase is presented as proof for the finished toy',
    'Sampled goods show leaks, ruptures, residue, abnormal odour, tackiness, cracks, punctures, deformation, contamination, detached parts, weak seams, or out-of-tolerance mass',
    'Product, package, instructions, tracking codes, listing, reports, cartons, or packing list contradict one another',
    'The correction plan lacks affected quantity, segregation, qualified testing disposition, controlled work instructions, revised files, waste control, carton mapping, or repeat inspection',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible products, identifiers, buyer-approved dimensions and mass, seams, closures, workmanship, labels, packages, cartons, quantities, and controlled files with agreed references in China',
    'Huang Sourcing does not classify the product for law, select every applicable rule, provide legal, microbiological, chemical, toxicological, or product-safety engineering advice, certify compliance, issue laboratory reports, or submit importer filings',
    'Visual checks and ordinary buyer-approved observations cannot prove microbiological or chemical safety, migration, flammability, small-parts outcomes, abuse performance, long-term seam integrity, or safe use',
    'Sampling cannot guarantee every unit, and mixed lots, sealed cartons, weak traceability, inaccessible goods, unsafe setups, or missing approved references reduce confidence',
    'The importer, manufacturer, qualified laboratory, compliance adviser, broker, marketplace, retailer, authorities, caregivers, and users remain responsible for their product-specific decisions',
    'A passed pre-shipment inspection does not guarantee regulatory compliance, customs release, marketplace approval, recall avoidance, injury prevention, or future product performance',
  ],
  relatedLinks: [
    {
      href: sandFilledToyAsbestosChecksChinaArticleHref,
      label: 'Sand-filled toy asbestos checks',
      note: 'Use the separate evidence path for sand-filled squeeze toys, mineral fill, asbestos testing, containment, and lot decisions.',
    },
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China laboratory report',
      note: 'Check source, laboratory scope, sample photos, model and formulation coverage, dates, methods, results, and limitations.',
    },
    {
      href: euToySafetyRegulationChinaArticleHref,
      label: 'EU toy safety supplier checklist',
      note: 'Coordinate destination classification, technical documentation, testing, labels, importer duties, and transition planning.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'China manufacturing QC plan',
      note: 'Build approved references, formulation and change control, qualified testing, inspections, corrections, and holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks',
      note: 'Match identity, age grading, warnings, instructions, tracking, retail packs, carton marks, quantities, and correction evidence.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report',
      note: 'Define photos, sampling, measurements, traceability, defects, affected quantity, decisions, and stated scope limits.',
    },
    {
      href: '/qc-inspection-china',
      label: 'QC inspection in China',
      note: 'Compare buyer-approved product, packaging, quantity, and evidence while the actual goods remain accessible.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, testing, toy, packaging, payment, pickup, supplier, and shipment decisions.',
    },
  ] satisfies RelatedLink[],
  sourceNotes: [
    {
      href: opssGlitterCase,
      label: 'UK OPSS - Glitter Ice Cube Squeezy Toy report',
      note: 'Primary public record published August 10, 2026 describing a China-origin liquid-filled toy, microbial and choking findings, missing identification or conformity markings, and border rejection.',
    },
    {
      href: opssDumplingCase,
      label: 'UK OPSS - Squishy Dumpling Bun Squeeze Toy report',
      note: 'Separate primary record published August 10, 2026 describing microbial findings, labeling improvements, China origin, destruction, and border rejection.',
    },
    {
      href: axiosSquishyReport,
      label: 'Axios - rising squishy sensory-toy incident reports',
      note: 'Independent July 27, 2026 reporting on current U.S. attention, published incident-report counts, poison-control contacts, and the limits of causal interpretation.',
    },
    {
      href: cpscSqueezeToyCase,
      label: 'U.S. CPSC - squeeze or squeaker toy recall record',
      note: 'Official May 21, 2026 Orb Funkee case for a different sand-filled product; used only to distinguish fill types, lot identity, and why this liquid-filled guide does not replace the separate asbestos article.',
    },
  ] satisfies SourceNote[],
}

export function makeSquishyToyChecksChinaArticleMetadata(): Metadata {
  const article = squishyToyChecksChinaArticle

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

export function makeSquishyToyChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(squishyToyChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Squishy toy pre-shipment release checklist',
      itemListElement: squishyToyChecksChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
