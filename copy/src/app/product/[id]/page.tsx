import NotFound from "@/app/not-found";
import { ProductData } from "@/backend/products-data";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

const ProductId = async (props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ size?: string }>;
}) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const { id } = params;
  const { size } = searchParams;

  const product = ProductData.find((product) => product.id === Number(id));

  if (!product) {
    return <NotFound />;
  }

  const currentSize = size ? Number(size) : product.sizes[0];

  return (
    <div>
      {product ? (
        <div>
          <header>
            <Header />
          </header>
          <div className="flex items-center justify-between mt-[200px] mx-auto max-w-[1920px] w-[70%]">
            <div className="w-[50%]">
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="w-[500px] rounded-xl"
              />
            </div>
            <div className="w-[50%]">
              <h1 className="text-4xl font-bold">{product.name}</h1>
              <p className="text-xl text-gray-500 mt-2">
                {product.description}
              </p>
              <p className="text-2xl my-2">Sizes</p>
              <div className="flex items-center gap-2">
                {product.sizes.map((s, i) => (
                  <Link key={i} href={`/product/${id}?size=${s}`}>
                    <button
                      className={`rounded-lg text-white bg-blue-400 px-10 cursor-pointer py-2 ml-2 text-2xl duration-300 active:scale-90 hover:bg-blue-500 ${
                        currentSize === s ? " bg-cyan-500 scale-110" : ""
                      }`}
                    >
                      {s}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default ProductId;
