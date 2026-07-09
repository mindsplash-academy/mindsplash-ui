export default function GradientHeading({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <span
      className={`text-left font-bold text-[46px] leading-[50px] tracking-[0px] bg-gradient-to-r bg-clip-text text-transparent from-gradient-start to-gradient-end self-baseline ${className}`}
    >
      {content}
    </span>
  );
}
