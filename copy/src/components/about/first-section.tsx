import VideoBaner from "@/assets/images/video-baner.png";
import Image from "next/image";

const FirstSection = () => {
  return (
    <div className="max-w-[1920px] w-[80%] mx-auto">
      <div className="flex items-center justify-between mt-20">
        <div className="w-[45%]">
          <h1 className="text-4xl font-bold">О бренде</h1>
          <p className="mt-6 text-[#484D53]">
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
        <div className="cursor-pointer w-[50%%]">
          <Image src={VideoBaner} alt="img" className="w-[650px] h-[396px]" />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
