export default function Description({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <dd
      className={`font-medium text-left text-base leading-[25px] tracking-[0px] text-description self-baseline ${className}`}
    >
      {content}
    </dd>
  );
}
