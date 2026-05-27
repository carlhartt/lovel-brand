import { type HTMLAttributes } from "react"
import { cn } from "@/lib/cn"

// Matches Framer card styles — all cards use border-radius: 24px
// Variants match the green palette used in app bento cards and feature cards
type CardVariant = "default" | "green" | "dark-green" | "darkest-green"

const variantClasses: Record<CardVariant, string> = {
  "default":       "border border-border bg-background text-foreground",
  "green":         "bg-accent text-white",
  "dark-green":    "bg-primary text-white",
  "darkest-green": "bg-primary-hover text-white",
}

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant
}

export function Card({ variant = "default", className, children, ...props }: CardProps) {
  return (
    <div
      className={cn("rounded-3xl p-8", variantClasses[variant], className)}
      {...props}
    >
      {children}
    </div>
  )
}
