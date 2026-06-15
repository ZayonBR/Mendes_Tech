import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Bot, Globe, MapPin } from 'lucide-react'
import FeatureCard from '../FeatureCard/FeatureCard'
import s from './Servicos.module.css'

const services = [
  {
    id: 'ia',
    Icon: Bot,
    title: 'Agente de IA 24/7',
    description: 'Um agente treinado com as informações do seu negócio que responde, qualifica leads e agenda consultas automaticamente.',
    features: [
      'Resposta imediata em menos de 3s',
      'Qualificação automática de leads',
      'Agendamento integrado ao seu sistema',
      'Transferência humanizada quando necessário'
    ]
  },
  {
    id: 'web',
    Icon: Globe,
    title: 'Sites de Alta Conversão',
    description: 'Páginas estratégicas e ultra rápidas com copywriting focado em transformar simples visitantes em clientes qualificados.',
    features: [
      'Carregamento em menos de 2s no celular',
      'Design premium que gera autoridade',
      'Copywriting focado no seu cliente ideal',
      'Botão de WhatsApp integrado à sua IA'
    ]
  },
  {
    id: 'google',
    Icon: MapPin,
    title: 'Google Meu Negócio',
    description: 'Posicionamento estratégico para você ser encontrado por clientes que estão prontos para comprar na sua região.',
    features: [
      'Auditoria e otimização completa do perfil',
      'Estratégia de captação de avaliações 5 estrelas',
      'Configuração de atributos e SEO Local',
      'Monitoramento de performance contínuo'
    ]
  }
]

export default function Servicos() {
  const containerRef = useRef(null)

  useGSAP(() => {
    // Animação de stagger para os cards
    gsap.fromTo('.gsap-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    )

    // Cleanup: Animações do ScrollTrigger lidam sozinhas com a desmontagem se configurado,
    // mas o revert nativo do useGSAP já cuida de reverter as animações para evitar memory leaks.
  }, { scope: containerRef })

  return (
    <section className={s.section} id="servicos" aria-labelledby="servicos-h2" ref={containerRef}>
      <div className="container">
        <div className={s.header}>
          <div className={s.eyebrow}>
            <span className={s.dot} aria-hidden="true" />
            Nossas Soluções
          </div>
          <h2 className={s.h2} id="servicos-h2">
            Três frentes de atuação para <em>escalar seu negócio.</em>
          </h2>
          <p className={s.sub}>
            Combinamos inteligência artificial, engenharia web e SEO local para criar uma máquina de atração e vendas.
          </p>
        </div>

        <div className={s.grid}>
          {services.map((svc) => (
            <FeatureCard
              key={svc.id}
              className="gsap-card"
              title={svc.title}
              description={svc.description}
              Icon={svc.Icon}
              features={svc.features}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
