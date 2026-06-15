import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Globe, MapPin } from 'lucide-react'
import s from './Solucoes.module.css'

const WA_LINK = 'https://wa.me/554891443698?text=Olá!%20Quero%20saber%20mais%20sobre%20as%20soluções%20da%20Mendes%20Tech.'

const tabs = [
  {
    id: 'ia',
    label: 'IA WhatsApp / Instagram',
    Icon: Bot,
    tag: 'Automação de IA',
    title: 'Agente de IA que atende, qualifica e agenda — 24/7',
    desc: 'Um agente treinado com as informações do seu negócio que responde, qualifica leads, agenda consultas e encaminha clientes automaticamente — sem parar, sem errar.',
    ctaLabel: 'Quero meu agente de IA →',
    features: [
      'Resposta imediata em menos de 3 segundos',
      'Qualificação automática de leads por interesse',
      'Agendamento integrado à sua agenda ou sistema',
      'Transferência humanizada quando necessário',
      'Relatório semanal de atendimentos e conversões',
    ],
    chat: [
      { side: 'bot', text: 'Olá! Seja bem-vindo(a) 👋 Como posso te ajudar hoje?', time: '22:47' },
      { side: 'user', text: 'Quero agendar uma consulta', time: '22:48' },
      { side: 'bot', text: 'Ótimo! Temos horários na quinta às 14h ou sexta às 10h. Qual prefere? ✅', time: '22:48' },
      { side: 'user', text: 'Quinta às 14h!', time: '22:49' },
      { side: 'bot', text: 'Perfeito! Consulta agendada para quinta-feira às 14h. Confirmação enviada! 🎉', time: '22:49' },
    ],
  },
  {
    id: 'web',
    label: 'Sites & Landing Pages',
    Icon: Globe,
    tag: 'Desenvolvimento Web',
    title: 'Sites que convertem visitantes em clientes',
    desc: 'Não fazemos sites "para ter". Fazemos páginas estratégicas, rápidas e com copy voltada para transformar visitantes em clientes — integradas ao robô de IA.',
    ctaLabel: 'Quero meu site que converte →',
    features: [
      'Carregamento em menos de 2 segundos no celular',
      'Design profissional que transmite credibilidade',
      'Copywriting focado no perfil de cliente ideal',
      'Botão de WhatsApp integrado ao agente de IA',
      'Pixel de conversão para mensurar resultado real',
    ],
    table: [
      { col: 'Velocidade', bad: '4–8 segundos', good: '<2 segundos' },
      { col: 'Copywriting', bad: 'Genérico', good: 'Focado em conversão' },
      { col: 'WhatsApp', bad: 'Botão simples', good: 'Integrado ao robô de IA' },
      { col: 'SEO Local', bad: 'Não configurado', good: 'Otimizado para sua cidade' },
      { col: 'Resultado', bad: 'Visitas sem conversão', good: 'Leads no WhatsApp' },
    ],
  },
  {
    id: 'google',
    label: 'Google Meu Negócio',
    Icon: MapPin,
    tag: 'Visibilidade Local',
    title: 'Posicionamento Estratégico nas Buscas da Sua Região',
    desc: 'Aplicamos técnicas avançadas de SEO Local para destacar o perfil da sua empresa. Nosso objetivo é garantir que você seja encontrado facilmente por clientes que estão prontos para comprar na sua cidade.',
    ctaLabel: 'Quero aparecer no Google →',
    features: [
      'Auditoria e otimização completa do perfil',
      'Estratégia de captação contínua de avaliações reais',
      'Configuração avançada de atributos, fotos e categorias',
      'Monitoramento de performance e análise de concorrentes',
    ],
    ranking: [
      { pos: '1º', name: 'Sua Empresa (Cenário Alvo)', stars: 5, reviews: '127 avaliações', isYou: true },
      { pos: '2º', name: 'Concorrente A', stars: 3, reviews: '14 avaliações', isYou: false },
      { pos: '3º', name: 'Concorrente B', stars: 2, reviews: '7 avaliações', isYou: false },
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
          O que a Mendes Tech entrega
        </motion.div>

        <motion.h2
          className={s.h2} id="solucoes-h2"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}
        >
          Três frentes que trabalham juntas<br />
          <em>nos bastidores do seu negócio.</em>
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
