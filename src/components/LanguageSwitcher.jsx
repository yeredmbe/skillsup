import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('fr') ? 'en' : 'fr';
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors text-slate-700 border border-slate-200 bg-white"
      title={i18n.language.startsWith('fr') ? "Switch to English" : "Passer en français"}
    >
      <span className="material-symbols-outlined text-lg">language</span>
      <span className="uppercase font-bold">{i18n.language.startsWith('fr') ? 'FR' : 'EN'}</span>
    </button>
  );
};
