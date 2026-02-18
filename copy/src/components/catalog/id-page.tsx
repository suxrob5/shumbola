"use client";

import Link from "next/link";
import { catalogData } from "../../backend/cat-data";
import Image from "next/image";
import { ProductType } from "@/types/types";
import { usePathname } from "next/navigation";

const IdPage = ({ item }: any) => {
  const pathname = usePathname();
  return (
    <div className="max-w-[1920px] mx-auto px-5">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#368BC6] mb-14">
        {item.name}
      </h1>

      <section className="max-w-[1200px] w-[65%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {catalogData.map((cat) => {
          const isActive = pathname === `/catalog/${cat.link}`;
          return (
            <Link href={cat.link} key={cat.id}>
              <div
                className={`
                 rounded-xl p-5 w-[150px] h-[100px]
                ${isActive ? "bg-[#E8F1F9] text-[#368BC6]" : "bg-[#EFF2F5]"}
                `}
              >
                <h1 className="text-xl font-semibold transition-colors duration-300 group-hover:text-white">
                  {cat.name}
                </h1>
              </div>
            </Link>
          );
        })}
      </section>
      {/* products */}
      <div className="flex items-center justify-between max-w-[1200px] mx-auto w-[65%] mt-20">
        {item.products.map((product: ProductType) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="w-[230px]"
          >
            <div>
              <Image
                src={product.imageUrl}
                alt="img"
                width={230}
                height={300}
                className="rounded-xl"
              />
              <div>
                <h1 className="text-[20px] font-semibold text-center mt-5">
                  {product.name}
                </h1>
                <h1 className="italic text-[#484D53] text-center">
                  {product.sizes.join(", ")} мл
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IdPage;
