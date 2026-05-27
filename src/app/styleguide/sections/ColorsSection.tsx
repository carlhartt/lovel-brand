import { Swatch } from "../_components/Swatch"

const primitives = [
  { name: "Sage 50",  value: "#EFFFF5", token: "--sage-50" },
  { name: "Sage 300", value: "#84C8AA", token: "--sage-300" },
  { name: "Sage 600", value: "#099256", token: "--sage-600" },
  { name: "Sage 800", value: "#1A5E40", token: "--sage-800" },
  { name: "Sage 950", value: "#28352F", token: "--sage-950" },
  { name: "Ink 950",  value: "#282B2B", token: "--ink-950" },
  { name: "Ink 500",  value: "#666666", token: "--ink-500" },
  { name: "Ink 200",  value: "#E6E6E6", token: "--ink-200" },
  { name: "Ink 100",  value: "#F0F0F0", token: "--ink-100" },
  { name: "Ink 50",   value: "#F7F7F7", token: "--ink-50" },
]

const semantics = [
  { name: "Primary",         value: "#1A5E40", token: "bg-primary" },
  { name: "Primary Hover",   value: "#28352F", token: "bg-primary-hover" },
  { name: "Primary Light",   value: "#84C8AA", token: "bg-primary-light" },
  { name: "Primary Surface", value: "#EFFFF5", token: "bg-primary-surface" },
  { name: "Accent",          value: "#099256", token: "bg-accent" },
  { name: "Foreground",      value: "#282B2B", token: "text-foreground" },
  { name: "Muted",           value: "#666666", token: "text-muted" },
  { name: "Border",          value: "#E6E6E6", token: "border-border" },
  { name: "Subtle",          value: "#F0F0F0", token: "bg-subtle" },
  { name: "Surface",         value: "#F7F7F7", token: "bg-surface" },
  { name: "Background",      value: "#ffffff", token: "bg-background" },
]

export function ColorsSection() {
  return (
    <section id="colors" className="flex flex-col gap-8">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-1">Colors</h2>
        <p className="text-sm font-sans text-muted">Primitive palette and semantic aliases</p>
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">
            Primitives · :root
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {primitives.map((s) => (
              <Swatch key={s.token} {...s} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">
            Semantic · @theme inline
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {semantics.map((s) => (
              <Swatch key={s.token} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
