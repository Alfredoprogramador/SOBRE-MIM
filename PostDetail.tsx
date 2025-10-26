
import React from 'react';
import { Post } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface PostDetailProps {
  post: Post;
  onBack: () => void;
  language: 'en' | 'es' | 'pt';
}

const PostDetail: React.FC<PostDetailProps> = ({ post, onBack, language }) => {
  const backText: Record<typeof language, string> = {
    pt: 'Voltar para todos os posts',
    en: 'Back to all posts',
    es: 'Volver a todos los posts',
  };

  const byText: Record<typeof language, string> = {
    pt: 'Por',
    en: 'By',
    es: 'Por',
  };

  return (
    <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 sm:p-8 lg:p-12">
      <button
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 text-primary hover:text-blue-700 font-semibold transition-colors"
      >
        <ArrowLeftIcon />
        {backText[language]}
      </button>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-text tracking-tight">{post.title[language]}</h1>
      <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-secondary">{post.category[language]}</p>
      
      <div className="mt-6 flex items-center gap-4 text-light-text">
        <span>{byText[language]} {post.author}</span>
        <span className="text-gray-400">&bull;</span>
        <span>{post.date}</span>
      </div>

      <img 
        className="mt-8 rounded-lg w-full h-auto max-h-96 object-cover shadow-md" 
        src={post.imageUrl} 
        alt={post.title[language]} 
      />

      <div className="mt-10 prose lg:prose-xl max-w-none text-gray-700">
        {post.content[language].split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-6">{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

export default PostDetail;
