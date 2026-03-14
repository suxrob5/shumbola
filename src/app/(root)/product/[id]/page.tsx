import { ProductData } from "@/backend/products-data";
import ProductDetail from "@/components/product/product-detail";
import NotFound from "@/app/not-found";
import { Suspense } from "react";

export async function generateStaticParams() {
  return ProductData.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const product = ProductData.find((p) => p.id === Number(id));

  if (!product) {
    return <NotFound />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetail
        product={product}
        id={id}
      />
    </Suspense>
  );
}