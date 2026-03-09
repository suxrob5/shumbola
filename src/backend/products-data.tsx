// product img
import Qurt from "@/assets/images/products/qurt.png";
import ToshQurt from "@/assets/images/products/tosh-qurt.png";
import Bodom from "@/assets/images/products/bodom.png";
import OrikDanak from "@/assets/images/products/orik-danak.png";
import YerYongoq from "@/assets/images/products/yer-yongogi.png";
import Keshu from "@/assets/images/products/keshu.png";
import Sluguni from "@/assets/images/products/sluguni.png";
import XandomPista from "@/assets/images/products/xandom-pista.png";
import XandomPista2 from "@/assets/images/products/xandom-pista2.png";
import { ProductType } from "@/types/types";


import QurtP from "@/assets/images/products/qurt.png";
import ToshQurtP from "@/assets/images/products/tosh-qurt.png";
import BodomP from "@/assets/images/products/bodom.png";
import OrikDanakP from "@/assets/images/products/orik-danak.png";
import YerYongoqP from "@/assets/images/products/yer-yongogi.png";
import KeshuP from "@/assets/images/products/keshu.png";
import SluguniP from "@/assets/images/products/sluguni.png";
import Pista from "@/assets/images/products/pista.png";
import PistaTuzsizP from "@/assets/images/products/pista-tuzsiz.png";
import PistaTuzliP from "@/assets/images/products/pista-tuzli.png";
import XandomPistaP from "@/assets/images/products/xandom-pista.png";
import XandomPista2P from "@/assets/images/products/xandom-pista2.png";


// Catalog type
// Qurt                 1
// Sluguni              2
// Xamdom pista         3
// Bodom                4
// Keshu                5
// Yer YerYongoq        6
// O'rik Danak          7
// Semechka             8


export const ProductData: ProductType[] = [
  { //qurt
    id: 100,
    type: 1,
    name: "Курт",
    name_uz: "Qurt",
    name_en: "Qurt",
    imageUrl: QurtP,
    sizes: [20],
    description:
      "Состав: Чакка молочная, соль йодированная, бифидобактерия. Хранить от 0 Сдо +28 С. Срок хранения 6 месяц. Энергетическая ценность на 100г: белки-17г. Жиры-5г. Углеводы-1г. 120ккал",
    description_uz: "Tarkibi: Sutli chakka, yodlangan tuz, bifidobakteriya. 0 dan +28 C gacha haroratda saqlansin. Saqlash muddati 6 oy. 100g uchun energetik qiymati: oqsillar-17g. Yog'lar-5g. Uglevodlar-1g. 120kkal",
    description_en: "Ingredients: Milk chakka, iodized salt, bifidobacteria. Store from 0 to +28 C. Shelf life 6 months. Energy value per 100g: proteins-17g. Fats-5g. Carbohydrates-1g. 120kcal"
  },
  { //toshqurt
    id: 101,
    type: 1,
    name: "Твердый курт",
    name_uz: "Tosh qurt",
    name_en: "Hard Qurt",
    imageUrl: ToshQurtP,
    sizes: [20],
    description:
      "Состав продукта: натуральная молочная чакка, изготовленная из отборного коровьего молока с добавлением полезных бифидобактерий и йодированной соли, без использования искусственных консервантов, красителей и ароматизаторов. Продукт обладает высокой пищевой ценностью и подходит для ежедневного употребления. Условия хранения: хранить при температуре от 0°C до +28°C в сухом месте, защищённом от прямых солнечных лучей; после вскрытия упаковки рекомендуется хранить в холодильнике. Срок хранения составляет 6 месяцев с даты изготовления при соблюдении условий хранения. Пищевая и энергетическая ценность на 100 г продукта: белки — 17 г, жиры — 5 г, углеводы — 1 г, энергетическая ценность — 120 ккал.",
    description_uz: "Mahsulot tarkibi: tanlab olingan sigir sutidan tayyorlangan tabiiy sutli chakka, foydali bifidobakteriyalar va yodlangan tuz qo'shilgan, sun'iy konservantlar, bo'yoqlar va aromatizatorlarsiz. Mahsulot yuqori ozuqaviy qiymatga ega va kundalik iste'mol uchun mos keladi. Saqlash shartlari: quruq, to'g'ridan-to'g'ri quyosh nurlaridan himoyalangan joyda 0°C dan +28°C gacha haroratda saqlansin; paket ochilgandan so'ng muzlatgichda saqlash tavsiya etiladi. Saqlash muddati saqlash shartlariga rioya qilingan holda ishlab chiqarilgan sanadan boshlab 6 oy. 100 g mahsulot uchun ozuqaviy va energetik qiymati: oqsillar — 17 g, yog'lar — 5 g, uglevodlar — 1 g, energetik qiymati — 120 kkal.",
    description_en: "Product ingredients: natural milk chakka made from selected cow's milk with the addition of beneficial bifidobacteria and iodized salt, without the use of artificial preservatives, colors or flavors. The product has high nutritional value and is suitable for daily consumption. Storage conditions: store at temperatures from 0°C to +28°C in a dry place protected from direct sunlight; after opening the package, it is recommended to store in the refrigerator. Shelf life is 6 months from the date of manufacture, subject to storage conditions. Nutritional and energy value per 100 g of product: proteins — 17 g, fats — 5 g, carbohydrates — 1 g, energy value — 120 kcal."
  },
  { //Suluguni (tuzli)
    id: 102,
    type: 2,
    name: "Сулугуни (соленый)",
    name_uz: "Suluguni (tuzli)",
    name_en: "Suluguni (salted)",
    imageUrl: SluguniP,
    sizes: [20],
    description:
      "Состав: Чакка молочная, соль йодированная, бифидобактерия. Хранить от 0 Сдо +28 С. Срок хранения 6 месяц. Энергетическая ценность на 100г: белки-17г. Жиры-5г. Углеводы-1г. 120ккал",
    description_uz: "Tarkibi: Sutli chakka, yodlangan tuz, bifidobakteriya. 0 dan +28 C gacha haroratda saqlansin. Saqlash muddati 6 oy. 100g uchun energetik qiymati: oqsillar-17g. Yog'lar-5g. Uglevodlar-1g. 120kkal",
    description_en: "Ingredients: Milk chakka, iodized salt, bifidobacteria. Store from 0 to +28 C. Shelf life 6 months. Energy value per 100g: proteins-17g. Fats-5g. Carbohydrates-1g. 120kcal"
  },
  { //Suluguni (tuzsiz)
    id: 103,
    type: 2,
    name: "Сулугуни (без соли)",
    name_uz: "Suluguni (tuzsiz)",
    name_en: "Suluguni (unsalted)",
    imageUrl: SluguniP,
    sizes: [20],
    description:
      "Состав: Чакка молочная, бифидобактерия. Хранить от 0 Сдо +28 С. Срок хранения 6 месяц. Энергетическая ценность на 100г: белки-17г. Жиры-5г. Углеводы-1г. 120ккал",
    description_uz: "Tarkibi: Sutli chakka, bifidobakteriya. 0 dan +28 C gacha haroratda saqlansin. Saqlash muddati 6 oy. 100g uchun energetik qiymati: oqsillar-17g. Yog'lar-5g. Uglevodlar-1g. 120kkal",
    description_en: "Ingredients: Milk chakka, bifidobacteria. Store from 0 to +28 C. Shelf life 6 months. Energy value per 100g: proteins-17g. Fats-5g. Carbohydrates-1g. 120kcal"
  },
  { //Xandom pista
    id: 104,
    type: 3,
    name: "Хандом фисташки",
    name_uz: "Xandom pista",
    name_en: "Xandom pistachios",
    imageUrl: XandomPistaP,
    sizes: [20],
    description:
      "Фисташки — это натуральный и полезный продукт. Они тщательно отобраны и упакованы в специальные прозрачные упаковки. Дизайн упаковки простой и аккуратный с логотипом Shumbola. Фисташки являются питательным и вкусным перекусом, который отлично подходит для употребления в дороге или дома.",
    description_uz: "Pista — bu tabiiy va foydali mahsulot. Ular sinchkovlik bilan saralangan va maxsus shaffof qadoqlarga qadoqlangan. Qadoqlash dizayni Shumbola logotipi bilan oddiy va ravon. Pista — bu yo'lda yoki uyda iste'mol qilish uchun juda mos keladigan to'yimli va mazali tamaddi.",
    description_en: "Pistachios are a natural and healthy product. They are carefully selected and packed in special transparent packaging. The packaging design is simple and neat with the Shumbola logo. Pistachios are a nutritious and delicious snack that is great for consuming on the go or at home."
  },
  { //Xandom pista 2
    id: 105,
    type: 3,
    name: "Хандом фисташки",
    name_uz: "Xandom pista",
    name_en: "Xandom pistachios",
    imageUrl: XandomPista2P,
    sizes: [20],
    description:
      "Состав: Ядра фисташки, соль йодированная Срок годности: 6 месяцев. Хранить при температуре от +5 до +22С и относительной влажности воздуха не более 75%. Не рекомендуется людям с аллергии. Энергетическая ценность на 100г: белки-21г. Жиры-51г. Углеводы-16г. 610ккал",
    description_uz: "Tarkibi: Pista mag'zi, yodlangan tuz Saqlash muddati: 6 oy. +5 dan +22 gacha haroratda va havo namligi 75% dan oshmaydigan joyda saqlansin. Allergiyasi bor insonlar uchun tavsiya etilmaydi. 100g uchun energetik qiymati: oqsillar-21g. Yog'lar-51g. Uglevodlar-16g. 610kkal",
    description_en: "Ingredients: Pistachio kernels, iodized salt Shelf life: 6 months. Store at temperatures from +5 to +22C and relative humidity of no more than 75%. Not recommended for people with allergies. Energy value per 100g: proteins-21g. Fats-51g. Carbohydrates-16g. 610kcal"
  },
  { //bodom
    id: 106,
    type: 4,
    name: "Миндаль",
    name_uz: "Bodom",
    name_en: "Almonds",
    imageUrl: BodomP,
    sizes: [20],
    description:
      "Состав: Ядра миндаля, соль йодированная Срок годности: 6 месяцев. Хранить при температуре от +5 до +22С и относительной влажности воздуха не более 75%. Не рекомендуется людям с аллергии. Энергетическая ценность на 100г: белки-22,4г. Жиры-55,9г. Углеводы-12,3г. 642ккал",
    description_uz: "Tarkibi: Bodom mag'zi, yodlangan tuz Saqlash muddati: 6 oy. +5 dan +22 gacha haroratda va havo namligi 75% dan oshmaydigan joyda saqlansin. Allergiyasi bor insonlar uchun tavsiya etilmaydi. 100g uchun energetik qiymati: oqsillar-22,4g. Yog'lar-55,9g. Uglevodlar-12,3g. 642kkal",
    description_en: "Ingredients: Almond kernels, iodized salt Shelf life: 6 months. Store at temperatures from +5 to +22C and relative humidity of no more than 75%. Not recommended for people with allergies. Energy value per 100g: proteins-22.4g. Fats-55.9g. Carbohydrates-12.3g. 642kcal"
  },
  { //keshu
    id: 107,
    type: 5,
    name: "Кешью",
    name_uz: "Keshyu",
    name_en: "Cashew",
    imageUrl: KeshuP,
    sizes: [20],
    description:
      "Состав: Kешью, соль йодированная Срок годности: 6 месяцев. Хранить при температуре от +5 до +22С и относительной влажности воздуха не более 75%. Не рекомендуется людям с аллергии. Энергетическая ценность на 100г: белки-18,5г. Жиры-48,5г. Углеводы-22,5г. 660ккал",
    description_uz: "Tarkibi: Keshyu, yodlangan tuz Saqlash muddati: 6 oy. +5 dan +22 gacha haroratda va havo namligi 75% dan oshmaydigan joyda saqlansin. Allergiyasi bor insonlar uchun tavsiya etilmaydi. 100g uchun energetik qiymati: oqsillar-18,5g. Yog'lar-48,5g. Uglevodlar-22,5g. 660kkal",
    description_en: "Ingredients: Cashew, iodized salt Shelf life: 6 months. Store at temperatures from +5 to +22C and relative humidity of no more than 75%. Not recommended for people with allergies. Energy value per 100g: proteins-18.5g. Fats-48.5g. Carbohydrates-22.5g. 660kcal"
  },
  {
    id: 108,
    type: 6,
    name: "Арахис",
    name_uz: "Yer yong'og'i",
    name_en: "Peanuts",
    imageUrl: YerYongoqP,
    sizes: [20],
    description:
      "Арахис — это питательный и вкусный продукт, приготовленный из отборного сырья. Продукт упакован в удобную упаковку Shumbola, которая сохраняет свежесть и аромат орехов. Идеально подходит для быстрого перекуса.",
    description_uz: "Yer yong'og'i — bu saralangan xomashyodan tayyorlangan to'yimli va mazali mahsulot. Mahsulot yong'oqlarning yangiligi va hidini saqlaydigan qulay Shumbola qadog'iga qadoqlangan. Tezda tamaddi qilish uchun juda mos keladi.",
    description_en: "Peanuts are a nutritious and delicious product made from selected raw materials. The product is packed in convenient Shumbola packaging, which preserves the freshness and aroma of the nuts. Perfect for a quick snack."
  },

  {
    id: 109,
    type: 7,
    name: "Абрикосовые косточки",
    name_uz: "O'rik danagi",
    name_en: "Apricot kernels",
    imageUrl: OrikDanakP,
    sizes: [20],
    description:
      "Состав: Ядра абрикоса, соль йодированная Срок годности: 6 месяцев. Хранить при температуре от +5 до +22С и относительной влажности воздуха не более 75%. Не рекомендуется людям с аллергии. Энергетическая ценность на 100г: белки-22,4г. Жиры-55,9г. Углеводы-12,3г. 642ккал",
    description_uz: "Tarkibi: O'rik mag'zi, yodlangan tuz Saqlash muddati: 6 oy. +5 dan +22 gacha haroratda va havo namligi 75% dan oshmaydigan joyda saqlansin. Allergiyasi bor insonlar uchun tavsiya etilmaydi. 100g uchun energetik qiymati: oqsillar-22,4g. Yog'lar-55,9g. Uglevodlar-12,3g. 642kkal",
    description_en: "Ingredients: Apricot kernels, iodized salt Shelf life: 6 months. Store at temperatures from +5 to +22C and relative humidity of no more than 75%. Not recommended for people with allergies. Energy value per 100g: proteins-22.4g. Fats-55.9g. Carbohydrates-12.3g. 642kcal"
  },

  {
    id: 110,
    type: 8,
    name: "СЕМЕЧКИ",
    name_uz: "Semechka",
    name_en: "Sunflower seeds",
    imageUrl: PistaTuzsizP,
    sizes: [100, 200],
    description:
      "Семечки — это натуральный и полезный продукт. Они тщательно отобраны и упакованы в специальные прозрачные упаковки. Дизайн упаковки простой и аккуратный с логотипoм Shumbola. Семечки являются питательным и вкусным перекусом, который отлично подходит для употребления в дороге или дома.",
    description_uz: "Semechka — bu tabiiy va foydali mahsulot. Ular sinchkovlik bilan saralangan va maxsus shaffof qadoqlarga qadoqlangan. Qadoqlash dizayni Shumbola logotipi bilan oddiy va ravon. Semechka — bu yo'lda yoki uyda iste'mol qilish uchun juda mos keladigan to'yimli va mazali tamaddi.",
    description_en: "Sunflower seeds are a natural and healthy product. They are carefully selected and packed in special transparent packaging. The packaging design is simple and neat with the Shumbola logo. Sunflower seeds are a nutritious and delicious snack that is great for consuming on the go or at home."
  },
  {
    id: 111,
    type: 8,
    name: "СЕМЕЧКИ СОЛЕННЫЕ",
    name_uz: "Tuzlangan semechka",
    name_en: "Salted sunflower seeds",
    imageUrl: PistaTuzliP,
    sizes: [100, 200],
    description:
      "Состав: Семена подсолнуха жаренные, соль йодированная Срок годности: 6 месяцев. Беречь от прямых солнечных лучей. Хранить при температуре от +5°C до +25°C и относительной влажности воздуха не более 75%. Пищевая ценность на 100г: белки-20,7г. Жиры-45г. Углеводы-2,7г. Энергетическая ценность - 515 ккал. Дата изготовления указана на упаковке.",
    description_uz: "Tarkibi: Qovurilgan kungaboqar urug'lari, yodlangan tuz Saqlash muddati: 6 oy. To'g'ridan-to'g'ri quyosh nurlaridan saqlang. +5°C dan +25°C gacha bo'lgan haroratda va havoning nisbiy namligi 75% dan oshmaydigan joinida saqlansin. 100 g uchun ozuqaviy qiymati: oqsillar-20,7 g. Yog'lar-45 g. Uglevodlar-2,7 g. Energetik qiymati - 515 kkal. Ishlab chiqarilgan sana paketda ko'rsatilgan.",
    description_en: "Ingredients: Roasted sunflower seeds, iodized salt Shelf life: 6 months. Protect from direct sunlight. Store at temperatures from +5°C to +25°C and relative humidity of no more than 75%. Nutritional value per 100g: proteins-20.7g. Fats-45g. Carbohydrates-2.7g. Energy value - 515 kcal. The date of manufacture is indicated on the package."
  },
];









