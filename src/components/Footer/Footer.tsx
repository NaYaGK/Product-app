'use client';

type Props = {
  locale?: 'en' | 'fr';
};

export default function Footer({ locale = 'en' }: Props) {
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
        <div className="font-bold">MyStore</div>

        <div className="flex gap-6">
          <span>{t.about}</span>
          <span>{t.contact}</span>
        </div>

        <div className="text-sm text-gray-400">
          © 2026 MyStore. {t.rights}
        </div>
      </div>
    </footer>
  );
}