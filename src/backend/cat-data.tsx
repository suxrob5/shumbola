// catalog img
import Qurt from "@/assets/images/catalog/qurt.png";
import ToshQurt from "@/assets/images/catalog/tosh_qurt.png";
import Bodom from "@/assets/images/catalog/bodom.png";
import OrikDanak from "@/assets/images/catalog/orik_danak.png";
import YerYongoq from "@/assets/images/catalog/yer_yongoq.png";
import Kaju from "@/assets/images/catalog/kaju.png";
// product img
import QurtP from "@/assets/images/products/qurt.png";
import ToshQurtP from "@/assets/images/products/tosh-qurt.png";
import BodomP from "@/assets/images/products/bodom.png";
import OrikDanakP from "@/assets/images/products/orik-danak.png";
import YerYongoqP from "@/assets/images/products/yer-yongogi.png";
import KeshuP from "@/assets/images/products/keshu.png";
import SluguniP from "@/assets/images/products/sluguni.png";
import PistaP from "@/assets/images/products/xandom-pista.png";
import XandomPistaP from "@/assets/images/products/xandom-pista.png";
import XandomPista2P from "@/assets/images/products/xandom-pista2.png";
import { CtType } from "@/types/types";


// 1 Qurt   tosh qurt oddiy
// 2 Sluguni acchiq shirin
// 3 Xamdom Pista chaqilga oddiy
// 4 Bodom
// 5 Keshu
// 6 Yer yongoq
// 7 Orik danak
// 8 Pista tuzli tuzsiz



export const catalogData: CtType = [
  { //qurt 
    id: 1,
    name: "Курт",
    type: "qurt",
    link: "kurt",
    img: Qurt,
    products: [
      {
        id: 100,
        name: "Курт",
        imageUrl: QurtP,
        sizes: [20, 30, 50],
        description:
          "Состав: Чакка молочная, соль йодированная, бифидобактерия. Хранить от 0 Сдо +28 С. Срок хранения 6 месяц. Энергетическая ценность на 100г: белки-17г. Жиры-5г. Углеводы-1г. 120ккал"
      },
      {
        id: 101,
        name: "Твердый курт",
        imageUrl: ToshQurtP,
        sizes: [20, 30, 50],
        description:
          "Состав продукта: натуральная молочная чакка, изготовленная из отборного коровьего молока с добавлением полезных бифидобактерий и йодированной соли, без использования искусственных консервантов, красителей и ароматизаторов. Продукт обладает высокой пищевой ценностью и подходит для ежедневного употребления. Условия хранения: хранить при температуре от 0°C до +28°C в сухом месте, защищённом от прямых солнечных лучей; после вскрытия упаковки рекомендуется хранить в холодильнике. Срок хранения составляет 6 месяцев с даты изготовления при соблюдении условий хранения. Пищевая и энергетическая ценность на 100 г продукта: белки — 17 г, жиры — 5 г, углеводы — 1 г, энергетическая ценность — 120 ккал."

      },
    ],
  },
  { // Sluguni
    id: 2,
    name: "Сулугуни",
    type: "sluguni",
    link: "sluguni",
    img: SluguniP,
    products: [
      {
        id: 102,
        name: "Сулугуни",
        imageUrl: SluguniP,
        sizes: [20, 30, 50],
        description:
          ""
      },
    ],
  },
  { // Xandom Pista
    id: 3,
    name: "Хандом фисташки",
    type: "xandom_pista",
    link: "xandom_pista",
    img: XandomPistaP,
    products: [
      {
        id: 103,
        name: "Хандом фисташки",
        imageUrl: XandomPistaP,
        sizes: [20, 30, 50],
        description:
          "Фисташки — это натуральный и полезный продукт. Они тщательно отобраны и упакованы в специальные прозрачные упаковки. Дизайн упаковки простой и аккуратный с логотипом Shumbola. Фисташки являются питательным и вкусным перекусом, который отлично подходит для употребления в дороге или дома.",
      },
      {
        id: 104,
        name: "Хандом фисташки",
        imageUrl: XandomPista2P,
        sizes: [20, 30, 50],
        description:
          "Состав: Ядра фисташки, соль йодированная Срок годности: 6 месяцев. Хранить при температуре от +5 до +22С и относительной влажности воздуха не более 75%. Не рекомендуется людям с аллергии. Энергетическая ценность на 100г: белки-21г. Жиры-51г. Углеводы-16г. 610ккал"
      },
    ],
  },
  {// bodom
    id: 4,
    name: "Миндаль",
    type: "bodom",
    link: "bodom",
    img: Bodom,
    products: [
      {
        id: 105,
        name: "Миндаль",
        imageUrl: BodomP,
        sizes: [20, 30, 50],
        description:
          "Состав: Ядра миндаля, соль йодированная Срок годности: 6 месяцев. Хранить при температуре от +5 до +22С и относительной влажности воздуха не более 75%. Не рекомендуется людям с аллергии. Энергетическая ценность на 100г: белки-22,4г. Жиры-55,9г. Углеводы-12,3г. 642ккал"
      },
    ],
  },
  { // Keshu
    id: 5,
    name: "Кешью",
    type: "kaju",
    link: "kaju",
    img: Kaju,
    products: [
      {
        id: 106,
        name: "Кешью",
        imageUrl: KeshuP,
        sizes: [20, 30, 50],
        description:
          "Состав: Kешью, соль йодированная Срок годности: 6 месяцев. Хранить при температуре от +5 до +22С и относительной влажности воздуха не более 75%. Не рекомендуется людям с аллергии. Энергетическая ценность на 100г: белки-18,5г. Жиры-48,5г. Углеводы-22,5г. 660ккал"
      },
    ],
  },
  { //yer yongok
    id: 6,
    name: "Арахис",
    type: "yer_yongok",
    link: "yer_yongok",
    img: YerYongoq,
    products: [
      {
        id: 107,
        name: "Арахис",
        imageUrl: YerYongoqP,
        sizes: [20, 30, 50],
        description:
          "Арахис — это питательный и вкусный продукт, приготовленный из отборного сырья. Продукт упакован в удобную упаковку Shumbola, которая сохраняет свежесть и аромат орехов. Идеально подходит для быстрого перекуса.",
      },
    ],
  },
  {// O'rik danak
    id: 7,
    name: "Абрикосовые косточки",
    type: "orik_danak",
    link: "orik_danak",
    img: OrikDanak,
    products: [
      {
        id: 108,
        name: "Абрикосовые косточки",
        imageUrl: OrikDanakP,
        sizes: [20, 30, 50],
        description:
          "Состав: Ядра абрикоса, соль йодированная Срок годности: 6 месяцев. Хранить при температуре от +5 до +22С и относительной влажности воздуха не более 75%. Не рекомендуется людям с аллергии. Энергетическая ценность на 100г: белки-22,4г. Жиры-55,9г. Углеводы-12,3г. 642ккал"
      },
    ],
  },
  { // Pista
    id: 8,
    name: "СЕМЕЧКИ",
    type: "pista",
    link: "pista",
    img: PistaP,
    products: [
      {
        id: 109,
        name: "СЕМЕЧКИ НЕ СОЛЕННЫЕ",
        imageUrl: PistaP,
        sizes: [20, 30, 50],
        description:
          "Состав: Семена подсолнуха жаренные. Срок годности: 6 месяцев. Беречь от прямых солнечных лучей. Хранить при температуре от +5°C до +25°C и относительной влажности воздуха не более 75%. Пищевая ценность на 100г: белки-20,7г. Жиры-45г. Углеводы-2,7г. Энергетическая ценность - 515 ккал. Дата изготовления указана на упаковке."
      },
      {
        id: 110,
        name: "СЕМЕЧКИ СОЛЕННЫЕ",
        imageUrl: PistaP,
        sizes: [20, 30, 50],
        description:
          "Состав: Семена подсолнуха жаренные, соль йодированная Срок годности: 6 месяцев. Беречь от прямых солнечных лучей. Хранить при температуре от +5°C до +25°C и относительной влажности воздуха не более 75%. Пищевая ценность на 100г: белки-20,7г. Жиры-45г. Углеводы-2,7г. Энергетическая ценность - 515 ккал. Дата изготовления указана на упаковке."
      },
    ],
  },



];
