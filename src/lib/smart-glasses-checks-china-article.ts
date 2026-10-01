import type { Metadata } from 'next'
import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'

export const cpscInmoRecall = "https://www.cpsc.gov/Recalls/2026/INMO-International-Technology-Limited-Recalls-INMO-Air3-Smart-Glasses-Due-to-Risk-of-Serious-Injury-or-Death-from-Burn-Hazard"
export const canadaInmoRecall = "https://recalls-rappels.canada.ca/en/alert-recall/inmo-air3-smart-glasses-recalled-due-burn-hazard"
export const androidAuthorityCoverage = "https://www.androidauthority.com/inmo-air-3-smart-glasses-recall-3715219/"

export const smartGlassesChecksChinaArticle = {
  author: "editorial-team" as const,
  href: "/smart-glasses-checks-china",
  title: "Smart Glasses Checks Before Shipping from China",
  h1: "Smart Glasses Checks Before Shipping from China",
  metaTitle: "Smart Glasses Checks Before China Shipment",
  metaDescription: "Before paying for China-made smart glasses, match hardware, firmware, thermal test evidence, battery and charger versions, serial numbers, lots and cartons.",
  publishedDate: "October 2, 2026",
  publishedDateIso: "2026-10-02T03:33:25+08:00",
  eyebrow: "Hardware + firmware · thermal evidence · lot release",
  image: {
    src: "/images/smart-glasses-checks-china.webp",
    width: 1600,
    height: 900,
    alt: "Original diagram linking a generic smart glasses hardware revision, firmware build, qualified evidence and serial-to-carton release record; not a recalled product or test result"
  },
  imageVariants: [
    {
      src: "/images/smart-glasses-checks-china.webp",
      width: 1600,
      height: 900
    },
    {
      src: "/images/smart-glasses-checks-china-4x3.webp",
      width: 1200,
      height: 900
    },
    {
      src: "/images/smart-glasses-checks-china-1x1.webp",
      width: 1000,
      height: 1000
    }
  ],
  intro: "Before paying the balance or authorizing pickup for China-made smart glasses, match the actual hardware revision, installed firmware, battery and charging accessories to the approved configuration and qualified evidence. Hold any lot with unexplained heating, an undocumented software change, or serial numbers that cannot be connected to the release record.",
  answer: "Make the release decision on a controlled hardware–software combination, not on a product name or a successful short demo. Ask qualified parties to assess thermal and electrical evidence for the intended uses, compare sampled production with the approved configuration, and record which serial numbers and cartons are cleared. A factory function check cannot establish safe extended use or substitute for qualified testing.",
  whatsappMessage: "Hi Agent Huang,\n\nI need a China-side smart glasses configuration and pre-shipment check.\n\nDestination and importer:\nModels, serial ranges, hardware/BOM revision:\nApproved firmware build and change history:\nBattery, charger/cable and intended-use modes:\nComplete test reports and tested-sample identity:\nLabels, instructions, lots, quantities and carton map:\nKnown issues, balance-payment date and pickup deadline:\n",
  checklist: [
    {
      title: "Freeze hardware and software together",
      detail: "Record model, hardware/BOM revision, battery and charger/cable version, firmware build, app version where relevant, intended modes, factory, lots and serial ranges. Retain an approved reference unit."
    },
    {
      title: "Match the qualified evidence",
      detail: "Have the responsible importer and qualified lab reconcile tested-sample photos, hardware and software identity, operating modes, test conditions, results and limitations. Escalate every safety-related change for review."
    },
    {
      title: "Compare sampled production",
      detail: "Use an approved safe plan to record device identity, installed build, pairing and agreed functions, hinge/enclosure condition, accessory identity, labels and pack contents. Stop on abnormal heat, swelling, odor or damage."
    },
    {
      title: "Close corrections before named release",
      detail: "Segregate unresolved or mixed versions. Preserve original and corrected build records, qualified disposition, any required retesting and repeat inspection. Release only documented serial ranges and cartons."
    }
  ],
  decisionRows: [
    {
      riskNode: "Abnormal heat, swelling, odor or damaged enclosure",
      evidence: "Unit and serial ID, observed mode and elapsed time, accessory identity, firmware build, lot/carton range and safe stop record",
      buyerDecision: "Stop the check and hold affected scope. Refer to qualified specialists; do not wear the unit, open a battery enclosure, or repeat operation to see whether the symptom disappears."
    },
    {
      riskNode: "Firmware changed or report covers another build",
      evidence: "Approved hardware/BOM, full build identifier, supplier release notes, tested-sample identity, report coverage and change assessment",
      buyerDecision: "Hold the changed scope. Obtain a documented assessment and any required testing. An update screen or “latest firmware” statement does not close the evidence gap."
    },
    {
      riskNode: "Mixed serial ranges, accessories or factory-loaded builds",
      evidence: "Sampled unit records, build readings, battery/charger versions, pack list, rework log and serial-to-carton map",
      buyerDecision: "Hold mixed stock until versions can be separated or controlled correction is verified. A correct reference unit cannot clear unidentified cartons."
    },
    {
      riskNode: "Accepted evidence and corrections align",
      evidence: "Responsible-party acceptance, version-controlled reference, sampled inspection record, closed corrections and named serial/carton scope",
      buyerDecision: "Release only the identified scope with sampling limits and open conditions recorded. Keep transport and destination-market obligations separately confirmed."
    }
  ],
  relatedLinks: [
    {
      href: "/qc-inspection-china",
      label: "China QC inspection",
      note: "Compare sampled finished goods with controlled references."
    },
    {
      href: "/verify-china-lab-test-report",
      label: "Verify a China lab report",
      note: "Connect tested hardware and software to current production."
    },
    {
      href: "/lithium-battery-air-shipping-china-2026",
      label: "Lithium battery shipment checks",
      note: "Keep transport evidence separate from wearable product safety."
    },
    {
      href: "/qc-before-balance",
      label: "QC before balance payment",
      note: "Set a named hold or release decision while stock is accessible."
    },
    {
      href: "/china-sourcing-risk-guides",
      label: "China sourcing risk guides",
      note: "Browse production, payment and shipment decisions."
    },
    {
      href: "/free-china-sourcing-risk-check",
      label: "Free sourcing risk check",
      note: "Send the unresolved evidence gap before pickup."
    }
  ],
  sources: [
    {
      href: "https://www.cpsc.gov/Recalls/2026/INMO-International-Technology-Limited-Recalls-INMO-Air3-Smart-Glasses-Due-to-Risk-of-Serious-Injury-or-Death-from-Burn-Hazard",
      label: "CPSC — INMO AIR3 recall 26-797",
      note: "September 24, 2026: extended-use overheating, affected model, reported incidents and manufacturer-assisted V3.16 repair."
    },
    {
      href: "https://recalls-rappels.canada.ca/en/alert-recall/inmo-air3-smart-glasses-recalled-due-burn-hazard",
      label: "Health Canada — INMO AIR3 recall RA-82650",
      note: "September 24, 2026: joint recall, Canadian scope and firmware 3.16 instruction for the affected product."
    },
    {
      href: "https://www.androidauthority.com/inmo-air-3-smart-glasses-recall-3715219/",
      label: "Android Authority — INMO AIR3 recall reporting",
      note: "September 24 independent editorial coverage used as an attention signal. Official records control case facts; this is not another set of incidents."
    }
  ]
}

export function makeSmartGlassesChecksChinaArticleMetadata(): Metadata {
  const article = smartGlassesChecksChinaArticle
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: article.href },
    openGraph: { title: article.metaTitle, description: article.metaDescription, url: article.href, siteName: 'Huang Sourcing', type: 'article', publishedTime: article.publishedDateIso, images: getArticleOpenGraphImages(article) },
    twitter: { card: 'summary_large_image', title: article.metaTitle, description: article.metaDescription, images: [article.image.src] },
  }
}

export function makeSmartGlassesChecksChinaArticleJsonLd() {
  return [makeArticleJsonLd(smartGlassesChecksChinaArticle), {
    '@context': 'https://schema.org', '@type': 'ItemList', name: 'Smart glasses shipment release checklist',
    itemListElement: smartGlassesChecksChinaArticle.checklist.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: `${item.title}: ${item.detail}` })),
  }]
}
