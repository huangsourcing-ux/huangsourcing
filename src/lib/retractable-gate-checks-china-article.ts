import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import { retractableGateChecksChinaArticleHref, resourceGuideHref } from '@/lib/site-links'

export const ecfrGateRule = 'https://www.ecfr.gov/current/title-16/chapter-II/subchapter-B/part-1239/section-1239.2'
export const federalRegisterGateRule = 'https://www.federalregister.gov/documents/2026/04/01/2026-06306/safety-standard-for-gates-and-enclosures'
export const cpscGateGuidance = 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Gates-and-Enclosures'
export const cpscCumborRecall = 'https://www.cpsc.gov/Recalls/2026/Aborder-Products-Recalls-Cumbor-Retractable-Safety-Gates-Due-to-Risk-of-Serious-Injury-or-Death-to-Children-from-Entrapment-Violates-Mandatory-Standard-for-Gates-and-Enclosures'
export const cpscBabyBondRecall = 'https://www.cpsc.gov/Recalls/2026/Infant-Innovations-Recalls-BabyBond-Retractable-Safety-Gates-Due-to-Risk-of-Serious-Injury-or-Death-to-Children-from-Entrapment-Violates-Mandatory-Standard-for-Gates-and-Enclosures'
export const bureauVeritasGateUpdate = 'https://www.cps.bureauveritas.com/newsroom/us-cpsc-publishes-direct-final-rule-gates-and-enclosures-0'

export const retractableGateChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: retractableGateChecksChinaArticleHref,
  title: 'Retractable Safety Gate Checks Before Shipping from China',
  h1: 'Retractable Safety Gate Checks Before Shipping from China',
  metaTitle: 'Retractable Gate Checks Before China Shipment',
  metaDescription: 'Before releasing China-made retractable safety gates, match the exact model, manufacture date, installed gap, current U.S. test evidence, labels, and cartons.',
  publishedDate: 'September 25, 2026',
  publishedDateIso: '2026-09-25T03:23:31+08:00',
  eyebrow: 'Gate openings · current standard · lot release',
  image: {
    src: '/images/retractable-gate-checks-china.webp',
    width: 1600,
    height: 900,
    alt: 'Original schematic of an unbranded retractable safety gate with the gate-to-floor opening, hardware, model label, and lot evidence marked; not a recalled product or test result',
  },
  imageVariants: [
    { src: '/images/retractable-gate-checks-china.webp', width: 1600, height: 900 },
    { src: '/images/retractable-gate-checks-china-4x3.webp', width: 1200, height: 900 },
    { src: '/images/retractable-gate-checks-china-1x1.webp', width: 1000, height: 1000 },
  ],
  intro: 'Before paying the balance or authorizing pickup for retractable child safety gates made in China, identify the exact model, manufacturing date, installation hardware, intended opening range, test sample, production lot, labels, and cartons. Hold any scope whose finished construction or qualified evidence cannot be matched to the goods.',
  answer: 'Ask the importer and a qualified test partner to determine the applicable U.S. rule and test the correct version. Then compare sampled finished gates, supplied hardware, instructions, and carton identity with that approved version. In an approved test fixture or realistic installation, document the gate-to-floor opening and locking behavior. Visual inspection cannot certify the required opening, strength, or durability tests.',
  whatsappMessage: `Hi Agent Huang,\n\nI need a China-side retractable safety gate evidence and pre-shipment check.\n\nDestination market and importer:\nExact model, SKU, colors, manufacture dates, lots, and quantities:\nApproved sample, drawings, mesh, frame, hardware, latch, and installation range:\nComplete qualified reports, CPC data, standard version, and test sample identity:\nLabels, warnings, instructions, registration form, packaging, and carton map:\nOpen failures, substitutions, corrections, and pickup deadline:\n`,
  checklist: [
    { title: 'Freeze the exact gate', detail: 'Map model, mesh, frame, reel, locking parts, brackets, screws, mounting surfaces, opening range, packaging, factory, manufacture date, and lots to approved files.' },
    { title: 'Confirm the applicable evidence', detail: 'For U.S. scope, reconcile manufacture date, 16 CFR part 1239 version, complete accepted-lab report, CPC, tested configuration, instructions, and any design change.' },
    { title: 'Check installed openings', detail: 'Using a buyer-approved setup, document gate-to-floor and side openings across stated installation positions, mounting hardware, tension, latch operation, and any pet passage feature.' },
    { title: 'Release named cartons only', detail: 'Separate failed or untraceable models and lots; document qualified disposition, correction, repeat checks, quantities, and carton IDs before payment or pickup.' },
  ],
  decisionRows: [
    { riskNode: 'Opening or hardware mismatch', evidence: 'Installed-configuration photos, opening measurements, hardware list, approved drawing, report sample, model and lot IDs', buyerDecision: 'Hold affected models and lots. Obtain qualified evaluation and corrective evidence before re-inspection.' },
    { riskNode: 'Wrong standard or missing CPC link', evidence: 'Manufacture date, current 16 CFR 1239.2, full test report, CPSC-accepted laboratory scope, CPC, production version', buyerDecision: 'Do not release on a report cover, supplier promise, or older variant; ask the responsible importer to close the evidence gap.' },
    { riskNode: 'Version and evidence align', evidence: 'Approved design, qualified records, sampled finished gates, installation kit, labels, registration materials, lot and carton map', buyerDecision: 'Release only the specified model, version, date range, quantity, lots, and cartons, subject to recorded sampling limits.' },
  ],
  evidenceBasis: [
    'The current eCFR text of 16 CFR 1239.2 and April 2026 Federal Register rule establish the U.S. standard version, effective date, and new pet-opening requirement.',
    'The January 2026 Cumbor and BabyBond CPSC notices independently document gate-to-floor entrapment concerns in particular China-made models; neither reports an injury.',
    'Bureau Veritas published independent industry coverage of the 2026 rule change. Buyer-side steps here are analysis of public records, not a claim that Huang Sourcing worked on either recall.',
  ],
  relatedLinks: [
    { href: '/qc-inspection-china', label: 'China QC inspection service', note: 'Scope a documented finished-goods comparison before payment or pickup.' },
    { href: '/quality-control-china-manufacturing-plan', label: 'Manufacturing QC plan', note: 'Define the approved version, change control, stop rules, and release authority.' },
    { href: '/verify-china-lab-test-report', label: 'Verify a China lab test report', note: 'Tie laboratory evidence to the tested model, sample, and actual production.' },
    { href: '/packaging-label-check-before-payment', label: 'Packaging and label checks', note: 'Reconcile model, warnings, registration materials, quantities, and cartons.' },
    { href: resourceGuideHref, label: 'China sourcing risk guides', note: 'Browse related supplier, inspection, and shipment decisions.' },
    { href: '/free-china-sourcing-risk-check', label: 'Free sourcing risk check', note: 'Share an open evidence gap before money or goods move.' },
  ],
  sources: [
    { href: ecfrGateRule, label: 'eCFR — current 16 CFR 1239.2', note: 'Current incorporated ASTM F1004-25 version.' },
    { href: federalRegisterGateRule, label: 'Federal Register — 2026 gates and enclosures rule', note: 'July 19, 2026 effective date, manufacture-date scope, pet-opening change, and testing responsibilities.' },
    { href: cpscGateGuidance, label: 'CPSC — gates and enclosures business guidance', note: 'Product scope, physical requirements, labels, registration form, and CPC; its version table should be read alongside the current eCFR.' },
    { href: cpscCumborRecall, label: 'CPSC — Cumbor S5V2 recall', note: 'January 22, 2026 public case: bottom-opening hazard, affected model and cohort, remedy, and no reported incidents.' },
    { href: cpscBabyBondRecall, label: 'CPSC — BabyBond gate recall', note: 'Separate January 8, 2026 bottom-opening recall for another gate model.' },
    { href: bureauVeritasGateUpdate, label: 'Bureau Veritas — 2026 rule update', note: 'Independent industry account of the new standard version and pet-opening change.' },
  ],
}

export function makeRetractableGateChecksChinaArticleMetadata(): Metadata {
  const article = retractableGateChecksChinaArticle
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

export function makeRetractableGateChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(retractableGateChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Retractable safety gate shipment release checklist',
      itemListElement: retractableGateChecksChinaArticle.checklist.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: `${item.title}: ${item.detail}`,
      })),
    },
  ]
}
