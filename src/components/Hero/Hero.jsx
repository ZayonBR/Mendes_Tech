import { motion } from 'framer-motion'
import s from './Hero.module.css'

const WA_LINK = 'https://wa.me/554891443698?text=Olá!%20Vim%20pelo%20site%20da%20Mendes%20Tech%20e%20quero%20a%20demonstração%20do%20Robô%20de%20IA.'

const metrics = [
  { num: '24/7', label: 'Atendimento automático', caption: 'Sem interrupção, fins de semana e feriados' },
  { num: '<3s', label: 'Resposta do robô', caption: 'Tempo médio de resposta do agente' },
  { num: '+68%', label: 'Aumento em conversões', caption: 'Resposta imediata vs. demora — Harvard Business Review' },
  { num: '5–10', label: 'Dias para ir ao ar', caption: 'Prazo médio de implementação completa' },
]

export default function Hero() {

  return (
    <section className={s.hero} id="hero" aria-labelledby="hero-h1">
      {/* Background */}
      <div className={s.bgWrap} aria-hidden="true">
        <div className={s.bgOverlay} />
        <div className={s.bgCorner} />
      </div>

      <div className={`container ${s.content}`}>
        

        {/* H1 */}
        <h1 className={s.h1} id="hero-h1">
          <motion.span
            className={s.h1Sans}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Sua empresa transmite na internet
          </motion.span>
          <motion.span
            className={s.h1Serif}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            a mesma qualidade que entrega aos seus clientes?
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className={s.sub}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
        >
          A <strong>CONECTA</strong> é uma metodologia criada para ajudar empresas prestadoras de serviços a organizarem sua estrutura digital, fortalecerem sua credibilidade e evoluírem continuamente através da tecnologia, sem perder o relacionamento humano.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className={s.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5, ease: 'easeOut' }}
        >
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={s.btnPrimary} id="hero-cta-primary">
            <span>Agendar um Diagnóstico CONECTA</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3.75 9h10.5M9 3.75L14.25 9 9 14.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#solucoes" className={s.btnGhost} id="hero-cta-ghost"
            onClick={e => { e.preventDefault(); document.querySelector('#solucoes')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Conheça o Método CONECTA
          </a>
        </motion.div>

        {/* Metrics */}
        <motion.div
          className={s.metrics}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5, ease: 'easeOut' }}
          aria-label="Resultados em números"
        >
          {metrics.map((m, i) => (
            <div key={i} className={s.metricItem}>
              <span className={s.metricNum}>{m.num}</span>
              <span className={s.metricLabel}>{m.label}</span>
              <span className={s.metricCaption}>{m.caption}</span>
              {i < metrics.length - 1 && <div className={s.metricSep} aria-hidden="true" />}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className={s.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <div className={s.scrollTrack}><div className={s.scrollFill} /></div>
        <span className={s.scrollLabel}>role</span>
      </motion.div>
    </section>
  )
}
