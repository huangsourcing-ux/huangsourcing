import { SourcingStagePage } from '@/components/stages/SourcingStagePage'
import {
  getSourcingStagePage,
  makeSourcingStageMetadata,
} from '@/lib/sourcing-stage-pages'

const page = getSourcingStagePage('compare-china-supplier-samples')

export const metadata = makeSourcingStageMetadata(page)

export default function CompareChinaSupplierSamplesPage() {
  return <SourcingStagePage page={page} />
}
