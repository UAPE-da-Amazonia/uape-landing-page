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
        "min-h-screen px-6 md:px-8 lg:px-10 xl:px-12 py-24 md:py-28 lg:py-32 flex items-center justify-center",
        className
      )}
      {...props}
    />
  )
}
