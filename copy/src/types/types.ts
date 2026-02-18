import { StaticImageData } from "next/image";

export type CtType = ItemType[];

export interface ItemType {
  id: number;
  name: string;
  type: string;
  link: string;
  img: StaticImageData;
  products: ProductType[];
}

export type ProductType = {
  id: number;
  name: string;
  imageUrl: StaticImageData;
  description?: string;
  sizes: number[];
};
