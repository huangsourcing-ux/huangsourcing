import {
  alibabaSupplierVerificationHref,
  alibabaSupplierVerificationPaymentArticleHref,
  aqlInspectionChinaArticleHref,
  amazonFbaPrepArticleHref,
  amazonSellersFbaPrepChinaArticleHref,
  buyerSideInspectionReportArticleHref,
  chinaFactoryProductionDelaysArticleHref,
  chinaFactorySubcontractingRiskArticleHref,
  chinaQcInspectionFailsArticleHref,
  chinaQcInspectionBookingChecklistArticleHref,
  chineseSupplierDepositDecisionArticleHref,
  defectiveProductsChinaSupplierDisputeArticleHref,
  factoryVsTradingCompanyChinaHref,
  factoryVsTradingCompanySignalsArticleHref,
  fnskuLabelCheckHref,
  fnskuLabelMistakesArticleHref,
  forwarderPickupChinaRisksArticleHref,
  goldenSampleChinaManufacturingArticleHref,
  huangSourcingCheckScopeArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  preShipmentBeforePickupArticleHref,
  productionVsPreShipmentInspectionArticleHref,
  qcBeforeBalanceArticleHref,
  qcVsPreShipmentInspectionArticleHref,
  resourceGuideHref,
  sampleConsolidationCompareSuppliersArticleHref,
  supplierDepositGuideHref,
  supplierVerificationChinaLimitsArticleHref,
  supplierVerificationChecklistHref,
  supplierVerificationVsFactoryAuditArticleHref,
} from '@/lib/site-links'
import { getAbsoluteUrl } from '@/lib/site-url'
import { makeOrganizationReference } from '@/lib/structured-data'

export type ResourceGuideCategory = {
  ctaHref: string
  ctaLabel: string
  id: string
  links: {
    href: string
    label: string
  }[]
  summary: string
  title: string
}

export const resourceGuideCategories: ResourceGuideCategory[] = [
  {
    id: 'supplier-verification',
    title: 'Supplier Verification',
    summary:
      'Use these guides when the supplier profile looks convincing but the company identity, factory role, quote terms, or deposit request still feels unclear. This category helps overseas buyers slow down before payment, compare visible supplier signals, and understand when a free risk check is enough versus when focused supplier verification should happen before the first transfer or signed production invoice.',
    links: [
      { href: supplierVerificationChecklistHref, label: 'Supplier verification China checklist' },
      {
        href: supplierVerificationChinaLimitsArticleHref,
        label: 'Supplier verification China limits',
      },
      {
        href: supplierVerificationVsFactoryAuditArticleHref,
        label: 'Supplier verification vs factory audit',
      },
      {
        href: chinaFactorySubcontractingRiskArticleHref,
        label: 'China factory subcontracting risk checklist',
      },
      { href: supplierDepositGuideHref, label: 'How to verify a Chinese supplier before deposit' },
      { href: chineseSupplierDepositDecisionArticleHref, label: 'Should I pay a 30% supplier deposit?' },
      { href: '/before-deposit-china-supplier-check', label: 'Before deposit supplier check' },
      { href: alibabaSupplierVerificationHref, label: 'Alibaba supplier verification' },
      {
        href: alibabaSupplierVerificationPaymentArticleHref,
        label: 'Alibaba supplier verification before payment',
      },
      { href: factoryVsTradingCompanyChinaHref, label: 'Factory vs trading company in China' },
      { href: factoryVsTradingCompanySignalsArticleHref, label: 'Factory vs trading company practical signals' },
      { href: '/supplier-verification-china', label: 'Supplier Verification China' },
      { href: '/free-china-sourcing-risk-check', label: 'Free Sourcing Risk Check' },
    ],
    ctaHref: '/before-deposit-china-supplier-check',
    ctaLabel: 'Check supplier before deposit',
  },
  {
    id: 'qc-inspection',
    title: 'QC Inspection',
    summary:
      'Use these guides when production is finished or nearly finished and you need buyer-side evidence before releasing balance payment. This category connects practical QC inspection questions with visible product condition, defects, quantity signals, packaging, labels, carton marks, and the decision to approve, hold payment, request rework, or schedule a re-inspection while goods are still in China and supplier correction is still realistic.',
    links: [
      { href: goldenSampleChinaManufacturingArticleHref, label: 'Golden sample manufacturing QC guide' },
      { href: aqlInspectionChinaArticleHref, label: 'AQL inspection sample size and defect limits' },
      { href: buyerSideInspectionReportArticleHref, label: 'Buyer-side inspection report guide' },
      {
        href: defectiveProductsChinaSupplierDisputeArticleHref,
        label: 'Defective products from a China supplier: dispute guide',
      },
      { href: chinaQcInspectionBookingChecklistArticleHref, label: 'China QC inspection booking checklist' },
      {
        href: productionVsPreShipmentInspectionArticleHref,
        label: 'Production vs pre-shipment inspection',
      },
      {
        href: qcVsPreShipmentInspectionArticleHref,
        label: 'QC inspection vs pre-shipment inspection',
      },
      {
        href: packagingLabelCheckBeforePaymentArticleHref,
        label: 'Packaging and label checks before final payment',
      },
      { href: qcBeforeBalanceArticleHref, label: 'QC inspection before balance payment' },
      { href: chinaQcInspectionFailsArticleHref, label: 'What happens when China QC fails' },
      { href: '/before-balance-payment-qc-china', label: 'Inspection before balance payment' },
      { href: '/qc-inspection-china', label: 'QC Inspection China' },
      { href: '/sample-inspection-report-china', label: 'Sample inspection report' },
    ],
    ctaHref: '/before-balance-payment-qc-china',
    ctaLabel: 'Inspect before balance payment',
  },
  {
    id: 'pre-shipment-inspection',
    title: 'Pre-Shipment Inspection',
    summary:
      'Use these guides when cartons are packed, the supplier says the shipment is ready, or the forwarder is about to collect. This category focuses on final shipment readiness before goods leave the supplier, including carton condition, shipping marks, labels, packing-list signals, pickup blockers, and whether release should proceed or wait for correction before freight moves and access becomes harder later.',
    links: [
      { href: forwarderPickupChinaRisksArticleHref, label: 'Forwarder pickup China checklist' },
      {
        href: productionVsPreShipmentInspectionArticleHref,
        label: 'Production vs pre-shipment inspection',
      },
      {
        href: qcVsPreShipmentInspectionArticleHref,
        label: 'QC inspection vs pre-shipment inspection',
      },
      { href: preShipmentBeforePickupArticleHref, label: 'Pre-shipment inspection before pickup' },
      { href: '/before-forwarder-pickup-inspection-china', label: 'Before forwarder pickup' },
      { href: '/china-pre-shipment-inspection', label: 'China Pre-Shipment Inspection' },
      { href: '/sample-inspection-report-china', label: 'Sample inspection report' },
    ],
    ctaHref: '/before-forwarder-pickup-inspection-china',
    ctaLabel: 'Check before pickup',
  },
  {
    id: 'amazon-fba-prep',
    title: 'Amazon FBA Prep',
    summary:
      'Use these guides when Amazon-bound goods are still in China and visible prep evidence matters before shipment. This category covers FNSKU labels, carton labels, SKU separation, carton condition, packing details, forwarder pickup readiness, and the limits of China-side prep support compared with Amazon receiving approval or marketplace compliance after arrival at fulfillment centers or later warehouse processing by Amazon teams.',
    links: [
      { href: amazonSellersFbaPrepChinaArticleHref, label: 'Do Amazon sellers need FBA prep?' },
      { href: amazonFbaPrepArticleHref, label: 'Amazon FBA prep in China checklist' },
      { href: fnskuLabelMistakesArticleHref, label: 'FNSKU label mistakes before shipment' },
      { href: '/before-amazon-fba-shipment-china', label: 'Before Amazon FBA shipment' },
      { href: fnskuLabelCheckHref, label: 'FNSKU label check China' },
      { href: '/amazon-fba-prep-china', label: 'Amazon FBA Prep China' },
      { href: '/before-forwarder-pickup-inspection-china', label: 'Before forwarder pickup' },
    ],
    ctaHref: '/before-amazon-fba-shipment-china',
    ctaLabel: 'Check FBA prep before shipment',
  },
  {
    id: 'sample-consolidation',
    title: 'Sample Consolidation',
    summary:
      'Use these guides before choosing a supplier, especially when several Chinese factories or traders are sending samples. This category explains how a China-side hub can receive, photograph, organize, compare, and forward samples together, reducing freight waste and helping buyers spot obvious quality, finish, packaging, or supplier-origin differences before committing to production or deposit payment with one supplier in China later.',
    links: [
      { href: goldenSampleChinaManufacturingArticleHref, label: 'Golden sample approval and QC' },
      {
        href: sampleConsolidationCompareSuppliersArticleHref,
        label: 'Sample consolidation China supplier comparison',
      },
      { href: '/compare-china-supplier-samples', label: 'Compare supplier samples' },
      { href: '/sample-consolidation-china', label: 'Sample Consolidation China' },
      { href: '/supplier-verification-china', label: 'Supplier verification after samples' },
    ],
    ctaHref: '/compare-china-supplier-samples',
    ctaLabel: 'Compare supplier samples',
  },
  {
    id: 'china-sourcing-risk-notes',
    title: 'China Sourcing Risk Notes',
    summary:
      'Use these notes when the exact service is not obvious yet, but the sourcing situation feels risky. This category points buyers toward practical triage: supplier pressure, vague quotes, missing evidence, unclear shipment readiness, and the honest limits of photo-backed checks before deposit, balance payment, pickup, or shipment release from China in real buyer conversations and urgent decisions under pressure today.',
    links: [
      { href: '/china-sourcing-services', label: 'China sourcing services overview' },
      { href: huangSourcingCheckScopeArticleHref, label: 'What Huang Sourcing can check' },
      {
        href: defectiveProductsChinaSupplierDisputeArticleHref,
        label: 'How to handle defective products from a China supplier',
      },
      {
        href: chinaFactoryProductionDelaysArticleHref,
        label: 'China factory production delay timeline guide',
      },
      {
        href: chinaFactorySubcontractingRiskArticleHref,
        label: 'Who is actually making the order?',
      },
      { href: '/free-china-sourcing-risk-check', label: 'Free Sourcing Risk Check' },
      { href: '/sample-inspection-report-china', label: 'Sample report evidence' },
      { href: '/before-deposit-china-supplier-check', label: 'Before deposit risk' },
    ],
    ctaHref: '/free-china-sourcing-risk-check',
    ctaLabel: 'Start with Free Risk Check',
  },
  {
    id: 'buyer-decision-checklists',
    title: 'Buyer Decision Checklists',
    summary:
      'Use these checklists when you know the next decision but not the service name. Start from the buyer moment: before deposit, before supplier selection, before balance payment, before pickup, or before FBA shipment. Each guide explains the practical evidence to request and the likely China-side check that fits that decision point before money or goods move out of China safely.',
    links: [
      { href: huangSourcingCheckScopeArticleHref, label: 'Huang Sourcing check scope' },
      { href: supplierVerificationChecklistHref, label: 'Supplier verification checklist' },
      {
        href: supplierVerificationChinaLimitsArticleHref,
        label: 'Supplier verification proof limits',
      },
      {
        href: alibabaSupplierVerificationPaymentArticleHref,
        label: 'Alibaba supplier payment verification checklist',
      },
      {
        href: supplierVerificationVsFactoryAuditArticleHref,
        label: 'Supplier verification vs factory audit',
      },
      {
        href: chinaFactorySubcontractingRiskArticleHref,
        label: 'Factory subcontracting and production-site checklist',
      },
      { href: chineseSupplierDepositDecisionArticleHref, label: '30% supplier deposit decision checklist' },
      { href: factoryVsTradingCompanySignalsArticleHref, label: 'Factory vs trading company checklist' },
      { href: '/before-deposit-china-supplier-check', label: 'Before deposit checklist' },
      { href: buyerSideInspectionReportArticleHref, label: 'Buyer-side inspection report checklist' },
      {
        href: defectiveProductsChinaSupplierDisputeArticleHref,
        label: 'Defective shipment evidence and remedy checklist',
      },
      { href: goldenSampleChinaManufacturingArticleHref, label: 'Golden sample approval checklist' },
      { href: aqlInspectionChinaArticleHref, label: 'AQL sample size and defect limits' },
      {
        href: sampleConsolidationCompareSuppliersArticleHref,
        label: 'Sample comparison before factory selection',
      },
      { href: chinaQcInspectionBookingChecklistArticleHref, label: 'What to send before China QC inspection' },
      {
        href: productionVsPreShipmentInspectionArticleHref,
        label: 'Production vs pre-shipment inspection',
      },
      {
        href: qcVsPreShipmentInspectionArticleHref,
        label: 'QC vs pre-shipment inspection decision',
      },
      {
        href: packagingLabelCheckBeforePaymentArticleHref,
        label: 'Packaging and label release checklist',
      },
      { href: '/compare-china-supplier-samples', label: 'Before supplier selection checklist' },
      { href: qcBeforeBalanceArticleHref, label: 'QC before balance payment checklist' },
      { href: chinaQcInspectionFailsArticleHref, label: 'Failed QC next-step decision' },
      { href: '/before-balance-payment-qc-china', label: 'Before balance payment checklist' },
      { href: forwarderPickupChinaRisksArticleHref, label: 'Forwarder pickup China checklist' },
      { href: preShipmentBeforePickupArticleHref, label: 'Pre-shipment inspection checklist' },
      { href: '/before-forwarder-pickup-inspection-china', label: 'Before pickup checklist' },
      { href: amazonSellersFbaPrepChinaArticleHref, label: 'Amazon sellers FBA prep decision' },
      { href: amazonFbaPrepArticleHref, label: 'Amazon FBA prep checklist' },
      { href: fnskuLabelMistakesArticleHref, label: 'FNSKU label check before shipment' },
    ],
    ctaHref: '/free-china-sourcing-risk-check',
    ctaLabel: 'Start with Free Risk Check',
  },
]

export function makeResourceGuideJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'China Sourcing Risk Guides',
    description:
      'China sourcing risk guide center for overseas buyers comparing supplier verification, QC inspection, pre-shipment inspection, Amazon FBA prep, sample consolidation, risk notes, and buyer decision checklists.',
    url: getAbsoluteUrl(resourceGuideHref),
    inLanguage: 'en',
    publisher: makeOrganizationReference(),
    hasPart: resourceGuideCategories.map((category) => ({
      '@type': 'CreativeWork',
      name: category.title,
      url: getAbsoluteUrl(`${resourceGuideHref}#${category.id}`),
    })),
  }
}
