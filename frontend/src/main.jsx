import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/login/Login'
import Main from './pages/main/Main'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
