
import React from 'react';

interface HeaderProps {
  onShowAbout: () => void;
  language: 'en' | 'es' | 'pt';
  onLanguageChange: (lang: 'en' | 'es' | 'pt') => void;
}

const Header: React.FC<HeaderProps> = ({ onShowAbout, language, onLanguageChange }) => {
  const translations = {
    pt: {
      about: 'Sobre Mim',
      subtitle: 'Insights e código de uma jornada de desenvolvimento de software.',
    },
    en: {
      about: 'About Me',
      subtitle: 'Insights and code from a software development journey.',
    },
    es: {
      about: 'Sobre Mí',
      subtitle: 'Ideas y código de un viaje de desarrollo de software.',
    },
  };

  const languages: { key: 'pt' | 'en' | 'es'; label: string }[] = [
    { key: 'pt', label: 'PT' },
    { key: 'en', label: 'EN' },
    { key: 'es', label: 'ES' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Developer's Chronicle
          </h1>
          <p className="mt-2 text-lg text-light-text">
            {translations[language].subtitle}
          </p>
        </div>
        <nav className="flex items-center gap-6">
          <button
            onClick={onShowAbout}
            className="text-lg font-semibold text-primary hover:text-blue-700 transition-colors duration-200"
          >
            {translations[language].about}
          </button>
          <div className="flex items-center gap-2 border-l border-gray-200 pl-6">
            {languages.map((lang) => (
              <button
                key={lang.key}
                onClick={() => onLanguageChange(lang.key)}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
                  language === lang.key
                    ? 'bg-primary text-white shadow'
                    : 'text-light-text hover:bg-gray-200'
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
