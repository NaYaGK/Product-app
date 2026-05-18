'use client';

import { useSearchParams } from 'next/navigation';

export default function Footer() {
  const searchParams = useSearchParams();
  const locale = (searchParams.get('lang') as 'en' | 'fr') || 'en';

  const textMap = {
    en: {
      about: 'About',
      contact: 'Contact',
      rights: 'All rights reserved',
    },
    fr: {
      about: 'À propos',
      contact: 'Contact',
      rights: 'Tous droits réservés',
    },
  };

  const t = textMap[locale];

  return (
    <footer className="mt-auto bg-black text-white border-t border-gray-700 p-6">
      <div className="flex justify-between items-center">

        {/* Left */}
        <div className="font-bold">
          MyStore
        </div>

        {/* Center */}
        <div className="flex gap-6">
          <span className="cursor-pointer hover:underline">
            {t.about}
          </span>
          <span className="cursor-pointer hover:underline">
            {t.contact}
          </span>
        </div>

        {/* Right */}
        <div className="text-sm text-gray-400">
          © 2026 MyStore. {t.rights}
        </div>

      </div>
    </footer>
  );
}