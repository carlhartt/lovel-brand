import { type HTMLAttributes } from "react"
import { cn } from "@/lib/cn"

type BadgeVariant =
  | "outline-green"
  | "outline-light"
  | "outline-black"
  | "fill-green"
  | "fill-dark"

const variantClasses: Record<BadgeVariant, string> = {
  "outline-green":  "border border-accent text-accent",
  "outline-light":  "border border-primary-surface text-primary-surface",
  "outline-black":  "border border-foreground text-foreground",
  "fill-green":     "bg-accent text-white",
  "fill-dark":      "bg-foreground text-white",
}

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant
}

export function Badge({ variant = "outline-green", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-[5px]",
        "font-mono font-medium text-[10px] uppercase tracking-[1.3px]",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
