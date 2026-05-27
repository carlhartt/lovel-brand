import { type HTMLAttributes } from "react"
import { cn } from "@/lib/cn"

// Matches Framer body text styles:
// default = DM Sans regular (Body 16R)
// muted   = DM Sans regular, muted color
// medium  = DM Sans 500 (Body 16M, Body 24M)
// mono    = DM Mono uppercase (Mono 14R / 12R)
type TextVariant = "default" | "muted" | "medium" | "mono"

// Matches Framer font sizes: 12, 14, 16, 18, 20, 24px
type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl"

type TextTag = "p" | "span" | "div" | "label" | "li" | "strong" | "em"

const variantClasses: Record<TextVariant, string> = {
  default: "text-foreground font-sans font-normal",
  muted:   "text-muted font-sans font-normal",
  medium:  "text-foreground font-sans font-medium",
  mono:    "text-foreground font-mono font-medium uppercase tracking-widest",
}

const sizeClasses: Record<TextSize, string> = {
  xs:   "text-xs",    // 12px — Body 12R
  sm:   "text-sm",    // 14px — Body 14R
  base: "text-base",  // 16px — Body 16R / 16M
  lg:   "text-lg",    // 18px — Body 18R
  xl:   "text-xl",    // 20px — Body 20R
  "2xl": "text-2xl",  // 24px — Body 24M
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
