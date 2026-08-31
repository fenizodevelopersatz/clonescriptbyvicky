import { useScrollProgress } from '../../hooks/useScrollProgress.js'
import './TiktokPhoneStack.css'

// The app-screens section as a curved 3D shelf: screens fan out on an arc, the
// outer ones angled inward and pushed back in Z, and the whole arc yaws a few
// degrees as the section crosses the viewport.
//
// Replaces a flat auto-fit grid of FloatingProductCard. Below 767px it falls
// back to a plain two-column grid -- an arc at phone width just reads as
// misaligned images (the same reason FloatingProductCard drops its resting tilt
// there).
export default function TiktokPhoneStack({ screens = [], altPrefix = 'App screen' }) {
  const ref = useScrollProgress()
  const mid = (screens.length - 1) / 2

  return (
    <div className="tk-phones" ref={ref}>
      <div className="tk-phones__arc">
        {screens.map((src, i) => {
          const offset = i - mid
          return (
            <figure
              className="tk-phones__item"
              key={src}
              style={{
                // Angle each screen toward the centre of the arc and push the
                // outer ones away from the camera.
                '--tk-yaw': `${(-offset * 15).toFixed(1)}deg`,
                '--tk-depth': `${(-Math.abs(offset) * 86).toFixed(0)}px`,
                '--tk-drop': `${(Math.abs(offset) * 16).toFixed(0)}px`,
                '--tk-delay': `${i * 80}ms`,
                zIndex: screens.length - Math.abs(Math.round(offset)),
              }}
            >
              <img
                src={src}
                alt={`${altPrefix} ${i + 1}`}
                loading="lazy"
                decoding="async"
              />
            </figure>
          )
        })}
      </div>
    </div>
  )
}
