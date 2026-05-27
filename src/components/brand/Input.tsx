"use client"

import { type InputHTMLAttributes, useId } from "react"
import { cn } from "@/lib/cn"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium font-sans text-foreground"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "px-3 py-2 rounded-md border border-border bg-background font-sans text-base text-foreground",
          "placeholder:text-muted",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
          error && "border-red-500 focus:ring-red-500",
          className,
        )}
        {...props}
      />
      {error && (
        <span className="text-sm font-sans text-red-600">{error}</span>
      )}
    </div>
  )
}
