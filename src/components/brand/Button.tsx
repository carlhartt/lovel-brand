import { type ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/cn"

type ButtonVariant = "primary" | "dark" | "ghost"
type ButtonSize = "sm" | "md" | "lg"

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-primary",
  dark:    "bg-foreground text-white hover:opacity-90",
  ghost:   "bg-primary-surface text-foreground hover:opacity-90",
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-sm gap-1",
  md: "px-6 py-2 text-base gap-1.5",
  lg: "px-6 py-4 text-base gap-1.5",
}

function CaretRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden>
      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
    </svg>
  )
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: boolean
}

export function Button({
  variant = "primary",
  size = "md",
  icon = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-sans font-normal transition-colors cursor-pointer",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
      {icon && <CaretRight />}
    </button>
  )
}
