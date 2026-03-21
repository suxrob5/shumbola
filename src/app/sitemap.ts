import { getDocuments } from "@/backend/firebase";

export default async function sitemap() {
  const products = await getDocuments("products");
  console.log(products);

  return [
    {
      url: "https://shumbolla.uz",
      lastModified: new Date(),
    },
    ...products.map((p: any) => {
      return {
        url: `https://shumbolla.uz/product/${p.id}`,
        lastModified: new Date(),
      };
    }),
  ];
}

