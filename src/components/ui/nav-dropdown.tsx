import { useState, useRef, useCallback, useEffect, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  label: string
  href?: string
  children: ReactNode
}

export default function NavDropdown({ label, href = '#', children }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [panelTop, setPanelTop] = useState(0)
  const [headerLeft, setHeaderLeft] = useState(0)
  const [headerWidth, setHeaderWidth] = useState('100%')
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const open = useCallback(() => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null }
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    closeTimer.current = setTimeout(() => setIsOpen(false), 150)
  }, [])

  useEffect(() => {
    if (!isOpen || !triggerRef.current) return
    let raf: number
    const update = () => {
      const header = triggerRef.current?.closest('header')
      if (header) {
        const r = header.getBoundingClientRect()
        setPanelTop(r.bottom)
        setHeaderLeft(r.left)
        setHeaderWidth(`${r.width}px`)
      }
      raf = requestAnimationFrame(update)
    }
    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [isOpen])

  return (
    <div ref={triggerRef} className="relative flex items-stretch h-full" onMouseEnter={open} onMouseLeave={close}>
      <a
        href={href}
        className={`relative flex items-center gap-1.5 text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-150`}
        style={{ color: isOpen ? 'var(--fg)' : 'var(--fg-muted)' }}
      >
        {label}
        <svg className={`h-2.5 w-2.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>

      <motion.span
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#fb4c1e] origin-left"
        initial={false}
        animate={{ scaleX: isOpen ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed z-[199]"
              style={{ top: panelTop - 8, left: headerLeft, width: headerWidth, height: 8 }}
              onMouseEnter={open}
            />
            <motion.div
              className="fixed z-[200] backdrop-blur-2xl"
              style={{
                top: panelTop,
                left: headerLeft,
                width: headerWidth,
                backgroundColor: 'var(--dropdown-bg)',
                borderTop: '1px solid var(--border)',
                borderLeft: '1px solid var(--border)',
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                boxShadow: 'var(--shadow)',
              }}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              onMouseEnter={open}
              onMouseLeave={close}
            >
              <div className="px-8 py-8" style={{ maxWidth: '72rem', margin: '0 auto' }}>
                {children}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
