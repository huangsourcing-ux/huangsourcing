import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  amazonFbaPrepArticleHref,
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

export const usPostalInformalEntryChinaMailShipmentsArticle = {
  href: usPostalInformalEntryChinaMailShipmentsArticleHref,
  title: 'U.S. Postal Informal Entry for China Mail Shipments: 2026 Checklist',
  metaTitle: 'U.S. Postal Informal Entry China Mail Shipments 2026',
  metaDescription:
    'U.S. postal informal entry checklist for China mail shipments in 2026: CBP de minimis suspension, Entry Type 13, HTS, origin, value, labels, and broker handoff.',
  publishedDate: 'July 6, 2026',
  publishedDateIso: '2026-07-06T15:00:00-04:00',
  h1: 'U.S. Postal Informal Entry for China Mail Shipments: What Sellers Should Check in 2026',
  eyebrow: 'CBP postal rule - China mail shipments - dispatch evidence',
  image: {
    alt: 'China-side parcel, product label, invoice, and tracking evidence checked before U.S. postal shipment dispatch',
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
    'On June 24, 2026, CBP published an interim final rule for mail shipments that indefinitely suspends the Section 321 de minimis administrative exemption for goods valued at $800 or less arriving through the international postal network. Most of the rule is effective July 24, 2026, comments are due the same day, and CBP separately announced an Entry Type 13 electronic informal mail entry test starting September 22, 2026.',
  answerSummary:
    'For China sellers, sample shippers, and direct-to-consumer teams using China Post, ePacket-style routing, postal consolidators, or mail handoffs, the practical work starts before dispatch: product description, country of origin, value, 10-digit HTSUS notes, tracking number, carrier, broker or importer role, label evidence, and regulated-product files need to match the real parcel. Huang Sourcing can check China-side evidence before release, but customs entry, HTS classification, duties, taxes, fees, bonds, Entry Type 13 participation, and admissibility decisions remain with the importer, broker, carrier, postal operator, compliance adviser, or counsel.',
  primaryCta: {
    label: 'Check Mail Shipment Evidence Before Dispatch',
  },
  secondaryCta: {
    href: '#postal-entry-checklist',
    label: 'See Postal Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side U.S. postal shipment evidence check before dispatch.

Product / SKU count:
Supplier or warehouse location:
U.S. buyer / importer:
Postal carrier or consolidator:
Tracking / label files available:
Invoice and declared value:
Country of origin details:
HTS or broker instructions:
Regulated product concerns:
Dispatch deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#postal-entry-checklist', label: 'Postal checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#entry-owner', label: 'Entry owner' },
    { href: '#data-elements', label: 'Data elements' },
    { href: '#regulated-goods', label: 'Regulated goods' },
    { href: '#entry-type-13', label: 'Entry Type 13' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Do not treat U.S.-bound mail parcels from China as automatically duty-free just because the value is $800 or less',
    'Confirm whether the shipment is postal mail, express courier, freight, marketplace logistics, or another mode before choosing the evidence path',
    'Name the owner, purchaser, importer of record, licensed broker, postal operator, carrier, or consolidator responsible for entry facts',
    'Prepare product description, country of origin, value, 10-digit HTSUS notes, carrier name, tracking number, and arrival-port instructions before dispatch',
    'Check whether the item has PGA data, Chapter 98 or 99 duties, Section 301 duties, AD/CVD, quota, CPSC, FDA, battery, textile, or other regulated-product exposure',
    'Match the parcel label, tracking number, invoice, packing file, product label, carton or mailer photos, and physical goods before the supplier releases the parcel',
    'Keep postal informal entry evidence separate from ordinary sales listing, platform fulfillment, or supplier shipping promises',
    'Hold dispatch when the entry owner, HTS notes, origin, value, tracking evidence, or regulated-product files cannot be reconciled',
  ],
  checkGroups: [
    {
      title: 'Mail route and entry owner',
      items: [
        'Postal network, consolidator, carrier, foreign postal tracking number, U.S. recipient, owner or purchaser, importer, broker, and release approver identified before dispatch',
        'Formal entry, postal informal process, Entry Type 13 test interest, or other carrier or broker path confirmed by the responsible U.S.-side party',
      ],
    },
    {
      title: 'Product and customs data',
      items: [
        'Plain-language merchandise description, SKU, model, material, function, quantity, weight where duty depends on it, country of origin, declared value, and 10-digit HTSUS notes collected by line',
        'Invoice, parcel label, product label, packing record, product photos, and tracking details checked against the same physical goods',
      ],
    },
    {
      title: 'Regulated-product screen',
      items: [
        'CPSC certificate or eFiling data, FDA or other PGA notes, battery details, dangerous-goods files, warnings, manuals, textile labels, and test reports gathered where relevant',
        'AD/CVD, quota, Chapter 98, Chapter 99, Section 301, and other trade-remedy exposure flagged for broker or counsel review before shipment release',
      ],
    },
    {
      title: 'Dispatch control',
      items: [
        'Supplier changes to invoice wording, origin, product title, shipper, label, routing, packaging, or parcel split reviewed before the mailer leaves China',
        'Written hold-release rule used when postal entry facts, broker instructions, or product evidence remain incomplete',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why postal informal entry is a current China sourcing issue',
      paragraphs: [
        'CBP published the postal interim final rule on June 24, 2026. It suspends the Section 321 de minimis administrative exemption for merchandise valued at $800 or less arriving through the international postal network, with most provisions effective July 24, 2026 and comments due July 24, 2026.',
        'The rule also creates a new postal informal entry process for certain mail shipments valued at $2,500 or less. CBP says the process replaces the temporary postal process used after the 2025 executive-order suspension and requires more entry data so duties, taxes, fees, and admissibility controls can be applied more consistently.',
      ],
      bullets: [
        'This is current because the effective date and comment deadline are in July 2026',
        'Postal parcels need a different handoff than ordinary courier or freight shipments',
        'China-side mistakes in origin, description, value, labels, and tracking data are harder to fix after mailing',
        'The article complements the broader U.S. de minimis guide by focusing on international mail and postal entry evidence',
      ],
    },
    {
      id: 'entry-owner',
      title: 'Start by naming the postal entry owner',
      paragraphs: [
        'A seller should not release a U.S.-bound postal parcel until the entry owner is clear. CBP describes eligible filing parties as an owner or purchaser of the merchandise, or a licensed customs broker designated by the owner, purchaser, or consignee. A consignee that is not an owner or purchaser may need a licensed broker for the entry path.',
        'For China-side operations, this means the supplier, warehouse, postal consolidator, platform logistics provider, carrier, importer, and broker cannot each assume someone else owns the customs facts. The release file should name who approved the shipping label, declared value, origin, description, and broker or postal instructions.',
      ],
      bullets: [
        'Identify the importer or buyer-side owner before supplier release',
        'Record whether a licensed customs broker is involved and what data they requested',
        'Keep the postal route separate from non-postal courier or freight guidance',
        'Pause when the supplier can print a label but nobody owns entry data quality',
      ],
    },
    {
      id: 'data-elements',
      title: 'The parcel data has to support classification, value, and origin',
      paragraphs: [
        'CBP says the postal informal entry process needs additional data, including filer code, bond number, applicable 10-digit HTSUS classifications, merchandise description, and quantity or weight when the applicable duty depends on it. The Entry Type 13 test notice lists related electronic filing data, including IOR number, country of origin, duty rate, value, total duty owed, carrier name, foreign-post tracking number, and arrival port.',
        'A China-side check cannot decide the HTS code or duty. It can, however, catch the practical mismatches that make a broker or importer file weak: vague accessory descriptions, unsupported values, wrong origin, old product labels, mixed SKUs, missing tracking references, or photos that do not match the invoice line.',
      ],
      bullets: [
        'Use a real product description instead of generic sample, gift, accessory, or parts wording when that does not describe the goods',
        'Connect declared value to quote, payment, sample charge, replacement reason, or other support',
        'Keep country-of-origin facts separate from the postal route or shipper address',
        'Match tracking number, label, invoice, packing, product photo, and SKU record before handoff',
      ],
    },
    {
      id: 'regulated-goods',
      title: 'Some mail shipments may need formal entry or specialist review',
      paragraphs: [
        'The postal rule limits the new informal process and describes ineligible categories. CBP flags shipments subject to quota, AD/CVD orders, certain Partner Government Agency requirements, Chapter 98 or 99 duties, Free Trade Agreement claims, or other exclusions as requiring attention. The Entry Type 13 test may temporarily create an informal path for some low-value mail with PGA data or duties outside Chapters 1-97, but AD/CVD and quota shipments remain outside the test.',
        'For sellers shipping from China, the practical message is simple: low value and postal routing do not remove product-compliance risk. Toys, children products, electronics, batteries, textiles, cosmetics, food-contact goods, medical claims, chemicals, branded items, and products with Section 301 exposure should be screened before mailing.',
      ],
      bullets: [
        'Flag regulated-product evidence before the parcel is sealed',
        'Collect certificates, eFiling data, SDS, battery data, labels, warnings, manuals, and test reports where relevant',
        'Ask the broker or compliance owner about Chapter 99, Section 301, AD/CVD, quota, PGA, and formal-entry questions',
        'Do not use postal shipment size as a substitute for admissibility review',
      ],
    },
    {
      id: 'entry-type-13',
      title: 'Entry Type 13 is a test, not a reason to skip evidence prep',
      paragraphs: [
        'CBP announced a voluntary Entry Type 13 test for international mail in ACE that starts September 22, 2026 and continues until CBP ends it through a Federal Register announcement. The test is intended as an electronic alternative to the interim postal informal process and allows qualified international mail shipments to be filed electronically in ACE.',
        'The test does not make supplier evidence optional. It makes clean data more important. If the foreign-post tracking number, carrier, IOR, product description, country of origin, HTSUS notes, value, duty, arrival port, and regulated-product data do not connect to the actual parcel, the electronic process can still surface errors after the goods have already left China.',
      ],
      bullets: [
        'Treat September 22, 2026 as a planning date for broker and carrier workflows',
        'Confirm whether the importer, broker, carrier, or postal operator will participate in the test',
        'Build SKU-level postal data before the test starts, not after parcels are already moving',
        'Preserve correction photos and supplier-change records for each shipment lot',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Mail route is confirmed',
      evidence:
        'The shipment is confirmed as international postal mail, with postal operator, consolidator, carrier, tracking number, U.S. recipient, and dispatch deadline identified.',
      buyerDecision:
        'Use the postal evidence checklist, or switch to the correct courier, freight, or broker process when the route is not postal mail.',
    },
    {
      riskNode: 'Entry owner is named',
      evidence:
        'Owner, purchaser, importer, licensed broker, carrier, postal operator, or consignee-side entry owner is responsible for filing facts and duties.',
      buyerDecision:
        'Release only after the responsible party approves the data path; hold when the supplier or warehouse is guessing.',
    },
    {
      riskNode: 'Product data matches',
      evidence:
        'Description, SKU, model, material, origin, value, quantity, weight where relevant, HTS notes, invoice, label, tracking, and photos describe the same parcel.',
      buyerDecision:
        'Correct the file before dispatch, split mixed facts into separate lines, or escalate classification and value questions to the broker.',
    },
    {
      riskNode: 'Regulated risk is screened',
      evidence:
        'PGA, CPSC, FDA, battery, textile, chemical, Section 301, Chapter 99, AD/CVD, quota, and formal-entry questions are listed for the U.S. owner.',
      buyerDecision:
        'Proceed only with written instructions from the importer, broker, compliance adviser, or counsel when regulated goods are involved.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official Federal Register interim final rule 2026-12669, published June 24, 2026, for the postal de minimis suspension, effective dates, comment deadline, eligibility limits, and new postal informal entry process.',
    'Official Federal Register notice 2026-12668, published June 24, 2026, for the voluntary Entry Type 13 test, September 22, 2026 start date, eligible participants, and ACE filing data elements.',
    'Official CBP trade and e-commerce source context for low-value shipments, international mail, informal entries, and entry data expectations.',
    'Buyer-provided SKU lists, invoices, packing files, postal labels, foreign-post tracking numbers, product photos, supplier files, broker instructions, and compliance references checked against visible China-side evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://www.federalregister.gov/documents/2026/06/24/2026-12669/indefinite-suspension-of-the-de-minimis-exemption-for-mail-shipments-and-new-postal-informal-entry',
      label: 'Federal Register - postal de minimis suspension and informal entry rule',
      note: 'Official CBP interim final rule for international mail shipments, including July 24, 2026 effective date and comment deadline.',
    },
    {
      href: 'https://www.federalregister.gov/documents/2026/06/24/2026-12668/test-of-the-new-electronic-informal-entry-process-for-mail',
      label: 'Federal Register - Entry Type 13 mail-entry test',
      note: 'Official CBP notice for the voluntary electronic informal mail entry test in ACE beginning September 22, 2026.',
    },
    {
      href: 'https://www.cbp.gov/trade/rulings/cbp-trade-related-federal-register-notices-2026',
      label: 'CBP - trade-related Federal Register notices 2026',
      note: 'CBP index of trade-related notices, including the June 2026 international mail rule and Entry Type 13 test notice.',
    },
    {
      href: 'https://www.cbp.gov/trade/basic-import-export/e-commerce/faqs',
      label: 'CBP - E-Commerce frequently asked questions',
      note: 'CBP FAQ context for low-value shipments, entry treatment, and current e-commerce import expectations.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'SKU list with product title, model, material, function, quantity, declared value, value support, country of origin, supplier, and U.S. recipient',
    'Postal label, foreign-post tracking number, carrier or consolidator name, mail route notes, dispatch deadline, parcel count, weights, dimensions, and arrival-port or broker instructions if available',
    'Commercial invoice draft, packing list, product photos, package photos, label photos, carton or mailer photos, barcode or FNSKU files where used, and correction photos',
    'Importer, owner, purchaser, broker, carrier, postal operator, consignee, IOR, duty owner, record owner, and release approver notes',
    'HTS, Chapter 99, Section 301, PGA, AD/CVD, quota, CPSC, FDA, battery, textile, dangerous-goods, or other regulated-product instructions from qualified U.S.-side owners',
    'Supplier declarations, test reports, certificates, manuals, warnings, SDS files, battery data, IP authorization, product listing screenshots, and any written conditions that should block dispatch',
  ],
  redFlags: [
    'The supplier says postal mail is automatically duty-free because the parcel is under $800',
    'The label, invoice, product photos, and tracking file describe different goods or different quantities',
    'The invoice uses vague words such as sample, accessory, gift, part, or no commercial value without factual support',
    'Country of origin follows the warehouse, postal route, or shipper address instead of the product facts',
    'No one can name the owner, purchaser, importer, broker, IOR, carrier, postal operator, duty owner, or record owner',
    'The shipment may involve CPSC, FDA, batteries, textiles, chemicals, Section 301, Chapter 99, AD/CVD, quota, or other regulated-product issues but no U.S.-side owner has reviewed it',
    'The supplier changes invoice wording, origin, product title, shipper name, routing, label, or parcel split after the buyer approved the file',
    'The carrier, broker, or buyer requests HTS, origin, value, or compliance data only after the parcel has already left China',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible product, label, package, invoice, tracking, supplier-file, and correction evidence against buyer-provided references in China',
    'Huang Sourcing does not decide HTS classification, postal informal entry eligibility, Entry Type 13 participation, customs valuation, origin legal treatment, bonds, duties, taxes, fees, PGA filings, or admissibility',
    'A China-side evidence check cannot guarantee CBP release, USPS or carrier acceptance, broker filing success, marketplace approval, duty rate, product safety compliance, or delivery timing',
    'The importer, owner, purchaser, broker, carrier, postal operator, compliance adviser, testing lab, tax adviser, or legal counsel remains responsible for regulated decisions',
    'Sealed mailers, missing tracking data, weak supplier documents, mixed parcels, late label changes, unknown upstream suppliers, or unclear broker instructions can limit report confidence',
    'CBP rules, Federal Register notices, executive actions, postal processes, carrier systems, ACE tests, and product-specific requirements can change, so shipment-specific instructions should be reconfirmed near release',
  ],
  relatedLinks: [
    {
      href: usDeMinimisSuspensionChinaArticleHref,
      label: 'U.S. de minimis suspension for China shipments',
      note: 'Use this broader guide when the shipment is not limited to postal mail or the entry path is still unclear.',
    },
    {
      href: chinaSamplesUsCustomsArticleHref,
      label: 'Shipping China samples to the U.S.',
      note: 'Use this when samples need value, invoice, carrier, customs, and consolidation planning before dispatch.',
    },
    {
      href: chinaSection301TariffCheckArticleHref,
      label: 'Section 301 tariff evidence check',
      note: 'Use this when China-origin products may have Chapter 99 or trade-remedy exposure.',
    },
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'CPSC eFiling China imports 2026',
      note: 'Use this when consumer products need certificate data and product-safety evidence before U.S. entry.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Use this when product labels, warnings, manuals, inserts, or package claims should block release.',
    },
    {
      href: preShipmentBeforePickupArticleHref,
      label: 'Pre-shipment inspection before pickup',
      note: 'Use this when packed goods need a final evidence check before pickup or dispatch.',
    },
    {
      href: forwarderPickupChinaRisksArticleHref,
      label: 'Forwarder pickup China checklist',
      note: 'Use this when release timing, labels, carton evidence, and handoff instructions need alignment.',
    },
    {
      href: amazonFbaPrepArticleHref,
      label: 'Amazon FBA prep checklist',
      note: 'Use this when Amazon labels, SKU separation, FNSKU, carton labels, and prep evidence are involved.',
    },
    {
      href: fnskuLabelMistakesArticleHref,
      label: 'FNSKU label mistakes before shipment',
      note: 'Use this when Amazon label mismatch could create receiving, customs, or correction problems.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Use this when release decisions need photo-backed evidence and practical next steps.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control China manufacturing plan',
      note: 'Build customs and label evidence into production before dispatch pressure starts.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before China inspection',
      note: 'Prepare product, label, packing, customs, and release-rule files before the China-side check.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Is de minimis still available for U.S.-bound mail parcels from China in 2026?',
      answer:
        'Do not plan on the $800 Section 321 de minimis administrative exemption for U.S.-bound international mail parcels from China. CBP published a postal rule on June 24, 2026 that indefinitely suspends the exemption for goods arriving through the international postal network.',
    },
    {
      question: 'Does the new postal informal entry process apply to every low-value mail shipment?',
      answer:
        'No. CBP describes eligibility limits and exclusions. Some shipments may need formal entry or specialist review, especially where PGA data, AD/CVD, quota, Chapter 98 or 99 duties, trade remedies, or regulated-product requirements are involved.',
    },
    {
      question: 'What is Entry Type 13?',
      answer:
        'Entry Type 13 is CBP\'s voluntary test for electronic informal entry of qualified international mail shipments in ACE. The test starts September 22, 2026 and is separate from ordinary supplier shipping promises or platform labels.',
    },
    {
      question: 'What should be checked before a China supplier mails the parcel?',
      answer:
        'Check the product description, SKU, model, origin, value support, HTS or broker notes, tracking number, carrier, label, invoice, packing evidence, product photos, and regulated-product files before dispatch.',
    },
    {
      question: 'Can a supplier use gift, sample, or no commercial value wording to avoid duties?',
      answer:
        'No. Postal shipment data should describe the actual goods and support the declared value and origin. The importer, broker, or qualified compliance owner should decide customs treatment for samples, replacements, gifts, and commercial goods.',
    },
    {
      question: 'Can Huang Sourcing file Entry Type 13 or decide HTS classification?',
      answer:
        'No. Huang Sourcing can check China-side product, label, invoice, tracking, package, and supplier evidence. Entry filing, classification, duties, taxes, bonds, PGA data, and legal compliance remain with the importer, broker, carrier, postal operator, compliance adviser, or counsel.',
    },
  ] satisfies FaqItem[],
}

export function makeUsPostalInformalEntryChinaMailShipmentsArticleMetadata(): Metadata {
  const article = usPostalInformalEntryChinaMailShipmentsArticle

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

export function makeUsPostalInformalEntryChinaMailShipmentsArticleJsonLd() {
  return [
    makeArticleJsonLd(usPostalInformalEntryChinaMailShipmentsArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'U.S. postal informal entry checklist for China mail shipments',
      itemListElement: usPostalInformalEntryChinaMailShipmentsArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(usPostalInformalEntryChinaMailShipmentsArticle.faqs),
  ]
}
