export default function SubHeading({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <p
      className={`self-baseline text-left text-[21px] leading-7 tracking-[0px] text-secondary sm:text-[23px] md:text-[26px] md:leading-[34px] ${className}`}
    >
      {content}
    </p>
  );
}
