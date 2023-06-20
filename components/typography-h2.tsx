import { cn } from "../lib/utils";

export function TypographyH2({
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-lg lg:text-2xl font-extrabold text-black/40 dark:text-white/40",
        className
      )}
      {...props}
    />
  );
}
