import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { HomePage } from '@pages/home/home.page'
import { ShortsPage } from '@pages/shorts/shorts.page'
import { NotFoundPage } from '@pages/not-found'
import { HeaderComponent } from './components/header/header.component'
import { AuthContext } from './contexts/auth.context'
import { useContext } from 'react'

// redirect to anonymous page instead notfound
const LoggedRoute = ({ redirectTo }: { redirectTo: string }) => {
  const { isLogged } = useContext(AuthContext)
  console.error('is logged?', isLogged)
  return isLogged ? <Outlet/> : <Navigate to={redirectTo}/>
}
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<LoggedRoute redirectTo="/"/>}>
          <Route path="/teste" element={<ShortsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
