'use client'

type Props = {
  label: string
  active?: boolean
  onClick?: () => void
}

export default function TagChip({ label, active, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${active ? 'bg-brand text-white border-brand' : 'border-ink/20 text-ink hover:bg-ink/5'}`}
    >
      {label}
    </button>
  )
}
