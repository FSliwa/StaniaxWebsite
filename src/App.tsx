import { Routes, Route, useLocation } from 'react-router-dom'
import React, { Suspense, lazy, useEffect } from 'react'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { SERVICE_ORDER, SERVICE_SLUGS } from './data/services'
import { COMPARISON_ORDER, COMPARISON_SLUGS } from './data/comparisons'
import { SUBSTRATE_ORDER, SUBSTRATE_SLUGS } from './data/substrates'
import { PRICING_SLUGS, LOCAL_WARSAW_SLUGS } from './data/specialty-pages'
import { BLOG_POST_SLUGS } from './data/blog-posts/slugs'
import type { Lang } from './lib/translations'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const ComparisonPage = lazy(() =>
  import('./pages/ComparisonPage').then((module) => ({ default: module.ComparisonPage })),
)
const SubstrateMatrixPage = lazy(() =>
  import('./pages/SubstrateMatrixPage').then((module) => ({ default: module.SubstrateMatrixPage })),
)
const HeadlightPricingPage = lazy(() =>
  import('./pages/HeadlightPricingPage').then((module) => ({ default: module.HeadlightPricingPage })),
)
const LocalWarsawPage = lazy(() =>
  import('./pages/LocalWarsawPage').then((module) => ({ default: module.LocalWarsawPage })),
)
const NewsPage = lazy(() => import('./pages/NewsPage'))
const ArticleLibraryPage = lazy(() => import('./pages/ArticleLibraryPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const ArticleAviation = lazy(() => import('./pages/ArticleAviation'))
const ArticleBeauty = lazy(() => import('./pages/ArticleBeauty'))
const ArticleReflectors = lazy(() => import('./pages/ArticleReflectors'))
const BlogArticlePage = lazy(() => import('./pages/BlogArticlePage'))
const LegalPage = lazy(() => import('./pages/LegalPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    if (path.startsWith('/en')) {
      document.documentElement.lang = 'en'
    } else if (path.startsWith('/de')) {
      document.documentElement.lang = 'de'
    } else {
      document.documentElement.lang = 'pl'
    }
  }, [location.pathname])

  const detectedLang: Lang = location.pathname.startsWith('/en')
    ? 'en'
    : location.pathname.startsWith('/de')
      ? 'de'
      : 'pl'

  return (
    <>
      <ScrollProgress />
      <Suspense
        fallback={
          <div className="h-screen w-screen bg-black flex flex-col items-center justify-center text-white font-mono gap-4">
            <div className="w-12 h-12 rounded-full border-4 border-t-blue-500 border-gray-800 animate-spin" />
            <span className="text-xs uppercase tracking-widest text-gray-500">STANIAX</span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage lang="pl" />} />
          <Route path="/en" element={<HomePage lang="en" />} />
          <Route path="/de" element={<HomePage lang="de" />} />

          {/* 18 Dedicated Service Landing Pages (6 Services × 3 Languages) */}
          {SERVICE_ORDER.flatMap((serviceId) =>
            (['pl', 'en', 'de'] as Lang[]).map((lang) => (
              <Route
                key={`${serviceId}-${lang}`}
                path={SERVICE_SLUGS[serviceId][lang]}
                element={<ServicePage serviceId={serviceId} lang={lang} />}
              />
            )),
          )}

          {/* 12 Technology & Service VS Comparison Pages (4 Topics × 3 Languages) */}
          {COMPARISON_ORDER.flatMap((comparisonId) =>
            (['pl', 'en', 'de'] as Lang[]).map((lang) => (
              <Route
                key={`cmp-${comparisonId}-${lang}`}
                path={COMPARISON_SLUGS[comparisonId][lang]}
                element={<ComparisonPage comparisonId={comparisonId} lang={lang} />}
              />
            )),
          )}

          {/* 15 Modular Substrate Matrix Pages (5 Polymers/Glass × 3 Languages) */}
          {SUBSTRATE_ORDER.flatMap((substrateId) =>
            (['pl', 'en', 'de'] as Lang[]).map((lang) => (
              <Route
                key={`sub-${substrateId}-${lang}`}
                path={SUBSTRATE_SLUGS[substrateId][lang]}
                element={<SubstrateMatrixPage substrateId={substrateId} lang={lang} />}
              />
            )),
          )}

          {/* Dedicated Pricing & Calculator Page (3 Languages) */}
          {(['pl', 'en', 'de'] as Lang[]).map((lang) => (
            <Route
              key={`pricing-${lang}`}
              path={PRICING_SLUGS[lang]}
              element={<HeadlightPricingPage lang={lang} />}
            />
          ))}

          {/* Dedicated Local Plant Hub Warszawa / Józefów (3 Languages) */}
          {(['pl', 'en', 'de'] as Lang[]).map((lang) => (
            <Route
              key={`local-warsaw-${lang}`}
              path={LOCAL_WARSAW_SLUGS[lang]}
              element={<LocalWarsawPage lang={lang} />}
            />
          ))}

          <Route path="/news" element={<NewsPage lang="pl" />} />
          <Route path="/en/news" element={<NewsPage lang="en" />} />
          <Route path="/de/news" element={<NewsPage lang="de" />} />

          {/* Biblioteka artykulow */}
          <Route path="/news/biblioteka" element={<ArticleLibraryPage lang="pl" />} />
          <Route path="/en/news/library" element={<ArticleLibraryPage lang="en" />} />
          <Route path="/de/news/bibliothek" element={<ArticleLibraryPage lang="de" />} />

          <Route path="/news/partnerstwo-z-wiodacym-producentem-lotniczym" element={<ArticleAviation lang="pl" />} />
          <Route path="/en/news/how-does-metallization-affect-material-performance" element={<ArticleAviation lang="en" />} />
          <Route path="/de/news/wie-beeinflusst-metallisierung-die-materialleistung" element={<ArticleAviation lang="de" />} />

          <Route path="/news/metalizacja-prozniowa-rewolucjonizuje-branze-beauty" element={<ArticleBeauty lang="pl" />} />
          <Route path="/en/news/vacuum-metallization-revolutionizes-beauty-industry" element={<ArticleBeauty lang="en" />} />
          <Route path="/de/news/vakuummetallisierung-revolutioniert-die-kosmetikbranche" element={<ArticleBeauty lang="de" />} />

          <Route path="/news/regeneracja-odblysnikow-reflektorow-samochodowych" element={<ArticleReflectors lang="pl" />} />
          <Route path="/en/news/reflector-regeneration-and-headlight-polishing" element={<ArticleReflectors lang="en" />} />
          <Route path="/de/news/scheinwerfer-reflektoren-regeneration-und-polieren" element={<ArticleReflectors lang="de" />} />

          {/* Artykuły z plików .docx (src/data/blog-posts) - tylko PL */}
          {BLOG_POST_SLUGS.map((slug) => (
            <Route key={slug} path={slug} element={<BlogArticlePage slug={slug} />} />
          ))}

          <Route path="/gallery" element={<GalleryPage lang="pl" />} />
          <Route path="/en/gallery" element={<GalleryPage lang="en" />} />
          <Route path="/de/gallery" element={<GalleryPage lang="de" />} />

          {/* Legal Pages */}
          <Route path="/polityka-prywatnosci" element={<LegalPage type="privacy" lang="pl" />} />
          <Route path="/en/privacy-policy" element={<LegalPage type="privacy" lang="en" />} />
          <Route path="/de/datenschutz" element={<LegalPage type="privacy" lang="de" />} />

          <Route path="/polityka-cookies" element={<LegalPage type="cookies" lang="pl" />} />
          <Route path="/en/cookie-policy" element={<LegalPage type="cookies" lang="en" />} />
          <Route path="/de/cookie-richtlinie" element={<LegalPage type="cookies" lang="de" />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFoundPage lang={detectedLang} />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
