import { ChineseSupplierDepositDecisionArticlePage } from '@/components/resources/ChineseSupplierDepositDecisionArticlePage'
import { makeChineseSupplierDepositDecisionArticleMetadata } from '@/lib/chinese-supplier-deposit-decision-article'

export const metadata = makeChineseSupplierDepositDecisionArticleMetadata()

export default function ChineseSupplierDepositDecisionArticle() {
  return <ChineseSupplierDepositDecisionArticlePage />
}
