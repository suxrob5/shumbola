import Baner from "@/assets/images/about/history-baner.png";
import Workers from "@/assets/images/about/workers.png";
import Creator from "@/assets/images/about/creator.png";
import AboutProduct from "@/assets/images/about/product-ab.png";
import AboutProduct2 from "@/assets/images/about/product-ab2.png";
import Image from "next/image";

const History = () => {
  return (
    <>
      <div className="mt-40 relative flex items-center justify-center">
        <Image src={Baner} alt="baner" className="sticky" />
        <div className="flex items-center justify-between absolute w-[80%] max-w-[1920px] mx-auto mt-10">
          <Image
            src={Workers}
            alt="baner"
            width={650}
            height={395}
            className="w-[50%]"
          />
          <div className="w-[45%]">
            <h1 className="text-4xl font-bold">История компании</h1>
            <p className="mt-3 text-[#3484D53] ">
              В 2022 году под брендом Shumbola впервые в Узбекистане
              организовали фабричную переработку, производство и реализацию
              продукции из семян подсолнечника. С 2024 года ERMAK — первый и
              единственный в Узбекистане производитель курта в фабричных
              условиях. Мы постоянно расширяем линейку продукции. Под единым
              брендом ERMAK сегодня выпускаются семечки, курт, сухофрукты и
              сушки. Со дня основания девизом компании стал слоган: «Полезно,
              вкусно, чисто». Этим главным критериям соответствует каждый
              продукт торговой марки ERMAK.
            </p>
          </div>
        </div>
      </div>
      {/* Creator */}
      <div className="mt-40 w-[80%] max-w-[1920px] mx-auto flex items-center justify-center gap-40">
        <div className="w-[45%]">
          <p className="text-[#484D53]">
            «Производство продуктов питания – процесс сложный и ответственный.
            Гарантия качества продукции лежит на совести производителя. Мы
            понимаем, что произведенный и упакованный сегодня курт ERMAK завтра
            съест ребенок. Возможно, это будет мой сын или внук. Именно поэтому
            я и каждый сотрудник нашей компании при производстве продукта думаем
            о себе, своих детях. Мы уверены в пользе и качестве наших продуктов
            и по праву гордимся тем, что за двадцать лет производства не было
            выявлено ни одного случае несоответствия заявленному качеству
            продукции. Мы благодарим Вас за выбор продукции ERMAK. Желаем
            приятного аппетита и отменного здоровья Вам и Вашим детям.» Салихов
            Валижан Кучкарович Директор компании ERMAK.
          </p>
          <h1 className="text-4xl font-bold mt-3">Kasimov Baxtiyor</h1>
          <p className="text-[#484D53] italic">Директор компании Shumbola</p>
        </div>
        <div>
          <Image src={Creator} alt="baner" width={426} height={426} />
        </div>
      </div>

      {/* Foto about */}
      <div className="mt-30 w-[80%] max-w-[1920px] mx-auto">
        <h1 className="text-4xl font-bold">Фотоотчет</h1>
        <div className="grid grid-cols-3 mt-10 gap-20">
          <Image
            src={AboutProduct}
            alt="baner"
            width={450}
            height={346}
            className="rounded-2xl"
          />
          <Image
            src={AboutProduct2}
            alt="baner"
            width={450}
            height={346}
            className="rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default History;
