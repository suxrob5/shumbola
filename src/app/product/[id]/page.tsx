"use client";

import NotFound from "@/app/not-found";
import { ProductData } from "@/backend/products-data";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { use } from "react";

const ProductId = (props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ size?: string }>;
}) => {
  const params = use(props.params);
  const searchParams = use(props.searchParams);
  const { id } = params;
  const { size } = searchParams;
  const { t, language } = useTranslation();

  const product = ProductData.find((product) => product.id === Number(id));

  if (!product) {
    return <NotFound />;
  }

  const currentSize = size ? Number(size) : product.sizes[0];

  const getLocalizedName = (obj: any) => {
    if (language === "ru") return obj.name;
    if (language === "uz") return obj.name_uz || obj.name;
    if (language === "en") return obj.name_en || obj.name;
    return obj.name;
  };

  const getLocalizedDesc = (obj: any) => {
    if (language === "ru") return obj.description;
    if (language === "uz") return obj.description_uz || obj.description;
    if (language === "en") return obj.description_en || obj.description;
    return obj.description;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Header />
      </header>

      <main className="grow flex items-center">
        <div className="mx-auto max-w-[1920px] w-[90%] lg:w-[80%] xl:w-[70%] py-10 md:py-20 lg:mt-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">

            {/* Rasm qismi */}
            <div
              className="w-full lg:w-[45%] flex justify-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="relative w-full max-w-[500px] aspect-square">
                <Image
                  src={product.imageUrl}
                  alt={getLocalizedName(product)}
                  fill
                  priority
                  className="rounded-3xl object-contain md:object-cover shadow-2xl"
                />
              </div>
            </div>

            {/* Ma'lumotlar qismi */}
            <div className="w-full lg:w-[50%] flex flex-col">
              <h1
                className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                {getLocalizedName(product)}
              </h1>

              <p
                className="text-base md:text-xl text-gray-600 mt-6 leading-relaxed"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                {getLocalizedDesc(product)}
              </p>

              <div
                className="mt-10"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  {t("product.chooseSize")}
                </p>
                <div className="flex flex-wrap gap-4">
                  {product.sizes.map((s, i) => (
                    <Link key={i} href={`/product/${id}?size=${s}`} scroll={false}>
                      <button
                        className={`min-w-[100px] px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300 active:scale-95 shadow-md
                        ${currentSize === s
                            ? "bg-cyan-500 text-white scale-105 shadow-cyan-200"
                            : "bg-gray-100 text-gray-700 hover:bg-blue-400 hover:text-white"
                          }`}
                      >
                        {s} {t("product.ml")}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Qo'shimcha ma'lumot uchun joy (masalan narx yoki buyurtma tugmasi) */}
              <div
                className="mt-12 p-6 bg-[#E8F1F9] rounded-2xl border border-blue-100"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <p className="text-blue-800 font-medium italic">
                  {t("product.naturalNotice")}
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProductId;