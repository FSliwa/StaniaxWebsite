import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import GalleryPage from './pages/GalleryPage'
import { Analytics } from '@vercel/analytics/react';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Analytics />
    </>
  )
}

export default App
