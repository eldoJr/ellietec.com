import { motion, AnimatePresence, useSpring, useMotionValue, animate } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Section from '../layout/section'
import DotField from '../common/dot-field'

const C = '#fb4c1e'
const EASE = [0.25, 0.46, 0.45, 0.94] as const

const STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your goals, constraints, and users. Deep technical and business discovery to define scope, risks, and the right architecture before writing a single line of code.',
    icon: '/icon/plan-and-design.svg',
  },
  {
    number: '02',
    title: 'Architecture & Design',
    description: 'System design, data models, and UI prototypes aligned to your requirements. We map every integration, edge case, and scaling concern upfront so there are no surprises later.',
    icon: '/icon/idc-service-as-code.svg',
  },
  {
    number: '03',
    title: 'Engineering',
    description: 'Iterative development in short cycles with continuous delivery. Clean, tested, documented code shipped to staging environments where you can review progress at every step.',
    icon: '/icon/services-as-code.svg',
  },
  {
    number: '04',
    title: 'Quality & Testing',
    description: 'Automated test suites, performance benchmarks, and security audits before anything reaches production. We do not ship code we would not run ourselves.',
    icon: '/icon/streamlined-implementation.svg',
  },
  {
    number: '05',
    title: 'Launch & Handoff',
    description: 'Zero-downtime deployments, monitoring setup, and full documentation. Your team gets everything needed to own, operate, and extend the system confidently.',
    icon: '/icon/migrate-efficiency-80x80.svg',
  },
  {
    number: '06',
    title: 'Support & Growth',
    description: 'Post-launch support, performance tuning, and iterative feature development. We stay engaged as a long-term engineering partner, not just a delivery vendor.',
    icon: '/icon/professional-services.svg',
  },
]

export default function HowWeWork() {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const lineProgress = useMotionValue(0)
  const springProgress = useSpring(lineProgress, { stiffness: 120, damping: 22, mass: 0.8 })

  const goTo = (i: number) => {
    setPrev(active)
    setActive(i)
    animate(lineProgress, i / (STEPS.length - 1), { duration: 0.6, ease: EASE })
  }

  const [lineW, setLineW] = useState('0%')
  useEffect(() => {
    // initialise to step 0 = 0%
    setLineW('0%')
    const unsub = springProgress.on('change', v => setLineW(`${v * 100}%`))
    return unsub
  }, [springProgress])

  const direction = active > prev ? 1 : -1

  return (
    <div id="process" style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <DotField dotRadius={1.5} dotSpacing={18} bulgeOnly bulgeStrength={60} glowRadius={180} />
        </div>

        <Section className="relative z-10 py-24 lg:py-32">

          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-20 grid gap-6 lg:grid-cols-[auto_1fr] lg:items-end"
          >
            <p className="max-w-sm text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
              A structured process that eliminates ambiguity and delivers predictable outcomes.
            </p>
            <div className="lg:text-right">
              <div className="flex items-center gap-3 mb-4 justify-end">
                <p className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase" style={{ color: C }}>02 — Process</p>
                <span className="w-8 h-px" style={{ backgroundColor: C }} />
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl" style={{ color: 'var(--fg)' }}>
                How we work
              </h2>
            </div>
          </motion.div>

          {/* ── DESKTOP TIMELINE ── */}
          <div className="hidden lg:block">

            {/* connector line + nodes */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
              className="relative"
            >
              {/* track — spans node center to node center */}
              <div
                ref={trackRef}
                className="absolute top-[2.35rem] h-px"
                style={{ left: 'calc(100%/12)', right: 'calc(100%/12)', backgroundColor: 'var(--border)' }}
              />
              {/* spring fill — same left anchor, width is % of track not container */}
              <div
                className="absolute top-[2.35rem] h-px origin-left"
                style={{
                  left: 'calc(100%/12)',
                  right: 'auto',
                  // track width = container - 2*(1/12) = 10/12. fill = lineW% of that
                  width: `calc((100% - 100%/6) * ${parseFloat(lineW) / 100})`,
                  backgroundColor: C,
                  boxShadow: `0 0 6px 1px ${C}60`,
                  transition: 'none',
                }}
              />

              {/* nodes */}
              <div className="relative grid grid-cols-6">
                {STEPS.map((step, i) => {
                  const isActive = active === i
                  const isPast = i < active
                  return (
                    <div key={step.number} className="flex flex-col items-center gap-3">
                      <motion.button
                        onClick={() => goTo(i)}
                        className="relative w-[4.7rem] h-[4.7rem] flex items-center justify-center cursor-pointer focus:outline-none"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      >
                        {/* pulse rings — active only */}
                        {isActive && (
                          <>
                            <motion.div
                              className="absolute inset-0 rounded-full pointer-events-none"
                              initial={{ scale: 1, opacity: 0.7 }}
                              animate={{ scale: 1.6, opacity: 0 }}
                              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut', repeatDelay: 0.2 }}
                              style={{ border: `1.5px solid ${C}` }}
                            />
                            <motion.div
                              className="absolute inset-0 rounded-full pointer-events-none"
                              initial={{ scale: 1, opacity: 0.4 }}
                              animate={{ scale: 1.95, opacity: 0 }}
                              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut', delay: 0.4, repeatDelay: 0.2 }}
                              style={{ border: `1px solid ${C}` }}
                            />
                          </>
                        )}
                        {/* base circle */}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          animate={{
                            backgroundColor: isActive ? `${C}20` : isPast ? `${C}0a` : 'var(--bg)',
                            boxShadow: isActive
                              ? `0 0 0 2px ${C}, 0 0 18px 3px ${C}50`
                              : isPast
                              ? `0 0 0 1px ${C}50`
                              : '0 0 0 1px var(--border-mid)',
                          }}
                          transition={{ duration: 0.4, ease: EASE }}
                        />
                        {/* icon */}
                        <motion.img
                          src={step.icon}
                          alt={step.title}
                          className="w-8 h-8 object-contain relative z-10"
                          animate={{
                            filter: isActive
                              ? 'brightness(0) saturate(100%) invert(40%) sepia(80%) saturate(600%) hue-rotate(340deg) brightness(110%)'
                              : isPast
                              ? 'brightness(0) saturate(100%) invert(40%) sepia(80%) saturate(600%) hue-rotate(340deg) brightness(70%)'
                              : 'brightness(0) saturate(100%) invert(50%)',
                          }}
                          transition={{ duration: 0.35 }}
                        />
                      </motion.button>

                      <motion.span
                        className="text-[10px] font-mono tracking-widest"
                        animate={{ color: isActive ? C : isPast ? `${C}70` : 'var(--fg-subtle)' }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.number}
                      </motion.span>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* card */}
            <div className="relative mt-10 overflow-hidden" style={{ minHeight: '18rem' }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -30 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="grid lg:grid-cols-[1fr_1.5fr] overflow-hidden"
                  style={{ border: '1px solid var(--border)' }}
                >
                  {/* left panel */}
                  <motion.div
                    className="flex flex-col justify-between p-10"
                    style={{ borderRight: '1px solid var(--border)', background: 'var(--surface)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                  >
                    <div className="flex items-start justify-between">
                      <motion.div
                        className="w-20 h-20 flex items-center justify-center"
                        style={{ background: `${C}12`, border: `1px solid ${C}25` }}
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.12, type: 'spring', stiffness: 260, damping: 20 }}
                      >
                        <img
                          src={STEPS[active].icon}
                          alt={STEPS[active].title}
                          className="w-11 h-11 object-contain"
                          style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(80%) saturate(600%) hue-rotate(340deg) brightness(110%)' }}
                        />
                      </motion.div>
                      <motion.span
                        className="text-[4rem] font-bold font-mono leading-none select-none"
                        style={{ color: 'var(--border-mid)' }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.08, ease: EASE }}
                      >
                        {STEPS[active].number}
                      </motion.span>
                    </div>
                    <div>
                      <motion.div
                        className="h-px mb-4"
                        style={{ backgroundColor: C }}
                        initial={{ width: 0 }}
                        animate={{ width: '2rem' }}
                        transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
                      />
                      <motion.h3
                        className="text-2xl font-bold tracking-tight"
                        style={{ color: 'var(--fg)' }}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.22, ease: EASE }}
                      >
                        {STEPS[active].title}
                      </motion.h3>
                    </div>
                  </motion.div>

                  {/* right panel */}
                  <div className="flex flex-col justify-between p-10">
                    <motion.p
                      className="text-base leading-relaxed"
                      style={{ color: 'var(--fg-muted)' }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.18, ease: EASE }}
                    >
                      {STEPS[active].description}
                    </motion.p>

                    <motion.div
                      className="flex items-center justify-between mt-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.28 }}
                    >
                      {/* dot indicators */}
                      <div className="flex items-center gap-2">
                        {STEPS.map((_, j) => (
                          <motion.button
                            key={j}
                            onClick={() => goTo(j)}
                            className="h-px"
                            animate={{ width: active === j ? '2rem' : '0.6rem', backgroundColor: active === j ? C : 'var(--border-mid)' }}
                            transition={{ duration: 0.35, ease: EASE }}
                          />
                        ))}
                      </div>

                      {/* prev / next */}
                      <div className="flex gap-2">
                        {[
                          { dir: -1, icon: 'M15 19l-7-7 7-7', disabled: active === 0 },
                          { dir: 1,  icon: 'M9 5l7 7-7 7',   disabled: active === STEPS.length - 1 },
                        ].map(({ dir, icon, disabled }) => (
                          <motion.button
                            key={dir}
                            onClick={() => !disabled && goTo(active + dir)}
                            disabled={disabled}
                            className="w-9 h-9 flex items-center justify-center"
                            style={{
                              border: '1px solid var(--border-mid)',
                              color: disabled ? 'var(--fg-subtle)' : 'var(--fg-muted)',
                              opacity: disabled ? 0.35 : 1,
                              cursor: disabled ? 'default' : 'pointer',
                            }}
                            whileHover={!disabled ? { borderColor: C, color: C, scale: 1.05 } : {}}
                            whileTap={!disabled ? { scale: 0.92 } : {}}
                            transition={{ duration: 0.18 }}
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                            </svg>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── MOBILE — vertical spine ── */}
          <div className="flex flex-col lg:hidden">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                className="flex gap-5 py-8"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div
                    className="w-12 h-12 flex items-center justify-center shrink-0"
                    style={{ background: `${C}12`, border: `1px solid ${C}25` }}
                  >
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-7 h-7 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(80%) saturate(600%) hue-rotate(340deg) brightness(110%)' }}
                    />
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-px flex-1 min-h-[2rem]" style={{ backgroundColor: 'var(--border)' }} />
                  )}
                </div>
                <div className="flex flex-col gap-2 pb-2">
                  <span className="text-[10px] font-mono tracking-widest" style={{ color: C }}>{step.number}</span>
                  <h3 className="text-base font-semibold" style={{ color: 'var(--fg)' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </Section>
      </div>
    </div>
  )
}
