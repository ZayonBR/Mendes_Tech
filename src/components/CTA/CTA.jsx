import { motion } from 'framer-motion'
import { BarChart3, Bot } from 'lucide-react'
import s from './CTA.module.css'

const WA_GOOGLE = 'https://wa.me/554891443698?text=Olá!%20Vim%20pelo%20site%20e%20quero%20a%20Análise%20Gratuita%20do%20meu%20Google%20Meu%20Negócio.'
const WA_ROBO = 'https://wa.me/554891443698?text=Olá!%20Vim%20pelo%20site%20e%20quero%20ver%20a%20demonstração%20do%20Robô%20de%20IA%20da%20Mendes%20Tech.'

export default function CTA() {
  return (
    <section className={s.section} id="cta" aria-labelledby="cta-h2">
      <div className="container">
        <motion.div
          className={s.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={s.glow} aria-hidden="true" />

          <div className={s.eyebrow}>
            <span className={s.dot} aria-hidden="true" />
            Nossas Soluções
          </div>

          <h2 className={s.h2} id="cta-h2">
            A tecnologia deve facilitar o crescimento.<br />
            <em>Não complicá-lo.</em>
          </h2>

          <p className={s.sub}>Se você acredita que sua empresa pode transmitir na internet a qualidade que entrega todos os dias, gostaríamos de conhecer sua história.</p>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <a href={WA_GOOGLE} target="_blank" rel="noopener noreferrer" className={s.btnOutline}>
              Agendar Diagnóstico CONECTA →
            </a>
          </div>

          <p className={s.disclaimer}>
            🔒 Seus dados estão seguros. Não enviamos spam. Política de privacidade transparente.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
