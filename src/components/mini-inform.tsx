"use client";

import { InformData } from "@/lib/data";
import Image from "next/image";

const MiniInform = () => {
  return (
    <div className="max-w-[75%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:flex items-center justify-between gap-8 mt-20">
      {InformData.map((item) => (
        <div
          key={item.id}
          className="bg-[#E8F1F9] w-full xl:w-[330px] h-[350px] p-5 rounded-3xl"
        >
          <Image
            src={item.imageUrl}
            alt="logo"
            className="mix-blend-multiply"
            width={125}
            height={125}
          />

          <p className="text-4xl font-bold" style={{ color: "#3291D3" }}>
            {item.number}
          </p>
          <p className="text-black font-semibold text-2xl mt-2">{item.about}</p>
          <p className="text-[#484D53] mt-1">{item.more}</p>
        </div>
      ))}
    </div>
  );
};

export default MiniInform;
