import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StepContext from './Context/StepContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />

  </StrictMode>,
)
