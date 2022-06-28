import React from 'react';
import './Posts.css';
import Post from '../Post/Post';

const Posts = ({ posts }) => {

  return (
    <div className="Posts">
      {posts.length === 0
        ? <p>No posts to show.</p>
        : posts.map((post) => <Post key={post.id + post.title} post={post} />)
      }
    </div>
  );
};

export default Posts;