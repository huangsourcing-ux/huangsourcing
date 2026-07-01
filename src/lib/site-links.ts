// [!code ++] Central contact URLs (mailto bodies address Agent Huang, not a former placeholder name)
export const businessEmail = 'agent@huangsourcing.com' as const

export const chinaSourcingInspectionPricingHref = '/china-sourcing-inspection-pricing'
export const chinaSourcingServicesHref = '/china-sourcing-services'
export const contactHref = '/contact'
export const aqlInspectionChinaArticleHref =
  '/aql-inspection-china-sample-size-defect-limits'
export const buyerSideInspectionReportArticleHref = '/buyer-side-inspection-report'
export const chinaFactoryProductionDelaysArticleHref =
  '/china-factory-production-delays-timeline-management'
export const chinaFactorySubcontractingRiskArticleHref =
  '/china-factory-subcontracting-risk'
export const chinaSection301TariffCheckArticleHref =
  '/china-section-301-tariff-check-2026'
export const cpscEfilingChinaImportsArticleHref =
  '/cpsc-efiling-china-imports-2026'
export const chinaSamplesUsCustomsArticleHref =
  '/shipping-samples-from-china-to-usa-customs-2026'
export const chinaQcInspectionFailsArticleHref = '/china-qc-inspection-fails'
export const chinaQcInspectionBookingChecklistArticleHref =
  '/china-qc-inspection-booking-checklist'
export const chineseSupplierDepositDecisionArticleHref = '/chinese-supplier-deposit-decision'
export const defectiveProductsChinaSupplierDisputeArticleHref =
  '/defective-products-china-supplier-dispute'
export const euGpsrLabelCheckChinaArticleHref =
  '/eu-gpsr-label-check-china-sourcing-2026'
export const euPpwrPackagingCheckChinaArticleHref =
  '/eu-ppwr-packaging-check-china-sourcing-2026'
export const euBatteryRegulationChinaArticleHref =
  '/eu-battery-regulation-china-sourcing-2026'
export const euDeforestationRegulationChinaArticleHref =
  '/eu-deforestation-regulation-china-sourcing-2026'
export const euCbamChinaSourcingArticleHref =
  '/eu-cbam-china-sourcing-2026'
export const euLowValueParcelDutyChinaArticleHref =
  '/eu-3-euro-customs-duty-china-parcels-2026'
export const uflpaChinaSupplierCheckArticleHref =
  '/uflpa-china-supplier-check-2026'
export const whatToSendBeforeChinaInspectionHref = '/what-to-send-before-china-inspection'
export const alibabaSupplierVerificationHref = '/alibaba-supplier-verification-china'
export const alibabaSupplierVerificationPaymentArticleHref =
  '/alibaba-supplier-verification-payment'
export const amazonFbaPrepArticleHref = '/amazon-fba-prep-china-fnsku-carton-labels'
export const amazonSellersFbaPrepChinaArticleHref = '/amazon-sellers-fba-prep-china'
export const factoryVsTradingCompanyChinaHref = '/factory-vs-trading-company-china'
export const factoryVsTradingCompanySignalsArticleHref = '/factory-vs-trading-company-china-practical-signals-buyers-can-check'
export const fnskuLabelCheckHref = '/fnsku-label-check-china'
export const fnskuLabelMistakesArticleHref = '/fnsku-label-mistakes-before-goods-leave-china'
export const forwarderPickupChinaRisksArticleHref = '/forwarder-pickup-china-risks'
export const goldenSampleChinaManufacturingArticleHref =
  '/golden-sample-china-manufacturing-quality-control'
export const huangSourcingCheckScopeArticleHref = '/huang-sourcing-check-scope'
export const packagingLabelCheckBeforePaymentArticleHref =
  '/packaging-label-check-before-payment'
export const qualityControlChinaManufacturingPlanArticleHref =
  '/quality-control-china-manufacturing-plan'
export const preShipmentBeforePickupArticleHref = '/pre-shipment-inspection-china-before-pickup'
export const productionVsPreShipmentInspectionArticleHref =
  '/production-vs-pre-shipment-inspection'
export const qcVsPreShipmentInspectionArticleHref =
  '/qc-vs-pre-shipment-inspection'
export const privacyConfidentialityHref = '/privacy-confidentiality'
export const qcBeforeBalanceArticleHref = '/qc-inspection-china-before-balance-payment'
export const refundPolicyHref = '/refund-policy'
export const resourceGuideHref = '/china-sourcing-risk-guides'
export const reportHref = '/media/huang-sourcing-sample-report-website-edition-v3.pdf'
export const sampleReportPageHref = '/sample-inspection-report-china'
export const sampleConsolidationCompareSuppliersArticleHref =
  '/sample-consolidation-china-compare-suppliers-before-choosing-factory'
export const scopeLimitationsHref = '/scope-limitations'
export const supplierVerificationChecklistHref = '/supplier-verification-china-checklist'
export const supplierVerificationChinaLimitsArticleHref =
  '/supplier-verification-china-limits'
export const supplierVerificationVsFactoryAuditArticleHref =
  '/supplier-verification-vs-factory-audit'
export const supplierDepositGuideHref = '/how-to-verify-chinese-supplier-before-deposit'
export const termsBookingPolicyHref = '/terms-booking-policy'
export const publicWhatsAppHref = 'https://wa.me/15035930974' as const
export const publicLinkedInHref = 'https://www.linkedin.com/in/huangsourcing/' as const
export const linkedInProfileDisplay = 'HuangSourcing' as const
export const whatsappPhoneDisplay = '+1 503-593-0974' as const

export function buildWhatsAppHref(message: string) {
  return `${publicWhatsAppHref}?text=${encodeURIComponent(message)}` as const
}

const freeRiskCheckMessage = `Hi Agent Huang,

I want to Start Free - quick sourcing risk check.

Supplier link / quote:
Product:
Order stage:
Deadline:
`

export const freeRiskCheckWhatsAppHref =
  buildWhatsAppHref(freeRiskCheckMessage)

const bookingBody = `Hi Agent Huang,

I want to book a $299 inspection.

Product:
Factory location:
Inspection date:
Order quantity:
`
const customQuoteBody = `Hi Agent Huang,

I need a quote for:

- Channel: Amazon / Walmart / other
- Volume:
- SKUs:
- Destinations:
- Label / insert needs:
`
export const bookingMailto = `mailto:${businessEmail}?subject=${encodeURIComponent('Book a Free Sourcing Call - Huang Sourcing')}&body=${encodeURIComponent(bookingBody)}`
export const customQuoteMailto = `mailto:${businessEmail}?subject=${encodeURIComponent('Custom Quote — FBA & Logistics')}&body=${encodeURIComponent(customQuoteBody)}`
