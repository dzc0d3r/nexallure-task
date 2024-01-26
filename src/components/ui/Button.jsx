import * as React from "react"
import { cva } from "class-variance-authority"

import { merge } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 btn",
  {
    variants: {
      variant: {
        default: "bg-slate-50  hover:bg-slate-100/90",
        primary: "bg-black/90 text-white  hover:bg-black/80",
      },
      size: {
        default: "h-12 px-5 py-3",
        sm: "h-11 px-3",
        lg: "h-13 px-8",
        icon: "h-12 w-12",
      },
      rounded: {
        default: "rounded-full",
        md: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  },
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={merge(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
