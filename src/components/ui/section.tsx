import * as React from "react"
import { cn } from "@/src/lib/utils"

export function Section({
  id,
  className,
  ...props
}: React.ComponentProps<"section"> & { id?: string }) {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen px-6 py-24 flex items-center justify-center",
        className
      )}
      {...props}
    />
  )
}
