export {
  SERVICES,
  SERVICE_ORDER,
  SERVICE_SLUGS,
  STATIC_ROUTE_EQUIVALENTS,
  resolveLanguageAlternates,
} from '../src/data/services'
export type { ServiceId, ServiceLocaleContent, ServiceDefinition } from '../src/data/services'
export {
  SITE_ORIGIN,
  normalizeUrl,
  buildJsonLdGraph,
  type PageSeoConfig,
} from '../src/lib/seo'
export { translations, type Lang } from '../src/lib/translations'
export { LEGAL_DATA } from '../src/data/legal'
export { AVIATION_ARTICLE, BEAUTY_ARTICLE, REFLECTORS_ARTICLE } from '../src/data/articles'
export {
  NEWS_ITEMS_BY_LANG,
  NEWS_PAGE_CONTENT,
  ARTICLE_LIBRARY_CONTENT,
} from '../src/data/news'
export {
  COMPARISONS,
  COMPARISON_ORDER,
  COMPARISON_SLUGS,
} from '../src/data/comparisons'
export {
  SUBSTRATES,
  SUBSTRATE_ORDER,
  SUBSTRATE_SLUGS,
} from '../src/data/substrates'
export {
  HEADLIGHT_PRICING_PAGE,
  PRICING_SLUGS,
  LOCAL_WARSAW_PAGE,
  LOCAL_WARSAW_SLUGS,
} from '../src/data/specialty-pages'
export {
  getHomeEngineeringHub,
  getServiceClusterLinks,
} from '../src/data/hub-links'
