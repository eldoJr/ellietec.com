import { motion } from 'framer-motion'
import Section from '../layout/section'
import DotField from '../common/dot-field'

const C = '#fb4c1e'

const STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your goals, constraints, and users. Deep technical and business discovery to define scope, risks, and the right architecture before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Architecture & Design',
    description: 'System design, data models, and UI prototypes aligned to your requirements. We map every integration, edge case, and scaling concern upfront so there are no surprises later.',
  },
  {
    number: '03',
    title: 'Engineering',
    description: 'Iterative development in short cycles with continuous delivery. Clean, tested, documented code shipped to staging environments where you can review progress at every step.',
  },
  {
    number: '04',
    title: 'Quality & Testing',
    description: 'Automated test suites, performance benchmarks, and security audits before anything reaches production. We do not ship code we would not run ourselves.',
  },
  {
    number: '05',
    title: 'Launch & Handoff',
    description: 'Zero-downtime deployments, monitoring setup, and full documentation. Your team gets everything needed to own, operate, and extend the system confidently.',
  },
  {
    number: '06',
    title: 'Support & Growth',
    description: 'Post-launch support, performance tuning, and iterative feature development. We stay engaged as a long-term engineering partner, not just a delivery vendor.',
  },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

export default function HowWeWork() {
  return (
    <div id="process" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <DotField dotRadius={1.5} dotSpacing={18} bulgeOnly bulgeStrength={60} glowRadius={180} />
        </div>
        <Section className="relative z-10 py-24 lg:py-32">

        <motion.div {...fade()} className="mb-16 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ backgroundColor: C }} />
              <p className="text-[11px] font-mono tracking-[0.2em] uppercase" style={{ color: C }}>02 — Process</p>
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl" style={{ color: 'var(--fg)' }}>
              How we work
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed lg:text-right" style={{ color: 'var(--fg-muted)' }}>
            A structured process that eliminates ambiguity and delivers predictable outcomes.
          </p>
        </motion.div>

        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: 'var(--border)' }}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              {...fade(0.07 * i)}
              className="group flex flex-col gap-5 p-8 transition-colors duration-200"
              style={{ backgroundColor: 'var(--bg)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--surface)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--bg)')}
            >
              <div className="flex items-start justify-between">
                <span
                  className="text-[2.5rem] font-bold font-mono leading-none select-none transition-colors duration-200"
                  style={{ color: 'var(--border-mid)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = C)}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--border-mid)')}
                >
                  {step.number}
                </span>
                <span className="w-5 h-5 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: C }}>
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 16L16 4M16 4H8M16 4v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg font-semibold transition-colors duration-200 group-hover:text-[#fb4c1e]" style={{ color: 'var(--fg)' }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </Section>
      </div>
    </div>
  )
}
