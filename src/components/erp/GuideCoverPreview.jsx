const FEATURES = [
  { label: 'Modules', icon: '≡' },
  { label: 'Features', icon: '⚙' },
  { label: 'Live Demo', icon: '▶' },
]

const BARS = [30, 55, 40, 70]

export default function GuideCoverPreview() {
  return (
    <div className="erp-egc-root">
      <div className="erp-egc-brand">CloneScript</div>

      <div className="erp-egc-title">
        <span>Complete ERP Solution</span>
        <strong>Product Guide</strong>
      </div>

      <div className="erp-egc-subtitle">Modules &middot; Features &middot; Tech Stack &middot; Live Demo</div>

      <div className="erp-egc-preview">
        <div className="erp-egc-preview-head" />
        <div className="erp-egc-preview-bars">
          {BARS.map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>

      <div className="erp-egc-features">
        {FEATURES.map((f) => (
          <div className="erp-egc-feature" key={f.label}>
            <span className="erp-egc-feature-icon">{f.icon}</span>
            <span>{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
