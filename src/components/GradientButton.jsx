import { Link } from 'react-router-dom'

export default function GradientButton({ href, title, text, size = 'sm', className = '', svgId, onClick }) {
  return (
    <Link
      to={href}
      title={title}
      onClick={onClick}
      className={`btn btn-solid btn-${size} circle btn-bordered border-thin btn-bordered-gradient btn-gradient schedule-anime ${className}`}
    >
      <span>
        <span className="btn-gradient-bg"></span>
        <span className="btn-txt">{text}</span>
        <span className="btn-gradient-bg btn-gradient-bg-hover"></span>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" className="btn-gradient-border" width="100%" height="100%">
          <defs>
            <linearGradient id={svgId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" />
              <stop offset="100%" />
            </linearGradient>
          </defs>
          <rect x="0.5" y="0.5" rx="17%" ry="50%" width="100%" height="100%" stroke={`url(#${svgId})`} />
        </svg>
      </span>
    </Link>
  )
}
