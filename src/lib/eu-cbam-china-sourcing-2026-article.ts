import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  chinaSection301TariffCheckArticleHref,
  euBatteryRegulationChinaArticleHref,
  euCbamChinaSourcingArticleHref,
  euDeforestationRegulationChinaArticleHref,
  euGpsrLabelCheckChinaArticleHref,
  euPpwrPackagingCheckChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  supplierVerificationChecklistHref,
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

export const euCbamChinaSourcingArticle = {
  href: euCbamChinaSourcingArticleHref,
  title: 'EU CBAM China Sourcing: 2026 Supplier Data Guide',
  metaTitle: 'EU CBAM China Sourcing: 2026 Supplier Data Guide',
  metaDescription:
    'EU CBAM China sourcing guide for 2026: practical supplier, product, invoice, installation, emissions-data, verifier, and importer handoff checks before shipment.',
  publishedDate: 'June 30, 2026',
  publishedDateIso: '2026-06-30T09:00:00-04:00',
  h1: 'EU CBAM Supplier Data Check for China Sourcing in 2026',
  eyebrow: 'CBAM - supplier emissions data - EU shipment readiness',
  image: {
    alt: 'China-side CBAM supplier data, product identity, invoice, and shipment evidence check before EU-bound goods ship',
    height: 900,
    src: '/images/buyer-side-inspection-report.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/buyer-side-inspection-report.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/buyer-side-inspection-report-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/buyer-side-inspection-report-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'The EU Carbon Border Adjustment Mechanism is no longer a future reporting topic. The definitive CBAM regime started on January 1, 2026, customs systems now validate CBAM authorisation and threshold status, and the European Commission lists China among the main origin countries for early CBAM-covered imports.',
  answerSummary:
    'Before deposit, final payment, or pickup, EU buyers should confirm whether the exact product is in a CBAM sector, who owns the authorised declarant role, whether the 50-tonne threshold may be exceeded, and whether supplier installation, product, invoice, country-of-origin, emissions-data, verifier, default-value, and registry handoff records can be tied to the actual shipment. Huang Sourcing can organize China-side supplier and shipment evidence, but CBAM scope, authorisation, embedded-emissions calculation, verification, declaration, certificate surrender, customs entry, and legal compliance remain with the EU importer, indirect customs representative, verifier, adviser, broker, or counsel.',
  primaryCta: {
    label: 'Check CBAM Evidence Before Shipment',
  },
  secondaryCta: {
    href: '#cbam-checklist',
    label: 'See CBAM Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side EU CBAM supplier data check before payment or shipment.

Product / SKU count:
Possible CBAM sector: iron/steel / aluminium / cement / fertiliser / hydrogen / electricity:
Supplier and factory location:
EU importer or indirect representative:
Known CN / HS code:
Supplier emissions or installation files available:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#cbam-checklist', label: 'CBAM checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#product-scope', label: 'Product scope' },
    { href: '#supplier-data', label: 'Supplier data' },
    { href: '#registry-handoff', label: 'Registry handoff' },
    { href: '#verification-defaults', label: 'Verification' },
    { href: '#shipment-paperwork', label: 'Paperwork' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Confirm whether the exact product, CN code, and material are in a current CBAM sector before treating the shipment as covered',
    'Map iron and steel, aluminium, cement, fertilisers, hydrogen, and electricity exposure by SKU, component, bundle, and invoice line',
    'Name the EU-side authorised CBAM declarant, indirect customs representative, EORI owner, and release decision owner before final paperwork',
    'Track cumulative CBAM net mass against the 50-tonne threshold for the importer when applicable, instead of checking only one shipment',
    'Collect supplier installation name, operator details, production route, country of origin, production period, quantity, and product-level emissions data',
    'Confirm whether the importer plans to use actual verified emissions data, default values, or a mixed file and who will approve that choice',
    'Compare quote, product spec, supplier declaration, commercial invoice, packing list, carton labels, and product photos for the same CBAM goods',
    'Pause payment or pickup when product scope, origin, installation data, emissions file, verifier path, or EU registry handoff cannot be reconciled',
  ],
  checkGroups: [
    {
      title: 'Product and sector scope',
      items: [
        'Confirm product name, material, CN or HS code, sector, component set, SKU, invoice line, and whether the goods are in a current CBAM sector',
        'Separate covered metal components, spare parts, kits, mixed-material goods, accessories, and packaging so the EU-side owner can decide scope',
      ],
    },
    {
      title: 'Supplier installation data',
      items: [
        'Collect supplier, producer, installation, production route, country of origin, production period, process, and quantity records by SKU or invoice line',
        'Tie emissions statements, communication templates, O3CI registry records, and operator files to the actual production site and shipment lot',
      ],
    },
    {
      title: 'Importer handoff',
      items: [
        'Confirm authorised declarant status, EORI, indirect representative role, application reference, threshold tracking, customs release plan, and registry owner',
        'Package invoice, packing, quantity, origin, CN code, and supplier evidence so the EU team can prepare annual declaration and certificate decisions',
      ],
    },
    {
      title: 'Verification and release',
      items: [
        'Ask whether actual emissions data needs accredited CBAM verification or whether default values will be used for the buyer decision',
        'Flag late material substitutions, producer switches, invoice wording changes, unclear origin, or supplier refusal to provide installation data before pickup',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why CBAM is a current 2026 China sourcing issue',
      paragraphs: [
        'CBAM moved from transitional reporting into the definitive regime on January 1, 2026. The Commission says customs now enforces validation of CBAM authorisations before release for free circulation, including monitoring of the 50-tonne threshold. In the first January 2026 reporting window, China was listed among the main origin countries for CBAM-covered imports.',
        'For China sourcing, the practical issue starts before EU customs entry. A buyer may approve a supplier, pay a deposit, release balance payment, or let the forwarder collect goods before product scope, CN code, installation data, origin, mass, emissions data, and EU declarant responsibilities are clear. Once the goods leave China, supplier leverage and correction options drop quickly.',
      ],
      bullets: [
        'The definitive CBAM period is active in 2026, not only a future compliance project',
        'The first annual CBAM declaration and certificate surrender deadline for 2026 imports is September 30, 2027',
        'The single mass-based 50-tonne threshold must be tracked by the EU-side importer or indirect representative when applicable',
        'China-side evidence should be collected before payment or pickup, while supplier correction is still realistic',
      ],
    },
    {
      id: 'product-scope',
      title: 'Start with product scope and invoice lines',
      paragraphs: [
        'CBAM currently focuses on cement, iron and steel, aluminium, fertilisers, electricity, and hydrogen. For many Huang Sourcing buyers, the likely questions are not whole steel coils or aluminium billets only. They are finished or semi-finished goods with metal content, parts, fasteners, housings, brackets, profiles, components, kits, or mixed-material products where the EU team needs exact product and CN-code facts.',
        'The China-side file should separate what can be observed from what must be decided by specialists. Product photos, dimensions, material claims, model numbers, invoice wording, packing lists, quantity, net mass, country of origin, and supplier identity can be checked. CBAM legal scope, CN classification, and anti-circumvention analysis belong to the importer, customs representative, or qualified adviser.',
      ],
      bullets: [
        'Create a SKU-level table with product name, material, CN or HS code, unit weight, quantity, net mass, supplier, factory, and EU destination',
        'Keep covered components and non-covered components separate when a shipment contains kits or mixed-material goods',
        'Ask suppliers to revise vague invoice descriptions before final payment or pickup',
        'Record who approved release when product scope is still under EU-side review',
      ],
    },
    {
      id: 'supplier-data',
      title: 'Supplier emissions data must connect to the actual producer',
      paragraphs: [
        'CBAM data should not be a generic sustainability PDF. The EU-side owner may need production-route, installation, operator, embedded-emissions, electricity, precursor, process, and quantity records connected to the producer that actually made the covered goods. A trading company, export agent, or final packer may not own that data.',
        'A useful China-side check follows the production chain. It asks who made the covered goods, where the installation is, whether the supplier is willing to use the Commission communication template or registry pathway, and whether the data relates to the order being shipped rather than to an old sample, another buyer, or another plant.',
      ],
      bullets: [
        'Identify the actual production installation separately from the sales office, exporter, warehouse, and forwarder pickup point',
        'Tie supplier emissions statements to the product, production period, process route, quantity, and country of origin',
        'Flag files that describe company capability but not the actual goods in the shipment',
        'Treat producer changes, subcontracting, or late material substitutions as a new release decision',
      ],
    },
    {
      id: 'registry-handoff',
      title: 'Importer and registry handoff should be named before shipment',
      paragraphs: [
        'The Commission opened authorisation tools before the definitive regime and maintains registry modules for authorised declarants and non-EU installation operators. A China supplier may need the EU declarant EORI number or other instructions to share installation and emissions data through the relevant pathway. That cannot be solved reliably after goods are already moving.',
        'The buyer should name the owner for authorised CBAM declarant status, indirect representation, threshold tracking, registry access, declaration preparation, certificate purchase and surrender, and customs release decisions. Huang Sourcing can help package the China-side evidence, but it should not become the decision-maker for EU registry or customs obligations.',
      ],
      bullets: [
        'Confirm whether the importer or indirect customs representative is responsible for the CBAM account, application reference, and EORI handoff',
        'Keep threshold notes with the shipment file because one order may not show the importer annual picture',
        'Ask the supplier which installation operator, parent company, or producer should upload or share emissions data',
        'Preserve written EU-side release instructions when data gaps remain',
      ],
    },
    {
      id: 'verification-defaults',
      title: 'Actual emissions, default values, and verification are different decisions',
      paragraphs: [
        'In the definitive period, the EU importer may declare embedded emissions using actual verified data or official default values, depending on the facts and current rules. The Commission verification page explains that actual emissions data needs independent verification by accredited CBAM verifiers, and that the first CBAM verifiers are expected to receive accreditation around September 2026.',
        'That timing matters for supplier conversations in 2026. A supplier may claim actual emissions data is available, but the buyer still needs to know whether it is verified, who verified it, which installation it covers, whether it matches the product and production period, and whether the EU-side owner accepts it instead of default values.',
      ],
      bullets: [
        'Separate raw supplier data, completed communication templates, O3CI records, verification reports, and importer calculation files',
        'Check whether actual emissions data belongs to the same installation and goods being shipped',
        'Do not treat a supplier spreadsheet as verified CBAM data unless the EU-side owner confirms the verifier path',
        'Document when the importer intentionally uses default values because actual verified data is missing or not accepted',
      ],
    },
    {
      id: 'shipment-paperwork',
      title: 'Shipment paperwork should match the CBAM evidence file',
      paragraphs: [
        'The clean file is direct: product description, material, CN or HS code, supplier, production installation, country of origin, quantity, net mass, commercial invoice, packing list, carton labels, product photos, and emissions-data reference all describe the same goods.',
        'When those records do not match, buyers should turn the mismatch into a payment or pickup decision. The practical choices are correction, re-check, split shipment, hold payment, ask the EU team to use default values, request specialist review, or release with named responsibility and documented residual risk.',
      ],
      bullets: [
        'Keep one evidence folder per SKU, supplier, production installation, and shipment lot',
        'Photograph product labels, carton labels, pallet marks, and packing records that connect physical goods to documents',
        'Ask for corrected invoice and packing-list drafts before goods leave the supplier',
        'Record who approved release if product scope, origin, mass, or emissions-data gaps remain',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Product scope is controlled',
      evidence:
        'SKU, material, CN or HS code, sector, product photos, invoice line, quantity, net mass, country of origin, and EU destination are documented.',
      buyerDecision:
        'Proceed with CBAM data collection, rule the goods out of scope with qualified owner approval, or pause until scope is confirmed.',
    },
    {
      riskNode: 'Actual producer is identified',
      evidence:
        'Supplier, exporter, factory, production installation, operator, production route, production period, and shipment lot are separated in the file.',
      buyerDecision:
        'Request missing producer records, split uncertain SKUs, hold payment, or escalate before the shipment leaves China.',
    },
    {
      riskNode: 'Emissions path is clear',
      evidence:
        'Actual data, communication template, O3CI record, verification report, default-value plan, and importer calculation owner are named where relevant.',
      buyerDecision:
        'Send to the EU-side CBAM owner for approval; do not treat generic supplier files as automatic release evidence.',
    },
    {
      riskNode: 'Importer handoff is ready',
      evidence:
        'Authorised declarant, indirect representative, EORI, application reference, threshold owner, customs release owner, and registry workflow are named.',
      buyerDecision:
        'Approve pickup only when the responsible EU-side party confirms the file is enough for customs release and later declaration work.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official European Commission CBAM overview, definitive-regime, registry, reporting, sector, legislation, verification, and January 2026 operational source context current to June 30, 2026.',
    'Buyer-provided product list, SKU records, CN or HS notes, quote, purchase order, invoice draft, packing list, supplier declarations, importer instructions, and EU-side CBAM owner notes.',
    'Physical product, label, carton, packing, weight, supplier, factory, installation, correction, and shipment-record evidence observed or collected in China.',
    'Specialist guidance from the EU importer, authorised CBAM declarant, indirect customs representative, customs broker, verifier, emissions adviser, tax adviser, marketplace, or legal counsel when regulated decisions exceed visual evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en',
      label: 'European Commission - Carbon Border Adjustment Mechanism',
      note: 'Official CBAM overview explaining the definitive regime from 2026, the 50-tonne threshold, annual declarations, certificate surrender, carbon-price deduction, and current CBAM sectors.',
    },
    {
      href: 'https://taxation-customs.ec.europa.eu/news/cbam-successfully-entered-force-1-january-2026-2026-01-14_en',
      label: 'European Commission - CBAM entered into force on January 1, 2026',
      note: 'January 2026 Commission update noting customs validation, threshold monitoring, early authorisation activity, and China among the main origin countries for CBAM-covered imports.',
    },
    {
      href: 'https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism/cbam-legislation-and-guidance_en',
      label: 'European Commission - CBAM legislation and guidance',
      note: 'Official guidance hub for implementing acts, operational procedures, default values, benchmarks, importer guidance, non-EU producer guidance, and communication templates.',
    },
    {
      href: 'https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism/cbam-sectors_en',
      label: 'European Commission - CBAM sectors',
      note: 'Official sector page covering cement, aluminium, fertilisers, iron and steel, hydrogen, and electricity resources for importers and non-EU producers.',
    },
    {
      href: 'https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism/cbam-registry-and-reporting_en',
      label: 'European Commission - CBAM registry and reporting',
      note: 'Official registry page covering authorised declarant applications, AMM, non-EU installation operator modules, O3CI access, EORI sharing, and reporting resources.',
    },
    {
      href: 'https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism/cbam-verification_en',
      label: 'European Commission - CBAM emissions verification',
      note: 'Official verification page explaining actual verified emissions data, accredited CBAM verifiers, oversight, and the expected timing for first verifier accreditations.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Product list by SKU, model, material, component set, possible CBAM sector, CN or HS code, unit weight, quantity, net mass, carton count, and EU destination',
    'Supplier English and Chinese names, exporter, production factory, actual producer, installation name, operator details, production route, country of origin, and production period',
    'Quote, proforma invoice, purchase order, commercial invoice draft, packing list draft, product photos, label photos, carton photos, and any supplier product-page records',
    'Importer or indirect representative instructions for authorised declarant status, EORI, application reference, 50-tonne threshold tracking, registry handoff, customs release, and annual declaration owner',
    'Supplier communication templates, emissions statements, O3CI records, default-value plan, verification notes, verifier contact, and any calculation file accepted by the EU-side owner',
    'Payment deadline, pickup deadline, split-shipment plan, and written rules for which CBAM issues should block release versus be documented for EU-side review',
  ],
  redFlags: [
    'The supplier uses a trading company file but cannot identify the actual producer or production installation for covered goods',
    'The invoice description, CN or HS code, material, net mass, country of origin, or product photos do not match the buyer file',
    'The importer does not know who owns authorised declarant status, EORI handoff, threshold tracking, registry access, or customs release approval',
    'The supplier provides a generic sustainability certificate or emissions spreadsheet that is not tied to the product, installation, or production period',
    'Actual emissions data is claimed but there is no accepted verification path, verifier record, communication template, or importer calculation owner',
    'The supplier changes material, producer, factory, route, invoice wording, or packaging after the EU-side CBAM file has been prepared',
    'Goods are released because one shipment is under 50 tonnes even though the importer has not checked annual cumulative CBAM mass',
    'The supplier refuses product photos, packing-list drafts, weight evidence, installation identity, or correction photos before pickup',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible product, supplier, factory, carton, invoice, packing, weight, installation, and document evidence against buyer-provided references in China',
    'Huang Sourcing does not decide CBAM legal scope, CN classification, authorised declarant status, customs release, embedded-emissions methodology, verification, certificate surrender, or legal compliance',
    'A China-side evidence check cannot prove CBAM compliance, emissions accuracy, verifier accreditation, registry acceptance, customs acceptance, threshold status, certificate pricing, or market access',
    'The EU importer, authorised CBAM declarant, indirect customs representative, customs broker, verifier, emissions consultant, tax adviser, marketplace, or counsel remains responsible for regulated decisions',
    'Trading-company opacity, hidden subcontracting, missing installation records, old emissions data, mixed materials, sealed cartons, late substitutions, or supplier obstruction can limit report confidence',
    'CBAM rules, implementing acts, guidance, thresholds, default values, verification practice, registry functions, and sector scope can change, so time-sensitive instructions should be reconfirmed before shipment release',
  ],
  relatedLinks: [
    {
      href: chinaSection301TariffCheckArticleHref,
      label: 'China Section 301 tariff evidence guide',
      note: 'Use this when U.S.-bound goods also need broker-ready tariff, product, origin, and invoice evidence before payment.',
    },
    {
      href: euDeforestationRegulationChinaArticleHref,
      label: 'EU Deforestation Regulation China sourcing guide',
      note: 'Use this when EU-bound goods include wood, rubber, leather, paper, or other EUDR-risk materials.',
    },
    {
      href: euBatteryRegulationChinaArticleHref,
      label: 'EU Battery Regulation China sourcing guide',
      note: 'Use this when battery labels, QR plans, declarations, and supplier files also need shipment-readiness review.',
    },
    {
      href: euGpsrLabelCheckChinaArticleHref,
      label: 'EU GPSR label check guide',
      note: 'Use this when responsible-person details, warnings, product safety labels, and listing evidence need review.',
    },
    {
      href: euPpwrPackagingCheckChinaArticleHref,
      label: 'EU PPWR packaging check guide',
      note: 'Use this when the same EU shipment also needs packaging material, label, and importer handoff evidence.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Use this when visible labels, inserts, manuals, and carton marks affect final payment release.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Use this when payment or pickup depends on clear photo-backed evidence and decision notes.',
    },
    {
      href: supplierVerificationChecklistHref,
      label: 'Supplier verification checklist',
      note: 'Use this before deposit when the supplier identity, factory role, or quote owner is still unclear.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control China manufacturing plan',
      note: 'Build supplier-data and regulatory-document checks into production control instead of waiting until pickup.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before China inspection',
      note: 'Prepare SKU lists, labels, references, supplier files, carton records, and decision rules before inspection.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Does EU CBAM apply to products sourced from China?',
      answer:
        'It can. CBAM applies to covered goods imported into the EU in current sectors such as cement, iron and steel, aluminium, fertilisers, electricity, and hydrogen. Buyers should confirm product scope and CN classification with qualified EU-side owners, then check whether China-side goods and supplier data match that plan.',
    },
    {
      question: 'What changed for CBAM in 2026?',
      answer:
        'The definitive CBAM regime started on January 1, 2026. The Commission says customs now validates CBAM authorisation and threshold status before release for free circulation. For 2026 imports, the first annual declaration and certificate surrender deadline is September 30, 2027.',
    },
    {
      question: 'What is the 50-tonne CBAM threshold?',
      answer:
        'EU guidance describes a single mass-based threshold of 50 tonnes of CBAM goods for EU importers or indirect customs representatives, with important scope details and exceptions that the responsible EU-side party must confirm. A China-side shipment check should not replace importer-level annual threshold tracking.',
    },
    {
      question: 'What supplier data should be checked before shipment?',
      answer:
        'At minimum, buyers should collect product identity, CN or HS notes, quantity, net mass, origin, actual producer, installation details, production period, emissions-data path, verifier or default-value plan, invoice drafts, packing records, and EU importer handoff instructions.',
    },
    {
      question: 'Can Huang Sourcing confirm CBAM compliance?',
      answer:
        'No. Huang Sourcing can check China-side supplier, product, invoice, packing, carton, installation, and document evidence against buyer-provided references. CBAM legal scope, classification, authorisation, emissions calculation, verification, declarations, certificate surrender, and customs decisions remain with responsible EU-side parties.',
    },
    {
      question: 'Should buyers check CBAM evidence before final payment?',
      answer:
        'Yes, especially when goods include iron, steel, aluminium, cement, fertiliser, hydrogen, or other CBAM-risk lines. Once goods leave China, it is harder to get producer identity, installation records, corrected invoices, weight evidence, emissions files, or substitution explanations from the supplier.',
    },
  ] satisfies FaqItem[],
}

export function makeEuCbamChinaSourcingArticleMetadata(): Metadata {
  const article = euCbamChinaSourcingArticle

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

export function makeEuCbamChinaSourcingArticleJsonLd() {
  return [
    makeArticleJsonLd(euCbamChinaSourcingArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'EU CBAM supplier data checklist for China sourcing',
      itemListElement: euCbamChinaSourcingArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(euCbamChinaSourcingArticle.faqs),
  ]
}
