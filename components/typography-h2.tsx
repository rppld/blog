import { cn } from "../lib/utils";

export function TypographyH2({
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-lg lg:text-xl font-display font-medium text-neutral-400",
        className
      )}
      {...props}
    />
  );
}
