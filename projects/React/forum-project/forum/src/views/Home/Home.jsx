import React, { useEffect, useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCommentDots, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Posts from '../../components/Posts/Posts';
import { fromPostsDocument, getLivePosts } from '../../services/posts.service';
import { getUsersCount } from '../../services/users.service';
import { NavLink } from 'react-router-dom';

export const Home = ({ authenticated }) => {
  const [posts, setPosts] = useState([]);
  const [usersCount, setUsersCount] = useState([]);
  const [showLatest, setShowLatest] = useState(true);
  const [endIndex, setEndIndex] = useState(9);

  useEffect(() => {
    getUsersCount()
      .then(setUsersCount);

    const unsubscribe = getLivePosts((snapshot) => {
      setPosts(fromPostsDocument(snapshot).sort((a,b) => b.createdOn - a.createdOn));
    });

    console.log('changes detected');
    return () => unsubscribe();
  }, []);

  const getLatestPosts = () => {
    setPosts([...posts].sort((a, b) => b.createdOn - a.createdOn));
    setShowLatest(true);    
  };

  const getPopularPosts = () => {
    setPosts([...posts].sort((a, b) => Object.keys(b.comments).length - Object.keys(a.comments).length));
    setShowLatest(false);
  };

  const updateIndices = () => {
    setEndIndex(endIndex + 10);
  };
  
  return (
    <div className='Home'>
      <div className='banner'>
        <div className='banner-text-wrapper'>
          <h2 className='forum-title'>The Garden</h2>
          <p className='forum-subtitle'>A forum for plant lovers</p>
        </div>
        <div className="banner-stats-wrapper">
          <div className="user-stats">
            <FontAwesomeIcon className='users-icon' icon={faUsers} />
            <p><span className='users-count'>{usersCount}</span><br />users</p>
          </div>
          <div className="posts-stats">
            <FontAwesomeIcon className='posts-icon' icon={faCommentDots} />
            <p><span className='posts-count'>{posts.length}</span><br />posts</p>
          </div>
        </div>
      </div>
      <div className="all-posts">
        <div className="posts-sort-filter">
          <span className={`latest${showLatest ? ' active' : ''}`} onClick={getLatestPosts}>Latest</span>
          <span className={`popular${showLatest ? '' : ' active'}`} onClick={getPopularPosts}>Popular</span>
        </div>
        {
          !authenticated
            ? <div>
              <Posts posts={posts.slice(0, endIndex)} />
              <p className='unauthenticated-message'><NavLink to="/signup">Sign up</NavLink> or <NavLink to="/login">log in</NavLink> to see more posts!</p>
            </div>
            : <div>
              <Posts posts={posts.slice(0, endIndex)} />
              {
                endIndex > posts.length - 1
                  ? <p className="no-more-posts">No more posts to show.</p>
                  : <div className="show-more" onClick={updateIndices}>
                    <p>Show more</p>
                    <FontAwesomeIcon className='down-arrow-icon' icon={faAngleDown} />
                  </div>
              }
            </div>
        }
      </div>
    </div>
  );
};