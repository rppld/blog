import clsx from "clsx";
import * as React from "react";
import { className as pageTitleClassName } from "./page-title";

export default function Lede(
  props: React.HTMLProps<HTMLParagraphElement>
): React.ReactElement {
  return <p className={clsx(pageTitleClassName, "opacity-30")} {...props} />;
}
