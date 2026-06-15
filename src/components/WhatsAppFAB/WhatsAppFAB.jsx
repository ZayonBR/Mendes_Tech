import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import s from './WhatsAppFAB.module.css'

const WA = 'https://wa.me/554891443698?text=Olá!%20Vim%20pelo%20site%20da%20Mendes%20Tech%20e%20quero%20saber%20mais.'

export default function WhatsAppFAB() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={s.wrap}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                className={s.tooltip}
                initial={{ opacity: 0, x: 16, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 16, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                role="tooltip"
              >
                Falar com a equipe agora
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className={s.fab}
            aria-label="Falar com a Mendes Tech pelo WhatsApp agora"
            onMouseEnter={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M14 2C7.373 2 2 7.373 2 14c0 2.07.534 4.013 1.47 5.7L2 26l6.47-1.454A11.953 11.953 0 0 0 14 26c6.627 0 12-5.373 12-12S20.627 2 14 2z"
                fill="white" />
              <path
                d="M19.5 16.818c-.3-.15-1.77-.874-2.045-.973-.275-.1-.474-.15-.674.15-.2.298-.773.973-.947 1.172-.174.2-.349.224-.649.075-.3-.15-1.267-.467-2.412-1.488-.892-.795-1.494-1.776-1.67-2.075-.174-.3-.018-.462.131-.61.134-.134.3-.35.449-.524.15-.175.2-.3.3-.5.1-.2.05-.374-.025-.524-.075-.15-.674-1.624-.924-2.224-.243-.583-.49-.504-.674-.514-.174-.009-.374-.011-.574-.011-.2 0-.524.075-.799.374-.274.3-1.048 1.024-1.048 2.498s1.073 2.9 1.223 3.098c.15.2 2.11 3.222 5.113 4.517.715.308 1.272.492 1.707.63.717.228 1.37.196 1.886.119.575-.086 1.77-.724 2.02-1.423.249-.7.249-1.299.174-1.424-.075-.124-.274-.2-.574-.35z"
                fill="#25D366" />
            </svg>
            <span className={s.ring} aria-hidden="true" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
