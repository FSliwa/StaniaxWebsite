import type { NewsImageKey } from '@/data/news'
import vacuumMetalizationChamber from '@/assets/vacuum_metalization_chamber.jpg'
import newsAviationImage from '@/assets/news_aviation.jpg'
import colorfulPackagingImage from '@/assets/colorful_packaging.png'
import newReflectorsImage from '@/assets/odblysniki-nowe-1.jpeg'
import plasticPaintingImage from '@/assets/lakierowanie-tworzyw-1.jpeg'
import vacuumPartImage from '@/assets/vacuum-metalization.jpg'

/**
 * Zdjęcia kart aktualności i nagłówków artykułów.
 * Dodając nowy klucz, dopisz go też w:
 *  - src/data/news.ts (NewsImageKey)
 *  - src/data/blog-posts/types.ts (BlogImageKey)
 *  - scripts/prerender.js (NEWS_IMAGE_PREFIXES)
 *  - scripts/docx-to-article.mjs (VALID_IMAGES)
 */
export const NEWS_IMAGES: Record<Exclude<NewsImageKey, 'externalUnsplash'>, string> = {
  vacuumChamber: vacuumMetalizationChamber,
  newsAviation: newsAviationImage,
  colorfulPackaging: colorfulPackagingImage,
  newReflectors: newReflectorsImage,
  plasticPainting: plasticPaintingImage,
  vacuumPart: vacuumPartImage,
}
