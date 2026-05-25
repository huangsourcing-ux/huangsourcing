import { PreShipmentBeforePickupArticlePage } from '@/components/resources/PreShipmentBeforePickupArticlePage'
import { makePreShipmentBeforePickupArticleMetadata } from '@/lib/pre-shipment-before-pickup-article'

export const metadata = makePreShipmentBeforePickupArticleMetadata()

export default function PreShipmentInspectionChinaBeforePickupArticle() {
  return <PreShipmentBeforePickupArticlePage />
}
