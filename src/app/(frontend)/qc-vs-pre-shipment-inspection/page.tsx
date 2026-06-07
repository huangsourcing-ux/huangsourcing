import { QcVsPreShipmentInspectionArticlePage } from '@/components/resources/QcVsPreShipmentInspectionArticlePage'
import { makeQcVsPreShipmentInspectionArticleMetadata } from '@/lib/qc-vs-pre-shipment-inspection-article'

export const metadata = makeQcVsPreShipmentInspectionArticleMetadata()

export default function QcVsPreShipmentInspectionArticle() {
  return <QcVsPreShipmentInspectionArticlePage />
}
