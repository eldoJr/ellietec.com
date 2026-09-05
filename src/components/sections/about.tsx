import { motion } from 'framer-motion'
import Section from '../layout/section'

const C = '#fb4c1e'

const PILLARS = [
  {
    number: '01',
    title: 'Reliability',
    description: 'Tested code, defensible architecture, and deliveries that hold up under real load. We do not ship what we would not run in production ourselves.',
  },
  {
    number: '02',
    title: 'Transparency',
    description: 'Full visibility into progress, risks, and decisions at every stage. No black boxes, no surprises at the finish line.',
  },
  {
    number: '03',
    title: 'Technical depth',
    description: 'We understand the problem thoroughly before writing a single line of code. The right solution is always cheaper than the fast one.',
  },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

export default function About() {
  return (
    <div id="about" style={{ borderTop: '1px solid var(--border)' }}>
      <Section className="py-24 lg:py-32">

        {/* Header — RIGHT */}
        <motion.div {...fade()} className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-end mb-16">
          <p className="max-w-sm text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
            We work with startups and enterprises alike, adapting our process to the maturity of each
            operation — without ever compromising on reliability.
          </p>
          <div className="lg:text-right">
            <div className="flex items-center gap-3 mb-4 justify-end">
              <p className="text-[11px] font-mono tracking-[0.2em] uppercase" style={{ color: C }}>03 — About</p>
              <span className="w-8 h-px" style={{ backgroundColor: C }} />
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl" style={{ color: 'var(--fg)' }}>
              Engineering<br />without noise.
            </h2>
          </div>
        </motion.div>

        {/* Body — description + pillars */}
        <motion.div {...fade(0.1)} className="grid gap-16 lg:grid-cols-2 lg:items-start mb-16">

          {/* Left */}
          <div className="flex flex-col gap-8">
            <p className="text-base leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
              ellietec is a software consultancy and engineering studio built for teams that need things to work.
              We stay close to the client, keep the process lean, and make technical decisions that hold up
              long after the project ships.
            </p>
          </div>

          {/* Right — pillars */}
          <div className="flex flex-col">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.number}
                {...fade(0.06 * i)}
                className="group flex gap-6 py-7 transition-colors duration-200"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <span className="text-xs font-mono shrink-0 mt-0.5 transition-colors duration-200 group-hover:text-[#fb4c1e]"
                  style={{ color: 'var(--fg-subtle)' }}>
                  {p.number}
                </span>
                <div>
                  <h3 className="text-sm font-semibold mb-2 transition-colors duration-200 group-hover:text-[#fb4c1e]"
                    style={{ color: 'var(--fg)' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{p.description}</p>
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>

        </motion.div>

      </Section>
    </div>
  )
}
