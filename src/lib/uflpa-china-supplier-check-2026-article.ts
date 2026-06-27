import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  alibabaSupplierVerificationPaymentArticleHref,
  buyerSideInspectionReportArticleHref,
  chinaFactorySubcontractingRiskArticleHref,
  chinaSamplesUsCustomsArticleHref,
  factoryVsTradingCompanySignalsArticleHref,
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

export const uflpaChinaSupplierCheckArticle = {
  href: uflpaChinaSupplierCheckArticleHref,
  title: 'UFLPA China Supplier Check: 2026 Forced Labor Evidence Guide',
  metaTitle: 'UFLPA China Supplier Check: 2026 Evidence Checklist',
  metaDescription:
    'UFLPA China supplier check for 2026: practical supplier identity, production site, material origin, Entity List, and importer handoff evidence before U.S.-bound goods ship.',
  publishedDate: 'June 27, 2026',
  publishedDateIso: '2026-06-27T09:00:00-04:00',
  h1: 'UFLPA China Supplier Check Before U.S. Shipment in 2026',
  eyebrow: 'UFLPA - supplier chain - shipment release evidence',
  image: {
    alt: 'China-side supplier file, carton labels, material origin notes, and shipment evidence reviewed for UFLPA risk before export',
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
    'CBP published consolidated Forced Labor Enforcement Operational Guidance for Importers in June 2026, expanding the practical importer view beyond older UFLPA-only guidance. For buyers sourcing from China, the operational problem is simple: if supplier, factory, material, and document evidence is still unclear when cartons leave China, it becomes harder to answer U.S. importer, broker, or CBP questions later.',
  answerSummary:
    'Before deposit, final payment, or pickup, buyers should map the supplier chain behind the exact goods being shipped: legal supplier name, Chinese name, production site, product materials, upstream suppliers, invoice trail, packing records, Entity List screening, high-priority sector exposure, and importer handoff. Huang Sourcing can organize and document visible China-side evidence, but UFLPA compliance, forced-labor determinations, customs decisions, and legal conclusions remain with the importer and qualified specialists.',
  primaryCta: {
    label: 'Check Supplier Chain Evidence',
  },
  secondaryCta: {
    href: '#uflpa-checklist',
    label: 'See UFLPA Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side UFLPA supplier chain evidence check before shipment.

Product / SKU count:
Supplier name and Chinese name:
Factory / production location:
Materials or components of concern:
U.S. importer / broker instructions:
Order quantity / cartons:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#uflpa-checklist', label: 'UFLPA checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#check-scope', label: 'China-side scope' },
    { href: '#entity-list', label: 'Entity List screening' },
    { href: '#materials', label: 'Materials and sectors' },
    { href: '#document-trail', label: 'Document trail' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Map the legal supplier, Chinese name, trade name, bank account, invoice issuer, shipper, and factory location before payment or pickup',
    'Confirm who actually makes the goods, where production happens, and whether a trader, subcontractor, or upstream plant is involved',
    'Screen supplier names, Chinese names, affiliates, factories, and known upstream suppliers against the current UFLPA Entity List and buyer risk list',
    'Treat a clean name search as only one data point; absence from a list does not prove the supply chain is safe or admissible',
    'Identify high-priority materials and sectors such as apparel, cotton, PVC, silica or polysilicon, tomatoes, aluminum, seafood, steel, copper, lithium, caustic soda, and red dates',
    'Tie purchase orders, commercial invoices, packing lists, bills of materials, material declarations, production photos, and carton evidence to the same SKU and lot',
    'Ask the U.S. importer or customs broker which forced-labor, UFLPA, WRO, CAATSA, and admissibility evidence should block shipment release',
    'Hold release when supplier identity, production site, material origin, subcontracting, or upstream documentation cannot be reconciled before goods leave China',
  ],
  checkGroups: [
    {
      title: 'Supplier identity',
      items: [
        'Compare English name, Chinese name, business license, platform profile, invoice issuer, payment account, shipper, and contact details',
        'Flag unexplained switches between trading company, manufacturer, export agent, bank beneficiary, and company chop before deposit or final payment',
      ],
    },
    {
      title: 'Production site',
      items: [
        'Record claimed factory address, production site photos, pickup address, carton location, supplier role, and any subcontractor explanation',
        'Separate a factory visit or visible evidence check from a legal conclusion about who controls the supply chain',
      ],
    },
    {
      title: 'Materials and upstream chain',
      items: [
        'List key materials, components, fabric, cotton, minerals, battery materials, packaging, and upstream supplier names when available',
        'Connect high-priority sector exposure to the importer, broker, lab, counsel, or responsible compliance owner before release',
      ],
    },
    {
      title: 'Importer handoff',
      items: [
        'Package final evidence by SKU, lot, supplier, factory, material, carton, and document source for the U.S. importer or broker',
        'Name who owns UFLPA compliance, WRO checks, CAATSA review, customs response, and any detention or exclusion answer',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why UFLPA supplier evidence is a current 2026 sourcing issue',
      paragraphs: [
        'CBP released its Forced Labor Enforcement Operational Guidance for Importers in June 2026. The guidance consolidates enforcement context for 19 U.S.C. 1307, UFLPA, CAATSA, WROs, and Findings, and CBP encourages importers to conduct supplier due diligence before goods are detained.',
        'That makes supplier-chain evidence a shipment-readiness issue, not only a legal memo. The buyer may know the sales contact and Alibaba profile, but the importer may need a clearer chain connecting the actual goods, production site, supplier names, material inputs, and upstream records to the shipment.',
      ],
      bullets: [
        'Supplier identity should be checked before money and leverage leave the buyer',
        'Production-site and material-origin questions are easier to document while goods are still in China',
        'Entity List, WRO, and high-priority sector risk checks should be tied to exact supplier names and SKUs',
        'China-side evidence supports importer due diligence but does not decide admissibility',
      ],
    },
    {
      id: 'check-scope',
      title: 'What can a China-side UFLPA supplier check actually do?',
      paragraphs: [
        'A practical check starts with what can be seen, requested, compared, and preserved in China. That includes supplier names, Chinese business-license details, factory or pickup address, production photos, carton labels, product and material declarations, purchase and invoice records, packing lists, and supplier answers about upstream sources.',
        'The purpose is to reduce avoidable confusion before shipment release. If the supplier profile says one company, the invoice says another, the factory address is unclear, or the material declaration cannot be tied to the finished goods, the buyer should know before final payment or pickup.',
      ],
      bullets: [
        'Check names in English and Chinese because Entity List and supplier-chain records may not use the same spelling',
        'Capture evidence at SKU and lot level, not only supplier level',
        'Preserve screenshots, photos, timestamps, invoices, and supplier answers in one exportable folder',
        'Escalate legal, customs, and forced-labor conclusions to qualified specialists',
      ],
    },
    {
      id: 'entity-list',
      title: 'How should buyers use UFLPA Entity List screening?',
      paragraphs: [
        'The DHS UFLPA Entity List is a key screening source, but it is not the whole due-diligence file. Buyers should screen supplier names, Chinese names, affiliates, factories, upstream suppliers, and product-related entities when those names are known. The same search should also note uncertainty, spelling variations, and missing Chinese names.',
        'A clean search result is not clearance. CBP explains that UFLPA applies to goods mined, produced, or manufactured wholly or in part in the XUAR, or by an entity on the UFLPA Entity List. A buyer still needs supply-chain evidence when the product, material, sector, supplier location, or upstream chain creates risk.',
      ],
      bullets: [
        'Screen exact legal names, alternate names, Chinese names, and known related-party names',
        'Keep the date of screening and the official source used',
        'Do not treat a supplier self-declaration as enough when material or production-site evidence is inconsistent',
        'Use importer or broker instructions for any product-specific screening beyond public pages',
      ],
    },
    {
      id: 'materials',
      title: 'Which materials and sectors need extra attention?',
      paragraphs: [
        'DHS strategy updates and UFLPA resources identify high-priority sectors that deserve closer attention. Buyers should look beyond the finished product label and ask what materials or subassemblies create forced-labor exposure in the chain.',
        'For China sourcing, that can matter even when the finished product is not obviously regulated. A textile bag may involve cotton, a solar accessory may involve silica-based inputs, an electronics product may involve aluminum, copper, or lithium, and a packaged food or household product may have upstream material questions that the sales supplier cannot answer alone.',
      ],
      bullets: [
        'Ask for bill-of-materials and material supplier context before production, not after detention',
        'Connect material declarations to actual production lots and packed goods',
        'Separate factory identity evidence from upstream material evidence; both may be needed',
        'Have the importer decide when a high-priority sector requires specialist review before shipment',
      ],
    },
    {
      id: 'document-trail',
      title: 'What document trail should be ready before pickup?',
      paragraphs: [
        'The best evidence package is boring and consistent. Purchase order, invoice, packing list, product photos, carton labels, production address, business license, material declarations, upstream invoices or declarations, and buyer-broker instructions should all point to the same supplier chain and shipment.',
        'When the supplier refuses evidence, gives only generic certificates, or changes names and addresses late, the buyer should not bury the issue in chat history. Put the mismatch in a release decision: proceed with specialist approval, require correction, split goods, delay pickup, or stop before payment.',
      ],
      bullets: [
        'Keep supplier screenshots and official documents together with translation notes when needed',
        'Match product photos and carton marks to invoice, packing list, SKU, and lot records',
        'Request upstream evidence early for materials the importer has flagged',
        'Document who approved shipment despite any remaining evidence gap',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Supplier identity is consistent',
      evidence:
        'English name, Chinese name, license, platform profile, invoice issuer, bank beneficiary, shipper, and contact details can be reconciled.',
      buyerDecision:
        'Proceed with ordinary supplier evidence, request explanation, or pause payment when names and roles conflict.',
    },
    {
      riskNode: 'Production site is clear',
      evidence:
        'Factory address, pickup location, production photos, carton location, supplier role, and subcontractor status are documented for the order.',
      buyerDecision:
        'Release only when the buyer and importer understand who made the goods and where production occurred.',
    },
    {
      riskNode: 'Material and upstream risk is handled',
      evidence:
        'High-priority materials, supplier declarations, upstream records, bill-of-materials notes, and buyer-broker instructions are tied to the SKU.',
      buyerDecision:
        'Escalate to customs, legal, lab, or compliance partners before shipment when material origin evidence is incomplete.',
    },
    {
      riskNode: 'Importer handoff is ready',
      evidence:
        'Final folder includes screening date, official source links, supplier-chain notes, photos, document trail, gaps, and named response owner.',
      buyerDecision:
        'Approve pickup only when the importer or broker has the evidence package needed for its own due-diligence decision.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official CBP forced-labor enforcement guidance, CBP UFLPA page, DHS UFLPA Entity List, DHS UFLPA strategy updates, and CBP forced-labor enforcement context current to June 2026.',
    'Buyer-provided supplier names, Chinese names, business licenses, platform records, order files, purchase orders, invoices, packing lists, bills of materials, and broker or importer instructions.',
    'Physical product, carton, label, factory, pickup-location, document, correction, and shipment-record evidence observed or collected in China.',
    'Specialist guidance from the U.S. importer, licensed customs broker, trade counsel, forced-labor compliance adviser, laboratory, certification body, marketplace, or enforcement-response owner when conclusions exceed visual and document evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://www.cbp.gov/document/guides/cbp-forced-labor-enforcement-operational-guidance-importers',
      label: 'CBP - Forced Labor Enforcement Operational Guidance for Importers',
      note: 'Official June 2026 guidance page describing consolidated enforcement context, process maps, supply-chain documentation, and importer due diligence before detention.',
    },
    {
      href: 'https://www.cbp.gov/sites/default/files/2026-06/fld_importer_guidance_final_06092026_0.pdf',
      label: 'CBP - Forced Labor Enforcement Operational Guidance PDF',
      note: 'Official PDF attachment dated June 12, 2026 for importer forced-labor enforcement guidance.',
    },
    {
      href: 'https://www.cbp.gov/trade/forced-labor/UFLPA',
      label: 'CBP - Uyghur Forced Labor Prevention Act',
      note: 'Official CBP UFLPA page explaining the rebuttable presumption and importer due-diligence expectations.',
    },
    {
      href: 'https://www.dhs.gov/uflpa-entity-list',
      label: 'DHS - UFLPA Entity List',
      note: 'Official DHS list source for entities named under UFLPA list categories.',
    },
    {
      href: 'https://www.dhs.gov/2025-updates-strategy-prevent-importation-goods-mined-produced-or-manufactured-forced-labor-peoples',
      label: 'DHS - 2025 UFLPA Strategy Updates',
      note: 'Official DHS strategy update identifying high-priority sectors and Entity List expansion context relevant to supplier-chain review.',
    },
    {
      href: 'https://www.cbp.gov/trade/forced-labor/enforcement',
      label: 'CBP - Forced Labor Enforcement',
      note: 'Official CBP enforcement page covering forced-labor authorities, WROs, Findings, recent actions, and enforcement statistics.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Supplier English name, Chinese name, business license, platform profile, website, contact details, invoice issuer, bank beneficiary, and shipper',
    'Factory name, claimed production address, pickup address, production photos, carton-location details, subcontractor notes, and access instructions',
    'SKU list, product photos, order quantity, carton count, packing list, purchase order, commercial invoice, proforma invoice, and payment records',
    'Bill of materials, material declarations, fabric or component supplier names, upstream invoices or declarations, and high-priority sector notes',
    'Importer, broker, customs counsel, marketplace, or compliance-team instructions for UFLPA, WRO, CAATSA, Entity List, and admissibility review',
    'Payment deadline, pickup deadline, and written rules for which supplier-chain issues should block deposit, final payment, or shipment release',
  ],
  redFlags: [
    'Supplier cannot provide the Chinese legal name, business license, production address, or consistent invoice and bank details',
    'The sales supplier says it is a factory but pickup, carton, document, or production evidence points to another company',
    'Business license, platform profile, invoice issuer, bank beneficiary, export agent, and shipper names do not reconcile',
    'Supplier refuses to identify material suppliers, factory location, subcontractors, or upstream sources for a flagged product',
    'High-priority materials such as cotton, PVC, silica, aluminum, seafood, steel, copper, lithium, or caustic soda are present but undocumented',
    'Entity List screening is impossible because names are missing, translated inconsistently, or supplied only as vague English trade names',
    'Product photos, carton marks, invoice, packing list, and material declarations appear to describe different goods or lots',
    'No importer, broker, or compliance owner has accepted responsibility for UFLPA and forced-labor due-diligence decisions before shipment',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible supplier, factory, material, document, carton, and shipment evidence against buyer-provided references in China',
    'Huang Sourcing does not determine UFLPA compliance, certify absence of forced labor, act as a U.S. importer, file customs responses, or provide legal advice',
    'A China-side evidence check cannot prove full supply-chain traceability, forced-labor absence, admissibility, customs release, Entity List completeness, or WRO avoidance',
    'The U.S. importer, licensed customs broker, trade counsel, compliance adviser, marketplace, or responsible party remains accountable for regulated decisions',
    'Supplier obstruction, missing upstream records, subcontracting, mixed lots, translated names, sealed cartons, or late supplier changes can limit report confidence',
    'UFLPA Entity List entries, WROs, Findings, CAATSA enforcement, CBP guidance, DHS strategy updates, and broker requirements can change, so time-sensitive instructions should be reconfirmed before shipment release',
  ],
  relatedLinks: [
    {
      href: supplierVerificationChecklistHref,
      label: 'Supplier verification China checklist',
      note: 'Start here when the buyer needs basic supplier, company, quote, and payment-risk signals before deposit.',
    },
    {
      href: supplierVerificationChinaLimitsArticleHref,
      label: 'Supplier verification China limits',
      note: 'Use this to separate visible supplier evidence from legal, customs, compliance, and future-performance guarantees.',
    },
    {
      href: supplierVerificationVsFactoryAuditArticleHref,
      label: 'Supplier verification vs factory audit',
      note: 'Compare a focused supplier-chain check with a fuller onsite audit or specialist due-diligence project.',
    },
    {
      href: chinaFactorySubcontractingRiskArticleHref,
      label: 'China factory subcontracting risk checklist',
      note: 'Use this when the supplier may not be the actual producer behind the order.',
    },
    {
      href: alibabaSupplierVerificationPaymentArticleHref,
      label: 'Alibaba supplier verification before payment',
      note: 'Review Alibaba profile, company, invoice, and payment signals before supplier funds move.',
    },
    {
      href: factoryVsTradingCompanySignalsArticleHref,
      label: 'Factory vs trading company practical signals',
      note: 'Check whether the seller is a factory, trader, exporter, or unclear middleman.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Organize the final supplier-chain evidence into a decision-ready report for payment or pickup.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before China inspection',
      note: 'Prepare names, order files, photos, labels, materials, and release rules before the onsite or desk check.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Use when labels, carton marks, and product identity also need to match the release file.',
    },
    {
      href: chinaSamplesUsCustomsArticleHref,
      label: 'Shipping China samples to the U.S.',
      note: 'Use this when early samples need separate customs planning and importer-broker instructions.',
    },
    {
      href: huangSourcingCheckScopeArticleHref,
      label: 'Huang Sourcing check scope',
      note: 'Confirm which evidence questions fit a China-side check and which require legal, customs, or compliance specialists.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What is a UFLPA China supplier check?',
      answer:
        'It is a practical evidence review that maps supplier identity, production site, materials, upstream names, Entity List screening, order documents, and importer handoff before China-sourced goods ship to the United States. It supports due diligence but does not certify compliance.',
    },
    {
      question: 'Does a clean UFLPA Entity List search mean the supplier is safe?',
      answer:
        'No. Entity List screening is only one data point. UFLPA can also apply to goods mined, produced, or manufactured wholly or in part in the XUAR, and other forced-labor enforcement tools may apply. Importers should use qualified customs and legal support for conclusions.',
    },
    {
      question: 'When should buyers check UFLPA supplier-chain evidence?',
      answer:
        'Check early when the product, material, supplier, or U.S. importer has a forced-labor risk flag. At minimum, resolve supplier identity, production site, material origin, and importer handoff before final payment or forwarder pickup.',
    },
    {
      question: 'Can Huang Sourcing prove a supply chain is free of forced labor?',
      answer:
        'No. Huang Sourcing can collect and compare China-side supplier, factory, material, document, carton, and shipment evidence. Forced-labor absence, UFLPA compliance, customs admissibility, and legal sufficiency require qualified responsible parties.',
    },
    {
      question: 'Which products need extra UFLPA attention?',
      answer:
        'Products involving high-priority sectors or materials deserve extra attention, including apparel, cotton, PVC, silica-based products, tomatoes, aluminum, seafood, steel, copper, lithium, caustic soda, red dates, and any product flagged by the importer or broker.',
    },
    {
      question: 'What should block shipment release?',
      answer:
        'Block or escalate release when supplier names conflict, the factory is unclear, material origin cannot be traced for a flagged product, upstream supplier names are missing, the importer has no response owner, or the buyer lacks specialist approval for remaining evidence gaps.',
    },
  ] satisfies FaqItem[],
}

export function makeUflpaChinaSupplierCheckArticleMetadata(): Metadata {
  const article = uflpaChinaSupplierCheckArticle

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

export function makeUflpaChinaSupplierCheckArticleJsonLd() {
  return [
    makeArticleJsonLd(uflpaChinaSupplierCheckArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'UFLPA China supplier evidence checklist',
      itemListElement: uflpaChinaSupplierCheckArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(uflpaChinaSupplierCheckArticle.faqs),
  ]
}
