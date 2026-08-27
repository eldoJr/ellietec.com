import { motion } from 'framer-motion'
import { PROJECTS } from '../../constants'
import Badge from '../common/badge'
import Section from '../layout/section'

export default function Work() {
  return (
    <Section id="work">
      <p className="text-sm font-mono text-neutral-500 tracking-widest uppercase mb-12">
        Selected Work
      </p>
      <div className="flex flex-col divide-y divide-neutral-900">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            className="py-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="flex flex-col gap-2 max-w-lg">
              <h3 className="text-white font-semibold text-xl">{project.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{project.description}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => <Badge key={tag} label={tag} />)}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
