import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun } from 'lucide-react'
import { NAV_LINKS, SITE } from '../../constants'
import { useTheme } from '../../hooks/useTheme'
import NavDropdown from '../ui/nav-dropdown'
import { smoothScrollTo } from '../../utils/scroll'

const SlashedSun = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
    <line x1="2" y1="2" x2="22" y2="22" strokeWidth="2.5" />
  </svg>
)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinkClass = `relative flex items-center text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-150`

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <motion.header
          animate={{
            marginTop: scrolled ? 12 : 0,
            width: scrolled ? 'calc(100% - 80px)' : '100%',
          }}
          transition={{ type: 'spring', stiffness: 280, damping: 32 }}
          className="relative w-full max-w-6xl"
        >
          {/* Backdrop */}
          <motion.div
            animate={{ opacity: scrolled ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 backdrop-blur-2xl pointer-events-none"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}
          />

          <div className="relative z-10 flex items-center justify-between h-[60px] px-8">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 shrink-0">
              <img src="/icon.png" alt={SITE.name} className="h-9 w-auto" />
              <span className="text-base font-semibold tracking-tight" style={{ color: 'var(--fg)' }}>{SITE.name}</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-stretch gap-6 h-[60px] ml-auto mr-6">
              <NavDropdown label="Services" href="#services">
                <div className="grid grid-cols-2 gap-12">
                  {[
                    { title: 'Engineering', items: ['Systems Architecture', 'Full-stack Development', 'Cloud & DevOps', 'API Design', 'Performance Engineering'] },
                    { title: 'Intelligence', items: ['AI Integration', 'Data Engineering', 'ML Systems', 'Process Automation', 'Analytics'] },
                  ].map((group) => (
                    <div key={group.title}>
                      <p className="text-[10px] font-mono uppercase tracking-[0.15em] mb-5" style={{ color: 'var(--fg-subtle)' }}>{group.title}</p>
                      <ul className="flex flex-col gap-3 pl-5" style={{ borderLeft: '1px solid var(--border)' }}>
                        {group.items.map((item) => (
                          <li key={item}>
                            <a href="#services" className="text-sm transition-colors duration-150 hover:text-[#fb4c1e]" style={{ color: 'var(--fg-muted)' }}>{item}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavDropdown>

              <NavDropdown label="Portfolio" href="#portfolio">
                <div className="grid grid-cols-3 gap-12">
                  {[
                    { title: 'Industries', items: ['Finance & Banking', 'Healthcare', 'eCommerce', 'Enterprise', 'SaaS'] },
                    { title: 'Platforms', items: ['Web Applications', 'Mobile', 'APIs & Microservices', 'Data Platforms'] },
                    { title: 'Delivery', items: ['MVP Development', 'Scale-up', 'Global Deployment', 'Legacy Modernization'] },
                  ].map((group) => (
                    <div key={group.title}>
                      <p className="text-[10px] font-mono uppercase tracking-[0.15em] mb-5" style={{ color: 'var(--fg-subtle)' }}>{group.title}</p>
                      <ul className="flex flex-col gap-3 pl-5" style={{ borderLeft: '1px solid var(--border)' }}>
                        {group.items.map((item) => (
                          <li key={item}>
                            <a href="#portfolio" className="text-sm transition-colors duration-150 hover:text-[#fb4c1e]" style={{ color: 'var(--fg-muted)' }}>{item}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavDropdown>

              {NAV_LINKS.filter(l => !['Portfolio', 'Services'].includes(l.label)).map((link) => {
                const active = typeof window !== 'undefined' && window.location.pathname === link.href
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={navLinkClass}
                    style={{ color: active ? 'var(--fg)' : 'var(--fg-muted)' }}
                    onClick={e => { if (smoothScrollTo(link.href)) e.preventDefault() }}
                  >
                    {link.label}
                    {active && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#fb4c1e]" />}
                  </a>
                )
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="hidden lg:flex items-center justify-center w-9 h-9 transition-all duration-150 cursor-pointer"
                style={{ border: '1px solid var(--border-mid)', color: 'var(--fg-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--fg-muted)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-mid)')}
              >
                {theme === 'dark' ? <Sun size={14} /> : <SlashedSun />}
              </button>

              <div className="hidden lg:block w-px h-6 mx-1" style={{ backgroundColor: 'var(--border-mid)' }} />

              <a
                href="#contact"
                onClick={e => { if (smoothScrollTo('#contact')) e.preventDefault() }}
                className="hidden lg:flex items-center justify-center bg-[#fb4c1e] hover:bg-[#e03d12] px-5 h-9 text-[11px] font-medium text-white tracking-[0.1em] uppercase transition-colors duration-150"
              >
                Start a project
              </a>

              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden flex items-center justify-center w-9 h-9 transition-all cursor-pointer"
                style={{ border: '1px solid var(--border-mid)', color: 'var(--fg-muted)' }}
              >
                <Menu size={16} />
              </button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[200] lg:hidden flex flex-col"
            style={{ backgroundColor: 'var(--bg)' }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
          >
            <div className="flex items-center justify-between px-8 h-[60px] shrink-0" style={{ borderBottom: '1px solid var(--border)' }}>
              <a href="/" className="flex items-center gap-3">
                <img src="/icon.png" alt={SITE.name} className="h-9 w-auto" />
                <span className="text-base font-semibold tracking-tight" style={{ color: 'var(--fg)' }}>{SITE.name}</span>
              </a>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggle}
                  className="flex items-center justify-center w-9 h-9 transition-all cursor-pointer"
                  style={{ border: '1px solid var(--border-mid)', color: 'var(--fg-muted)' }}
                >
                  {theme === 'dark' ? <Sun size={14} /> : <SlashedSun />}
                </button>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-9 h-9 transition-colors cursor-pointer"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <nav className="flex flex-col px-8 py-6 flex-1 overflow-y-auto">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={e => { if (smoothScrollTo(link.href)) e.preventDefault(); setMobileOpen(false) }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  className="py-4 text-[11px] font-medium tracking-[0.12em] uppercase hover:text-[#fb4c1e] transition-colors"
                  style={{ color: 'var(--fg-muted)', borderBottom: '1px solid var(--border)' }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-8 bg-[#fb4c1e] hover:bg-[#e03d12] py-3 text-center text-[11px] font-medium text-white tracking-[0.12em] uppercase transition-colors"
              >
                Start a project
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
