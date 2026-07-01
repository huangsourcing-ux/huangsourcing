import type { MetadataRoute } from 'next'

import { getAbsoluteUrl } from '@/lib/site-url'
import { riskGuideSlugs } from '@/lib/risk-guide-pages'
import { seoServiceSlugs } from '@/lib/seo-service-pages'
import {
  alibabaSupplierVerificationPaymentArticleHref,
  aqlInspectionChinaArticleHref,
  amazonFbaPrepArticleHref,
  amazonSellersFbaPrepChinaArticleHref,
  buyerSideInspectionReportArticleHref,
  chinaFactoryProductionDelaysArticleHref,
  chinaFactorySubcontractingRiskArticleHref,
  chinaSamplesUsCustomsArticleHref,
  chinaSection301TariffCheckArticleHref,
  chinaQcInspectionFailsArticleHref,
  chinaQcInspectionBookingChecklistArticleHref,
  chinaSourcingInspectionPricingHref,
  chineseSupplierDepositDecisionArticleHref,
  contactHref,
  cpscEfilingChinaImportsArticleHref,
  euBatteryRegulationChinaArticleHref,
  euCbamChinaSourcingArticleHref,
  euDeforestationRegulationChinaArticleHref,
  factoryVsTradingCompanySignalsArticleHref,
  euGpsrLabelCheckChinaArticleHref,
  euLowValueParcelDutyChinaArticleHref,
  euPpwrPackagingCheckChinaArticleHref,
  fnskuLabelMistakesArticleHref,
  forwarderPickupChinaRisksArticleHref,
  goldenSampleChinaManufacturingArticleHref,
  huangSourcingCheckScopeArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  preShipmentBeforePickupArticleHref,
  productionVsPreShipmentInspectionArticleHref,
  qcBeforeBalanceArticleHref,
  qcVsPreShipmentInspectionArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
  sampleConsolidationCompareSuppliersArticleHref,
  supplierVerificationChinaLimitsArticleHref,
  supplierVerificationChecklistHref,
  supplierVerificationVsFactoryAuditArticleHref,
  supplierDepositGuideHref,
  uflpaChinaSupplierCheckArticleHref,
  whatToSendBeforeChinaInspectionHref,
} from '@/lib/site-links'
import { sourcingStageSlugs } from '@/lib/sourcing-stage-pages'
import { trustPolicyPages, trustPolicySlugs } from '@/lib/trust-policy-pages'

type SitemapEntry = {
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  path: string
  priority: number
}

const staticRoutes: SitemapEntry[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  {
    path: '/china-sourcing-services',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: chinaSourcingInspectionPricingHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: whatToSendBeforeChinaInspectionHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: contactHref,
    changeFrequency: 'yearly',
    priority: 0.6,
  },
  {
    path: '/free-china-sourcing-risk-check',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/sample-inspection-report-china',
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: resourceGuideHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: supplierDepositGuideHref,
    changeFrequency: 'monthly',
    priority: 0.76,
  },
  {
    path: chineseSupplierDepositDecisionArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: supplierVerificationChecklistHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: supplierVerificationChinaLimitsArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: supplierVerificationVsFactoryAuditArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: uflpaChinaSupplierCheckArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: chinaSection301TariffCheckArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: alibabaSupplierVerificationPaymentArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: qcBeforeBalanceArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: aqlInspectionChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: goldenSampleChinaManufacturingArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: chinaQcInspectionFailsArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: packagingLabelCheckBeforePaymentArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: euGpsrLabelCheckChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: euPpwrPackagingCheckChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: euBatteryRegulationChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: euDeforestationRegulationChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: euCbamChinaSourcingArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: euLowValueParcelDutyChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: cpscEfilingChinaImportsArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: chinaQcInspectionBookingChecklistArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: buyerSideInspectionReportArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: chinaFactoryProductionDelaysArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: chinaFactorySubcontractingRiskArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: chinaSamplesUsCustomsArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: qualityControlChinaManufacturingPlanArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: forwarderPickupChinaRisksArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: huangSourcingCheckScopeArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: preShipmentBeforePickupArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: productionVsPreShipmentInspectionArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: qcVsPreShipmentInspectionArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: amazonSellersFbaPrepChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: amazonFbaPrepArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: fnskuLabelMistakesArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: factoryVsTradingCompanySignalsArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: sampleConsolidationCompareSuppliersArticleHref,
    changeFrequency: 'monthly',
    priority: 0.78,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const serviceRoutes: SitemapEntry[] = seoServiceSlugs.map((slug) => ({
    path: `/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))
  const stageRoutes: SitemapEntry[] = sourcingStageSlugs.map((slug) => ({
    path: `/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.84,
  }))
  const trustPolicyRoutes: SitemapEntry[] = trustPolicySlugs.map((slug) => ({
    path: trustPolicyPages[slug].href,
    changeFrequency: 'yearly',
    priority: 0.5,
  }))
  const riskGuideRoutes: SitemapEntry[] = riskGuideSlugs.map((slug) => ({
    path: `/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.76,
  }))

  return [...staticRoutes, ...stageRoutes, ...serviceRoutes, ...riskGuideRoutes, ...trustPolicyRoutes].map((route) => ({
    url: getAbsoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
