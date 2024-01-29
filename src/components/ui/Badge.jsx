import * as React from "react"
import { cva } from "class-variance-authority"

import { merge } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-3 py-1 capitalize text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-red-100 bg-opacity-64 text-black/75 shadow hover:bg-primary/80",
        primary:
          "border-transparent bg-teal-100 bg-opacity-64 text-black/75 shadow hover:bg-primary/80",
      },
      rounded: {
        default: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      rounded: "default",
    },
  },
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={merge(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
