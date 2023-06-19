import clsx from "clsx";
import * as React from "react";

export default function Container({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={clsx("max-w-5xl mx-auto px-3 md:px-6 lg:px-12", className)}
      {...props}
    />
  );
}
