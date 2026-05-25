import { FnskuLabelMistakesArticlePage } from '@/components/resources/FnskuLabelMistakesArticlePage'
import { makeFnskuLabelMistakesArticleMetadata } from '@/lib/fnsku-label-mistakes-article'

export const metadata = makeFnskuLabelMistakesArticleMetadata()

export default function FnskuLabelMistakesBeforeGoodsLeaveChinaArticle() {
  return <FnskuLabelMistakesArticlePage />
}
