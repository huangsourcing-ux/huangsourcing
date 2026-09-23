import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  heatedBlanketChecksChinaArticleHref,
  resourceGuideHref,
} from '@/lib/site-links'

export const cpscJkmaxRecall = 'https://www.cpsc.gov/Recalls/2026/JKMAX-Recalls-Heated-Blankets-and-Heating-Pads-Due-to-Fire-and-Burn-Hazards'
export const cpscOctrotRecall = 'https://www.cpsc.gov/Recalls/2026/Heated-Sherpa-Throws-and-Blankets-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Fire-and-Burn-Hazards-Sold-on-Amazon-by-OCTROT'
export const cbsJkmaxCoverage = 'https://www.cbsnews.com/news/amazon-jkmax-heated-blanket-recall/'

export const heatedBlanketChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: heatedBlanketChecksChinaArticleHref,
  title: 'Heated Blanket Checks Before Shipping from China',
  h1: 'Heated Blanket Checks Before Shipping from China',
  metaTitle: 'Heated Blanket Checks Before China Shipment',
  metaDescription: 'Check heated blanket models, controllers, cords, heating elements, qualified evidence, lot identity, labels, and cartons before final payment or China shipment.',
  publishedDate: 'September 24, 2026',
  publishedDateIso: '2026-09-24T03:23:26+08:00',
  eyebrow: 'Electrical evidence · production identity · shipment release',
  image: {
    src: '/images/heated-blanket-checks-china.webp',
    width: 1600,
    height: 900,
    alt: 'Original diagram of a heated blanket release record linking controller, cord, heating element, model, lot, and carton evidence; not a recalled product',
  },
  imageVariants: [
    { src: '/images/heated-blanket-checks-china.webp', width: 1600, height: 900 },
    { src: '/images/heated-blanket-checks-china-4x3.webp', width: 1200, height: 900 },
    { src: '/images/heated-blanket-checks-china-1x1.webp', width: 1000, height: 1000 },
  ],
  intro: 'Before paying the balance or allowing pickup for heated blankets or heating pads made in China, identify the exact model and production lot, then match the finished goods to approved controller, cord, connector, heating-element, textile, label, and carton records. Hold the affected stock when a critical part or its evidence cannot be tied to the actual units.',
  answer: 'Use three gates: the importer and qualified specialists define the market requirements and test evidence; the factory controls the approved construction and every change; buyer-side inspection compares accessible finished goods, labels, quantities, and cartons with those references. A visual or short powered check cannot establish electrical or thermal safety, long-term performance, or legal compliance.',
  whatsappMessage: `Hi Agent Huang,\n\nI need a China-side heated blanket or heating pad evidence and pre-shipment check.\n\nDestination, importer, sales channel, exact models and use claims:\nManufacturer, factory, production dates, lots, quantities, and carton map:\nApproved sample, bill of materials, controller, cord, connector, element, textile, labels, and packaging:\nComplete qualified reports, certification/listing references, and applicable requirements:\nChanges, complaints, failures, rework, or unresolved evidence:\nBalance-payment and pickup deadline:\n`,
  checklist: [
    { title: 'Freeze the saleable version', detail: 'Map each retail SKU and exact model to factory, voltage, controller, cord, connector, element layout, textile, size, timer, labels, instructions, production lot, and cartons.' },
    { title: 'Verify qualified evidence', detail: 'Ask the responsible party to map current destination requirements and complete test or certification records to the same construction, sample, factory, model, and limitations.' },
    { title: 'Compare production', detail: 'Use an approved sampling plan to compare accessible parts, stitching, wire routing, connector fit, controls, markings, packaging, and specified functions with approved references.' },
    { title: 'Close the release scope', detail: 'Record failures, substitutions, affected quantities, corrective action, qualified disposition, repeat checks, and the exact lots and cartons authorized to move.' },
  ],
  decisionRows: [
    { riskNode: 'Unmatched model or critical part', evidence: 'PO, approved sample, bill of materials, part markings, controller and connector photos, complete reports, lot records', buyerDecision: 'Hold the affected model and lot. Obtain a documented technical and compliance disposition before re-inspection or release.' },
    { riskNode: 'Failed or unsafe sample', evidence: 'Unit ID, observed behavior, test method, time, photos, affected lot, factory containment and correction record', buyerDecision: 'Stop the check safely, isolate the affected stock, and route the issue to qualified personnel. Do not release from a replacement sample alone.' },
    { riskNode: 'Evidence agrees and open issues are closed', evidence: 'Signed requirements review, current qualified records, approved changes, sampled inspection, labels, packing list, carton map', buyerDecision: 'Release only the named model, version, production lots, quantity, destination, and cartons; retain the evidence and remaining limits.' },
  ],
  evidenceBasis: [
    'Two separate CPSC recalls published July 30 and September 17, 2026 were checked directly. They concern different products and mechanisms: OCTROT cord detachment and ignition; JKMAX internal heating-element overheating.',
    'CBS News coverage of the September JKMAX recall was checked as an independent current-attention signal; CPSC remains the primary record for case facts.',
    'The checklist is buyer-side process guidance derived from those records. The cited cases do not prove a particular proposed supplier, model, factory, or lot is defective.',
  ],
  relatedLinks: [
    { href: '/qc-inspection-china', label: 'China QC inspection service', note: 'Scope a physical comparison of approved goods before payment or pickup.' },
    { href: '/quality-control-china-manufacturing-plan', label: 'Manufacturing QC plan', note: 'Define changes, inspection points, corrective action, and release authority before production.' },
    { href: '/verify-china-lab-test-report', label: 'Verify a China lab test report', note: 'Check complete reports against the issuer, tested sample, model, factory, and stated scope.' },
    { href: '/packaging-label-check-before-payment', label: 'Packaging and label checks', note: 'Reconcile model labels, instructions, barcodes, cartons, and packing lists.' },
    { href: resourceGuideHref, label: 'China sourcing risk guides', note: 'Browse related supplier, inspection, packaging, payment, and shipment decisions.' },
    { href: '/free-china-sourcing-risk-check', label: 'Free sourcing risk check', note: 'Share your current order and the evidence gaps before money or goods move.' },
  ],
  sources: [
    { href: cpscJkmaxRecall, label: 'U.S. CPSC — JKMAX heated blanket and heating pad recall', note: 'Primary September 17, 2026 record for heating-element overheating, affected models, reports, injuries, and product identification.' },
    { href: cpscOctrotRecall, label: 'U.S. CPSC — OCTROT heated throw and blanket recall', note: 'Separate July 30, 2026 primary record for cord detachment and ignition, model identification, and incident reports.' },
    { href: cbsJkmaxCoverage, label: 'CBS News — JKMAX heated blanket recall coverage', note: 'September 18, 2026 independent coverage used as a public-attention signal, not as a replacement for the CPSC record.' },
  ],
}

export function makeHeatedBlanketChecksChinaArticleMetadata(): Metadata {
  const article = heatedBlanketChecksChinaArticle
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

export function makeHeatedBlanketChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(heatedBlanketChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Heated blanket pre-shipment release checklist',
      itemListElement: heatedBlanketChecksChinaArticle.checklist.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: `${item.title}: ${item.detail}`,
      })),
    },
  ]
}
