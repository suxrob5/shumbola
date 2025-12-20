// images
import FirstSection from "@/components/about/first-section";
import AboutCm from "@/assets/images/about/about-company.png";
// Components
import History from "@/components/about/history";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Begin from "@/components/name";

const About = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      <Begin image={AboutCm} />

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
