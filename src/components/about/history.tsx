import Baner from "@/assets/images/about/history-baner.png";
import Workers from "@/assets/images/about/workers.png";
import Creator from "@/assets/images/about/creator.png";
import AboutProduct from "@/assets/images/about/product-ab.png";
import AboutProduct2 from "@/assets/images/about/product-ab2.png";
import Image from "next/image";

const History = () => {
  return (
    <>
      {/* 1. История компании - Banner Section */}
      <div className="mt-20 md:mt-40 relative flex items-center justify-center min-h-[400px]">
        {/* Fon rasmi */}
        <div className="absolute inset-0 z-0">
          <Image src={Baner} alt="baner" fill className="object-cover" />
        </div>

        {/* Kontent qismi */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[80%] max-w-[1920px] mx-auto gap-10 py-10">
          <div className="w-full md:w-[50%]" data-aos="zoom-in" data-aos-duration="800">
            <Image
              src={Workers}
              alt="workers"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
          <div className="w-full md:w-[45%] md:text-inherit" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="150">
            <h1 className="text-3xl md:text-4xl font-bold">История компании</h1>
            <p className="mt-3 text-sm md:text-base text-[#484D53] leading-relaxed">
              В 2022 году под брендом Shumbola впервые в Узбекистане

              организовали фабричную переработку, производство и реализацию

              продукции из семян подсолнечника. С 2024 года ERMAK — первый и

              единственный в Узбекистане производитель курта в фабричных

              условиях. Мы постоянно расширяем линейку продукции. Под единым

              брендом ERMAK сегодня выпускаются семечки, курт, сухофрукты и

              сушки. Со дня основания девизом компании стал слоган: «Полезно,

              вкусно, чисто». Этим главным критериям соответствует каждый

              продукт торговой марки ERMAK.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Creator - Direktor qismi */}
      <div className="mt-20 md:mt-40 w-[90%] md:w-[80%] max-w-[1920px] mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 lg:gap-40">
        <div className="w-full md:w-[55%]" data-aos="zoom-in" data-aos-duration="800">
          <p className="text-[#484D53] text-sm md:text-base leading-relaxed italic">
            «Производство продуктов питания – процесс сложный и ответственный...»
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-6">Kasimov Baxtiyor</h1>
          <p className="text-[#484D53]">Директор компании Shumbola</p>
        </div>
        <div className="w-[60%] md:w-[35%] lg:w-[30%]" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="150">
          <Image
            src={Creator}
            alt="creator"
            className="w-full h-auto rounded-full md:rounded-2xl"
          />
        </div>
      </div>

      {/* 3. Foto about - Fotootchet */}
      <div className="mt-20 md:mt-30 w-[90%] md:w-[80%] max-w-[1920px] mx-auto pb-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left" data-aos="zoom-in" data-aos-duration="700">Фотоотчет</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <Image
            src={AboutProduct}
            alt="product"
            className="w-full h-auto rounded-2xl object-cover hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-delay="0"
          />
          <Image
            src={AboutProduct2}
            alt="product2"
            className="w-full h-auto rounded-2xl object-cover hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-delay="150"
          />
          {/* Uchinchi rasm bo'lsa shu yerga qo'shiladi */}
        </div>
      </div>
    </>
  );
};

export default History;