import { type ReactNode } from "react"

const tokenLinks = [
  { href: "/styleguide#overview",    label: "Overview" },
  { href: "/styleguide#colors",      label: "Colors" },
  { href: "/styleguide#typography",  label: "Typography" },
  { href: "/styleguide#spacing",     label: "Spacing" },
  { href: "/styleguide#components",  label: "Components" },
]

const demoLinks = [
  { href: "/styleguide/landing-demo", label: "Landing Demo" },
]

export default function StyleguideLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface">
      <aside className="sticky top-0 h-screen w-48 shrink-0 border-r border-border bg-background p-6 flex flex-col gap-1">
        <span className="text-xs font-mono text-muted uppercase tracking-widest mb-4">
          Lovel · Styleguide
        </span>
        <a
          href="/styleguide"
          className="text-xs font-mono text-muted uppercase tracking-widest mb-1 mt-2"
        >
          Tokens
        </a>
        {tokenLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-sans text-muted hover:text-foreground transition-colors py-1"
          >
            {link.label}
          </a>
        ))}
        <span className="text-xs font-mono text-muted uppercase tracking-widest mb-1 mt-4">
          Demos
        </span>
        {demoLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-sans text-muted hover:text-foreground transition-colors py-1"
          >
            {link.label}
          </a>
        ))}
      </aside>
      <main className="flex-1 px-12 py-10 flex flex-col gap-20 max-w-5xl">
        {children}
      </main>
    </div>
  )
}
