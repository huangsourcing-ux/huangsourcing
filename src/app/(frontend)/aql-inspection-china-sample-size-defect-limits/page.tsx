import { AqlInspectionChinaArticlePage } from '@/components/resources/AqlInspectionChinaArticlePage'
import { makeAqlInspectionChinaArticleMetadata } from '@/lib/aql-inspection-china-article'

export const metadata = makeAqlInspectionChinaArticleMetadata()

export default function AqlInspectionChinaArticle() {
  return <AqlInspectionChinaArticlePage />
}
