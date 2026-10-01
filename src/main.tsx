import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App' // Importamos el orquestador principal
import './style.css' // Importamos los estilos globales de Tailwind

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)