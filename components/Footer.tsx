
import React from 'react';

interface FooterProps {
  language: 'en' | 'es' | 'pt';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const currentYear = new Date().getFullYear();
  const translations: Record<typeof language, { copyright: string; contact: string; terms: string; privacy: string }> = {
    pt: {
      copyright: `© ${currentYear} ElecDigi. Todos os Direitos Reservados.`,
      contact: 'Contato',
      terms: 'Termos de Serviço',
      privacy: 'Política de Privacidade'
    },
    en: {
      copyright: `© ${currentYear} ElecDigi. All Rights Reserved.`,
      contact: 'Contact',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy'
    },
    es: {
      copyright: `© ${currentYear} ElecDigi. Todos los Derechos Reservados.`,
      contact: 'Contacto',
      terms: 'Términos de Servicio',
      privacy: 'Política de Privacidad'
    },
  };

  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-2">ElecDigi</h3>
            <p className="text-gray-300 text-sm">
              {language === 'en' && 'Your trusted source for electronics and digital products.'}
              {language === 'es' && 'Tu fuente confiable de electrónica y productos digitales.'}
              {language === 'pt' && 'Sua fonte confiável de eletrônicos e produtos digitais.'}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{translations[language].contact}</h4>
            <p className="text-gray-300 text-sm">Email: info@elecdigi.com</p>
            <p className="text-gray-300 text-sm">
              {language === 'en' && 'Phone: +1 (555) 123-4567'}
              {language === 'es' && 'Teléfono: +1 (555) 123-4567'}
              {language === 'pt' && 'Telefone: +1 (555) 123-4567'}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              {language === 'en' && 'Information'}
              {language === 'es' && 'Información'}
              {language === 'pt' && 'Informações'}
            </h4>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{translations[language].terms}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{translations[language].privacy}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">{translations[language].copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
