import Link from "next/link";
import { catalogData } from "./ct-data";

const IdPage = ({ name }: any) => {
  return (
    <div className="max-w-[1920px] mx-auto px-5">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#1f3c88] mb-14">
        {name}
      </h1>

      <section className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {catalogData.map((item) => (
          <Link href={item.link} key={item.id}>
            <div
              className="group bg-linear-to-br from-[#E8F1F9] to-[#bfe7f6] rounded-2xl h-[120px] flex items-center justify-center shadow-md transition-all
                 duration-300 hover:shadow-2xl hover:-translate-y-2 hover:from-[#3291D3] hover:to-[#5bb0ff] cursor-pointer"
            >
              <h1 className="text-xl font-bold text-[#3291D3] transition-colors duration-300 group-hover:text-white">
                {item.name}
              </h1>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default IdPage;
