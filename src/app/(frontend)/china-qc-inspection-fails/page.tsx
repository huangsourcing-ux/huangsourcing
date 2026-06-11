import { ChinaQcInspectionFailsArticlePage } from '@/components/resources/ChinaQcInspectionFailsArticlePage'
import { makeChinaQcInspectionFailsArticleMetadata } from '@/lib/china-qc-inspection-fails-article'

export const metadata = makeChinaQcInspectionFailsArticleMetadata()

export default function ChinaQcInspectionFailsArticle() {
  return <ChinaQcInspectionFailsArticlePage />
}
