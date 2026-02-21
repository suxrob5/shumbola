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
      <div className="relative w-full h-[500px] md:h-auto" data-aos="fade-in" data-aos-duration="1000">
        <Image
          src={Baner}
          alt="baner"
          className="w-full h-full md:h-auto object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-center text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-7xl px-4 drop-shadow-md" data-aos="fade-up">
            Shumbola — с 2010 года <br className="hidden sm:block" /> ваши
            любимые снеки
          </h1>
        </div>
      </div>
      <main className="mt-10 md:mt-20">
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
