import { useScrollProgress } from '../../hooks/useScrollProgress.js'
import './TiktokScene.css'

// Page-wide depth backdrop for /tiktok-clone: a receding perspective floor plus
// three parallax glow orbs that drift at different rates, so the content stack
// reads as sitting in front of a scene rather than on a flat canvas.
//
// Deliberately absolutely-positioned inside the page wrapper rather than
// position:fixed -- the design system animates a transform on
// .clonescript-site > .content (clonescript-page-enter), which makes that
// element the containing block for any fixed descendant, so a "fixed" backdrop
// would scroll away with the page anyway.
export default function TiktokScene() {
  const ref = useScrollProgress()

  return (
    <div className="tk-scene" ref={ref} aria-hidden="true">
      <span className="tk-scene__orb tk-scene__orb--a" />
      <span className="tk-scene__orb tk-scene__orb--b" />
      <span className="tk-scene__orb tk-scene__orb--c" />
      <span className="tk-scene__floor" />
    </div>
  )
}
