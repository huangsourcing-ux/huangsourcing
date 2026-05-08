import { SeoServicePage } from '@/components/seo/SeoServicePage'
import {
  getSeoServicePage,
  makeSeoServiceMetadata,
} from '@/lib/seo-service-pages'

const page = getSeoServicePage('amazon-fba-prep-china')

export const metadata = makeSeoServiceMetadata(page)

export default function AmazonFbaPrepChinaPage() {
  return <SeoServicePage page={page} />
}
