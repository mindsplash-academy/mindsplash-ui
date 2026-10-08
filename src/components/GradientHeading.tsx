export default function GradientHeading({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <span
      className={`self-baseline bg-gradient-to-r bg-clip-text text-left text-[32px] leading-[1.15] font-bold tracking-[0px] text-transparent from-gradient-start to-gradient-end sm:text-[38px] md:text-[42px] md:leading-[1.15] lg:text-[46px] lg:leading-[50px] ${className}`}
    >
      {content}
    </span>
  );
}
