import { Link } from 'react-router-dom'
import { useSeo } from '../hooks/useSeo.js'
import { usePageStylesheets } from '../hooks/usePageStylesheets.js'

export default function NotFoundPage() {
  usePageStylesheets([])
  useSeo('Page Not Found | CloneScript', 'The page you are looking for does not exist or has moved. Explore our clone scripts and custom development services instead.', { noindex: true })

  return (
    <main className="content" id="content">
      <div
        style={{
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '80px 20px',
        }}
      >
        <h1 style={{ fontSize: '5rem', margin: 0 }}>404</h1>
        <p style={{ fontSize: '1.25rem', margin: '16px 0 32px' }}>
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link to="/" className="btn btn-solid btn-sm circle btn-bordered border-thin">
          <span>
            <span className="btn-txt">Back to Home</span>
          </span>
        </Link>
      </div>
    </main>
  )
}
