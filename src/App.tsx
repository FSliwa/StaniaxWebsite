import { Routes, Route } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'
import { ScrollProgress } from './components/ui/ScrollProgress';

const HomePage = lazy(() => import('./pages/HomePage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const ArticleAviation = lazy(() => import('./pages/ArticleAviation'))

function App() {
  return (
    <>
      <ScrollProgress />
      <Suspense fallback={
        <div className="h-screen w-screen bg-black flex flex-col items-center justify-center text-white font-mono gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-t-blue-500 border-gray-800 animate-spin" />
          <span className="text-xs uppercase tracking-widest text-gray-500">STANIAX</span>
        </div>
      }>
        <Routes>
          <Route path="/" element={<HomePage lang="pl" />} />
          <Route path="/en" element={<HomePage lang="en" />} />
          <Route path="/de" element={<HomePage lang="de" />} />
          
          <Route path="/news" element={<NewsPage lang="pl" />} />
          <Route path="/en/news" element={<NewsPage lang="en" />} />
          <Route path="/de/news" element={<NewsPage lang="de" />} />
          
          <Route path="/news/partnerstwo-z-wiodacym-producentem-lotniczym" element={<ArticleAviation lang="pl" />} />
          <Route path="/en/news/how-does-metallization-affect-material-performance" element={<ArticleAviation lang="en" />} />
          <Route path="/de/news/how-does-metallization-affect-material-performance" element={<ArticleAviation lang="de" />} />
          
          <Route path="/gallery" element={<GalleryPage lang="pl" />} />
          <Route path="/en/gallery" element={<GalleryPage lang="en" />} />
          <Route path="/de/gallery" element={<GalleryPage lang="de" />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
