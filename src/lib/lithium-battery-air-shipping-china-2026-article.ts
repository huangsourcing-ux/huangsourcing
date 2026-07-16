import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  forwarderPickupChinaRisksArticleHref,
  lithiumBatteryAirShippingChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  preShipmentBeforePickupArticleHref,
  whatToSendBeforeChinaInspectionHref,
} from '@/lib/site-links'

type ArticleSection = { bullets?: string[]; id: string; paragraphs: string[]; title: string }
type CheckGroup = { items: string[]; title: string }
type DecisionRow = { buyerDecision: string; riskNode: string; whatToConfirm: string }
type FaqItem = { answer: string; question: string }
type RelatedLink = { href: string; label: string; note: string }
type SourceNote = { href: string; label: string; note: string }

export const lithiumBatteryAirShippingChinaArticle = {
  author: 'editorial-team' as const,
  href: lithiumBatteryAirShippingChinaArticleHref,
  title: 'Lithium Battery Air Shipping from China: 2026 Checklist',
  metaTitle: 'Lithium Battery Air Shipping from China: 2026 Guide',
  metaDescription:
    'Check lithium battery classification, 2026 state-of-charge rules, UN 38.3 evidence, packing, marks, and forwarder handoff before air shipping from China.',
  publishedDate: 'July 17, 2026',
  publishedDateIso: '2026-07-17T03:30:00+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Lithium Battery Air Shipping from China: 2026 Checklist',
  eyebrow: '2026 IATA change - battery evidence - air-cargo release',
  image: {
    alt: 'Editorial illustration of lithium battery packaging, carton marks, and a China-side air-shipment release checklist',
    height: 900,
    src: '/images/lithium-battery-air-shipping-china-2026.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/lithium-battery-air-shipping-china-2026.webp', width: 1600 },
    { height: 1200, src: '/images/lithium-battery-air-shipping-china-2026-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/lithium-battery-air-shipping-china-2026-1x1.webp', width: 1200 },
  ],
  intro:
    'Before a dangerous-goods forwarder collects a China-sourced product with lithium batteries, the buyer should freeze the exact battery configuration, obtain qualified classification and transport instructions, and connect those instructions to state-of-charge evidence, UN 38.3 records, physical packing, required marks, and the booked air route.',
  answerSummary:
    'The 2026 rule is not one blanket “30% for every device” instruction. IATA’s public guidance makes reduced state of charge mandatory for specified lithium-ion batteries packed with equipment under PI 966, while PI 967 batteries contained in equipment have a strong recommendation rather than the same mandate. Hold pickup until a qualified dangerous-goods partner confirms the classification and the China-side shipment matches the approved release file.',
  primaryCta: { label: 'Check Battery Shipment Before Pickup' },
  secondaryCta: { href: '#release-checklist', label: 'See 2026 Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side lithium battery air-shipment check before forwarder pickup.

Product / SKU count:
Battery chemistry and Wh rating:
Battery shipped alone / packed with / contained in equipment:
Air route and dangerous-goods forwarder:
UN 38.3 test summary and packing instruction:
Pickup and payment deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#classification', label: 'Classify the configuration' },
    { href: '#state-of-charge', label: '2026 state-of-charge rule' },
    { href: '#packing-handoff', label: 'Packing and handoff' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Freeze the exact cell or battery model, chemistry, Watt-hour rating, quantity, supplier, and product SKU before booking air freight',
    'Have a trained dangerous-goods party decide whether the shipment is battery alone, packed with equipment, or contained in equipment and select the applicable packing instruction',
    'Apply the 2026 state-of-charge requirement or recommendation to the correct configuration; do not copy a 30% rule from another shipment type',
    'Obtain the manufacturer or distributor UN 38.3 test summary and check that its model identity matches the battery in the order',
    'Compare approved terminal protection, inner packaging, cushioning, activation protection, outer carton, quantity, weight, marks, and labels with packed goods',
    'Confirm which dangerous-goods declaration, air-waybill statement, carrier approval, and operator variation the booked route requires',
    'Keep battery configuration, packing instruction, report references, carton IDs, photos, corrections, and release authority in one shipment file',
    'Hold balance payment or pickup when classification, SoC evidence, battery identity, packing, marks, documents, or carrier acceptance do not align',
  ],
  checkGroups: [
    {
      title: 'Battery and shipment identity',
      items: [
        'Chemistry, model, cell or battery, Watt-hour rating, quantity, net battery weight, manufacturer, and SKU',
        'Battery alone, packed with equipment, contained in equipment, or vehicle; air route, airline, forwarder, and destination',
      ],
    },
    {
      title: 'Qualified rule decision',
      items: [
        'UN number, proper shipping name, packing instruction, section, passenger or cargo-aircraft status, approvals, and operator variations',
        'Mandatory versus recommended state-of-charge treatment, measurement method, exception basis, and responsible dangerous-goods sign-off',
      ],
    },
    {
      title: 'Technical and physical evidence',
      items: [
        'UN 38.3 test summary, battery specification, change history, approved packing instruction, and current safety data supplied to the specialist',
        'Terminal protection, inner packaging, cushioning, activation protection, carton strength, weight, quantity, marks, labels, and packed condition',
      ],
    },
    {
      title: 'Booking and release control',
      items: [
        'Carrier acceptance, route, dangerous-goods declaration when required, air-waybill entry, emergency contact, pickup window, and handoff party',
        'Nonconformance list, segregated quantities, correction records, re-check result, buyer approval, and forwarder release instruction',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why lithium battery air-shipment evidence changed in 2026',
      paragraphs: [
        'IATA’s 2026 public battery guidance says that from January 1, 2026, lithium-ion batteries packed with equipment and certain battery-powered vehicles must be offered for air transport at a reduced state of charge unless the relevant state approvals apply. The document explains that lower state of charge reduces the potential for thermal runaway.',
        'The operational attention is current as well as regulatory. In an FAA article published in 2025, the agency said it had verified 38 lithium-battery events involving smoke, fire, or extreme heat through June 30 and recorded 89 events in the prior year. Those figures describe aviation events, not China supplier defect rates, but they explain why carriers and inspectors treat classification, packing, and declarations seriously.',
        'For a buyer, the practical decision is whether the exact cartons should be released to the dangerous-goods forwarder. A generic supplier statement, an old test file, or a battery photo is not a complete release basis when the shipment configuration or route has changed.',
      ],
      bullets: [
        'Use the current IATA guidance and the booked carrier’s instructions, not an old shipment template',
        'Separate what the dangerous-goods specialist decided from what the China-side check physically confirmed',
        'Reconfirm the release file after any battery, supplier, SKU, pack-out, quantity, route, airline, or forwarder change',
      ],
    },
    {
      id: 'classification',
      title: 'Is the battery alone, packed with equipment, or contained in equipment?',
      paragraphs: [
        'Start with the physical configuration because it changes the transport pathway. A lithium-ion battery shipped by itself is not the same as a spare battery packed in the same outer package as a device, and neither is the same as a battery installed in the device. The qualified shipper or dangerous-goods provider should assign the UN number, proper shipping name, packing instruction, section, aircraft limitations, documents, marks, and labels.',
        'The buyer-side evidence file should show the decision inputs: battery chemistry, Watt-hour rating, model, quantity, whether the equipment is in the same outer package, whether the battery is installed, and whether the item can activate in transit. China-side photos can show how the shipment is actually configured, but they do not replace trained classification.',
        'UN 38.3 traceability is another identity gate. IATA states that manufacturers and subsequent distributors of lithium cells and batteries must make a test summary available. Match the report’s battery type, manufacturer, model, and test reference to the purchased version, then send inconsistencies to the qualified party before release.',
      ],
      bullets: [
        'Do not treat an SDS as an automatic substitute for a UN 38.3 test summary or transport classification',
        'Do not reuse a packing instruction because the retail product looks similar',
        'Record installed batteries and spare batteries separately when one shipment contains both configurations',
        'Pause when the factory cannot identify the battery model or Watt-hour rating used in each SKU',
      ],
    },
    {
      id: 'state-of-charge',
      title: 'When does the 2026 30% state-of-charge rule apply?',
      paragraphs: [
        'For lithium-ion batteries packed with equipment under PI 966 Section I, IATA’s 2026 guidance says cells and batteries must be offered at no more than 30% of rated capacity. Under PI 966 Section II, the same maximum applies when the cell or battery exceeds 2.7 Wh. Higher state of charge follows the Section I approval route described by IATA and requires approvals from the State of Origin and State of the Operator under their written conditions.',
        'For lithium-ion batteries contained in equipment under PI 967, the same guidance recommends no more than 30% state of charge or no more than 25% indicated battery capacity. It explicitly says the reduced state of charge is not mandatory for those items. That difference is why a buyer should not give the factory a universal “set every product to 30%” instruction without qualified review.',
        'A China-side check can compare approved instructions with a documented measurement or device indication when the method is defined. It cannot infer state of charge from packaging, authenticate factory records, or certify the measurement method. Keep the value, method, sample or lot coverage, device used, timestamp, responsible person, and specialist acceptance together.',
      ],
      bullets: [
        'Write the exact packing instruction and section beside every SoC instruction',
        'Define whether the evidence is a measured state of charge, indicated battery capacity, production setting, or supplier declaration',
        'Escalate values above the approved threshold and do not assume a commercial urgency creates an exception',
        'Recheck after charging, firmware setup, testing, rework, or any process that could change battery capacity before pickup',
      ],
    },
    {
      id: 'packing-handoff',
      title: 'What should match before the dangerous-goods forwarder collects?',
      paragraphs: [
        'Before pickup, compare the approved packing instruction with physical units and cartons. The evidence may include terminal protection, prevention of accidental activation, inner packaging, cushioning, movement control, carton condition, package quantity and weight, and the marks and labels specified by the qualified shipper. Sampling limits and sealed-carton restrictions should be visible in the report.',
        'Then connect the cartons to the booking. The route, airline, dangerous-goods forwarder, shipper of record, declaration when required, air-waybill entry, operator variations, approval documents, pickup address, and release authority should describe the same shipment. Carrier acceptance can be stricter than a general guide, so the booked operator’s current decision controls whether freight is accepted.',
        'The release result should be simple: release, hold for specialist clarification, correct packing or marks, segregate affected cartons, re-check, or rebook. Do not let the forwarder collect first and plan to solve unresolved battery evidence after the goods leave the supplier.',
      ],
      bullets: [
        'Use contextual photos that show the battery, device, inner pack, carton, marks, and carton identifier together',
        'Keep draft and final labels separate so obsolete artwork is not packed by mistake',
        'Tie corrections to affected carton numbers and quantities before re-inspection',
        'Require written carrier or forwarder acceptance when the qualified plan depends on an approval or operator-specific condition',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Configuration is not classified',
      whatToConfirm: 'Battery alone, packed with equipment, contained in equipment, or vehicle; UN number, proper shipping name, packing instruction, section, route, and approvals',
      buyerDecision: 'Hold booking and pickup until a trained dangerous-goods party confirms the pathway.',
    },
    {
      riskNode: '2026 SoC evidence does not match',
      whatToConfirm: 'Mandatory or recommended treatment, threshold, battery Wh rating, method, sample or lot coverage, timestamp, and qualified acceptance',
      buyerDecision: 'Hold, adjust under an approved process, remeasure, seek approval, or change the transport plan.',
    },
    {
      riskNode: 'Battery or UN 38.3 identity differs',
      whatToConfirm: 'Manufacturer, model, chemistry, rating, test-summary identity, product SKU, production version, supplier, and change history',
      buyerDecision: 'Obtain corrected evidence, specialist review, additional testing, or stop release.',
    },
    {
      riskNode: 'Pack-out or booking differs',
      whatToConfirm: 'Terminal and activation protection, inner and outer packaging, quantities, weights, marks, labels, declaration, air waybill, route, and carrier acceptance',
      buyerDecision: 'Correct, segregate, re-check, rebook, or release only after the forwarder accepts the final file.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'IATA 2026 Lithium Battery Guidance, FAA lithium-battery incident resources, the NTSB public investigation, and a 2026 PHMSA harmonization proposal checked July 17, 2026 Beijing time.',
    'Buyer and specialist inputs: exact battery specification, configuration, UN classification, packing instruction, state-of-charge method, approvals, route, operator variations, and release authority.',
    'China-side evidence: physical batteries and devices, inner and outer packaging, terminal and activation protection, marks, labels, cartons, packing records, measurements supplied under an approved method, and correction evidence.',
    'Scope is evidence comparison only; dangerous-goods classification, testing, carrier acceptance, regulatory interpretation, and legal decisions stay with qualified parties.',
  ],
  sourceNotes: [
    {
      href: 'https://www.iata.org/contentassets/05e6d8742b0047259bf3a700bc9d42b9/lithium-battery-guidance-document.pdf',
      label: 'IATA - 2026 lithium and sodium ion battery guidance',
      note: 'Primary public guidance for the January 1, 2026 SoC changes, PI 966 and PI 967 distinction, prohibitions, approvals, classification flowcharts, and transport FAQs.',
    },
    {
      href: 'https://www.iata.org/en/publications/newsletters/iata-knowledge-hub/what-to-know-about-how-to-ship-lithium-batteries/',
      label: 'IATA - How to ship lithium batteries',
      note: 'Primary IATA overview covering shipper responsibilities, air-waybill context, carrier contact, and availability of UN 38.3 test summaries.',
    },
    {
      href: 'https://www.faa.gov/blog/clearedfortakeoff/case-preventing-lithium-battery-hazards',
      label: 'FAA - Preventing lithium battery hazards',
      note: 'Official current incident-pattern context for smoke, fire, and extreme-heat events in aviation; not a measure of China supplier failure rates.',
    },
    {
      href: 'https://www.ntsb.gov/investigations/Pages/DCA16SH001.aspx',
      label: 'NTSB - Brampton lithium-battery fire investigation',
      note: 'Official public case finding that a short circuit led to thermal runaway and ignited a battery and its packaging, with combustible packing material contributing to the consequences.',
    },
    {
      href: 'https://www.govinfo.gov/content/pkg/FR-2026-02-10/pdf/2026-02575.pdf',
      label: 'Federal Register - 2026 PHMSA harmonization proposal',
      note: 'Official proposed-rule record explaining the international risk basis and proposed U.S. harmonization; cited as a proposal, not a final U.S. rule.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Product SKU list, battery manufacturer and model, chemistry, voltage, amp-hour and Watt-hour rating, quantity, net battery weight, and clear product and battery photos',
    'Written configuration map showing batteries shipped alone, packed with equipment, installed in equipment, or used in a vehicle',
    'UN 38.3 test summary, battery specification, relevant safety data, change history, and any specialist or laboratory instructions',
    'Dangerous-goods classification, UN number, proper shipping name, packing instruction and section, SoC instruction, approvals, and operator variations',
    'Packing specification, terminal and activation protection, inner and outer packaging, carton dimensions, weights, marks, labels, and approved examples',
    'Air route, airline, forwarder, shipper of record, declaration and air-waybill instructions, pickup details, deadlines, correction plan, and release authority',
  ],
  redFlags: [
    'The factory cannot identify the exact battery model or Watt-hour rating in each SKU',
    'A 30% instruction is copied across battery-alone, packed-with, and contained-in configurations without qualified review',
    'The UN 38.3 test summary names a different manufacturer, battery type, model, or production version',
    'Battery terminals, spare batteries, or switches are exposed or can move or activate inside the package',
    'Marks, labels, package count, battery weight, declaration, air waybill, and booking do not describe the same shipment',
    'The supplier charges or tests products after the final SoC evidence without a controlled re-check',
    'The carrier, route, forwarder, battery, pack-out, or quantity changed after specialist approval',
    'Pickup is scheduled before dangerous-goods acceptance and correction evidence are complete',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible batteries, products, packaging, marks, labels, cartons, measurements supplied under a defined method, and documents with buyer-approved references in China',
    'Huang Sourcing does not classify dangerous goods, certify IATA or ICAO compliance, issue UN 38.3 testing, authenticate records, approve exceptions, sign declarations, or provide legal advice',
    'A visual or sampled check cannot prove battery safety, true state of charge for every unit, test validity, package performance, hidden damage, regulatory compliance, or carrier acceptance',
    'Airlines, forwarders, origin and destination authorities, product configurations, and operator variations can impose different or stricter requirements',
    'Sampling, sealed cartons, inaccessible batteries, factory restrictions, and unclear measurement methods reduce confidence and must be stated',
    'Rules and carrier policies change; confirm the current booked-route requirements with qualified parties before production, payment, pickup, and tender',
  ],
  relatedLinks: [
    {
      href: forwarderPickupChinaRisksArticleHref,
      label: 'Forwarder pickup China checklist',
      note: 'Use the general handoff guide for carton count, documents, pickup address, warehouse readiness, and correction evidence.',
    },
    {
      href: preShipmentBeforePickupArticleHref,
      label: 'Pre-shipment inspection before pickup',
      note: 'Plan a final physical check while packing, carton, and label corrections can still happen at the supplier.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Control approved artwork, carton marks, label revisions, affected quantities, and rework evidence before release.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before booking China QC',
      note: 'Prepare SKU coverage, final files, sampling instructions, deadlines, and buyer decision rules before inspection.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Does the 2026 30% rule apply to every product containing a lithium battery?',
      answer: 'No. IATA’s public guidance distinguishes batteries packed with equipment under PI 966 from batteries contained in equipment under PI 967. A qualified dangerous-goods party should classify the exact shipment and confirm the current route requirements.',
    },
    {
      question: 'Can a factory photo prove the battery state of charge?',
      answer: 'No. A defined method may produce useful shipment evidence, but a photo of a display or supplier record does not by itself prove the true state of charge of every unit. The responsible specialist should approve the method and coverage.',
    },
    {
      question: 'Is an SDS enough for lithium battery air shipping?',
      answer: 'Not automatically. The qualified shipper may need classification data, a UN 38.3 test summary, packing and marking instructions, declarations, approvals, and carrier-specific information in addition to any safety data.',
    },
    {
      question: 'Should pickup wait if the carrier has not accepted the battery booking?',
      answer: 'Yes. Keep the goods at the supplier when classification, approval, packing, documents, or operator acceptance is unresolved. Release after the dangerous-goods forwarder accepts the final shipment file and corrections are verified.',
    },
    {
      question: 'Can Huang Sourcing certify an IATA-compliant shipment?',
      answer: 'No. Huang Sourcing can compare China-side physical and document evidence with buyer-approved references. Dangerous-goods classification, certification, testing, declarations, approvals, and carrier acceptance remain with qualified parties.',
    },
  ] satisfies FaqItem[],
}

export function makeLithiumBatteryAirShippingChinaArticleMetadata(): Metadata {
  const article = lithiumBatteryAirShippingChinaArticle
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

export function makeLithiumBatteryAirShippingChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(lithiumBatteryAirShippingChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Lithium battery air-shipment release checklist',
      itemListElement: lithiumBatteryAirShippingChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
