import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomePage } from '@pages/home/home.page'
import { ShortsPage } from '@pages/shorts/shorts.page'
import { NotFoundPage } from '@pages/not-found'

import { HeaderComponent } from '@components/header/header.component'

import { SideMenu } from '@components/side-menu/side-menu.component'
import { SearchResult } from '@pages/search-result'

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <SideMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shorts" element={<ShortsPage />} />
        <Route path="/results" element={<SearchResult />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
