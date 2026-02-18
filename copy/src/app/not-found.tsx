import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";

const NotFound = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Header />

      <main className="flex items-center justify-center mt-40">
        <div className="text-center px-4">
          <h1 className="text-[120px] font-extrabold text-gray-300 leading-none">
            404
          </h1>

          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            Страница не найдена
          </h2>

          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Страница, которую вы ищете, не существует или могла быть удалена.
          </p>

          <Link
            href="/"
            className="inline-block mt-8 px-8 py-3 rounded-xl bg-[#368BC6] text-white font-semibold hover:bg-blue-700 transition"
          >
            Вернуться на главную страницу
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
