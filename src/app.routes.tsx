import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '@pages/home/home.page'
import { ShortsPage } from '@pages/shorts/shorts.page'
import { NotFoundPage } from '@pages/not-found'
import { HeaderComponent } from './components/header/header.component'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teste" element={<ShortsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
