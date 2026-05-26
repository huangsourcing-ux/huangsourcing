import { ProductionVsPreShipmentInspectionArticlePage } from '@/components/resources/ProductionVsPreShipmentInspectionArticlePage'
import { makeProductionVsPreShipmentInspectionArticleMetadata } from '@/lib/production-vs-pre-shipment-inspection-article'

export const metadata = makeProductionVsPreShipmentInspectionArticleMetadata()

export default function ProductionVsPreShipmentInspectionArticle() {
  return <ProductionVsPreShipmentInspectionArticlePage />
}
