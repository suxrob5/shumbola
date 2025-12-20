import { catalogData } from "@/components/catalog/ct-data";
import Footer from "@/components/footer";
import Header from "@/components/header";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CatalogID({ params }: Props) {
  const { id } = await params;

  const item = catalogData.find((el) => String(el.id) === id);

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="mt-40">
        <h1>Catalog ID: {id}</h1>
        <pre>{JSON.stringify(item, null, 2)}</pre>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
