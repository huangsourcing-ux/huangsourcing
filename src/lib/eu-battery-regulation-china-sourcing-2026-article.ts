import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  cpscEfilingChinaImportsArticleHref,
  euBatteryRegulationChinaArticleHref,
  euGpsrLabelCheckChinaArticleHref,
  euPpwrPackagingCheckChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
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

export const euBatteryRegulationChinaArticle = {
  href: euBatteryRegulationChinaArticleHref,
  title: 'EU Battery Regulation Check for China Sourcing in 2026',
  metaTitle: 'EU Battery Regulation China Sourcing: 2026 Checklist',
  metaDescription:
    'EU Battery Regulation checklist for China sourcing in 2026: what buyers should verify before shipment, including labels, QR readiness, battery identity, supplier files, and importer handoff.',
  publishedDate: 'June 25, 2026',
  publishedDateIso: '2026-06-25T09:00:00-04:00',
  h1: 'EU Battery Regulation Check for China-Sourced Products in 2026',
  eyebrow: 'EU batteries - labels - QR and supplier file evidence',
  image: {
    alt: 'China-side battery label, QR code, and supplier document evidence check before EU-bound shipment',
    height: 900,
    src: '/images/eu-battery-regulation-china-sourcing-2026.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/eu-battery-regulation-china-sourcing-2026.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/eu-battery-regulation-china-sourcing-2026-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/eu-battery-regulation-china-sourcing-2026-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Battery compliance is becoming a shipment-readiness issue for EU-bound products sourced from China. Regulation (EU) 2023/1542 is already in force, battery labelling and QR requirements phase in around 2026 and 2027, and a May 2026 EU webinar focused on practical Digital Product Passport readiness for the battery value chain.',
  answerSummary:
    'Before final payment or pickup, buyers should connect each battery, battery pack, incorporated product, label, manual, test file, declaration, QR or passport plan, EPR note, and importer handoff record to the exact SKU being shipped. Huang Sourcing can document visible China-side evidence and supplier-file consistency, but EU conformity, battery passport setup, producer registration, due diligence, market access, and legal compliance remain with the importer and qualified partners.',
  primaryCta: {
    label: 'Check Battery Evidence Before Shipment',
  },
  secondaryCta: {
    href: '#battery-checklist',
    label: 'See Battery Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side EU Battery Regulation evidence check before shipment.

Product / SKU count:
Battery type or chemistry:
Battery supplier / factory:
EU destination country or marketplace:
Order quantity / cartons:
Label, QR, declaration, test, or passport files:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#battery-checklist', label: 'Battery checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#battery-scope', label: 'Battery scope' },
    { href: '#labels-qr', label: 'Labels and QR' },
    { href: '#supplier-files', label: 'Supplier files' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Identify every battery in the shipment: loose cells, battery packs, spare batteries, chargers, and batteries incorporated in finished products',
    'Classify the practical battery type for evidence collection: portable, LMT, SLI, industrial, electric-vehicle, or stationary storage context',
    'Match battery model, batch, serial, chemistry, capacity, manufacturer, place and date of manufacture, and product SKU to the supplier file',
    'Check visible CE marking, separate collection symbol, cadmium or lead marks, capacity information, warnings, and language versions against buyer-approved files',
    'Confirm whether QR code, battery passport, declaration of conformity, technical documentation, and end-of-life information are needed for the shipment plan',
    'Tie UN 38.3, safety data sheets, transport declarations, test reports, and battery management system data to the exact battery version being packed',
    'Separate visual evidence from legal conclusions: battery conformity, EPR registration, passport data, and due diligence belong to qualified owners',
    'Hold payment or pickup when battery identity, label version, QR plan, supplier files, or importer handoff cannot be tied to the actual packed goods',
  ],
  checkGroups: [
    {
      title: 'Battery identity',
      items: [
        'Map each battery, pack, replacement battery, and battery-containing product to SKU, model, carton, and packing-list records',
        'Record chemistry, capacity, voltage, battery category, batch or serial identifiers, manufacturer name, and manufacturing place when visible or documented',
      ],
    },
    {
      title: 'Labels and QR readiness',
      items: [
        'Check visible CE marking, separate collection symbol, heavy-metal marks, capacity labels, warnings, manuals, and destination-language text',
        'Confirm whether the buyer has approved QR, declaration, passport, and waste-battery information paths before final printing or shipment release',
      ],
    },
    {
      title: 'Supplier and test files',
      items: [
        'Compare supplier declarations, EU declaration drafts, technical documentation, UN 38.3, SDS, and test reports with the actual battery model',
        'Flag mismatched applicant names, manufacturer names, dates, chemistries, capacities, product photos, or old test files before pickup',
      ],
    },
    {
      title: 'Importer handoff',
      items: [
        'Confirm who owns EU conformity, producer registration, EPR, battery passport data, due diligence review, and marketplace uploads',
        'Package final evidence by SKU and battery version so the importer can make the legal and compliance decisions before goods leave China',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why the EU Battery Regulation is a current China sourcing issue',
      paragraphs: [
        'The EU Battery Regulation entered into force on August 17, 2023 and is being implemented in phases. In 2026, EU official activity is no longer just policy background: buyers are preparing for battery label, QR, documentation, and battery passport requirements that affect products already being designed, sampled, produced, or packed in China.',
        'The current sourcing risk is practical. A buyer may have one battery file, the supplier may pack a different battery version, and the EU importer may still be missing the evidence needed for conformity, producer responsibility, passport data, or marketplace review. That mismatch is much easier to document before final payment or forwarder pickup.',
      ],
      bullets: [
        'Battery evidence should be checked while cartons and supplier leverage are still in China',
        'A battery file is only useful when it matches the physical battery and product version being shipped',
        'QR and passport readiness depend on structured data, not only a printed code on packaging',
        'China-side evidence can show visible mismatches, but specialists decide legal sufficiency',
      ],
    },
    {
      id: 'battery-scope',
      title: 'Which batteries should buyers include in the check?',
      paragraphs: [
        'Start with the shipment, not the regulation category. List every loose battery, spare battery, battery pack, charger set, built-in battery, replaceable battery, and product variant that contains a battery. Many sourcing problems come from small differences between similar models, colors, capacities, or supplier substitutions.',
        'Then separate the evidence question by battery category. Portable batteries in consumer goods, LMT batteries in scooters or e-bikes, SLI batteries, industrial batteries above 2 kWh, EV batteries, and stationary storage systems can require different files, labels, test evidence, passport data, and importer decisions.',
      ],
      bullets: [
        'Photograph battery labels and product labels together when the battery is incorporated in a finished product',
        'Keep battery pack, cell, charger, manual, warning label, and carton evidence tied to the same SKU',
        'Record whether batteries are loose, installed, packed with equipment, or packed separately',
        'Treat supplier battery substitutions as a release decision, not a minor packing detail',
      ],
    },
    {
      id: 'labels-qr',
      title: 'How should labels, CE marking, and QR readiness be checked?',
      paragraphs: [
        'Article 13 includes phased label and marking requirements, including the separate collection symbol from August 18, 2025, general battery label information around August 18, 2026 or later depending on implementing specifications, and QR code marking from February 18, 2027. Buyers should avoid printing at the last minute without confirming the latest EU and marketplace instructions.',
        'A China-side check can compare visible marks against the buyer-approved label plan. That includes CE marking placement, battery category and identifying information, capacity, chemistry, manufacturing details, heavy-metal marks, warnings, manuals, QR placement, legibility, and whether the same information appears consistently on the battery, packaging, product manual, and supplier declaration.',
      ],
      bullets: [
        'Capture close-up photos of CE marks, collection symbols, Cd or Pb marks, capacity labels, warnings, and QR codes',
        'Check that small batteries with limited surface area still have the required information on packaging or accompanying documents when that route is used',
        'Scan QR samples when the buyer provides a live or staging destination, but do not treat a successful scan as legal approval',
        'Confirm that old packaging, old manuals, and old battery labels are not mixed into the EU-bound shipment',
      ],
    },
    {
      id: 'supplier-files',
      title: 'What supplier files should match the packed goods?',
      paragraphs: [
        'Battery files should be version-controlled. The EU declaration of conformity, technical documentation, label specimen, test reports, UN 38.3 summary, safety data sheet, transport declaration, battery management system evidence, and supplier declarations should use the same battery model, manufacturer, chemistry, voltage, capacity, date, and product relationship as the actual goods.',
        'This is where China-side evidence matters. If the supplier changed cells, battery packs, pack assembler, charger, casing, label artwork, manual, or production site, the buyer should know before shipment release. A report can show the mismatch and preserve evidence for the importer, lab, certification body, broker, marketplace, or legal adviser.',
      ],
      bullets: [
        'Compare applicant, manufacturer, factory, battery model, chemistry, capacity, product photo, and test date across every file',
        'Flag documents that cover only cells when the shipment uses a pack, or only a pack when the finished product changed',
        'Keep transport safety files separate from EU conformity evidence; both can matter, but they answer different questions',
        'Create one final evidence folder by SKU, battery version, packaging version, and carton records',
      ],
    },
    {
      id: 'importer-handoff',
      title: 'What should the EU importer receive before goods leave China?',
      paragraphs: [
        'The importer needs a clean handoff, not scattered chat attachments. The file set should connect product identity, battery identity, label artwork, QR or passport plan, declarations, technical files, test evidence, transport records, EPR or producer-responsibility notes, and correction records to the final shipment.',
        'This also prevents ownership confusion. Huang Sourcing can show whether the physical shipment matches the buyer-provided references, but the importer or responsible economic operator must decide conformity, registration, due diligence, passport data accuracy, and market placement.',
      ],
      bullets: [
        'Name the owner for EU conformity, producer registration, battery passport, due diligence, marketplace upload, and correction approval',
        'Confirm what evidence should block shipment versus what can be documented for later importer action',
        'Retain correction photos after relabeling, battery replacement, repacking, or manual changes',
        'Reconfirm time-sensitive instructions close to shipment because implementing acts and marketplace rules can change',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Battery identity is controlled',
      evidence:
        'Battery model, chemistry, capacity, manufacturer, batch or serial information, product SKU, and carton records match the supplier file and physical goods.',
      buyerDecision:
        'Proceed, request missing identity evidence, split affected SKUs, or hold release when the battery version cannot be confirmed.',
    },
    {
      riskNode: 'Labels and QR plan match the order',
      evidence:
        'CE marking, collection symbol, capacity label, heavy-metal marks, warnings, QR plan, manuals, packaging, and product labels follow the buyer-approved artwork.',
      buyerDecision:
        'Approve shipment, require relabeling, remove old packaging versions, or ask EU specialists to confirm label and QR sufficiency.',
    },
    {
      riskNode: 'Supplier files cover the actual battery',
      evidence:
        'Declarations, technical documentation, test reports, UN 38.3, SDS, and battery evidence use the same model, supplier, chemistry, and production version.',
      buyerDecision:
        'Release only when files and goods align, or involve lab, certification, transport, and legal partners before pickup.',
    },
    {
      riskNode: 'Importer handoff is ready',
      evidence:
        'EU conformity owner, producer registration or EPR owner, passport or QR data owner, due diligence owner, marketplace owner, and correction authority are named.',
      buyerDecision:
        'Approve pickup when the EU-side responsible team has enough structured evidence to make its compliance decisions.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official European Commission battery overview, Regulation (EU) 2023/1542, Regulation (EU) 2025/1561, and EU Digital Product Passport battery implementation context current to June 2026.',
    'Buyer-provided SKU list, battery specification, label artwork, QR or passport instructions, supplier declarations, technical files, test reports, manuals, and importer responsibility notes.',
    'Physical battery, product, packaging, manual, carton, opened-carton, correction, and shipment-record evidence observed or collected in China.',
    'Specialist guidance from the importer, responsible economic operator, producer responsibility organization, laboratory, certification body, battery passport provider, customs adviser, marketplace, or legal counsel when conformity decisions exceed visual evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://environment.ec.europa.eu/topics/waste-and-recycling/batteries_en',
      label: 'European Commission - Batteries overview',
      note: 'Official Commission page explaining the Battery Regulation background, lifecycle objective, implementation activity, and related EU battery rules.',
    },
    {
      href: 'https://eur-lex.europa.eu/eli/reg/2023/1542/oj/eng',
      label: 'EUR-Lex - Regulation (EU) 2023/1542',
      note: 'Official regulation text covering battery labelling, CE marking, importer obligations, technical documentation, QR codes, battery passport, and evidence duties.',
    },
    {
      href: 'https://single-market-economy.ec.europa.eu/batteries_en',
      label: 'European Commission - Batteries implementation timeline',
      note: 'Official Single Market page noting the February 2027 battery passport milestone and 2026-2027 implementation work.',
    },
    {
      href: 'https://eur-lex.europa.eu/eli/reg/2025/1561/oj/eng',
      label: 'EUR-Lex - Regulation (EU) 2025/1561',
      note: 'Official amendment postponing battery due diligence application to August 18, 2027 and aligning Commission due diligence guidance timing to July 26, 2026.',
    },
    {
      href: 'https://single-market-economy.ec.europa.eu/events/digital-product-passport-batteries-2026-05-27_en',
      label: 'European Commission - Battery Digital Product Passport webinar',
      note: 'May 2026 official webinar page covering DPP data requirements, industry readiness, implementation milestones, and SME preparation.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Product list, SKU list, model numbers, order quantity, carton count, packing list, and product photos for every battery-containing item',
    'Battery specification sheet, battery model, chemistry, capacity, voltage, cell or pack supplier, battery manufacturer, batch or serial data, and production date evidence',
    'Final battery label artwork, product label artwork, manual, warning text, QR destination, packaging files, and destination-language instructions',
    'EU declaration of conformity drafts, technical documentation, label specimen, supplier declarations, test reports, UN 38.3, SDS, and transport declarations',
    'Importer, producer, EPR, battery passport, due diligence, marketplace, broker, and legal owner notes for the EU destination',
    'Payment deadline, pickup deadline, and written rules for which battery issues should block release versus be documented for EU-side review',
  ],
  redFlags: [
    'The battery model, pack supplier, chemistry, capacity, or manufacturer changed after samples or test files were approved',
    'Supplier documents cover a similar battery but not the exact pack or battery-containing product being shipped',
    'CE marking, collection symbol, Cd or Pb marks, capacity, warnings, QR codes, manual text, and packaging artwork do not match the approved file',
    'Cartons contain mixed old and new battery labels, manuals, charger sets, or packaging versions',
    'The supplier cannot provide UN 38.3, SDS, transport declaration, technical documentation, or declaration files tied to the packed goods',
    'QR codes scan to a placeholder, wrong product, inactive page, or information that conflicts with the physical battery',
    'No one has accepted responsibility for EU conformity, producer registration, EPR, passport data, due diligence, or marketplace upload before shipment',
    'The supplier refuses battery close-ups, opened-carton checks, relabeling evidence, or correction photos before pickup',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible battery, label, QR, packaging, carton, supplier, and document evidence against buyer-provided references in China',
    'Huang Sourcing does not certify EU Battery Regulation compliance, act as a producer responsibility organization, register producers, create battery passports, authenticate lab reports, or provide legal advice',
    'A China-side evidence check cannot prove battery safety, conformity, CE validity, passport data accuracy, due diligence sufficiency, customs acceptance, marketplace approval, or transport acceptance',
    'The EU importer, responsible economic operator, marketplace seller, lab, certification body, battery passport provider, EPR provider, broker, or counsel remains responsible for regulated decisions',
    'Sealed cartons, hidden battery cells, missing files, late supplier substitutions, mixed production batches, or supplier obstruction can limit report confidence',
    'Battery rules, implementing acts, guidance, passport specifications, national practice, and marketplace requirements can change, so time-sensitive instructions should be reconfirmed before printing and before shipment release',
  ],
  relatedLinks: [
    {
      href: euGpsrLabelCheckChinaArticleHref,
      label: 'EU GPSR label check guide',
      note: 'Use this when product safety labels, responsible-person details, warnings, and listing evidence also need review.',
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
      href: cpscEfilingChinaImportsArticleHref,
      label: 'CPSC eFiling China imports checklist',
      note: 'Use this when U.S.-bound regulated consumer products also need certificate-data readiness before shipment.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Use this when the buyer needs photo-backed evidence for payment, pickup, or correction decisions.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control China manufacturing plan',
      note: 'Build battery evidence checks into production control instead of waiting until pickup.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before China inspection',
      note: 'Prepare SKU lists, labels, references, battery files, carton records, and decision rules before inspection.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Does the EU Battery Regulation apply to products sourced from China?',
      answer:
        'It can. The regulation applies to batteries placed on the EU market, including batteries incorporated in appliances, vehicles, or industrial products. The buyer should confirm applicability with qualified EU-side partners and then check whether the China-side goods and files match that plan.',
    },
    {
      question: 'What changed for battery labels and QR codes?',
      answer:
        'The regulation phases in battery labelling and marking requirements, including the separate collection symbol from August 18, 2025, broader battery label information around August 18, 2026 or later depending on implementing specifications, and QR code marking from February 18, 2027.',
    },
    {
      question: 'Which batteries need a battery passport?',
      answer:
        'From February 18, 2027, each LMT battery, each industrial battery with a capacity greater than 2 kWh, and each electric vehicle battery placed on the EU market or put into service must have a battery passport. Buyers should confirm category and data duties with qualified EU partners.',
    },
    {
      question: 'Can Huang Sourcing confirm EU Battery Regulation compliance?',
      answer:
        'No. Huang Sourcing can check visible battery labels, QR codes, packaging, cartons, supplier files, and correction evidence in China. EU conformity, battery passport setup, EPR, due diligence, market access, and legal compliance remain with the responsible EU-side parties.',
    },
    {
      question: 'Should buyers check battery evidence before final payment?',
      answer:
        'Yes, especially when the product contains lithium batteries, rechargeable packs, replaceable batteries, chargers, EU labels, QR codes, declarations, test reports, or transport files. Once goods leave China, battery replacement, relabeling, and repacking are usually slower and more expensive.',
    },
    {
      question: 'What are common battery sourcing red flags before shipment?',
      answer:
        'Common red flags include substituted battery packs, mismatched test reports, missing UN 38.3 or SDS files, old label artwork, mixed battery versions, QR codes pointing to the wrong data, and no named owner for EU conformity, EPR, passport, or due diligence responsibilities.',
    },
  ] satisfies FaqItem[],
}

export function makeEuBatteryRegulationChinaArticleMetadata(): Metadata {
  const article = euBatteryRegulationChinaArticle

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

export function makeEuBatteryRegulationChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(euBatteryRegulationChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'EU Battery Regulation evidence checklist for China sourcing',
      itemListElement: euBatteryRegulationChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(euBatteryRegulationChinaArticle.faqs),
  ]
}
