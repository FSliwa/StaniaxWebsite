import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import GalleryPage from './pages/GalleryPage'
import { ScrollProgress } from './components/ui/ScrollProgress';

function App() {
  return (
    <>
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<HomePage lang="pl" />} />
        <Route path="/en" element={<HomePage lang="en" />} />
        <Route path="/de" element={<HomePage lang="de" />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </>
  )
}

export default App
