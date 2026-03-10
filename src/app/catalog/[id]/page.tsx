import { catalogData } from "@/backend/cat-data";
import IdPage from "@/components/catalog/id-page";
import Footer from "@/components/footer";
import Header from "@/components/header";
import NotFound from "@/components/not-found";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CatalogID({ params }: Props) {
  const { id } = await params;

  const item = catalogData.find((item) => item.link === id);
  if (!item) {
    return <NotFound />;
  }

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="mt-40">
        <IdPage item={item} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
