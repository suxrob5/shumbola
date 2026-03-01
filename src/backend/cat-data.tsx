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
          "Курт — это традиционный натуральный и полезный молочный продукт. Курт имеет круглую форму, белый цвет и упакован в специальные прозрачные упаковки. Дизайн упаковки простой и аккуратный: на передней части изображён логотип улыбающегося ребёнка, название «SHUMBOLA QURT», а также информация о производителе. Продукт размещён в нескольких небольших пакетах, установленных на картонном стенде, что очень удобно для продажи на прилавках магазинов. Курт долго хранится, является питательным и полезным продуктом, особенно подходит для употребления в дороге или в качестве лёгкого перекуса. В целом, Shumbola Qurt — это качественный продукт, который сохраняет традиционный национальный вкус и удобен для повседневного употребления.",
      },
      {
        id: 110,
        name: "Твердый курт",
        imageUrl: ToshQurtP,
        sizes: [20, 30, 50],
        description:
          "Курт — это традиционный натуральный и полезный молочный продукт. Курт имеет круглую форму, белый цвет и упакован в специальные прозрачные упаковки. Дизайн упаковки простой и аккуратный: на передней части изображён логотип улыбающегося ребёнка, название «SHUMBOLA QURT», а также информация о производителе. Продукт размещён в нескольких небольших пакетах, установленных на картонном стенде, что очень удобно для продажи на прилавках магазинов. Курт долго хранится, является питательным и полезным продуктом, особенно подходит для употребления в дороге или в качестве лёгкого перекуса. В целом, Shumbola Qurt — это качественный продукт, который сохраняет традиционный национальный вкус и удобен для повседневного употребления.",
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
        id: 115,
        name: "Сулугуни",
        imageUrl: SluguniP,
        sizes: [20, 30, 50],
        description:
          "Сулугуни — это натуральный и полезный молочный продукт. Он обладает нежной текстурой и приятным вкусом. Продукт упакован в специальные прозрачные упаковки с логотипом Shumbola. Сулугуни долго хранится и является питательным продуктом, который отлично подходит для употребления в любое время дня.",
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
        id: 117,
        name: "Хандом фисташки",
        imageUrl: XandomPistaP,
        sizes: [20, 30, 50],
        description:
          "Фисташки — это натуральный и полезный продукт. Они тщательно отобраны и упакованы в специальные прозрачные упаковки. Дизайн упаковки простой и аккуратный с логотипом Shumbola. Фисташки являются питательным и вкусным перекусом, который отлично подходит для употребления в дороге или дома.",
      },
      {
        id: 118,
        name: "Хандом фисташки",
        imageUrl: XandomPista2P,
        sizes: [20, 30, 50],
        description:
          "Фисташки — это натуральный и полезный продукт. Они тщательно отобраны и упакованы в специальные прозрачные упаковки. Дизайн упаковки простой и аккуратный с логотипом Shumbola. Фисташки являются питательным и вкусным перекусом, который отлично подходит для употребления в дороге или дома.",
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
        id: 106,
        name: "Миндаль",
        imageUrl: BodomP,
        sizes: [20, 30, 50],
        description:
          "Миндаль — это натуральный и полезный продукт. Тщательно отобранные ядра миндаля упакованы в качественную упаковку Shumbola. Это отличный источник энергии и питательных веществ, идеально подходящий для здорового перекуса.",
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
        id: 115,
        name: "Кешью",
        imageUrl: KeshuP,
        sizes: [20, 30, 50],
        description:
          "Кешью — это высококачественный натуральный продукт. Орехи обладают нежным вкусом и хрустящей текстурой. Упаковка Shumbola обеспечивает сохранность всех полезных свойств и удобство при употреблении.",
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
        id: 112,
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
        id: 109,
        name: "Абрикосовые косточки",
        imageUrl: OrikDanakP,
        sizes: [20, 30, 50],
        description:
          "Абрикосовые косточки — это традиционное восточное лакомство, обладающее уникальным вкусом и множеством полезных свойств. Мы используем только натуральное сырье и качественную упаковку Shumbola для вашего удовольствия.",
      },
    ],
  },
  { // Pista
    id: 8,
    name: "Фисташки",
    type: "pista",
    link: "pista",
    img: PistaP,
    products: [
      {
        id: 116,
        name: "Фисташки",
        imageUrl: PistaP,
        sizes: [20, 30, 50],
        description:
          "Фисташки — это натуральный и полезный продукт. Они тщательно отобраны и упакованы в специальные прозрачные упаковки. Дизайн упаковки простой и аккуратный с логотипoм Shumbola. Фисташки являются питательным и вкусным перекусом, который отлично подходит для употребления в дороге или дома.",
      },
    ],
  },



];
