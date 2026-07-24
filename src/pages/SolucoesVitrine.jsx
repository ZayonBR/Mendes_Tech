import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Compass,
  Search,
  Globe,
  Bot,
  FileText,
  MessageSquare,
  Activity,
  CheckCircle2,
  ArrowRight,
  SearchIcon
} from 'lucide-react'
import { solucoesData } from '../data/solucoes'
import s from './SolucoesVitrine.module.css'

const iconMap = {
  Compass,
  Search,
  Globe,
  Bot,
  FileText,
  MessageSquare,
  Activity
}

const categories = ['Todas', 'Presença & Marca', 'Atração & Vendas', 'Estrutura & Conversão', 'Tecnologia & IA', 'Consultoria']

export default function SolucoesVitrine() {
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Nossas Soluções — Mendes Tech'
  }, [])

  const filteredSolucoes = solucoesData.filter(item => {
    const matchesCategory = activeCategory === 'Todas' || item.categoria === activeCategory
    const matchesSearch = item.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.resumo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.tagline && item.tagline.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <main className={s.page} id="main-content">
      {/* Glow ambiental */}
      <div className={s.glowTop} aria-hidden="true" />

      <div className={s.inner}>
        {/* Header Hero */}
        <div className={s.hero}>
          <motion.div
            className={s.eyebrow}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className={s.dot} aria-hidden="true" />
            Ecossistema Mendes Tech
          </motion.div>

          <motion.h1
            className={s.h1}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
          >
            Soluções Tecnológicas & <em>Estratégias Sob Medida</em>
          </motion.h1>

          <motion.p
            className={s.desc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Tecnologia não é sobre instalar ferramentas genéricas, mas sim resolver os gargalos reais da sua empresa. Explore nosso ecossistema e fortaleça sua presença digital.
          </motion.p>
        </div>

        {/* Toolbar (Filtros por categoria + Campo de Busca) */}
        <div className={s.toolbar}>
          <div className={s.categoryPills} role="tablist" aria-label="Filtrar soluções por categoria">
            {categories.map(cat => (
              <button
                key={cat}
                className={`${s.pillBtn} ${activeCategory === cat ? s.pillActive : ''}`}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={s.searchWrap}>
            <SearchIcon size={16} className={s.searchIcon} />
            <input
              type="text"
              placeholder="Buscar solução..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className={s.searchInput}
              aria-label="Buscar soluções pelo nome"
            />
          </div>
        </div>

        {/* Grid de Cards */}
        {filteredSolucoes.length > 0 ? (
          <motion.div className={s.grid} layout role="list">
            <AnimatePresence>
              {filteredSolucoes.map((solucao, i) => {
                const IconComponent = iconMap[solucao.iconName] || Globe

                return (
                  <motion.div
                    key={solucao.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    role="listitem"
                  >
                    <Link to={`/solucoes/${solucao.id}`} className={s.card}>
                      <div className={s.imageBanner}>
                        <img
                          src={solucao.imagemCapa}
                          alt={solucao.titulo}
                          className={s.image}
                          loading="lazy"
                        />
                        <div className={s.imageOverlay} />
                        <span className={s.badgeTag}>{solucao.categoria}</span>
                      </div>

                      <div className={s.cardBody}>
                        <div className={s.cardHeader}>
                          <div className={s.iconBubble}>
                            <IconComponent size={20} strokeWidth={2} />
                          </div>
                          <h3 className={s.cardTitle}>{solucao.titulo}</h3>
                        </div>

                        <p className={s.cardResumo}>{solucao.resumo}</p>

                        {solucao.beneficios && (
                          <ul className={s.benefitList}>
                            {solucao.beneficios.slice(0, 3).map((b, idx) => (
                              <li key={idx} className={s.benefitItem}>
                                <CheckCircle2 size={14} className={s.checkIcon} />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        <div className={s.cardFooter}>
                          <span>Conhecer detalhes</span>
                          <ArrowRight size={16} className={s.arrowIcon} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className={s.emptyState}>
            <h3 className={s.emptyTitle}>Nenhuma solução encontrada</h3>
            <p>Tente ajustar o termo de busca ou selecionar outra categoria acima.</p>
          </div>
        )}
      </div>
    </main>
  )
}
