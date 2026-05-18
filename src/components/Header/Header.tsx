'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
  locale: 'en' | 'fr';
  search?: string;
};

export default function Header({ locale, search: initialSearch = '' }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState(initialSearch);

  return (
    <div className="w-full px-6 py-4 bg-black text-white border-b border-gray-700">

      {/* Top Row */}
      <div className="flex justify-between items-start w-full">

        {/* 🔹 Logo */}
        <Link href={`/?lang=${locale}`} className="text-xl font-bold">
          MyStore
        </Link>

        {/* 🔹 Right Side */}
        <div className="flex flex-col items-end">

          {/* 🌍 Language Switcher */}
          <select
            value={locale}
            onChange={(e) => {
              const lang = e.target.value as 'en' | 'fr';
              router.push(`${pathname}?lang=${lang}${search ? `&search=${search}` : ''}`);
            }}
            className="p-2 rounded bg-gray-800 border border-gray-600"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>

          {/* 🔍 Search Icon */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="text-xl mt-2"
          >
            🔍
          </button>

        </div>
      </div>

      {/* 🔽 Search Bar */}
      {showSearch && (
        <input
          type="text"
          value={search}
          onChange={(e) => {
            const val = e.target.value;
            setSearch(val);
            router.push(`/?search=${val}&lang=${locale}`);
          }}
          placeholder={locale === 'fr' ? 'Rechercher...' : 'Search products...'}
          className="w-full mt-4 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
    </div>
  );
}