import './CloneLoader.css'

// Two counter-rotating gradient rings orbiting a pulsing logo mark, with
// sparks and a shimmering label -- swapped in for the previous rocket
// animation. Kept as its own component (rather than folding into
// RouteFallback) so the exact same markup/CSS can be mirrored as plain
// HTML in index.html for the pre-React first-paint shell (see the
// #cs-shell-loader block there).
export default function CloneLoader() {
  return (
    <div className="cl-loader" aria-hidden="true">
      <div className="cl-loader__glow" />
      <div className="cl-loader__ring-wrap">
        <div className="cl-loader__sparks">
          <span className="cl-loader__spark" />
          <span className="cl-loader__spark" />
          <span className="cl-loader__spark" />
        </div>
        <div className="cl-loader__ring cl-loader__ring--outer" />
        <div className="cl-loader__ring cl-loader__ring--inner" />
        <div className="cl-loader__core">
          {/* Flat vector take on the favicon mark (C wrapping "</>") rather than
              the raster PNG -- keeps this component asset-free so it never
              waits on an image request, matching the pre-React shell below. */}
          <svg className="cl-loader__mark" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M68,22 A32,32 0 1 0 68,78" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
            <path d="M44,38 L34,50 L44,62" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
            <path d="M56,38 L66,50 L56,62" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
            <path d="M53,34 L47,66" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
          </svg>
        </div>
      </div>
      <div className="cl-loader__label">
        <span className="cl-loader__label-text">Cloning your experience</span>
        <span className="cl-loader__dots">
          <span />
          <span />
          <span />
        </span>
      </div>
    </div>
  )
}
