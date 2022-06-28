import React, { useState } from 'react';
import { editComment, deleteComment, likeComment, dislikeComment } from '../../services/posts.service';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons';
import './Comment.css';

export const Comment = ({ commentId, postId, comment, author, isAuthor, createdOn, likedBy, username }) => {
  const [isActive, setIsActive] = useState(null);
  const [textValue, setTextValue] = useState(comment);

  const isCommentLiked = () => likedBy.includes(username);

  const submitCommentEdit = () => {

    editComment(postId, commentId, textValue)
      .catch(error => console.log(error.message))
      .finally(() => {
        setIsActive(false);
      });
    
  };

  return (
    <div className="Comment">
      <div className="comment-top">
        <div className='author-wrapper'>
          <p className='comment-author'>@{author}</p>
          <span>|</span>
          <p className='elapsed-time'><Moment fromNow>{createdOn}</Moment></p>
        </div>
        <div className="buttons-wrapper">
          {isAuthor && !isActive && <button className='edit-comment-btn' onClick={() => setIsActive(true)}>
            <FontAwesomeIcon className='edit-icon' icon={faPencil} />
          </button>}
          {isAuthor
            ? <button className='delete-comment-btn' onClick={() => (deleteComment(postId, commentId))} >
              <FontAwesomeIcon className='delete-icon' icon={faTrashCan} />
            </button>
            : null
          } 
        </div>
      </div>
      <div className='comment-content'>
        {
          isActive ? 
            <div className='edit-box'>
              <textarea className='edit-box-text-field' value={textValue} onChange={e => setTextValue(e.target.value)} />
              <div className="buttons">
                <button className='submit-btn' onClick={submitCommentEdit}>Submit</button>
                <button className='cancel-btn' onClick={() => setIsActive(false)}>Cancel</button>
              </div>
            </div>
            : textValue
        }
      </div>
      <FontAwesomeIcon className='likes-icon' icon={faHeart} onClick={() => isCommentLiked()
        ? dislikeComment(postId, commentId, username)
        : likeComment(postId, commentId, username)
      } />
      <span className='number-of-likes'>{likedBy.length === 1 ? (likedBy.length + ' like') : (likedBy.length + ' likes')}</span>
    </div>
  );
};