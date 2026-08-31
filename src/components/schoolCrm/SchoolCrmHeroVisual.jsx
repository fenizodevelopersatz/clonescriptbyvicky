import DashboardMockup from '../shared/DashboardMockup.jsx'
import './SchoolCrmHeroVisual.css'

const floatingBadges = [
  { icon: 'fa-graduation-cap', color: '#3157f5', pos: 'tl', label: 'Graduation' },
  { icon: 'fa-book', color: '#7138e8', pos: 'tr', label: 'Library' },
  { icon: 'fa-laptop', color: '#e62ccf', pos: 'ml', label: 'Online Classes' },
  { icon: 'fa-school', color: '#5b8def', pos: 'mr', label: 'Campus' },
  { icon: 'fa-calendar-days', color: '#8b5cf6', pos: 'bl', label: 'Timetable' },
  { icon: 'fa-trophy', color: '#e83ebc', pos: 'br', label: 'Achievements' },
]

export default function SchoolCrmHeroVisual() {
  return (
    <div className="cs-hero-visual">
      <span className="cs-hero-visual__glow" aria-hidden="true" />
      <div className="cs-hero-visual__dashboard">
        <DashboardMockup
          role="Admin"
          accent="#3157f5"
          avatarIcon="fa-user-shield"
          stats={[{ value: '1,240', label: 'Students' }, { value: '86', label: 'Staff' }]}
        />
      </div>
      {floatingBadges.map((badge) => (
        <span
          key={badge.icon}
          className={`cs-hero-visual__badge cs-hero-visual__badge--${badge.pos}`}
          style={{ background: badge.color }}
          title={badge.label}
        >
          <i className={`fas ${badge.icon}`} aria-hidden="true"></i>
        </span>
      ))}
    </div>
  )
}
