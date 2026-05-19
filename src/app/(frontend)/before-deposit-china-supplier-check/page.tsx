import { SourcingStagePage } from '@/components/stages/SourcingStagePage'
import {
  getSourcingStagePage,
  makeSourcingStageMetadata,
} from '@/lib/sourcing-stage-pages'

const page = getSourcingStagePage('before-deposit-china-supplier-check')

export const metadata = makeSourcingStageMetadata(page)

export default function BeforeDepositChinaSupplierCheckPage() {
  return <SourcingStagePage page={page} />
}
