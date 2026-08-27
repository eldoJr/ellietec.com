import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const C = '#fb4c1e'
const SIZE = 460
const CX = SIZE / 2
const CY = SIZE / 2

const CORE = { label: 'ellietec', sub: 'Studio' }

const RINGS: { r: number; speed: number; nodes: { label: string; sub: string; angle: number }[] }[] = [
  {
    r: 88,
    speed: 0.00022,
    nodes: [
      { label: 'Engineering', sub: 'Systems',     angle: Math.PI * 0.5  },
      { label: 'Intelligence', sub: 'AI & Data',  angle: Math.PI * 1.5  },
    ],
  },
  {
    r: 152,
    speed: -0.00014,
    nodes: [
      { label: 'Web Dev',     sub: 'Full-stack',  angle: Math.PI * 0.15 },
      { label: 'Mobile',      sub: 'iOS & Android', angle: Math.PI * 0.75 },
      { label: 'IT Support',  sub: 'Managed',     angle: Math.PI * 1.20 },
      { label: 'Networks',    sub: 'Infra & VPN', angle: Math.PI * 1.72 },
    ],
  },
  {
    r: 200,
    speed: 0.00009,
    nodes: [
      { label: 'Cloud',       sub: 'AWS · GCP',   angle: Math.PI * 0.35 },
      { label: 'DevOps',      sub: 'CI / CD',     angle: Math.PI * 0.92 },
      { label: 'AI / ML',     sub: 'Inference',   angle: Math.PI * 1.42 },
      { label: 'Security',    sub: 'Zero-trust',  angle: Math.PI * 1.88 },
    ],
  },
  {
    r: 236,
    speed: -0.00006,
    nodes: [
      { label: 'React',       sub: 'Frontend',    angle: Math.PI * 0.08 },
      { label: 'Go',          sub: 'Backend',     angle: Math.PI * 0.58 },
      { label: 'AWS',         sub: 'Cloud',       angle: Math.PI * 1.08 },
      { label: 'Docker',      sub: 'Containers',  angle: Math.PI * 1.55 },
      { label: 'PostgreSQL',  sub: 'Database',    angle: Math.PI * 1.95 },
    ],
  },
]

// Connections: [flatIndex a, flatIndex b]
// Ring 0: 0=Engineering, 1=Intelligence
// Ring 1: 2=Web Dev, 3=Mobile, 4=IT Support, 5=Networks
// Ring 2: 6=Cloud, 7=DevOps, 8=AI/ML, 9=Security
// Ring 3: 10=React, 11=Go, 12=AWS, 13=Docker, 14=PostgreSQL
const CONNECTIONS: [number, number][] = [
  [0, 2], [0, 3],  // Engineering → Web Dev, Mobile
  [1, 8],          // Intelligence → AI/ML
  [2, 10],[2, 11], // Web Dev → React, Go
  [3, 10],         // Mobile → React
  [4, 9], [4, 7],  // IT Support → Security, DevOps
  [5, 6], [5, 9],  // Networks → Cloud, Security
  [6, 12],[7, 13], // Cloud → AWS, DevOps → Docker
  [8, 14],         // AI/ML → PostgreSQL
]

export default function TechOrbit() {
  const rafRef = useRef<number | null>(null)
  const tsRef  = useRef<number>(0)
  const [angles, setAngles] = useState(() =>
    RINGS.map(ring => ring.nodes.map(n => n.angle))
  )
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    let prev = performance.now()
    const tick = (now: number) => {
      const dt = now - prev
      prev = now
      tsRef.current += dt
      setAngles(RINGS.map(ring =>
        ring.nodes.map(n => n.angle + tsRef.current * ring.speed)
      ))
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  const positions = RINGS.map((ring, ri) =>
    ring.nodes.map((_, ni) => ({
      x: CX + ring.r * Math.cos(angles[ri][ni]),
      y: CY + ring.r * Math.sin(angles[ri][ni]),
    }))
  )
  const flatPos = RINGS.flatMap((_, ri) => positions[ri])

  // Node size by ring — inner nodes are bigger (more important)
  const ringNodeR = [6, 5, 4.5, 4]

  return (
    <motion.div
      className="relative select-none"
      style={{ width: SIZE, height: SIZE }}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} style={{ overflow: 'visible' }}>
        <defs>
          <radialGradient id="orbit-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor={C} stopOpacity="0.20" />
            <stop offset="100%" stopColor={C} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orbit-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="var(--border-mid)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--border-mid)" stopOpacity="0" />
          </radialGradient>
          <filter id="node-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Ambient bg */}
        <circle cx={CX} cy={CY} r={250} fill="url(#orbit-bg)" />

        {/* Orbit rings */}
        {RINGS.map((ring, ri) => (
          <circle key={ri} cx={CX} cy={CY} r={ring.r}
            fill="none" stroke="var(--border-mid)"
            strokeWidth={0.75} strokeDasharray="3 7" opacity={0.45}
          />
        ))}

        {/* Cross connections */}
        {mounted && CONNECTIONS.map(([a, b], i) => (
          <line key={i}
            x1={flatPos[a]?.x} y1={flatPos[a]?.y}
            x2={flatPos[b]?.x} y2={flatPos[b]?.y}
            stroke={C} strokeWidth={0.5} opacity={0.13}
          />
        ))}

        {/* Core spokes to ring 0 */}
        {mounted && positions[0].map((p, i) => (
          <line key={i} x1={CX} y1={CY} x2={p.x} y2={p.y}
            stroke={C} strokeWidth={0.7} opacity={0.22}
          />
        ))}

        {/* Nodes */}
        {mounted && RINGS.map((ring, ri) =>
          ring.nodes.map((node, ni) => {
            const { x, y } = positions[ri][ni]
            const isRight  = x >= CX
            const anchor   = isRight ? 'start' : 'end'
            const lx       = x + (isRight ? 11 : -11)
            const nr       = ringNodeR[ri]
            const fontSize = ri < 2 ? 9.5 : 8.5
            const fontW    = ri < 2 ? 600 : 500
            const subSize  = ri < 2 ? 8 : 7.5

            return (
              <g key={`${ri}-${ni}`}>
                <circle cx={x} cy={y} r={nr + 8} fill={C} opacity={0.05} />
                <circle cx={x} cy={y} r={nr} fill="var(--bg)" stroke={C}
                  strokeWidth={ri < 2 ? 1.2 : 1} opacity={0.92}
                />
                <circle cx={x} cy={y} r={nr * 0.38} fill={C} opacity={0.85} />

                <text x={lx} y={y - 2} textAnchor={anchor}
                  fontSize={fontSize} fontWeight={fontW}
                  fontFamily="var(--font-sans)" letterSpacing="0.07em"
                  fill="var(--fg)" opacity={0.9}>
                  {node.label}
                </text>
                <text x={lx} y={y + subSize + 1} textAnchor={anchor}
                  fontSize={subSize} fontFamily="var(--font-sans)"
                  letterSpacing="0.05em" fill="var(--fg-subtle)">
                  {node.sub}
                </text>
              </g>
            )
          })
        )}

        {/* Core glow */}
        <circle cx={CX} cy={CY} r={56} fill="url(#orbit-core-glow)" />

        {/* Core rings */}
        <circle cx={CX} cy={CY} r={40} fill="var(--bg)" stroke={C} strokeWidth={1} opacity={0.9} />
        <circle cx={CX} cy={CY} r={35} fill="none" stroke={C} strokeWidth={0.4} strokeDasharray="2 4" opacity={0.35} />

        {/* Core text */}
        <text x={CX} y={CY - 5} textAnchor="middle"
          fontSize={11} fontWeight={700} fontFamily="var(--font-sans)"
          letterSpacing="0.1em" fill="var(--fg)">
          {CORE.label}
        </text>
        <text x={CX} y={CY + 9} textAnchor="middle"
          fontSize={8} fontFamily="var(--font-sans)"
          letterSpacing="0.08em" fill={C} opacity={0.8}>
          {CORE.sub}
        </text>
      </svg>
    </motion.div>
  )
}
