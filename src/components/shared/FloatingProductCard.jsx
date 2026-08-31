import './FloatingProductCard.css'

// Light-weight depth treatment for product renders: a resting tilt that
// straightens and lifts on hover. Intentionally has no background/border of its
// own so it can drop straight into an existing column or grid cell without
// changing that section's layout or backdrop.
export default function FloatingProductCard({
  image,
  imageAlt,
  imageTitle,
  imageWidth,
  imageHeight,
  tilt = 'left',
  className = '',
}) {
  return (
    <figure className={`cs-floating-card cs-floating-card--${tilt} ${className}`.trim()}>
      <img
        src={image}
        alt={imageAlt}
        title={imageTitle}
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        decoding="async"
      />
    </figure>
  )
}
