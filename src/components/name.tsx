import Image, { StaticImageData } from "next/image";

const Begin = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="flex items-center justify-center sm:mt-[250px] mt-[150px] max-w-[1920px] w-[80%]  mx-auto">
      <Image src={image} alt="img" className="" />
    </div>
  );
};

export default Begin;
