
import React from 'react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  onSelectPost: (post: Post) => void;
  language: 'en' | 'es' | 'pt';
}

const PostCard: React.FC<PostCardProps> = ({ post, onSelectPost, language }) => {
  const readMoreText: Record<typeof language, string> = {
    pt: 'Leia mais →',
    en: 'Read more →',
    es: 'Leer más →',
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img className="h-56 w-full object-cover" src={post.imageUrl} alt={post.title[language]} />
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm font-semibold text-primary uppercase tracking-wide">{post.category[language]}</p>
        <h3 className="mt-2 text-xl font-bold text-dark-text">{post.title[language]}</h3>
        <p className="mt-3 text-base text-light-text flex-grow">{post.excerpt[language]}</p>
        <div className="mt-6">
          <button
            onClick={() => onSelectPost(post)}
            className="text-base font-semibold text-primary hover:text-blue-700"
          >
            {readMoreText[language]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
