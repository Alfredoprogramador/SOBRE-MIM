
import React from 'react';
import ShoppingCartIcon from './icons/ShoppingCartIcon';

interface HeaderProps {
  onShowCart: () => void;
  cartItemCount: number;
  language: 'en' | 'es' | 'pt';
  onLanguageChange: (lang: 'en' | 'es' | 'pt') => void;
}

const Header: React.FC<HeaderProps> = ({ onShowCart, cartItemCount, language, onLanguageChange }) => {
  const translations = {
    pt: {
      title: 'ElecDigi',
      subtitle: 'Eletrônicos e Produtos Digitais',
    },
    en: {
      title: 'ElecDigi',
      subtitle: 'Electronics & Digital Products',
    },
    es: {
      title: 'ElecDigi',
      subtitle: 'Electrónica y Productos Digitales',
    },
  };

  const languages: { key: 'pt' | 'en' | 'es'; label: string }[] = [
    { key: 'pt', label: 'PT' },
    { key: 'en', label: 'EN' },
    { key: 'es', label: 'ES' },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            {translations[language].title}
          </h1>
          <p className="mt-2 text-lg text-blue-100">
            {translations[language].subtitle}
          </p>
        </div>
        <nav className="flex items-center gap-6">
          <button
            onClick={onShowCart}
            className="relative bg-white text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-colors duration-200"
          >
            <ShoppingCartIcon className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
          <div className="flex items-center gap-2 border-l border-blue-500 pl-6">
            {languages.map((lang) => (
              <button
                key={lang.key}
                onClick={() => onLanguageChange(lang.key)}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
                  language === lang.key
                    ? 'bg-white text-blue-600 shadow'
                    : 'bg-blue-700 hover:bg-blue-600'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
