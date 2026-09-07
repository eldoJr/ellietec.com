import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Section from '../layout/section'
import { smoothScrollTo } from '../../utils/scroll'

const C = '#fb4c1e'

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

export default function Services() {
  const [open, setOpen] = useState<number>(0)

  return (
    <div id="services" style={{ borderTop: '1px solid var(--border)' }}>
      <Section className="py-24 lg:py-32">
        <motion.div {...fade(0.1)}>
          <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col justify-between gap-8 p-8 lg:p-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px" style={{ backgroundColor: C }} />
                  <p className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase" style={{ color: C }}>01 — Services</p>
                </div>
                <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl" style={{ color: 'var(--fg)' }}>
                  Ellietec Professional Services
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="max-w-md text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                  From concept to deployment and beyond, we cover every stage of the product lifecycle with engineering precision.
                </p>
                <motion.a
                  href="#contact"
                  onClick={e => { if (smoothScrollTo('#contact')) e.preventDefault() }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium self-start"
                  style={{ backgroundColor: C, color: '#fff' }}
                  whileHover={{ scale: 1.04, backgroundColor: '#e03e10' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  Contact Us
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/img/services.png" alt="Ellietec Professional Services" className="w-full h-full object-cover" />
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
                  <span
                    className="text-lg font-light text-[#fb4c1e]"
                    style={{ display: 'inline-block', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                  >
                    +
                  </span>
                  <h3
                    className="text-xl font-semibold sm:text-2xl lg:text-3xl transition-colors duration-200"
                    style={{ color: open === i ? C : 'var(--fg)' }}
                  >
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
                                <span className="h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: C }} />
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="hidden lg:flex lg:items-start lg:justify-end">
                          <a
                            href="#contact"
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
      </Section>
    </div>
  )
}
