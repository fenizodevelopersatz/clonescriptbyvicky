import { useEffect, useState } from 'react'
import { testimonials } from '../../data/testimonials.js'
import InitialsAvatar from '../shared/InitialsAvatar.jsx'
import './TestimonialCarousel.css'

const AUTOPLAY_DELAY = 6000

function ArrowIcon({ direction }) {
  const points = direction === 'previous' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function TestimonialCarousel({ cardBg = '#f9f9f9', items: itemsProp }) {
  const items = itemsProp ?? testimonials
  const [active, setActive] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || items.length < 2) return undefined

    const id = window.setInterval(
      () => setActive((index) => (index + 1) % items.length),
      AUTOPLAY_DELAY,
    )
    return () => window.clearInterval(id)
  }, [items.length])

  const item = items[active]
  const hasVideo = item.video && item.video !== '#'
  const showPrevious = () => setActive((active - 1 + items.length) % items.length)
  const showNext = () => setActive((active + 1) % items.length)

  return (
    <section className="clonescript-testimonial" aria-roledescription="carousel" aria-label="Client testimonials">
      <article className="clonescript-testimonial__card" style={{ backgroundColor: cardBg }} aria-live="polite">
        <div className="clonescript-testimonial__avatar">
          {item.image
            ? <img src={item.image} width="64" height="64" alt={item.name} loading="eager" decoding="async" style={{ borderRadius: '50%', objectFit: 'cover' }} />
            : <InitialsAvatar name={item.name} size={64} />}
        </div>
        <div className="clonescript-testimonial__content">
          <h3>{item.name}</h3>
          {item.location ? <p className="clonescript-testimonial__role">{item.location}</p> : null}
          <blockquote>{item.text}</blockquote>
          {hasVideo ? (
            <a className="clonescript-testimonial__video" href={item.video} target="_blank" rel="noreferrer">
              <span className="clonescript-testimonial__play" aria-hidden="true">▶</span>
              <span>Play Testimonial Video</span>
            </a>
          ) : null}
        </div>
      </article>

      <div className="clonescript-testimonial__controls">
        <button type="button" className="clonescript-testimonial__arrow" aria-label="Previous testimonial" onClick={showPrevious}>
          <ArrowIcon direction="previous" />
        </button>
        <div className="clonescript-testimonial__dots" aria-label="Choose testimonial">
          {items.map((testimonial, index) => (
            <button
              type="button"
              key={testimonial.name}
              className={index === active ? 'is-active' : ''}
              aria-label={`Show testimonial ${index + 1}: ${testimonial.name}`}
              aria-current={index === active ? 'true' : undefined}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
        <button type="button" className="clonescript-testimonial__arrow" aria-label="Next testimonial" onClick={showNext}>
          <ArrowIcon direction="next" />
        </button>
      </div>
    </section>
  )
}
