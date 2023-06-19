import * as React from "react";
import { cn } from "../lib/utils";

export const TypographyH3 = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg lg:text-xl font-medium", className)}
    {...props}
  />
));
TypographyH3.displayName = "TypographyH3";
