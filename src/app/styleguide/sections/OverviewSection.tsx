const paletteStrip = [
  { label: "sage-950", hex: "#28352F" },
  { label: "sage-800", hex: "#1A5E40" },
  { label: "sage-600", hex: "#099256" },
  { label: "sage-300", hex: "#84C8AA" },
  { label: "sage-50",  hex: "#EFFFF5" },
  { label: "ink-950",  hex: "#282B2B" },
  { label: "ink-500",  hex: "#666666" },
  { label: "ink-200",  hex: "#E6E6E6" },
  { label: "ink-100",  hex: "#F0F0F0" },
  { label: "ink-50",   hex: "#F7F7F7" },
]

const fonts = [
  { name: "NeuePower",  role: "Display",  sample: "Aа", className: "font-display text-5xl font-bold" },
  { name: "DM Sans",    role: "Body",     sample: "Aа", className: "font-sans text-5xl font-normal" },
  { name: "DM Mono",    role: "Mono",     sample: "Aа", className: "font-mono text-5xl font-normal" },
]

export function OverviewSection() {
  return (
    <section id="overview" className="flex flex-col gap-10">
      {/* Hero */}
      <div className="rounded-3xl bg-primary p-10 flex flex-col gap-4">
        <span className="text-xs font-mono text-primary-light uppercase tracking-widest">
          Brand Guidelines · v1
        </span>
        <h1 className="font-display text-[64px] leading-none tracking-[-2px] text-white">
          Lovel
        </h1>
        <p className="font-sans text-lg text-white/70 max-w-lg">
          Energi med omtanke. A Tailwind-based design system built on sage greens and ink
          neutrals — grounded, clear, and purposeful.
        </p>
      </div>

      {/* Color strip */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-mono text-muted uppercase tracking-widest">Palette</p>
        <div className="flex h-12 rounded-xl overflow-hidden border border-border">
          {paletteStrip.map((s) => (
            <div
              key={s.label}
              title={`${s.label} · ${s.hex}`}
              className="flex-1"
              style={{ backgroundColor: s.hex }}
            />
          ))}
        </div>
        <div className="flex">
          {paletteStrip.map((s) => (
            <div key={s.label} className="flex-1 flex flex-col gap-0.5 items-start">
              <span className="text-[9px] font-mono text-muted leading-none">{s.hex}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Font trio */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-mono text-muted uppercase tracking-widest">Typefaces</p>
        <div className="grid grid-cols-3 gap-4">
          {fonts.map((f) => (
            <div
              key={f.name}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6"
            >
              <span className={f.className}>{f.sample}</span>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium font-sans text-foreground">{f.name}</span>
                <span className="text-xs font-mono text-muted">{f.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Token summary */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-mono text-muted uppercase tracking-widest">Token Architecture</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-background p-6 flex flex-col gap-2">
            <span className="text-sm font-medium font-sans text-foreground">Primitives</span>
            <span className="text-xs font-mono text-muted">:root — raw hex values</span>
            <p className="text-sm font-sans text-muted mt-1">
              Named by palette and step: <code className="font-mono text-xs bg-subtle px-1 py-0.5 rounded">--sage-800</code>,{" "}
              <code className="font-mono text-xs bg-subtle px-1 py-0.5 rounded">--ink-500</code>.
              Never used directly in components.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-6 flex flex-col gap-2">
            <span className="text-sm font-medium font-sans text-foreground">Semantic tokens</span>
            <span className="text-xs font-mono text-muted">@theme inline → Tailwind utilities</span>
            <p className="text-sm font-sans text-muted mt-1">
              Role-named aliases: <code className="font-mono text-xs bg-subtle px-1 py-0.5 rounded">bg-primary</code>,{" "}
              <code className="font-mono text-xs bg-subtle px-1 py-0.5 rounded">text-muted</code>,{" "}
              <code className="font-mono text-xs bg-subtle px-1 py-0.5 rounded">border-border</code>.
              These are what components use.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
