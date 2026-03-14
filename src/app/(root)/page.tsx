// components
import Header from "@/components/header";
import BannerCarousel from "@/components/banner-carousel";
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
      {/* Banner side */}
      <div className="mt-[100px]">
        <BannerCarousel />

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
