import { motion } from 'framer-motion'
import { MonitorSmartphone, Search, ShieldCheck, Rocket } from 'lucide-react'
import s from './ImportanciaSite.module.css'

const benefits = [
  {
    Icon: MonitorSmartphone,
    title: 'Sua vitrine 24 horas por dia',
    desc: 'Um site não fecha. Ele apresenta seus produtos, serviços e diferenciais a qualquer momento que o cliente procurar.',
  },
  {
    Icon: ShieldCheck,
    title: 'Autoridade e Credibilidade',
    desc: 'Empresas com sites próprios transmitem mais confiança. É o endereço oficial do seu negócio na internet.',
  },
  {
    Icon: Search,
    title: 'Descoberta no Google',
    desc: 'Sem um site otimizado, você não aparece nas buscas. Um site bem feito atrai clientes de forma orgânica e constante.',
  },
  {
    Icon: Rocket,
    title: 'Base para Escala',
    desc: 'Redes sociais mudam algoritmos, mas seu site é seu. É a base onde toda a sua estratégia de marketing deve aterrissar.',
  },
]

export default function ImportanciaSite() {
  return (
    <section className={s.section} id="importancia-site" aria-labelledby="importancia-h2">
      <div className="container">
        <motion.div
          className={s.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={s.eyebrow}>
            <span className={s.dot} aria-hidden="true" />
            Por que ter um site profissional?
          </div>
          <h2 className={s.h2} id="importancia-h2">
            O centro da sua estratégia <em>digital.</em>
          </h2>
          <p className={s.sub}>
            Não dependa apenas das redes sociais. Um site próprio é o seu terreno na internet.
          </p>
        </motion.div>

        <div className={s.grid}>
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className={s.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className={s.iconWrap}>
              <b.Icon size={34} className={s.icon} />
              </div>
              <h3 className={s.title}>{b.title}</h3>
              <p className={s.desc}>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
