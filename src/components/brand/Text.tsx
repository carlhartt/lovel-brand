import { type HTMLAttributes } from "react"
import { cn } from "@/lib/cn"

type TextVariant = "default" | "muted" | "mono" | "lead"
type TextSize = "sm" | "base" | "lg"
type TextTag = "p" | "span" | "div" | "label" | "li" | "strong" | "em"

const variantClasses: Record<TextVariant, string> = {
  default: "text-foreground font-sans",
  muted:   "text-muted font-sans",
  mono:    "text-foreground font-mono",
  lead:    "text-foreground font-sans font-medium",
}

const sizeClasses: Record<TextSize, string> = {
  sm:   "text-sm",
  base: "text-base",
  lg:   "text-lg",
}

type TextProps = HTMLAttributes<HTMLElement> & {
  as?: TextTag
  variant?: TextVariant
  size?: TextSize
}

export function Text({
  as: Tag = "p",
  variant = "default",
  size = "base",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn("leading-relaxed", variantClasses[variant], sizeClasses[size], className)}
      {...(props as HTMLAttributes<HTMLElement>)}
    >
      {children}
    </Tag>
  )
}
