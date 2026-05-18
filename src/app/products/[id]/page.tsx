import { products } from '@/data/products';
import Link from 'next/link';
import Header from '@/components/Header/Header';

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: 'en' | 'fr' }>;
}

export default async function ProductDetail({ params, searchParams }: PageProps) {
  const { id } = await params;
  const paramsData = await searchParams;

  const lang: 'en' | 'fr' =
    paramsData.lang === 'fr' ? 'fr' : 'en'; // ✅ SAFE

  const product = products.find((p) => p.id === Number(id));

  const textMap = {
    en: {
      back: 'Back to Products',
      notFound: 'Product not found',
    },
    fr: {
      back: 'Retour aux produits',
      notFound: 'Produit non trouvé',
    },
  };

  const t = textMap[lang];

  if (!product) {
    return (
      <>
        <Header locale={lang} />

        <div className="p-10 text-white">
          <h1 className="text-3xl font-bold">
            {t.notFound}
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      {/* ✅ Header inside return */}
      <Header locale={lang} />

      <div className="p-10 text-white">
        <Link
          href={`/?lang=${lang}`}
          className="text-blue-400 hover:underline mb-6 inline-block"
        >
          ← {t.back}
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img
            src={product.image}
            alt={product.title[lang]}
            className="w-full rounded-lg"
          />

          <div>
            <h1 className="text-3xl font-bold mb-4">
              {product.title[lang]}
            </h1>

            <p className="text-gray-400 mb-6">
              {lang === 'fr'
                ? 'Ceci est une description de produit.'
                : 'This is a sample product description.'}
            </p>

            <button className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition">
              {lang === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}