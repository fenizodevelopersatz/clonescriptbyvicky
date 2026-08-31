const PALETTE = ['#002692', '#0077ff', '#10b981', '#ef4444', '#f59e0b', '#7c3aed', '#0891b2']

function colorFor(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return PALETTE[Math.abs(hash) % PALETTE.length]
}

export default function InitialsAvatar({ name, size = 48 }) {
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, borderRadius: '50%', backgroundColor: colorFor(name),
        color: '#fff', fontWeight: 700, fontSize: size * 0.38, flexShrink: 0,
      }}
    >
      {initials}
    </span>
  )
}
