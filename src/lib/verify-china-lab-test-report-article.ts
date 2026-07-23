import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  cpscEfilingChinaImportsArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qcBeforeBalanceArticleHref,
  resourceGuideHref,
  supplierVerificationChinaLimitsArticleHref,
  verifyChinaLabTestReportArticleHref,
} from '@/lib/site-links'

type ArticleSection = {
  bullets?: string[]
  id: string
  paragraphs: string[]
  title: string
}

type CheckGroup = { items: string[]; title: string }
type DecisionRow = { buyerDecision: string; evidence: string; riskNode: string }
type RelatedLink = { href: string; label: string; note: string }
type SourceNote = { href: string; label: string; note: string }

export const verifyChinaLabTestReportArticle = {
  author: 'editorial-team' as const,
  href: verifyChinaLabTestReportArticleHref,
  title: 'How to Check a China Lab Report Before U.S. Shipment',
  metaTitle: 'Verify a China Lab Report Before U.S. Shipment',
  metaDescription:
    'Verify a China lab test report before U.S. shipment: check current CPSC acceptance, rule-specific scope, product identity, factory, dates, changes, and report integrity.',
  publishedDate: 'July 24, 2026',
  publishedDateIso: '2026-07-24T03:35:00+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'How to Check a China Lab Report Before U.S. Shipment',
  eyebrow: 'Lab acceptance - report scope - product match - release decision',
  image: {
    alt: 'Neutral illustration of a China-side product sample, generic laboratory report, accreditation directory, barcode labels, and measuring tools under review',
    height: 900,
    src: '/images/verify-china-lab-test-report.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/verify-china-lab-test-report.webp', width: 1600 },
    {
      height: 1200,
      src: '/images/verify-china-lab-test-report-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/verify-china-lab-test-report-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Before final payment or pickup, verify more than the logo on a supplier PDF. Match the laboratory, current acceptance status, rule-specific testing scope, report number, applicant, manufacturer, factory, tested sample, model, materials, dates, photos, results, amendments, and actual production order. If a key link is missing, hold release and ask the importer, qualified laboratory, or product-safety adviser whether corrected evidence or retesting is required.',
  answerSummary:
    'A report is usable only for the decision it actually supports. For CPSC-regulated children’s products, confirm the lab was CPSC-accepted for each applicable rule when testing occurred, then connect the full report to the exact product and factory now shipping. A China-side sourcing check can document identity and production mismatches, but it cannot authenticate a report, select legal requirements, reproduce controlled testing, issue a certificate, or guarantee compliance.',
  primaryCta: { label: 'Check Report and Shipment Evidence' },
  secondaryCta: { href: '#report-checklist', label: 'See Report Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side test report and shipment evidence check before payment or pickup.

Product / model / SKU count:
U.S. importer or marketplace:
Supplier / factory location:
Lab and report numbers:
Applicable rules or test plan:
Order and carton quantity:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#report-checklist', label: 'Report checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#lab-status', label: 'Lab status and scope' },
    { href: '#report-match', label: 'Report-to-product match' },
    { href: '#production-change', label: 'Production and changes' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Obtain the complete report, including sample photos, test methods, results, appendices, signatures, limitations, and every amendment—not only a cover, certificate, summary, or marketplace screenshot',
    'Search the current official CPSC laboratory directory by lab name or ID and record active or inactive status, address, contact details, ownership type, and each accepted testing scope',
    'Confirm the laboratory was accepted for every applicable children’s-product rule on the test date; CPSC acceptance is rule-specific, not a blanket approval for all products or methods',
    'Match report number, applicant, manufacturer, factory, sample receipt and test dates, product name, model, SKU, age grade, materials, components, dimensions, labels, warnings, and photos to the order',
    'Compare the tested sample and report images with approved drawings, bill of materials, golden sample, current production photos, opened cartons, labels, manuals, packing list, and shipment identifiers',
    'Ask qualified parties whether changes in material, component, construction, supplier, factory, age grade, claim, model, or test method require new assessment, testing, or certification',
    'Investigate inconsistent pages, fonts, dates, addresses, sample descriptions, calculations, photos, report numbers, QR links, contact domains, signatures, or amendment history directly with the named lab',
    'Hold payment or pickup when lab status, rule scope, report origin, product identity, factory identity, material changes, or bulk-production match remains unresolved',
  ],
  checkGroups: [
    {
      title: 'Official laboratory identity',
      items: [
        'Legal lab name, CPSC Lab ID, physical address, contact channel, active or inactive status, ownership type, accreditation body, certificate dates, and any adverse-action or withdrawal record',
        'Rule-by-rule CPSC scope, referenced test methods, scope dates, test location, firewalled or government status where relevant, and whether subcontracted work appears in the report',
      ],
    },
    {
      title: 'Full report integrity',
      items: [
        'Report number, issue and amendment dates, page count, sample receipt, test period, authorized signatory, methods, conditions, equipment, results, photos, appendices, deviations, failures, limitations, and revision trail',
        'Direct confirmation path through the laboratory’s official domain or directory contact rather than supplier-provided phone numbers, QR codes, email addresses, or cropped screenshots alone',
      ],
    },
    {
      title: 'Product and factory match',
      items: [
        'Applicant, manufacturer, factory, model, SKU, version, age grade, intended use, dimensions, materials, components, colors, labels, warnings, manuals, packaging, and product photographs',
        'Purchase order, controlled drawings, bill of materials, golden sample, material declarations, component reports, current production, lot/date codes, packing list, carton range, and destination',
      ],
    },
    {
      title: 'Change and release control',
      items: [
        'Differences after testing in factory, material, component, supplier, construction, dimension, finish, age claim, warning, model family, label, software, or production method',
        'Affected models and lots, stock isolation, qualified review, laboratory confirmation, retest decision, new certificate need, supplier correction, re-inspection, payment hold, and pickup release',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why China lab-report verification is a current buyer issue',
      paragraphs: [
        'On January 15, 2026, CPSC announced immediate withdrawal of acceptance for four China-based consumer-product laboratories. The agency said its findings across the four included unreliable or falsified reports, undisclosed loss or suspension of other accreditation, undisclosed relocation, products that later failed independent testing, and systemic testing-procedure failures. On May 6, CPSC then launched a national crackdown and public inquiry focused on fake safety labels and counterfeit certification marks, expressly connecting that work to falsified testing and deceptive import practices.',
        'The timing also matters operationally. CPSC says electronic filing of certificate data began July 8, 2026 for most covered imported consumer products. The filing includes product and testing data, but transmission does not cure a weak underlying report. GAO’s January 2026 review likewise described rule-specific laboratory scopes and recommended stronger risk-based oversight of third-party labs. The buyer lesson is narrow: validate the evidence chain before relying on it for a certificate, entry filing, final payment, or shipment release.',
      ],
      bullets: [
        'A familiar lab name or accreditation logo does not prove current CPSC acceptance for the exact rule tested',
        'An active laboratory can have only some accepted scopes; one product may need work from more than one laboratory',
        'A genuine report can still be irrelevant when the factory, model, material, component, age grade, or production version changed',
        'China-side review is most useful before payment or pickup, while documents, samples, cartons, and supplier corrections remain accessible',
      ],
    },
    {
      id: 'lab-status',
      title: 'How should buyers verify laboratory status and test scope?',
      paragraphs: [
        'Start in the official CPSC laboratory directory, not with a badge printed on the report. Search the legal name and CPSC Lab ID, compare the address and contact details, open the accepted scope, and check the inactive/adverse-action list. Preserve a dated record of what the directory showed. Then compare the report’s test location and issue date with the laboratory’s acceptance and scope at the time of testing.',
        'CPSC guidance says acceptance is rule-specific. A laboratory accepted for lead testing is not automatically accepted for small parts, durable nursery products, flammability, phthalates, or another requirement. Qualified parties should map every applicable rule and test method to the accepted scope, including any component-part, composite, subcontracted, or firewalled testing. If the match cannot be established, ask the laboratory through an independently obtained official contact.',
      ],
      bullets: [
        'Match the exact legal entity and location; similar group names, branches, former addresses, and trading names are not interchangeable',
        'Record the test date, report issue date, acceptance period, scope version, rule citation, and test method instead of checking only today’s status',
        'Distinguish adverse action, expired or failed audit, voluntary withdrawal, relocation, merger, and ordinary scope limits; they do not mean the same thing',
        'Do not infer legal sufficiency from this checklist—have the responsible importer and qualified compliance resources decide what testing and certification apply',
      ],
    },
    {
      id: 'report-match',
      title: 'How should the report match the exact product and order?',
      paragraphs: [
        'Read the report as an identity record. Compare the applicant, manufacturer, factory, sample description, model, SKU, age grade, intended use, dimensions, materials, component suppliers, colors, warnings, labels, manuals, packaging, and photos with the purchase order and approved product file. Check dates and traceability: when the sample arrived, when it was tested, when the report was issued, and whether amendments replaced earlier pages.',
        'Then compare the tested sample to production evidence. Use controlled drawings, the bill of materials, golden sample, component records, current production photos, opened-carton observations, labels, manuals, lot codes, packing list, and carton identity. A legitimate report for a similar speaker, toy, battery product, garment, or furniture model does not establish coverage for the goods being shipped.',
      ],
      bullets: [
        'Treat missing pages, inconsistent pagination, low-resolution pasted photos, unexplained model families, changed addresses, mismatched fonts, or supplier-only verification contacts as questions to resolve',
        'Ask the named laboratory to confirm the report number and amendment history using contact details found independently',
        'Map each applicable result to the relevant material, component, model, and production version rather than accepting one overall “PASS” label',
        'Keep documentary confirmation separate from physical inspection and both separate from controlled laboratory retesting',
      ],
    },
    {
      id: 'production-change',
      title: 'What should happen when production changed after testing?',
      paragraphs: [
        'A report is a record of the sample tested under stated conditions. It is not a permanent license for every later factory, component, color, material, or version. CPSC guidance says a material change affecting compliance requires retesting for the affected rules and a new Children’s Product Certificate based on new passing results. Qualified parties must decide whether a particular change is material and which tests it affects.',
        'Before release, create a change map covering factory, component supplier, material grade, coating, dimensions, construction, electronics, battery, software where relevant, age or performance claims, labels, warnings, instructions, packaging, and model family. Isolate affected lots, obtain a documented laboratory or specialist decision, complete correction or retesting, and re-inspect the agreed physical evidence before releasing payment or pickup.',
      ],
      bullets: [
        'Do not let a supplier substitute a “same material” statement for controlled specifications, traceable declarations, or the qualified decision required by the test plan',
        'Separate unchanged models from affected models and identify exact lots, production dates, cartons, and quantities',
        'Require a written outcome: report still applies, amended report needed, targeted retest needed, full retest needed, or release not approved',
        'Keep the final importer, certificate issuer, broker, laboratory, marketplace, and shipment-release responsibilities explicitly assigned',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Lab identity and acceptance match',
      evidence:
        'Official directory name, Lab ID, address, status, dates, and each required rule-specific scope match the laboratory and test location in the full report',
      buyerDecision:
        'Continue product matching, or hold and verify through the laboratory and qualified compliance resources.',
    },
    {
      riskNode: 'Full report is attributable',
      evidence:
        'Report number, pages, methods, results, photos, dates, signatory, appendices, limitations, and amendments are complete and independently confirmable',
      buyerDecision:
        'Accept the document for qualified review, or request the original file, lab confirmation, correction, or replacement evidence.',
    },
    {
      riskNode: 'Tested sample matches production',
      evidence:
        'Applicant, manufacturer, factory, model, materials, components, age grade, labels, photos, drawings, lots, and sampled goods describe the same version',
      buyerDecision:
        'Proceed toward release, or isolate affected stock and obtain a documented assessment or retest decision.',
    },
    {
      riskNode: 'Changes and certificate path are cleared',
      evidence:
        'Every post-test change, affected rule, retest need, certificate update, eFiling data item, correction, and re-inspection outcome is assigned and documented',
      buyerDecision:
        'Release only the cleared models and lots; otherwise hold payment, delay pickup, retest, rework, or cancel.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'CPSC January 15, 2026 statement withdrawing acceptance from four China-based laboratories, including the agency’s published laboratory-specific reasons.',
    'CPSC May 6, 2026 national crackdown and request for information on counterfeit certification marks, fake safety labels, falsified testing, and deceptive import practices.',
    'Current CPSC accepted-laboratory, inactive-laboratory, third-party testing, initial testing, material-change, and certificate guidance checked July 24, 2026 Beijing time.',
    'GAO-26-107736 independent review of CPSC port processes, laboratory approval and risk oversight, testing scopes, and the July 2026 certificate-data filing context.',
    'Buyer-approved rules map, full reports, lab directory records, drawings, bill of materials, golden sample, production evidence, lot map, labels, manuals, packed goods, and change records.',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/About-CPSC/Chairman/Peter-A-Feldman/Statement/CPSC-Immediately-Withdraws-Accreditation-from-Chinese-Laboratories-to-Protect-American-Families',
      label: 'CPSC - withdrawal of four China-based laboratories',
      note: 'Primary January 15, 2026 public case naming four former CPSC-accepted laboratories and describing the agency’s laboratory-specific reasons for immediate withdrawal.',
    },
    {
      href: 'https://www.cpsc.gov/Newsroom/News-Releases/2026/US-Consumer-Product-Safety-Commission-Launches-Crackdown-on-Fake-Safety-Labels-Used-to-Push-Dangerous-Foreign-Products-into-US-Homes',
      label: 'CPSC - counterfeit certification mark crackdown',
      note: 'Primary May 6, 2026 source documenting the current enforcement inquiry and its connection to fake labels, falsified testing, deceptive import practices, and the four laboratory withdrawals.',
    },
    {
      href: 'https://www.cpsc.gov/cgi-bin/labsearch/',
      label: 'CPSC - current accepted laboratory directory',
      note: 'Official search used to verify laboratory identity, current CPSC acceptance, address, ownership type, and rule-specific testing scope.',
    },
    {
      href: 'https://www.cpsc.gov/cgi-bin/labsearch/ViewInactiveLabs.aspx',
      label: 'CPSC - inactive laboratories and adverse actions',
      note: 'Official current list distinguishing adverse actions, failed audits, voluntary withdrawals, expired listings, relocations, mergers, and other inactive statuses.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/Third-Party-Testing',
      label: 'CPSC - third-party testing guidance',
      note: 'Official guidance explaining rule-specific laboratory acceptance, supplier-report reliance with due care, material-change testing, periodic testing, and July 2026 eFiling context.',
    },
    {
      href: 'https://files.gao.gov/reports/GAO-26-107736/index.html',
      label: 'GAO-26-107736 - CPSC laboratory oversight review',
      note: 'Independent January 2026 institutional review covering laboratory testing scopes, CPSC approval and risk oversight, port examinations, and certificate-data filing.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Product name, intended use, age grade, model, SKU, version, dimensions, materials, components, colors, claims, order quantity, production dates, lot codes, carton count, destination, and importer',
    'Complete laboratory reports and amendments, report and sample numbers, laboratory name and ID, applicant, manufacturer, factory, methods, results, photos, appendices, and supplier correspondence',
    'Qualified applicable-rule and test plan, CPSC laboratory directory records, accreditation and scope files, component reports, certificates, citation codes, and intended eFiling data',
    'Purchase order, controlled drawings, bill of materials, component specifications, golden sample, labels, warnings, manuals, packaging files, listings, invoices, and packing list',
    'Current production photos, opened-carton plan, model and lot map, material or supplier substitutions, engineering changes, correction records, retest decisions, and re-inspection rules',
    'Payment deadline, pickup date, factory contact, laboratory contact obtained independently, compliance owner, broker, marketplace contact, and written release authority',
  ],
  redFlags: [
    'The supplier sends only a certificate, first page, summary, screenshot, QR code, marketplace badge, or “PASS” image instead of the full report and appendices',
    'The laboratory is inactive, the address differs, the report date falls outside the relevant acceptance period, or the applicable rule is absent from the accepted scope',
    'The applicant, manufacturer, factory, sample, model, age grade, materials, components, labels, photos, or dates do not match the order',
    'Report numbers, pages, fonts, photos, calculations, signatures, email domains, QR destinations, or amendment dates are inconsistent or cannot be confirmed independently',
    'One report is used for multiple models, factories, materials, colors, components, age grades, or constructions without a documented qualified family rationale',
    'Production changed after testing but there is no written affected-rule analysis, laboratory review, retest decision, certificate update, lot isolation, or new evidence',
    'The supplier refuses direct laboratory confirmation, controlled files, current production access, opened-carton evidence, traceable correction records, or a payment hold',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible report fields, product identity, supplier and factory records, buyer-approved references, production samples, labels, manuals, lots, cartons, and correction evidence in China',
    'Huang Sourcing does not authenticate laboratory reports, determine applicable laws or test methods, judge accreditation, perform controlled testing, issue certificates, file eFiling data, approve customs entry, or provide legal advice',
    'A directory match or laboratory confirmation does not prove the tested sample equals bulk production, and a visual production match does not prove test performance or product safety',
    'Sampling cannot guarantee every unit; sealed cartons, mixed lots, incomplete reports, inaccessible files, supplier obstruction, late changes, and poor traceability reduce confidence',
    'The importer, manufacturer, certificate issuer, CPSC-accepted laboratory where required, product-safety specialist, broker, marketplace, or counsel remains responsible for legal and release decisions',
    'Laboratory status, scope, accreditation, standards, test methods, certificate instructions, eFiling rules, and enforcement guidance can change; reconfirm at each decision point',
  ],
  relatedLinks: [
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'CPSC eFiling for China imports',
      note: 'Organize the exact product, manufacture, test, laboratory, certificate, importer, and broker data required after the underlying evidence is checked.',
    },
    {
      href: supplierVerificationChinaLimitsArticleHref,
      label: 'Supplier verification limits in China',
      note: 'Separate business-identity checks from product testing, certification, financial, legal, and shipment evidence.',
    },
    {
      href: qcBeforeBalanceArticleHref,
      label: 'QC inspection before balance payment',
      note: 'Connect report-to-product match, sampled production, open issues, corrections, and re-inspection to a documented payment hold or release.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Verify model, warning, manual, barcode, retail-pack, date-code, and carton evidence against the tested and approved product version.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related supplier, testing, inspection, payment, packaging, pickup, and shipment decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
}

export function makeVerifyChinaLabTestReportArticleMetadata(): Metadata {
  const article = verifyChinaLabTestReportArticle
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

export function makeVerifyChinaLabTestReportArticleJsonLd() {
  return [
    makeArticleJsonLd(verifyChinaLabTestReportArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'China laboratory test report verification checklist',
      itemListElement: verifyChinaLabTestReportArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
