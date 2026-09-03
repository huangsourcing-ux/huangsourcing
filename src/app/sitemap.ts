import type { MetadataRoute } from 'next'

import { getAbsoluteUrl } from '@/lib/site-url'
import { riskGuideSlugs } from '@/lib/risk-guide-pages'
import { seoServiceSlugs } from '@/lib/seo-service-pages'
import {
  adultBedRailChecksChinaArticleHref,
  alibabaSupplierVerificationPaymentArticleHref,
  aqlInspectionChinaArticleHref,
  amazonFbaPrepArticleHref,
  amazonSellersFbaPrepChinaArticleHref,
  babyLoungerChecksChinaArticleHref,
  babySwingChecksChinaArticleHref,
  babyWalkerChecksChinaArticleHref,
  ceilingFanChecksChinaArticleHref,
  mattressFlammabilityChecksChinaArticleHref,
  smokeCoAlarmChecksChinaArticleHref,
  electricKettleChecksChinaArticleHref,
  miniFridgeChecksChinaArticleHref,
  hairDryerBrushChecksChinaArticleHref,
  pullStringTeethingToyChecksChinaArticleHref,
  squishyToyChecksChinaArticleHref,
  tabletopFirePitChecksChinaArticleHref,
  ziplineKitChecksChinaArticleHref,
  buyerSideInspectionReportArticleHref,
  buttonBatteryPackagingChinaArticleHref,
  childrensSleepwearChecksChinaArticleHref,
  lithiumBatteryAirShippingChinaArticleHref,
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
  euCyberResilienceActChinaArticleHref,
  euDeforestationRegulationChinaArticleHref,
  euForcedLabourRegulationChinaArticleHref,
  factoryVsTradingCompanySignalsArticleHref,
  euGpsrLabelCheckChinaArticleHref,
  euLowValueParcelDutyChinaArticleHref,
  euPpwrPackagingCheckChinaArticleHref,
  euTextileDigitalProductPassportChinaArticleHref,
  euToySafetyRegulationChinaArticleHref,
  fnskuLabelMistakesArticleHref,
  forwarderPickupChinaRisksArticleHref,
  goldenSampleChinaManufacturingArticleHref,
  grillBrushChecksChinaArticleHref,
  huangSourcingCheckScopeArticleHref,
  immersionWaterHeaterChecksChinaArticleHref,
  infantNeckFloatChecksChinaArticleHref,
  magneticToyChecksChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  poolDrainCoverChecksChinaArticleHref,
  portableFuelContainerChecksChinaArticleHref,
  portablePowerStationChecksChinaArticleHref,
  youthAtvChecksChinaArticleHref,
  pressureWasherChecksChinaArticleHref,
  treadmillChecksChinaArticleHref,
  slidePlaysetChecksChinaArticleHref,
  powerBankChecksChinaArticleHref,
  rechargeableHandWarmerChecksChinaArticleHref,
  preShipmentBeforePickupArticleHref,
  productionVsPreShipmentInspectionArticleHref,
  qcBeforeBalanceArticleHref,
  qcVsPreShipmentInspectionArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  rattleTeetherChecksChinaArticleHref,
  smallBallToyChecksChinaArticleHref,
  resourceGuideHref,
  sandFilledToyAsbestosChecksChinaArticleHref,
  sampleConsolidationCompareSuppliersArticleHref,
  supplierVerificationChinaLimitsArticleHref,
  supplierVerificationChecklistHref,
  supplierVerificationVsFactoryAuditArticleHref,
  supplierDepositGuideHref,
  uflpaChinaSupplierCheckArticleHref,
  ustrForcedLaborSection301ChinaArticleHref,
  usCustomsEnforcementChinaImportsArticleHref,
  usDeMinimisSuspensionChinaArticleHref,
  usPostalInformalEntryChinaMailShipmentsArticleHref,
  usSection232MetalTariffsChinaSourcingArticleHref,
  ukPlugCheckChinaSourcingArticleHref,
  sturdyDresserChecksChinaArticleHref,
  toddlerTowerChecksChinaArticleHref,
  verifyChinaLabTestReportArticleHref,
  verifyUlCertificationChinaArticleHref,
  waterBeadToyCpscChecklistArticleHref,
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
    path: verifyChinaLabTestReportArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: uflpaChinaSupplierCheckArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: ustrForcedLaborSection301ChinaArticleHref,
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
    path: euTextileDigitalProductPassportChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: euToySafetyRegulationChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: euBatteryRegulationChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: euCyberResilienceActChinaArticleHref,
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
    path: euForcedLabourRegulationChinaArticleHref,
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
    path: buttonBatteryPackagingChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: waterBeadToyCpscChecklistArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: infantNeckFloatChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: babyLoungerChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: babyWalkerChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: babySwingChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: ceilingFanChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: portableFuelContainerChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: pressureWasherChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: grillBrushChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: rattleTeetherChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: smallBallToyChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: portablePowerStationChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: youthAtvChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: treadmillChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: slidePlaysetChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: mattressFlammabilityChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: smokeCoAlarmChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: tabletopFirePitChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: ziplineKitChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: electricKettleChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: miniFridgeChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: hairDryerBrushChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: pullStringTeethingToyChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: squishyToyChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: powerBankChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: rechargeableHandWarmerChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: adultBedRailChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: immersionWaterHeaterChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: poolDrainCoverChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: magneticToyChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: childrensSleepwearChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: verifyUlCertificationChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: sandFilledToyAsbestosChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: ukPlugCheckChinaSourcingArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: sturdyDresserChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: toddlerTowerChecksChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: lithiumBatteryAirShippingChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
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
    path: usDeMinimisSuspensionChinaArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: usPostalInformalEntryChinaMailShipmentsArticleHref,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: usCustomsEnforcementChinaImportsArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: usSection232MetalTariffsChinaSourcingArticleHref,
    changeFrequency: 'monthly',
    priority: 0.82,
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
