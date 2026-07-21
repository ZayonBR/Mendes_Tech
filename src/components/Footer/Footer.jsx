import { MapPin, Phone, Mail } from 'lucide-react'
import s from './Footer.module.css'

const WA = 'https://wa.me/554891443698'

const cidades = ['Litoral do Sul de São Paulo', 'Todo o Brasil']

export default function Footer() {
  return (
    <footer className={s.footer} role="contentinfo">
      <div className={`container ${s.inner}`}>
        <div className={s.brand}>
          <a href="#hero" className={s.logo} aria-label="Mendes Tech — Início">
            <span className={s.logoWord}>Mendes<strong>Tech</strong></span>
          </a>

          <p className={s.tagline}>Acreditamos que empresas bem organizadas transmitem mais confiança, constroem melhores relacionamentos e crescem de forma mais consistente.</p>

          {/* NAP para SEO Local */}
          <address className={s.nap} aria-label="Informações de contato (NAP)" itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="Mendes Tech" />
            <div className={s.napItem}>
              <MapPin size={16} strokeWidth={1.5} className={s.napIcon} aria-hidden="true" />
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">Litoral Sul de SP</span> · <span itemProp="areaServed">Atendimento Nacional</span>
              </span>
            </div>
            <div className={s.napItem}>
              <Phone size={16} strokeWidth={1.5} className={s.napIcon} aria-hidden="true" />
              <a href={WA} aria-label="WhatsApp da Mendes Tech" itemProp="telephone">(48) 9144-3698</a>
            </div>
            <div className={s.napItem}>
              <Mail size={16} strokeWidth={1.5} className={s.napIcon} aria-hidden="true" />
              <a href="mailto:contato@mendestech.com.br" itemProp="email">contato@mendestech.com.br</a>
            </div>
          </address>

          
        </div>

        <nav className={s.nav} aria-label="Links do rodapé">
          <div className={s.navCol}>
            <span className={s.navHeading}>O Método</span>
            <a href="#solucoes" className={s.navLink}>Diagnóstico e Planejamento</a>
            <a href="#solucoes" className={s.navLink}>Estrutura Digital</a>
            <a href="#solucoes" className={s.navLink}>Atendimento Inteligente</a>
          </div>
          <div className={s.navCol}>
            <span className={s.navHeading}>Empresa</span>
            <a href="#fundadores" className={s.navLink}>Quem Somos</a>
            <a href="#metodologia" className={s.navLink}>Metodologia</a>
            <a href="#faq" className={s.navLink}>Perguntas Frequentes</a>
            <a href="#cta" className={s.navLink}>Fale Conosco</a>
          </div>
          <div className={s.navCol}>
            <span className={s.navHeading}>Regiões atendidas</span>
            {cidades.map(c => (
              <span key={c} className={s.passive}>{c}</span>
            ))}
          </div>
        </nav>
      </div>

    </footer>
  )
}
