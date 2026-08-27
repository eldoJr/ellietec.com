import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const spring = useSpring(progress, { stiffness: 200, damping: 30 })

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      setProgress(scrollTop / (scrollHeight - clientHeight))
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => { spring.set(progress) }, [progress, spring])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#f97316] origin-left z-[9999] pointer-events-none"
      style={{ scaleX: spring }}
    />
  )
}
