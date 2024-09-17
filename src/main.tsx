import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AccordionDemo } from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AccordionDemo />
  </StrictMode>,
)
