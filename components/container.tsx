import clsx from "clsx";
import * as React from "react";

export default function Container({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={clsx("max-w-[100rem] mx-auto px-3 md:px-5 lg:px-8", className)}
      {...props}
    />
  );
}
