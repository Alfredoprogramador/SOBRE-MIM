
import React from 'react';
import { Post } from '../types';
import PostCard from './PostCard';

interface PostListProps {
  posts: Post[];
  onSelectPost: (post: Post) => void;
  language: 'en' | 'es' | 'pt';
}

const PostList: React.FC<PostListProps> = ({ posts, onSelectPost, language }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onSelectPost={onSelectPost} language={language} />
      ))}
    </div>
  );
};

export default PostList;
