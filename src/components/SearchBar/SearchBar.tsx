'use client';

import { useRouter } from 'next/navigation';

type Props = {
  value: string;
  onChange: (value: string) => void;
  locale?: 'en' | 'fr';
};

export default function SearchBar({
  value,
  onChange,
  locale = 'en',
}: Props) {
  const router = useRouter();

  const placeholderMap = {
    en: 'Search products...',
    fr: 'Rechercher...',
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        const val = e.target.value;
        onChange(val); // update state
        router.push(`/?search=${val}&lang=${locale}`); // update URL
      }}
      placeholder={placeholderMap[locale]}
      className="w-full p-3 rounded-lg mb-6 bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
/* 'use client';
import { useRouter } from 'next/navigation';

type Props = {
  value: string;
  

  const router = useRouter();
  
  onChange={(e) => {
    const value = e.target.value;
    onChange(value);
    router.push(`/?search=${value}&lang=${locale}`);
  }}
  locale?: 'en' | 'fr';
};


export default function SearchBar({
  value,
  onChange,
  locale = 'en',
}: Props) {
  const placeholderMap = {
    en: 'Search products...',
    fr: 'Rechercher...',
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholderMap[locale]}
className="w-full p-3 rounded-lg mb-6 bg-gray-800 text-white border border-gray-600
 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      //className="w-full p-3 border rounded-lg mb-6 text-black"
    />
  );
} */