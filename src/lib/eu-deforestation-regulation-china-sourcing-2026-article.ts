import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  euBatteryRegulationChinaArticleHref,
  euDeforestationRegulationChinaArticleHref,
  euGpsrLabelCheckChinaArticleHref,
  euPpwrPackagingCheckChinaArticleHref,
  huangSourcingCheckScopeArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  supplierVerificationChecklistHref,
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

export const euDeforestationRegulationChinaArticle = {
  href: euDeforestationRegulationChinaArticleHref,
  title:
    'EU Deforestation Regulation China Sourcing: 2026 Supplier Evidence Guide',
  metaTitle: 'EU Deforestation Regulation China Sourcing: 2026 Guide',
  metaDescription:
    'EU Deforestation Regulation China sourcing guide for 2026: practical EUDR product scope, supplier traceability, geolocation, legality, and importer handoff checks before shipment.',
  publishedDate: 'June 29, 2026',
  publishedDateIso: '2026-06-29T09:00:00-04:00',
  h1: 'EU Deforestation Regulation Evidence Check for China Sourcing in 2026',
  eyebrow: 'EUDR - supplier evidence - China shipment readiness',
  image: {
    alt: 'China-side EUDR evidence check for wood, rubber, paper, and supplier traceability documents before EU-bound shipment',
    height: 900,
    src: '/images/eu-deforestation-regulation-china-sourcing-2026.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/eu-deforestation-regulation-china-sourcing-2026.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/eu-deforestation-regulation-china-sourcing-2026-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/eu-deforestation-regulation-china-sourcing-2026-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'The EU Deforestation Regulation is now a current 2026 supplier-evidence issue for EU-bound products sourced through China. The European Commission states that the amended entry into application is December 30, 2026 for large and medium operators, June 30, 2027 for micro and small operators, and December 30, 2026 for micro and small operators already covered by the EU Timber Regulation.',
  answerSummary:
    'Before deposit, final payment, or forwarder pickup, buyers should confirm whether the exact product is in EUDR scope, who owns the EU due-diligence statement, and whether supplier traceability, geolocation, legality, country-risk, invoice, packing, and product evidence can be tied to the goods being shipped. Huang Sourcing can organize China-side supplier and shipment evidence, but EUDR applicability, CN code interpretation, due diligence, risk assessment, geolocation validation, and legal compliance remain with the EU operator, trader, importer, marketplace, adviser, or competent specialist.',
  primaryCta: {
    label: 'Check EUDR Evidence Before Shipment',
  },
  secondaryCta: {
    href: '#eudr-checklist',
    label: 'See EUDR Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side EU Deforestation Regulation evidence check before payment or shipment.

Product / SKU count:
Possible EUDR material: wood / paper / rubber / leather / cocoa / coffee / palm / soy:
Supplier name and location:
EU destination country or marketplace:
Known CN / HS code:
Supplier traceability files available:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#eudr-checklist', label: 'EUDR checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#product-scope', label: 'Product scope' },
    { href: '#supplier-chain', label: 'Supplier chain' },
    { href: '#geolocation-legality', label: 'Geolocation and legality' },
    { href: '#china-risk', label: 'China risk category' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Confirm whether the exact product and CN or HS code are listed in EUDR Annex I before treating the shipment as in scope',
    'Map covered commodity exposure: cattle and leather, cocoa, coffee, oil palm, rubber, soy, wood, and covered derived products',
    'Name the EU-side owner of EUDR due diligence, simplified declaration, marketplace handoff, customs data, and release approval',
    'Collect traceability beyond the Chinese final factory when the relevant commodity was grown, harvested, raised, milled, or processed elsewhere',
    'Ask for plot or production-area geolocation, producer names, legal harvest or production records, species, batch, invoice, and chain-of-custody evidence',
    'Treat China low-risk classification as a risk input, not as proof that every material origin, supplier document, or shipment is ready',
    'Compare quote, product spec, bill of materials, supplier declaration, commercial invoice, packing list, carton labels, and product photos for the same SKU',
    'Pause payment or pickup when scope, origin, legality, geolocation, supplier files, or the EU responsible party cannot be reconciled before goods leave China',
  ],
  checkGroups: [
    {
      title: 'Product scope',
      items: [
        'Confirm the exact product, material composition, CN or HS code, and whether the relevant product is listed in EUDR Annex I',
        'Separate finished goods, accessories, packaging sold as a product, and ordinary shipment packaging because EUDR scope depends on the listed product',
      ],
    },
    {
      title: 'Traceability file',
      items: [
        'Identify the relevant commodity origin, producer, mill, processor, trader, final Chinese factory, exporter, and any batch or lot links',
        'Collect geolocation, country of production, legality records, supplier declarations, certificates, invoices, and chain-of-custody documents by SKU',
      ],
    },
    {
      title: 'Shipment consistency',
      items: [
        'Compare product photos, labels, cartons, packing lists, invoices, purchase orders, material specs, and supplier files before final payment',
        'Flag mixed species, mixed rubber sources, mixed leather lots, old declarations, relabelled stock, and document names that do not match the packed goods',
      ],
    },
    {
      title: 'EU handoff',
      items: [
        'Confirm who will submit or rely on the due-diligence statement, simplified declaration, or downstream reference before shipment release',
        'Escalate CN code, EUDR scope, risk assessment, satellite or geolocation validation, and legal conclusions to qualified EU-side owners',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why EUDR is a current 2026 China sourcing issue',
      paragraphs: [
        'The EUDR has been in force since June 29, 2023, but the amended application dates now make 2026 the evidence-preparation year. EU official pages updated in 2026 point businesses to new guidance, FAQs, supply-chain infographics, an information system, and a country benchmarking list.',
        'For China-sourced goods, the commercial risk starts before the legal deadline. Furniture, paper products, rubber goods, leather goods, or other covered products may already be sampled, quoted, produced, packed, or shipped on lead times that collide with EU buyer preparation. If supplier evidence is vague now, the buyer may lose payment leverage before the EU importer finishes its due-diligence file.',
      ],
      bullets: [
        'The current official application dates are December 30, 2026 and June 30, 2027, depending on role and company size',
        'May 2026 EU guidance and FAQ materials make implementation details active for buyers and suppliers now',
        'Non-EU suppliers may still be asked for origin, geolocation, and legality information to support EU customers',
        'China-side evidence should be organized before final payment or pickup, while correction is still practical',
      ],
    },
    {
      id: 'product-scope',
      title: 'Start with product scope, not a generic supplier promise',
      paragraphs: [
        'EUDR does not apply to every shipment that has cardboard, wood, rubber, or leather somewhere in it. Scope depends on the relevant commodities and products listed in Annex I, usually tied to product descriptions and CN codes. A wooden furniture shipment, natural rubber product, leather item, paper product, coffee product, cocoa product, or palm-derived product can raise different questions from ordinary protective packaging around an unrelated product.',
        'The buyer should separate the exact SKU, material composition, product code, and EU role before asking a Chinese supplier for documents. Otherwise the supplier may send a generic FSC certificate, a vague recycled-paper note, or an export HS code that does not answer the EU operator\'s EUDR question.',
      ],
      bullets: [
        'Create a SKU-level list with product name, material, CN or HS code, supplier, factory, and EU destination',
        'Separate natural rubber from synthetic rubber, solid wood from MDF or paper components, and leather from PU or textile substitutes',
        'Do not assume ordinary export packaging creates EUDR scope for the underlying product without checking the listed product code',
        'Have the EU importer, marketplace, customs adviser, or compliance owner confirm the legal scope decision',
      ],
    },
    {
      id: 'supplier-chain',
      title: 'The final Chinese factory may not be the commodity origin',
      paragraphs: [
        'Many China suppliers are assemblers, finishers, packers, traders, or exporters rather than the original producer of the relevant commodity. A Chinese furniture factory may buy boards from one supplier, veneer from another, and carton inserts from another. A rubber goods factory may use natural rubber compound sourced through processors outside China. A leather-goods supplier may buy hides, finished leather, or components through several intermediaries.',
        'A useful EUDR evidence check therefore follows the material chain, not only the final factory name. The China-side role is to collect the practical trail: supplier names, batch records, invoices, mill or processor documents, species, rubber type, country of production, and any available chain-of-custody evidence that the EU-side owner can evaluate.',
      ],
      bullets: [
        'Ask the final supplier to identify upstream producers, processors, mills, tanneries, board suppliers, compounders, or traders',
        'Tie each upstream document to the exact purchase order, SKU, batch, lot, or carton records being shipped',
        'Flag documents that describe a company capability but not the actual material in the order',
        'Treat late material substitutions as a new evidence review before pickup',
      ],
    },
    {
      id: 'geolocation-legality',
      title: 'Geolocation and legality evidence should be preserved early',
      paragraphs: [
        'EU summaries explain that operators must trace relevant products back to the plot of land where the commodity was produced and declare due diligence. The regulation also uses a December 31, 2020 cut-off date for deforestation and forest degradation. For buyers, this means supplier documents need to be specific enough for the EU-side owner to review, not just reassuring.',
        'A China-side report cannot validate satellite data or decide whether a plot is legally compliant. It can, however, show whether the supplier provided coordinates, producer names, country of production, legal harvest or production records, species or material details, certificate numbers, invoices, and batch links before the goods shipped.',
      ],
      bullets: [
        'Collect geolocation evidence in the format requested by the EU-side compliance owner',
        'Keep legal harvest, land-use, concession, farm, mill, processor, and export records with the SKU file',
        'Check whether certificate names, scope, validity dates, material type, and supplier names match the actual order',
        'Separate visible document completeness from legal sufficiency, which belongs to specialists',
      ],
    },
    {
      id: 'china-risk',
      title: 'China low-risk classification does not remove the evidence job',
      paragraphs: [
        'The European Commission country classification list places China in the low-risk category. That can affect due-diligence obligations and authority checks, but it is not the same as proof that a shipment is out of scope, that every material originated in China, or that every upstream country is low risk.',
        'Buyers should be careful with blended or imported inputs. If covered wood, rubber, leather, cocoa, coffee, soy, or palm-derived materials entered the Chinese supply chain from another country, the evidence file needs to reflect the real production origin and the EU-side owner needs to assess the correct risk context.',
      ],
      bullets: [
        'Record country of production separately from country of final assembly, invoice issuer, shipper, or export route',
        'Check whether upstream countries are low, standard, or high risk under the current EU list',
        'Do not rely on a Chinese export address when the covered commodity was grown, raised, harvested, or processed elsewhere',
        'Reconfirm country-risk and due-diligence instructions close to shipment because official lists and guidance can change',
      ],
    },
    {
      id: 'shipment-paperwork',
      title: 'Shipment paperwork should match the EUDR evidence file',
      paragraphs: [
        'The clean file is boring: product description, material composition, CN or HS code, quote, PO, PI, commercial invoice, packing list, carton labels, product photos, supplier declaration, traceability documents, and EU release rule all describe the same goods.',
        'When those records do not line up, buyers should turn the mismatch into a decision before payment or pickup. The options are correction, re-check, split shipment, hold payment, request specialist review, or release with named responsibility and documented residual risk.',
      ],
      bullets: [
        'Keep one evidence folder per SKU, material version, supplier lot, and shipment lot',
        'Photograph product labels, material labels, cartons, and packaging that connect the physical goods to the documents',
        'Document supplier corrections instead of relying on chat messages after goods leave the factory',
        'Name who approved release if any scope, origin, legality, or traceability gap remains',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Product scope is clear',
      evidence:
        'SKU, material composition, CN or HS code, Annex I review, product photos, quote, and EU destination are documented.',
      buyerDecision:
        'Proceed with EUDR evidence collection, rule the product out of scope with qualified owner approval, or pause until scope is confirmed.',
    },
    {
      riskNode: 'Traceability reaches beyond final factory',
      evidence:
        'Supplier, final factory, upstream producer, processor, mill, tannery, board supplier, compounder, country of production, and lot links are recorded where relevant.',
      buyerDecision:
        'Request missing upstream records, split risky SKUs, hold payment, or escalate before the shipment leaves China.',
    },
    {
      riskNode: 'Geolocation and legality file exists',
      evidence:
        'Coordinates or production-area data, legal harvest or production records, certificate details, invoices, and batch references are tied to the actual goods.',
      buyerDecision:
        'Send to the EU-side due-diligence owner for review; do not treat generic certificates or supplier assurances as automatic release approval.',
    },
    {
      riskNode: 'Country risk and origin are reconciled',
      evidence:
        'Country of production, country of final assembly, route, shipper, exporter, and current EU risk classification are separated in the file.',
      buyerDecision:
        'Use the correct risk context for each material origin and re-check when suppliers change inputs or countries.',
    },
    {
      riskNode: 'EU owner is named',
      evidence:
        'Importer, operator, trader, marketplace, adviser, or authorised representative has accepted responsibility for EUDR scope, due diligence, declarations, and release.',
      buyerDecision:
        'Release only after the responsible party accepts the evidence package or documents the residual risk decision.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official European Commission EUDR overview, Green Forum implementation hub, EUR-Lex legislative summary, May 2026 FAQ and guidance pages, country classification list, and EU Publications Office supply-chain resources current to June 2026.',
    'Buyer-provided product list, material composition, CN or HS notes, supplier quote, PO, PI, commercial invoice draft, packing list draft, approved artwork, release rules, and EU-side due-diligence instructions.',
    'Physical product, material, label, carton, factory, supplier, upstream document, traceability, and shipment evidence collected or observed in China before payment or pickup.',
    'Specialist guidance from the EU operator, trader, importer, marketplace, customs adviser, sustainability adviser, lawyer, certification body, lab, satellite/geolocation reviewer, or other responsible compliance owner when conclusions exceed visible and document evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en',
      label: 'European Commission - Regulation on Deforestation-free Products',
      note: 'Official Commission overview with objectives, covered commodity context, amended application dates, implementation resources, and country benchmarking links.',
    },
    {
      href: 'https://green-forum.ec.europa.eu/nature-and-biodiversity/deforestation-regulation-implementation_en',
      label: 'European Commission Green Forum - EUDR implementation',
      note: 'Official implementation hub explaining 2026 practical resources, covered commodities, non-EU supplier information requests, guidance, FAQs, and supply-chain tools.',
    },
    {
      href: 'https://eur-lex.europa.eu/EN/legal-content/summary/fighting-deforestation-and-forest-degradation.html',
      label: 'EUR-Lex - Fighting deforestation and forest degradation',
      note: 'Official EU legislation summary covering scope, due diligence, plot traceability, cut-off date, information system, penalties, and current application dates.',
    },
    {
      href: 'https://environment.ec.europa.eu/publications/faq-eudr-implementation_en',
      label: 'European Commission - 5th FAQ on EUDR implementation',
      note: 'May 2026 official FAQ publication for stakeholder questions on traceability, geolocation, product scope, roles, due diligence, information system, timelines, and penalties.',
    },
    {
      href: 'https://green-forum.ec.europa.eu/publications/guidance-document-regulation-eu-20231115-deforestation-free-products_en',
      label: 'European Commission - 2026 EUDR guidance document',
      note: 'May 2026 official guidance page explaining definitions, roles, timelines, product and activity coverage, due diligence, certification, verification, and legality context.',
    },
    {
      href: 'https://green-forum.ec.europa.eu/nature-and-biodiversity/deforestation-regulation-implementation/eudr-cooperation-and-partnerships/country-classification-list_en',
      label: 'European Commission - EUDR country classification list',
      note: 'Official benchmarking list showing low, standard, and high risk categories, including China as low risk and several relevant upstream sourcing countries as standard or high risk.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Product list by SKU, product photos, material composition, CN or HS code notes, EU destination country, marketplace, importer, and expected ship date',
    'Supplier English name, Chinese name, factory or pickup address, exporter, shipper, invoice issuer, and any trading-company or subcontractor details',
    'Bill of materials for wood, paper, natural rubber, leather, cocoa, coffee, palm, soy, or other possible EUDR-relevant content',
    'Upstream supplier, producer, processor, mill, tannery, board supplier, compounder, batch, lot, invoice, and chain-of-custody documents',
    'Geolocation, country of production, legal harvest or production records, species or material details, certificate numbers, validity dates, and supplier declarations',
    'Quote, PO, PI, commercial invoice draft, packing list draft, carton labels, product labels, packaging files, and any correction history',
    'EU-side release rules: who owns EUDR scope, due diligence, due-diligence statement, simplified declaration, marketplace upload, customs data, and final shipment approval',
  ],
  redFlags: [
    'Supplier says the product is China origin but cannot identify where the relevant wood, natural rubber, leather, paper, cocoa, coffee, palm, or soy input was produced',
    'A certificate or declaration names a company but does not connect to the actual SKU, batch, lot, invoice, species, material, or shipment',
    'The buyer has not confirmed whether the product is listed in EUDR Annex I or which EU party owns the due-diligence decision',
    'Product description, CN or HS code, material composition, invoice wording, packing list, carton labels, and supplier documents do not match',
    'Supplier mixes species, boards, rubber compounds, leather lots, paper grades, or country origins under one vague invoice line',
    'Final factory refuses upstream producer or processor details and offers only a broad sustainability statement',
    'China is treated as the only origin even though the covered commodity may have been produced, grown, raised, harvested, or processed elsewhere',
    'No one has approved what should block deposit, final payment, pickup, or shipment release when EUDR evidence is incomplete',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible supplier, product, material, carton, label, factory, shipment, and document evidence against buyer-provided EUDR reference files in China',
    'Huang Sourcing does not decide EUDR applicability, CN code coverage, due-diligence sufficiency, risk assessment, risk mitigation, customs treatment, legal compliance, or market access',
    'A China-side evidence check cannot validate satellite imagery, prove geolocation accuracy, guarantee legality of harvest or production, submit due-diligence statements, or act as an EU operator or trader',
    'Certificates, audits, low-risk country status, supplier declarations, and chain-of-custody documents are evidence inputs, not automatic proof of legal sufficiency',
    'Supplier obstruction, missing upstream records, translated documents, mixed lots, late substitutions, sealed cartons, or incomplete buyer instructions can limit report confidence',
    'EUDR guidance, country classifications, Annex I scope, delegated acts, national enforcement, marketplace rules, and buyer responsibilities can change, so the responsible EU-side owner should reconfirm instructions before shipment release',
  ],
  relatedLinks: [
    {
      href: supplierVerificationChecklistHref,
      label: 'Supplier verification China checklist',
      note: 'Start here when the supplier identity, quote, and payment-risk file still needs basic verification.',
    },
    {
      href: uflpaChinaSupplierCheckArticleHref,
      label: 'UFLPA China supplier check',
      note: 'Use this when supplier-chain evidence, forced-labor due diligence, or importer handoff are also part of the risk review.',
    },
    {
      href: euPpwrPackagingCheckChinaArticleHref,
      label: 'EU PPWR packaging check',
      note: 'Review packaging material, label, declaration, and importer-handoff evidence for EU-bound shipments.',
    },
    {
      href: euBatteryRegulationChinaArticleHref,
      label: 'EU Battery Regulation check',
      note: 'Use when batteries, QR plans, labels, declarations, and technical files also need China-side evidence.',
    },
    {
      href: euGpsrLabelCheckChinaArticleHref,
      label: 'EU GPSR label check',
      note: 'Check responsible-person, manufacturer, importer, warnings, and language evidence on consumer products.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Compare actual product labels, cartons, packaging, and invoice wording before balance payment.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Turn product, supplier, material, and shipment evidence into a decision-ready buyer report.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control in China manufacturing plan',
      note: 'Build a practical order-control plan before production, inspection, and release decisions.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before China inspection',
      note: 'Prepare supplier files, photos, labels, documents, and release rules before the China-side check.',
    },
    {
      href: huangSourcingCheckScopeArticleHref,
      label: 'Huang Sourcing check scope',
      note: 'Confirm which questions fit a China-side evidence check and which require qualified specialists.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What is an EUDR evidence check for China sourcing?',
      answer:
        'It is a practical supplier and shipment evidence review before payment or pickup. The check organizes product scope, material composition, supplier chain, geolocation, legality documents, country-risk context, invoice wording, packing evidence, and EU handoff records for the buyer and responsible EU-side compliance owner.',
    },
    {
      question: 'Does EUDR apply to every China shipment with cardboard or wood packaging?',
      answer:
        'No. Scope depends on the relevant commodities and products listed in Annex I, usually tied to product descriptions and CN codes. Ordinary protective packaging around an unrelated product should not be treated the same way as a listed product without qualified scope review.',
    },
    {
      question: 'Is China low risk under the EUDR country classification list?',
      answer:
        'Yes, the European Commission country classification list places China in the low-risk category. Buyers should still document actual material origin because a Chinese final factory may use covered inputs produced in another country, and low-risk status does not remove the need for a coherent evidence file.',
    },
    {
      question: 'Can a Chinese supplier handle EUDR compliance for the buyer?',
      answer:
        'A Chinese supplier can provide product, origin, geolocation, legality, certificate, invoice, and traceability evidence. Unless the supplier places products on the EU market, the EU-side operator, trader, importer, marketplace, authorised representative, or adviser normally owns regulated EUDR decisions and filings.',
    },
    {
      question: 'Are FSC or other certificates enough for EUDR compliance?',
      answer:
        'Treat certificates as evidence inputs, not automatic approval. The buyer still needs to confirm scope, product match, certificate scope, validity, supplier names, batch links, geolocation, legality evidence, and the responsible EU-side due-diligence decision.',
    },
    {
      question: 'When should buyers check EUDR evidence?',
      answer:
        'Check before deposit when EUDR scope or material origin may affect supplier selection, and again before final payment or forwarder pickup when the actual product, material, lot, invoice, or packing records can be photographed and corrected in China.',
    },
  ] satisfies FaqItem[],
}

export function makeEuDeforestationRegulationChinaArticleMetadata(): Metadata {
  const article = euDeforestationRegulationChinaArticle

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

export function makeEuDeforestationRegulationChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(euDeforestationRegulationChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'EU Deforestation Regulation China sourcing evidence checklist',
      itemListElement: euDeforestationRegulationChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(euDeforestationRegulationChinaArticle.faqs),
  ]
}
