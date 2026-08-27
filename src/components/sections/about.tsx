import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Section from '../layout/section'
import { smoothScrollTo } from '../../utils/scroll'

const SERVICES = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description: 'Building end-to-end web applications with modern frameworks, we deliver production-ready systems from APIs to pixel-perfect interfaces that scale with your business.',
    items: ['Custom web applications', 'API & microservices', 'Database architecture', 'Admin dashboards', 'E-commerce platforms', 'SaaS product engineering'],
    metric: '50+ platforms shipped',
  },
  {
    number: '02',
    title: 'Mobile Development',
    description: 'Cross-platform and native mobile apps that deliver seamless experiences on every device, built for performance, offline capability, and user engagement at scale.',
    items: ['React Native apps', 'iOS & Swift development', 'Android & Kotlin', 'App store optimization', 'Push & real-time sync', 'Offline-first architecture'],
    metric: '10M+ app downloads',
  },
  {
    number: '03',
    title: 'AI & Machine Learning',
    description: 'Intelligent systems that learn, adapt, and automate. We integrate cutting-edge AI into your products to unlock new capabilities, reduce costs, and drive decisions.',
    items: ['Natural language processing', 'Computer vision systems', 'Predictive analytics', 'LLM integration & RAG', 'Data pipelines & ETL', 'Model training & MLOps'],
    metric: '99.7% model accuracy',
  },
  {
    number: '04',
    title: 'Cloud & Infrastructure',
    description: 'Scalable, secure cloud architecture designed for high availability and global performance. We build the foundation your products run on, resilient, observable, cost-efficient.',
    items: ['AWS & multi-cloud', 'Docker & Kubernetes', 'CI/CD automation', 'Infrastructure as code', 'Monitoring & alerting', 'Security & compliance'],
    metric: '99.99% uptime SLA',
  },
  {
    number: '05',
    title: 'IT Support',
    description: 'Managed IT services and helpdesk support that keep your business running. We handle the infrastructure so your team can focus on what matters.',
    items: ['Managed helpdesk', 'Hardware & software setup', 'Network troubleshooting', 'Remote & on-site support', 'System maintenance', 'IT consulting'],
    metric: '24h response time',
  },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

export default function About() {
  const [open, setOpen] = useState<number>(0)

  return (
    <div id="services" style={{ borderTop: '1px solid var(--border)' }}>
      <Section className="py-24 lg:py-32">

        {/* What we do */}
        <motion.div {...fade(0.1)} className="mb-24">
          <div className="mb-16 grid gap-6 lg:grid-cols-[auto_1fr] lg:items-end">
            <p className="max-w-md text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
              From concept to deployment and beyond, we cover every stage of the product lifecycle with engineering precision.
            </p>
            <div className="lg:text-right">
              <div className="flex items-center gap-3 mb-4 justify-end">
                <p className="text-[11px] font-mono text-[#fb4c1e] tracking-[0.2em] uppercase">01 — What we do</p>
                <span className="w-8 h-px bg-[#fb4c1e]" />
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl" style={{ color: 'var(--fg)' }}>
                Full-cycle software<br />development services
              </h2>
            </div>
          </div>

          <div>
            {SERVICES.map((s, i) => (
              <div key={s.number} style={{ borderTop: '1px solid var(--border)' }}>
                <button
                  className="w-full flex items-center gap-6 py-8 lg:py-10 text-left cursor-pointer transition-colors duration-200 hover:bg-white/[0.01]"
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  <span className="text-xs font-mono w-8 shrink-0" style={{ color: 'var(--fg-subtle)' }}>{s.number}</span>
                  <span className="text-lg font-light transition-transform duration-300 text-[#fb4c1e]"
                    style={{ display: 'inline-block', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                    +
                  </span>
                  <h3 className="text-xl font-semibold sm:text-2xl lg:text-3xl transition-colors duration-200"
                    style={{ color: open === i ? '#fb4c1e' : 'var(--fg)' }}>
                    {s.title}
                  </h3>
                  <span className="ml-auto hidden text-[10px] font-mono tracking-wider uppercase sm:block" style={{ color: 'var(--fg-subtle)' }}>
                    {s.metric}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="pb-12 pl-[4.5rem] grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <div>
                          <p className="mb-8 max-w-2xl text-base leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                            {s.description}
                          </p>
                          <div className="grid grid-cols-1 gap-x-12 gap-y-3 sm:grid-cols-2">
                            {s.items.map(item => (
                              <div key={item} className="flex items-center gap-3 text-sm py-1" style={{ color: 'var(--fg)' }}>
                                <span className="h-1 w-1 shrink-0 rounded-full bg-[#fb4c1e]" />
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="hidden lg:flex lg:items-start lg:justify-end">
                          <a href="#contact"
                            onClick={e => { if (smoothScrollTo('#contact')) e.preventDefault() }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium transition-all duration-200 hover:border-[#fb4c1e] hover:text-[#fb4c1e]"
                            style={{ border: '1px solid var(--border-mid)', color: 'var(--fg-muted)' }}
                          >
                            Discuss this service
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </motion.div>

        {/* Team */}
        <motion.div {...fade(0.2)}>
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-px bg-[#fb4c1e]" />
            <p className="text-[11px] font-mono text-[#fb4c1e] tracking-[0.2em] uppercase">02 — Team</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
            <div className="group col-span-1">
              <div className="w-full aspect-[4/5] overflow-hidden mb-5" style={{ backgroundColor: 'var(--border)' }}>
                <img
                  src="/img/me.png"
                  alt="Eldo António Macuácua"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-base font-bold leading-tight transition-colors duration-200 group-hover:text-[#fb4c1e]"
                style={{ color: 'var(--fg)' }}>
                Eldo António Macuácua
              </h3>
              <p className="text-xs italic mt-1" style={{ color: 'var(--fg-muted)' }}>Founder & Lead Engineer</p>
              <p className="text-xs mt-1 mb-3" style={{ color: 'var(--fg-subtle)' }}>BSc Information Technology</p>
              <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--fg-muted)' }}>
                Full-stack engineer building modern web platforms, mobile applications, and scalable digital infrastructure.
              </p>
              <div className="flex items-center gap-4">
                {[
                  { href: 'https://www.linkedin.com/in/eldomacuacua', d: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                  { href: 'https://github.com/eldoJr', d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' },
                  { href: 'https://eldomacuacua-github.vercel.app', d: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' },
                ].map((link, i) => (
                  <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                    className="transition-colors duration-150 hover:text-[#fb4c1e]"
                    style={{ color: 'var(--fg-subtle)' }}>
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d={link.d} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col justify-center gap-4 lg:pl-12 lg:border-l" style={{ borderColor: 'var(--border)' }}>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--fg)' }}>Want to join us?</h3>
              <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'var(--fg-muted)' }}>
                We are always looking for talented engineers passionate about building great products.
              </p>
              <a href="#contact"
                onClick={e => { if (smoothScrollTo('#contact')) e.preventDefault() }}
                className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase w-fit transition-all duration-200 hover:bg-[#fb4c1e] hover:text-white hover:border-[#fb4c1e]"
                style={{ border: '1px solid rgba(251,76,30,0.35)', color: '#fb4c1e' }}
              >
                Get in touch
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

      </Section>
    </div>
  )
}