import * as React from "react";
import { cn } from "../lib/utils";

export const TypographyMono = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "font-mono text-sm md:text-base text-black/30 dark:text-white/30",
      className
    )}
    {...props}
  />
));
TypographyMono.displayName = "TypographyMono";
