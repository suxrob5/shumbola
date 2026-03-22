"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Begin from "@/components/name";
import MainImg from "@/assets/images/contact/contact.png";
import { FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { CircleFadingPlus, Mail, MapPin, PhoneCall } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "@/hooks/useTranslation";

//logo
import Telegram from "@/assets/icons/tg-blue.png";
import Facebook from "@/assets/icons/facebook-blue.png";
import Instagram from "@/assets/icons/insta-blue.svg";
import Youtube from "@/assets/icons/youtube-blue.svg";
import Image from "next/image";

const Contact = () => {
  const { t } = useTranslation();

    const SOCIALS = [
    { name: "tg", icon: Telegram, href: "https://t.me/shumbolauzz" },
    { name: "fb", icon: Facebook, href: "https://www.facebook.com/shum.bola.738822" },
    { name: "insta", icon: Instagram, href: "https://www.instagram.com/shumbola.uz/" },
    { name: "youtube", icon: Youtube, href: "https://www.youtube.com/@Shumbola.1991" },
  ];

  return (
    <div>
      <header>
        <Header />
      </header>
      <Begin value={t("nav.contacts")} />
      <main className="mx-auto max-w-[1920px] w-[90%] md:w-[80%] mt-10 md:mt-20 flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Contact input */}
        <div className="bg-[#E8F1F9] rounded-xl p-6 md:p-10 w-full lg:w-[64%]" data-aos="zoom-in" suppressHydrationWarning>
          <h1 className="text-2xl font-bold mb-6" data-aos="zoom-in" data-aos-delay="150" suppressHydrationWarning>
            {t("contact.formTitle")}
          </h1>
          <div className="flex items-center justify-between">
            {/* Input form */}
            <form className=" flex flex-col gap-4 w-full">
              <div data-aos="zoom-in" data-aos-delay="200" className="w-full" suppressHydrationWarning>
                <FieldLabel htmlFor="fish" className="text-base">{t("contact.fio")}</FieldLabel>
                <Input
                  id="fish"
                  type="text"
                  placeholder={t("contact.placeholder")}
                  className="md:text-[16px] h-[50px] text-base bg-white border-none mt-1 w-full"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4" data-aos="zoom-in" data-aos-delay="250" suppressHydrationWarning>
                <div className="w-full">
                  <FieldLabel htmlFor="phone" className="text-base">{t("contact.phone")}</FieldLabel>
                  <Input
                    id="phone"
                    type="number"
                    placeholder={t("contact.placeholder")}
                    className="md:text-[16px] h-[50px] text-base bg-white border-none mt-3 w-full"
                  />
                </div>
                <div className="w-full">
                  <FieldLabel htmlFor="email" className="text-base">{t("contact.email")}</FieldLabel>
                  <Input
                    id="email"
                    type="text"
                    placeholder={t("contact.placeholder")}
                    className="md:text-[16px] h-[50px] text-base bg-white border-none mt-2 w-full"
                  />
                </div>
              </div>
              <div className="w-full" data-aos="zoom-in" data-aos-delay="300" suppressHydrationWarning>
                <FieldLabel htmlFor="comment" className="text-base">{t("contact.message")}</FieldLabel>
                <Textarea id="comment" name="comment" placeholder={t("contact.placeholder")} className="md:text-[16px] h-[100px] text-base bg-white border-none mt-2 w-full" />
              </div>
              <div data-aos="zoom-in" data-aos-delay="300" suppressHydrationWarning>
                <button
                  type="submit"
                  className="mt-2 bg-[#3291D3] hover:bg-[#2578b5] transition-colors text-white font-semibold px-8 py-3 rounded-xl cursor-pointer"
                >
                  {t("contact.send")}
                </button>
              </div>
            </form>
          </div>

        </div>
        {/* About contact */}
        <div className="w-full lg:w-[35%] flex flex-col gap-5">
          <div className="bg-[#E8F1F9] p-5 rounded-xl border border-transparent shadow-sm" data-aos="zoom-in" suppressHydrationWarning>
            <div className="flex items-center justify-start mb-2">
              <PhoneCall color="#368BC6" size={20} className="mr-2" />
              <h1 className="text-[#393F48] text-[16px] md:text-[18px]">{t("contact.phone")}</h1>
            </div>
            <div className="flex flex-col mt-1">
              <Link href="tel:+998339222122" className="font-bold text-[#111827] text-lg lg:text-xl">+998 33 922 21 22</Link>
              <Link href="tel:+998983315155" className="font-bold text-[#111827] text-lg lg:text-xl mt-1">+998 98 331 51 55</Link>
            </div>
          </div>
          <div className="bg-[#E8F1F9] p-5 rounded-xl border border-transparent shadow-sm" data-aos="zoom-in" data-aos-delay="200" suppressHydrationWarning>
            <div className="flex items-center justify-start mb-2">
              <Mail color="#368BC6" size={20} className="mr-2" />
              <h1 className="text-[#393F48] text-[16px] md:text-[18px]">{t("contact.email")}</h1>
            </div>
            <div className="flex flex-col mt-1">
              <Link href="mailto:shumbola@gmail.com" className="font-bold text-[#111827] text-lg lg:text-xl">shumbola@gmail.com</Link>
            </div>
          </div>
          <div className="bg-[#E8F1F9] p-5 rounded-xl border border-transparent shadow-sm" data-aos="zoom-in" data-aos-delay="250" suppressHydrationWarning>
            <div className="flex items-center justify-start mb-2">
              <MapPin color="#368BC6" size={20} className="mr-2" />
              <h1 className="text-[#393F48] text-[16px] md:text-[18px]">{t("contact.addressLabel")}</h1>
            </div>
            <div className="flex flex-col mt-1">
              <Link href="#" className="font-bold text-[#111827] text-lg lg:text-xl leading-snug">{t("footer.address")}</Link>
            </div>
          </div>
          <div className="bg-[#E8F1F9] p-5 rounded-xl border border-transparent shadow-sm" data-aos="zoom-in" data-aos-delay="300" suppressHydrationWarning>
            <div className="flex items-center justify-start mb-4">
              <CircleFadingPlus color="#368BC6" size={20} className="mr-2" />
              <h1 className="text-[#393F48] text-[16px] md:text-[18px]">{t("contact.socialsLabel")}</h1>
            </div>
            <div className="grid grid-cols-1">
               <div className="flex flex-wrap gap-3 justify-start mt-3">
                {SOCIALS.map((social) => (
                  <Link key={social.name} href={social.href} target="_blank">
                    <button className="w-10 h-10 rounded-[10px] bg-white border border-gray-100 flex items-center justify-center text-[#368BC6] hover:bg-blue-100 transition-colors shadow-sm cursor-pointer hover:scale-110">
                      <Image src={social.icon} alt={social.name} width={24} height={24} />
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-20 md:mt-40">
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;

