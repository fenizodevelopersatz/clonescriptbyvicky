import './GuideCoverArt.css'

export default function GuideCoverArt({
  brand,
  titleLine1,
  titleLine2,
  tagline,
  badge,
  features,
  gradientFrom = '#7c5cff',
  gradientVia = '#6a5ae0',
  gradientTo = '#4a63d6',
  accentColor = '#ffc233',
}) {
  const gradient = `linear-gradient(160deg, ${gradientFrom} 0%, ${gradientVia} 45%, ${gradientTo} 100%)`
  return (
    <div className="gca-root" style={{ background: gradient }}>
      {brand && <div className="gca-brand">{brand}</div>}

      <div className="gca-title">
        <span>{titleLine1}</span>
        {titleLine2 && <strong style={{ color: accentColor }}>{titleLine2}</strong>}
      </div>

      {tagline && <div className="gca-tagline">{tagline}</div>}
      {badge && <div className="gca-badge" style={{ background: gradient }}>{badge}</div>}

      <div className="gca-preview">
        <div className="gca-preview-head" style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }} />
        <div className="gca-preview-bars">
          {[38, 62, 45, 80].map((h, i) => (
            <span key={i} style={{ height: `${h}%`, background: `linear-gradient(180deg, ${gradientFrom}, ${gradientTo})` }} />
          ))}
        </div>
      </div>

      {features?.length > 0 && (
        <div className="gca-features">
          {features.map((f) => (
            <div className="gca-feature" key={f.label}>
              <span className="gca-feature-icon">{f.icon}</span>
              <span>{f.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
