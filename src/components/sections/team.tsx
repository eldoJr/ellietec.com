import { motion } from 'framer-motion'
import Section from '../layout/section'
import { smoothScrollTo } from '../../utils/scroll'

const C = '#fb4c1e'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

export default function Team() {
  return (
    <div id="team" style={{ borderTop: '1px solid var(--border)' }}>
      <Section className="py-24 lg:py-32">

        {/* Header — LEFT */}
        <motion.div {...fade()} className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ backgroundColor: C }} />
              <p className="text-[11px] font-mono tracking-[0.2em] uppercase" style={{ color: C }}>07 — Team</p>
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl" style={{ color: 'var(--fg)' }}>
              The people<br />behind the work
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed lg:text-right" style={{ color: 'var(--fg-muted)' }}>
            A small, focused team of engineers who take ownership and ship with precision.
          </p>
        </motion.div>

        {/* Team grid */}
        <motion.div {...fade(0.1)} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
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
            <a
              href="#contact"
              onClick={e => { if (smoothScrollTo('#contact')) e.preventDefault() }}
              className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase w-fit transition-all duration-200 hover:bg-[#fb4c1e] hover:text-white hover:border-[#fb4c1e]"
              style={{ border: '1px solid rgba(251,76,30,0.35)', color: C }}
            >
              Get in touch
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>

      </Section>
    </div>
  )
}
