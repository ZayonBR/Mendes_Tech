import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Globe, MapPin } from 'lucide-react'
import s from './Solucoes.module.css'

const WA_LINK = 'https://wa.me/554891443698?text=Olá!%20Quero%20saber%20mais%20sobre%20as%20soluções%20da%20Mendes%20Tech.'

const tabs = [
  {
    id: 'diagnostico',
    label: '1. Diagnóstico',
    Icon: MapPin,
    tag: 'Fase 1: Mapeamento de Cenário',
    title: 'Conhecemos sua realidade, processos e comunicação.',
    desc: 'Antes de oferecer qualquer ferramenta, fazemos uma auditoria completa na sua presença digital. Avaliamos a velocidade do seu site, seu posicionamento local e como a sua equipe lida com as mensagens.',
    ctaLabel: 'Quero meu diagnóstico →',
    features: [
      'Auditoria de SEO e Posicionamento no Google',
      'Análise de tempo e qualidade de resposta no WhatsApp',
      'Revisão de design e conversão do site',
      'Mapeamento da Jornada do Cliente',
    ],
    table: [
      { col: 'Abordagem', bad: 'Vender pacote pronto', good: 'Diagnóstico profundo' },
      { col: 'Foco', bad: 'Tecnologia pela tecnologia', good: 'Resolver gargalos' },
      { col: 'Visão', bad: 'Isolada (só site ou só bot)', good: 'Jornada Integrada' },
    ],
  },
  {
    id: 'planejamento',
    label: '2. Planejamento',
    Icon: Globe,
    tag: 'Fase 2: Estratégia Sob Medida',
    title: 'Definimos prioridades. Nem toda empresa precisa da mesma solução.',
    desc: 'Com o diagnóstico em mãos, desenhamos o plano exato. Se você precisa atrair mais pessoas, focamos em SEO e Google. Se você atrai muito mas não fecha, organizamos o WhatsApp.',
    ctaLabel: 'Ver planejamento estratégico →',
    features: [
      'Definição de canais de atração primários',
      'Estruturação do fluxo de vendas ideal',
      'Priorização de investimentos digitais',
      'Sem pacotes genéricos, 100% customizado',
    ],
    ranking: [
      { pos: '1º', name: 'Sua Estratégia Digital (Focada)', stars: 5, reviews: 'Crescimento Contínuo', isYou: true },
      { pos: '2º', name: 'Atirar para todos os lados', stars: 2, reviews: 'Gasto de energia', isYou: false },
    ],
  },
  {
    id: 'estrutura',
    label: '3. Estrutura Digital',
    Icon: Globe,
    tag: 'Fase 3: Construção da Base',
    title: 'Organizamos todos os ativos (Google, Site, SEO).',
    desc: 'Construímos ou refatoramos os seus pontos de contato. Seu site não será apenas um cartão de visitas, mas uma máquina de persuasão. Seu Google dominará a região.',
    ctaLabel: 'Organizar minha estrutura →',
    features: [
      'Sites focados em conversão e velocidade',
      'Otimização avançada de Google Meu Negócio',
      'Organização de catálogo e serviços no WhatsApp',
      'Copywriting voltado para credibilidade',
    ],
    table: [
      { col: 'Credibilidade', bad: 'Amadora', good: 'Profissional' },
      { col: 'Velocidade Web', bad: '> 5 segundos', good: '< 2 segundos' },
      { col: 'Google', bad: 'Invisível', good: 'Dominante Local' },
    ],
  },
  {
    id: 'atendimento',
    label: '4. Atendimento Inteligente',
    Icon: Bot,
    tag: 'Fase 4: Automação e IA',
    title: 'Padronizamos informações e reduzimos dúvidas repetitivas.',
    desc: 'Aqui a tecnologia entra como protagonista para escalar o seu negócio. Implementamos agentes de inteligência artificial que qualificam, agendam e atendem 24/7 sem perder o tom humano.',
    ctaLabel: 'Quero escalar meu atendimento →',
    features: [
      'Implantação de Agentes de IA no WhatsApp',
      'Qualificação e triagem autônoma de leads',
      'Agendamento automático sincronizado',
      'Relatórios de taxa de conversão',
    ],
    chat: [
      { side: 'bot', text: 'Olá! Sou a assistente inteligente. Notei que você procura por nossos serviços. Como posso ajudar? 👋', time: '14:00' },
      { side: 'user', text: 'Quero saber se atendem na minha região.', time: '14:02' },
      { side: 'bot', text: 'Sim! Atendemos toda a sua região com excelência garantida. Quer agendar uma call rápida para os detalhes? ✅', time: '14:02' },
    ],
  },
]

export default function Solucoes() {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <section className={s.section} id="solucoes" aria-labelledby="solucoes-h2">
      <div className="container">
        <motion.div
          className={s.eyebrow}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
        >
          <span className={s.dot} aria-hidden="true" />
          O Método CONECTA
        </motion.div>

        <motion.h2
          className={s.h2} id="solucoes-h2"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}
        >
          Não começamos falando sobre tecnologia.<br />
          <em>Começamos entendendo sua empresa.</em>
        </motion.h2>

        {/* Tab navigation */}
        <div className={s.tabNav} role="tablist" aria-label="Soluções disponíveis">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              className={`${s.tabBtn} ${active === i ? s.tabActive : ''}`}
              onClick={() => setActive(i)}
              role="tab"
              aria-selected={active === i}
              id={`tab-${t.id}`}
              aria-controls={`panel-${t.id}`}
            >
              <t.Icon size={16} strokeWidth={2} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle', marginTop: '-2px' }} />
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            className={s.panel}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={s.panelLeft}>
              <span className={s.panelTag}>{tab.tag}</span>
              <h3 className={s.panelTitle}>{tab.title}</h3>
              <p className={s.panelDesc}>{tab.desc}</p>
              <ul className={s.featureList} aria-label="Funcionalidades">
                {tab.features.map((f, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.35 }}
                  >{f}</motion.li>
                ))}
              </ul>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={s.panelCta}>
                {tab.ctaLabel}
              </a>
            </div>

            <div className={s.panelRight}>
              {/* Chat mockup for IA tab */}
              {tab.chat && (
                <div className={s.chatMock} aria-label="Exemplo de atendimento automático">
                  <div className={s.chatHeader}>
                    <span className={s.chatAvatarWrap} aria-hidden="true">
                      <Bot size={20} className={s.chatAvatarIcon} strokeWidth={1.5} />
                    </span>
                    <div>
                      <span className={s.chatName}>Robô da [Sua Empresa]</span>
                      <span className={s.chatOnline}>● Online agora</span>
                    </div>
                  </div>
                  <div className={s.chatBody}>
                    {tab.chat.map((msg, i) => (
                      <motion.div
                        key={i}
                        className={`${s.chatMsg} ${msg.side === 'bot' ? s.chatBot : s.chatUser}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.18, duration: 0.3 }}
                      >
                        <p>{msg.text}</p>
                        <time className={s.chatTime}>{msg.time}</time>
                      </motion.div>
                    ))}
                  </div>
                  <div className={s.chatFooter}>
                    <span className={s.mono}>// atendimento 100% automático — 22:47 da noite</span>
                  </div>
                </div>
              )}

              {/* Comparison table for Web tab */}
              {tab.table && (
                <div className={s.tableWrap}>
                  <table className={s.table}>
                    <thead>
                      <tr>
                        <th>Característica</th>
                        <th className={s.thBad}>Site Padrão</th>
                        <th className={s.thGood}>Mendes Tech</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tab.table.map((row, i) => (
                        <motion.tr key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07 }}
                        >
                          <td className={s.tdLabel}>{row.col}</td>
                          <td className={s.tdBad}>{row.bad}</td>
                          <td className={s.tdGood}>{row.good}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Ranking mockup for Google tab */}
              {tab.ranking && (
                <div className={s.rankMock} aria-label="Posicionamento no Google">
                  <div className={s.rankHeader}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <circle cx="9" cy="9" r="8.5" stroke="#94A3B8" strokeWidth="1"/>
                    </svg>
                    <span className={s.mono}>Google Maps · Resultados locais</span>
                  </div>
                  {tab.ranking.map((r, i) => (
                    <motion.div
                      key={i}
                      className={`${s.rankRow} ${r.isYou ? s.rankYou : ''}`}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 }}
                    >
                      <span className={s.rankPos}>{r.pos}</span>
                      <div className={s.rankInfo}>
                        <span className={s.rankName}>{r.name}</span>
                        <span className={s.rankStars} aria-label={`${r.stars} estrelas`}>
                          {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
                        </span>
                        <span className={s.rankReviews}>{r.reviews}</span>
                      </div>
                      {r.isYou && <span className={s.rankBadge}>Você</span>}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
