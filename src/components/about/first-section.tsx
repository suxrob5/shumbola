import VideoBaner from "@/assets/images/video-baner.png";
import Image from "next/image";

const FirstSection = () => {
  return (
    <div className="max-w-[1920px] w-[90%] md:w-[80%] mx-auto py-10 md:py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:w-[45%]">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">О бренде</h1>
          <p className="mt-6 text-[#484D53] leading-relaxed text-sm md:text-[17px]">
            Бренд Shumbola основан в 1992 году как небольшая семейная компания
            из трёх человек, с простой, но сильной идеей — создавать натуральные
            продукты, вкусу которых можно доверять. За годы развития Shumbola
            превратился в международную компанию с более чем 700 сотрудниками, 6
            производственными площадками и экспортом в 12+ стран мира. Сегодня
            продукция Shumbola производится не только в Узбекистане, но и на
            современных мощностях в Турции, а представительства компании открыты
            в ОАЭ и Южной Корее. Несмотря на масштаб и международное
            присутствие, мы сохраняем свои корни и философию – создавать
            честные, натуральные и вкусные продукты, сделанные с любовью и
            ответственностью. Shumbola продолжает расти, объединяя традиции,
            технологии и доверие миллионов потребителей.
          </p>
        </div>
        <div className="w-full lg:w-[50%] cursor-pointer">
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