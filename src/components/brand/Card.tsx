import { type HTMLAttributes } from "react"
import { cn } from "@/lib/cn"

type CardProps = HTMLAttributes<HTMLDivElement>

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn("rounded-lg border border-border bg-background p-6", className)}
      {...props}
    >
      {children}
    </div>
  )
}
