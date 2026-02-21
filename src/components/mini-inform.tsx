"use client";

import { InformData } from "@/backend/inform-data";
import Image from "next/image";

const MiniInform = () => {
  return (
    <div className="w-[90%] md:w-[85%] lg:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 mt-16 md:mt-20">
      {InformData.map((item, index) => (
        <div
          key={item.id}
          className="bg-[#E8F1F9] w-full h-auto px-6 py-4 gap-1 rounded-2xl"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay={index * 100}
        >
          <div>
            <Image
              src={item.imageUrl}
              alt="icon"
              className="mix-blend-multiply"
              width={100}
              height={100}
            />
            <p className="text-4xl font-bold" style={{ color: "#3291D3" }}>
              {item.number}
            </p>
          </div>
          <div>
            <p className="text-black font-semibold text-xl md:text-2xl mt-2">
              {item.about}
            </p>
            <p className="text-[#484D53] mt-1 text-sm md:text-base">
              {item.more}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiniInform;
