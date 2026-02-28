// catalog img
import Qurt from "@/assets/images/catalog/tosh_qurt.png";
import ToshQurt from "@/assets/images/catalog/qurt.png";
import Bodom from "@/assets/images/catalog/bodom.png";
import OrikDanak from "@/assets/images/catalog/orik_danak.png";
import YerYongoq from "@/assets/images/catalog/yer_yongoq.png";
import Kaju from "@/assets/images/catalog/kaju.png";
// product img
import QurtP from "@/assets/images/products/qurt.jpg";
import ToshQurtP from "@/assets/images/products/tosh_qurt.jpg";
import BodomP from "@/assets/images/products/bodom.jpg";
import OrikDanakP from "@/assets/images/products/orik_danak.jpg";
import YerYongoqP from "@/assets/images/products/yer_yongok.jpg";
import KajuP from "@/assets/images/products/kaju.jpg";
import { CtType } from "@/types/types";


// 1Qurt   tosh qurt oddiy
// 2Sluguni acchiq shirin
// 3Xamdom Pista chaqilga oddiy
// 4Bodom
// 5Kaju
// 6Yer yongoq
// 7Orik danak
// 8Pista tuzli tuzsiz


export const catalogData: CtType = [
  {
    id: 1, //qurt
    name: "Qurtlar",
    type: "qurt",
    link: "kurt",
    img: Qurt,
    products: [
      {
        id: 100,
        name: "Qurt",
        imageUrl: QurtP,
        sizes: [20, 30, 50],
        description:
          "Qurt — an’anaviy usulda tayyorlangan, tabiiy va foydali sut mahsuloti. Qurtlar dumaloq shaklda bo‘lib, oq rangga ega va maxsus shaffof qadoqlarda joylangan. Qadoq dizayni sodda va chiroyli: old qismida kulib turgan bola logotipi, “SHUMBOLA QURT” nomi hamda ishlab chiqaruvchi haqida ma’lumotlar berilgan. Mahsulot bir nechta kichik paketlarda karton stendga joylashtirilgan bo‘lib, do‘kon peshtaxtalarida sotish uchun juda qulay. Qurt uzoq saqlanadi, to‘yimli va foydali bo‘lib, ayniqsa sayohat paytida yoki yengil tamaddi sifatida iste’mol qilishga mos. Umuman olganda, Shumbola Qurt — sifatli, milliy ta’mni o‘zida mujassam etgan va kundalik iste’mol uchun qulay mahsulot.",
      },
    ],
  },
  {
    id: 2, //tosh qurt
    name: "Tosh Qurtlar",
    type: "tosh_qurt",
    link: "tosh_kurt",
    img: ToshQurt,
    products: [
      {
        id: 103,
        name: "Tosh qurt",
        imageUrl: ToshQurtP,
        sizes: [20, 30, 50],
        description:
          "Qurt — an’anaviy usulda tayyorlangan, tabiiy va foydali sut mahsuloti. Qurtlar dumaloq shaklda bo‘lib, oq rangga ega va maxsus shaffof qadoqlarda joylangan. Qadoq dizayni sodda va chiroyli: old qismida kulib turgan bola logotipi, “SHUMBOLA QURT” nomi hamda ishlab chiqaruvchi haqida ma’lumotlar berilgan. Mahsulot bir nechta kichik paketlarda karton stendga joylashtirilgan bo‘lib, do‘kon peshtaxtalarida sotish uchun juda qulay. Qurt uzoq saqlanadi, to‘yimli va foydali bo‘lib, ayniqsa sayohat paytida yoki yengil tamaddi sifatida iste’mol qilishga mos. Umuman olganda, Shumbola Qurt — sifatli, milliy ta’mni o‘zida mujassam etgan va kundalik iste’mol uchun qulay mahsulot.",
      },
    ],
  },
  {
    id: 3, // bodom
    name: "Bodomlar",
    type: "bodom",
    link: "bodom",
    img: Bodom,
    products: [
      {
        id: 106,
        name: "Bodom",
        imageUrl: BodomP,
        sizes: [20, 30, 50],
        description:
          "Qurt — an’anaviy usulda tayyorlangan, tabiiy va foydali sut mahsuloti. Qurtlar dumaloq shaklda bo‘lib, oq rangga ega va maxsus shaffof qadoqlarda joylangan. Qadoq dizayni sodda va chiroyli: old qismida kulib turgan bola logotipi, “SHUMBOLA QURT” nomi hamda ishlab chiqaruvchi haqida ma’lumotlar berilgan. Mahsulot bir nechta kichik paketlarda karton stendga joylashtirilgan bo‘lib, do‘kon peshtaxtalarida sotish uchun juda qulay. Qurt uzoq saqlanadi, to‘yimli va foydali bo‘lib, ayniqsa sayohat paytida yoki yengil tamaddi sifatida iste’mol qilishga mos. Umuman olganda, Shumbola Qurt — sifatli, milliy ta’mni o‘zida mujassam etgan va kundalik iste’mol uchun qulay mahsulot.",
      },
    ],
  },
  {
    id: 4, // ori danak
    name: "O'rik Danaklar",
    type: "orik_danak",
    link: "orik_danak",
    img: OrikDanak,
    products: [
      {
        id: 109,
        name: "O'rik Danak",
        imageUrl: OrikDanakP,
        sizes: [20, 30, 50],
        description:
          "Qurt — an’anaviy usulda tayyorlangan, tabiiy va foydali sut mahsuloti. Qurtlar dumaloq shaklda bo‘lib, oq rangga ega va maxsus shaffof qadoqlarda joylangan. Qadoq dizayni sodda va chiroyli: old qismida kulib turgan bola logotipi, “SHUMBOLA QURT” nomi hamda ishlab chiqaruvchi haqida ma’lumotlar berilgan. Mahsulot bir nechta kichik paketlarda karton stendga joylashtirilgan bo‘lib, do‘kon peshtaxtalarida sotish uchun juda qulay. Qurt uzoq saqlanadi, to‘yimli va foydali bo‘lib, ayniqsa sayohat paytida yoki yengil tamaddi sifatida iste’mol qilishga mos. Umuman olganda, Shumbola Qurt — sifatli, milliy ta’mni o‘zida mujassam etgan va kundalik iste’mol uchun qulay mahsulot.",
      },
    ],
  },
  {
    id: 5, //yer yongok
    name: "Yer Yong'oqlar",
    type: "yer_yongok",
    link: "yer_yongok",
    img: YerYongoq,
    products: [
      {
        id: 112,
        name: "Yer Yong'oq",
        imageUrl: YerYongoqP,
        sizes: [20, 30, 50],
        description:
          "Qurt — an’anaviy usulda tayyorlangan, tabiiy va foydali sut mahsuloti. Qurtlar dumaloq shaklda bo‘lib, oq rangga ega va maxsus shaffof qadoqlarda joylangan. Qadoq dizayni sodda va chiroyli: old qismida kulib turgan bola logotipi, “SHUMBOLA QURT” nomi hamda ishlab chiqaruvchi haqida ma’lumotlar berilgan. Mahsulot bir nechta kichik paketlarda karton stendga joylashtirilgan bo‘lib, do‘kon peshtaxtalarida sotish uchun juda qulay. Qurt uzoq saqlanadi, to‘yimli va foydali bo‘lib, ayniqsa sayohat paytida yoki yengil tamaddi sifatida iste’mol qilishga mos. Umuman olganda, Shumbola Qurt — sifatli, milliy ta’mni o‘zida mujassam etgan va kundalik iste’mol uchun qulay mahsulot.",
      },
    ],
  },
  {
    id: 6, //kaju
    name: "Kajular",
    type: "kaju",
    link: "kaju",
    img: Kaju,
    products: [
      {
        id: 115,
        name: "Kaju",
        imageUrl: KajuP,
        sizes: [20, 30, 50],
        description:
          "Qurt — an’anaviy usulda tayyorlangan, tabiiy va foydali sut mahsuloti. Qurtlar dumaloq shaklda bo‘lib, oq rangga ega va maxsus shaffof qadoqlarda joylangan. Qadoq dizayni sodda va chiroyli: old qismida kulib turgan bola logotipi, “SHUMBOLA QURT” nomi hamda ishlab chiqaruvchi haqida ma’lumotlar berilgan. Mahsulot bir nechta kichik paketlarda karton stendga joylashtirilgan bo‘lib, do‘kon peshtaxtalarida sotish uchun juda qulay. Qurt uzoq saqlanadi, to‘yimli va foydali bo‘lib, ayniqsa sayohat paytida yoki yengil tamaddi sifatida iste’mol qilishga mos. Umuman olganda, Shumbola Qurt — sifatli, milliy ta’mni o‘zida mujassam etgan va kundalik iste’mol uchun qulay mahsulot.",
      },
    ],
  },
];
