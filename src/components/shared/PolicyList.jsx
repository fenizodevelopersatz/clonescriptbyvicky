export default function PolicyList({ items }) {
  return (
    <ul className="policy-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}
