import React from 'react'
import ReactDOM from 'react-dom/client'
import '@styles/reset.css'
import { AppRoutes } from './app.routes.tsx'
import { AuthProvider } from './contexts/auth.context.tsx'
import { SideMenuProvider } from '@contexts/side-menu.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SideMenuProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </SideMenuProvider>
  </React.StrictMode>
)
