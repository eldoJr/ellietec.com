import { SITE } from '../../constants'
import { smoothScrollTo } from '../../utils/scroll'

const C = '#fb4c1e'

const SERVICES = [
  { label: 'Full-Stack Development', href: '#services' },
  { label: 'Mobile Development', href: '#services' },
  { label: 'AI & Automation', href: '#services' },
  { label: 'Cloud & Infrastructure', href: '#services' },
  { label: 'IT Support', href: '#services' },
  { label: 'Staff Augmentation', href: '#contact' },
]

const COMPANY = [
  { label: 'Services', href: '#services' },
  { label: 'Technologies', href: '#portfolio' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Team', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const INDUSTRIES = [
  { label: 'Finance & Banking', href: '#portfolio' },
  { label: 'Healthcare', href: '#portfolio' },
  { label: 'E-Commerce', href: '#portfolio' },
  { label: 'Education', href: '#portfolio' },
  { label: 'Logistics', href: '#portfolio' },
  { label: 'Manufacturing', href: '#portfolio' },
]

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/eldoJr' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eldomacuacua' },
  { label: 'Portfolio', href: 'https://eldomacuacua-github.vercel.app' },
]

const linkCls = 'text-xs transition-colors duration-200 hover:text-[#fb4c1e]'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ borderTop: '1px solid var(--border)' }}>
      <div className="px-8 pt-20 pb-8 max-w-6xl mx-auto">

        {/* Main grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] mb-16">

          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-3 mb-5">
              <img src="/icon.png" alt={SITE.name} className="h-8 w-auto" />
              <span className="text-base font-semibold tracking-tight" style={{ color: 'var(--fg)' }}>{SITE.name}</span>
            </a>
            <p className="text-xs leading-relaxed max-w-xs mb-6" style={{ color: 'var(--fg-muted)' }}>
              Modern engineering studio building full-stack, mobile, and AI-powered digital products for companies that demand performance.
            </p>
            <div className="flex items-center gap-4">
              {SOCIALS.map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={linkCls} style={{ color: 'var(--fg-muted)' }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider mb-5" style={{ color: 'var(--fg-subtle)' }}>Services</h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map(l => (
                <li key={l.label}>
                  <a href={l.href} onClick={e => { if (smoothScrollTo(l.href)) e.preventDefault() }}
                    className={linkCls} style={{ color: 'var(--fg-muted)' }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider mb-5" style={{ color: 'var(--fg-subtle)' }}>Company</h4>
            <ul className="flex flex-col gap-3">
              {COMPANY.map(l => (
                <li key={l.label}>
                  <a href={l.href} onClick={e => { if (smoothScrollTo(l.href)) e.preventDefault() }}
                    className={linkCls} style={{ color: 'var(--fg-muted)' }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider mb-5" style={{ color: 'var(--fg-subtle)' }}>Industries</h4>
            <ul className="flex flex-col gap-3">
              {INDUSTRIES.map(l => (
                <li key={l.label}>
                  <a href={l.href} onClick={e => { if (smoothScrollTo(l.href)) e.preventDefault() }}
                    className={linkCls} style={{ color: 'var(--fg-muted)' }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-[11px]" style={{ color: 'var(--fg-subtle)' }}>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(label => (
              <a key={label} href="#"
                className="text-[11px] transition-colors duration-200 hover:text-[var(--fg-muted)]"
                style={{ color: 'var(--fg-subtle)' }}>
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
