export interface Project {
  slug: string
  title: string
  description: string
  category: string
  image: string
  tech: string[]
  github?: string
  live?: string
  year: string
  order: number
}

function parseFrontmatter(raw: string): Record<string, unknown> {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}
  const result: Record<string, unknown> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(':')
    if (colon === -1) continue
    const key = line.slice(0, colon).trim()
    const val = line.slice(colon + 1).trim()
    if (val.startsWith('[')) {
      result[key] = val.slice(1, -1).split(',').map(s => s.trim().replace(/^"|"$|^'|'$/g, ''))
    } else {
      result[key] = val.replace(/^"|"$|^'|'$/g, '')
    }
  }
  return result
}

const files = import.meta.glob('/src/content/projects/*/index.md', { as: 'raw', eager: true })

export const projects: Project[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split('/').at(-2) as string
    const data = parseFrontmatter(raw as string)
    return { slug, ...data } as Project
  })
  .sort((a, b) => a.order - b.order)
