type SpacingBarProps = {
  name: string
  size: string
  pxValue: string
}

export function SpacingBar({ name, size, pxValue }: SpacingBarProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-8 shrink-0 text-right text-sm font-mono text-muted">{name}</span>
      <div
        className="h-4 rounded-sm bg-primary-surface border border-primary-light"
        style={{ width: size }}
      />
      <span className="text-sm font-mono text-muted">{pxValue}</span>
    </div>
  )
}
