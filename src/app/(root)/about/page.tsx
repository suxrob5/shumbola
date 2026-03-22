"use client";

// components
import History from "@/components/about/history";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Begin from "@/components/name";
import FirstSection from "@/components/about/first-section";

// others
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Header */}
      <Header />
      <Begin value={t("nav.about")} />

      <main className="mt-[100px]">
        {/* first section */}
        <FirstSection />
        {/* Seacond section */}
        <History />
      </main>
      {/* footer */}
      <footer className="mt-40">
        <Footer />
      </footer>
    </div>
  );
};

export default About;
