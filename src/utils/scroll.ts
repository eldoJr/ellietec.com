export function smoothScrollTo(href: string) {
  if (!href.startsWith('#')) return false
  const id = href.slice(1)
  const el = document.getElementById(id)
  if (!el) return false
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.pushState(null, '', href)
  return true
}
