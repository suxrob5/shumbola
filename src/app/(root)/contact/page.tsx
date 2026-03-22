"use client";

// components
import Begin from "@/components/name";
import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutContact from "@/components/contact/about-contact";
import ContactInput from "@/components/contact/contact-input";

// others
import { useTranslation } from "@/hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <header>
        <Header />
      </header>
      <Begin value={t("nav.contacts")} />
      <main className="mx-auto max-w-[1920px] w-[90%] md:w-[80%] mt-10 md:mt-20 flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Contact input */}
        <ContactInput />
        {/* About contact */}
        <AboutContact />
      </main>
      <footer className="mt-20 md:mt-40">
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;

