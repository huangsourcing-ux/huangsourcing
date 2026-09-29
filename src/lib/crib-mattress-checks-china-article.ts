import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import { cribMattressChecksChinaArticleHref, resourceGuideHref } from '@/lib/site-links'

export const cpscVoomfRecall =
  'https://www.cpsc.gov/Recalls/2026/Play-Yard-and-Crib-Mattresses-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Entrapment-and-Fire-Hazards-Violate-Mandatory-Standards-for-Mattresses-Sold-on-Amazon-by-Voomf'
export const cpscCriblikeWarning =
  'https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-Criblike-Mattresses-Immediately-Due-to-Risk-of-Serious-Injury-or-Death-from-Entrapment-or-Suffocation-Violates-Mandatory-Standards-for-Mattresses-Sold-on-Amazon-by-Mengna'
export const cpscCribMattressGuidance = 'https://www.cpsc.gov/FAQ/Crib-Mattresses'
export const cpscChildrensProductCertificate =
  'https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/Childrens-Product-Certificate'
export const cpscThirdPartyTesting =
  'https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/Third-Party-Testing'
export const babylistProductRecalls =
  'https://www.babylist.com/hello-baby/product-recalls-2026'

export const cribMattressChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: cribMattressChecksChinaArticleHref,
  title: 'Crib Mattress Checks Before Shipping from China',
  h1: 'Crib Mattress Checks Before Shipping from China',
  metaTitle: 'Crib Mattress Checks Before China Shipment',
  metaDescription:
    'Before releasing China-made crib or play-yard mattresses, check exact host-model compatibility, qualified test evidence, labels, production lots, and cartons.',
  publishedDate: 'September 30, 2026',
  publishedDateIso: '2026-09-30T03:24:00+08:00',
  eyebrow: 'Host-model fit · test evidence · lot release',
  image: {
    src: '/images/crib-mattress-checks-china.webp',
    width: 1600,
    height: 900,
    alt: 'Original schematic of a generic play yard and separate mattress showing model compatibility, fit, and shipment evidence checks; not a recalled product or test result',
  },
  imageVariants: [
    { src: '/images/crib-mattress-checks-china.webp', width: 1600, height: 900 },
    { src: '/images/crib-mattress-checks-china-4x3.webp', width: 1200, height: 900 },
    { src: '/images/crib-mattress-checks-china-1x1.webp', width: 1000, height: 1000 },
  ],
  intro:
    'Before paying the balance or authorizing pickup for a China-made crib or aftermarket play-yard mattress, identify the exact mattress variant and every crib or play-yard model it claims to fit. Match that claim to qualified compatibility testing, the approved construction, labels, production lots, and cartons. Hold any variant whose host-model evidence or shipment identity is missing.',
  answer:
    'Use three gates: classify the exact mattress and intended host products; have the importer confirm applicable U.S. rules, test reports, and certificate scope; then compare sampled production, compatibility labels, packages, lots, and cartons with the approved version. A visual factory check can record mismatches. It cannot prove infant-sleep safety or replace prescribed testing.',
  whatsappMessage: `Hi Agent Huang,\n\nI need a China-side crib or play-yard mattress evidence and pre-shipment check.\n\nDestination, importer, mattress category, exact models/SKUs, and intended host crib/play-yard models:\nApproved sample, construction, dimensions, thickness, support structure, and changes:\nComplete compatibility and other applicable test reports, tested host models, CPC, and laboratory details:\nLabel, warnings, instructions, retail pack, tracking marks, and listing claims:\nFactory, production dates, lots, quantities, and carton map:\nKnown fit or test issues, balance-payment date, and pickup deadline:\n`,
  checklist: [
    {
      title: 'Freeze the product and host models',
      detail:
        'List each mattress SKU and version, intended use, claimed compatible crib or play-yard model, original mattress reference, factory, production lot, and carton range.',
    },
    {
      title: 'Map qualified evidence',
      detail:
        'Have the importer and qualified lab reconcile the applicable rule set, host-model compatibility tests, sample identity, construction, flammability evidence where applicable, and CPC.',
    },
    {
      title: 'Compare production and claims',
      detail:
        'Sample named lots. Record dimensions, thickness, flatness, support structure, cover and seams, approved material changes, label and instruction text, packaging, and carton identity.',
    },
    {
      title: 'Hold or release named scope',
      detail:
        'Segregate unmatched host-model claims, changed materials, missing reports, failed fit checks, incorrect labels, or mixed cartons. Release only after documented specialist disposition and repeat checks.',
    },
  ],
  decisionRows: [
    {
      riskNode: 'Generic “fits most” claim',
      evidence:
        'Listing, pack, product label, instructions, exact host-model list, and test records for each intended model',
      buyerDecision:
        'Hold that variant. Have the importer verify each claimed host-model compatibility and correct the claim and evidence before release.',
    },
    {
      riskNode: 'Different production build or fit',
      evidence:
        'Approved sample, tested construction, original host mattress, production measurements, support structure, lots, and carton map',
      buyerDecision:
        'Contain affected lots. Obtain qualified assessment and any required new testing before rework or release.',
    },
    {
      riskNode: 'Evidence and sampled lots align',
      evidence:
        'Qualified reports and CPC, model-specific claims, sampled goods, labels, warnings, instructions, quantities, and cartons',
      buyerDecision:
        'Release only the identified version and carton range, with sampling limits and open conditions recorded.',
    },
  ],
  relatedLinks: [
    { href: '/qc-inspection-china', label: 'China QC inspection', note: 'Compare sampled goods and shipment identity with an approved version.' },
    { href: '/verify-china-lab-test-report', label: 'Verify a China lab report', note: 'Connect testing to the submitted sample and claimed product scope.' },
    { href: '/mattress-flammability-checks-china', label: 'Mattress flammability guide', note: 'Review the separate prototype and fire-test evidence chain.' },
    { href: '/packaging-label-check-before-payment', label: 'Packaging and label checks', note: 'Reconcile claims, warnings, packs, and cartons before payment.' },
    { href: resourceGuideHref, label: 'China sourcing risk guides', note: 'Browse related supplier and shipment decisions.' },
    { href: '/free-china-sourcing-risk-check', label: 'Free sourcing risk check', note: 'Share an unresolved evidence gap before pickup.' },
  ],
  sources: [
    { href: cpscVoomfRecall, label: 'CPSC — Voomf mattress recall 26-669', note: 'August 6, 2026: distinct play-yard fit and crib-mattress flammability findings, affected products, and reported fit concern.' },
    { href: cpscCriblikeWarning, label: 'CPSC — Criblike mattress warning 26-590', note: 'July 2, 2026: host-model compatibility and a narrowly defined model/date exception.' },
    { href: cpscCribMattressGuidance, label: 'CPSC — crib mattress business FAQ', note: 'Current scope, aftermarket host-model compatibility, testing, labeling, and applicable rule distinctions.' },
    { href: cpscChildrensProductCertificate, label: 'CPSC — Children’s Product Certificate guidance', note: 'Certification responsibility and certificate identification for covered children’s products.' },
    { href: cpscThirdPartyTesting, label: 'CPSC — third-party testing guidance', note: 'Accepted-laboratory and production-change testing framework.' },
    { href: babylistProductRecalls, label: 'Babylist — 2026 product recall guide', note: 'Independent current roundup includes the Voomf crib-mattress recall; used as an attention signal, not a claim about search volume.' },
  ],
}

export function makeCribMattressChecksChinaArticleMetadata(): Metadata {
  const article = cribMattressChecksChinaArticle
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

export function makeCribMattressChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(cribMattressChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Crib mattress shipment release checklist',
      itemListElement: cribMattressChecksChinaArticle.checklist.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: `${item.title}: ${item.detail}`,
      })),
    },
  ]
}
