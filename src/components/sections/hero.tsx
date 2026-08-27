import { motion } from 'framer-motion'
import { SITE } from '../../constants'
import Button from '../common/button'
import Section from '../layout/section'
import DotField from '../common/dot-field'
import TechOrbit from '../ui/tech-orbit'
import { smoothScrollTo } from '../../utils/scroll'

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={18}
          bulgeOnly
          bulgeStrength={60}
          glowRadius={180}
        />
      </div>

      <Section className="relative z-10 min-h-screen flex items-center pt-24">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-8 h-px bg-[#fb4c1e]" />
              <p className="text-[11px] font-mono text-[#fb4c1e] tracking-[0.2em] uppercase">
                Software Engineering Studio
              </p>
            </motion.div>

            <motion.h1
              className="text-6xl font-bold tracking-tight leading-[1.08]"
              style={{ color: 'var(--fg)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We engineer<br />
              <span style={{ color: 'var(--fg-muted)' }}>digital systems</span><br />
              that scale.
            </motion.h1>

            <motion.p
              className="mt-7 text-base max-w-md leading-relaxed"
              style={{ color: 'var(--fg-muted)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {SITE.description}
            </motion.p>

            <motion.div
              className="mt-9 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Button onClick={e => { e.preventDefault(); smoothScrollTo('#contact') }}>Start a Project</Button>
              <Button variant="ghost" onClick={e => { e.preventDefault(); smoothScrollTo('#services') }}>View Our Work</Button>
            </motion.div>

          </div>

          {/* Right — Tech Orbit */}
          <div className="hidden lg:flex justify-center items-center">
            <TechOrbit />
          </div>

        </div>
      </Section>
    </div>
  )
}
