import * as React from "react";

export const className = "text-3xl font-bold tracking-tight";

export default function PageTitle(
  props: React.HTMLProps<HTMLHeadingElement>
): React.ReactElement {
  return <h1 className={className} {...props} />;
}
