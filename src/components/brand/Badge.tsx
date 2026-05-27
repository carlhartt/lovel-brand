import { type HTMLAttributes } from "react"
import { cn } from "@/lib/cn"

type BadgeVariant = "default" | "primary" | "muted"

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-subtle text-foreground",
  primary: "bg-primary-surface text-primary",
  muted:   "bg-subtle text-muted",
}

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant
}

export function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-sm font-sans font-medium",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
