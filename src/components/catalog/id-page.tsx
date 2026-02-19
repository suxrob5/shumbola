"use client";

import Link from "next/link";
import { catalogData } from "../../backend/cat-data";
import Image from "next/image";
import { ProductType } from "@/types/types";
import { usePathname } from "next/navigation";

const IdPage = ({ item }: any) => {
  const pathname = usePathname();

  return (
    <div className="max-w-[1920px] mx-auto px-4 md:px-10 py-10">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-[#368BC6] mb-10 md:mb-14">
        {item.name}
      </h1>

      <section className="max-w-[1200px] w-full lg:w-[85%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {catalogData.map((cat) => {
          const isActive = pathname === `/catalog/${cat.link}`;
          return (
            <Link href={`/catalog/${cat.link}`} key={cat.id} className="w-full">
              <div
                className={`
                  rounded-xl p-4 h-[80px] flex items-center justify-center text-center transition-all duration-300
                  ${isActive ? "bg-[#E8F1F9] text-[#368BC6] shadow-sm" : "bg-[#EFF2F5] hover:bg-gray-200"}
                `}
              >
                <h1 className="text-sm md:text-base font-semibold">
                  {cat.name}
                </h1>
              </div>
            </Link>
          );
        })}
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1200px] w-full lg:w-[85%] mx-auto mt-16 md:mt-20">
        {item.products.map((product: ProductType) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="group flex flex-col items-center"
          >
            <div className="relative w-full aspect-3/4 overflow-hidden rounded-2xl bg-gray-50">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4 text-center">
              <h1 className="text-lg md:text-xl font-semibold text-gray-800">
                {product.name}
              </h1>
              <p className="italic text-[#484D53] text-sm mt-1">
                {product.sizes.join(", ")} мл
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IdPage;