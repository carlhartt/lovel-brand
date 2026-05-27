import { type ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/cn"

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5"

const sizeMap: Record<HeadingTag, string> = {
  h1: "text-5xl",
  h2: "text-4xl",
  h3: "text-3xl",
  h4: "text-2xl",
  h5: "text-xl",
}

type HeadingProps = ComponentPropsWithoutRef<"h1"> & {
  as?: HeadingTag
}

export function Heading({ as: Tag = "h1", className, children, ...props }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-bold leading-tight tracking-tight text-foreground",
        sizeMap[Tag],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
