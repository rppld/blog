import * as React from "react";
import { cn } from "../lib/utils";

export const TypographyP = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-lg lg:text-xl text-neutral-400 tracking-tight",
      className
    )}
    {...props}
  />
));
TypographyP.displayName = "TypographyP";
