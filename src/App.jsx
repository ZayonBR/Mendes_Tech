import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import WhatsAppFAB from './components/WhatsAppFAB/WhatsAppFAB'
import SEO from './components/SEO/SEO'

import LandingPage from './pages/LandingPage'
import SolucoesVitrine from './pages/SolucoesVitrine'
import SolucaoDetalhe from './pages/SolucaoDetalhe'

export default function App() {
  return (
    <HelmetProvider>
      <SEO />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/solucoes" element={<SolucoesVitrine />} />
          <Route path="/solucoes/:id" element={<SolucaoDetalhe />} />
        </Routes>
        <Footer />
        <WhatsAppFAB />
      </BrowserRouter>
    </HelmetProvider>
  )
}
