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
            Escolha por onde<br />
            <em>quer começar.</em>
          </h2>

          <p className={s.sub}>Escolha a melhor solução para o momento da sua empresa.</p>

          <div className={s.options}>
            {/* Opção A */}
            <motion.div
              className={s.opt}
              whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(2,132,199,0.12)' }}
              transition={{ duration: 0.25 }}
            >
              <div className={s.optIconWrap} aria-hidden="true">
                <BarChart3 size={32} className={s.optIcon} strokeWidth={1.5} />
              </div>
              <h3 className={s.optTitle}>Desenvolvimento de Sites & Google Meu Negócio</h3>
              <p className={s.optDesc}>Criamos seu site profissional otimizado para vendas e configuramos seu Google Meu Negócio para atrair clientes locais.</p>
              <ul className={s.optList} aria-label="O que você recebe">
                <li>✓ Site profissional e responsivo</li>
                <li>✓ Otimização para SEO</li>
                <li>✓ Configuração do Google Meu Negócio</li>
                <li>✓ Posicionamento local de destaque</li>
              </ul>
              <a href={WA_GOOGLE} target="_blank" rel="noopener noreferrer" className={s.btnOutline} id="cta-btn-google">
                Quero meu Site + Google →
              </a>
            </motion.div>

            <div className={s.orSep} aria-hidden="true"><span>ou</span></div>

            {/* Opção B */}
            <motion.div
              className={`${s.opt} ${s.optFeatured}`}
              whileHover={{ y: -4, boxShadow: '0 24px 60px rgba(2,132,199,0.25)' }}
              transition={{ duration: 0.25 }}
            >
              <div className={s.featuredBadge} aria-label="Mais solicitado">⚡ Mais solicitado</div>
              <div className={s.optIconWrap} aria-hidden="true">
                <Bot size={32} className={`${s.optIcon} ${s.light}`} strokeWidth={1.5} />
              </div>
              <h3 className={`${s.optTitle} ${s.light}`}>Combo Completo: Site + Google + Automação</h3>
              <p className={`${s.optDesc} ${s.light}`}>A solução definitiva para escalar. Presença digital completa aliada ao poder do atendimento com IA.</p>
              <ul className={`${s.optList} ${s.light}`} aria-label="O que você recebe">
                <li>✓ Site de alta conversão</li>
                <li>✓ Google Meu Negócio otimizado</li>
                <li>✓ Robô de IA para WhatsApp 24/7</li>
                <li>✓ Máquina de atração e vendas completa</li>
              </ul>
              <a href={WA_ROBO} target="_blank" rel="noopener noreferrer" className={s.btnWhite} id="cta-btn-robo">
                Quero o Combo Completo →
              </a>
            </motion.div>
          </div>

          <p className={s.disclaimer}>
            🔒 Seus dados estão seguros. Não enviamos spam. Política de privacidade transparente.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
