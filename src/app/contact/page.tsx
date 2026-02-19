
import Footer from "@/components/footer";
import Header from "@/components/header";
import Begin from "@/components/name";
import MainImg from "@/assets/images/contact.png";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const Contact = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Begin image={MainImg} />
      <main className="mx-auto max-w-[1920px] w-[80%]">
        <div className="bg-[#E8F1F9] rounded-xl p-3">
          <h1 className=" text-2xl font-bold">
            {" "}
            Оставьте заявку, мы с вами свяжемся
          </h1>
          <form className="w-[60%]">
            <FieldLabel htmlFor="fish">ФИО:</FieldLabel>
            <Input
              id="fish"
              type="text"
              placeholder="Введите..."
              className="bg-white h-[50px] text-xl"
            />
            <div className="flex items-center justify-between gap-4">
              <div className="text-xl">
                <FieldLabel htmlFor="phone">Телефон:</FieldLabel>
                <Input
                  id="phone"
                  type="number"
                  placeholder="Введите..."
                  className="bg-white h-[50px] text-xl"
                />
              </div>
              <div>
                <FieldLabel htmlFor="email">Почта:</FieldLabel>
                <Input
                  id="email"
                  type="text"
                  placeholder="Введите..."
                  className="bg-white h-[50px] text-xl"
                />
              </div>
            </div>
          </form>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
