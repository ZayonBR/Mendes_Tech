import Hero from '../components/Hero/Hero'
import Credibilidade from '../components/Credibilidade/Credibilidade'
import Problema from '../components/Problema/Problema'
import ImportanciaSite from '../components/ImportanciaSite/ImportanciaSite'
import Solucoes from '../components/Solucoes/Solucoes'
import PortalSolucoes from '../components/PortalSolucoes/PortalSolucoes'
import Metodologia from '../components/Metodologia/Metodologia'
import Fundadores from '../components/Fundadores/Fundadores'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'

export default function LandingPage() {
  return (
    <main id="main-content">
      <Hero />
      <Credibilidade />
      <Problema />
      <Metodologia />
      <ImportanciaSite />
      <Solucoes />
      <PortalSolucoes />
      <Fundadores />
      <CTA />
      <FAQ />
    </main>
  )
}
