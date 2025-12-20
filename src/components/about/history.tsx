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
        <Image src={Baner} alt="baner" className=" sticky" />
        <div className="flex items-center justify-between absolute w-[80%] max-w-[1920px] mx-auto">
          <Image src={Workers} alt="baner" width={650} height={395} />
          <div>
            <h1 className="text-4xl font-bold">История компании</h1>
            <p className="mt-3 text-[#3484D53] ">
              В 2022 году под брендом Shumbola впервые в Узбекистане
              организовали
              <br />
              фабричную переработку, производство и реализацию продукции из
              семян
              <br />
              подсолнечника. С 2024 года ERMAK — первый и единственный в <br />
              Узбекистане производитель курта в фабричных условиях. Мы постоянно
              <br />
              расширяем линейку продукции. Под единым брендом ERMAK сегодня{" "}
              <br />
              выпускаются семечки, курт, сухофрукты и сушки. Со дня основания
              <br />
              девизом компании стал слоган: «Полезно, вкусно, чисто». Этим
              главным
              <br />
              критериям соответствует каждый продукт торговой марки ERMAK.{" "}
              <br />
            </p>
          </div>
        </div>
      </div>
      {/* Creator */}
      <div className="mt-40 w-[80%] max-w-[1920px] mx-auto flex items-center justify-center gap-40">
        <div>
          <p className="text-[#484D53]">
            «Производство продуктов питания – процесс сложный и ответственный.
            <br />
            Гарантия качества продукции лежит на совести производителя. Мы
            <br />
            понимаем, что произведенный и упакованный сегодня курт ERMAK завтра
            <br />
            съест ребенок. Возможно, это будет мой сын или внук. Именно поэтому
            я
            <br />
            и каждый сотрудник нашей компании при производстве продукта думаем о
            <br />
            себе, своих детях. Мы уверены в пользе и качестве наших продуктов и
            по
            <br />
            праву гордимся тем, что за двадцать лет производства не было
            выявлено
            <br />
            ни одного случае несоответствия заявленному качеству продукции. Мы
            <br />
            благодарим Вас за выбор продукции ERMAK. Желаем приятного аппетита и
            <br />
            отменного здоровья Вам и Вашим детям.» Салихов Валижан Кучкарович
            <br />
            Директор компании ERMAK.
          </p>
          <h1 className="text-4xl font-bold mt-3">Abdulaziz</h1>
          <p className="text-[#484D53] italic">Директор компании Shumbola</p>
        </div>
        <div>
          <Image src={Creator} alt="baner" width={426} height={426} />
        </div>
      </div>

      {/* Foto about */}
      <div className="mt-30 w-[80%] max-w-[1920px] mx-auto">
        <h1 className="text-4xl font-bold">Фотоотчет</h1>
        <div className="grid grid-cols-3 mt-10">
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
