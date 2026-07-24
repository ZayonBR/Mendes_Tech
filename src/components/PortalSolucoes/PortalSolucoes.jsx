import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import s from './PortalSolucoes.module.css'

export default function PortalSolucoes() {
  return (
    <section className={s.section} id="portal-solucoes" aria-labelledby="portal-title">
      <div className={s.inner}>
        <motion.div
          className={s.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className={s.dot} aria-hidden="true" />
          Mais que uma ferramenta
        </motion.div>

        <motion.h2
          className={s.h2}
          id="portal-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Nossas Soluções
        </motion.h2>

        <motion.p
          className={s.desc}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Explore em detalhes todas as tecnologias e metodologias que utilizamos para estruturar a presença digital e escalar o seu negócio.
        </motion.p>

        <motion.div
          className={s.cardContainer}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Link to="/solucoes" target="_blank" rel="noopener noreferrer" className={s.card}>
            <div className={s.imgWrap} aria-hidden="true">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                alt="Ecossistema de Soluções Mendes Tech"
                className={s.img}
                loading="lazy"
              />
              <div className={s.overlay} />
            </div>
            <div className={s.cardContent}>
              <span className={s.cardText}>
                VER TODAS AS SOLUÇÕES <span className={s.arrow}>›</span>
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

