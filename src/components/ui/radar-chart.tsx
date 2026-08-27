import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const AXES = [
  { label: 'Architecture', value: 96 },
  { label: 'Performance', value: 91 },
  { label: 'AI Systems',  value: 88 },
  { label: 'Security',    value: 93 },
  { label: 'Scalability', value: 97 },
  { label: 'DevOps',      value: 85 },
]

const LEVELS = 5
const SIZE   = 320
const CX     = SIZE / 2
const CY     = SIZE / 2
const R      = 118

function polar(angle: number, r: number) {
  return {
    x: CX + r * Math.cos(angle),
    y: CY + r * Math.sin(angle),
  }
}

function axisAngle(i: number) {
  return (Math.PI * 2 * i) / AXES.length - Math.PI / 2
}

function pointsStr(values: number[], scale = 1) {
  return AXES.map((ax, i) => {
    const r = (ax.value / 100) * R * scale
    const { x, y } = polar(axisAngle(i), r)
    return `${x},${y}`
  }).join(' ')
}

function levelPath(level: number) {
  const r = (R * level) / LEVELS
  return AXES.map((_, i) => {
    const { x, y } = polar(axisAngle(i), r)
    return `${i === 0 ? 'M' : 'L'}${x},${y}`
  }).join(' ') + 'Z'
}

export default function RadarChart() {
  const [progress, setProgress] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)
  const DURATION = 1400

  useEffect(() => {
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts
      const elapsed = ts - startRef.current
      const t = Math.min(elapsed / DURATION, 1)
      // ease out cubic
      const eased = 1 - Math.pow(1 - t, 3)
      setProgress(eased)
      if (t < 1) rafRef.current = requestAnimationFrame(animate)
    }
    const delay = setTimeout(() => {
      rafRef.current = requestAnimationFrame(animate)
    }, 400)
    return () => {
      clearTimeout(delay)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const animatedPoints = AXES.map((ax, i) => {
    const r = (ax.value / 100) * R * progress
    return polar(axisAngle(i), r)
  })

  const polyPoints = animatedPoints.map(p => `${p.x},${p.y}`).join(' ')

  return (
    <motion.div
      className="relative flex flex-col items-center select-none"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      {/* Header */}
      <div className="w-full mb-5 flex items-center justify-between" style={{ maxWidth: SIZE }}>
        <div>
          <p className="text-[10px] font-mono tracking-[0.18em] uppercase" style={{ color: 'var(--fg-subtle)' }}>Capability Index</p>
          <p className="text-[11px] font-medium mt-0.5" style={{ color: 'var(--fg-muted)' }}>Engineering Profile</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: 'var(--fg-subtle)' }}>Live</span>
        </div>
      </div>

      {/* SVG Chart */}
      <div className="relative" style={{ width: SIZE, height: SIZE }}>
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} style={{ overflow: 'visible' }}>
          <defs>
            <radialGradient id="radar-fill" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#f97316" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.04" />
            </radialGradient>
            <radialGradient id="radar-fill-hover" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#f97316" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.08" />
            </radialGradient>
            <filter id="glow-orange">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Grid levels */}
          {Array.from({ length: LEVELS }).map((_, lvl) => (
            <path
              key={lvl}
              d={levelPath(lvl + 1)}
              fill="none"
              stroke="var(--border-mid)"
              strokeWidth={lvl === LEVELS - 1 ? 1 : 0.75}
              strokeDasharray={lvl === LEVELS - 1 ? 'none' : '3,4'}
              opacity={0.6 + lvl * 0.08}
            />
          ))}

          {/* Axis lines */}
          {AXES.map((_, i) => {
            const end = polar(axisAngle(i), R)
            return (
              <line
                key={i}
                x1={CX} y1={CY}
                x2={end.x} y2={end.y}
                stroke="var(--border-mid)"
                strokeWidth={0.75}
                opacity={0.5}
              />
            )
          })}

          {/* Filled polygon */}
          <polygon
            points={polyPoints}
            fill="url(#radar-fill)"
            stroke="none"
          />

          {/* Stroke polygon */}
          <polygon
            points={polyPoints}
            fill="none"
            stroke="#f97316"
            strokeWidth={1.5}
            strokeLinejoin="round"
            filter="url(#glow-orange)"
            opacity={0.9}
          />

          {/* Axis dots + labels */}
          {AXES.map((ax, i) => {
            const angle  = axisAngle(i)
            const tip    = polar(angle, R)
            const labelR = R + 28
            const lp     = polar(angle, labelR)
            const isHov  = hovered === i
            const dotR   = polar(angle, (ax.value / 100) * R * progress)

            const anchor =
              Math.abs(Math.cos(angle)) < 0.1 ? 'middle'
              : Math.cos(angle) > 0 ? 'start'
              : 'end'

            const dy = Math.sin(angle) > 0.3 ? 14 : Math.sin(angle) < -0.3 ? -6 : 4

            return (
              <g key={i} style={{ cursor: 'default' }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Axis tip tick */}
                <circle cx={tip.x} cy={tip.y} r={2} fill="var(--border-mid)" />

                {/* Value dot on polygon edge */}
                <circle
                  cx={dotR.x} cy={dotR.y} r={isHov ? 5 : 3.5}
                  fill={isHov ? '#f97316' : '#f97316'}
                  opacity={isHov ? 1 : 0.85}
                  filter={isHov ? 'url(#glow-orange)' : undefined}
                  style={{ transition: 'r 0.15s, opacity 0.15s' }}
                />

                {/* Label */}
                <text
                  x={lp.x} y={lp.y + dy}
                  textAnchor={anchor}
                  fontSize={isHov ? 10.5 : 9.5}
                  fontFamily="var(--font-sans)"
                  fontWeight={isHov ? 600 : 500}
                  letterSpacing="0.06em"
                  fill={isHov ? '#f97316' : 'var(--fg-muted)'}
                  style={{ transition: 'fill 0.15s, font-size 0.15s', textTransform: 'uppercase' }}
                >
                  {ax.label}
                </text>

                {/* Value badge on hover */}
                {isHov && (
                  <g>
                    <rect
                      x={lp.x + (Math.cos(angle) > 0 ? 4 : anchor === 'middle' ? -18 : -40)}
                      y={lp.y + dy + 4}
                      width={36} height={14} rx={2}
                      fill="#f97316" opacity={0.15}
                    />
                    <text
                      x={lp.x + (Math.cos(angle) > 0 ? 22 : anchor === 'middle' ? 0 : -22)}
                      y={lp.y + dy + 14}
                      textAnchor="middle"
                      fontSize={9}
                      fontFamily="var(--font-sans)"
                      fontWeight={700}
                      fill="#f97316"
                      letterSpacing="0.05em"
                    >
                      {ax.value}%
                    </text>
                  </g>
                )}
              </g>
            )
          })}

          {/* Center dot */}
          <circle cx={CX} cy={CY} r={3} fill="#f97316" opacity={0.4} />
          <circle cx={CX} cy={CY} r={1.5} fill="#f97316" opacity={0.9} />
        </svg>
      </div>

      {/* Stats row */}
      <div className="w-full mt-6 grid grid-cols-3 gap-px" style={{ maxWidth: SIZE, border: '1px solid var(--border)', backgroundColor: 'var(--border)' }}>
        {[
          { label: 'Avg Score', value: `${Math.round(AXES.reduce((s, a) => s + a.value, 0) / AXES.length)}%` },
          { label: 'Axes',      value: `${AXES.length}` },
          { label: 'Top Skill', value: AXES.reduce((a, b) => a.value > b.value ? a : b).label.split(' ')[0] },
        ].map(stat => (
          <div key={stat.label} className="flex flex-col items-center py-3 px-2" style={{ backgroundColor: 'var(--bg)' }}>
            <span className="text-base font-semibold tabular-nums" style={{ color: 'var(--fg)' }}>{stat.value}</span>
            <span className="text-[9px] font-mono tracking-[0.14em] uppercase mt-0.5" style={{ color: 'var(--fg-subtle)' }}>{stat.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
