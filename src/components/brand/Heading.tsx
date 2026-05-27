import { type ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/cn"

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5"

// Matches Framer text styles exactly:
// H1 = 64px, -2px tracking, 100% line-height
// H2 = 48px, -1.5px tracking, 105% line-height
// H3 = 32px, -0.1px tracking, 110% line-height
// H4 = 24px, -0.5px tracking, 120% line-height
// H5 = 20px, -0.1px tracking, 110% line-height
const sizeMap: Record<HeadingTag, string> = {
  h1: "text-[64px] leading-none tracking-[-2px]",
  h2: "text-5xl leading-[105%] tracking-[-1.5px]",
  h3: "text-[32px] leading-[110%] tracking-[-0.1px]",
  h4: "text-2xl leading-[120%] tracking-[-0.5px]",
  h5: "text-xl leading-[110%] tracking-[-0.1px]",
}

type HeadingProps = ComponentPropsWithoutRef<"h1"> & {
  as?: HeadingTag
}

export function Heading({ as: Tag = "h1", className, children, ...props }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-bold text-foreground",
        sizeMap[Tag],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
