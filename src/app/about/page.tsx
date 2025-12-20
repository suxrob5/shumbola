import FirstSection from "@/components/about/first-section";
import History from "@/components/about/history";
import Footer from "@/components/footer";
import Header from "@/components/header";

const About = () => {
  return (
    <div>
      {/* Header */}
      <Header />

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
