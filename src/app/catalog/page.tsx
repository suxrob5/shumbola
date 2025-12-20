import Header from "@/components/header";
import Begin from "@/components/name";
import MainImg from "@/assets/images/catalog/main.png";
import RightIcon from "@/assets/icons/right.png";
import Footer from "@/components/footer";
import { catalogData } from "@/components/catalog/ct-data";
import Link from "next/link";
import Image from "next/image";

console.log(catalogData);

const Catalog = () => {
  return (
    <div>
      <header>
        <Header />
        <Begin image={MainImg} />
      </header>

      <main className="max-w-[1920px] w-[80%] mx-auto mt-30">
        <section>
          {catalogData ? (
            catalogData.map((item) => (
              <div
                key={item.id}
                className="bg-[#E8F1F9] w-full mt-5 rounded-2xl h-[300px] relative"
              >
                <h1 className="text-blue-500 text-4xl font-bold absolute top-10 left-5">
                  {item.name}
                </h1>
                <Link
                  href={`/catalog/${item.link}`}
                  className="absolute bottom-10 left-5"
                >
                  <button className="flex items-center gap-1 bg-white rounded-xl p-3 font-semibold cursor-pointer">
                    Подробнее
                    <Image
                      src={RightIcon}
                      alt="right icon"
                      width={20}
                      height={20}
                    />
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Catalog;
