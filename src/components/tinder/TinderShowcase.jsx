import './TinderShowcase.css'

const floatingChips = [
  { icon: 'fa-heart', label: "It's a Match", pos: 'tl', color: '#ff6b81' },
  { icon: 'fa-shield-heart', label: 'Verified Profiles', pos: 'tr', color: '#7138e8' },
  { icon: 'fa-bolt', label: 'Boost', pos: 'bl', color: '#e83ebc' },
]

// Real product screenshot (post-creation + profile screens) framed in a
// decorative wide canvas -- the previous CSS-only phone mockup here has been
// swapped for this actual dating-app-script screenshot per request, since
// it's an existing CloneScript asset (already used sitewide, e.g.
// LaunchCta on this page) rather than a CSS drawing.
export default function TinderShowcase() {
  return (
    <div className="cs-tinder-showcase">
      <span className="cs-tinder-showcase__glow" aria-hidden="true" />

      <figure className="cs-tinder-showcase__frame">
        <img
          src="/wp-content/uploads/2025/09/tinder-banner-image.webp"
          alt="Tinder clone app preview showing post creation and profile screens"
          loading="lazy"
          decoding="async"
        />
      </figure>

      {floatingChips.map((chip) => (
        <span
          key={chip.icon}
          className={`cs-tinder-showcase__chip cs-tinder-showcase__chip--${chip.pos}`}
          style={{ '--chip-color': chip.color }}
        >
          <i className={`fas ${chip.icon}`} aria-hidden="true"></i> {chip.label}
        </span>
      ))}
    </div>
  )
}
