import { cn } from "../lib/utils";

export function TypographyH1({
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-4xl lg:text-5xl font-extrabold tracking-tight text-black dark:text-white",
        className
      )}
      {...props}
    />
  );
}
