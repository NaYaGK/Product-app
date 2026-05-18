import ProductGrid from '@/components/ProductGrid/ProductGrid';
import { products } from '@/data/products';
import Header from '@/components/Header/Header';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; lang?: 'en' | 'fr' }>;
}) {
  const params = await searchParams;

  const search = params.search ?? '';

  const lang: 'en' | 'fr' =
    params.lang === 'fr' ? 'fr' : 'en'; // ✅ SAFE

  const filteredProducts = products.filter((item) =>
    item.title?.[lang]?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* ✅ Header INSIDE return */}
      <Header locale={lang} search={search} />

      <main className="p-10">
        <h1 className="text-2xl font-bold mb-6">
          Product Grid
        </h1>

        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-400 mt-20">
            <h2 className="text-2xl font-semibold">
              {lang === 'fr' ? 'Aucun produit trouvé' : 'No products found'}
            </h2>
            <p className="mt-2">
              {lang === 'fr'
                ? 'Essayez un autre mot-clé'
                : 'Try a different keyword'}
            </p>
          </div>
        ) : (
          <ProductGrid
            items={filteredProducts}
            columns={4}
            locale={lang}
          />
        )}
      </main>
    </>
  );
}