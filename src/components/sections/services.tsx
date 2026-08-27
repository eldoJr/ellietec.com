import { motion } from 'framer-motion'
import { SERVICES } from '../../constants'
import Section from '../layout/section'

export default function Services() {
  return (
    <Section id="services">
      <p className="text-sm font-mono text-neutral-500 tracking-widest uppercase mb-12">
        What We Do
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.id}
            className="bg-neutral-950 p-8 flex flex-col gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <h3 className="text-white font-semibold text-lg">{service.title}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
