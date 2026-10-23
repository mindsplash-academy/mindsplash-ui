import Image from "next/image";

export default function ImageCard({
  image,
  name,
  programme,
  result,
  zoomImage = false,
}: {
  image: string;
  name: string;
  programme?: string;
  result?: string;
  zoomImage?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-[14px] border border-image-border">
      <figcaption className="bg-gradient-to-r from-gradient-start to-gradient-end text-center text-[17px] font-bold leading-[29px] tracking-[0px] text-white">
        {name}
      </figcaption>
      <div className="relative h-[242px] w-[194px] overflow-hidden bg-white">
        <Image
          src={image}
          alt={`${name}${programme ? `, ${programme}` : ""}`}
          fill
          sizes="194px"
          className={`object-cover object-center ${zoomImage ? "scale-[1.12]" : ""}`}
        />
      </div>
      {programme && (
        <div className="min-h-[82px] bg-secondary-foreground px-3 py-3 text-center text-sm leading-5 text-secondary">
          <span className="block font-semibold">{programme}</span>
          {result && <span className="mt-1 block font-bold text-gradient-start">{result}</span>}
        </div>
      )}
    </figure>
  );
}
