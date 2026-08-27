export interface Service {
  id: string
  title: string
  description: string
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  url?: string
}

export interface NavLink {
  label: string
  href: string
}
