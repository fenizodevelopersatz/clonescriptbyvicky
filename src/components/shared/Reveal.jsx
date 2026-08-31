import { useInView } from '../../hooks/useInView.js'

const DISTANCE = 60

const TRANSFORMS = {
  up: `translateY(${DISTANCE}px)`,
  down: `translateY(-${DISTANCE}px)`,
  left: `translateX(${DISTANCE}px)`,
  right: `translateX(-${DISTANCE}px)`,
  none: 'none',
}

export default function Reveal({ children, direction = 'up', delay = 0, duration = 0.9, className, style, as: Tag = 'div', ...rest }) {
  const [ref, isInView] = useInView()

  const revealStyle = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translate(0, 0)' : TRANSFORMS[direction],
    transition: `opacity ${duration}s cubic-bezier(0.23,1,0.32,1) ${delay}s, transform ${duration}s cubic-bezier(0.23,1,0.32,1) ${delay}s`,
    ...style,
  }

  return (
    <Tag ref={ref} className={className} style={revealStyle} {...rest}>
      {children}
    </Tag>
  )
}
