import Image from "next/image";

export default function ImageCard({image, name}: {image: string, name: string}) {
  return (
    <figure className="border border-image-border rounded-[14px] overflow-hidden">
      <figcaption className="text-center text-foreground font-bold text-[17px] leading-[29px] tracking-[0px] bg-gradient-to-r from-gradient-start to-gradient-end">
        {name}
      </figcaption>
      <Image src={image} alt={`mindsplash-${name}`} width={194} height={242} />
    </figure>
  );
}
