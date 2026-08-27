import { motion } from 'framer-motion'
import type React from 'react'
import Section from '../layout/section'
import DotField from '../common/dot-field'
import { projects } from '../../content/projects'

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

export default function Portfolio() {
  return (
    <div id="portfolio" style={{ borderTop: '1px solid var(--border)' }}>
      <div>
        <Section className="pt-24 pb-0 lg:pt-32">
          <motion.div {...fade()} className="mb-20">
            <div className="flex items-center gap-3 mb-8 justify-end">
              <p className="text-[11px] font-mono tracking-[0.2em] uppercase" style={{ color: C }}>04 — Technologies</p>
              <span className="w-8 h-px" style={{ backgroundColor: C }} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px" style={{ backgroundColor: 'var(--border)' }}>
              {[
                { label: 'Frontend',  items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Astro', 'Vue.js', 'Vite', 'Framer Motion', 'GSAP'] },
                { label: 'Backend',   items: ['Node.js', 'Go', 'Python', 'PostgreSQL', 'GraphQL', 'Redis', 'REST APIs', 'Prisma', 'Supabase'] },
                { label: 'Mobile',    items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android', 'Expo', 'Firebase', 'App Store'] },
                { label: 'AI / ML',   items: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Pandas', 'Spark', 'Scikit-learn', 'Hugging Face', 'RAG'] },
                { label: 'DevOps',    items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux', 'GitHub Actions', 'Nginx', 'Prometheus'] },
                { label: 'Security',  items: ['OAuth 2.0', 'JWT', 'TLS/SSL', 'Pen Testing', 'SIEM', 'Zero Trust', 'OWASP', 'Vault', 'IAM'] },
              ].map((col, i) => (
                <motion.div key={col.label} {...fade(0.06 * i)}
                  className="flex flex-col"
                  style={{ backgroundColor: 'var(--bg)' }}
                >
                  <div className="px-5 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
                    <span className="text-[10px] font-mono tracking-[0.18em] uppercase" style={{ color: C }}>{col.label}</span>
                  </div>
                  <ul className="flex flex-col">
                    {col.items.map((t, j) => (
                      <li key={t}
                        className="px-5 py-2.5 text-xs font-mono transition-colors duration-150"
                        style={{
                          color: 'var(--fg-muted)',
                          borderBottom: j < col.items.length - 1 ? '1px solid var(--border)' : 'none',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = C)}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-muted)')}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--border)' }} />

        <Section className="py-24 lg:py-32">

          {/* ── Portfolio header ── */}
          <motion.div {...fade()} className="mb-20 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px" style={{ backgroundColor: C }} />
                <p className="text-[11px] font-mono tracking-[0.2em] uppercase" style={{ color: C }}>05 — Portfolio</p>
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl" style={{ color: 'var(--fg)' }}>
                Selected work
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed lg:text-right" style={{ color: 'var(--fg-muted)' }}>
              A selection of projects we have designed, engineered, and shipped.
            </p>
          </motion.div>

          {/* ── Projects ── */}
          <div className="flex flex-col gap-24">
            {projects.map((project, i) => {
              const imageLeft = i % 2 !== 0
              return (
                <motion.article
                  key={project.slug}
                  {...fade(i * 0.1)}
                  className="group grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
                >
                  {/* Image */}
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

                  {/* Content */}
                  <div className={`flex flex-col gap-6 ${imageLeft ? 'lg:order-last' : 'lg:order-first'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono tracking-[0.15em] uppercase px-2.5 py-1"
                        style={{ border: `1px solid ${C}`, color: C }}>
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono" style={{ color: 'var(--fg-subtle)' }}>{project.year}</span>
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight leading-tight transition-colors duration-200 group-hover:text-[#fb4c1e]"
                      style={{ color: 'var(--fg)' }}>
                      {project.title}
                    </h3>
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

          {/* View all work */}
          <motion.div {...fade()} className="flex justify-center pt-16">
            <a
              href="/portfolio"
              className="group inline-flex items-center gap-2 px-8 py-4 text-[11px] font-semibold tracking-[0.12em] uppercase text-white transition-all duration-200"
              style={{ backgroundColor: C }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e03d12')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = C)}
            >
              View all work
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

        </Section>

        {/* Book a call */}
        <motion.div
          {...fade()}
          className="relative flex items-center justify-between gap-6 px-8 py-6 overflow-hidden"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <DotField dotRadius={1.5} dotSpacing={18} bulgeOnly bulgeStrength={60} glowRadius={180} />
          </div>
          <div className="px-8 max-w-6xl mx-auto w-full flex items-center justify-between gap-6">
            <div>
              <p className="text-base font-semibold" style={{ color: 'var(--fg)' }}>Prefer a quick call?</p>
              <p className="text-xs mt-1" style={{ color: 'var(--fg-muted)' }}>Schedule a 30-minute discovery call and we will get back to you within 24 hours.</p>
            </div>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase shrink-0 transition-all duration-200"
              style={{ border: `1px solid ${C}`, color: C }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = C; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C }}
            >
              Book a call now
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
