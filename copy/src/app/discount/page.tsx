import Header from "@/components/header";
import Begin from "@/components/name";
import MainImg from "@/assets/images/discount.png";
import Footer from "@/components/footer";
const Discount = () => {
  return (
    <div>
      <header>
        <Header />
        <Begin image={MainImg} />
        <main className="mt-[200px] flex justify-center items-center">
          <h1 className="text-3xl text-gray-400 font-semibold">
            На данный момент акций нет
          </h1>
        </main>
        <footer className="mt-[300px]">
          <Footer />
        </footer>
      </header>
    </div>
  );
};

export default Discount;
