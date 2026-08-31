import { useEffect, useState } from 'react'
import './TextRotator.css'

export default function TextRotator({ keywords, interval = 2500 }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % keywords.length), interval)
    return () => clearInterval(id)
  }, [keywords.length, interval])

  return (
    <span className="txt-rotate-keywords">
      {keywords.map((k, i) => (
        <span key={k.text} className={`keyword${i === active ? ' active' : ''}`} style={{ color: k.color }}>
          {k.text}
        </span>
      ))}
    </span>
  )
}
