
import Footer from "@/components/footer";
import Header from "@/components/header";
import Begin from "@/components/name";
import MainImg from "@/assets/images/contact.png";
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
      <main className="mx-auto max-w-[1920px] w-[80%] mt-10 md:mt-20 flex justify-between items-center">
        {/* Contact input */}
        <div className="bg-[#E8F1F9] rounded-xl p-6 md:p-5 md:px-10 w-full md:w-[64%] max-h-[600px] h-[520px]">
          <h1 className="text-2xl font-bold mb-6" data-aos="fade-up" data-aos-delay="100">
            Оставьте заявку, мы с вами свяжемся
          </h1>
          <div className="flex items-center justify-between">
            {/* Input form */}
            <form className=" flex flex-col gap-4 w-full">
              <div data-aos="fade-up" data-aos-delay="200" className="w-full">
                <FieldLabel htmlFor="fish" className="text-base">ФИО:</FieldLabel>
                <Input
                  id="fish"
                  type="text"
                  placeholder="Введите..."
                  className="md:text-[16px] h-[50px] text-base bg-white border-none mt-1 w-full"
                />
              </div>
              <div className="flex items-center justify-between gap-4" data-aos="fade-up" data-aos-delay="300">
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
              <div className="w-full">
                <FieldLabel htmlFor="comment" className="text-base">Сообщение:</FieldLabel>
                <Textarea id="comment" name="comment" placeholder="Введите..." className="md:text-[16px] h-[100px] text-base bg-white border-none mt-2 w-full" />
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
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
        <div className="w-full md:w-[35%]">
          <div className=" flex flex-col gap-4">
            <div className="bg-[#E8F1F9] p-4 rounded-xl">
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
          <div className=" flex flex-col gap-4 mt-5">
            <div className="bg-[#E8F1F9] p-4 rounded-xl">
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
          <div className=" flex flex-col gap-4 mt-5">
            <div className="bg-[#E8F1F9] p-4 rounded-xl">
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
          <div className=" flex flex-col gap-4 mt-5">
            <div className="bg-[#E8F1F9] p-4 rounded-xl">
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
        </div>
      </main>
      <footer className="mt-20 md:mt-40">
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;

