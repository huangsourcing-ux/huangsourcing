import { RetractableGateChecksChinaArticlePage } from '@/components/resources/RetractableGateChecksChinaArticlePage'
import { makeRetractableGateChecksChinaArticleMetadata } from '@/lib/retractable-gate-checks-china-article'

export const metadata = makeRetractableGateChecksChinaArticleMetadata()

export default function RetractableGateChecksChinaArticle() {
  return <RetractableGateChecksChinaArticlePage />
}
