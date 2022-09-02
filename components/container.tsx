import clsx from "clsx";
import * as React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, ...props }: Props) {
  return (
    <div
      className={clsx("max-w-4xl mx-auto px-3 md:px-6 lg:px-12", className)}
      {...props}
    />
  );
}
