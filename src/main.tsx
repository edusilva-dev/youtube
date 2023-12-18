import React from 'react'
import ReactDOM from 'react-dom/client'
import '@styles/reset.css'
import { AppRoutes } from './app.routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
