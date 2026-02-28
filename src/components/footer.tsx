import MainImg from "@/assets/images/footerImg.png";
import Telegram from "@/assets/icons/tg-blue.png";
import Facebook from "@/assets/icons/facebook-blue.png";
import Image from "next/image";
import Link from "next/link";

const SECTIONS_LEFT = [
  { name: "О компании", href: "/about" },
  { name: "Акции", href: "/discount" },
  { name: "Вакансии", href: "#" },
];

const SECTIONS_RIGHT = [
  { name: "Каталог", href: "/catalog" },
  { name: "Рецепты", href: "#" },
  { name: "Контакты", href: "/contact" },
];

const SOCIALS = [
  { name: "tg", icon: Telegram, href: "https://t.me/shumbolauzz" },
  { name: "fb", icon: Facebook, href: "https://www.instagram.com/shumbola.uz/" },
];

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-[#393F48] text-base md:text-[18px] hover:text-blue-500 hover:translate-x-1 transition-all duration-300"
  >
    {children}
  </Link>
);

const ContactButton = ({ href, text, isLink = true }: { href?: string; text: string; isLink?: boolean }) => {
  const content = <span className="text-base md:text-[18px] font-medium block group-hover:text-blue-600">{text}</span>;
  const containerClass = "bg-[#E8F1F9] rounded-2xl p-3 w-full sm:w-auto hover:bg-blue-100 hover:scale-105 transition-all duration-300 group text-center sm:text-left";

  if (!isLink) return <div className={`${containerClass} cursor-default`}><span className="text-base md:text-[18px] font-medium block">{text}</span></div>;
  return (
    <button className={containerClass}>
      <Link href={href!} className="block">{content}</Link>
    </button>
  );
};

const Footer = () => {
  return (
    <footer className="max-w-[1920px] mx-auto">
      <div className="w-[90%] md:w-[85%] lg:w-[75%] mx-auto border-t border-gray-300 mt-16 md:mt-[100px] pt-10" />
      <div className="w-[90%] md:w-[85%] lg:w-[75%] mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          <Link href="/" className="flex justify-center sm:justify-start" data-aos="fade-up">
            <Image src={MainImg} alt="logo" width={150} className="mix-blend-multiply cursor-pointer hover:opacity-80 transition-opacity h-[140px]" />
          </Link>

          {[SECTIONS_LEFT, SECTIONS_RIGHT].map((section, i) => (
            <div key={i} className="text-center sm:text-left" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
              <h3 className={`text-xl md:text-2xl font-bold mb-4 ${i === 1 ? "hidden sm:block text-transparent" : ""}`}>
                {i === 0 ? "Раздел" : "‎ "}
              </h3>
              <div className="flex flex-col space-y-2 mt-4 sm:mt-0">
                {section.map((link) => <FooterLink key={link.name} href={link.href}>{link.name}</FooterLink>)}
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center sm:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Контакты</h3>
              <div className="flex flex-col gap-3 items-center sm:items-start">
                <ContactButton href="mailto:shumbola@gmail.com" text="shumbola@gmail.com" />
                <ContactButton href="tel:+998339222122" text="+998 33 922 21 22" />
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Контакты</h3>
            <div className="flex flex-col gap-3 items-center sm:items-start">
              <ContactButton text="Ташкент, ул. Кушкурган" isLink={false} />
              <div className="flex gap-3 justify-center sm:justify-start">
                {SOCIALS.map((social) => (
                  <Link key={social.name} href={social.href} target="_blank">
                    <button className="bg-[#E8F1F9] rounded-2xl p-3 cursor-pointer hover:bg-blue-100 hover:scale-110 transition-all duration-300">
                      <Image src={social.icon} alt={social.name} width={25} height={25} />
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E8F1F9] mt-10">
        <h1 className="text-[#368BC6] p-3 text-center">Copyright © 2026, Shumbola production</h1>
      </div>
    </footer>
  );
};

export default Footer;
