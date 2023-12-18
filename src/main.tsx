import React from 'react'
import ReactDOM from 'react-dom/client'
import '@styles/reset.css'
import { AppRoutes } from './app.routes.tsx'
import { AuthProvider } from './contexts/auth.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </React.StrictMode>
)
