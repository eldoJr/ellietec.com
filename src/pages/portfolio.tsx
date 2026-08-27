import { motion } from 'framer-motion'
import Section from '../components/layout/section'
import { projects } from '../content/projects'
import type React from 'react'

const C = '#fb4c1e'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const iconBtn = {
  className: 'flex items-center justify-center w-10 h-10 transition-all duration-200',
  style: { border: '1px solid var(--border-mid)', color: 'var(--fg-muted)' } as React.CSSProperties,
  onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = C
    e.currentTarget.style.color = C
    e.currentTarget.style.backgroundColor = 'rgba(251,76,30,0.06)'
  },
  onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = 'var(--border-mid)'
    e.currentTarget.style.color = 'var(--fg-muted)'
    e.currentTarget.style.backgroundColor = 'transparent'
  },
}

export default function PortfolioPage() {
  return (
    <div style={{ paddingTop: '60px' }}>
      <Section className="py-24 lg:py-32">

        <motion.div {...fade()} className="mb-20 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ backgroundColor: C }} />
              <p className="text-[11px] font-mono tracking-[0.2em] uppercase" style={{ color: C }}>Portfolio</p>
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl" style={{ color: 'var(--fg)' }}>
              All work
            </h1>
          </div>
          <p className="max-w-sm text-sm leading-relaxed lg:text-right" style={{ color: 'var(--fg-muted)' }}>
            Every project we have designed, engineered, and shipped.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {projects.map((project, i) => {
            const imageLeft = i % 2 !== 0
            return (
              <motion.article
                key={project.slug}
                {...fade(i * 0.08)}
                className="group grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
              >
                <div className={`relative ${imageLeft ? 'lg:order-first' : 'lg:order-last'}`}>
                  <span
                    className="absolute -top-6 font-bold font-mono select-none pointer-events-none z-10 leading-none"
                    style={{ fontSize: '7rem', color: 'rgba(251,76,30,0.07)', left: imageLeft ? 'auto' : '-0.2em', right: imageLeft ? '-0.2em' : 'auto' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative overflow-hidden aspect-[16/10]" style={{ backgroundColor: 'var(--border)' }}>
                    <span className="absolute top-0 left-0 w-8 h-8 z-10 pointer-events-none"
                      style={{ borderTop: `2px solid ${C}`, borderLeft: `2px solid ${C}` }} />
                    <span className="absolute bottom-0 right-0 w-8 h-8 z-10 pointer-events-none"
                      style={{ borderBottom: `2px solid ${C}`, borderRight: `2px solid ${C}` }} />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      style={{ background: 'linear-gradient(to top, rgba(251,76,30,0.12), transparent)' }} />
                  </div>
                </div>

                <div className={`flex flex-col gap-6 ${imageLeft ? 'lg:order-last' : 'lg:order-first'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono tracking-[0.15em] uppercase px-2.5 py-1"
                      style={{ border: `1px solid ${C}`, color: C }}>
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono" style={{ color: 'var(--fg-subtle)' }}>{project.year}</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight leading-tight transition-colors duration-200 group-hover:text-[#fb4c1e]"
                    style={{ color: 'var(--fg)' }}>
                    {project.title}
                  </h2>
                  <span className="h-px w-full" style={{ backgroundColor: 'var(--border)' }} />
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono tracking-wide px-2.5 py-1"
                        style={{ backgroundColor: 'rgba(251,76,30,0.12)', color: C, border: '1px solid rgba(251,76,30,0.2)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" {...iconBtn}>
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                        </svg>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live preview" {...iconBtn}>
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

      </Section>
    </div>
  )
}
