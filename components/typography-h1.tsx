import { cn } from "../lib/utils";

export function TypographyH1({
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-black dark:text-white [text-wrap:balance]",
        className
      )}
      {...props}
    />
  );
}
