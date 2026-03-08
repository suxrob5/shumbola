"use client";

// image
import About from "@/assets/images/aboutbrand.png";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

const AboutBrand = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[90%] md:w-[85%] lg:w-[75%] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div
        className="shrink-0"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <Image
          src={About}
          alt="About Shumbola"
          width={330}
          height={400}
          className="w-full max-w-[330px] h-auto rounded-lg"
        />
      </div>
      <div
        className="text-center lg:text-left"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="150"
      >
        <h2 className="text-3xl md:text-4xl font-bold">{t("aboutBrand.title")}</h2>
        <p className="text-base md:text-[19px] text-[#484D53] mt-5 leading-relaxed">
          {t("aboutBrand.description")}
        </p>
      </div>
    </div>
  );
};

export default AboutBrand;
