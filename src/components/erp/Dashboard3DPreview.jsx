const STATS = [
  { label: 'REVENUE', value: '$0.00', color: '#8b5cf6' },
  { label: 'ORDERS', value: '0', color: '#3b82f6' },
  { label: 'AVERAGE ORDER', value: '$0.00', color: '#14b8a6' },
  { label: 'CUSTOMERS', value: '0', color: '#f97316' },
]

const BARS = [38, 62, 45, 80, 55, 70, 48]

export default function Dashboard3DPreview() {
  return (
    <div className="erp-d3p-root">
      <div className="erp-d3p-topbar">
        <span className="erp-d3p-burger"><span /><span /><span /></span>
        <span className="erp-d3p-pos">POS</span>
      </div>

      <div className="erp-d3p-banner">
        <span className="erp-d3p-live-pill"><span className="erp-d3p-dot" />Live insights</span>
        <h3>3D Sales Dashboard</h3>
        <div className="erp-d3p-banner-desc">Interactive 3D visualization of sales performance.</div>
      </div>

      <div className="erp-d3p-stats">
        {STATS.map((s) => (
          <div className="erp-d3p-stat" key={s.label}>
            <span className="erp-d3p-stat-icon" style={{ background: s.color }} />
            <span className="erp-d3p-stat-text">
              <span className="erp-d3p-stat-label">{s.label}</span>
              <span className="erp-d3p-stat-value">{s.value}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="erp-d3p-chart-card">
        <div className="erp-d3p-chart-head">
          <div>
            <strong>Sales by Month and Warehouse</strong>
            <span className="erp-d3p-chart-sub">3D bar visualization &middot; drag to rotate</span>
          </div>
          <span className="erp-d3p-3d-pill">3D</span>
        </div>
        <div className="erp-d3p-bars">
          {BARS.map((h, i) => (
            <span key={i} className="erp-d3p-bar" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}
