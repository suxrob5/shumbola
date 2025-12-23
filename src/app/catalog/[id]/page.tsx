import { catalogData } from "@/components/catalog/ct-data";
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

  const filterData = catalogData.filter((link) => link.link === id);

  if (filterData.length === 0) {
    return <NotFound />;
  }

  const name = catalogData.find((item) => item.link === id)?.name;

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="mt-40">
        <IdPage name={name} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
