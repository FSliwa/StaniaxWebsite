// Plik generowany automatycznie przez scripts/docx-to-article.mjs - nie edytuj ręcznie.
import type { BlogArticle } from './types'
import post0 from './lakierowanie-tworzyw-sztucznych'
import post1 from './powloka-pvd-sputtering-roznice'

/** Wszystkie artykuły, od najnowszego. */
export const BLOG_POSTS: BlogArticle[] = [post0, post1].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished),
)

export function getBlogPost(slug: string): BlogArticle | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export type { BlogArticle, ArticleBlock, BlogImageKey } from './types'
