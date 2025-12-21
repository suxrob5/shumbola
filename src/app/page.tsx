// images
import Image from "next/image";
import Baner from "@/assets/images/baner.png";
// components
import Header from "@/components/header";
import AboutBrand from "@/components/about-brand";
import MiniInform from "@/components/mini-inform";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      {/* Header */}
      <div>
        <Header />
      </div>
      {/* Baner side */}
      <div>
        <Image src={Baner} alt="baner" className="abolute left-0 w-full" />
        <div className="absolute w-full mt-[-300px] max-w-[1920px]">
          <h1 className="text-center text-white font-extrabold text-7xl">
            Shumbola — с 2010 года <br /> ваши любимые снеки
          </h1>
        </div>
      </div>
      <main className="mt-20">
        {/* About brand */}
        <AboutBrand />
        {/* Information card */}
        <MiniInform />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
