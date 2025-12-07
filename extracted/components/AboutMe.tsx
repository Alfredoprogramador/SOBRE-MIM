import React from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
// Fix: Import the profile image from the local data file.
import { profileImage } from '../data/profileImage';

interface AboutMeProps {
  onBack: () => void;
  language: 'en' | 'es' | 'pt';
}

const translations = {
  pt: {
    back: 'Voltar para todos os posts',
    alt: 'Foto de Alfredo Recio Martan',
    bio1: 'Estudante de Análise e Desenvolvimento de Sistemas na UNIP.',
    bio2: 'Atualmente adquirindo experiência através de projetos acadêmicos e como freelancer.',
  },
  en: {
    back: 'Back to all posts',
    alt: 'Photo of Alfredo Recio Martan',
    bio1: 'Student of Systems Analysis and Development at UNIP.',
    bio2: 'Currently gaining experience through academic projects and as a freelancer.',
  },
  es: {
    back: 'Volver a todos los posts',
    alt: 'Foto de Alfredo Recio Martan',
    bio1: 'Estudiante de Análisis y Desarrollo de Sistemas en UNIP.',
    bio2: 'Actualmente adquiriendo experiencia a través de proyectos académicos y como freelancer.',
  }
};


const AboutMe: React.FC<AboutMeProps> = ({ onBack, language }) => {
  const content = translations[language];

  return (
    <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 sm:p-8 lg:p-12 animate-fade-in">
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
      <button
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 text-primary hover:text-blue-700 font-semibold transition-colors"
      >
        <ArrowLeftIcon />
        {content.back}
      </button>
      
      <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <img
          className="w-48 h-48 rounded-lg object-cover shadow-lg flex-shrink-0 border-4 border-white"
          // Fix: Use the imported profile image variable as the source.
          src={profileImage}
          alt={content.alt}
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-dark-text tracking-tight">
            Alfredo Recio Martan
          </h1>
          <p className="mt-4 text-lg text-light-text">
            {content.bio1}
          </p>
          <p className="mt-2 text-lg text-light-text">
            {content.bio2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;