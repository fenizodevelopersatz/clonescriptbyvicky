import { useEffect } from 'react'

// Injects one or more JSON-LD structured-data blocks into <head> for the
// lifetime of the mounting component, then removes them on unmount / route
// change. Each entry gets its own <script type="application/ld+json"> tagged
// with data-jsonld-id so re-renders replace rather than stack them.
//
// `blocks` is an array of plain schema.org objects. Pass a STABLE reference
// (module-level constant or useMemo) so the effect doesn't re-run every render.
export function useJsonLd(blocks) {
  useEffect(() => {
    if (!blocks || blocks.length === 0) return undefined

    const nodes = blocks.map((block, i) => {
      const el = document.createElement('script')
      el.type = 'application/ld+json'
      el.dataset.jsonldId = `route-${i}`
      el.text = JSON.stringify(block)
      document.head.appendChild(el)
      return el
    })

    return () => {
      nodes.forEach((el) => el.remove())
    }
  }, [blocks])
}
