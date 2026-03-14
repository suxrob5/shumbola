import Header from "@/components/header";
import Begin from "@/components/name";
import MainImg from "@/assets/images/catalog/main.png";
import Footer from "@/components/footer";
import CatalogSec from "@/components/catalog/catalog-sec";

const Catalog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <Begin image={MainImg} />

      <main className="max-w-[1920px] w-[90%] md:w-[70%] mx-auto mt-10 md:mt-20 lg:mt-30 grow">
        <section>
          <CatalogSec />
        </section>
      </main>

      <footer className="mt-20 md:mt-40 lg:mt-[200px]">
        <Footer />
      </footer>
    </div>
  );
};

export default Catalog;