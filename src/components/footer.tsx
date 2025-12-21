import MainImg from "@/assets/images/footerImg.png";
import Telegram from "@/assets/icons/tg-blue.png";
import Facebook from "@/assets/icons/facebook-blue.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="border max-w-[75%] mx-auto h-[3px] bg-gray-300 mt-[100px]"></div>
      <div className="max-w-[75%] mx-auto mt-[100px]">
        <div className="flex items-center justify-between">
          <div>
            <Image
              src={MainImg}
              alt="img"
              width={150}
              height={150}
              className=" mix-blend-multiply"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Раздел</h1>
            <p className="text-[#393F48] text-[18px] mt-2">О компании</p>
            <p className="text-[#393F48] text-[18px] mt-1">Акции</p>
            <p className="text-[#393F48] text-[18px] mt-1">Вакансии</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">‎ </h1>
            <p className="text-[#393F48] text-[18px] mt-2">Каталог</p>
            <p className="text-[#393F48] text-[18px] mt-1">Рецепты</p>
            <p className="text-[#393F48] text-[18px] mt-1">Контакты</p>
          </div>
          <div className="grid grid-cols-1">
            <h1 className="text-2xl font-bold">Контакты</h1>
            <button className="bg-[#E8F1F9] rounded-2xl p-3 mt-2">
              <Link
                href="mailto:sfd@gmail.com"
                className="text-[18px] font-medium"
              >
                shumbola@gmail.com
              </Link>
            </button>
            <button className="bg-[#E8F1F9] rounded-2xl p-3 mt-2">
              <Link
                href="tel:+998958053996"
                className="text-[18px] font-medium"
              >
                +998 95 805 39 96
              </Link>
            </button>
          </div>
          <div className="grid grid-cols-1">
            <h1 className="text-2xl font-bold">Контакты</h1>
            <button className="bg-[#E8F1F9] rounded-2xl p-3 mt-2">
              <Link
                href="tel:+998958053996"
                className="text-[18px] font-medium"
              >
                Ташкент, ул. kushkurgon
              </Link>
            </button>
            <div className="gap-3">
              <Link href="https://t.me/shumbolauzz" target="_blank">
                <button className="bg-[#E8F1F9] rounded-2xl p-3 mt-2 cursor-pointer">
                  <Image src={Telegram} alt="tg" width={25} height={25} />
                </button>
              </Link>
              <Link
                href="https://www.instagram.com/shumbola.uz/"
                target="_blank"
              >
                <button className="bg-[#E8F1F9] rounded-2xl p-3 mt-2 cursor-pointer ml-3">
                  <Image src={Facebook} alt="tg" width={25} height={25} />
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
