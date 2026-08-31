import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useSeo } from '../hooks/useSeo.js'
import { usePageStylesheets } from '../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../data/pageStylesheets.js'
import './ResourceUsagePage.css'

const PAGE_SIZE_OPTIONS = [20, 50, 100, 250]
const STATUS_OPTIONS = ['all', 'used', 'unused', 'protected', 'missing', 'external']
const ZOOM_LEVELS = [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 4, 6, 8]
const FIT_ZOOM_INDEX = ZOOM_LEVELS.indexOf(1)

function normalize(value) {
  return String(value ?? '').toLowerCase()
}

function getAssetStatus(item) {
  if (item.external) return 'external'
  if (item.exists === false) return 'missing'
  if (item.protected) return 'protected'
  return item.usageCount > 0 ? 'used' : 'unused'
}

function formatDate(iso) {
  if (!iso) return '—'
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}

// Absolute URL against whatever host is currently serving the page (localhost,
// a LAN IP, or a real domain) so links/copy work no matter where this report is viewed from.
function toFullUrl(urlPath, external) {
  if (external) return urlPath
  return `${window.location.origin}${urlPath}`
}

function fallbackCopyToClipboard(text) {
  const el = document.createElement('textarea')
  el.value = text
  el.style.position = 'fixed'
  el.style.opacity = '0'
  document.body.appendChild(el)
  el.focus()
  el.select()
  try {
    document.execCommand('copy')
  } catch {
    // ignore -- the URL is still visible and selectable by hand
  }
  document.body.removeChild(el)
}

export default function ResourceUsagePage() {
  useSeo(
    'Resource Usage Report | CloneScript',
    'Paginated used and unused image inventory with page filters, name search, and wp-content folder exploration.',
    { noindex: true }
  )
  usePageStylesheets(pageStylesheets.resourceUsage)

  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [rescanning, setRescanning] = useState(false)
  const [rescanMsg, setRescanMsg] = useState('')
  const [search, setSearch] = useState('')
  const [pageFilter, setPageFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [folderFilter, setFolderFilter] = useState('')
  const [pageSize, setPageSize] = useState(20)
  const [pageIndex, setPageIndex] = useState(0)
  const [preview, setPreview] = useState(null) // { item, fitScale }
  const [zoomIndex, setZoomIndex] = useState(FIT_ZOOM_INDEX)
  const [copiedId, setCopiedId] = useState('')
  const mountedRef = useRef(true)
  const lightboxViewportRef = useRef(null)

  const copyText = useCallback((id, text) => {
    const markCopied = () => {
      setCopiedId(id)
      window.setTimeout(() => setCopiedId((cur) => (cur === id ? '' : cur)), 1500)
    }
    if (window.isSecureContext && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(markCopied).catch(() => {
        fallbackCopyToClipboard(text)
        markCopied()
      })
    } else {
      // Clipboard API needs a secure context (https, or localhost) -- accessing
      // this report over a plain-http LAN IP falls back to the legacy approach.
      fallbackCopyToClipboard(text)
      markCopied()
    }
  }, [])

  const loadData = useCallback(() => {
    setLoading(true)
    return fetch('/resource-usage-db.json', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load resource-usage-db.json (${res.status})`)
        return res.json()
      })
      .then((json) => {
        if (!mountedRef.current) return
        setData(json)
        setError('')
      })
      .catch((err) => {
        if (!mountedRef.current) return
        setError(err.message || 'Failed to load resource database')
      })
      .finally(() => {
        if (mountedRef.current) setLoading(false)
      })
  }, [])

  useEffect(() => {
    mountedRef.current = true
    loadData()
    return () => {
      mountedRef.current = false
    }
  }, [loadData])

  // Dev server (tools/image-replacer/vite-plugin-image-scan.js) pushes this event
  // whenever it rescans public/wp-content, so the table refreshes without a reload.
  useEffect(() => {
    if (!import.meta.hot) return
    const handler = () => loadData()
    import.meta.hot.on('resource-usage:updated', handler)
    return () => import.meta.hot.off('resource-usage:updated', handler)
  }, [loadData])

  const openPreview = useCallback((item) => {
    const targetW = window.innerWidth * 0.85
    const targetH = window.innerHeight * 0.7
    const naturalW = item.width || targetW
    const naturalH = item.height || targetH
    const fitScale = Math.min(targetW / naturalW, targetH / naturalH, 1)
    setPreview({ item, fitScale })
    setZoomIndex(FIT_ZOOM_INDEX)
  }, [])

  const closePreview = useCallback(() => setPreview(null), [])
  const zoomIn = useCallback(() => setZoomIndex((i) => Math.min(ZOOM_LEVELS.length - 1, i + 1)), [])
  const zoomOut = useCallback(() => setZoomIndex((i) => Math.max(0, i - 1)), [])
  const resetZoom = useCallback(() => setZoomIndex(FIT_ZOOM_INDEX), [])
  const toggleZoom = useCallback(() => {
    setZoomIndex((i) => (i === FIT_ZOOM_INDEX ? Math.min(ZOOM_LEVELS.length - 1, FIT_ZOOM_INDEX + 3) : FIT_ZOOM_INDEX))
  }, [])

  // Escape closes the lightbox; wheel-zoom needs a non-passive native listener
  // since React's onWheel is passive by default and can't preventDefault (which
  // we need so the wheel zooms the image instead of scrolling the page behind it).
  useEffect(() => {
    if (!preview) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closePreview()
      else if (e.key === '+' || e.key === '=') zoomIn()
      else if (e.key === '-') zoomOut()
    }
    document.addEventListener('keydown', onKeyDown)

    const viewportEl = lightboxViewportRef.current
    const onWheel = (e) => {
      e.preventDefault()
      if (e.deltaY < 0) zoomIn()
      else zoomOut()
    }
    viewportEl?.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      viewportEl?.removeEventListener('wheel', onWheel)
    }
  }, [preview, closePreview, zoomIn, zoomOut])

  const handleRescan = useCallback(() => {
    setRescanning(true)
    setRescanMsg('')
    fetch('/api/rescan-images', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error(`Rescan failed (${res.status})`)
        return res.json()
      })
      .then(() => loadData())
      .then(() => setRescanMsg('Rescanned wp-content and refreshed the database.'))
      .catch((err) => setRescanMsg(err.message || 'Rescan is only available while the dev server is running.'))
      .finally(() => setRescanning(false))
  }, [loadData])

  const routes = data?.routes ?? []
  const items = useMemo(() => data?.inventory ?? [], [data])
  const summary = data?.summary

  const filtered = useMemo(() => {
    const searchTerm = normalize(search).trim()
    const folderTerm = normalize(folderFilter).trim()

    return items.filter((item) => {
      const status = getAssetStatus(item)
      if (statusFilter !== 'all' && status !== statusFilter) return false
      if (searchTerm) {
        const haystack = [
          item.urlPath,
          ...(item.usages || []).flatMap((u) => [u.sourceFile, u.topic, u.alt]),
          ...(item.pages || []),
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
        if (!haystack.includes(searchTerm)) return false
      }
      if (pageFilter && !(item.pages || []).includes(pageFilter)) return false
      if (folderTerm && !normalize(item.urlPath).includes(folderTerm)) return false
      return true
    })
  }, [items, search, pageFilter, statusFilter, folderFilter])

  const counts = useMemo(() => {
    const tally = { used: 0, unused: 0, protected: 0, missing: 0, external: 0 }
    for (const item of items) tally[getAssetStatus(item)] += 1
    return tally
  }, [items])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(pageIndex, totalPages - 1)
  const paginated = filtered.slice(currentPage * pageSize, currentPage * pageSize + pageSize)

  const pageOptions = useMemo(
    () => [...new Set(items.flatMap((item) => item.pages || []))].sort((a, b) => a.localeCompare(b)),
    [items],
  )

  return (
    <main className="content resource-usage-page" id="content">
      <div className="resource-usage-shell">
        <header className="resource-usage-hero">
          <div>
            <p className="resource-usage-kicker">/resource-usage</p>
            <h1>Used and unused resource report</h1>
            <p className="resource-usage-lead">
              Scans <code>public/wp-content</code> on disk and cross-references every reference found in{' '}
              <code>src/</code> to show, per image, which page and topic section uses it — and which files are just
              sitting there unused. Filter by project page, status, or search by name.
            </p>
            <div className="resource-usage-toolbar">
              <button type="button" onClick={handleRescan} disabled={rescanning}>
                {rescanning ? 'Rescanning…' : 'Rescan now'}
              </button>
              <span className="resource-usage-generated">
                {summary ? `Generated ${formatDate(summary.generatedAt)} · ${summary.wpContentImagesOnDisk} files on disk · ${routes.length} routes scanned` : ''}
              </span>
              {rescanMsg && <span className="resource-usage-rescan-msg">{rescanMsg}</span>}
            </div>
          </div>

          <div className="resource-usage-stats">
            <div><b>{counts.used}</b><span>Used</span></div>
            <div className="stat-unused"><b>{counts.unused}</b><span>Unused</span></div>
            <div><b>{counts.missing}</b><span>Missing</span></div>
            <div><b>{counts.protected}</b><span>Protected</span></div>
          </div>
        </header>

        <section className="resource-usage-filters">
          <label>
            Search by name / page / topic
            <input value={search} onChange={(e) => { setSearch(e.target.value); setPageIndex(0) }} placeholder="e.g. admin, invoice, /airbnb-clone, hero" />
          </label>

          <label>
            Project page
            <select value={pageFilter} onChange={(e) => { setPageFilter(e.target.value); setPageIndex(0) }}>
              <option value="">All pages</option>
              {pageOptions.map((page) => (
                <option key={page} value={page}>{page}</option>
              ))}
            </select>
          </label>

          <label>
            Status
            <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPageIndex(0) }}>
              {STATUS_OPTIONS.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </label>

          <label>
            Folder contains
            <input value={folderFilter} onChange={(e) => { setFolderFilter(e.target.value); setPageIndex(0) }} placeholder="/wp-content/uploads/2026/" />
          </label>

          <label>
            Rows
            <select value={pageSize} onChange={(e) => { setPageSize(Number(e.target.value)); setPageIndex(0) }}>
              {PAGE_SIZE_OPTIONS.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </label>
        </section>

        <section className="resource-usage-meta">
          <div>Showing <b>{paginated.length}</b> of <b>{filtered.length}</b> filtered assets ({items.length} tracked total)</div>
          <div>Focus: <b>{statusFilter}</b></div>
          {summary?.dynamicUnresolvedRefs ? (
            <div>{summary.dynamicUnresolvedRefs} dynamic reference{summary.dynamicUnresolvedRefs === 1 ? '' : 's'} couldn't be statically resolved — check tools/image-replacer/reports/image-inventory.html</div>
          ) : null}
        </section>

        {loading && <div className="resource-usage-status">Loading resource database...</div>}
        {error && <div className="resource-usage-status resource-usage-status--error">{error}</div>}

        {!loading && !error && (
          <>
            <section className="resource-usage-table-wrap">
              <table className="resource-usage-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Status</th>
                    <th>Asset</th>
                    <th>Dimensions</th>
                    <th>Size</th>
                    <th>Modified</th>
                    <th>Used on page(s) &amp; topic section</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((item) => {
                    const status = getAssetStatus(item)
                    return (
                      <tr key={item.id}>
                        <td>
                          {item.exists !== false && !item.external ? (
                            <button type="button" className="asset-thumb-btn" onClick={() => openPreview(item)} title="Click to view larger with zoom">
                              <img className="asset-thumb" src={item.urlPath} alt="" loading="lazy" onError={(e) => { e.currentTarget.style.visibility = 'hidden' }} />
                            </button>
                          ) : null}
                        </td>
                        <td><span className={`status-pill status-${status}`}>{status}</span></td>
                        <td>
                          <div className="asset-url-row">
                            <a className="asset-path" href={toFullUrl(item.urlPath, item.external)} target="_blank" rel="noopener noreferrer">
                              {toFullUrl(item.urlPath, item.external)}
                            </a>
                            <button
                              type="button"
                              className="copy-url-btn"
                              onClick={() => copyText(item.id, toFullUrl(item.urlPath, item.external))}
                            >
                              {copiedId === item.id ? 'Copied!' : 'Copy URL'}
                            </button>
                          </div>
                        </td>
                        <td>{item.width && item.height ? `${item.width} x ${item.height}` : '—'}</td>
                        <td>{item.fileSize ? `${(item.fileSize / 1024).toFixed(1)} KB` : '—'}</td>
                        <td>{formatDate(item.modifiedAt)}</td>
                        <td>
                          {item.usageCount ? (
                            <details className="usage-details" open={item.usageCount <= 4}>
                              <summary>{item.usageCount} usage{item.usageCount === 1 ? '' : 's'}</summary>
                              <ul className="usage-list">
                                {item.usages.map((u, idx) => (
                                  <li key={idx}>
                                    {u.page ? (
                                      <a className="page-pill" href={u.page} target="_blank" rel="noopener noreferrer">{u.page}</a>
                                    ) : (
                                      <span className="page-pill page-pill--unreachable">unreachable route</span>
                                    )}
                                    <span className="usage-topic">{u.topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </details>
                          ) : (
                            <span className="muted">Not referenced anywhere — orphaned file</span>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                  {!paginated.length && (
                    <tr>
                      <td colSpan="7" className="empty-state">No assets match the current filters.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </section>

            <section className="resource-usage-pagination">
              <button type="button" onClick={() => setPageIndex(0)} disabled={currentPage === 0}>First</button>
              <button type="button" onClick={() => setPageIndex((v) => Math.max(0, v - 1))} disabled={currentPage === 0}>Prev</button>
              <span>Page {currentPage + 1} of {totalPages}</span>
              <button type="button" onClick={() => setPageIndex((v) => Math.min(totalPages - 1, v + 1))} disabled={currentPage >= totalPages - 1}>Next</button>
              <button type="button" onClick={() => setPageIndex(totalPages - 1)} disabled={currentPage >= totalPages - 1}>Last</button>
            </section>
          </>
        )}
      </div>

      {preview && createPortal(
        <div className="resource-usage-lightbox" onClick={closePreview}>
          <div className="resource-usage-lightbox-panel" onClick={(e) => e.stopPropagation()}>
            <div className="resource-usage-lightbox-toolbar">
              <div className="resource-usage-lightbox-path">
                <a href={toFullUrl(preview.item.urlPath, preview.item.external)} target="_blank" rel="noopener noreferrer">
                  {toFullUrl(preview.item.urlPath, preview.item.external)}
                </a>
                <button
                  type="button"
                  className="copy-url-btn"
                  onClick={() => copyText('lightbox', toFullUrl(preview.item.urlPath, preview.item.external))}
                >
                  {copiedId === 'lightbox' ? 'Copied!' : 'Copy URL'}
                </button>
              </div>
              <div className="resource-usage-lightbox-controls">
                <button type="button" onClick={zoomOut} disabled={zoomIndex === 0} aria-label="Zoom out">−</button>
                <span>{Math.round(ZOOM_LEVELS[zoomIndex] * (preview.item.width ? preview.fitScale : 1) * 100)}%</span>
                <button type="button" onClick={zoomIn} disabled={zoomIndex === ZOOM_LEVELS.length - 1} aria-label="Zoom in">+</button>
                <button type="button" className="resource-usage-lightbox-fit-btn" onClick={resetZoom}>Fit</button>
                <button type="button" onClick={closePreview} aria-label="Close">×</button>
              </div>
            </div>
            <div className="resource-usage-lightbox-viewport" ref={lightboxViewportRef}>
              <div className="resource-usage-lightbox-viewport-inner" onDoubleClick={toggleZoom}>
                {preview.item.width && preview.item.height ? (
                  <img
                    src={preview.item.urlPath}
                    alt=""
                    style={{
                      width: preview.item.width * preview.fitScale * ZOOM_LEVELS[zoomIndex],
                      height: preview.item.height * preview.fitScale * ZOOM_LEVELS[zoomIndex],
                    }}
                  />
                ) : (
                  <img
                    src={preview.item.urlPath}
                    alt=""
                    className="resource-usage-lightbox-img-fallback"
                    style={{ transform: `scale(${ZOOM_LEVELS[zoomIndex]})` }}
                  />
                )}
              </div>
            </div>
            <div className="resource-usage-lightbox-meta">
              {preview.item.width && preview.item.height ? `${preview.item.width} x ${preview.item.height} native` : 'Dimensions unknown'}
              {preview.item.fileSize ? ` · ${(preview.item.fileSize / 1024).toFixed(1)} KB` : ''}
              {' · scroll or +/− to zoom · double-click to toggle · Esc to close'}
            </div>
          </div>
        </div>,
        document.body,
      )}
    </main>
  )
}
