import { JsonLd } from '@/components/seo/JsonLd'
import { TrustPolicyPage } from '@/components/trust/TrustPolicyPage'
import {
  getTrustPolicyPage,
  makeTrustPolicyJsonLd,
  makeTrustPolicyMetadata,
} from '@/lib/trust-policy-pages'

const page = getTrustPolicyPage('refund-policy')

export const metadata = makeTrustPolicyMetadata(page)

export default function RefundPolicyPage() {
  return (
    <>
      <JsonLd data={makeTrustPolicyJsonLd(page)} />
      <TrustPolicyPage page={page} />
    </>
  )
}
