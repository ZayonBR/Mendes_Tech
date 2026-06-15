import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import s from './Navbar.module.css'

const links = [
  { href: '#problema', label: 'O Problema' },
  { href: '#solucoes', label: 'Soluções' },
  { href: '#metodologia', label: 'Metodologia' },
  { href: '#fundadores', label: 'Quem Somos' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleLinkClick = () => setOpen(false)

  const smoothScroll = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (!el) return
    const nav = document.getElementById('navbar')
    const offset = nav ? nav.offsetHeight + 16 : 80
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
  }

  return (
    <header className={s.header} id="navbar" role="banner">
      <nav
        className={`${s.navbar} ${scrolled ? s.scrolled : ''}`}
        aria-label="Navegação principal"
      >
        <div className={s.inner}>
          {/* Logo */}
          <a href="#hero" className={s.logo} aria-label="Mendes Tech — início" onClick={e => smoothScroll(e, '#hero')}>
            <div className={s.logoIconWrap} aria-hidden="true">
              <img src="/favicon.png" alt="" className={s.logoImg} />
            </div>
            <span className={s.logoWord}>Mendes<strong>Tech</strong></span>
          </a>

          {/* Desktop links */}
          <div className={s.desktopLinks} role="list">
            {links.map(l => (
              <a key={l.href} href={l.href} className={s.link} role="listitem"
                onClick={e => smoothScroll(e, l.href)}>
                {l.label}
              </a>
            ))}
          </div>

          <a href="#cta" className={s.navCta} onClick={e => smoothScroll(e, '#cta')}>
            Análise Gratuita →
          </a>

          {/* Hamburger */}
          <button
            className={`${s.hamburger} ${open ? s.open : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              className={s.mobileMenu}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-label="Menu mobile"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className={s.mobileLink}
                  onClick={e => smoothScroll(e, l.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  {l.label}
                </motion.a>
              ))}
              <a href="#cta" className={s.mobileCta} onClick={e => smoothScroll(e, '#cta')}>
                Análise Gratuita →
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
