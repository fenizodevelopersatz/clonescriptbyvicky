import { useEffect } from 'react'

const SITE_URL = 'https://theclonescript.com'
const DEFAULT_DESCRIPTION = 'CloneScript builds websites, mobile apps, SaaS products and ready-to-launch clone scripts for growing businesses.'

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Updates document.title plus the meta description, canonical link and
// OG/Twitter tags on every route change — the SPA shell in index.html only
// has static defaults for the very first paint.
export function useSeo(title, description = DEFAULT_DESCRIPTION, { noindex = false } = {}) {
  useEffect(() => {
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', `${SITE_URL}${window.location.pathname}`)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertLink('canonical', `${SITE_URL}${window.location.pathname}`)
  }, [title, description, noindex])
}
