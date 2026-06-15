import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { MessageCircle, Camera, Globe, Search, TrendingDown } from 'lucide-react'
import s from './Problema.module.css'

const pains = [
  {
    id: 'pain-whatsapp',
    Icon: MessageCircle,
    title: 'WhatsApp sem resposta = venda perdida',
    body: 'O lead chega interessado às 22h. A equipe responde às 9h do dia seguinte. Ele já comprou do concorrente.',
    quote: '"Mandei mensagem e não obtive retorno..." — cliente perdido',
  },
  {
    id: 'pain-instagram',
    Icon: Camera,
    title: 'DMs do Instagram acumulando sem resposta',
    body: 'Cada mensagem não respondida no Instagram é um cliente que você investiu dinheiro para atrair e deixou esfriar.',
    quote: '"Tentei contato pelo Instagram mas nunca responderam..." — lead perdido',
  },
  {
    id: 'pain-site',
    Icon: Globe,
    title: 'Site amador que passa desconfiança',
    body: 'Um site lento, genérico ou desatualizado faz o visitante duvidar da profissionalidade antes mesmo de ler o conteúdo.',
    quote: '"O site não parecia profissional, fui buscar outra empresa." — cliente nunca conquistado',
  },
  {
    id: 'pain-google',
    Icon: Search,
    title: 'Invisível no Google da sua cidade',
    body: 'Seu concorrente aparece primeiro no Maps. Não porque é melhor — mas porque tem perfil e site otimizados.',
    quote: '"Pesquisei no Google e encontrei outro mais fácil." — cliente do concorrente',
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
          O cenário que sua empresa vive agora
        </motion.div>

        <motion.h2
          className={s.h2}
          id="problema-h2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          Você está <em>pagando para trazer clientes</em>
          <br />e os perdendo na hora que eles chegam.
        </motion.h2>

        <motion.p
          className={s.intro}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          O problema não é a qualidade do seu serviço. A questão é que o cliente atual <strong>pesquisa e compara</strong>. Se o seu perfil não transmitir credibilidade imediata ou o seu WhatsApp demorar a responder, ele agenda com a opção mais ágil da concorrência.
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
