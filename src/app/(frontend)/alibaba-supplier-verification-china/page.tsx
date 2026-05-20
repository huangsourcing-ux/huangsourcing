import { HighIntentRiskGuidePage } from '@/components/resources/HighIntentRiskGuidePage'
import {
  getRiskGuidePage,
  makeRiskGuideMetadata,
} from '@/lib/risk-guide-pages'

const page = getRiskGuidePage('alibaba-supplier-verification-china')

export const metadata = makeRiskGuideMetadata(page)

export default function AlibabaSupplierVerificationChinaPage() {
  return <HighIntentRiskGuidePage page={page} />
}
