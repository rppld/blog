export function TypographyLead(props: React.HTMLProps<HTMLParagraphElement>) {
  return (
    <p
      className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight text-black/40 dark:text-white/40 [text-wrap:balance]"
      {...props}
    />
  );
}
