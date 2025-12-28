import Link from "next/link";
import { catalogData } from "./ct-data";
import Image from "next/image";
import { ProductType } from "@/types/types";

const IdPage = ({ item }: any) => {
  console.log(item);

  // group bg-linear-to-br from-[#E8F1F9] to-[#bfe7f6] rounded-2xl h-[120px] flex items-center justify-center shadow-md transition-all
  //       duration-300 hover:shadow-2xl hover:-translate-y-2 hover:from-[#3291D3] hover:to-[#5bb0ff] cursor-pointer
  return (
    <div className="max-w-[1920px] mx-auto px-5">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#3f68ce] mb-14">
        {item.name}
      </h1>

      <section className="max-w-[1200px] w-[65%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {catalogData.map((item) => (
          <Link href={item.link} key={item.id}>
            <div className="bg-[#E8F1F9] rounded-xl p-5 w-[150px] h-[100px]">
              <h1 className="text-xl font-bold text-[#368BC6] transition-colors duration-300 group-hover:text-white">
                {item.name}
              </h1>
            </div>
          </Link>
        ))}
      </section>
      {/* products */}
      <div className="flex items-center justify-between max-w-[1200px] mx-auto w-[65%] mt-20">
        {item.products.map((product: ProductType) => (
          <div key={product.id} className="w-[230px]">
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
                {product.size} мл
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdPage;
