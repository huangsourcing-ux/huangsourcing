import type { Metadata } from 'next'
import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'

export const cpscSleepMachineRecall = "https://www.cpsc.gov/Recalls/2026/Love-To-Dream-Recalls-Portable-Sleep-Machines-Due-to-Risk-of-Injury-from-Fire-and-Burn-Hazards"
export const opssSleepMachineRecall = "https://www.gov.uk/product-safety-alerts-reports-recalls/product-recall-love-to-dream-sleep-machine-2609-0065"
export const usSleepMachineNotice = "https://lovetodream.com/pages/product-recall"
export const ukSleepMachineNotice = "https://lovetodream.co.uk/pages/product-recall"

export const sleepMachineChecksChinaArticle = {
  author: "editorial-team" as const,
  href: "/sleep-machine-checks-china",
  title: "Sleep Machine Charging Checks Before Shipping from China",
  h1: "Sleep Machine Charging Checks Before Shipping from China",
  metaTitle: "Sleep Machine Charging Checks Before Shipment",
  metaDescription: "Before releasing a China-made sleep machine order, match the device, USB cable, charger requirements, test evidence, market labels and date codes to each lot.",
  publishedDate: "October 3, 2026",
  publishedDateIso: "2026-10-03T03:29:10+08:00",
  eyebrow: "Charging compatibility · pack contents · lot release",
  image: {
    src: "/images/sleep-machine-checks-china.webp",
    width: 1600,
    height: 900,
    alt: "Original diagram connecting a generic sound machine, cable and specified adapter to evidence and a lot release record; not a recalled product or test result"
  },
  imageVariants: [
    {
      src: "/images/sleep-machine-checks-china.webp",
      width: 1600,
      height: 900
    },
    {
      src: "/images/sleep-machine-checks-china-4x3.webp",
      width: 1200,
      height: 900
    },
    {
      src: "/images/sleep-machine-checks-china-1x1.webp",
      width: 1000,
      height: 1000
    }
  ],
  intro: "Before paying the balance or authorizing pickup for China-made portable sleep machines, match the device, supplied cable, specified power adapter, charging instructions and qualified test evidence. Hold lots with an unexplained accessory substitution, contradictory power requirements, or date codes that cannot be traced to the intended market and cartons.",
  answer: "Approve a documented charging configuration, including what the customer must supply when no adapter is included. Compare the packed product and instructions with that configuration, then connect accepted evidence and closed corrections to named lots. A working sound demo, a matching USB connector or a battery transport document cannot establish finished-product charging safety.",
  whatsappMessage: "Hi Agent Huang,\n\nI need a China-side sleep machine charging-configuration and shipment check.\n\nDestination and importer:\nModel, hardware revision, battery and date codes:\nSupplied cable and adapter (or adapter sold separately):\nApproved input and charger requirements:\nReports and tested-sample configuration:\nLabels, instructions, quantities and carton map:\nOpen issues, balance date and pickup deadline:\n",
  checklist: [
    {
      title: "Define the complete charging configuration",
      detail: "Record the model, hardware and battery revision, cable identity, supplied or customer-supplied adapter requirements, destination and intended operating modes. Retain approved references and the current bill of materials."
    },
    {
      title: "Connect reports to that configuration",
      detail: "Have the importer and qualified lab reconcile full reports, sample photographs, charger and cable identity, charging conditions and limitations. Ask for a documented change assessment if any relevant component or instruction has changed."
    },
    {
      title: "Compare actual units and retail packs",
      detail: "Use an agreed safe inspection plan to compare markings, ports, cables, included adapters, instructions and pack contents. Record model and date codes with lot and carton IDs. Stop on abnormal heat, swelling, odor or damage."
    },
    {
      title: "Release only the reconciled lot scope",
      detail: "Separate mixed or unmatched stock. Close evidence gaps and corrections, obtain responsible-party acceptance, and repeat the relevant checks. Record which date codes, quantities and cartons are released and which remain held."
    }
  ],
  decisionRows: [
    {
      riskNode: "Adapter omitted but requirements are unclear",
      evidence: "Approved instructions, device input markings, declared compatible supply specification and qualified evaluation of the intended configuration",
      buyerDecision: "Hold the affected retail-pack version. Obtain clear, technically reviewed instructions and aligned evidence before approving artwork or shipment."
    },
    {
      riskNode: "Supplier changes the cable, adapter or charging components",
      evidence: "Before-and-after part IDs, revision history, tested-sample configuration, affected lots and qualified change assessment",
      buyerDecision: "Hold the changed scope until the responsible parties accept the assessment and any required testing. Physical connector fit does not close the gap."
    },
    {
      riskNode: "Date codes or market packs are mixed",
      evidence: "Unit and box markings, destination labels, lot-to-carton map, recall screening and segregation records",
      buyerDecision: "Separate and reconcile stock. Screen each destination against its relevant notice; do not apply one market’s affected-code list to all markets."
    },
    {
      riskNode: "Charging abnormality or unresolved failure",
      evidence: "Unit and lot IDs, observed symptom, configuration used, stop record and containment scope",
      buyerDecision: "Stop operation and hold affected stock for qualified assessment. Do not improvise charger combinations or repeat a failing check to obtain a pass."
    },
    {
      riskNode: "Configuration, evidence and packed stock align",
      evidence: "Responsible-party acceptance, approved references, sampled observations, closed corrections and named lot/carton scope",
      buyerDecision: "Authorize only the identified scope, with sampling limits and remaining conditions recorded. Confirm transport requirements separately."
    }
  ],
  relatedLinks: [
    {
      href: "/qc-inspection-china",
      label: "China QC inspection",
      note: "Compare sampled production and retail packs against approved references."
    },
    {
      href: "/verify-china-lab-test-report",
      label: "Verify a China lab report",
      note: "Match the tested configuration to current components and instructions."
    },
    {
      href: "/packaging-label-check-before-payment",
      label: "Packaging checks before payment",
      note: "Close accessory-list and instruction mismatches before cartons leave."
    },
    {
      href: "/qc-before-balance",
      label: "QC before balance payment",
      note: "Document a hold or release decision while goods remain accessible."
    },
    {
      href: "/lithium-battery-air-shipping-china-2026",
      label: "Lithium battery transport checks",
      note: "Treat shipment evidence as a separate part of release preparation."
    },
    {
      href: "/china-sourcing-risk-guides",
      label: "China sourcing risk guides",
      note: "Browse supplier, production, payment and shipment decisions."
    }
  ],
  sources: [
    {
      href: "https://www.cpsc.gov/Recalls/2026/Love-To-Dream-Recalls-Portable-Sleep-Machines-Due-to-Risk-of-Injury-from-Fire-and-Burn-Hazards",
      label: "CPSC — Love To Dream recall 26-798",
      note: "September 24, 2026: U.S. product scope, charging hazard, China manufacture and refund remedy."
    },
    {
      href: "https://www.gov.uk/product-safety-alerts-reports-recalls/product-recall-love-to-dream-sleep-machine-2609-0065",
      label: "UK OPSS — recall 2609-0065",
      note: "September 10, 2026: UK affected date codes and recall action."
    },
    {
      href: "https://lovetodream.com/pages/product-recall",
      label: "Love to Dream — U.S. recall notice",
      note: "Manufacturer confirmation of the U.S. scope and instructions for affected customers."
    },
    {
      href: "https://lovetodream.co.uk/pages/product-recall",
      label: "Love to Dream — UK recall notice",
      note: "Manufacturer notice describing charging devices not supplied with the product and the UK scope."
    },
    {
      href: "https://www.nbcnews.com/select/shopping/love-to-dream-recall-2026-rcna599943",
      label: "NBC Select report",
      note: "September 28, 2026 coverage."
    }
  ]
}

export function makeSleepMachineChecksChinaArticleMetadata(): Metadata {
  const article = sleepMachineChecksChinaArticle
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: article.href },
    openGraph: { title: article.metaTitle, description: article.metaDescription, url: article.href, siteName: 'Huang Sourcing', type: 'article', publishedTime: article.publishedDateIso, images: getArticleOpenGraphImages(article) },
    twitter: { card: 'summary_large_image', title: article.metaTitle, description: article.metaDescription, images: [article.image.src] },
  }
}

export function makeSleepMachineChecksChinaArticleJsonLd() {
  return [makeArticleJsonLd(sleepMachineChecksChinaArticle), {
    '@context': 'https://schema.org', '@type': 'ItemList', name: 'Sleep machine charging and shipment checklist',
    itemListElement: sleepMachineChecksChinaArticle.checklist.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: `${item.title}: ${item.detail}` })),
  }]
}
