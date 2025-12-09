"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// Images
import Search from "../../public/search.png";
import Telegram from "../assets/icons/telegram.png";
import Facebook from "../assets/icons/facebook.png";
import Rusian from "../assets/icons/ru.png";
import Shumbola from "../assets/icons/shumbola.png";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between max-w-[90%] mx-auto transition-all duration-300 ${
        scrolled ? "h-[50px]" : "h-[100px]"
      }`}
    >
      <div className="flex items-center gap-5">
        <button className="flex items-center justify-center cursor-pointer">
          <Image src={Search} alt="search" width={48} height={48} />
        </button>
        <Link href="#">
          <Image src={Telegram} alt="telegram" width={25} height={25} />
        </Link>
        <Link href="#">
          <Image src={Facebook} alt="facebook" width={25} height={25} />
        </Link>
      </div>

      <div className="flex items-center gap-5">
        <ul className="flex items-center justify-between gap-5 text-white">
          <Link href="/about" className={scrolled ? "text-lg" : "text-[20px]"}>
            О компании
          </Link>
          <Link
            href="/catalog"
            className={scrolled ? "text-lg" : "text-[20px]"}
          >
            Каталог
          </Link>
          <Link
            href="/discount"
            className={scrolled ? "text-lg" : "text-[20px]"}
          >
            Акции
          </Link>
          <div className="shrink-0 mx-4">
            <Link href="/">
              <Image
                src={Shumbola}
                alt="logo"
                className={`transition-all duration-300 ${
                  scrolled ? "w-[60px] h-[60px]" : "w-[100px] h-[100px]"
                }`}
              />
            </Link>
          </div>
          <Link
            href="/restesption"
            className={scrolled ? "text-lg" : "text-[20px]"}
          >
            Рецепты
          </Link>
          <Link
            href="/vacantion"
            className={scrolled ? "text-lg" : "text-[20px]"}
          >
            Вакансии
          </Link>
          <Link
            href="/contact"
            className={scrolled ? "text-lg" : "text-[20px]"}
          >
            Контакты
          </Link>
        </ul>
      </div>
      <div
        className={`${
          scrolled ? "text-lg" : "text-[20px]"
        } flex items-center gap-2 text-white`}
      >
        <Image src={Rusian} alt="language" width={25} height={25} />
        <select className="Languages">
          <option value="ru" className="text-black">
            Русский
          </option>
          <option value="en" className="text-black">
            English
          </option>
          <option value="uz" className="text-black">
            Uzbek
          </option>
        </select>
      </div>
    </header>
  );
};

export default Header;
