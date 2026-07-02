import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { MessageCircle, Star, Globe, Search, CheckCircle, TrendingDown } from 'lucide-react'
import s from './Problema.module.css'

const pains = [
  {
    id: 'pain-google',
    Icon: Search,
    title: '1. Busca no Google',
    body: 'O primeiro lugar onde procuram pelo seu serviço. Se você não aparece ou seu perfil não transmite profissionalismo, a jornada acaba aqui.',
    quote: '"Pesquisei e não encontrei referências." — cliente perdido',
  },
  {
    id: 'pain-reviews',
    Icon: Star,
    title: '2. Avaliações e Reputação',
    body: 'O cliente encontrou você, mas vai comparar com o concorrente. O que os outros dizem sobre você determina se ele avança para o próximo passo.',
    quote: '"O concorrente tinha mais avaliações positivas." — lead que esfriou',
  },
  {
    id: 'pain-site',
    Icon: Globe,
    title: '3. Website e Credibilidade',
    body: 'A vitrine oficial. Se o site é lento ou amador, toda a autoridade que você construiu no mundo real desaparece em segundos.',
    quote: '"O site não passou confiança." — cliente inseguro',
  },
  {
    id: 'pain-whatsapp',
    Icon: MessageCircle,
    title: '4. Contato via WhatsApp',
    body: 'O momento crítico. A demora ou a desorganização no atendimento esfriam o interesse instantaneamente.',
    quote: '"Demoraram muito para responder, fechei com outro." — venda perdida',
  },
  {
    id: 'pain-decisao',
    Icon: CheckCircle,
    title: '5. A Decisão Final',
    body: 'O fechamento só acontece quando todas as etapas anteriores funcionaram perfeitamente e transmitiram segurança absoluta.',
    quote: '"Cada etapa influencia a próxima." — O Método CONECTA',
  },
]

function TiltCard({ children, className }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6])
  const springRotX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.article
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX: springRotX, rotateY: springRotY, transformPerspective: 1000 }}
      whileHover={{ scale: 1.03, boxShadow: '0 24px 60px rgba(2,132,199,0.12)' }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.article>
  )
}

const containerVar = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const cardVar = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Problema() {
  return (
    <section className={s.section} id="problema" aria-labelledby="problema-h2">
      <div className="container">
        <motion.div
          className={s.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className={s.dot} aria-hidden="true" />
          A raiz do problema
        </motion.div>

        <motion.h2
          className={s.h2}
          id="problema-h2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          Por que existimos?
        </motion.h2>

        <motion.p
          className={s.intro}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          Ao longo dos anos percebemos que excelentes profissionais deixam de conquistar oportunidades porque sua presença digital não representa a qualidade do trabalho que realizam. O desafio não é apenas criar um site, mas organizar toda a estrutura digital para transmitir confiança desde o primeiro contato.
        </motion.p>

        <motion.div
          className={s.grid}
          variants={containerVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          role="list"
        >
          {pains.map((p) => (
            <motion.div key={p.id} variants={cardVar} style={{ perspective: 1000 }}>
              <TiltCard className={s.card} id={p.id}>
                <div className={s.cardIconWrap} aria-hidden="true">
                  <p.Icon size={26} className={s.cardIcon} strokeWidth={1.5} />
                </div>
                <h3 className={s.cardTitle}>{p.title}</h3>
                <p className={s.cardBody}>{p.body}</p>
                <blockquote className={s.quote}>{p.quote}</blockquote>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact callout */}
        <motion.div
          className={s.callout}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="note"
        >
          <TrendingDown size={28} className={s.calloutIcon} strokeWidth={1.5} aria-hidden="true" />
          <p>
            <strong>Empresas que demoram mais de 5 minutos para responder um lead têm 10x menos chance de conversão.</strong>
            <span className={s.calloutSource}> (Fonte: Harvard Business Review)</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
