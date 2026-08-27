import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  icon?: React.ReactNode
}

export default function Button({ variant = 'primary', icon, className = '', children, ...props }: Props) {
  const base = 'relative group inline-flex items-center gap-2.5 px-6 h-11 text-[11px] font-semibold tracking-[0.1em] uppercase transition-all duration-200 overflow-hidden cursor-pointer'
  
  if (variant === 'primary') {
    return (
      <button className={`${base} bg-[#fb4c1e] text-white ${className}`} {...props}>
        {/* shine sweep */}
        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
        <span className="relative z-10 flex items-center gap-2.5">
          {children}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
            <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
    )
  }

  return (
    <button
      className={`${base} border text-[11px] ${className}`}
      style={{ borderColor: 'var(--border-mid)', color: 'var(--fg-muted)' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--fg-muted)'
        e.currentTarget.style.color = 'var(--fg)'
        e.currentTarget.style.backgroundColor = 'var(--border)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border-mid)'
        e.currentTarget.style.color = 'var(--fg-muted)'
        e.currentTarget.style.backgroundColor = 'transparent'
      }}
      {...props}
    >
      {children}
    </button>
  )
}
