import { PackagingLabelCheckBeforePaymentArticlePage } from '@/components/resources/PackagingLabelCheckBeforePaymentArticlePage'
import { makePackagingLabelCheckBeforePaymentArticleMetadata } from '@/lib/packaging-label-check-before-payment-article'

export const metadata = makePackagingLabelCheckBeforePaymentArticleMetadata()

export default function PackagingLabelCheckBeforePaymentArticle() {
  return <PackagingLabelCheckBeforePaymentArticlePage />
}
