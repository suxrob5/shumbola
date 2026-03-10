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
import Pista from "@/assets/images/products/pista.png";
import PistaTuzsizP from "@/assets/images/products/pista-tuzsiz.png";
import PistaTuzliP from "@/assets/images/products/pista-tuzli.png";
import XandomPistaP from "@/assets/images/products/xandom-pista.png";
import XandomPista2P from "@/assets/images/products/xandom-pista2.png";
import { CtType } from "@/types/types";


// Catalog type

// Qurt                 1
// Sluguni              2
// Xamdom pista         3
// Bodom                4
// Keshu                5
// Yer YerYongoq        6
// O'rik Danak          7
// Semechka             8

export const catalogData: CtType = [
  { //qurt 
    id: 1,
    catType: 1,
    name: "Курт",
    name_uz: "Qurt",
    name_en: "Qurt",
    type: "qurt",
    link: "kurt",
    img: Qurt,
  },
  { // Sluguni
    id: 2,
    catType: 2,
    name: "Сулугуни",
    name_uz: "Suluguni",
    name_en: "Suluguni",
    type: "sluguni",
    link: "sluguni",
    img: SluguniP,
  },
  { // Xandom Pista
    id: 3,
    catType: 3,
    name: "Хандом фисташки",
    name_uz: "Xandom pista",
    name_en: "Xandom pistachios",
    type: "xandom_pista",
    link: "xandom_pista",
    img: XandomPistaP,
  },
  {// bodom
    id: 4,
    catType: 4,
    name: "Миндаль",
    name_uz: "Bodom",
    name_en: "Almonds",
    type: "bodom",
    link: "bodom",
    img: Bodom,

  },
  { // Keshu
    id: 5,
    catType: 5,
    name: "Кешью",
    name_uz: "Keshyu",
    name_en: "Cashew",
    type: "kaju",
    link: "kaju",
    img: Kaju,

  },
  { //yer yongok
    id: 6,
    catType: 6,
    name: "Арахис",
    name_uz: "Yer yong'og'i",
    name_en: "Peanuts",
    type: "yer_yongok",
    link: "yer_yongok",
    img: YerYongoq,
  },
  {// O'rik danak
    id: 7,
    catType: 7,
    name: "Абрикосовые косточки",
    name_uz: "O'rik danagi",
    name_en: "Apricot kernels",
    type: "orik_danak",
    link: "orik_danak",
    img: OrikDanak,
  },
  { // Semechka
    id: 8,
    catType: 8,
    name: "Семечки",
    name_uz: "Semechka",
    name_en: "Sunflower seeds",
    type: "pista",
    link: "pista",
    img: Pista,
  },
];


