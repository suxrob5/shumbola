import VideoBaner from "@/assets/images/video-baner.png";
import Image from "next/image";

const FirstSection = () => {
  return (
    <div className="max-w-[1920px] w-[80%] mx-auto">
      <div className="flex items-center justify-between mt-20">
        <div>
          <h1 className="text-4xl font-bold">О бренде</h1>
          <p className="mt-6 text-[#484D53]">
            Бренд Shumbola основан в 1992 году как небольшая семейная компания
            из
            <br />
            трёх человек, с простой, но сильной идеей — создавать натуральные
            <br />
            продукты, вкусу которых можно доверять. За годы развития Shumbola
            <br />
            превратился в международную компанию с более чем 700 сотрудниками, 6
            <br />
            производственными площадками и экспортом в 12+ стран мира. Сегодня
            <br /> продукция Shumbola производится не только в Узбекистане, но и
            на
            <br />
            современных мощностях в Турции, а представительства компании открыты
            в
            <br />
            ОАЭ и Южной Корее. Несмотря на масштаб и международное присутствие,
            <br />
            мы сохраняем свои корни и философию – создавать честные, натуральные
            и
            <br />
            вкусные продукты, сделанные с любовью и ответственностью. Shumbola
            <br />
            продолжает расти, объединяя традиции, технологии и доверие миллионов
            <br />
            потребителей.
          </p>
        </div>
        <div className="cursor-pointer">
          <Image src={VideoBaner} alt="img" className="w-[650px] h-[396px]" />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
