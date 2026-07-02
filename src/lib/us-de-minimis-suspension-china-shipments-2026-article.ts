import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  amazonFbaPrepArticleHref,
  amazonSellersFbaPrepChinaArticleHref,
  buyerSideInspectionReportArticleHref,
  chinaSamplesUsCustomsArticleHref,
  chinaSection301TariffCheckArticleHref,
  cpscEfilingChinaImportsArticleHref,
  fnskuLabelMistakesArticleHref,
  forwarderPickupChinaRisksArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  preShipmentBeforePickupArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  usDeMinimisSuspensionChinaArticleHref,
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

export const usDeMinimisSuspensionChinaArticle = {
  href: usDeMinimisSuspensionChinaArticleHref,
  title: 'U.S. De Minimis Suspension for China Shipments: 2026 Checklist',
  metaTitle: 'U.S. De Minimis Suspension China Shipments 2026 Checklist',
  metaDescription:
    'U.S. de minimis suspension checklist for China shipments in 2026: entry type, value, origin, product data, labels, broker handoff, and release evidence.',
  publishedDate: 'July 2, 2026',
  publishedDateIso: '2026-07-02T15:30:00-04:00',
  h1: 'U.S. De Minimis Suspension for China Shipments: What Buyers Should Check in 2026',
  eyebrow: 'U.S. de minimis - China parcels - entry evidence',
  image: {
    alt: 'China-side product samples and parcel documents checked before U.S. low-value shipment entry',
    height: 900,
    src: '/images/china-samples-us-customs-2026.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/china-samples-us-customs-2026.webp', width: 1600 },
    { height: 1200, src: '/images/china-samples-us-customs-2026-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/china-samples-us-customs-2026-1x1.webp', width: 1200 },
  ],
  intro:
    'On June 24, 2026, U.S. Customs and Border Protection published interim final rules that implement an indefinite suspension of the de minimis administrative exemption for merchandise valued at $800 or less. For China-origin goods, the practical issue is not only duty cost. Low-value parcels now need clean entry data, origin, value, product identity, and broker or carrier handoff before goods leave China.',
  answerSummary:
    'Do not release U.S.-bound China shipments just because each parcel is under $800. Before dispatch, confirm product description, country of origin, supportable value, importer and consignee details, entry path, qualified filer, carrier or broker instructions, labels, regulated-product evidence, and who owns customs decisions. Huang Sourcing can check China-side product, label, carton, invoice, packing, and supplier evidence, but U.S. customs entry, tariff classification, valuation, duty, taxes, fees, and admissibility decisions remain with the importer, broker, carrier, compliance adviser, or counsel.',
  primaryCta: {
    label: 'Check U.S. Shipment Evidence Before Release',
  },
  secondaryCta: {
    href: '#de-minimis-checklist',
    label: 'See Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side U.S. low-value shipment evidence check before dispatch.

Product / SKU count:
Supplier or warehouse location:
U.S. destination:
Estimated value by item:
Country of origin details:
Carrier or broker:
Labels, invoice, and packing files available:
Regulated product concerns:
Dispatch deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#de-minimis-checklist', label: 'Shipment checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#entry-path', label: 'Entry path' },
    { href: '#value-origin', label: 'Value and origin' },
    { href: '#regulated-goods', label: 'Regulated goods' },
    { href: '#release-rule', label: 'Release rule' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Treat under-$800 U.S. parcels as an entry-planning issue, not as automatically duty-free',
    'Confirm country of origin for every SKU, especially China-origin, Hong Kong-origin, or mixed-origin goods',
    'Name the importer, consignee, broker, carrier, entry filer, and party responsible for duties, taxes, fees, and records',
    'Prepare line-level product descriptions, materials, quantities, unit values, origin, and candidate classification notes before dispatch',
    'Match the commercial invoice, packing list, parcel label, carton marks, product label, SKU file, and physical goods before release',
    'Screen CPSC, FDA, battery, chemical, textile, food, cosmetic, medical, IP, wireless, and other regulated-product issues before pickup',
    'Avoid parcel splitting, vague descriptions, false origin, zero value, gift wording, or reshipper routing used to hide the actual shipment facts',
    'Hold shipment when the carrier or broker requests missing customs data only after parcels are sealed or handed over',
  ],
  checkGroups: [
    {
      title: 'Entry and responsibility',
      items: [
        'Importer, consignee, broker, carrier, qualified entry filer, duty owner, tax or fee owner, and record owner identified before supplier release',
        'Formal or informal entry path, postal or non-postal channel, ACE data expectations, and carrier handoff confirmed in writing where possible',
      ],
    },
    {
      title: 'Product data',
      items: [
        'SKU, model, product title, plain-language description, material, function, quantity, unit value, total value, and country of origin listed by line',
        'Invoice, packing list, parcel label, carton mark, product label, barcode, and physical product checked for the same product version',
      ],
    },
    {
      title: 'Regulated-goods screen',
      items: [
        'Consumer product certificates, eFiling data, battery details, dangerous-goods notes, SDS files, labels, warnings, manuals, and test records gathered where relevant',
        'Food, cosmetics, chemicals, medical items, wireless products, textiles, branded goods, plant or animal materials, and restricted contents flagged before dispatch',
      ],
    },
    {
      title: 'Release control',
      items: [
        'Supplier changes to origin, invoice wording, material, packaging, labels, accessories, bundles, or shipper name reviewed before cartons leave China',
        'Written hold-release rule used when origin, value, entry filer, regulated-product evidence, or broker instructions cannot be reconciled',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why U.S. de minimis is a current China sourcing issue',
      paragraphs: [
        'CBP published the non-postal interim final rule on June 24, 2026, effective the same day, with comments due July 24, 2026. The rule states that merchandise valued at $800 or less arriving through modes other than the international postal network must use formal or informal entry procedures instead of the suspended de minimis administrative exemption.',
        'The same Federal Register package sits on top of earlier 2025 and 2026 actions. China and Hong Kong low-value treatment changed first in 2025, the global suspension followed in August 2025, and the February 2026 order continued the suspension. The June 2026 rules make this a live operating issue for sellers, importers, couriers, brokers, and China-side fulfillment teams.',
      ],
      bullets: [
        'The June 24, 2026 rule is active now, not a distant proposal',
        'The rule affects low-value shipments, including e-commerce, sample, FBA, and small-batch parcel flows',
        'Type 86 entries were already barred under the 2025 implementation notice for the global suspension',
        'China-side evidence matters because incorrect invoice, origin, label, or packing data is harder to fix after pickup',
      ],
    },
    {
      id: 'entry-path',
      title: 'Start with entry path and qualified filer',
      paragraphs: [
        'A low parcel value no longer removes the need to know how the shipment will enter the United States. Before dispatch, the buyer should know whether the carrier, customs broker, marketplace logistics provider, postal process, or another qualified party will file the entry and what facts that filer needs from the China side.',
        'The China supplier or warehouse should not improvise customs wording. The release file should reflect the entry owner instructions: product description, line value, origin, quantity, shipper, consignee, importer details, parcel count, weights, dimensions, and regulated-product documents where relevant.',
      ],
      bullets: [
        'Ask the carrier or broker which formal or informal process applies to the actual goods and ship date',
        'Keep the broker or carrier data request with the shipment evidence folder',
        'Do not assume a courier account, marketplace label, or forwarder booking solves importer obligations',
        'Pause release if nobody can identify the entry filer or the data owner',
      ],
    },
    {
      id: 'value-origin',
      title: 'Value, origin, and description need line-level support',
      paragraphs: [
        'The common mistake is to treat $800 as the whole customs answer. A parcel can be low value and still need accurate value, country of origin, product identity, and other-agency information. The invoice should support how each item value was determined, especially free samples, replacements, discounted goods, bundles, accessories, and mixed-SKU parcels.',
        'Origin should follow the product, not just the shipping address. If a China warehouse consolidates items from multiple factories or origins, the outbound file should not collapse everything into one generic China parcel description. The importer and broker need usable line-level facts to make classification, valuation, and admissibility decisions.',
      ],
      bullets: [
        'Use product descriptions that a broker can understand without guessing from the SKU name',
        'Record supplier quote, payment, sample charge, replacement value, or other evidence supporting declared value',
        'Separate bundles, kits, accessories, free gifts, spare parts, and samples before dispatch',
        'Do not use gift, no commercial value, or vague accessory wording when it does not match the actual shipment',
      ],
    },
    {
      id: 'regulated-goods',
      title: 'Low value does not remove product compliance checks',
      paragraphs: [
        'CBP frames low-value shipment risk around revenue protection, unlawful importations, health and safety requirements, intellectual property rights, consumer protection, and illicit goods. That matters for ordinary China sourcing because many small parcels contain consumer products that may also trigger CPSC, FDA, EPA, USDA, FCC, battery, dangerous-goods, textile, labeling, or intellectual-property checks.',
        'A China-side check cannot approve U.S. compliance, but it can catch visible mismatches before pickup. The product, label, manual, warning, certificate data, FNSKU, carton mark, material, battery information, and packing evidence should match the buyer-approved file and the broker or compliance adviser instructions.',
      ],
      bullets: [
        'Treat toys, children products, electronics, batteries, cosmetics, food-contact items, medical claims, chemicals, textiles, and branded goods as higher-risk',
        'Keep CPSC certificate and eFiling data tied to the exact model, production batch, manufacturer, and shipment where applicable',
        'Check product labels and packaging before cartons are sealed, not after the carrier requests corrections',
        'Escalate safety, ingredient, testing, classification, IP, and admissibility questions to qualified U.S.-side owners',
      ],
    },
    {
      id: 'release-rule',
      title: 'Build a hold-release rule before the forwarder collects',
      paragraphs: [
        'The buyer needs a practical release rule because customs decisions and physical shipment readiness meet at the China warehouse. If the product is ready but the invoice, labels, origin, value, or broker instructions are not ready, releasing the goods can convert a correctable China-side problem into a border, delivery, storage, or customer-service problem.',
        'Use a written hold-release rule before pickup: release only when product identity, value, origin, labels, packing, entry owner, and regulated-product evidence align with the buyer-approved file. Hold when the supplier changes the facts, asks to split parcels for customs reasons, or leaves the entry owner unclear.',
      ],
      bullets: [
        'Create one shipment evidence folder before release, not scattered chat screenshots after a problem',
        'Require correction photos when supplier labels, invoice wording, carton marks, or packing lists change',
        'Record who approved release when a broker, carrier, compliance adviser, or marketplace gives instructions',
        'Use China-side inspection timing to fix visible evidence before balance payment, pickup, or courier handoff',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Entry path is known',
      evidence:
        'Carrier, broker, qualified filer, importer, consignee, shipment mode, formal or informal process, and data requirements are identified.',
      buyerDecision:
        'Release only when the entry owner and required data are clear; hold when nobody owns the filing path.',
    },
    {
      riskNode: 'Origin and value are supportable',
      evidence:
        'Line-level product origin, quantity, unit value, total value, quote or payment support, sample status, and bundle details are documented.',
      buyerDecision:
        'Approve the invoice file, correct weak values, split mixed facts into separate lines, or ask the broker before dispatch.',
    },
    {
      riskNode: 'Product identity matches',
      evidence:
        'SKU, model, barcode, FNSKU where used, product label, carton mark, invoice description, packing list, and physical goods identify the same item.',
      buyerDecision:
        'Release after mismatches are corrected, or hold shipment when old labels, generic SKUs, or mixed versions remain.',
    },
    {
      riskNode: 'Regulated-product evidence is ready',
      evidence:
        'Certificates, eFiling data, labels, warnings, manuals, SDS, battery details, test reports, IP authorization, or specialist notes are available where relevant.',
      buyerDecision:
        'Ship only after the importer, broker, compliance adviser, marketplace, or counsel confirms the required evidence path.',
    },
    {
      riskNode: 'Pickup should proceed',
      evidence:
        'Final invoice, packing list, parcel labels, carton condition, weights, dimensions, correction photos, and broker or carrier instructions align.',
      buyerDecision:
        'Approve pickup, request correction photos, delay forwarder collection, or route the goods to a prep or inspection step first.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official CBP and Federal Register source context on the June 24, 2026 indefinite suspension of the de minimis administrative exemption, the 2025 global implementation notice, and the February 2026 continuation order.',
    'Buyer-provided SKU list, invoice draft, packing list, supplier quote, payment record, product photos, labels, country-of-origin details, carrier instructions, and broker or compliance adviser notes.',
    'Physical product, label, carton, package, parcel, packing, correction, and supplier-document evidence observed or collected in China before dispatch.',
    'Specialist guidance from the importer, customs broker, carrier, marketplace compliance team, product safety adviser, testing lab, tax adviser, or legal counsel when regulated customs decisions exceed visual evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://www.federalregister.gov/documents/2026/06/24/2026-12670/indefinite-suspension-of-the-de-minimis-exemption-for-merchandise-arriving-through-all-modes-other',
      label: 'Federal Register - non-postal de minimis suspension rule',
      note: 'CBP interim final rule effective June 24, 2026, requiring formal or informal entry procedures for merchandise valued at $800 or less arriving through modes other than the international postal network.',
    },
    {
      href: 'https://www.federalregister.gov/documents/2026/06/24/2026-12669/indefinite-suspension-of-the-de-minimis-exemption-for-mail-shipments-and-new-postal-informal-entry',
      label: 'Federal Register - mail shipments and postal informal entry',
      note: 'Concurrent CBP interim final rule addressing international mail shipments and the new postal informal entry process after de minimis suspension.',
    },
    {
      href: 'https://www.federalregister.gov/documents/2026/02/25/2026-03829/continuing-the-suspension-of-duty-free-de-minimis-treatment-for-all-countries',
      label: 'Federal Register - February 2026 continuation order',
      note: 'Executive Order 14388 continuing the suspension of duty-free de minimis treatment and directing CBP to keep collecting applicable duties, taxes, fees, and charges.',
    },
    {
      href: 'https://www.federalregister.gov/documents/2025/09/02/2025-16802/notice-of-implementation-of-the-presidents-executive-order-14324-suspending-duty-free-de-minimis',
      label: 'Federal Register - EO 14324 implementation notice',
      note: 'DHS implementation notice for the August 29, 2025 global suspension, including the statement that Type 86 entries may no longer be utilized.',
    },
    {
      href: 'https://www.cbp.gov/trade/basic-import-export/e-commerce/faqs',
      label: 'CBP - E-Commerce frequently asked questions',
      note: 'CBP FAQ context for e-commerce and low-value shipment treatment, including current de minimis suspension guidance.',
    },
    {
      href: 'https://www.cbp.gov/newsroom/national-media-release/cbp-modernizes-low-value-shipment-processing',
      label: 'CBP - low-value shipment processing modernization',
      note: 'CBP announcement explaining the June 2026 low-value shipment processing changes and indefinite de minimis suspension.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'SKU list with product title, model, material, function, quantity, unit value, total value, country of origin, supplier, and U.S. destination',
    'Supplier quote, payment record, sample charge, replacement note, free-of-charge explanation, or other value support for each line',
    'Commercial invoice draft, packing list, parcel labels, carton marks, product labels, FNSKU files where used, weights, dimensions, and parcel count',
    'Importer, consignee, broker, carrier, marketplace logistics provider, entry filer, duty owner, and record owner notes requested by the U.S. side',
    'Broker or carrier data request, classification notes, entry instructions, regulated-product requirements, and written conditions that should block release',
    'Product photos, label photos, carton photos, correction photos, manuals, warnings, certificates, test reports, SDS, battery data, IP authorization, or other compliance files where relevant',
  ],
  redFlags: [
    'The supplier, warehouse, or forwarder says under $800 means the shipment is automatically duty-free',
    'The invoice uses vague descriptions such as accessories, parts, sample, gift, or no commercial value without factual support',
    'Country of origin follows the shipper address instead of the actual product origin or mixed-origin line details',
    'The team splits parcels, changes shipper names, reroutes through a reshipper, or rewrites descriptions mainly to avoid entry or duty treatment',
    'The carrier or broker asks for corrected invoice, origin, value, or product data only after cartons are sealed or picked up',
    'Product labels, FNSKU labels, carton marks, invoice descriptions, and physical products identify different versions',
    'Regulated goods ship with missing warnings, generic certificates, unclear battery data, weak product safety files, or unconfirmed IP authorization',
    'No one can name the importer, broker, qualified entry filer, duty owner, tax or fee owner, or record-retention owner before release',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible product, label, carton, parcel, invoice, packing, supplier-file, and correction evidence against buyer-provided references in China',
    'Huang Sourcing does not decide U.S. tariff classification, customs valuation, country-of-origin legal treatment, entry type, admissibility, duties, taxes, fees, or customs filings',
    'A China-side evidence check cannot guarantee CBP release, carrier acceptance, marketplace approval, product safety compliance, duty rate, or delivery timing',
    'The importer, customs broker, carrier, marketplace compliance team, product safety adviser, testing lab, tax adviser, or legal counsel remains responsible for regulated decisions',
    'Supplier opacity, mixed-origin inventory, sealed parcels, vague invoice data, late label changes, reshipper routing, or missing broker instructions can limit report confidence',
    'U.S. customs rules, court decisions, executive actions, Federal Register rules, carrier processes, and marketplace policies can change, so shipment-specific instructions should be reconfirmed near release',
  ],
  relatedLinks: [
    {
      href: chinaSamplesUsCustomsArticleHref,
      label: 'Shipping China samples to the U.S.',
      note: 'Use this when low-value samples need customs value, invoice, carrier, and consolidation planning.',
    },
    {
      href: chinaSection301TariffCheckArticleHref,
      label: 'Section 301 tariff evidence check',
      note: 'Use this when U.S. tariff exposure depends on product identity, origin, classification notes, and supplier evidence.',
    },
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'CPSC eFiling China imports 2026',
      note: 'Use this when consumer products need certificate data and regulated-product evidence before U.S. shipment.',
    },
    {
      href: amazonSellersFbaPrepChinaArticleHref,
      label: 'Amazon sellers FBA prep in China',
      note: 'Use this when Amazon-bound parcels also need label, SKU, carton, and prep evidence before shipment.',
    },
    {
      href: amazonFbaPrepArticleHref,
      label: 'Amazon FBA prep checklist',
      note: 'Use this when FNSKU, carton labels, SKU separation, and prep scope need checking before dispatch.',
    },
    {
      href: fnskuLabelMistakesArticleHref,
      label: 'FNSKU label mistakes before shipment',
      note: 'Use this when label mismatch could create Amazon receiving, customs, or correction problems.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Use this when product labels, manuals, inserts, carton marks, or packaging should block release.',
    },
    {
      href: preShipmentBeforePickupArticleHref,
      label: 'Pre-shipment inspection before pickup',
      note: 'Use this when packed goods need a final pickup-readiness check before the forwarder collects.',
    },
    {
      href: forwarderPickupChinaRisksArticleHref,
      label: 'Forwarder pickup China checklist',
      note: 'Use this when forwarder timing, carton evidence, and release instructions need alignment.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Use this when the release decision needs photo-backed evidence and practical next steps.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control China manufacturing plan',
      note: 'Build value, origin, label, and evidence checks into production before dispatch pressure starts.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before China inspection',
      note: 'Prepare product, label, packing, customs, and decision-rule files before the China-side check.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Is the U.S. de minimis exemption still available for China shipments in 2026?',
      answer:
        'Do not plan China-origin commercial shipments on the assumption that the $800 de minimis administrative exemption is available. CBP and Federal Register materials describe active suspension measures, and the June 24, 2026 CBP rules implement an indefinite suspension for low-value merchandise.',
    },
    {
      question: 'Does a parcel under $800 still need customs entry data?',
      answer:
        'Yes. Low value does not remove the need for accurate product description, origin, value, importer details, and the appropriate entry process. The carrier or licensed customs broker should confirm the current entry path and charges for the actual goods and ship date.',
    },
    {
      question: 'Can we still use Entry Type 86 for low-value shipments?',
      answer:
        'The DHS implementation notice for Executive Order 14324 states that Type 86 entries may no longer be utilized. Ask the carrier or customs broker what formal or informal entry process applies to the shipment now.',
    },
    {
      question: 'Does writing sample, gift, or no commercial value avoid duties?',
      answer:
        'No. Those words do not replace accurate customs facts. The invoice should describe the actual product and provide supportable value, origin, quantity, and intended-use information for the broker or carrier.',
    },
    {
      question: 'What should be checked before the China supplier releases the goods?',
      answer:
        'Check product identity, origin, value support, invoice wording, packing list, parcel labels, carton marks, product labels, regulated-product files, broker or carrier instructions, and who owns the entry and duty process before pickup.',
    },
    {
      question: 'Can Huang Sourcing file U.S. customs entries or decide tariff classification?',
      answer:
        'No. Huang Sourcing can check China-side product, label, carton, invoice, packing, and supplier evidence. U.S. entry filing, classification, valuation, duty, taxes, fees, admissibility, and legal compliance remain with the importer, broker, carrier, compliance adviser, or counsel.',
    },
  ] satisfies FaqItem[],
}

export function makeUsDeMinimisSuspensionChinaArticleMetadata(): Metadata {
  const article = usDeMinimisSuspensionChinaArticle

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

export function makeUsDeMinimisSuspensionChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(usDeMinimisSuspensionChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'U.S. de minimis suspension checklist for China shipments',
      itemListElement: usDeMinimisSuspensionChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(usDeMinimisSuspensionChinaArticle.faqs),
  ]
}
