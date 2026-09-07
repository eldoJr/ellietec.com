import { motion } from 'framer-motion'
import Section from '../layout/section'
import { smoothScrollTo } from '../../utils/scroll'

const C = '#fb4c1e'
const EASE = [0.25, 0.46, 0.45, 0.94] as const

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
  transition: { duration: 0.55, delay, ease: EASE },
})

export default function About() {
  return (
    <div id="about" style={{ borderTop: '1px solid var(--border)' }}>
      <Section className="py-24 lg:py-32">

        {/* header */}
        <motion.div {...fade()} className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-end mb-20">
          <p className="max-w-sm text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
            We work with startups and enterprises alike, adapting our process to the maturity of each
            operation, without ever compromising on reliability.
          </p>
          <div className="lg:text-right">
            <div className="flex items-center gap-3 mb-4 justify-end">
              <p className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase" style={{ color: C }}>03 — About</p>
              <span className="w-8 h-px" style={{ backgroundColor: C }} />
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl" style={{ color: 'var(--fg)' }}>
              Engineering<br />without noise.
            </h2>
          </div>
        </motion.div>

        {/* body */}
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">

          {/* left */}
          <motion.div {...fade(0.1)} className="flex flex-col gap-10">
            <p className="text-base leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
              <strong style={{ color: 'var(--fg)' }}>Ellietec</strong> is a software consultancy and engineering studio built for teams that need things to work.
              We stay close to the client, keep the process lean, and make technical decisions that hold up
              long after the project ships.
            </p>

            {/* about image */}
            <div className="overflow-hidden" style={{ border: '1px solid var(--border)' }}>
              <img src="/img/about.png" alt="About Ellietec" className="w-full h-full object-cover" />
            </div>

            {/* cta */}
            <motion.a
              href="#contact"
              onClick={e => { if (smoothScrollTo('#contact')) e.preventDefault() }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium self-start"
              style={{ backgroundColor: C, color: '#fff' }}
              whileHover={{ scale: 1.04, backgroundColor: '#e03e10' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Work with us
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* right — pillars */}
          <motion.div {...fade(0.15)} className="flex flex-col">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: EASE }}
                className="group relative flex gap-6 py-8 overflow-hidden"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                {/* left accent reveal */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px]"
                  style={{ backgroundColor: C }}
                  initial={{ scaleY: 0, originY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3, ease: EASE }}
                />

                <span
                  className="text-xs font-mono shrink-0 mt-0.5 transition-colors duration-200 group-hover:text-[#fb4c1e]"
                  style={{ color: 'var(--fg-subtle)' }}
                >
                  {p.number}
                </span>

                <div className="flex flex-col gap-2">
                  <h3
                    className="text-sm font-semibold transition-colors duration-200 group-hover:text-[#fb4c1e]"
                    style={{ color: 'var(--fg)' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </motion.div>

        </div>

      </Section>
    </div>
  )
}
