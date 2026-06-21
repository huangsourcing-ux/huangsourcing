import { QualityControlChinaManufacturingPlanArticlePage } from '@/components/resources/QualityControlChinaManufacturingPlanArticlePage'
import { makeQualityControlChinaManufacturingPlanArticleMetadata } from '@/lib/quality-control-china-manufacturing-plan-article'

export const metadata = makeQualityControlChinaManufacturingPlanArticleMetadata()

export default function QualityControlChinaManufacturingPlanArticle() {
  return <QualityControlChinaManufacturingPlanArticlePage />
}
