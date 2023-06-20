import * as React from "react";
import { cn } from "../lib/utils";

export function Container({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "grid items-start grid-cols-1 gap-8 md:grid-cols-12",
        className
      )}
      {...props}
    />
  );
}

export function Aside({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return <div className={cn("md:col-span-4", className)} {...props} />;
}

export function Main({ className, ...props }: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={cn("md:col-span-8 md:col-start-5", className)} {...props} />
  );
}
