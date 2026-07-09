export default function Heading({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <span
      className={`text-left font-bold text-[46px] leading-[50px] tracking-[0px] text-secondary self-baseline ${className}`}
    >
      {content}
    </span>
  );
}
