import * as React from "react";
import { cn } from "../lib/utils";
import { TypographyH3 } from "./typography-h3";

export function List({
  className,
  ...props
}: React.HTMLProps<HTMLUListElement>) {
  return (
    <ul
      className={cn("grid grid-cols-1 gap-8 lg:gap-12", className)}
      {...props}
    />
  );
}

export const Item = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("group relative flex gap-4", className)}
    {...props}
  />
));
Item.displayName = "Item";

export function ItemLink({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <>
      <div
        className={cn(
          "absolute -inset-3 lg:-inset-4 -z-10 bg-white rounded-xl shadow-md group-hover:shadow-lg transition",
          className
        )}
      />
      <a {...props}>
        <span className="absolute -inset-3 lg:-inset-4 rounded-xl" />
        {children}
      </a>
    </>
  );
}

export const ItemTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => <TypographyH3 ref={ref} {...props} />);
ItemTitle.displayName = "ItemTitle";

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
      className="flex-none font-mono text-black/30 text-sm md:text-base"
      {...props}
    />
  );
}
