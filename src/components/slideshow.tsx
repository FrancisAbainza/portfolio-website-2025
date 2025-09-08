import Image from "next/image";

interface WorkImage {
  src: string;
  alt: string;
}

interface SlideshowProps {
  worksImages: WorkImage[];
}

export default function Slideshow({ worksImages }: SlideshowProps) {

  return (
    <div className="flex">
      {/* First Row */}
      <div className="flex gap-2 pr-2 mt-2 animate-left">
        {worksImages.map((img, index) => (
          <Image
            src={img.src}
            alt={img.alt}
            width={500}
            height={300}
            key={index}
            className="min-w-[300px] max-w-[20vw] rounded-xl"
          />
        ))}
      </div>
      <div className="flex gap-2 pr-2 mt-2 animate-left">
        {worksImages.map((img, index) => (
          <Image
            src={img.src}
            alt={img.alt}
            width={500}
            height={300}
            key={index}
            className="min-w-[300px] max-w-[20vw] rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}
