import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Use environment variable or fallback to hostname detection
const basename = process.env.VITE_BASE_URL || 
  (window.location.hostname === 'localhost' ? '/' : '/JagadeeshPowerFactor')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
)