import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className = '', id }: Props) {
  return (
    <section id={id} className={`px-8 py-24 max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  )
}
