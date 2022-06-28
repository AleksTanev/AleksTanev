import React, { useEffect, useState } from 'react';
import { getPostsByAuthor } from '../../services/posts.service';
import Posts from '../Posts/Posts';
import './OwnPosts.css';

export const OwnPosts = ({ userData }) => {
  const [ownPosts, setOwnPosts] = useState([]);

  useEffect(() => {

    getPostsByAuthor(userData.username)
      .then(setOwnPosts)
      .catch(console.error);

  }, []);

  return (
    <div className="OwnPosts">
      <div className="container">
        <Posts posts={ownPosts} />
      </div>
    </div>
  );
};