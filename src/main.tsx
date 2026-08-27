import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/base/index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
