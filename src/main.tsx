import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import App from './App'
import { initConsent } from './lib/consent'
import './index.css'

// Stosuje zapisaną zgodę zanim cokolwiek się wyrenderuje. Brak zgody = brak
// ładowania skryptów analitycznych.
initConsent()

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <App />
      <Analytics />
    </BrowserRouter>
  </StrictMode>
)
