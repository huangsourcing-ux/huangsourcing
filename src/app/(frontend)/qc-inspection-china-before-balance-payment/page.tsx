import { QcBeforeBalanceArticlePage } from '@/components/resources/QcBeforeBalanceArticlePage'
import { makeQcBeforeBalanceArticleMetadata } from '@/lib/qc-before-balance-article'

export const metadata = makeQcBeforeBalanceArticleMetadata()

export default function QcInspectionChinaBeforeBalancePaymentArticle() {
  return <QcBeforeBalanceArticlePage />
}
