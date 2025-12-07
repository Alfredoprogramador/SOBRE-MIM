
import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { TwitterIcon } from './icons/TwitterIcon';

interface FooterProps {
  onShowAbout: () => void;
  language: 'en' | 'es' | 'pt';
}

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/alfredoprogramador', icon: <GithubIcon /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alfredorecio24228588', icon: <LinkedInIcon /> },
  { name: 'Twitter', url: 'https://twitter.com/alfredomartan', icon: <TwitterIcon /> },
];

const Footer: React.FC<FooterProps> = ({ onShowAbout, language }) => {
  const currentYear = new Date().getFullYear();
  const translations: Record<typeof language, { about: string; copyright: string }> = {
    pt: {
      about: 'Sobre Mim',
      copyright: `© ${currentYear} Developer's Chronicle. Todos os Direitos Reservados.`,
    },
    en: {
      about: 'About Me',
      copyright: `© ${currentYear} Developer's Chronicle. All Rights Reserved.`,
    },
    es: {
      about: 'Sobre Mí',
      copyright: `© ${currentYear} Developer's Chronicle. Todos los Derechos Reservados.`,
    },
  };

  return (
    <footer className="bg-white mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-light-text">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light-text hover:text-primary transition-colors duration-200"
              aria-label={`Visit my ${link.name} profile`}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p>{translations[language].copyright}</p>
        <div className="mt-2">
           <button
              onClick={onShowAbout}
              className="text-sm text-light-text hover:text-dark-text underline transition-colors duration-200"
            >
              {translations[language].about}
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
