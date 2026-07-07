import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  chinaSection301TariffCheckArticleHref,
  uflpaChinaSupplierCheckArticleHref,
  usCustomsEnforcementChinaImportsArticleHref,
  usDeMinimisSuspensionChinaArticleHref,
  usPostalInformalEntryChinaMailShipmentsArticleHref,
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
  riskNode: string
  whatToConfirm: string
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

export const usCustomsEnforcementChinaImportsArticle = {
  href: usCustomsEnforcementChinaImportsArticleHref,
  title: 'U.S. Customs Enforcement for China Imports in 2026',
  metaTitle: 'U.S. Customs Enforcement 2026: China Import Checklist',
  metaDescription:
    'U.S. customs enforcement 2026 China import checklist: IOR readiness, supplier identity, product specs, origin, valuation, broker handoff, and shipment evidence.',
  publishedDate: 'July 7, 2026',
  publishedDateIso: '2026-07-07T09:00:00-04:00',
  h1: 'U.S. Customs Enforcement in 2026: What China Importers Should Check Before Shipment',
  eyebrow: 'U.S. customs enforcement - China imports - IOR evidence',
  image: {
    alt: 'China supplier documents, product records, customs notes, and shipment evidence reviewed before U.S. import release',
    height: 900,
    src: '/images/china-section-301-tariff-check-2026.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/china-section-301-tariff-check-2026.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/china-section-301-tariff-check-2026-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/china-section-301-tariff-check-2026-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'On June 3, 2026, the White House issued Executive Order 14411, Strengthening Customs Enforcement. The order directs DHS and CBP to tighten importer-of-record rules, foreign IOR treatment, bond and asset expectations, disclosures, certification requirements, broker accountability, forced-labor enforcement, valuation enforcement, origin enforcement, and penalties. The Federal Register published the order on June 10, 2026.',
  answerSummary:
    'For buyers sourcing from China, the practical risk starts before the goods leave the supplier. Before deposit, balance payment, pickup, or export handoff, organize the supplier identity, product identifiers, manufacturing facts, origin facts, valuation support, invoice wording, packing records, broker instructions, and IOR responsibility. Huang Sourcing can help check whether the China-side evidence is coherent, but importer eligibility, entry filing, bond requirements, customs classification, valuation, penalties, and legal compliance remain with the importer, broker, customs adviser, or counsel.',
  primaryCta: {
    label: 'Check Customs Evidence Before Shipment',
  },
  secondaryCta: {
    href: '#customs-enforcement-checklist',
    label: 'See Evidence Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side U.S. customs enforcement evidence check before shipment.

Product / SKU count:
Supplier name and location:
Importer of record / broker:
Origin or valuation concern:
Invoice / packing list status:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#customs-enforcement-checklist', label: 'Evidence checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#ior-readiness', label: 'IOR readiness' },
    { href: '#supply-chain-data', label: 'Supply chain data' },
    { href: '#origin-valuation', label: 'Origin and valuation' },
    { href: '#broker-handoff', label: 'Broker handoff' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Name the intended importer of record and confirm with the broker whether the shipment uses a U.S. IOR or foreign IOR structure',
    'Collect the product identifiers the broker may need: model or style number, SKU, composition, grade, size, function, and key specifications',
    'Keep supplier, manufacturer, shipper, invoice company, payment beneficiary, pickup location, and carton evidence consistent or explain the gaps',
    'Separate country-of-origin facts from export route, transshipment route, Hong Kong office, trading-company role, or forwarder location',
    'Prepare valuation support before shipment: quote, proforma invoice, final invoice, payment terms, assists, tooling, discounts, royalties, and freight terms',
    'Ask the broker which documents and foreign export records should be retained before the goods leave China',
    'Treat forced labor, misclassification, undervaluation, and illegal transshipment as high-risk enforcement themes under the order',
    'Pause pickup or final payment when the product identity, origin story, valuation, or IOR handoff does not match the shipment evidence',
  ],
  checkGroups: [
    {
      title: 'IOR and broker readiness',
      items: [
        'Importer of record name, broker contact, bond or account expectations, formal versus informal entry plan, and who can answer CBP questions after entry',
        'Whether a foreign IOR structure, marketplace importer structure, or forwarder-arranged entry creates extra documentation or timing risk',
      ],
    },
    {
      title: 'Supplier and manufacturer identity',
      items: [
        'English and Chinese company names, factory address, trading-company role, payment beneficiary, invoice issuer, shipper, and pickup location',
        'Visible evidence connecting the supplier record to the actual production run, cartons, labels, product files, and shipment paperwork',
      ],
    },
    {
      title: 'Product, origin, and valuation data',
      items: [
        'Model or style number, material composition, function, grade, size, SKU variants, accessories, carton count, and product photos',
        'Origin facts, production method, component-source questions, price support, tooling or assist records, discounts, royalties, and invoice wording',
      ],
    },
    {
      title: 'Shipment document trail',
      items: [
        'Commercial invoice, packing list, purchase order, proforma invoice, labels, carton marks, export declaration references, and broker instructions',
        'Correction evidence after supplier document changes, repacking, relabeling, split shipments, manufacturer updates, or route changes',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why the June 2026 customs order matters before China shipment',
      paragraphs: [
        'Executive Order 14411 is current because it was signed on June 3, 2026 and published in the Federal Register on June 10, 2026. It gives DHS and CBP 90-day and 180-day action windows for several reforms, including importer eligibility, enhanced vetting, disclosures, certifications, mitigation standards, seizure procedures, and transparency measures.',
        'The order is not a product-specific China sourcing rule by itself. It is a customs enforcement direction. That distinction matters: the buyer still needs a broker, customs adviser, or counsel for legal determinations, but the evidence that supports those determinations often sits with the China supplier before shipment.',
      ],
      bullets: [
        'The order highlights importer-of-record accountability, forced labor, origin marking, product safety, revenue collection, and intellectual property',
        'It names undervaluation, withheld IOR or goods information, and duty-evasion arrangements as examples of noncompliance',
        'It directs higher scrutiny around foreign IORs, informal entry, bonds, disclosures, supply-chain details, broker conduct, and penalties',
        'China-side evidence should be organized before goods leave the supplier, when corrections are still practical',
      ],
    },
    {
      id: 'ior-readiness',
      title: 'Start with importer-of-record readiness',
      paragraphs: [
        'The order directs DHS and CBP to revise importer eligibility rules and policies. It refers to minimum tangible domestic assets, bonding, or both; importer designation and reporting; additional data and identification information; and a CBP-defined good-standing requirement.',
        'For a buyer sourcing from China, the operational question is simple: who is the importer of record, and can that party support the entry? If the answer depends on a foreign seller, marketplace arrangement, forwarder shortcut, or broker workaround, the buyer should clarify that before payment or pickup.',
      ],
      bullets: [
        'Confirm whether the entry is planned under a U.S. IOR or foreign IOR',
        'Ask the broker whether formal entry, informal entry, bond, CTPAT, or account standing issues affect the shipment',
        'Keep importer name, tax details, broker instructions, invoice party, consignee, and payment path aligned',
        'Do not rely on the China supplier to choose the IOR structure for a U.S. shipment',
      ],
    },
    {
      id: 'supply-chain-data',
      title: 'Expect more pressure on supply-chain data',
      paragraphs: [
        'The order directs DHS to establish heightened import disclosure and certification requirements. It specifically references details such as foreign tax and global business identifiers, manufacturer product identifiers like model or style number, and key specifications such as composition, grade, or size.',
        'Those details are usually available before shipment if the buyer asks early. Waiting until the broker requests them can create a rushed document trail, especially when a trader, export agent, or supplier group uses several company names across quotes, invoices, labels, and export documents.',
      ],
      bullets: [
        'Capture product identifiers and specifications while the supplier can still verify them against packed goods',
        'Document manufacturer, supplier, shipper, exporter, and payment-beneficiary relationships',
        'Keep photos of products, labels, carton marks, and packing records tied to SKU and invoice lines',
        'Retain the documents or data the foreign exporter used for export from China when the broker requests them',
      ],
    },
    {
      id: 'origin-valuation',
      title: 'Origin and valuation gaps should be fixed before pickup',
      paragraphs: [
        'The order tells DHS and the Attorney General to prioritize import enforcement involving forced labor, misclassification, undervaluation, and illegal transshipment. These themes are common pain points in China sourcing because supplier sales documents can hide the real manufacturer, origin facts, product scope, or pricing structure.',
        'A China-side evidence check does not decide customs valuation or origin. It can, however, reveal whether the invoice description matches the product, whether the factory and shipper story is coherent, whether the carton evidence supports the claimed goods, and whether price or route changes need broker review before release.',
      ],
      bullets: [
        'Compare the quote, purchase order, proforma invoice, commercial invoice, packing list, product page, and carton marks',
        'Ask about component origin, production location, subcontracting, repacking, relabeling, and route changes before final documents are issued',
        'Keep price support for discounts, tooling, molds, assists, samples, royalties, rebates, and bundled charges',
        'Flag any pressure to understate value, change descriptions, swap shipper names, or route goods to disguise origin',
      ],
    },
    {
      id: 'broker-handoff',
      title: 'Make the broker handoff a pre-shipment step',
      paragraphs: [
        'The order increases the practical importance of broker due diligence. It directs enforcement measures that include penalties for brokers who repeatedly represent noncompliant clients or fail to cooperate with information requests, while also increasing audits and liquidated-damages enforcement.',
        'That means the broker handoff should happen before the shipment is moving. The buyer should send a clean packet: product identity, supplier identity, manufacturer details, invoice and packing records, origin notes, valuation support, and any sensitive issues that should be reviewed before entry.',
      ],
      bullets: [
        'Ask the broker what must be confirmed before pickup rather than after vessel departure',
        'Use the broker-approved product description and documentation plan across supplier paperwork',
        'Keep correction records when the supplier changes invoice descriptions, manufacturer names, carton counts, or routing',
        'Treat missing evidence as a release decision, not an administrative detail',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'IOR structure is unclear',
      whatToConfirm:
        'Who will act as importer of record, whether the structure is U.S. IOR or foreign IOR, and whether the broker has bond, account, and entry-path instructions',
      buyerDecision:
        'Hold shipment release until the importer and broker confirm the entry structure and documentation owner.',
    },
    {
      riskNode: 'Supplier identity is fragmented',
      whatToConfirm:
        'Whether the quote, invoice issuer, payment beneficiary, manufacturer, shipper, pickup location, labels, and carton marks point to the same coherent supply chain',
      buyerDecision:
        'Request explanation, corrected paperwork, factory evidence, or specialist review before final payment.',
    },
    {
      riskNode: 'Product data is not broker-ready',
      whatToConfirm:
        'Model or style number, SKU, composition, grade, size, function, product photos, packaging, and invoice wording match the goods in cartons',
      buyerDecision:
        'Approve the document set, request correction photos, split affected SKUs, or delay pickup.',
    },
    {
      riskNode: 'Origin or valuation risk appears',
      whatToConfirm:
        'Production place, component facts, route, price basis, discounts, assists, royalties, and invoice value support do not conflict with broker instructions',
      buyerDecision:
        'Escalate to the broker or customs adviser before export, not after the shipment is already in transit.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official White House, Federal Register, and CBP source context current to July 7, 2026.',
    'Buyer-provided supplier records, product list, purchase order, proforma invoice, commercial invoice, packing list, broker instructions, and importer-of-record details.',
    'China-side product photos, label files, carton marks, packing evidence, pickup records, manufacturer information, and supplier correction evidence.',
    'Specialist guidance from the importer, licensed customs broker, customs adviser, product compliance adviser, or legal counsel when legal determinations exceed visible evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://www.federalregister.gov/documents/2026/06/10/2026-11595/strengthening-customs-enforcement',
      label: 'Federal Register - Executive Order 14411',
      note: 'Official Federal Register publication for Strengthening Customs Enforcement, including importer-of-record, disclosure, enforcement, penalty, seizure, and transparency directions.',
    },
    {
      href: 'https://www.whitehouse.gov/presidential-actions/2026/06/strengthening-customs-enforcement/',
      label: 'White House - Strengthening Customs Enforcement',
      note: 'Presidential action signed June 3, 2026 directing DHS and CBP to strengthen customs enforcement and importer accountability.',
    },
    {
      href: 'https://www.whitehouse.gov/fact-sheets/2026/06/fact-sheet-president-donald-j-trump-strengthens-customs-enforcement/',
      label: 'White House fact sheet - Customs enforcement',
      note: 'Fact sheet summarizing IOR requirements, foreign IOR treatment, disclosure and certification requirements, penalties, seizure procedures, and standard rulemaking context.',
    },
    {
      href: 'https://www.cbp.gov/trade/strengthening-customs-enforcement',
      label: 'CBP - Strengthening Customs Enforcement',
      note: 'CBP trade page for the enforcement initiative, related resources, Federal Register references, fact sheet links, and CSMS messages.',
    },
    {
      href: 'https://www.cbp.gov/trade/basic-import-export/importer-exporter-tips',
      label: 'CBP - Tips for New Importers and Exporters',
      note: 'CBP importer guidance reminding businesses that importer-of-record responsibility remains important even when using a customs broker.',
    },
    {
      href: 'https://www.cbp.gov/trade/forced-labor',
      label: 'CBP - Forced Labor',
      note: 'CBP forced-labor resources relevant to the enforcement priority for products made with forced labor and supply-chain documentation.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Importer of record name, broker contact, importer account or bond notes, entry plan, consignee details, and any foreign IOR concerns',
    'Supplier English and Chinese names, factory address, trading-company role, payment beneficiary, shipper, exporter, pickup address, and contact records',
    'Product list by SKU, model or style number, material composition, grade, size, function, accessories, carton count, labels, and product photos',
    'Purchase order, quote, proforma invoice, commercial invoice draft, packing list draft, payment terms, freight terms, tooling or assist records, and discount notes',
    'Origin notes, manufacturing location, component-source questions, subcontracting notes, route plan, forwarder details, and any transshipment concern',
    'Broker instructions, HTS notes, tariff or forced-labor concerns, compliance red lines, pickup deadline, payment deadline, and which findings should stop release',
  ],
  redFlags: [
    'The supplier wants to lower invoice value, change descriptions, split documents, or route goods through another location without broker review',
    'The quote, invoice company, payment beneficiary, factory, shipper, exporter, labels, and carton marks do not line up',
    'The buyer cannot name the importer of record or the broker cannot confirm whether the shipment is formal, informal, U.S. IOR, or foreign IOR',
    'The supplier provides generic product descriptions instead of model, style, material, grade, size, function, and SKU-specific details',
    'Carton photos, packing list, product labels, and invoice lines show different SKUs, quantities, marks, or company names',
    'The supplier claims origin, valuation, tariff, forced-labor, or product-safety conclusions without broker, adviser, or counsel review',
    'The exporter refuses to provide production, packing, label, manufacturer, or correction evidence before pickup',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible product, label, carton, supplier, packing, invoice, and broker-reference evidence against buyer-provided requirements in China',
    'Huang Sourcing does not act as importer of record, customs broker, customs adviser, freight forwarder, testing lab, or legal counsel',
    'A China-side evidence check cannot decide tariff classification, valuation, origin, forced-labor admissibility, bond sufficiency, IOR good standing, or entry acceptance',
    'The importer remains responsible for customs declarations, broker instructions, compliance determinations, payment of duties, and legal review',
    'Factory access, sealed cartons, missing supplier files, vague product references, late packaging changes, or route changes can limit report confidence',
    'U.S. customs enforcement rules can change quickly, so time-sensitive entry instructions should be reconfirmed with the broker before shipment and before entry',
  ],
  relatedLinks: [
    {
      href: chinaSection301TariffCheckArticleHref,
      label: 'China Section 301 tariff evidence guide',
      note: 'Use this when product identity, HTS handoff, tariff exclusions, and China supplier documents need a narrower tariff review.',
    },
    {
      href: uflpaChinaSupplierCheckArticleHref,
      label: 'UFLPA supplier-chain evidence checklist',
      note: 'Use this when forced-labor supply-chain evidence is the main U.S. customs risk before shipment.',
    },
    {
      href: usDeMinimisSuspensionChinaArticleHref,
      label: 'U.S. de minimis suspension for China shipments',
      note: 'Use this for low-value China shipment planning after duty-free treatment was suspended.',
    },
    {
      href: usPostalInformalEntryChinaMailShipmentsArticleHref,
      label: 'U.S. postal informal entry China mail checklist',
      note: 'Use this when China mail or postal-parcel handling creates informal-entry evidence questions.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Use this when payment or pickup depends on clear photo-backed evidence and decision notes.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before China inspection',
      note: 'Prepare the reference files, broker notes, carton data, and decision rules before the onsite check.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What changed in U.S. customs enforcement in June 2026?',
      answer:
        'Executive Order 14411, signed June 3, 2026 and published June 10, 2026, directs DHS and CBP to strengthen importer-of-record eligibility, foreign IOR treatment, disclosures, certifications, penalties, seizures, transparency, and enforcement priorities such as forced labor, misclassification, undervaluation, and illegal transshipment.',
    },
    {
      question: 'Does the order immediately block China imports?',
      answer:
        'No. The order directs agency action, guidance, rulemaking, enforcement changes, and legislative recommendations. The White House fact sheet states that reforms generally will not take effect immediately and that DHS and CBP will engage through the standard rulemaking process where required.',
    },
    {
      question: 'Why should China-side evidence be checked before shipment?',
      answer:
        'Supplier identity, manufacturer data, product specifications, origin facts, valuation support, invoice wording, and packing evidence are much easier to correct while goods are still with the supplier or forwarder in China.',
    },
    {
      question: 'Can a China supplier decide the U.S. importer of record?',
      answer:
        'The supplier can provide documents, but the importer and broker should decide the entry structure. The buyer should not let a supplier, marketplace contact, or forwarder shortcut define IOR responsibility without broker review.',
    },
    {
      question: 'What should buyers ask the broker before pickup?',
      answer:
        'Ask who is the importer of record, whether the entry path is formal or informal, what product identifiers and supply-chain details are needed, what valuation and origin support should be retained, and which issues should stop pickup until corrected.',
    },
    {
      question: 'Can Huang Sourcing provide customs legal advice?',
      answer:
        'No. Huang Sourcing can help organize and check visible China-side evidence against buyer-provided references. Customs classification, valuation, origin, forced-labor admissibility, IOR eligibility, broker filing, and legal conclusions remain with qualified trade professionals.',
    },
  ] satisfies FaqItem[],
}

export function makeUsCustomsEnforcementChinaImportsArticleMetadata(): Metadata {
  const article = usCustomsEnforcementChinaImportsArticle

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

export function makeUsCustomsEnforcementChinaImportsArticleJsonLd() {
  return [
    makeArticleJsonLd(usCustomsEnforcementChinaImportsArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'U.S. customs enforcement China import pre-shipment checklist',
      itemListElement: usCustomsEnforcementChinaImportsArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(usCustomsEnforcementChinaImportsArticle.faqs),
  ]
}
