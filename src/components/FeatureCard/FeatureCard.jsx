import { forwardRef } from 'react'
import { Check } from 'lucide-react'
import s from './FeatureCard.module.css'

const FeatureCard = forwardRef(({ title, description, Icon, features = [], actionButton, className = '' }, ref) => {
  return (
    <article ref={ref} className={`${s.card} ${className}`}>
      {Icon && (
        <div className={s.iconWrap} aria-hidden="true">
          <Icon size={32} className={s.icon} strokeWidth={1.5} />
        </div>
      )}
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{description}</p>
      
      {features.length > 0 && (
        <ul className={s.featureList} aria-label="Funcionalidades incluídas">
          {features.map((feature, idx) => (
            <li key={idx} className={s.featureItem}>
              <Check size={18} className={s.checkIcon} strokeWidth={2} aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {actionButton && (
        <div className={s.actionWrap}>
          {actionButton}
        </div>
      )}
    </article>
  )
})

FeatureCard.displayName = 'FeatureCard'
export default FeatureCard
