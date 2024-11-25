import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<div className='bg-[#2D2D2D]'>
    <App />
</div>
  </StrictMode>,
)
