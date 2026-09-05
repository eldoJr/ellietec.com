import type { NavLink, Service, Project } from '../types'

export const SITE = {
  name: 'ellietec',
  tagline: 'We engineer digital systems that scale.',
  description:
    'We deliver fast, scalable, and intelligent software solutions through modern engineering and minimalist design principles, from concept to global deployment.',
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Technologies', href: '#technologies' },
]

export const SERVICES: Service[] = [
  {
    id: 'systems',
    title: 'Systems Architecture',
    description: 'Scalable, resilient infrastructure designed for global workloads.',
  },
  {
    id: 'software',
    title: 'Software Engineering',
    description: 'Full-stack development with modern frameworks and clean code principles.',
  },
  {
    id: 'ai',
    title: 'Intelligent Systems',
    description: 'AI-powered solutions integrated into production-grade applications.',
  },
  {
    id: 'deployment',
    title: 'Cloud & Deployment',
    description: 'From CI/CD pipelines to global cloud deployment at scale.',
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Project Alpha',
    description: 'High-performance distributed system serving millions of requests.',
    tags: ['Systems', 'Cloud', 'Go'],
  },
  {
    id: 'project-2',
    title: 'Project Beta',
    description: 'AI-driven platform with real-time data processing capabilities.',
    tags: ['AI', 'Python', 'React'],
  },
]
