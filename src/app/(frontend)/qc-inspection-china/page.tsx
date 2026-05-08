import { SeoServicePage } from '@/components/seo/SeoServicePage'
import {
  getSeoServicePage,
  makeSeoServiceMetadata,
} from '@/lib/seo-service-pages'

const page = getSeoServicePage('qc-inspection-china')

export const metadata = makeSeoServiceMetadata(page)

export default function QcInspectionChinaPage() {
  return <SeoServicePage page={page} />
}
