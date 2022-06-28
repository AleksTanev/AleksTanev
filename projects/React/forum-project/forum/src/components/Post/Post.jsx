import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../providers/AppContext';
import { NavLink } from 'react-router-dom';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMessage, faHeart } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import blankProfilePicture from '../../images/blank-profile-picture.svg';
import { getUserByUsername } from '../../services/users.service';


const Post = ({ post }) => {
  const { userData } = useContext(AppContext);
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    getUserByUsername(post.author)
      .then(snapshot => snapshot.val())
      .then(user => setAvatarUrl(user.avatarUrl));
  }, []);

  return (
    <div className="Post">
      <div className='post-info-left'>
        <div className='title-tags-comments'>
          {userData ? <NavLink to={'/post/' + post.id} className="post-title" >{post.title}</NavLink> : 
            <NavLink to={'/login'} className="post-title" >{post.title}</NavLink>}
          <div className="tags">
            {post?.tags?.split(',')
              .filter (tag => tag !== '')
              .map(tag => <p key={post.id + tag}>#{tag}</p>)}
          </div>
          <div className="comments-and-likes">
            <FontAwesomeIcon className='comments-icon' icon={faMessage} />
            <p>{!post.comments ? '0 comments'
              :
              Object.keys(post?.comments).length === 1 
                ? Object.keys(post?.comments).length + ' comment'
                : Object.keys(post?.comments).length + ' comments'}</p>
            <FontAwesomeIcon className='likes-icon' icon={faHeart} />
            <p>{post.likedBy.length === 1
              ? post.likedBy.length + ' like'
              : post.likedBy.length + ' likes'}</p>
          </div>
        </div>
      </div>
      <div className="post-info-right">
        <div className="date-posted">
          <FontAwesomeIcon className='clock-icon' icon={faClock} />
          <p><Moment fromNow>{post.createdOn}</Moment></p>
        </div>
        <div className="post-author">
          <div className="profile-pic">
            {avatarUrl
              ? <img src={avatarUrl} alt="profile-picture" />
              : <img src={blankProfilePicture} alt="profile-picture" />}
          </div>
          <p className='author-name'>{post.author}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;