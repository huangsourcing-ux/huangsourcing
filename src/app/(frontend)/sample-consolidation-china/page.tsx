import { SeoServicePage } from '@/components/seo/SeoServicePage'
import {
  getSeoServicePage,
  makeSeoServiceMetadata,
} from '@/lib/seo-service-pages'

const page = getSeoServicePage('sample-consolidation-china')

export const metadata = makeSeoServiceMetadata(page)

export default function SampleConsolidationChinaPage() {
  return <SeoServicePage page={page} />
}
