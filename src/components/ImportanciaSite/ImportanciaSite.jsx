import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import s from './ImportanciaSite.module.css'

const benefits = [
  {
    Icon: CheckCircle,
    title: 'Website Estratégico',
    desc: 'Seu terreno próprio na internet, projetado para atrair, engajar e converter visitantes em clientes reais.',
  },
  {
    Icon: CheckCircle,
    title: 'Perfil no Google',
    desc: 'Dominância nas buscas locais. Sua empresa será a primeira escolha de quem já está procurando pelo seu serviço.',
  },
  {
    Icon: CheckCircle,
    title: 'FAQ e Conteúdo Base',
    desc: 'As dúvidas dos seus clientes respondidas antecipadamente, gerando confiança antes mesmo do contato.',
  },
  {
    Icon: CheckCircle,
    title: 'Artigos e Materiais',
    desc: 'Conteúdo de valor que educa o seu cliente, estabelecendo você como a principal autoridade da sua região.',
  },
  {
    Icon: CheckCircle,
    title: 'WhatsApp Organizado',
    desc: 'Um fluxo de atendimento ágil, etiquetado e com automações que evitam que qualquer oportunidade esfrie.',
  },
  {
    Icon: CheckCircle,
    title: 'Autoridade e Reputação',
    desc: 'O somatório de todos os pontos acima resulta na criação de uma marca forte, desejada e inquestionável.',
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
            Ativos de Longo Prazo
          </div>
          <h2 className={s.h2} id="importancia-h2">
            Construímos <em>Patrimônio Digital</em>
          </h2>
          <p className={s.sub}>
            Não acreditamos em soluções temporárias. Cada melhoria deve gerar valor contínuo.
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
