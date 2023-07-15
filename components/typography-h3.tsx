import * as React from "react";
import { cn } from "../lib/utils";

export const TypographyH3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg lg:text-xl font-display font-semibold text-black dark:text-white",
      className
    )}
    {...props}
  />
));
TypographyH3.displayName = "TypographyH3";
