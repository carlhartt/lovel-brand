type SwatchProps = {
  name: string
  value: string
  token: string
}

export function Swatch({ name, value, token }: SwatchProps) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-14 w-full rounded-md border border-border"
        style={{ backgroundColor: value }}
      />
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium font-sans text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted">{token}</span>
        <span className="text-xs font-mono text-muted">{value}</span>
      </div>
    </div>
  )
}
