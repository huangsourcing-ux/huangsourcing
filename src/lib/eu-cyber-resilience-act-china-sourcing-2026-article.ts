import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  cpscEfilingChinaImportsArticleHref,
  euBatteryRegulationChinaArticleHref,
  euCyberResilienceActChinaArticleHref,
  euGpsrLabelCheckChinaArticleHref,
  euTextileDigitalProductPassportChinaArticleHref,
  huangSourcingCheckScopeArticleHref,
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

export const euCyberResilienceActChinaArticle = {
  href: euCyberResilienceActChinaArticleHref,
  title: 'EU Cyber Resilience Act China Sourcing: 2026 Product Evidence Checklist',
  metaTitle: 'EU Cyber Resilience Act China Sourcing 2026 Checklist',
  metaDescription:
    'EU Cyber Resilience Act China sourcing checklist for 2026: connected product identity, CE evidence, software version, support period, vulnerability reporting, and importer handoff.',
  publishedDate: 'July 8, 2026',
  publishedDateIso: '2026-07-08T09:00:00-04:00',
  h1: 'EU Cyber Resilience Act: What China-Sourced Connected Products Should Check in 2026',
  eyebrow: 'EU CRA - connected products - cybersecurity evidence',
  image: {
    alt: 'China-side connected product, label, firmware, test, and shipment evidence checked for EU Cyber Resilience Act readiness',
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
    'The EU Cyber Resilience Act is now a live planning issue for buyers sourcing connected products from China. The CRA entered into force on December 10, 2024, notification rules for conformity assessment bodies started applying on June 11, 2026, and manufacturer reporting obligations for actively exploited vulnerabilities and severe incidents start on September 11, 2026. The main product obligations apply from December 11, 2027.',
  answerSummary:
    'Before deposit, mass production, final payment, or pickup, EU-facing buyers should connect the exact device, software or firmware version, app or cloud dependency, model label, CE file, support-period statement, vulnerability-reporting owner, importer role, and user instructions to the shipment lot. Huang Sourcing can check China-side product, label, packaging, document, and visible version evidence, but CRA classification, cybersecurity engineering, conformity assessment, incident reporting, legal compliance, and market-surveillance responses remain with the manufacturer, EU importer, distributor, authorised representative, notified body, cybersecurity adviser, or counsel.',
  primaryCta: {
    label: 'Check Connected Product Evidence',
  },
  secondaryCta: {
    href: '#cra-checklist',
    label: 'See CRA Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side EU Cyber Resilience Act product evidence check before payment or shipment.

Product / SKU count:
Connected function:
Hardware model / firmware / app version:
Supplier / factory location:
EU importer / distributor / brand owner:
CE and technical-file status:
Labels, instructions, and packaging files:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#cra-checklist', label: 'CRA checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#scope', label: 'Product scope' },
    { href: '#product-identity', label: 'Product identity' },
    { href: '#ce-technical-file', label: 'CE and technical file' },
    { href: '#reporting-owner', label: 'Reporting owner' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Confirm whether the product has a direct or indirect data connection to a device or network, including app, Wi-Fi, Bluetooth, cloud, gateway, or remote-data-processing functions',
    'Name the manufacturer, EU importer, distributor, authorised representative, brand owner, and party responsible for CRA conformity and vulnerability reporting',
    'Tie model, SKU, hardware revision, firmware version, app version, cloud dependency, batch, serial, and packaging revision to the same shipment lot',
    'Check whether the product label, CE marking, importer details, manufacturer details, user instructions, and support-period statement match the buyer-approved file',
    'Ask whether the product is ordinary, important class I, important class II, or critical under the CRA and related implementing descriptions',
    'Confirm whether the supplier can provide cybersecurity risk-assessment, technical-documentation, vulnerability-handling, update, and support-period evidence',
    'Prepare for September 11, 2026 reporting workflows when a product already on the EU market has actively exploited vulnerabilities or severe incidents',
    'Hold payment or pickup when the supplier cannot reconcile device identity, software version, CE file, support period, or importer handoff before goods leave China',
  ],
  checkGroups: [
    {
      title: 'Connected-product scope',
      items: [
        'Device type, connected function, app, firmware, software, cloud service, remote data processing, network interface, and EU market exposure recorded by SKU',
        'Product category, ordinary or important-product status, exclusions, and conformity path confirmed by the responsible EU-side owner or specialist',
      ],
    },
    {
      title: 'Product identity and labels',
      items: [
        'Model, SKU, hardware revision, firmware version, app version, serial or batch identifier, carton count, packaging revision, and user manual tied to the same lot',
        'CE mark, manufacturer details, importer details, support-period statement, contact details, product identifier, warnings, and instructions checked against physical goods',
      ],
    },
    {
      title: 'Technical-file handoff',
      items: [
        'Cybersecurity risk-assessment status, EU declaration of conformity, technical documentation, conformity assessment plan, and applicable standards or notified-body notes gathered',
        'Security-update policy, vulnerability-handling process, component or software bill notes, default-password controls, and user-instruction files listed for specialist review',
      ],
    },
    {
      title: 'Reporting and release control',
      items: [
        'Manufacturer, EU importer, distributor, open-source steward, CSIRT, ENISA Single Reporting Platform owner, and incident-response contact named where relevant',
        'Written hold-release rule used when connected-product facts, version evidence, CE files, support-period statements, or reporting ownership remain unclear',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why the CRA is a current 2026 China sourcing issue',
      paragraphs: [
        'The European Commission says the CRA entered into force on December 10, 2024, with the main obligations applying from December 11, 2027. Two earlier dates make the topic current in 2026: provisions on the notification of conformity assessment bodies apply from June 11, 2026, and reporting obligations for actively exploited vulnerabilities and severe incidents apply from September 11, 2026.',
        'For China sourcing, the operational risk starts before those dates. Connected devices often move through a factory, trading company, app developer, firmware provider, cloud account, EU importer, and brand owner. If the buyer waits until goods are packed or already listed, it can be hard to confirm model identity, firmware version, CE evidence, support-period wording, user instructions, and the owner of vulnerability reporting.',
      ],
      bullets: [
        'The September 11, 2026 reporting date is close enough to affect products already on or headed to the EU market',
        'The June 11, 2026 conformity-assessment milestone means notified-body readiness is no longer abstract for higher-risk products',
        'EU-bound connected products need evidence tied to the exact shipment, not only a generic product brochure',
        'A China-side check can catch version and label mismatches before payment or pickup, while specialists decide CRA compliance',
      ],
    },
    {
      id: 'scope',
      title: 'Start with product scope and connected functionality',
      paragraphs: [
        'The CRA applies to hardware and software products with digital elements made available on the EU market when their intended purpose or reasonably foreseeable use includes a direct or indirect logical or physical data connection to a device or network. That can include final products and separately marketed components.',
        'For sourcing teams, the practical question is whether the product is merely an ordinary physical good or a connected product. A smart watch, baby monitor, camera, sensor, router, smart appliance, Bluetooth accessory, industrial controller, mobile app-connected device, or product with cloud-dependent functions needs a different evidence file than a passive product.',
      ],
      bullets: [
        'Record the connected feature in plain language so the EU-side owner can decide scope',
        'Separate product-safety, radio, battery, GPSR, and CRA questions instead of treating CE as one generic file',
        'Identify app, firmware, SDK, gateway, cloud, data-processing, or software-component dependencies before mass production',
        'Escalate scope questions to the manufacturer, EU importer, cybersecurity adviser, notified body, or counsel',
      ],
    },
    {
      id: 'product-identity',
      title: 'Product identity needs to include software and support evidence',
      paragraphs: [
        'A connected-product evidence check should not stop at carton count and visible defects. The same hardware shell can ship with a different chipset, firmware build, app pairing method, cloud endpoint, default credential behavior, or support-period statement. Those differences can change the file the EU-side owner needs to review.',
        'Before pickup, compare the buyer-approved record with the physical product and supplier files. The check should tie model number, hardware revision, firmware version, app version, product identifier, serial or batch details, labels, manual, insert, QR code, and packaging revision to the actual cartons being released.',
      ],
      bullets: [
        'Photograph device labels, retail packaging, QR codes, manual pages, and version screens where access is available',
        'Ask the supplier to identify firmware, app, and cloud dependencies in the order file',
        'Keep correction evidence when the supplier relabels, repacks, updates firmware, changes app instructions, or swaps components',
        'Treat unknown firmware or mixed product versions as a release decision, not a small paperwork issue',
      ],
    },
    {
      id: 'ce-technical-file',
      title: 'CE, technical documentation, and conformity path should be named early',
      paragraphs: [
        'The Commission summary explains that manufacturers need cybersecurity risk assessment, technical documentation, conformity assessment, EU declaration of conformity, CE marking, user information, and a support period. Importers and distributors also have verification and cooperation obligations before products are made available on the EU market.',
        'A sourcing agent cannot validate a cybersecurity risk assessment, but it can check whether the files named by the EU owner match the goods. The visible evidence should not contradict the conformity story: manufacturer name, importer name, product identifier, CE label, manual, support-period statement, software version, and packaging should describe the same product.',
      ],
      bullets: [
        'Request the EU-side conformity plan before printing labels or locking packaging',
        'Compare EU declaration, technical-file index, label artwork, user instructions, and product photos against production goods',
        'Flag products that may need third-party conformity assessment because they fall into important or critical categories',
        'Keep CRA evidence separate from ordinary electrical safety, EMC, radio, battery, and GPSR files even when they share labels',
      ],
    },
    {
      id: 'reporting-owner',
      title: 'Name the vulnerability-reporting owner before shipment',
      paragraphs: [
        'From September 11, 2026, manufacturers must report actively exploited vulnerabilities and severe incidents affecting products with digital elements. The Commission describes an early warning within 24 hours, a full notification within 72 hours, and later final reports. ENISA says the Single Reporting Platform will be used for mandatory reports from that date.',
        'The reporting workflow is not a warehouse task, but the China-side file can make it easier to know who owns it. The buyer should know which manufacturer, brand owner, EU importer, distributor, open-source steward, cybersecurity team, or adviser will handle vulnerability intake, supplier escalation, update records, and authority communication.',
      ],
      bullets: [
        'List the vulnerability or incident contact before EU shipment release',
        'Confirm whether products already on the EU market need reporting workflow preparation before September 11, 2026',
        'Keep supplier contacts for firmware, app, cloud, and component questions in the shipment file',
        'Do not let the factory ship if nobody can identify who owns CRA reporting, updates, or user communication',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Connected scope is clear',
      evidence:
        'Product function, network or device connection, app or cloud dependency, EU destination, and responsible EU-side owner are documented.',
      buyerDecision:
        'Proceed with the CRA evidence file, or ask specialists to decide scope before deposit, labels, or pickup.',
    },
    {
      riskNode: 'Device identity matches',
      evidence:
        'SKU, model, hardware revision, firmware version, app version, serial or batch details, labels, packaging, and cartons describe the same shipment lot.',
      buyerDecision:
        'Approve release after mismatches are corrected, or hold when version evidence is missing or mixed.',
    },
    {
      riskNode: 'CE and technical-file handoff is ready',
      evidence:
        'CE label, manufacturer and importer details, EU declaration, technical-file index, support-period statement, and user instructions are available for EU review.',
      buyerDecision:
        'Release only after the responsible party accepts the file and any notified-body or specialist questions are assigned.',
    },
    {
      riskNode: 'Reporting owner is named',
      evidence:
        'Manufacturer, EU importer, distributor, cybersecurity contact, supplier technical contact, and incident-reporting workflow owner are recorded.',
      buyerDecision:
        'Prepare shipment release, delay for workflow clarification, or escalate before products are placed on the EU market.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official European Commission Cyber Resilience Act pages, summary, implementation timeline, reporting guidance, and legal text current to July 8, 2026.',
    'Official ENISA Single Reporting Platform context for the September 11, 2026 vulnerability and incident reporting start date.',
    'Buyer-provided product list, supplier files, model and firmware notes, app or cloud details, label artwork, CE files, manuals, packaging records, and EU-side instructions.',
    'Physical device, label, packaging, version-screen, carton, instruction, QR-code, correction, and shipment evidence observed or collected in China.',
    'Specialist guidance from the manufacturer, EU importer, distributor, authorised representative, notified body, cybersecurity adviser, testing lab, marketplace, or counsel when conclusions exceed visible and document evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act',
      label: 'European Commission - Cyber Resilience Act',
      note: 'Official overview explaining CRA purpose, manufacturer obligations, CE marking, enforcement, and the December 2024, September 2026, and December 2027 dates.',
    },
    {
      href: 'https://digital-strategy.ec.europa.eu/en/policies/cra-summary',
      label: 'European Commission - CRA legal text summary',
      note: 'Official summary of product scope, products with digital elements, manufacturer, importer, distributor, conformity, technical-documentation, and support-period obligations.',
    },
    {
      href: 'https://digital-strategy.ec.europa.eu/en/factpages/cyber-resilience-act-implementation',
      label: 'European Commission - CRA implementation timeline',
      note: 'Official implementation page listing June 11, 2026 conformity-assessment-body notification provisions, September 11, 2026 reporting obligations, and December 11, 2027 full application.',
    },
    {
      href: 'https://digital-strategy.ec.europa.eu/en/policies/cra-reporting',
      label: 'European Commission - CRA reporting obligations',
      note: 'Official reporting guidance for actively exploited vulnerabilities, severe incidents, 24-hour and 72-hour reports, final reports, and the Single Reporting Platform.',
    },
    {
      href: 'https://www.enisa.europa.eu/topics/product-security-and-certification/single-reporting-platform-srp',
      label: 'ENISA - Single Reporting Platform',
      note: 'Official ENISA context for the Single Reporting Platform used for mandatory CRA vulnerability and incident reporting from September 11, 2026.',
    },
    {
      href: 'https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng',
      label: 'EUR-Lex - Regulation (EU) 2024/2847',
      note: 'Official Cyber Resilience Act legal text for product scope, economic-operator obligations, CE marking, conformity assessment, reporting, and enforcement.',
    },
    {
      href: 'https://eur-lex.europa.eu/eli/reg_impl/2025/2392/oj/eng',
      label: 'EUR-Lex - Implementing Regulation (EU) 2025/2392',
      note: 'Official implementing act describing categories of important and critical products with digital elements for CRA conformity assessment planning.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Product list by SKU, model, connected function, EU destination, importer or distributor, brand owner, order quantity, carton count, and shipment timeline',
    'Hardware revision, firmware version, app version, cloud or remote-processing dependency, gateway details, default credential notes, and update-policy notes',
    'Supplier English name, Chinese name, factory address, developer or firmware provider contact, app or cloud provider contact, exporter, invoice issuer, and pickup address',
    'Approved label artwork, CE mark file, product identifier, manufacturer details, importer details, support-period wording, warnings, manuals, inserts, and packaging files',
    'EU declaration of conformity, technical-file index, conformity assessment plan, standards or notified-body notes, cybersecurity risk-assessment status, and test or lab files if available',
    'Buyer, manufacturer, importer, distributor, authorised representative, notified body, cybersecurity adviser, or counsel instructions for what should block deposit, payment, pickup, or EU release',
  ],
  redFlags: [
    'Supplier cannot identify the firmware, app, hardware revision, cloud dependency, or support period for the exact goods being shipped',
    'The same SKU appears with mixed firmware, different labels, old manuals, different QR codes, or different app-pairing instructions',
    'CE files, technical-file references, EU declaration, packaging, and product labels use inconsistent manufacturer or importer details',
    'The supplier treats CRA as the same thing as ordinary electrical safety, EMC, radio, battery, or GPSR compliance without a separate cybersecurity owner',
    'A smart device depends on a third-party app, cloud account, SDK, gateway, or firmware provider but no responsible party is named',
    'The product may be an important or critical product with digital elements, but no one has checked the conformity assessment path',
    'No owner is named for actively exploited vulnerability reporting, severe incident reporting, firmware updates, user notification, or EU authority response',
    'Factory changes device components, firmware, labels, manuals, cloud endpoint, or packaging after the buyer approved the compliance file',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible product, label, packaging, carton, version, manual, supplier, and shipment evidence against buyer-provided references in China',
    'Huang Sourcing does not determine CRA legal scope, cybersecurity conformity, important or critical product status, notified-body requirements, or CE compliance',
    'A China-side evidence check cannot validate cybersecurity risk assessment, penetration testing, software bills, vulnerability handling, support-period sufficiency, or incident-reporting compliance',
    'The manufacturer, EU importer, distributor, authorised representative, notified body, cybersecurity adviser, testing lab, marketplace, or legal counsel remains responsible for regulated decisions',
    'Sealed cartons, inaccessible firmware screens, locked apps, unavailable cloud credentials, supplier refusals, translated files, mixed lots, or late product changes can limit report confidence',
    'CRA guidance, standards, implementing acts, notified-body availability, Single Reporting Platform procedures, market-surveillance practice, and product-specific obligations can change before full application',
  ],
  relatedLinks: [
    {
      href: euGpsrLabelCheckChinaArticleHref,
      label: 'EU GPSR label check for China sourcing',
      note: 'Use this when connected products also need responsible-person, warning, instruction, and online-listing evidence.',
    },
    {
      href: euBatteryRegulationChinaArticleHref,
      label: 'EU Battery Regulation China sourcing guide',
      note: 'Use this when connected devices include batteries, QR labels, CE files, or battery documentation.',
    },
    {
      href: euTextileDigitalProductPassportChinaArticleHref,
      label: 'EU textile Digital Product Passport supplier data check',
      note: 'Use this when digital product data, identifiers, or supply-chain records overlap with product-passport planning.',
    },
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'CPSC eFiling China imports 2026',
      note: 'Use this when the same connected consumer product is also shipping to the United States with certificate-data needs.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Use when CE marks, product identifiers, importer details, manuals, and carton evidence need a broader visual check.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control in China manufacturing plan',
      note: 'Build version control, label checks, and release rules into production instead of waiting until final inspection.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Organize product, label, document, and correction evidence into a decision-ready report.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before China inspection',
      note: 'Prepare model, firmware, app, label, manual, carton, and release-rule files before the onsite or desk check.',
    },
    {
      href: huangSourcingCheckScopeArticleHref,
      label: 'Huang Sourcing check scope',
      note: 'Separate visible China-side evidence checks from cybersecurity engineering, legal, and conformity decisions.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'When does the EU Cyber Resilience Act apply?',
      answer:
        'The CRA entered into force on December 10, 2024. Notification provisions for conformity assessment bodies apply from June 11, 2026, reporting obligations apply from September 11, 2026, and the main product obligations apply from December 11, 2027.',
    },
    {
      question: 'Does the CRA apply to China-sourced products?',
      answer:
        'It can. The CRA applies to products with digital elements made available on the EU market, regardless of where they are manufactured. The responsible EU-side party should decide scope with qualified support.',
    },
    {
      question: 'What is a product with digital elements?',
      answer:
        'The Commission describes it as a software or hardware product, including remote data processing solutions, that has a direct or indirect logical or physical data connection to a device or network.',
    },
    {
      question: 'What should buyers check before paying a China supplier?',
      answer:
        'Check connected function, model, hardware revision, firmware version, app version, cloud dependency, labels, CE file, manuals, support-period wording, technical-file handoff, and who owns EU reporting and updates.',
    },
    {
      question: 'Can Huang Sourcing certify CRA compliance?',
      answer:
        'No. Huang Sourcing can document China-side product, label, packaging, version, carton, and supplier evidence. CRA conformity, cybersecurity testing, reporting obligations, and legal compliance require responsible economic operators and qualified specialists.',
    },
    {
      question: 'Why check CRA evidence in 2026 if full application is in 2027?',
      answer:
        'The September 11, 2026 reporting obligation is near-term, and connected-product evidence is easier to fix before mass production, final payment, pickup, and EU market release. Waiting until 2027 can leave version, label, and technical-file gaps harder to correct.',
    },
  ] satisfies FaqItem[],
}

export function makeEuCyberResilienceActChinaArticleMetadata(): Metadata {
  const article = euCyberResilienceActChinaArticle

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

export function makeEuCyberResilienceActChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(euCyberResilienceActChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'EU Cyber Resilience Act China sourcing evidence checklist',
      itemListElement: euCyberResilienceActChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(euCyberResilienceActChinaArticle.faqs),
  ]
}
