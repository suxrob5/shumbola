import { ProductImageMap } from "@/backend/products-data";
import ProductDetail from "@/components/product/product-detail";
import NotFound from "@/app/not-found";
import { Suspense } from "react";
import { getDocuments } from "@/backend/firebase";
import { ProductType } from "@/types/types";

export const dynamicParams = false;

export async function generateStaticParams() {
  const data = await getDocuments("products");
  const uniqueIds = new Set<string>();

  data.forEach((doc: any) => {
    if (doc.docId) uniqueIds.add(doc.docId.toString());
    if (doc.id) uniqueIds.add(doc.id.toString());
  });

  return Array.from(uniqueIds).map(id => ({ id }));
}

export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id: paramId } = await props.params;
  const data = await getDocuments("products");

  // Find by internal numeric id first (priority), then by docId
  const doc = data.find((p: any) =>
    p.id?.toString() === paramId || p.docId === paramId
  ) as any;

  if (!doc) {
    return <NotFound />;
  }

  // Sanitize for serialization (remove non-serializable Firestore Timestamps)
  const { createdAt: _createdAt, updatedAt: _updatedAt, ...serializableDoc } = doc;

  const product = {
    ...serializableDoc,
    imageUrl: ProductImageMap[Number(doc.id)] || doc.imageUrl || "",
    id: Number(doc.id)
  } as ProductType;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetail
        product={product}
        id={paramId}
      />
    </Suspense>
  );
}