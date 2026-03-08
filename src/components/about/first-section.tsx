"use client";

import VideoBaner from "@/assets/images/video-baner.png";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

const FirstSection = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1920px] w-[90%] md:w-[80%] mx-auto py-10 md:py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:w-[45%]" data-aos="zoom-in" data-aos-duration="800">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t("aboutBrand.title")}</h1>
          <p className="mt-6 text-[#484D53] leading-relaxed text-sm md:text-[17px]">
            {t("aboutBrand.description")}
          </p>
        </div>
        <div className="w-full lg:w-[50%] cursor-pointer" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="150">
          <div className="relative w-full h-auto">
            <Image
              src={VideoBaner}
              alt="Shumbola brand video banner"
              priority
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default FirstSection;