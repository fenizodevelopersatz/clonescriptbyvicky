import { Link } from 'react-router-dom'
import './StickyMobileCta.css'

export default function StickyMobileCta() {
  return (
    <div className="cs-sticky-cta">
      <Link to="/schedule-free-demo" className="cs-sticky-cta__btn">
        <span>Schedule Free Demo</span>
        <i className="far fa-calendar-alt" aria-hidden="true"></i>
      </Link>
    </div>
  )
}
