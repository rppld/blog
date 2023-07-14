export function TypographyLead(props: React.HTMLProps<HTMLParagraphElement>) {
  return (
    <p
      className="text-4xl lg:text-5xl font-extrabold tracking-tight text-black/40 dark:text-white/40"
      {...props}
    />
  );
}
