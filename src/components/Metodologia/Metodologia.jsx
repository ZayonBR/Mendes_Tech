import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Search, ClipboardList, Settings, TrendingUp, Clock } from 'lucide-react'
import s from './Metodologia.module.css'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/554891443698?text=Olá!%20Vim%20pelo%20site%20e%20quero%20começar%20com%20meu%20diagnóstico%20gratuito.'

const steps = [
  {
    num: '01',
    Icon: Search,
    title: 'Diagnóstico Gratuito',
    desc: 'Analisamos seus canais digitais atuais — WhatsApp, Instagram, site, Google — e identificamos onde estão os maiores vazamentos de clientes.',
    duration: '1 dia',
    color: '#0284C7',
  },
  {
    num: '02',
    Icon: ClipboardList,
    title: 'Planejamento Estratégico',
    desc: 'Definimos quais automações e páginas farão mais impacto no seu faturamento. Sem pacote genérico — solução sob medida para seu negócio.',
    duration: '2–3 dias',
    color: '#06B6D4',
  },
  {
    num: '03',
    Icon: Settings,
    title: 'Implementação e Treinamento',
    desc: 'Desenvolvemos o site, configuramos o agente de IA e o treinamos com o vocabulário, serviços e personalidade da sua empresa.',
    duration: '5–10 dias úteis',
    color: '#0EA5E9',
  },
  {
    num: '04',
    Icon: TrendingUp,
    title: 'Entrega e Monitoramento',
    desc: 'O sistema entra ao ar. Você acompanha resultados em dashboard simplificado e conta com suporte contínuo para ajustes e evoluções.',
    duration: 'Contínuo',
    color: '#38BDF8',
  },
]

export default function Metodologia() {
  const sectionRef = useRef(null)

  // GSAP: linha de progresso animada
  useEffect(() => {
    const ctx = gsap.context(() => {
      const line = sectionRef.current?.querySelector(`.${s.progressLine}`)
      if (!line) return
      gsap.fromTo(line,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 70%',
            scrub: 1,
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className={s.section} id="metodologia" aria-labelledby="metodologia-h2" ref={sectionRef}>
      <div className="container">
        <motion.div
          className={s.eyebrow}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
        >
          <span className={s.dot} aria-hidden="true" />
          Como trabalhamos
        </motion.div>

        <motion.h2
          className={s.h2} id="metodologia-h2"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}
        >
          De zero ao robô funcionando<br />
          <em>em 4 etapas simples.</em>
        </motion.h2>

        <div className={s.timeline}>
          <div className={s.progressTrack} aria-hidden="true">
            <div className={s.progressLine} />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className={s.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={s.stepDot} aria-hidden="true" style={{ borderColor: step.color }}>
                <step.Icon size={14} strokeWidth={2} style={{ color: step.color }} />
              </div>
              <div className={s.stepCard}>
                <div className={s.stepNumRow}>
                  <span className={s.stepNum} style={{ color: step.color }}>{step.num}</span>
                  <span className={s.stepDuration}>
                    <Clock size={11} strokeWidth={2} aria-hidden="true" style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
                    {step.duration}
                  </span>
                </div>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <p className={s.stepDesc}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contrast block */}
        <motion.div
          className={s.contrast}
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className={s.contrastOld}>
            <h3 className={s.contrastTitle}>A maioria das agências…</h3>
            <ul className={s.listBad} aria-label="Problemas comuns de agências">
              {['Entregam um site genérico e somem','Cobram caro por manutenções simples','Sem suporte pós-entrega','Automação sem estratégia de conversão','Resultado não mensurável'].map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={s.contrastVs} aria-hidden="true">vs</div>
          <div className={s.contrastNew}>
            <h3 className={s.contrastTitle}>A Mendes Tech…</h3>
            <ul className={s.listGood} aria-label="Diferenciais da Mendes Tech">
              {['Entrega site + agente de IA integrados','Preço justo e transparente desde o início','Suporte contínuo incluso','Robô treinado para converter, não só responder','Dashboard de resultados acessível a você'].map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className={s.ctaWrap}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={s.ctaBtn} id="metodologia-cta">
            Quero minha análise gratuita
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3.75 9h10.5M9 3.75L14.25 9 9 14.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
