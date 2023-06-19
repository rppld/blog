import * as React from "react";
import { cn } from "../lib/utils";

export function List({
  className,
  ...props
}: React.HTMLProps<HTMLUListElement>) {
  return <ul className={cn("grid grid-cols-1 gap-8", className)} {...props} />;
}

export function Item(props: React.HTMLProps<HTMLLIElement>) {
  return <li className="relative group" {...props} />;
}

export function ItemLink({
  children,
  ...props
}: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <>
      <div className="absolute -inset-x-2 lg:-inset-x-4 -inset-y-4 z-0 scale-95 bg-black/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 rounded-xl"></div>
      <a {...props}>
        <span className="absolute -inset-x-2 lg:-inset-x-4 -inset-y-4 z-20 rounded-xl" />
        <span className="flex items-center space-x-4">{children}</span>
      </a>
    </>
  );
}

export function ItemTitle(props: React.HTMLProps<HTMLSpanElement>) {
  return (
    <span
      className="flex-none font-medium text-sm md:text-base lg:text-lg"
      {...props}
    />
  );
}

export function ItemSpacer(props: React.HTMLProps<HTMLSpanElement>) {
  return (
    <span
      className="flex-shrink w-full border-t border-dashed border-black/30"
      {...props}
    />
  );
}

export function ItemText(props: React.HTMLProps<HTMLSpanElement>) {
  return (
    <span
      className="flex-none opacity-60 text-sm md:text-base lg:text-lg"
      {...props}
    />
  );
}

export function ItemData(props: React.HTMLProps<HTMLSpanElement>) {
  return (
    <span
      className="flex-none font-mono opacity-30 text-sm md:text-base"
      {...props}
    />
  );
}
