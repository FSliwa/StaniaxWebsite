/**
 * Typy dla artykułów blogowych generowanych z plików .docx
 * (skrypt: scripts/docx-to-article.mjs).
 *
 * Tekst w polach `text`, `items`, `a` itp. obsługuje mini-markdown:
 *   **pogrubienie**  oraz  [etykieta](/sciezka-lub-https://adres)
 */
import type { ServiceId } from '../services-types'

export type BlogImageKey =
  | 'vacuumChamber'
  | 'newsAviation'
  | 'colorfulPackaging'
  | 'newReflectors'
  | 'plasticPainting'
  | 'vacuumPart'

export type ArticleBlock =
  | { type: 'h2'; id: string; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }

export interface BlogLink {
  label: string
  url: string
}

export interface BlogArticle {
  /** Adres strony, np. '/news/lakierowanie-tworzyw-sztucznych' */
  slug: string
  lang: 'pl'
  /** Tytuł H1 */
  heading: string
  metaTitle: string
  metaDescription: string
  /** Pierwszy akapit wyświetlany pod tytułem */
  lead: string
  /** Karta na liście aktualności */
  category: string
  displayDate: string
  excerpt: string
  homeSummary: string
  ctaLabel: string
  /** Daty ISO (RRRR-MM-DD) do schema.org i sitemapy */
  datePublished: string
  dateModified: string
  readTime: string
  image: BlogImageKey
  imageAlt: string
  /** Usługa, do której prowadzi ramka CTA i panel boczny */
  serviceId?: ServiceId
  blocks: ArticleBlock[]
  faqTitle?: string
  faq: Array<{ q: string; a: string }>
  sources: BlogLink[]
  related: BlogLink[]
  closingCta?: string
}
