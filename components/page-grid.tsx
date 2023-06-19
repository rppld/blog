import clsx from "clsx";
import * as React from "react";

export function Container({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={clsx(
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
  return <div className={clsx("md:col-span-2", className)} {...props} />;
}

export function Main({ className, ...props }: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={clsx("md:col-span-10 md:col-start-3", className)}
      {...props}
    />
  );
}
