"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

// Images
import Telegram from "../assets/icons/tg-blue.png";
import Instagram from "../assets/icons/insta.png";
import Rusian from "../assets/icons/ru.png";
// import Shumbola from "../assets/icons/shumbola_red.png";
import Shumbola from "../assets/icons/main.png";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  // ${scrolled ? "h-[60px] lg:h-[70px]" : "h-[80px] lg:h-[100px]"}

  return (
    <header
      className={`fixed top-0 left-0 max-w-full w-full z-50
        transition-all duration-300 border-b border-blue-300/30
        backdrop-blur-md bg-[#FEF6E1]/70
        ${scrolled ? "h-[60px] lg:h-[70px]" : "h-[80px] lg:h-[100px]"}
      `}
    >
      <div className="max-w-[90%] mx-auto flex items-center justify-between w-full h-full">
        {/* Left Side: Socials (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="https://t.me/shumbolauzz" target="_blank" className="hover:scale-110 transition-transform duration-300">
            <Image src={Telegram} alt="telegram" width={25} height={25} />
          </Link>
          <Link href="https://www.instagram.com/shumbola.uz/" target="_blank" className="hover:scale-110 transition-transform duration-300">
            <Image src={Instagram} alt="Instagram" width={25} height={25} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#368BC6] p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Center: Navigation (Desktop) */}
        <div className="hidden lg:flex items-center gap-5">
          <ul
            className={`flex items-center justify-between gap-5 text-[#368BC6] ${scrolled ? "text-lg" : "text-[20px]"}`}
          >
            <Link href="/about" className="hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-300">О компании</Link>
            <Link href="/catalog" className="hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-300">Каталог</Link>

            <div className="shrink-0 mx-4">
              <Link href="/" className="hover:scale-110 transition-transform duration-300 block">
                <Image
                  src={Shumbola}
                  alt="logo"
                  width={90}
                  height={100}
                  className={`transition-all duration-300 ${scrolled ? "w-[60px] h-[60px]" : "w-[90px] h-[90px]"
                    }`}
                />
              </Link>
            </div>
            <Link href="/discount" className="hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-300">Акции</Link>
            {/* <Link href="/restesption">Рецепты</Link>
            <Link href="/vacantion">Вакансии</Link> */}
            <Link href="/contact" className="hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-300">Контакты</Link>
          </ul>
        </div>

        {/* Mobile Logo (Center) */}
        <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="hover:scale-110 transition-transform duration-300 block">
            <Image
              src={Shumbola}
              alt="logo"
              width={50}
              height={60}
              className={`transition-all duration-300 ${scrolled ? "w-[45px] h-[45px]" : "w-[60px] h-[60px]"
                }`}
            />
          </Link>
        </div>

        {/* Right Side: Language & Search */}
        <div className="flex items-center gap-2 text-[#368BC6]">
          <div
            className={`${scrolled ? "text-lg" : "text-[20px]"} hidden sm:flex items-center gap-2`}
          >
            <Image src={Rusian} alt="language" width={25} height={25} />
            <select className="Languages bg-transparent border-none outline-none text-[#368BC6] option:text-black cursor-pointer font-medium">
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
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed top-[80px] left-0 w-full bg-[#FEF6E1] backdrop-blur-md transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 py-0"
          } ${scrolled ? "top-[60px]" : "top-[80px]"}`}
      >
        <ul className="flex flex-col items-center gap-6 text-[#368BC6] text-lg font-semibold">
          <Link href="/about" onClick={toggleMenu}>
            О компании
          </Link>
          <Link href="/catalog" onClick={toggleMenu}>
            Каталог
          </Link>
          <Link href="/discount" onClick={toggleMenu}>
            Акции
          </Link>
          {/* <Link href="/restesption" onClick={toggleMenu}>
            Рецепты
          </Link>
          <Link href="/vacantion" onClick={toggleMenu}>
            Вакансии
          </Link> */}
          <Link href="/contact" onClick={toggleMenu}>
            Контакты
          </Link>

          <div className="flex gap-6 mt-4">
            <Link href="https://youtube.com/">
              <Image src={Telegram} alt="telegram" width={30} height={30} />
            </Link>
            <Link href="#">
              <Image src={Instagram} alt="Instagram" width={30} height={30} />
            </Link>

          </div>
          <div
            className={`${scrolled ? "text-lg" : "text-[20px]"} flex items-center gap-2`}
          >
            <Image src={Rusian} alt="language" width={25} height={25} />
            <select className="Languages bg-transparent border-none outline-none text-[#368BC6] option:text-black cursor-pointer font-medium">
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
        </ul>
      </div>
    </header>
  );
};

export default Header;
