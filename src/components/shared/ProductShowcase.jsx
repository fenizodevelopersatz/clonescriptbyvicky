import './ProductShowcase.css'

// Hero-weight product visual: an unbounded ambient glow behind a transparent-PNG
// product render, with floating glass chips around it. Deliberately has NO card
// frame/border/background -- the assets this wraps (e.g. tiktok-clone-1.webp) are
// pre-composed marketing renders with their own device bezels, shadows and
// decorative rings on a transparent background, so boxing them in a card would
// double-frame them and clip the decoration. Compare TinderShowcase, which DOES
// use a frame because it wraps a plain rectangular screenshot.
export default function ProductShowcase({
  image,
  imageAlt,
  imageTitle,
  imageWidth,
  imageHeight,
  chips = [],
  glowColorA = 'rgba(139, 124, 246, 0.16)',
  glowColorB = 'rgba(232, 62, 188, 0.14)',
}) {
  return (
    <div
      className="cs-product-showcase"
      style={{ '--showcase-glow-a': glowColorA, '--showcase-glow-b': glowColorB }}
    >
      <span className="cs-product-showcase__glow" aria-hidden="true" />
      <img
        className="cs-product-showcase__img"
        src={image}
        alt={imageAlt}
        title={imageTitle}
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        decoding="async"
      />
      {chips.map((chip) => (
        <span
          key={chip.label}
          className={`cs-product-showcase__chip cs-product-showcase__chip--${chip.pos}`}
          style={{ '--chip-color': chip.color }}
        >
          <i className={`fas ${chip.icon}`} aria-hidden="true"></i> {chip.label}
        </span>
      ))}
    </div>
  )
}
