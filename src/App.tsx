import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import { Analytics } from '@vercel/analytics/react';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { SmoothScrollWrapper } from './components/ui/SmoothScrollWrapper';

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <SmoothScrollWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </SmoothScrollWrapper>
      <Analytics />
    </>
  )
}

export default App
