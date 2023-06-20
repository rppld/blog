import * as React from "react";
import { cn } from "../lib/utils";

export const TypographySmall = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("text-md text-black/30 dark:text-white/30", className)}
    {...props}
  />
));
TypographySmall.displayName = "TypographySmall";
