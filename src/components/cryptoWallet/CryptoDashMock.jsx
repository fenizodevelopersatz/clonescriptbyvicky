import './CryptoDashMock.css'

// Premium dark "product dashboard" mockup for the crypto service panels --
// a health/stats board (title + LIVE pill + 2x2 stat tiles + animated bar
// chart + status rows) or a roadmap checklist, over a concentric-ring dark
// card with floating corner tool icons. Pure CSS/markup (no screenshots).

function statusIcon(s) {
  if (s === 'done') return 'fa-circle-check'
  if (s === 'in review') return 'fa-circle-dot'
  return 'fa-circle'
}

function StatsBoard({ mock }) {
  return (
    <div className="cdm__inner">
      <div className="cdm__head">
        <span className="cdm__title">
          <i className={`fas ${mock.titleIcon}`} aria-hidden="true"></i> {mock.title}
        </span>
        {mock.live && <span className="cdm__live"><span className="cdm__live-dot" /> LIVE</span>}
      </div>

      <div className="cdm__tiles">
        {mock.tiles.map((t) => (
          <div className="cdm__tile" key={t.label}>
            <span className="cdm__tile-label">{t.label}</span>
            <span className="cdm__tile-value">{t.value}</span>
          </div>
        ))}
      </div>

      <div className="cdm__chart">
        {mock.bars.map((h, i) => (
          <span key={i} style={{ height: `${h}%` }} />
        ))}
      </div>

      {mock.status && (
        <div className="cdm__status">
          {mock.status.map((label) => (
            <span className="cdm__status-row" key={label}>
              <i className="fas fa-circle-check" aria-hidden="true"></i> {label}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function RoadmapBoard({ mock }) {
  return (
    <div className="cdm__inner">
      <div className="cdm__head">
        <span className="cdm__title">
          <i className={`fas ${mock.titleIcon}`} aria-hidden="true"></i> {mock.title}
        </span>
      </div>

      <div className="cdm__roadmap">
        {mock.items.map((it) => (
          <div className={`cdm__rm-row cdm__rm-row--${it.status.replace(/\s+/g, '-')}`} key={it.label}>
            <i className={`fas ${statusIcon(it.status)} cdm__rm-icon`} aria-hidden="true"></i>
            <span className="cdm__rm-label">{it.label}</span>
            <span className="cdm__rm-badge">{it.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CryptoDashMock({ mock }) {
  if (!mock) return null

  return (
    <div className="cdm-wrap" role="img" aria-label={`${mock.title} dashboard preview`}>
      <div className="cdm">
        <span className="cdm__rings" aria-hidden="true" />
        {mock.variant === 'roadmap' ? <RoadmapBoard mock={mock} /> : <StatsBoard mock={mock} />}
      </div>
      {mock.cornerIcon && (
        <span className="cdm__float cdm__float--corner" aria-hidden="true">
          <i className={`fas ${mock.cornerIcon}`}></i>
        </span>
      )}
      {mock.footIcon && (
        <span className="cdm__float cdm__float--foot" aria-hidden="true">
          <i className={`fas ${mock.footIcon}`}></i>
        </span>
      )}
    </div>
  )
}
