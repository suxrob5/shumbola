
import Footer from "@/components/footer";
import Header from "@/components/header";
import Begin from "@/components/name";
import MainImg from "@/assets/images/contact.png";
import { FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const Contact = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Begin image={MainImg} />
      <main className="mx-auto max-w-[1920px] w-[80%] mt-10 md:mt-20">
        <div className="bg-[#E8F1F9] rounded-xl p-6 md:p-10" data-aos="fade-up" data-aos-duration="700">
          <h1 className="text-2xl font-bold mb-6" data-aos="fade-up" data-aos-delay="100">
            Оставьте заявку, мы с вами свяжемся
          </h1>
          <form className="w-full md:w-[60%] flex flex-col gap-4">
            <div data-aos="fade-up" data-aos-delay="200">
              <FieldLabel htmlFor="fish">ФИО:</FieldLabel>
              <Input
                id="fish"
                type="text"
                placeholder="Введите..."
                className="bg-white h-[50px] text-xl"
              />
            </div>
            <div className="flex items-center justify-between gap-4" data-aos="fade-up" data-aos-delay="300">
              <div className="text-xl w-full">
                <FieldLabel htmlFor="phone">Телефон:</FieldLabel>
                <Input
                  id="phone"
                  type="number"
                  placeholder="Введите..."
                  className="bg-white h-[50px] text-xl"
                />
              </div>
              <div className="w-full">
                <FieldLabel htmlFor="email">Почта:</FieldLabel>
                <Input
                  id="email"
                  type="text"
                  placeholder="Введите..."
                  className="bg-white h-[50px] text-xl"
                />
              </div>
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
      </main>
      <footer className="mt-20 md:mt-40">
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;

