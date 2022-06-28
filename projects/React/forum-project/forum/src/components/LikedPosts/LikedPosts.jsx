import React, { useEffect, useState } from 'react';
import { getLikedPosts } from '../../services/posts.service';
import Posts from '../Posts/Posts';
import './LikedPosts.css';

export const LikedPosts = ({ userData }) => {
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {

    getLikedPosts(userData.username)
      .then(setLikedPosts)
      .catch(console.error);
  }, []);

  return (
    <div className="LikedPosts">
      <Posts posts={likedPosts} />
    </div>
  );
};