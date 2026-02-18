import MainImg from "@/assets/images/footerImg.png";
import Telegram from "@/assets/icons/tg-blue.png";
import Facebook from "@/assets/icons/facebook-blue.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="w-[90%] md:w-[85%] lg:w-[75%] mx-auto border-t border-gray-300 mt-16 md:mt-[100px] pt-10"></div>
      <div className="w-[90%] md:w-[85%] lg:w-[75%] mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          <div className="flex justify-center sm:justify-start">
            <Image
              src={MainImg}
              alt="img"
              width={150}
              height={150}
              className=" mix-blend-multiply"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Раздел</h3>
            <div className="space-y-2">
              <p className="text-[#393F48] text-base md:text-[18px]">
                О компании
              </p>
              <p className="text-[#393F48] text-base md:text-[18px]">Акции</p>
              <p className="text-[#393F48] text-base md:text-[18px]">
                Вакансии
              </p>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-transparent sm:text-black hidden sm:block">
              ‎{" "}
            </h3>
            <div className="space-y-2">
              <p className="text-[#393F48] text-base md:text-[18px]">Каталог</p>
              <p className="text-[#393F48] text-base md:text-[18px]">Рецепты</p>
              <p className="text-[#393F48] text-base md:text-[18px]">
                Контакты
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Контакты</h3>
              <div className="flex flex-col gap-3 items-center sm:items-start">
                <button className="bg-[#E8F1F9] rounded-2xl p-3 w-full sm:w-auto">
                  <Link
                    href="mailto:shumbola@gmail.com"
                    className="text-base md:text-[18px] font-medium block"
                  >
                    shumbola@gmail.com
                  </Link>
                </button>
                <button className="bg-[#E8F1F9] rounded-2xl p-3 w-full sm:w-auto">
                  <Link
                    href="tel:+998958053996"
                    className="text-base md:text-[18px] font-medium block"
                  >
                    +998 95 805 39 96
                  </Link>
                </button>
                <button className="bg-[#E8F1F9] rounded-2xl p-3 w-full sm:w-auto">
                  <Link
                    href="tel:+998958053996"
                    className="text-base md:text-[18px] font-medium block"
                  >
                    Ташкент, ул. kushkurgon
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex gap-3 justify-center sm:justify-start">
              <Link href="https://t.me/shumbolauzz" target="_blank">
                <button className="bg-[#E8F1F9] rounded-2xl p-3 cursor-pointer hover:bg-blue-100 transition-colors">
                  <Image src={Telegram} alt="tg" width={25} height={25} />
                </button>
              </Link>
              <Link
                href="https://www.instagram.com/shumbola.uz/"
                target="_blank"
              >
                <button className="bg-[#E8F1F9] rounded-2xl p-3 cursor-pointer hover:bg-blue-100 transition-colors">
                  <Image src={Facebook} alt="fb" width={25} height={25} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* created */}
      <div className="bg-[#E8F1F9] mt-10">
        <h1 className="text-[#368BC6] p-3 text-center">
          Copyright © 2025, Shumbola production
        </h1>
      </div>
    </div>
  );
};

export default Footer;
