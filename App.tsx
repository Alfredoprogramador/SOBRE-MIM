
import React, { useState, useCallback } from 'react';
import { Post } from './types';
import { posts as mockPosts } from './data/posts';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import AboutMe from './components/AboutMe';

const App: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [language, setLanguage] = useState<'en' | 'es' | 'pt'>('pt');

  const handleSelectPost = useCallback((post: Post) => {
    setShowAboutPage(false);
    setSelectedPost(post);
    window.scrollTo(0, 0);
  }, []);

  const handleBackToList = useCallback(() => {
    setSelectedPost(null);
    setShowAboutPage(false);
  }, []);

  const handleShowAbout = useCallback(() => {
    setSelectedPost(null);
    setShowAboutPage(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-dark-text">
      <Header 
        onShowAbout={handleShowAbout} 
        language={language} 
        onLanguageChange={setLanguage} 
      />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedPost ? (
          <PostDetail 
            post={selectedPost} 
            onBack={handleBackToList} 
            language={language}
          />
        ) : showAboutPage ? (
          <AboutMe onBack={handleBackToList} language={language} />
        ) : (
          <PostList posts={mockPosts} onSelectPost={handleSelectPost} language={language} />
        )}
      </main>
      <Footer onShowAbout={handleShowAbout} language={language} />
    </div>
  );
};

export default App;
