import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './componets/App/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
