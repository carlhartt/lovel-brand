import { SpacingBar } from "../_components/SpacingBar"

const scale = [
  { name: "1",  size: "4px",  pxValue: "4px" },
  { name: "2",  size: "8px",  pxValue: "8px" },
  { name: "3",  size: "12px", pxValue: "12px" },
  { name: "4",  size: "16px", pxValue: "16px" },
  { name: "5",  size: "20px", pxValue: "20px" },
  { name: "6",  size: "24px", pxValue: "24px" },
  { name: "8",  size: "32px", pxValue: "32px" },
  { name: "10", size: "40px", pxValue: "40px" },
  { name: "12", size: "48px", pxValue: "48px" },
  { name: "16", size: "64px", pxValue: "64px" },
  { name: "20", size: "80px", pxValue: "80px" },
  { name: "24", size: "96px", pxValue: "96px" },
]

export function SpacingSection() {
  return (
    <section id="spacing" className="flex flex-col gap-8">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-1">Spacing</h2>
        <p className="text-sm font-sans text-muted">Tailwind spacing scale · base unit 4px</p>
      </div>
      <div className="flex flex-col gap-3">
        {scale.map((s) => (
          <SpacingBar key={s.name} name={s.name} size={s.size} pxValue={s.pxValue} />
        ))}
      </div>
    </section>
  )
}
