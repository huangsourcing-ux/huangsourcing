import { getAbsoluteUrl } from '@/lib/site-url'
import { makeOrganizationReference } from '@/lib/structured-data'

type ArticleImage = {
  height: number
  src: string
  width: number
}

type ArticleImageSet = {
  image: ArticleImage & {
    alt: string
    variants?: ArticleImage[]
  }
  imageVariants?: ArticleImage[]
}

type ArticleJsonLdInput = ArticleImageSet & {
  href: string
  metaDescription: string
  modifiedDateIso?: string
  publishedDateIso: string
  title: string
}

export const articleContentUpdateDate = 'May 25, 2026'
export const articleContentUpdateDateIso = '2026-05-25T09:00:00-04:00'

export function makeAgentHuangAuthorReference() {
  return {
    '@type': 'Person',
    name: 'Agent Huang',
    url: getAbsoluteUrl('/about#agent-huang'),
  }
}

export function getArticleImages(article: ArticleImageSet) {
  return article.imageVariants ?? article.image.variants ?? [article.image]
}

export function getArticleImageUrls(article: ArticleImageSet) {
  return getArticleImages(article).map((image) => getAbsoluteUrl(image.src))
}

export function getArticleOpenGraphImages(article: ArticleImageSet) {
  return getArticleImages(article).map((image) => ({
    url: image.src,
    width: image.width,
    height: image.height,
    alt: article.image.alt,
  }))
}

export function makeArticleJsonLd(article: ArticleJsonLdInput) {
  const pageUrl = getAbsoluteUrl(article.href)

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    url: pageUrl,
    inLanguage: 'en',
    image: getArticleImageUrls(article),
    datePublished: article.publishedDateIso,
    ...(article.modifiedDateIso
      ? { dateModified: article.modifiedDateIso }
      : {}),
    author: makeAgentHuangAuthorReference(),
    publisher: makeOrganizationReference(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
  }
}
