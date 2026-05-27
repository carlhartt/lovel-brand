import { type ReactNode } from "react"

type TypeSpecimenProps = {
  label: string
  meta: string
  children: ReactNode
}

export function TypeSpecimen({ label, meta, children }: TypeSpecimenProps) {
  return (
    <div className="flex flex-col gap-3 border-b border-border pb-6">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-xs font-mono text-muted">{label}</span>
        <span className="text-xs font-mono text-muted">{meta}</span>
      </div>
      {children}
    </div>
  )
}
