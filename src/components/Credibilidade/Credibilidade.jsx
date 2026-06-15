import { motion } from 'framer-motion'
import s from './Credibilidade.module.css'

/* ── Logos inline SVG ─────────────────────────────────────────── */

function LogoOpenAI() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="22" height="22">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.677a.79.79 0 0 0-.402-.677zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.993l-2.597 1.5-2.607-1.5z"/>
    </svg>
  )
}

function LogoMeta() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="22" height="22">
      <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.985 1.992 1.22 2.94 1.22 1.786 0 2.896-.8 3.612-2.1.32-.586.52-1.415.52-2.41 0-2.668-.765-5.484-2.089-7.446-1.269-1.885-2.972-2.95-4.704-2.95-1.39 0-2.297.521-3.422 1.621-.169.163-.337.328-.513.506l-.048.05-.01-.02a26.774 26.774 0 0 0-.603-.762C9.028 4.927 8.19 4.03 6.915 4.03zm8.98 5.274a5.4 5.4 0 0 1 .498.79c.836 1.517 1.379 3.468 1.379 5.148 0 1.03-.258 1.661-.494 1.661-.245 0-.56-.378-.952-.874-.24-.302-.603-.8-1.002-1.38l-1.798-2.876a28.75 28.75 0 0 0-.582-.87c.48-.917 1.013-1.68 1.535-2.143.468-.415.834-.536 1.123-.536.24 0 .497.096.8.34a3.495 3.495 0 0 1 .493.74zM6.915 6.03c.637 0 1.332.58 2.121 1.533.364.435.777.99 1.219 1.65l.186.28-.63 1.115c-1.213 2.148-1.85 3.2-2.487 4.024-1.033 1.344-1.686 1.768-2.358 1.768-.915 0-1.43-.428-1.789-1.065-.173-.305-.31-.673-.395-1.088a8.79 8.79 0 0 1-.164-1.698c0-2.277.623-4.642 1.682-6.235.752-1.14 1.553-1.484 2.215-1.484z"/>
    </svg>
  )
}

function LogoGoogle() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="22" height="22">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.01 14.49c-1.34 1.33-3.15 2.15-5.16 2.15-3.98 0-7.21-3.23-7.21-7.21 0-1.84.7-3.52 1.84-4.78L12 12.35V6.44c3.1.42 5.49 3.06 5.49 6.27 0 1.49-.54 2.85-1.48 3.78z" fill="#4285F4"/>
      <path d="M12 6.44v5.91l-5.52-5.74A7.207 7.207 0 0 1 12 4.79V6.44z" fill="#34A853"/>
      <path d="M6.63 6.61L12 12.35l-5.4 5.42A7.215 7.215 0 0 1 4.79 12c0-2.08.88-3.96 2.28-5.27.17-.15.35-.3.53-.44l.03.32z" fill="#FBBC05"/>
      <path d="M17.49 16.49A7.21 7.21 0 0 1 12 19.21v-1.57c1.96-.37 3.62-1.6 4.64-3.27.36-.6.63-1.26.8-1.96H12.5v-2.06H19c.08.44.12.9.12 1.37 0 1.84-.54 3.55-1.63 4.77z" fill="#EA4335"/>
    </svg>
  )
}

const partners = [
  {
    id: 'openai',
    Logo: LogoOpenAI,
    name: 'OpenAI',
    detail: 'GPT-4o · Processamento de linguagem',
    color: '#000000',
  },
  {
    id: 'meta',
    Logo: LogoMeta,
    name: 'Meta Business',
    detail: 'WhatsApp Business API oficial',
    color: '#0081FB',
  },
  {
    id: 'google',
    Logo: LogoGoogle,
    name: 'Google Business',
    detail: 'Google Business Profile · SEO Local',
    color: '#4285F4',
  },
  {
    id: 'diagnostico',
    Logo: null,
    name: 'Diagnóstico gratuito',
    detail: 'Sem compromisso · Resultado em 24h',
    color: '#0284C7',
    isBadge: true,
  },
]

export default function Credibilidade() {
  return (
    <section className={s.section} id="credibilidade" aria-labelledby="cred-h2">
      <div className="container">

        {/* Header */}
        <motion.div
          className={s.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={s.h2} id="cred-h2">Construído sobre tecnologia de ponta</h2>
          <p className={s.sub}>
            Usamos as mesmas ferramentas que grandes empresas — adaptadas para o negócio local.
          </p>
        </motion.div>

        {/* Partner badges */}
        <motion.div
          className={s.partners}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          role="list"
          aria-label="Tecnologias e parceiros"
        >
          {partners.map((p, i) => (
            <motion.div
              key={p.id}
              className={`${s.partnerCard} ${p.isBadge ? s.badgeCard : ''}`}
              role="listitem"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              whileHover={{ y: -3 }}
            >
              <div className={s.partnerIconRow}>
                {p.isBadge ? (
                  <span className={s.badgeStar} aria-hidden="true">✦</span>
                ) : (
                  <div className={s.partnerLogo} style={{ color: p.color }}>
                    <p.Logo />
                  </div>
                )}
                <span className={s.partnerName}>{p.name}</span>
              </div>
              <span className={s.partnerDetail}>{p.detail}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Transparency bar */}
        <motion.div
          className={s.transparencyBar}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className={s.transparencyDot} aria-hidden="true" />
          <p className={s.transparencyText}>
            Empresa nova, metodologia testada. Nosso processo é baseado em dados reais do mercado
            {' '}— não em suposições.
          </p>
          <span className={s.transparencyDot} aria-hidden="true" />
        </motion.div>

      </div>
    </section>
  )
}
