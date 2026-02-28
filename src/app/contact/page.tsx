
import Footer from "@/components/footer";
import Header from "@/components/header";
import Begin from "@/components/name";
import MainImg from "@/assets/images/contact/contact.png";
import { FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Begin image={MainImg} />
      <main className="mx-auto max-w-[1920px] w-[90%] md:w-[80%] mt-10 md:mt-20 flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Contact input */}
        <div className="bg-[#E8F1F9] rounded-xl p-6 md:p-10 w-full lg:w-[64%]" data-aos="zoom-in">
          <h1 className="text-2xl font-bold mb-6" data-aos="zoom-in" data-aos-delay="150">
            Оставьте заявку, мы с вами свяжемся
          </h1>
          <div className="flex items-center justify-between">
            {/* Input form */}
            <form className=" flex flex-col gap-4 w-full">
              <div data-aos="zoom-in" data-aos-delay="200" className="w-full">
                <FieldLabel htmlFor="fish" className="text-base">ФИО:</FieldLabel>
                <Input
                  id="fish"
                  type="text"
                  placeholder="Введите..."
                  className="md:text-[16px] h-[50px] text-base bg-white border-none mt-1 w-full"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4" data-aos="zoom-in" data-aos-delay="250">
                <div className="w-full">
                  <FieldLabel htmlFor="phone" className="text-base">Телефон:</FieldLabel>
                  <Input
                    id="phone"
                    type="number"
                    placeholder="Введите..."
                    className="md:text-[16px] h-[50px] text-base bg-white border-none mt-3 w-full"
                  />
                </div>
                <div className="w-full">
                  <FieldLabel htmlFor="email" className="text-base">Почта:</FieldLabel>
                  <Input
                    id="email"
                    type="text"
                    placeholder="Введите..."
                    className="md:text-[16px] h-[50px] text-base bg-white border-none mt-2 w-full"
                  />
                </div>
              </div>
              <div className="w-full" data-aos="zoom-in" data-aos-delay="300">
                <FieldLabel htmlFor="comment" className="text-base">Сообщение:</FieldLabel>
                <Textarea id="comment" name="comment" placeholder="Введите..." className="md:text-[16px] h-[100px] text-base bg-white border-none mt-2 w-full" />
              </div>
              <div data-aos="zoom-in" data-aos-delay="300">
                <button
                  type="submit"
                  className="mt-2 bg-[#3291D3] hover:bg-[#2578b5] transition-colors text-white font-semibold px-8 py-3 rounded-xl cursor-pointer"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>

        </div>
        {/* About contact */}
        <div className="w-full lg:w-[35%] flex flex-col gap-5">
          <div className="bg-[#E8F1F9] p-4 rounded-xl" data-aos="zoom-in">
            <div className="flex items-center justify-start ">
              <PhoneCall color="#368BC6" size={20} className="mr-2" />
              <h1 className="text-[#393F48] text-[18px]">Телефон:</h1>
            </div>
            <div className="grid grid-cols-1">
              <Link href="tel:+998339222122" className="font-bold text-xl">+998 33 922 21 22</Link>
              <Link href="tel:+998983315155" className="font-bold text-xl">+998 98 331 51 55</Link>
            </div>
          </div>
          <div className="bg-[#E8F1F9] p-4 rounded-xl" data-aos="zoom-in" data-aos-delay="200">
            <div className="flex items-center justify-start ">
              <PhoneCall color="#368BC6" size={20} className="mr-2" />
              <h1 className="text-[#393F48] text-[18px]">Телефон:</h1>
            </div>
            <div className="grid grid-cols-1">
              <Link href="tel:+998958053996" className="font-bold text-xl">+998 95 805 39 96</Link>
              <Link href="tel:+998958053996" className="font-bold text-xl">+998 95 805 39 96</Link>
            </div>
          </div>
          <div className="bg-[#E8F1F9] p-4 rounded-xl" data-aos="zoom-in" data-aos-delay="250">
            <div className="flex items-center justify-start ">
              <PhoneCall color="#368BC6" size={20} className="mr-2" />
              <h1 className="text-[#393F48] text-[18px]">Телефон:</h1>
            </div>
            <div className="grid grid-cols-1">
              <Link href="tel:+998958053996" className="font-bold text-xl">+998 95 805 39 96</Link>
              <Link href="tel:+998958053996" className="font-bold text-xl">+998 95 805 39 96</Link>
            </div>
          </div>
          <div className="bg-[#E8F1F9] p-4 rounded-xl" data-aos="zoom-in" data-aos-delay="300">
            <div className="flex items-center justify-start ">
              <PhoneCall color="#368BC6" size={20} className="mr-2" />
              <h1 className="text-[#393F48] text-[18px]">Телефон:</h1>
            </div>
            <div className="grid grid-cols-1">
              <Link href="tel:+998958053996" className="font-bold text-xl">+998 95 805 39 96</Link>
              <Link href="tel:+998958053996" className="font-bold text-xl">+998 95 805 39 96</Link>
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

