import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import { busyBoardToyChecksChinaArticleHref, resourceGuideHref } from '@/lib/site-links'

export const cpscEsjayBusyBoardRecall = 'https://www.cpsc.gov/Recalls/2026/Esjay-US-Recalls-Toddler-Busy-Board-Montessori-Toys-Due-to-Risk-of-Serious-Injury-or-Death-from-Choking-Violates-Small-Parts-Ban'
export const cpscMelissaFireTruckRecall = 'https://www.cpsc.gov/Recalls/2026/Melissa-and-Doug-Recalls-Fire-Truck-Activity-Board-Toys-Due-to-Risk-of-Serious-Injury-from-Choking-Hazard-Sold-Exclusively-at-Target'
export const cpscLontcsBusyBoardRecall = 'https://www.cpsc.gov/Recalls/2026/SQT-Recalls-Lontcs-Busy-Boards-Due-to-Risk-of-Serious-Injury-from-Lead-Poisoning-Violate-Federal-Lead-Paint-Ban'
export const cpscSmallPartsGuidance = 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Small-Parts-for-Toys-and-Childrens-Products'
export const cpscToySafetyGuidance = 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Toy-Safety'
export const cpscChildrensProductCertificate = 'https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/Childrens-Product-Certificate'
export const cpscThirdPartyTesting = 'https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/Third-Party-Testing'
export const news12FireTruckCoverage = 'https://newjersey.news12.com/melissa-doug-fire-truck-toy-recalled-due-to-choking-hazard'

export const busyBoardToyChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: busyBoardToyChecksChinaArticleHref,
  title: 'Busy Board Toy Checks Before Shipping from China',
  h1: 'Busy Board Toy Checks Before Shipping from China',
  metaTitle: 'Busy Board Toy Checks Before China Shipment',
  metaDescription: 'Before releasing China-made busy boards, match the intended age, attached parts, painted hardware, accepted-lab evidence, CPC, model, lot, labels, and cartons.',
  publishedDate: 'September 26, 2026',
  publishedDateIso: '2026-09-26T03:22:23+08:00',
  eyebrow: 'Toy parts · age scope · tested version · lot release',
  image: {
    src: '/images/busy-board-toy-checks-china.webp',
    width: 1600,
    height: 900,
    alt: 'Original schematic of a generic unbranded busy board, showing attached parts, coated hardware, an evidence card, and a carton label; not a recalled product or test result',
  },
  imageVariants: [
    { src: '/images/busy-board-toy-checks-china.webp', width: 1600, height: 900 },
    { src: '/images/busy-board-toy-checks-china-4x3.webp', width: 1200, height: 900 },
    { src: '/images/busy-board-toy-checks-china-1x1.webp', width: 1000, height: 1000 },
  ],
  intro: 'Before paying the balance or authorizing pickup for a China-made busy board, identify the intended age, exact model, every attached part and coating, approved sample, qualified test evidence, production lots, retail packs, and cartons. Hold a model or lot when a detachable part, painted component, or changed construction is not covered by the approved evidence.',
  answer: 'Use an age-and-evidence gate, a component-and-coating gate, and a model-and-lot release gate. A qualified party determines applicable U.S. rules and testing; buyer-side inspection compares sampled finished boards with the tested version and approved files. Release only named lots and cartons after any mismatch is resolved and documented.',
  whatsappMessage: `Hi Agent Huang,\n\nI need a China-side busy board evidence and pre-shipment check.\n\nDestination, importer, intended age, and sales listing:\nExact model, approved sample, drawings, component and coating list:\nFull accepted-lab reports, CPC, tested sample identity, and change records:\nFactory, production dates, lots, quantities, and carton map:\nLabels, warnings, tracking marks, instructions, and retail packaging:\nKnown loose-part, sharp-edge, coating, or test issues:\nBalance-payment or pickup deadline:\n`,
  checklist: [
    { title: 'Freeze age and model', detail: 'Reconcile intended age, listing, artwork, SKU, bill of materials, component count, approved sample, factory, version, and production lots.' },
    { title: 'Map tests to the finished board', detail: 'Obtain complete reports, tested sample photos, applicable rule list, CPSC-accepted lab scope, CPC, coating records, and material-change history.' },
    { title: 'Inspect actual parts and packs', detail: 'Sample named lots; record knobs, zippers, latches, fasteners, edges, coatings, attachment changes, tracking marks, warnings, retail packs, and carton IDs.' },
    { title: 'Hold or release by lot', detail: 'Quarantine failures or undocumented variants. Record qualified disposition, correction, any needed retest, repeat inspection, and the exact released carton range.' },
  ],
  decisionRows: [
    { riskNode: 'Loose or changed component', evidence: 'Physical sample, component drawing, attachment specification, approved sample, full report, model and lot ID', buyerDecision: 'Hold affected lots. Obtain qualified assessment and repeat testing when the change affects applicable requirements.' },
    { riskNode: 'Coating or document mismatch', evidence: 'Coating supplier and finish records, tested component identity, accepted-lab results, CPC, tracking label, carton map', buyerDecision: 'Hold stock until the responsible importer reconciles evidence with the actual build.' },
    { riskNode: 'Version and evidence align', evidence: 'Approved age and model, tested construction, sampled finished boards, correct labels, quantities, and identified cartons', buyerDecision: 'Release only the named version, lot, quantity, and carton range, subject to recorded sampling limits.' },
  ],
  evidenceBasis: [
    'The September 17 Esjay CPSC recall identifies detachable red knobs on a China-made toddler busy board; it reports no incidents or injuries.',
    'Separate 2026 CPSC notices describe a loose fire-hose port on a fire-truck activity board and lead paint on a Lontcs busy-board zipper. These are different products and hazards, not proof of a common root cause.',
    'Current CPSC small-parts, toy-safety, third-party-testing, and CPC guidance frame the U.S. evidence boundary. The release workflow is buyer-side analysis of public records; Huang Sourcing did not participate in the recalls.',
  ],
  relatedLinks: [
    { href: '/qc-inspection-china', label: 'China QC inspection service', note: 'Scope a finished-goods comparison against the approved model and shipment lots.' },
    { href: '/verify-china-lab-test-report', label: 'Verify a China lab report', note: 'Tie laboratory evidence to the tested sample, variant, and factory.' },
    { href: '/small-ball-toy-checks-china', label: 'Small-ball toy checks', note: 'Review the distinct small-ball geometry and age-grade decision.' },
    { href: '/packaging-label-check-before-payment', label: 'Packaging and label checks', note: 'Map age claims, warnings, tracking marks, retail packs, and cartons.' },
    { href: resourceGuideHref, label: 'China sourcing risk guides', note: 'Browse supplier, inspection, and shipment decisions.' },
    { href: '/free-china-sourcing-risk-check', label: 'Free sourcing risk check', note: 'Share an unresolved evidence gap before payment or pickup.' },
  ],
  sources: [
    { href: cpscEsjayBusyBoardRecall, label: 'CPSC — Esjay busy-board recall 26-775', note: 'September 17, 2026: detachable red knobs, affected product, China manufacture, remedy, and no reported incidents.' },
    { href: cpscMelissaFireTruckRecall, label: 'CPSC — Melissa & Doug activity-board recall 26-780', note: 'September 17, 2026: loose hose port, affected date codes, reported incidents, and China manufacture.' },
    { href: cpscLontcsBusyBoardRecall, label: 'CPSC — Lontcs busy-board recall 26-753', note: 'September 10, 2026: lead paint on a zipper in a China-made busy board.' },
    { href: cpscSmallPartsGuidance, label: 'CPSC — small-parts ban and labeling guidance', note: 'Intended age, small-parts definition, warning scope, and CPC citation.' },
    { href: cpscToySafetyGuidance, label: 'CPSC — toy safety business guidance', note: 'Applicable U.S. toy requirements, including physical and chemical hazards.' },
    { href: cpscThirdPartyTesting, label: 'CPSC — third-party testing guidance', note: 'Accepted laboratories, initial, material-change, and periodic testing.' },
    { href: cpscChildrensProductCertificate, label: 'CPSC — Children’s Product Certificate guidance', note: 'Importer or domestic manufacturer certification and required certificate elements.' },
    { href: news12FireTruckCoverage, label: 'News 12 — fire-truck recall coverage', note: 'Independent September 18 local reporting used as an attention signal, not evidence of search volume.' },
  ],
}

export function makeBusyBoardToyChecksChinaArticleMetadata(): Metadata {
  const article = busyBoardToyChecksChinaArticle
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
    twitter: { card: 'summary_large_image', title: article.metaTitle, description: article.metaDescription, images: [article.image.src] },
  }
}

export function makeBusyBoardToyChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(busyBoardToyChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Busy board shipment release checklist',
      itemListElement: busyBoardToyChecksChinaArticle.checklist.map((item, index) => ({
        '@type': 'ListItem', position: index + 1, name: `${item.title}: ${item.detail}`,
      })),
    },
  ]
}
