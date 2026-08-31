import CloneLoader from './CloneLoader.jsx'

export default function RouteFallback() {
  return (
    <main className="route-loading" aria-busy="true" aria-label="Loading page">
      <CloneLoader />
    </main>
  )
}
