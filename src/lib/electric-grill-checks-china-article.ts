import type { Metadata } from 'next'
import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'

export const cpscElectricGrillRecall = 'https://www.cpsc.gov/Recalls/2026/Char-Broil-Recalls-Bistro-Pro-Electric-Grills-Due-to-Risk-of-Electric-Shock'
export const manufacturerElectricGrillRecall = 'https://www.charbroil.com/pages/recalls-bistro-pro'
export const electricGrillCoverage = 'https://www.wmur.com/article/char-broil-grill-recall-electric-shock/73779733'

export const electricGrillChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: '/electric-grill-checks-china',
  title: 'Electric Grill Checks Before Shipping from China',
  h1: 'Electric Grill Checks Before Shipping from China',
  metaTitle: 'Electric Grill Checks Before China Shipment',
  metaDescription: 'Before releasing electric grills from China, match grounding assembly evidence, model revisions, electrical reports, date codes and packed lots to a release decision.',
  publishedDate: 'October 6, 2026',
  publishedDateIso: '2026-10-06T03:27:24+08:00',
  eyebrow: 'Grounding assembly · configuration evidence · lot release',
  image: {
    src: '/images/electric-grill-checks-china.webp',
    width: 1600,
    height: 900,
    alt: 'Original diagram linking an electric grill model, grounding assembly evidence, date-code cartons and a documented hold or release decision; not a recalled product or test result',
  },
  imageVariants: [
    { src: '/images/electric-grill-checks-china.webp', width: 1600, height: 900 },
    { src: '/images/electric-grill-checks-china-4x3.webp', width: 1200, height: 900 },
    { src: '/images/electric-grill-checks-china-1x1.webp', width: 1000, height: 1000 },
  ],
  intro: 'Before paying the balance or authorizing pickup for electric grills made in China, connect each model and production lot to its approved electrical configuration, grounding assembly, qualified evidence and retail pack. Hold stock when a safety-related connection has changed without assessment, a report describes a different build, or date codes cannot be reconciled to cartons.',
  answer: 'Separate three questions: does the responsible specialist accept the exact design and evidence, does sampled production match that accepted configuration, and which lots are covered by the release? A grill heating up normally answers a function question. It does not establish grounding integrity, connection durability or the safety of every unit in the shipment.',
  whatsappMessage: 'Hi Agent Huang,\n\nI need an electric grill configuration and shipment check in China.\n\nDestination, importer and model variants:\nHardware revision, heater, control and grounding assembly references:\nFull reports, tested sample photos and change assessments:\nApproved labels, instructions and pack contents:\nDate codes, lots, quantities and carton map:\nOpen issues, corrections, balance date and pickup deadline:\n',
  checklist: [
    { title: 'Freeze the model and assembly reference', detail: 'Record market, model, full-size or tabletop version, voltage configuration, heater and control identities, grounding connection reference, bill of materials and revision. Identify who owns technical acceptance.' },
    { title: 'Reconcile evidence and changes', detail: 'Match complete reports and sample photographs to the current build. Ask qualified parties to assess changes to the grounding connection, fasteners, routing, heater or enclosure. Keep the accepted assessment and any required retesting with the lot file.' },
    { title: 'Compare sampled production and packs', detail: 'Use an agreed safe inspection scope to compare accessible construction, markings, approved assembly records and pack contents. Record deviations and unit/date-code identity. Restrict specialist electrical work to qualified personnel and approved procedures.' },
    { title: 'Release named lots after closure', detail: 'Map models, revisions, date codes and quantities to cartons. Segregate changed or unmatched stock, close corrections, obtain responsible-party acceptance and repeat relevant checks before authorizing that exact scope.' },
  ],
  decisionRows: [
    { riskNode: 'Grounding connection or fastener changed', evidence: 'Approved assembly reference, before-and-after part IDs, production change date, affected lots and qualified assessment', buyerDecision: 'Hold the changed scope. Obtain accepted technical evidence and verify the authorized correction before release.' },
    { riskNode: 'Report covers a different grill version', evidence: 'Tested model and sample photos, voltage, heater/control configuration, accessories and coverage explanation', buyerDecision: 'Hold the unmatched version. Have the importer and qualified lab reconcile coverage; a shared brand or similar exterior is insufficient.' },
    { riskNode: 'Model/date codes are mixed or unreadable', evidence: 'Unit labels, retail cartons, packing list, destination and lot-to-carton map', buyerDecision: 'Segregate and reconcile inventory. Keep unknown or affected stock held rather than applying one code to the whole shipment.' },
    { riskNode: 'Open electrical concern or recalled identity', evidence: 'Observed issue, model and lot IDs, relevant recall notice, containment and responsible-party disposition', buyerDecision: 'Stop use and hold stock. Follow the applicable recall process or qualified assessment; a successful heat-up demo does not clear the concern.' },
    { riskNode: 'Evidence, sampled build and lots align', evidence: 'Accepted records, closed corrections, re-inspection findings and identified carton scope', buyerDecision: 'Authorize only the documented scope, with sampling limits and outstanding conditions stated.' },
  ],
  relatedLinks: [
    { href: '/qc-inspection-china', label: 'China QC inspection', note: 'Compare sampled goods with approved references before shipment.' },
    { href: '/verify-china-lab-test-report', label: 'Verify a China laboratory report', note: 'Match tested samples and report coverage to the current model.' },
    { href: '/quality-control-china-manufacturing-plan', label: 'Plan production quality control', note: 'Arrange assembly evidence while the relevant work is still accessible.' },
    { href: '/packaging-label-check-before-payment', label: 'Packaging and label checks', note: 'Connect device identity, instructions and cartons.' },
    { href: '/qc-before-balance', label: 'QC before balance payment', note: 'Turn open findings into a hold, correction or release decision.' },
    { href: '/china-sourcing-risk-guides', label: 'China sourcing risk guides', note: 'Browse supplier, production, payment and shipment decisions.' },
  ],
  sources: [
    { href: cpscElectricGrillRecall, label: 'CPSC — Char-Broil Bistro Pro recall 26-773', note: 'September 17, 2026: grounding hazard, China manufacture, affected U.S. models and date codes, and repair remedy.' },
    { href: manufacturerElectricGrillRecall, label: 'Char-Broil — official Bistro Pro recall information', note: 'Manufacturer notice with model/UPC identifiers, market variants and the authorized recall process.' },
    { href: electricGrillCoverage, label: 'WMUR — September electric-grill recall coverage', note: 'Separate editorial attention signal. Case facts in this guide rely on the primary records above.' },
  ],
}

export function makeElectricGrillChecksChinaArticleMetadata(): Metadata {
  const article = electricGrillChecksChinaArticle
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: article.href },
    openGraph: { title: article.metaTitle, description: article.metaDescription, url: article.href, siteName: 'Huang Sourcing', type: 'article', publishedTime: article.publishedDateIso, images: getArticleOpenGraphImages(article) },
    twitter: { card: 'summary_large_image', title: article.metaTitle, description: article.metaDescription, images: [article.image.src] },
  }
}

export function makeElectricGrillChecksChinaArticleJsonLd() {
  return [makeArticleJsonLd(electricGrillChecksChinaArticle), {
    '@context': 'https://schema.org', '@type': 'ItemList', name: 'Electric grill configuration and shipment checklist',
    itemListElement: electricGrillChecksChinaArticle.checklist.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: `${item.title}: ${item.detail}` })),
  }]
}
