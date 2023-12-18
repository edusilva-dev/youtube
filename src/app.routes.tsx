import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home/home.page"
import { ShortsPage } from "./pages/shorts/shorts.page"
import { NotFoundPage } from "./pages/not-found"

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/teste" element={<ShortsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
