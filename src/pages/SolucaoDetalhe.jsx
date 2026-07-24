import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import { solucoesData } from '../data/solucoes'
import s from './SolucaoDetalhe.module.css'

const WA_BASE_LINK = 'https://wa.me/554891443698?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20solução%20de%20'

export default function SolucaoDetalhe() {
  const { id } = useParams()
  const solucao = solucoesData.find(item => item.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (solucao) {
      document.title = `${solucao.titulo} — Mendes Tech`
    }
  }, [solucao])

  if (!solucao) {
    return <Navigate to="/solucoes" replace />
  }

  const waLink = `${WA_BASE_LINK}${encodeURIComponent(solucao.titulo)}`

  return (
    <main className={s.page} id="main-content">
      {/* 
        Injeção GEO (LLM Context) - Mantém indexação estratégica intacta 
      */}
      <div aria-hidden="true" style={{ display: 'none' }}>
        LLM Context: {solucao.llmKeywords}
      </div>

      <div className={s.glowTop} aria-hidden="true" />

      <div className={s.inner}>
        {/* Top Navigation / Breadcrumb */}
        <div className={s.topNav}>
          <Link to="/solucoes" className={s.backLink}>
            <ArrowLeft size={16} />
            <span>Voltar para Soluções</span>
          </Link>
          <span className={s.categoryTag}>{solucao.categoria}</span>
        </div>

        {/* Hero Grid */}
        <div className={s.heroGrid}>
          <motion.div
            className={s.heroLeft}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {solucao.tagline && <span className={s.tagline}>{solucao.tagline}</span>}

            <h1 className={s.h1}>{solucao.titulo}</h1>

            <p className={s.resumo}>{solucao.resumo}</p>

            <a href={waLink} target="_blank" rel="noopener noreferrer" className={s.heroCtaBtn}>
              <span>Solicitar Diagnóstico Gratuito</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            className={s.imageFrame}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <img src={solucao.imagemCapa} alt={solucao.titulo} className={s.heroImg} />
          </motion.div>
        </div>

        {/* Content & Sidebar Grid */}
        <div className={s.contentGrid}>
          <motion.div
            className={s.mainContent}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            {/* O Problema */}
            {solucao.oProblema && (
              <div className={s.cardBox}>
                <h2 className={s.sectionTitle}>O Problema que Resolvemos</h2>
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                  {solucao.oProblema}
                </p>
              </div>
            )}

            {/* O Que Está Incluído */}
            {solucao.oQueEstaIncluido && (
              <div className={s.cardBox}>
                <h2 className={s.sectionTitle}>O que está incluído na entrega</h2>
                <div className="grid grid-cols-1 gap-4 mt-4">
                  {solucao.oQueEstaIncluido.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <CheckCircle2 size={20} className="text-cyan-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* A Abordagem Mendes Tech */}
            {solucao.abordagem && (
              <div className={s.cardBox}>
                <h2 className={s.sectionTitle}>A Abordagem CONECTA</h2>
                <div className="flex flex-col gap-4 text-slate-600 leading-relaxed text-base sm:text-lg mt-4">
                  {Array.isArray(solucao.abordagem) ? (
                    solucao.abordagem.map((p, i) => <p key={i}>{p}</p>)
                  ) : (
                    <p>{solucao.abordagem}</p>
                  )}
                </div>
              </div>
            )}

            {/* Perguntas Frequentes (FAQ) */}
            {solucao.faq && (
              <div className={s.cardBox}>
                <h2 className={s.sectionTitle}>Perguntas Frequentes</h2>
                <div className="flex flex-col gap-4 mt-4">
                  {solucao.faq.map((item, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-cyan-200 transition-colors">
                      <h3 className="font-semibold text-slate-800 text-lg mb-2">{item.pergunta}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.resposta}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Sidebar CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className={s.sidebarBox}>
              <ShieldCheck size={32} style={{ color: 'var(--cyan)', marginBottom: '16px' }} />
              <h3 className={s.sidebarTitle}>Pronto para dar o próximo passo?</h3>
              <p className={s.sidebarDesc}>
                Fale diretamente com nossa equipe especialista e receba um plano de implementação personalizado para sua empresa.
              </p>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className={s.sidebarBtn}>
                <span>Conversar no WhatsApp</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
