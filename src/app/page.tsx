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
    <div className="max-w-[1920px]">
      {/* Header */}
      <div>
        <Header />
      </div>
      {/* Baner side */}
      <div>
        <Image src={Baner} alt="baner" className="abolute" />
        <div className="absolute w-full mt-[-380px]">
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
      <div className="border max-w-[75%] mx-auto h-[3px] bg-gray-300 mt-[100px]"></div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
