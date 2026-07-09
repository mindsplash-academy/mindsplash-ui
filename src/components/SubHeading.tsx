export default function SubHeading({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <h2
      className={`text-left text-[26px] leading-[34px] tracking-[0px] text-secondary self-baseline ${className}`}
    >
      {content}
    </h2>
  );
}
