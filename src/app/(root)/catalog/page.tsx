"use client";

// components
import Begin from "@/components/name";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CatalogSec from "@/components/catalog/catalog-sec";

// others
import { useTranslation } from "@/hooks/useTranslation";

const Catalog = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <Begin value={t("nav.catalog")} />

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