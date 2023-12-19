import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'

import { HomePage } from '@pages/home/home.page'
import { ShortsPage } from '@pages/shorts/shorts.page'
import { NotFoundPage } from '@pages/not-found'

import { HeaderComponent } from '@components/header/header.component'

import { AuthContext } from '@contexts/auth.context'

type LoggedRouteProps = {
  redirectTo: string
}

const LoggedRoute: React.FC<LoggedRouteProps> = ({ redirectTo }) => {
  const { isLogged } = useContext(AuthContext)

  return isLogged ? <Outlet /> : <Navigate to={redirectTo} />
}

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<LoggedRoute redirectTo="/" />}>
          <Route path="/teste" element={<ShortsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
