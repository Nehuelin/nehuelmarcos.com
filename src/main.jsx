import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.jsx'

if (window.location.pathname !== '/') {
  window.history.replaceState(
    null,
    '',
    `/${window.location.search}${window.location.hash}`,
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
