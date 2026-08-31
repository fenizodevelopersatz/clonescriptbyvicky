import { usePointerTilt } from '../../hooks/usePointerTilt.js'
import './TiltCard.css'

// Generic perspective stage: gives its children a real 3D scene that follows
// the pointer. Children can opt into their own depth plane with
// `style={{ '--tk-z': '40px' }}` -- the inner element is preserve-3d, so
// translateZ on a child is genuine parallax, not a fake scale.
//
// Tiktok-page only. It wraps shared components from the outside rather than
// modifying them, since those are used by every other clone page.
export default function TiltCard({
  children,
  max = 9,
  className = '',
  as: Tag = 'div',
  ...rest
}) {
  const ref = usePointerTilt({ max })

  return (
    <Tag className={`tk-tilt ${className}`.trim()} ref={ref} {...rest}>
      <div className="tk-tilt__inner">{children}</div>
    </Tag>
  )
}
