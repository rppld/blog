export function TypographyLead(props: React.HTMLProps<HTMLParagraphElement>) {
  return (
    <p
      className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-neutral-400 [text-wrap:balance]"
      {...props}
    />
  );
}
