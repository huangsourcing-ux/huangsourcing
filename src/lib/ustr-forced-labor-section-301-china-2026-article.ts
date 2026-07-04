import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  chinaSection301TariffCheckArticleHref,
  huangSourcingCheckScopeArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  supplierVerificationChecklistHref,
  supplierVerificationChinaLimitsArticleHref,
  supplierVerificationVsFactoryAuditArticleHref,
  uflpaChinaSupplierCheckArticleHref,
  ustrForcedLaborSection301ChinaArticleHref,
  whatToSendBeforeChinaInspectionHref,
} from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

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
  evidence: string
  riskNode: string
}

type FaqItem = {
  answer: string
  question: string
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

export const ustrForcedLaborSection301ChinaArticle = {
  href: ustrForcedLaborSection301ChinaArticleHref,
  title: 'USTR Forced Labor Section 301 Proposal: China Import Evidence Checklist',
  metaTitle: 'USTR Forced Labor Section 301 China Checklist',
  metaDescription:
    'USTR forced labor Section 301 China checklist for 2026: proposed duties, supplier chain, origin, product, invoice, and importer evidence before payment or shipment.',
  publishedDate: 'July 4, 2026',
  publishedDateIso: '2026-07-04T09:00:00-04:00',
  h1: 'USTR Forced Labor Section 301 Proposal: What China Importers Should Check in 2026',
  eyebrow: 'USTR Section 301 - forced labor proposal - China import evidence',
  image: {
    alt: 'China supplier chain, product, invoice, carton, and importer evidence reviewed for USTR forced labor Section 301 proposal readiness',
    height: 900,
    src: '/images/uflpa-china-supplier-check-2026.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/uflpa-china-supplier-check-2026.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/uflpa-china-supplier-check-2026-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/uflpa-china-supplier-check-2026-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'USTR announced findings and proposed Section 301 actions on June 2, 2026 after investigations into foreign practices related to forced labor, and the Federal Register notice was published on June 5, 2026. China and Hong Kong are among the investigated economies, public comments close on July 6, 2026, and a public hearing is scheduled for July 7, 2026. The proposal is not final, but it is current enough that U.S. importers sourcing from China should clean up supplier-chain and shipment evidence before payment or pickup.',
  answerSummary:
    'Before deposit, final payment, or shipment release, buyers should connect the exact product to supplier identity, Chinese legal names, production site, origin facts, material inputs, invoice wording, carton evidence, HTS and tariff handoff, UFLPA or forced-labor risk notes, and importer instructions. Huang Sourcing can organize China-side evidence, but tariff treatment, Section 301 exposure, forced-labor determinations, comments to USTR, customs entry, and legal conclusions remain with the importer, licensed customs broker, trade counsel, compliance adviser, or responsible company officer.',
  primaryCta: {
    label: 'Check Supplier Evidence Before Shipment',
  },
  secondaryCta: {
    href: '#ustr-checklist',
    label: 'See Evidence Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side evidence check for USTR forced labor Section 301 proposal risk.

Product / SKU count:
Supplier English and Chinese name:
Factory / pickup location:
Materials or components of concern:
U.S. importer / broker / counsel instructions:
Order quantity / cartons:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#ustr-checklist', label: 'Evidence checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#proposal-status', label: 'Proposal status' },
    { href: '#supplier-chain', label: 'Supplier chain' },
    { href: '#origin-tariff', label: 'Origin and tariff file' },
    { href: '#forced-labor-risk', label: 'Forced labor evidence' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Confirm whether the U.S. importer, broker, or trade counsel wants China and Hong Kong supplier files reviewed before July 2026 comments, orders, payment, or pickup',
    'Separate proposed Section 301 action risk from existing UFLPA, WRO, CAATSA, Section 301 China tariffs, IEEPA, AD/CVD, and normal customs entry questions',
    'Map supplier English name, Chinese legal name, invoice issuer, exporter, bank beneficiary, factory, pickup address, subcontractor, and upstream names',
    'Tie each SKU to product photos, material notes, function, model, packing list, carton labels, invoice wording, and importer HTS or tariff instructions',
    'Identify materials, components, sectors, or regions where forced-labor questions may sit upstream from the final China sales supplier',
    'Preserve supplier answers, screenshots, business licenses, declarations, production photos, traceability files, and correction records by SKU and lot',
    'Ask the importer who owns USTR comments, tariff analysis, customs entry, broker handoff, and any forced-labor escalation before goods leave China',
    'Hold release when supplier identity, origin, material chain, invoice wording, or importer instructions cannot be reconciled while correction is still practical',
  ],
  checkGroups: [
    {
      title: 'Proposal and importer owner',
      items: [
        'Record whether the importer is tracking the June 2026 USTR proposal, July 6 comment deadline, and July 7 public hearing',
        'Name who owns comments, tariff strategy, broker instructions, forced-labor review, and shipment-release decisions',
      ],
    },
    {
      title: 'Supplier and factory chain',
      items: [
        'Compare English name, Chinese legal name, business license, invoice issuer, exporter, bank beneficiary, factory, and pickup address',
        'Document trader, subcontractor, processor, packer, or upstream supplier roles before payment or pickup',
      ],
    },
    {
      title: 'Product and origin file',
      items: [
        'Connect SKU, model, material, dimensions, function, components, photos, labels, cartons, and packing records to the same shipment lot',
        'Keep country-of-origin facts separate from export route, forwarder route, Hong Kong routing, sales-office location, and supplier marketing claims',
      ],
    },
    {
      title: 'Forced-labor evidence handoff',
      items: [
        'Collect UFLPA, Entity List, high-priority sector, WRO, CAATSA, material-origin, and supplier-chain notes requested by the U.S. team',
        'Package gaps, supplier refusals, late changes, and unresolved traceability questions for the importer, broker, counsel, or compliance adviser',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why this USTR proposal is a current China sourcing issue',
      paragraphs: [
        'USTR announced findings and proposed Section 301 actions on June 2, 2026 after investigations into foreign practices related to forced labor. The June 5, 2026 Federal Register notice sets a July 6, 2026 comment deadline and a July 7, 2026 public hearing. China and Hong Kong are included among the investigated economies listed in the notice.',
        'The notice proposes additional duties on products of investigated economies, except products excluded in Annex A. It describes a 10% proposed rate for economies with a forced-labor import prohibition, certain commitments, or a partial regime, and a 12.5% proposed rate for other economies. Importers should have qualified advisers apply the notice, Annex A, HTS details, and any later USTR or CBP instructions to their own products.',
        'The proposal is not a final duty schedule. That distinction matters. A sourcing team should not tell customers that a new duty is already due, but it should treat the proposal as a reason to clean up supplier, product, origin, invoice, and forced-labor evidence while goods are still in China and before the importer has to make a policy, customs, or release decision.',
      ],
      bullets: [
        'The topic is current because the comment period and public hearing sit in early July 2026',
        'China and Hong Kong are named in the investigated-economy list, so China importers should not ignore the proposal',
        'Evidence should be organized before payment, pickup, and customs entry pressure compresses options',
        'A China-side evidence file supports importer decisions but does not decide Section 301 treatment',
      ],
    },
    {
      id: 'proposal-status',
      title: 'Treat the proposal as a decision trigger, not a final tariff answer',
      paragraphs: [
        'Section 301 actions can move through investigation findings, public comments, hearings, modified action lists, implementation instructions, and customs guidance. The June 2026 notice is a proposed action stage. Importers, brokers, and trade counsel should own the legal and tariff interpretation.',
        'For China sourcing, the immediate practical work is narrower: know which products are exposed, which suppliers and production sites are involved, which paperwork will be used, and which gaps should block a deposit, balance payment, or pickup until the U.S. owner reviews them.',
      ],
      bullets: [
        'Avoid publishing supplier promises that a proposed tariff will not apply',
        'Keep USTR proposal notes separate from existing Section 301 China tariff instructions',
        'Ask the importer whether comment evidence, supplier records, or product lists need to be preserved now',
        'Refresh the file if USTR changes the proposal, publishes final action, or CBP issues entry guidance',
      ],
    },
    {
      id: 'supplier-chain',
      title: 'Supplier identity has to connect to the actual production chain',
      paragraphs: [
        'A clean sales contact does not prove who made the goods. Buyers should compare the quoted supplier, Chinese legal name, invoice issuer, exporter, bank beneficiary, factory, subcontractor, processor, packer, pickup location, and upstream material supplier when those records are available.',
        'This is especially important when forced-labor questions and tariff exposure overlap. A supplier may be able to answer simple quote questions but still fail to explain production site, material origin, subcontracting, or upstream records. Those gaps should be visible before the buyer loses leverage.',
      ],
      bullets: [
        'Ask for Chinese names, not only English trade names',
        'Preserve business licenses, platform screenshots, invoice drafts, bank details, and supplier answers together',
        'Flag late company, factory, exporter, beneficiary, or pickup-address changes before release',
        'Document which names were screened and which names were unavailable',
      ],
    },
    {
      id: 'origin-tariff',
      title: 'Product, origin, and tariff files should describe the same goods',
      paragraphs: [
        'The importer or broker cannot make clean decisions from mismatched product records. SKU list, product photos, model labels, material notes, accessory sets, invoice wording, packing list, carton labels, and HTS or tariff instructions should point to the same item and lot.',
        'Origin evidence should also be treated carefully. A shipment routed through another place, an export agent, or a Hong Kong sales office does not automatically change country of origin. The importer should decide origin and tariff treatment, but the sourcing file should keep production and routing facts separate.',
      ],
      bullets: [
        'Build one line per SKU with photos, model, material, function, quantity, order lot, and invoice description',
        'Separate finished goods, accessories, replacement parts, samples, bundles, and mixed cartons',
        'Compare importer HTS notes or tariff instructions against actual product evidence before pickup',
        'Record correction evidence when suppliers change invoice wording, labels, material, or cartons',
      ],
    },
    {
      id: 'forced-labor-risk',
      title: 'Forced-labor evidence should be specific enough for importer review',
      paragraphs: [
        'A generic supplier declaration is weak if it cannot be tied to the actual product, factory, material, or order lot. For flagged products, the file should show supplier-chain names, production location, material notes, upstream records when available, high-priority sector exposure, and any U.S. team instructions about UFLPA, WROs, CAATSA, or other forced-labor controls.',
        'The goal is not to certify that forced labor is absent. The goal is to make the evidence and gaps explicit so the responsible importer can decide whether to comment, proceed, require correction, ask for specialist review, split goods, delay pickup, or cancel before further payment.',
      ],
      bullets: [
        'Tie declarations, bills of materials, photos, labels, and packing records to the same SKU and lot',
        'Screen supplier names and known upstream names with date-stamped official-source notes where requested',
        'Avoid treating absence from a public list as clearance',
        'Escalate material-origin or supplier-chain uncertainty before goods leave China',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Proposal owner is named',
      evidence:
        'Importer, broker, counsel, compliance adviser, or company officer is responsible for USTR comments, tariff strategy, and release instructions.',
      buyerDecision:
        'Proceed with evidence collection, pause for U.S. instructions, or avoid supplier promises about proposed duties.',
    },
    {
      riskNode: 'Supplier chain is consistent',
      evidence:
        'English name, Chinese name, license, exporter, invoice issuer, bank beneficiary, factory, pickup address, and subcontractor role reconcile.',
      buyerDecision:
        'Approve ordinary release, request correction, or hold payment when company roles conflict.',
    },
    {
      riskNode: 'Product and tariff file match',
      evidence:
        'SKU, model, material, function, photos, labels, cartons, invoice wording, packing list, and importer HTS or tariff notes describe the same goods.',
      buyerDecision:
        'Send a cleaner file to the broker or counsel before final invoice approval and pickup.',
    },
    {
      riskNode: 'Forced-labor gaps are visible',
      evidence:
        'Material-origin concerns, upstream names, high-priority sector exposure, supplier refusals, and unresolved traceability questions are listed.',
      buyerDecision:
        'Escalate, correct, split, delay, cancel, or release only with written approval from the responsible U.S. owner.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official USTR June 2, 2026 press release and June 5, 2026 Federal Register notice for the proposed Section 301 actions, comment deadline, hearing date, investigated economies, and proposal status.',
    'Official USTR Section 301 source context plus CBP and DHS forced-labor source context for importer due diligence, UFLPA, WRO, CAATSA, Entity List, and shipment evidence.',
    'Buyer-provided supplier names, Chinese names, business licenses, purchase orders, invoices, packing lists, product photos, material notes, broker instructions, and importer compliance instructions.',
    'Physical product, carton, label, factory, pickup-location, correction, and shipment-record evidence observed or collected in China before payment or release.',
  ],
  sourceNotes: [
    {
      href: 'https://ustr.gov/about/policy-offices/press-office/press-releases/2026/june/ustr-makes-findings-and-proposes-action-60-section-301-investigations-relating-failures-take-action',
      label: 'USTR - Proposed actions in forced labor Section 301 investigations',
      note: 'Official USTR announcement of June 2, 2026 findings and proposed actions after investigations related to foreign forced-labor practices.',
    },
    {
      href: 'https://www.federalregister.gov/documents/2026/06/05/2026-11296/notice-of-determinations-and-request-for-comments-concerning-actions-in-section-301-investigations',
      label: 'Federal Register - Section 301 proposed actions and comments',
      note: 'Official notice with comment deadline, hearing date, proposal status, investigated economies, and request for public comments.',
    },
    {
      href: 'https://ustr.gov/issue-areas/enforcement/section-301-investigations',
      label: 'USTR - Section 301 investigations',
      note: 'Official USTR overview of Section 301 investigation authority and process context.',
    },
    {
      href: 'https://www.cbp.gov/trade/forced-labor',
      label: 'CBP - Forced Labor',
      note: 'Official CBP forced-labor enforcement page for importer resources, guidance, WROs, Findings, and enforcement context.',
    },
    {
      href: 'https://www.dhs.gov/uflpa-entity-list',
      label: 'DHS - UFLPA Entity List',
      note: 'Official DHS Entity List source used for UFLPA screening when supplier-chain names are known.',
    },
    {
      href: 'https://www.cbp.gov/trade/forced-labor/UFLPA',
      label: 'CBP - Uyghur Forced Labor Prevention Act',
      note: 'Official CBP UFLPA resource page for importer guidance, operational materials, and enforcement updates.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Product list by SKU, model, material, component set, quantity, carton count, U.S. destination, importer, and shipment timeline',
    'Supplier English name, Chinese legal name, business license, platform profile, website, invoice issuer, exporter, bank beneficiary, and shipper',
    'Factory name, production address, pickup address, production photos, subcontractor notes, processor or packer details, and access instructions',
    'Purchase order, quote, proforma invoice, commercial invoice draft, packing list draft, product photos, label photos, carton photos, and supplier chat records',
    'Bill of materials, material declarations, upstream supplier names, traceability files, Entity List or buyer screening notes, and correction evidence',
    'Importer, broker, trade counsel, or compliance adviser instructions for HTS, Section 301, UFLPA, WRO, CAATSA, forced-labor escalation, and release blockers',
  ],
  redFlags: [
    'Supplier cannot provide a Chinese legal name, business license, production address, or consistent invoice and bank details',
    'The seller claims to be the factory but pickup, carton, document, or production evidence points to another company',
    'A trading company, export agent, subcontractor, processor, or packer is involved but its role is not documented',
    'Supplier gives generic forced-labor declarations that do not tie to the exact SKU, factory, material, or shipment lot',
    'Product photos, labels, packing list, invoice, material declarations, and carton records appear to describe different goods or lots',
    'High-priority materials, labor-intensive processing, or opaque upstream inputs are present but the supplier refuses traceability records',
    'Factory, material, production site, invoice wording, shipper, or routing changes after the importer has prepared the evidence file',
    'No U.S.-side owner has accepted responsibility for proposed Section 301 risk, customs treatment, or forced-labor escalation',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible supplier, factory, material, document, carton, and shipment evidence against buyer-provided references in China',
    'Huang Sourcing does not determine Section 301 exposure, forced-labor compliance, tariff classification, country of origin, customs treatment, or legal strategy',
    'A China-side evidence check cannot prove absence of forced labor, supply-chain admissibility, USTR comment sufficiency, CBP acceptance, duty rate, or marketplace approval',
    'The importer, broker, trade counsel, compliance adviser, customs adviser, marketplace, or responsible company officer remains accountable for regulated decisions',
    'Supplier obstruction, missing upstream records, subcontracting, mixed lots, translated names, sealed cartons, or late supplier changes can limit report confidence',
    'USTR proposals, final action scope, exclusion handling, CBP entry guidance, tariffs, sanctions, and forced-labor enforcement priorities can change after publication',
  ],
  relatedLinks: [
    {
      href: uflpaChinaSupplierCheckArticleHref,
      label: 'UFLPA China supplier evidence guide',
      note: 'Use this when forced-labor evidence and UFLPA importer readiness are the main shipment risk.',
    },
    {
      href: chinaSection301TariffCheckArticleHref,
      label: 'China Section 301 tariff evidence guide',
      note: 'Use this when product identity, HTS handoff, exclusion scope, and ordinary Section 301 tariff files need cleanup.',
    },
    {
      href: supplierVerificationChecklistHref,
      label: 'Supplier verification China checklist',
      note: 'Start here when company identity, payment terms, or supplier role needs a narrower check before deposit.',
    },
    {
      href: supplierVerificationChinaLimitsArticleHref,
      label: 'Supplier verification China limits',
      note: 'Separate visible supplier evidence from legal, customs, compliance, and future-performance guarantees.',
    },
    {
      href: supplierVerificationVsFactoryAuditArticleHref,
      label: 'Supplier verification vs factory audit',
      note: 'Compare a focused supplier evidence review with a deeper audit or specialist due-diligence project.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Organize evidence into a report that supports payment, correction, or pickup decisions.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Use when product identity, labels, and cartons also need to match the importer evidence file.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before China inspection',
      note: 'Prepare names, order files, photos, labels, materials, and release rules before the onsite or desk check.',
    },
    {
      href: huangSourcingCheckScopeArticleHref,
      label: 'Huang Sourcing check scope',
      note: 'Confirm which evidence questions fit a China-side check and which require legal, customs, or compliance specialists.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Is the USTR forced labor Section 301 action final?',
      answer:
        'No. USTR announced findings and proposed actions on June 2, 2026. The June 5, 2026 Federal Register notice sets a July 6, 2026 comment deadline and a July 7, 2026 public hearing. Importers should follow USTR updates and qualified trade advice before treating any proposal as final.',
    },
    {
      question: 'Why should China importers care if the action is only proposed?',
      answer:
        'Because supplier-chain, product, origin, material, invoice, and forced-labor evidence is easier to collect before payment and pickup. Waiting until final action or entry can leave the importer with weak files and little leverage over the supplier.',
    },
    {
      question: 'Does this replace the existing China Section 301 tariff check?',
      answer:
        'No. This page covers a proposed forced-labor-related Section 301 action. Existing China Section 301 tariffs, exclusions, HTS analysis, IEEPA duties, AD/CVD, and ordinary customs treatment still need separate importer, broker, or counsel review.',
    },
    {
      question: 'Does this replace UFLPA supplier-chain checks?',
      answer:
        'No. UFLPA, WROs, CAATSA, Entity List screening, and forced-labor admissibility remain separate U.S. import risk areas. The same supplier-chain evidence can support several reviews, but each regulated decision has its own owner.',
    },
    {
      question: 'What should buyers check before paying a China supplier?',
      answer:
        'Check supplier identity, Chinese legal name, invoice issuer, bank beneficiary, factory role, subcontracting, product details, material chain, carton evidence, invoice wording, and importer instructions for tariff and forced-labor escalation.',
    },
    {
      question: 'Can Huang Sourcing decide whether the proposed duties apply?',
      answer:
        'No. Huang Sourcing can collect and compare China-side supplier, factory, product, material, document, carton, and shipment evidence. USTR comments, tariff treatment, forced-labor determinations, customs entry, and legal decisions belong with the responsible U.S. parties and qualified specialists.',
    },
  ] satisfies FaqItem[],
}

export function makeUstrForcedLaborSection301ChinaArticleMetadata(): Metadata {
  const article = ustrForcedLaborSection301ChinaArticle

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

export function makeUstrForcedLaborSection301ChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(ustrForcedLaborSection301ChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'USTR forced labor Section 301 China import evidence checklist',
      itemListElement: ustrForcedLaborSection301ChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(ustrForcedLaborSection301ChinaArticle.faqs),
  ]
}
