import Image, { StaticImageData } from "next/image";

const Begin = ({ image, className }: { image: StaticImageData, className?: string }) => {
  return (
    <div className={`flex items-center justify-center sm:mt-[250px] mt-[150px] max-w-[1920px] w-[80%] mx-auto ${className}`}>
      <Image src={image} alt="img" />
    </div>
  );
};

export default Begin;
