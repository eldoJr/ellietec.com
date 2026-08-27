interface Props {
  label: string
}

export default function Badge({ label }: Props) {
  return (
    <span className="px-2.5 py-1 text-xs font-mono text-neutral-400 border border-neutral-800">
      {label}
    </span>
  )
}
