import { SourcingStagePage } from '@/components/stages/SourcingStagePage'
import {
  getSourcingStagePage,
  makeSourcingStageMetadata,
} from '@/lib/sourcing-stage-pages'

const page = getSourcingStagePage('before-balance-payment-qc-china')

export const metadata = makeSourcingStageMetadata(page)

export default function BeforeBalancePaymentQcChinaPage() {
  return <SourcingStagePage page={page} />
}
