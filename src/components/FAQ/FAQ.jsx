import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import s from './FAQ.module.css'

const faqs = [
  {
    tag: 'Sobre nós',
    q: 'Vocês já têm clientes ativos?',
    a: 'Somos uma empresa nova com metodologia sólida. Nosso diferencial é transparência: entregamos diagnóstico gratuito antes de qualquer proposta, sem compromisso. Você vê o que encontramos, o que propomos e decide com clareza.',
  },
  {
    tag: 'Investimento',
    q: 'Quanto custa?',
    a: 'Trabalhamos com proposta personalizada após o diagnóstico gratuito. Nosso compromisso é que o investimento caiba no momento da sua empresa — sem pacotes fixos que não fazem sentido pra você.',
  },
  {
    tag: 'Contrato',
    q: 'Preciso de contrato longo?',
    a: 'Não. Trabalhamos com ciclos curtos e renováveis. Você avalia o resultado antes de continuar. Acreditamos que cliente satisfeito não precisa de contrato para ficar.',
  },
  {
    tag: 'Agente de IA',
    q: 'O robô vai parecer robótico para meus clientes?',
    a: 'Não. O agente é treinado com o vocabulário, tom e informações do seu negócio — seus clientes vão perceber como um atendente treinado, não um bot genérico. Inclusive, a maioria nem percebe que está falando com IA.',
  },
  {
    tag: 'Site',
    q: 'E se eu já tiver um site?',
    a: 'Analisamos o que você já tem. Se o site atual converte bem, não mexemos. Se não converte, mostramos exatamente o que está travando — com dados, não com achismo.',
  },
  {
    tag: 'Prazo',
    q: 'Quanto tempo leva para tudo estar funcionando?',
    a: 'Em média, de 5 a 10 dias úteis para uma implementação completa: diagnóstico, planejamento, desenvolvimento do site ou agente de IA, testes e entrega. Para landing pages simples, o prazo pode ser menor.',
  },
  {
    tag: 'Atendimento',
    q: 'A Mendes Tech atende empresas fora do Litoral Sul de SP?',
    a: 'Sim. Temos forte presença no Litoral Sul de SP (Peruíbe, Itanhaém, Mongaguá, Praia Grande e Santos), mas atendemos empresas em todo o território nacional de forma completamente remota — com a mesma qualidade e atenção.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className={`${s.item} ${open ? s.itemOpen : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
    >
      <button
        className={s.question}
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        id={`faq-q-${index}`}
        aria-controls={`faq-a-${index}`}
      >
        <span className={s.questionInner}>
          {faq.tag && <span className={s.tag}>{faq.tag}</span>}
          <span className={s.questionText}>{faq.q}</span>
        </span>
        <motion.span
          className={s.icon}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-a-${index}`}
            role="region"
            aria-labelledby={`faq-q-${index}`}
            className={s.answer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className={s.answerText}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section className={s.section} id="faq" aria-labelledby="faq-h2">
      <div className="container">
        <motion.div
          className={s.eyebrow}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
        >
          <span className={s.dot} aria-hidden="true" />
          Perguntas frequentes
        </motion.div>

        <motion.h2
          className={s.h2} id="faq-h2"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}
        >
          As dúvidas que aparecem<br />
          <em>antes de todo contrato.</em>
        </motion.h2>

        <div className={s.list} role="list" aria-label="Perguntas e respostas">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
