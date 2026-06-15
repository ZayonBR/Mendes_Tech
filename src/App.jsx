import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Credibilidade from './components/Credibilidade/Credibilidade'
import Problema from './components/Problema/Problema'
import ImportanciaSite from './components/ImportanciaSite/ImportanciaSite'
import Solucoes from './components/Solucoes/Solucoes'
import Metodologia from './components/Metodologia/Metodologia'
import Fundadores from './components/Fundadores/Fundadores'
import FAQ from './components/FAQ/FAQ'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import WhatsAppFAB from './components/WhatsAppFAB/WhatsAppFAB'
import SEO from './components/SEO/SEO'

export default function App() {
  return (
    <HelmetProvider>
      <SEO />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Credibilidade />
        <ImportanciaSite />
        <Problema />
        <Solucoes />
        <Metodologia />
        <Fundadores />
        <CTA />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFAB />
    </HelmetProvider>
  )
}
