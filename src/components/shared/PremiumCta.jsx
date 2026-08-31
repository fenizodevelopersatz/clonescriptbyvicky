import { Link } from 'react-router-dom'
import './PremiumCta.css'

export default function PremiumCta({
  heading,
  subheading,
  buttonText = 'Start Your Free Demo',
  buttonLink = '/schedule-free-demo',
  icon = 'fa-graduation-cap',
}) {
  return (
    <section className="cs-premium-cta">
      <div className="cs-premium-cta__panel">
        <span className="cs-premium-cta__glow" aria-hidden="true" />
        <i className={`fas ${icon} cs-premium-cta__icon`} aria-hidden="true"></i>
        <span className="cs-premium-cta__sparkle cs-premium-cta__sparkle--left" aria-hidden="true">&#10022;</span>
        <span className="cs-premium-cta__sparkle cs-premium-cta__sparkle--right" aria-hidden="true">&#10022;</span>
        <div className="cs-premium-cta__content">
          <h2 className="cs-premium-cta__heading">{heading}</h2>
          {subheading && <p className="cs-premium-cta__sub">{subheading}</p>}
          <Link to={buttonLink} className="cs-premium-cta__btn">
            <span>{buttonText}</span>
            <i className="fas fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}
