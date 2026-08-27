import { motion } from 'framer-motion'
import Section from '../layout/section'

const C = '#fb4c1e'

const TESTIMONIALS = [
  {
    name: 'Marcus Webb',
    role: 'CTO, Finova',
    image: 'https://i.pravatar.cc/100?img=11',
    quote: 'ellietec delivered a production-grade fintech platform in 10 weeks. The architecture was clean, the code was documented, and the team communicated daily. Exactly what we needed.',
  },
  {
    name: 'Amara Diallo',
    role: 'Founder, Healthbridge',
    image: 'https://i.pravatar.cc/100?img=5',
    quote: 'We had a complex HIPAA-compliant system to build. ellietec mapped every edge case before writing a line of code. Zero surprises at launch.',
  },
  {
    name: 'Luca Ferretti',
    role: 'VP Engineering, Cartago',
    image: 'https://i.pravatar.cc/100?img=3',
    quote: 'The mobile app they built handles 50k daily active users without a hiccup. Performance was a first-class concern from day one, not an afterthought.',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Product Lead, Orbis AI',
    image: 'https://i.pravatar.cc/100?img=9',
    quote: 'Their AI integration work was exceptional. They built a RAG pipeline that cut our support ticket volume by 60% in the first month.',
  },
  {
    name: 'Priya Menon',
    role: 'CEO, Stackly',
    image: 'https://i.pravatar.cc/100?img=16',
    quote: 'We went from idea to live product in 8 weeks. The discovery phase alone saved us months of rework. They think like founders, not just engineers.',
  },
  {
    name: 'Daniel Osei',
    role: 'Head of IT, Meridian Group',
    image: 'https://i.pravatar.cc/100?img=8',
    quote: 'Migrated our entire on-prem infrastructure to AWS with zero downtime. The Terraform setup they left us is something our team can actually maintain.',
  },
  {
    name: 'Sofia Andrade',
    role: 'Co-founder, Luma',
    image: 'https://i.pravatar.cc/100?img=20',
    quote: 'The UI they designed and built is the first thing every investor comments on. Clean, fast, and accessible. Our conversion rate doubled after launch.',
  },
  {
    name: 'Kwame Asante',
    role: 'Engineering Manager, Trove',
    image: 'https://i.pravatar.cc/100?img=12',
    quote: 'We brought ellietec in to rescue a failing project. They diagnosed the issues in two days and had a working build in three weeks. Genuinely impressive.',
  },
]

function ScrollRow({ items, reverse = false }: { items: typeof TESTIMONIALS; reverse?: boolean }) {
  return (
    <div className="scroll-row relative flex w-full overflow-hidden">
      {[0, 1, 2].map(i => (
        <div key={i} className={`flex shrink-0 gap-4 ${reverse ? 'animate-scroll-right' : 'animate-scroll-left'}`}>
          {items.map((t, j) => (
            <div
              key={`${i}-${j}`}
              className="group w-72 shrink-0 flex flex-col gap-3 px-5 py-4 transition-all duration-300 cursor-default"
              style={{
                border: '1px solid var(--border)',
                backgroundColor: 'var(--bg)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(251,76,30,0.25)'
                e.currentTarget.style.backgroundColor = 'var(--surface)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.backgroundColor = 'var(--bg)'
              }}
            >
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-7 h-7 object-cover grayscale group-hover:grayscale-0 transition-all duration-300 shrink-0" />
                <div>
                  <p className="text-xs font-semibold leading-tight" style={{ color: 'var(--fg)' }}>{t.name}</p>
                  <p className="text-[10px] font-mono" style={{ color: 'var(--fg-subtle)' }}>{t.role}</p>
                </div>
                <span className="ml-auto text-lg font-serif leading-none select-none" style={{ color: C }}>"</span>
              </div>
              <p className="text-xs leading-relaxed line-clamp-3" style={{ color: 'var(--fg-muted)' }}>
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      ))}
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }} />
    </div>
  )
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

export default function Testimonials() {
  const row1 = TESTIMONIALS.slice(0, 4)
  const row2 = TESTIMONIALS.slice(4)

  return (
    <div style={{ borderTop: '1px solid var(--border)' }}>
      <Section className="pt-24 pb-16 lg:pt-32">
        <motion.div {...fade()} className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-end">
          <p className="max-w-sm text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
            What the teams we have worked with say about the experience.
          </p>
          <div className="lg:text-right">
            <div className="flex items-center gap-3 mb-4 justify-end">
              <p className="text-[11px] font-mono tracking-[0.2em] uppercase" style={{ color: C }}>03 — Client Stories</p>
              <span className="w-8 h-px" style={{ backgroundColor: C }} />
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl" style={{ color: 'var(--fg)' }}>
              Trusted by builders
            </h2>
          </div>
        </motion.div>
      </Section>

      <motion.div {...fade(0.1)} className="flex flex-col gap-4 pb-24 lg:pb-32">
        <ScrollRow items={row1} />
        <ScrollRow items={row2} reverse />
        <ScrollRow items={[...TESTIMONIALS].reverse().slice(0, 4)} />
      </motion.div>
    </div>
  )
}
