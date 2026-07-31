import React from 'react'
import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import SEO from './components/SEO/SEO'

import LandingPage from './pages/LandingPage'
import SolucoesVitrine from './pages/SolucoesVitrine'
import SolucaoDetalhe from './pages/SolucaoDetalhe'

export function render(url = '/') {
  const helmetContext = {}
  
  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <SEO />
        <MemoryRouter initialEntries={[url]}>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/solucoes" element={<SolucoesVitrine />} />
            <Route path="/solucoes/:id" element={<SolucaoDetalhe />} />
          </Routes>
          <Footer />
        </MemoryRouter>
      </HelmetProvider>
    </React.StrictMode>
  )

  return { html, helmet: helmetContext.helmet }
}
