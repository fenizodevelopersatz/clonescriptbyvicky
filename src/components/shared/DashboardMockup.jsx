import './DashboardMockup.css'

// CSS-only fake dashboard UI (branded topbar + sidebar + stat cards + a
// small bar chart + a logged-in user avatar chip) -- no image-generation
// tool is available, and no real screenshot exists yet for this newer
// product, so this stands in for a dashboard/login/user preview per role on
// the Live Demo tabs. Never includes browser chrome/a URL bar.
export default function DashboardMockup({ role, accent, avatarIcon, stats, chartBars = [42, 70, 55, 88, 64] }) {
  return (
    <div className="cs-dash-mock" role="img" aria-label={`${role} dashboard preview`}>
      <div className="cs-dash-mock__topbar">
        <span className="cs-dash-mock__brand">CloneScript</span>
        <span className="cs-dash-mock__user" style={{ background: accent }}>
          <i className={`fas ${avatarIcon}`} aria-hidden="true"></i>
        </span>
      </div>
      <div className="cs-dash-mock__body">
        <div className="cs-dash-mock__sidebar">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="cs-dash-mock__nav-item" style={i === 0 ? { background: accent } : undefined} />
          ))}
        </div>
        <div className="cs-dash-mock__main">
          <div className="cs-dash-mock__stats">
            {stats.map((stat) => (
              <div className="cs-dash-mock__stat" key={stat.label}>
                <span className="cs-dash-mock__stat-value" style={{ color: accent }}>{stat.value}</span>
                <span className="cs-dash-mock__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="cs-dash-mock__chart">
            {chartBars.map((height, i) => (
              <span key={i} style={{ height: `${height}%`, background: accent, opacity: 0.55 + (i / chartBars.length) * 0.45 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
