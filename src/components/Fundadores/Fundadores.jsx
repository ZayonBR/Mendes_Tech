import { motion } from 'framer-motion'
import { MapPin, CheckCircle2, MessageCircle, Mail } from 'lucide-react'
import s from './Fundadores.module.css'
import quemSomosImg from './quem-somos.png'

const WA_LINK = 'https://wa.me/554891443698?text=Olá%20Eduardo%20e%20Zayon!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20meu%20negócio.'

export default function Fundadores() {
  return (
    <section className={s.section} id="fundadores" aria-labelledby="fundadores-h2">
      <div className="container">
        <motion.div
          className={s.eyebrow}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
        >
          <span className={s.dot} aria-hidden="true" />
          Quem está por trás
        </motion.div>

        <motion.h2
          className={s.h2} id="fundadores-h2"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}
        >
          A união da <em>inteligência comercial</em><br />
          com a <em>tecnologia avançada.</em>
        </motion.h2>

        {/* Frase de missão */}
        <motion.p
          className={s.mission}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          Somos uma Consultoria Especializada em reestruturar a presença digital e otimizar o atendimento de negócios locais.
        </motion.p>

        <motion.div
          className={s.card}
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={s.imgWrap}>
            <img
              src={quemSomosImg}
              alt="Eduardo e Zayon, fundadores da Mendes Tech, especialistas em automação de IA e desenvolvimento web"
              className={s.img}
              loading="lazy"
              width={480}
              height={480}
            />
            <div className={s.imgGlow} aria-hidden="true" />
          </div>

          <div className={s.content}>
            <div className={s.namesBlock}>
              <h3 className={s.names}>Eduardo <span className={s.amp}>&</span> Zayon</h3>
              <p className={s.role}>Co-fundadores · Mendes Tech</p>
              <p className={s.location}>
                <MapPin size={14} strokeWidth={1.5} aria-hidden="true" className={s.locationIcon} />
                Litoral Sul de SP · Atendimento Nacional
              </p>
            </div>

            <div className={s.tags} aria-label="Especialidades">
              {['Automação de IA', 'Desenvolvimento Web', 'ChatBot WhatsApp', 'Agente Instagram', 'SEO Local'].map(t => (
                <span key={t} className={s.tag}>{t}</span>
              ))}
            </div>

            <blockquote className={s.quote}>
              <p>"A Mendes Tech nasceu da união entre anos de experiência em gestão e atendimento, com o desenvolvimento avançado de IA. Percebemos que tecnologia, sozinha, não resolve problemas. Ela precisa estar a serviço da estratégia. Foi assim que surgiu a metodologia CONECTA."</p>
              <footer>— Eduardo &amp; Zayon, fundadores</footer>
            </blockquote>

            <div className={s.credentials} aria-label="Credenciais">
              <div className={s.cred}>
                <CheckCircle2 size={16} strokeWidth={1.5} className={s.credIcon} aria-hidden="true" />
                <div><strong>Eduardo</strong> Estrategista de Negócios e Processos. Especialista em mapear as dores do cliente, desenhar os fluxos de vendas e estruturar estrategicamente as soluções que a tecnologia vai executar. Entusiasta do marketing digital, advogado e aplicações da IA e  formação em marketing na Austrália Pacífico College - Sydney</div>
              </div>
              <div className={s.cred}>
                <CheckCircle2 size={16} strokeWidth={1.5} className={s.credIcon} aria-hidden="true" />
                <div><strong>Zayon</strong> Desenvolvedor Web e Especialista em Automação. Graduando em Sistemas de Informação, é responsável pelo desenvolvimento web, integração de automações de IA e toda a infraestrutura técnica descrita no site.</div>
              </div>
            </div>

            {/* Contato direto */}
            <div className={s.contactRow}>
              <a href="mailto:contato@mendestech.com.br" className={s.contactLink} aria-label="Enviar e-mail para a Mendes Tech">
                <Mail size={15} strokeWidth={1.5} aria-hidden="true" />
                contato@mendestech.com.br
              </a>
              <span className={s.contactDivider} aria-hidden="true">·</span>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={s.contactWA} aria-label="Chamar no WhatsApp">
                <MessageCircle size={15} strokeWidth={1.5} aria-hidden="true" />
                Chamar no WhatsApp
              </a>
            </div>

         

            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={s.ctaBtn} id="fundadores-cta">
              Falar com Eduardo e Zayon
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3.75 9h10.5M9 3.75L14.25 9 9 14.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
