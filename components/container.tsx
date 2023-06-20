import * as React from "react";
import { cn } from "../lib/utils";

export default function Container({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn("max-w-[100rem] ml-auto px-3 md:px-5 lg:px-8", className)}
      {...props}
    />
  );
}