import Link from 'next/link';

type Product = {
    id: number;
    title: { en: string; fr: string };
    image: string;
  };
  
  type Props = {
    items: Product[];
    columns?: 3 | 4;
    locale?: 'en' | 'fr';
  };
  
  export default function ProductGrid({
    items,
    columns = 4,
    locale = 'en',
  }: Props) {
    const gridClass =
      columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4';
  
    return (
      <div className={`grid gap-6 ${gridClass}`}>
        {items.slice(0, columns).map((item) => (
/* <div
  key={item.id}
  className="border p-4 rounded-lg bg-gray-900 shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
> */
/* <Link href={`/products/${item.id}`} key={item.id}> */
<Link href={`/products/${item.id}?lang=${locale}`} key={item.id} className="block">
  <div className="border p-4 rounded-lg bg-gray-900 shadow-lg hover:shadow-2xl 
  hover:scale-105 transition duration-300 cursor-pointer">
            <img src={item.image} alt="" className="w-full" />
            <h3 className="mt-2 font-bold">
              {item.title[locale]}
            </h3>
          </div>
          </Link>
        ))}
      </div>
    );
  }