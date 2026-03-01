import Image from "next/image";
import Link from "next/link";
import RightIcon from "@/assets/icons/right.png";
import { catalogData } from "@/backend/cat-data";

const CatalogSec = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mt-10">
      {catalogData ? (
        catalogData.map((item, index) => (
          <Link
            key={item.id}
            href={`/catalog/${item.link}`}
            className="group relative overflow-hidden rounded-3xl bg-[#E8F1F9] h-[300px] md:h-[400px] lg:h-[450px] cursor-pointer block"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={index * 120}
          >
            {/* Rasm - Fon sifatida */}
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay - Matn yaxshi o'qilishi uchun */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

            {/* Kontent */}
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10">
              <h1 className="text-white text-2xl md:text-4xl font-bold bg-white/10 backdrop-blur-md self-start rounded-xl px-4 py-2 border border-white/20">
                {item.name}
              </h1>

              <div className="self-start">
                <button className="flex items-center gap-2 bg-white hover:bg-gray-100 transition-colors rounded-xl px-6 py-3 font-bold text-black shadow-lg cursor-pointer">
                  Подробнее
                  <Image
                    src={RightIcon}
                    alt="right icon"
                    width={18}
                    height={18}
                  />
                </button>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="col-span-full text-center py-20">
          <h1 className="text-2xl font-medium">Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default CatalogSec;