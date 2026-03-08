import { StaticImageData } from "next/image";

export type CtType = ItemType[];

export interface ItemType {
  id: number;
  name: string;
  name_uz?: string;
  name_en?: string;
  type: string;
  link: string;
  img: StaticImageData;
  products: ProductType[];
}

export type ProductType = {
  id: number;
  name: string;
  name_uz?: string;
  name_en?: string;
  imageUrl: StaticImageData;
  description?: string;
  description_uz?: string;
  description_en?: string;
  sizes: number[];
};
