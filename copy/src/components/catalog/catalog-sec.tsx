import Image from "next/image";
import Link from "next/link";
import RightIcon from "@/assets/icons/right.png";
import { catalogData } from "@/backend/cat-data";

const CatalogSec = () => {
  return (
    <>
      {catalogData ? (
        catalogData.map((item) => (
          <div
            key={item.id}
            className="bg-[#E8F1F9] w-full mt-5 rounded-2xl h-[20%] relative"
          >
            <Image
              src={item.img}
              alt="img"
              className="rounded-2xl w-full h-[20%]"
            />
            <h1 className="text-white text-4xl font-bold absolute top-10 left-5 bg-white/15 rounded-xl p-1">
              {item.name}
            </h1>
            <Link
              href={`/catalog/${item.link}`}
              className="absolute bottom-10 left-5"
            >
              <button className="flex items-center gap-1 bg-white rounded-xl p-3 font-semibold cursor-pointer">
                Подробнее
                <Image
                  src={RightIcon}
                  alt="right icon"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default CatalogSec;
