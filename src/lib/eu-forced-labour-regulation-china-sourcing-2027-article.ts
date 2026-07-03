import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  chinaFactorySubcontractingRiskArticleHref,
  euCbamChinaSourcingArticleHref,
  euDeforestationRegulationChinaArticleHref,
  euForcedLabourRegulationChinaArticleHref,
  huangSourcingCheckScopeArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  supplierVerificationChecklistHref,
  supplierVerificationChinaLimitsArticleHref,
  supplierVerificationVsFactoryAuditArticleHref,
  uflpaChinaSupplierCheckArticleHref,
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

export const euForcedLabourRegulationChinaArticle = {
  href: euForcedLabourRegulationChinaArticleHref,
  title: 'EU Forced Labour Regulation China Sourcing: 2027 Evidence Guide',
  metaTitle: 'EU Forced Labour Regulation China Sourcing Guide',
  metaDescription:
    'EU Forced Labour Regulation China sourcing guide: supplier, factory, product, upstream, traceability, and importer evidence checks before 2027 enforcement.',
  publishedDate: 'July 3, 2026',
  publishedDateIso: '2026-07-03T09:00:00-04:00',
  h1: 'EU Forced Labour Regulation Supplier Evidence Check for China Sourcing',
  eyebrow: 'EU forced labour ban - supplier chain - 2027 readiness',
  image: {
    alt: 'China-side supplier chain, factory, product, carton, and document evidence checked for EU forced labour regulation readiness',
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
    'The European Commission launched the Forced Labour Single Portal and preparedness package on June 26, 2026. That makes the EU Forced Labour Regulation a current sourcing issue, even though the ban applies from December 14, 2027. Buyers sourcing from China should start building supplier-chain evidence before deposits, balance payments, and shipment release decisions make correction harder.',
  answerSummary:
    'Before supplier approval, final payment, or pickup, EU-facing buyers should map the exact product, supplier, factory, upstream inputs, subcontracting risk, traceability files, purchase records, and importer responsibility. Huang Sourcing can organize China-side supplier and shipment evidence, but forced-labour determinations, legal compliance, customs action, market access, and remediation decisions remain with the EU economic operator, importer, distributor, marketplace, counsel, adviser, or competent authority.',
  primaryCta: {
    label: 'Check EU Supplier Evidence',
  },
  secondaryCta: {
    href: '#flr-checklist',
    label: 'See Evidence Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side EU Forced Labour Regulation supplier evidence check.

Product / SKU count:
Supplier English and Chinese name:
Factory / production location:
Materials or components of concern:
EU importer / marketplace / adviser instructions:
Order quantity / cartons:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#flr-checklist', label: 'Evidence checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#scope', label: 'Product scope' },
    { href: '#supplier-chain', label: 'Supplier chain' },
    { href: '#traceability', label: 'Traceability files' },
    { href: '#due-diligence', label: 'Due diligence' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Confirm whether the goods will be placed, made available, sold online to EU end users, or exported from the EU after December 14, 2027',
    'Map product name, SKU, material, production site, supplier, exporter, trading company, subcontractor, and upstream supplier records before payment',
    'Collect English names, Chinese names, business licenses, factory addresses, pickup locations, invoice issuers, and bank beneficiaries in one file',
    'Identify product parts, components, raw materials, processing steps, or regions where forced-labour risk may sit upstream from the sales supplier',
    'Ask the EU-side owner what evidence should block supplier approval, final payment, pickup, or listing release when supplier-chain facts are unclear',
    'Preserve supplier answers, screenshots, photos, cartons, labels, packing records, declarations, and traceability files by SKU and lot',
    'Separate voluntary due-diligence evidence from legal conclusions because the regulation bans products but does not create a new audit obligation',
    'Escalate when supplier identity, production site, subcontracting, upstream records, or traceability evidence cannot be reconciled before goods leave China',
  ],
  checkGroups: [
    {
      title: 'Product and EU exposure',
      items: [
        'Record SKU, product type, material, component set, EU destination, online listing target, importer, distributor, marketplace, and release date',
        'Separate visible product facts from legal scope decisions that belong with the EU economic operator and qualified advisers',
      ],
    },
    {
      title: 'Supplier and factory chain',
      items: [
        'Compare supplier English name, Chinese name, business license, exporter, invoice issuer, bank beneficiary, factory, and pickup address',
        'Document whether a trader, subcontractor, processor, packer, or upstream producer is involved in the goods or key components',
      ],
    },
    {
      title: 'Traceability and risk records',
      items: [
        'Collect bills of materials, material declarations, supplier answers, batch records, upstream names, correction photos, and shipment documents',
        'Flag vague certificates, recycled old files, missing Chinese names, late factory switches, and documents that do not tie to the order lot',
      ],
    },
    {
      title: 'Importer handoff',
      items: [
        'Name who owns EU forced-labour regulation readiness, voluntary due diligence, marketplace evidence, legal advice, and authority response',
        'Package gaps and residual risk in a decision-ready file before deposit, final payment, pickup, listing, or EU market release',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why this is a current 2026 China sourcing issue',
      paragraphs: [
        'The EU Forced Labour Regulation entered the preparation phase before enforcement. The Commission portal says the preparedness package and Single Portal launched on June 26, 2026, and the regulation becomes applicable on December 14, 2027. For sourcing teams, that timing matters because supplier files, factory identity, upstream inputs, and traceability habits need to be built into orders before the first enforcement cases arrive.',
        'The regulation is broad: it targets products made with forced labour and can affect imported goods, EU-made goods, and exports from the EU. A buyer waiting until goods are already packed, paid for, or listed may have less leverage to get factory names, upstream records, lot evidence, or corrective answers from the China-side supplier.',
      ],
      bullets: [
        'The Commission has already published preparation tools and guidelines',
        'EU enforcement starts on December 14, 2027, but sourcing evidence has to be collected earlier',
        'Supplier-chain uncertainty should become a payment and shipment-release question',
        'China-side evidence supports the responsible EU party but does not replace legal or authority decisions',
      ],
    },
    {
      id: 'scope',
      title: 'Start with product scope and EU market exposure',
      paragraphs: [
        'The regulation applies to products, not only to narrow regulated categories. Official scope guidance says products made in whole or in part with forced labour can be covered at any stage of extraction, harvest, production, manufacture, working, or processing in the supply chain. That is why buyers should look past the final seller and ask where materials, components, processing, and packing actually happen.',
        'EU exposure should also be named clearly. The same China order may be for an EU importer, an online seller targeting EU end users, a marketplace shipment, distributor inventory, or goods later exported from the EU. Huang Sourcing can help organize product and supplier facts, while the EU-side owner decides whether and how the regulation applies.',
      ],
      bullets: [
        'Build a SKU table with product, material, component, quantity, order lot, supplier, factory, destination, and EU-side owner',
        'Flag products with unclear raw materials, labour-intensive processing, opaque subcontracting, or supplier refusal to explain the chain',
        'Keep online listing and marketplace evidence separate from factory evidence',
        'Record who approved release when scope or EU market exposure is still under review',
      ],
    },
    {
      id: 'supplier-chain',
      title: 'Supplier identity must connect to the actual production chain',
      paragraphs: [
        'A clean sales contact is not enough. Buyers need to know whether the quoted supplier, invoice issuer, export agent, bank beneficiary, factory, subcontractor, processor, packer, and upstream material supplier are the same entity or different entities. In China sourcing, that difference often appears only after payment pressure, factory access limits, or pickup address changes.',
        'A practical evidence check compares names and roles instead of assuming them. The file should include English and Chinese names, business licenses where available, invoice drafts, payment beneficiary details, production address, pickup address, supplier explanations, and photo-backed evidence that ties the order to the claimed production site.',
      ],
      bullets: [
        'Ask for Chinese legal names, not only English trade names',
        'Preserve business-license, invoice, bank, platform, and communication records together',
        'Treat unexplained factory, exporter, or beneficiary switches as release blockers until reviewed',
        'Document subcontracting and outsourced processing before final payment or pickup',
      ],
    },
    {
      id: 'traceability',
      title: 'Traceability evidence should be boring, specific, and tied to the lot',
      paragraphs: [
        'Useful evidence is not a generic corporate social responsibility PDF. It connects the actual order to the supplier chain: purchase order, proforma invoice, commercial invoice draft, packing list, product photos, carton labels, production photos, bills of materials, material declarations, upstream supplier names, batch or lot records, and correction evidence when something changes.',
        'When those records do not match, the buyer should turn the mismatch into a decision. The options may be correction, extra supplier proof, specialist review, split shipment, delayed pickup, or written release by the responsible EU-side party. Hiding gaps in chat history creates a weak file for later market, authority, or marketplace questions.',
      ],
      bullets: [
        'Keep one evidence folder per supplier, factory, SKU, lot, and shipment',
        'Match photos, labels, cartons, invoices, packing lists, and material files to the same order',
        'Request upstream records early for flagged materials or opaque products',
        'Record unresolved gaps with the name of the person who approved release',
      ],
    },
    {
      id: 'due-diligence',
      title: 'Due diligence helps, but it is not the same as proof',
      paragraphs: [
        'The Commission explains that the Forced Labour Regulation does not create new audit or reporting obligations and does not impose a new sustainability due-diligence procedure. It does, however, allow authorities to ask companies for information during investigations, and the non-binding guidelines describe voluntary due-diligence practices that may help companies reduce risk.',
        'For overseas buyers, the practical lesson is to build an evidence trail without overselling what it proves. A China-side report can show what was checked, what matched, what changed, what the supplier refused, and what evidence is missing. It cannot certify absence of forced labour or decide how an EU authority will evaluate a case.',
      ],
      bullets: [
        'Use due-diligence files to show process, sources, gaps, and corrective actions',
        'Avoid claiming a supplier is cleared only because a certificate or self-declaration exists',
        'Escalate high-risk materials, regions, or supplier refusals to qualified EU-side advisers',
        'Review supplier-chain files again when production sites, materials, or subcontractors change',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'EU exposure is named',
      evidence:
        'Destination, importer, distributor, marketplace, online-listing target, release timing, and responsible EU-side owner are documented.',
      buyerDecision:
        'Proceed with evidence collection, ask the EU-side owner for scope review, or hold release until exposure is understood.',
    },
    {
      riskNode: 'Supplier chain is consistent',
      evidence:
        'English name, Chinese name, license, exporter, invoice issuer, bank beneficiary, factory, pickup address, and subcontractor role reconcile.',
      buyerDecision:
        'Approve ordinary release, request correction, or pause payment when company roles conflict.',
    },
    {
      riskNode: 'Traceability file ties to the lot',
      evidence:
        'Order, SKU, production site, material notes, upstream names, photos, labels, cartons, invoice, packing list, and declarations describe the same goods.',
      buyerDecision:
        'Release only if the responsible buyer accepts the file; escalate when generic certificates or old documents do not match the lot.',
    },
    {
      riskNode: 'Gaps have an owner',
      evidence:
        'The report lists missing records, supplier refusals, late changes, specialist questions, and the named person responsible for the EU decision.',
      buyerDecision:
        'Hold, correct, split, escalate, or release with written approval before goods leave China.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official European Commission Forced Labour Single Portal, Forced Labour Regulation overview, scope guidance, due-diligence guidance, factsheet, reporting channel, and Union Network source context current to July 3, 2026.',
    'Buyer-provided product list, supplier names, Chinese names, platform records, business licenses, purchase orders, invoices, packing lists, bills of materials, traceability files, and EU-side instructions.',
    'Physical product, carton, label, factory, pickup-location, material, correction, and shipment-record evidence observed or collected in China.',
    'Specialist guidance from the EU economic operator, importer, distributor, marketplace, customs broker, human-rights adviser, law firm, compliance adviser, certification body, or competent authority when conclusions exceed visible and document evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://single-market-economy.ec.europa.eu/single-market/goods/forced-labour-regulation_en',
      label: 'European Commission - Forced Labour Single Portal',
      note: 'Official portal noting the June 26, 2026 preparedness package and Single Portal launch, the December 14, 2027 enforcement date, business preparation tools, and guidance hub.',
    },
    {
      href: 'https://single-market-economy.ec.europa.eu/single-market/goods/forced-labour-regulation/what-forced-labour-regulation-and-how-does-it-work_en',
      label: 'European Commission - What is the Forced Labour Regulation?',
      note: 'Official overview explaining scope, companies covered, investigation steps, decisions, enforcement, and the relationship to due diligence.',
    },
    {
      href: 'https://eur-lex.europa.eu/eli/reg/2024/3015/oj/eng',
      label: 'EUR-Lex - Regulation (EU) 2024/3015',
      note: 'Official legal text for the EU regulation prohibiting products made with forced labour on the Union market.',
    },
    {
      href: 'https://single-market-economy.ec.europa.eu/document/download/a11fc6fb-3562-40ab-8378-800c15560497_en?filename=1.+Guidelines+on+the+scope+of+the+Forced+Labour+Regulation.pdf',
      label: 'European Commission - Scope guidance',
      note: 'Official guideline on product scope, all-product coverage, supply-chain stages, distance sales, and application from December 14, 2027.',
    },
    {
      href: 'https://single-market-economy.ec.europa.eu/document/download/1c1064b9-9ffe-4e47-93ef-fc2328f59ea8_en?filename=11.+Guidelines+for+companies+on+voluntary+due+diligence+on+forced+labour.pdf',
      label: 'European Commission - Voluntary due-diligence guidance',
      note: 'Official non-binding guidance describing voluntary due-diligence practices and their relationship to the regulation.',
    },
    {
      href: 'https://single-market-economy.ec.europa.eu/single-market/goods/forced-labour-regulation/union-network-against-forced-labour-products_en',
      label: 'European Commission - Union Network Against Forced Labour Products',
      note: 'Official page explaining coordination among competent authorities and the Commission for enforcement of the regulation.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Product list by SKU, model, material, component set, quantity, carton count, EU destination, marketplace or listing target, and shipment timeline',
    'Supplier English name, Chinese name, business license, platform profile, website, invoice issuer, exporter, bank beneficiary, and shipper',
    'Factory name, production address, pickup address, production photos, carton-location details, subcontractor notes, processor or packer details, and access instructions',
    'Purchase order, proforma invoice, commercial invoice draft, packing list draft, product photos, label photos, carton photos, and supplier chat records',
    'Bill of materials, material declarations, upstream supplier names, batch or lot records, traceability files, audit or due-diligence records, and correction evidence',
    'EU importer, distributor, marketplace, counsel, compliance adviser, or authority-response owner instructions for what should block deposit, final payment, pickup, listing, or market release',
  ],
  redFlags: [
    'Supplier cannot provide a Chinese legal name, business license, production address, or consistent invoice and bank details',
    'The seller claims to be the factory but pickup, carton, document, or production evidence points to another company',
    'A trading company, export agent, subcontractor, processor, or packer is involved but its role is not documented',
    'Supplier offers generic certificates or policy statements that do not tie to the exact SKU, lot, factory, or material chain',
    'Product photos, labels, packing list, invoice, material declarations, and carton records appear to describe different goods or lots',
    'High-risk materials, labour-intensive processing, or opaque upstream inputs are present but the supplier refuses traceability records',
    'Factory, material, production site, invoice wording, or shipping party changes after the buyer has prepared the evidence file',
    'No EU-side owner has accepted responsibility for forced-labour regulation readiness, marketplace evidence, legal review, or authority response',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible supplier, factory, material, document, carton, and shipment evidence against buyer-provided references in China',
    'Huang Sourcing does not determine EU Forced Labour Regulation compliance, certify absence of forced labour, act as an EU economic operator, or provide legal advice',
    'A China-side evidence check cannot prove full supply-chain traceability, forced-labour absence, authority acceptance, market access, customs release, or marketplace approval',
    'The EU importer, distributor, marketplace, counsel, compliance adviser, human-rights specialist, customs broker, or responsible economic operator remains accountable for regulated decisions',
    'Supplier obstruction, missing upstream records, subcontracting, mixed lots, translated names, sealed cartons, or late supplier changes can limit report confidence',
    'EU guidance, authority practice, risk databases, submission channels, penalties, marketplace requirements, and enforcement priorities can change before and after December 14, 2027',
  ],
  relatedLinks: [
    {
      href: uflpaChinaSupplierCheckArticleHref,
      label: 'UFLPA China supplier evidence guide',
      note: 'Use this when the same supplier chain also affects U.S. forced-labor import risk.',
    },
    {
      href: euDeforestationRegulationChinaArticleHref,
      label: 'EU Deforestation Regulation China sourcing guide',
      note: 'Use this when product materials also require EU deforestation traceability and supplier evidence.',
    },
    {
      href: euCbamChinaSourcingArticleHref,
      label: 'EU CBAM supplier data check',
      note: 'Use this when EU-bound goods include CBAM-risk iron, steel, aluminium, cement, fertiliser, hydrogen, or electricity exposure.',
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
      href: chinaFactorySubcontractingRiskArticleHref,
      label: 'China factory subcontracting risk checklist',
      note: 'Use this when the supplier may not be the actual producer behind the order.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Organize evidence into a report that supports payment, correction, or pickup decisions.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Use when visible product identity, labels, and cartons also need to match the evidence file.',
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
      question: 'When does the EU Forced Labour Regulation apply?',
      answer:
        'The regulation becomes applicable and enforcement begins on December 14, 2027. The Commission launched the preparedness package and Single Portal on June 26, 2026, so buyers should prepare supplier-chain evidence before enforcement starts.',
    },
    {
      question: 'Does the regulation apply to China-sourced products?',
      answer:
        'It can. The regulation applies to products made with forced labour regardless of origin and covers products placed or made available on the EU market or exported from the EU. The EU-side economic operator should decide scope with qualified support.',
    },
    {
      question: 'Does the regulation create a new audit obligation?',
      answer:
        'The Commission says the regulation does not introduce audit or reporting obligations and does not create additional due-diligence obligations. Voluntary due-diligence records can still help companies reduce risk and respond to questions.',
    },
    {
      question: 'What should buyers check before paying a China supplier?',
      answer:
        'Check supplier identity, Chinese legal name, factory role, subcontracting, materials, upstream names, traceability records, invoice and bank consistency, carton evidence, and who owns the EU-side release decision.',
    },
    {
      question: 'Can Huang Sourcing certify forced-labour compliance?',
      answer:
        'No. Huang Sourcing can collect and compare China-side supplier, factory, material, document, carton, and shipment evidence. Forced-labour determinations, legal compliance, customs action, and market-access decisions require responsible EU-side parties and qualified specialists.',
    },
    {
      question: 'Should buyers wait until 2027 to request evidence?',
      answer:
        'No. Supplier-chain evidence is easier to request before deposit, before mass production, before final payment, and before pickup. Waiting until goods are packed or already moving reduces leverage and makes gaps harder to correct.',
    },
  ] satisfies FaqItem[],
}

export function makeEuForcedLabourRegulationChinaArticleMetadata(): Metadata {
  const article = euForcedLabourRegulationChinaArticle

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

export function makeEuForcedLabourRegulationChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(euForcedLabourRegulationChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'EU Forced Labour Regulation China supplier evidence checklist',
      itemListElement: euForcedLabourRegulationChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(euForcedLabourRegulationChinaArticle.faqs),
  ]
}
