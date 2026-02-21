// image
import About from "@/assets/images/aboutbrand.png";
import Image from "next/image";

const AboutBrand = () => {
  return (
    <div className="w-[90%] md:w-[85%] lg:w-[75%] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div
        className="shrink-0"
        data-aos="fade-right"
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
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay="150"
      >
        <h2 className="text-3xl md:text-4xl font-bold">О бренде</h2>
        <p className="text-base md:text-[19px] text-[#484D53] mt-5 leading-relaxed">
          Бренд Shumbola основан в 2010 году как небольшая семейная компания из
          трёх человек, с простой, но сильной идеей — создавать натуральные
          продукты, вкусу которых можно доверять. За годы развития Shumbola
          превратился в международную компанию с более чем 700 сотрудниками, 6
          производственными площадками и экспортом в 12+ стран мира. Сегодня
          продукция ERMAK производится не только в Узбекистане, но и на
          современных мощностях в Турции, а представительства компании открыты в
          ОАЭ и Южной Корее. Несмотря на масштаб и международное присутствие, мы
          сохраняем свои корни и философию – создавать честные, натуральные и
          вкусные продукты, сделанные с любовью и ответственностью. ERMAK
          продолжает расти, объединяя традиции, технологии и доверие миллионов
          потребителей.
        </p>
      </div>
    </div>
  );
};

export default AboutBrand;
