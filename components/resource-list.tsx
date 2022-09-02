import * as React from "react";

export function List(
  props: React.HTMLProps<HTMLUListElement>
): React.ReactElement {
  return <ul className="flex flex-col -mt-2 -mb-2" {...props} />;
}

export function Item(
  props: React.HTMLProps<HTMLLIElement>
): React.ReactElement {
  return <li {...props} />;
}

export function ItemLink(
  props: React.HTMLProps<HTMLAnchorElement>
): React.ReactElement {
  return (
    <a
      className="flex items-center space-x-4 hover:bg-black/5 -ml-2 -mr-2 p-2 rounded-lg"
      {...props}
    />
  );
}

export function ItemTitle(
  props: React.HTMLProps<HTMLSpanElement>
): React.ReactElement {
  return (
    <span
      className="flex-none font-medium text-sm md:text-base lg:text-lg"
      {...props}
    />
  );
}

export function ItemSpacer(
  props: React.HTMLProps<HTMLSpanElement>
): React.ReactElement {
  return (
    <span
      className="flex-shrink w-full border-t border-dashed border-black/30"
      {...props}
    />
  );
}

export function ItemText(
  props: React.HTMLProps<HTMLSpanElement>
): React.ReactElement {
  return (
    <span
      className="flex-none opacity-60 text-sm md:text-base lg:text-lg"
      {...props}
    />
  );
}

export function ItemData(
  props: React.HTMLProps<HTMLSpanElement>
): React.ReactElement {
  return (
    <span
      className="flex-none font-mono opacity-30 text-sm md:text-base lg:text-lg"
      {...props}
    />
  );
}
