import type { Metadata } from 'next'
import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'

export const cpscReclinerBatteryRecall = 'https://www.cpsc.gov/Recalls/2026/The-Blue-Cactus-Company-Reclining-Chair-Battery-Packs-Recalled-Due-to-Fire-and-Burn-Hazards-Sold-on-Amazon'
export const manufacturerReclinerBatteryRecall = 'https://www.thebluecactuscompany.com/'
export const reclinerBatteryCoverage = 'https://www.houstonchronicle.com/news/houston-texas/trending/article/amazon-battery-pack-recall-fire-22454119.php'

export const reclinerBatteryPackChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: '/recliner-battery-pack-checks-china',
  title: 'Recliner Battery Pack Checks Before Shipping from China',
  h1: 'Recliner Battery Pack Checks Before Shipping from China',
  metaTitle: 'Recliner Battery Pack Checks: China Shipment',
  metaDescription: 'Match recliner battery packs, chargers, cables, approved furniture applications and lot evidence before balance payment or pickup from China.',
  publishedDate: 'October 7, 2026',
  publishedDateIso: '2026-10-07T03:26:40+08:00',
  eyebrow: 'Furniture power kits · compatibility evidence · lot release',
  image: {
    src: '/images/recliner-battery-pack-checks-china.webp',
    width: 1600,
    height: 900,
    alt: 'Original diagram connecting a recliner battery, charger and cable kit to an approved furniture application and a documented lot decision; not a recalled product or test result',
  },
  imageVariants: [
    { src: '/images/recliner-battery-pack-checks-china.webp', width: 1600, height: 900 },
    { src: '/images/recliner-battery-pack-checks-china-4x3.webp', width: 1200, height: 900 },
    { src: '/images/recliner-battery-pack-checks-china-1x1.webp', width: 1000, height: 1000 },
  ],
  intro: 'Before paying the balance or releasing recliner battery packs from China, match the exact battery, charger, cable set and intended furniture application to accepted technical evidence and identifiable production lots. Hold changed components, unsupported compatibility claims, mixed kit contents or unresolved recalled-stock identities before cartons move.',
  answer: 'A connector fitting a chair and a successful recline demonstration are insufficient release evidence. Ask who has accepted the complete power configuration, which furniture loads and features that acceptance covers, whether sampled goods match it, and which lots the decision includes. Keep technical acceptance, inspection observations and shipment authorization connected but separately documented.',
  whatsappMessage: 'Hi Agent Huang,\n\nI need a recliner battery pack and kit check in China.\n\nDestination, importer and intended furniture applications:\nBattery models, revisions and lot codes:\nApproved chargers, connectors, cable sets and kit versions:\nFull reports, tested sample photos and accepted compatibility matrix:\nComponent changes, open issues and correction records:\nPacking list, carton map, balance date and pickup deadline:\n',
  checklist: [
    { title: 'Define the furniture application', detail: 'List chair or sofa models, motor/control configuration, intended features, charger use and operating modes. Ask the responsible technical party to define the accepted combinations and limits; capacity alone does not describe the load.' },
    { title: 'Freeze the complete power kit', detail: 'Record battery assembly and revision, cell/protection references where available, charger identity and ratings, connector specification, cables, adapters and splitters. Distinguish a battery-only replacement from a complete kit.' },
    { title: 'Reconcile evidence with sampled goods', detail: 'Match full reports, tested sample photos and change assessments to the current configuration. Compare sampled labels, accessible connectors, approved pack contents and safely agreed functions. Record gaps rather than expanding a report’s scope.' },
    { title: 'Authorize identified lots after closure', detail: 'Connect findings and corrections to model, revision, lot, quantity and carton range. Segregate unknown or affected stock, obtain responsible-party acceptance and verify the correction before releasing that named scope.' },
  ],
  applicationRows: [
    { application: 'Single chair with the specified motor/control set', evidence: 'Accepted chair model, battery revision, charger and cable combination; intended operating modes', gap: 'A supplier demonstrates a different chair and declares universal compatibility.' },
    { application: 'Sofa, loveseat or multiple powered positions', evidence: 'Accepted combined application, motor/control identities, splitter/cable arrangement and qualified load assessment', gap: 'The same battery is substituted because the connectors fit.' },
    { application: 'Furniture with additional powered features', evidence: 'Documented features, intended use and accepted configuration including those loads', gap: 'Evidence covers recline motion only while the listing promises other functions.' },
    { application: 'Battery-only replacement', evidence: 'Named retained charger, transformer or cables, compatibility acceptance and clear replacement instructions', gap: 'A replacement is packed or marketed as a complete ready-to-use kit.' },
  ],
  decisionRows: [
    { riskNode: 'Connector fits but application evidence is missing', evidence: 'Complete accepted power configuration and furniture application, including features and operating modes', buyerDecision: 'Hold the unsupported application. Ask qualified parties to resolve compatibility; do not authorize it from connector shape alone.' },
    { riskNode: 'Battery, protection, charger or adapter changed', evidence: 'Before-and-after identities, change date, affected lots, qualified coverage assessment and accepted evidence', buyerDecision: 'Hold changed stock until the responsible party accepts the change and the production scope is verified.' },
    { riskNode: 'Battery-only and full kits are mixed', evidence: 'SKU-specific packing bill, device and charger labels, approved instructions and carton-to-SKU map', buyerDecision: 'Segregate and correct packs and claims, then repeat the relevant pack-out check.' },
    { riskNode: 'Recalled identity or unresolved overheating concern', evidence: 'Exact model/lot identity, official action, observed condition, containment record and authorized disposition', buyerDecision: 'Stop use and hold the affected or uncertain stock. Follow the applicable official process; a normal demonstration cannot clear it.' },
    { riskNode: 'Accepted configuration and identified lots align', evidence: 'Accepted records, sampled comparison, closed corrections and named carton scope', buyerDecision: 'Release only the documented scope. State sampling limits and any remaining conditions in the authorization.' },
  ],
  relatedLinks: [
    { href: '/qc-inspection-china', label: 'China QC inspection', note: 'Scope sampled identity, configuration and pack comparisons before shipment.' },
    { href: '/verify-china-lab-test-report', label: 'Verify a China laboratory report', note: 'Connect tested samples and coverage to the current kit and intended application.' },
    { href: '/power-bank-checks-china', label: 'Power bank quality checks', note: 'Related portable-battery evidence; it does not settle furniture compatibility.' },
    { href: '/packaging-label-check-before-payment', label: 'Packaging and label checks', note: 'Reconcile battery-only replacements, complete kits and carton identities.' },
    { href: '/qc-before-balance', label: 'QC before balance payment', note: 'Keep open gaps and correction leverage visible before final payment.' },
    { href: '/lithium-battery-air-shipping-china-2026', label: 'Lithium battery air shipment planning', note: 'Keep freight acceptance separate from product and application acceptance.' },
    { href: '/china-sourcing-risk-guides', label: 'China sourcing risk guides', note: 'Find related supplier, payment, production and pickup decisions.' },
  ],
  sources: [
    { href: cpscReclinerBatteryRecall, label: 'CPSC — Blue Cactus battery pack recall 26-791', note: 'September 24, 2026 primary record: RWX-RBP02 identity, overheating hazard, approximately 51,000 units, four reported events and replacement remedy.' },
    { href: manufacturerReclinerBatteryRecall, label: 'Blue Cactus — official recall and product information', note: 'Manufacturer’s affected-model and replacement notice; also distinguishes replacement batteries from complete kits. Product claims are not independent safety verification.' },
    { href: reclinerBatteryCoverage, label: 'Houston Chronicle — September 29 battery recall reporting', note: 'Independent editorial attention signal by Yvette Orozco. The case analysis relies on the primary records above.' },
  ],
}

export function makeReclinerBatteryPackChecksChinaArticleMetadata(): Metadata {
  const article = reclinerBatteryPackChecksChinaArticle
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: article.href },
    openGraph: { title: article.metaTitle, description: article.metaDescription, url: article.href, siteName: 'Huang Sourcing', type: 'article', publishedTime: article.publishedDateIso, images: getArticleOpenGraphImages(article) },
    twitter: { card: 'summary_large_image', title: article.metaTitle, description: article.metaDescription, images: [article.image.src] },
  }
}

export function makeReclinerBatteryPackChecksChinaArticleJsonLd() {
  return [makeArticleJsonLd(reclinerBatteryPackChecksChinaArticle), {
    '@context': 'https://schema.org', '@type': 'ItemList', name: 'Recliner battery pack configuration and release checklist',
    itemListElement: reclinerBatteryPackChecksChinaArticle.checklist.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: `${item.title}: ${item.detail}` })),
  }]
}
