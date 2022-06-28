import React, { useContext, useEffect, useState } from 'react';
import './PostDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faHeart, faPlusCircle, faPencil, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { editPost, getLivePostData, editTags } from '../../services/posts.service';
import AppContext from '../../providers/AppContext';
import { likePost, dislikePost, deletePost } from '../../services/posts.service';
import { addComment, getPostById } from '../../services/posts.service';
import { Comment } from '../../components/Comment/Comment';
import { updateTag, removeTag, addTags } from '../../services/tags.service';
import { useNavigate } from 'react-router-dom';
import blankProfilePicture from '../../images/blank-profile-picture.svg';

const PostDetails = () => {
  const { userData } = useContext(AppContext);
  const [post, setPost] = useState(null);
  const [isActive, setIsActive] = useState(null);
  const [textValue, setTextValue] = useState(null);
  const [addCommentValue, setAddCommentValue] = useState('');
  const [isTagActive, setIsTagActive] = useState(false);
  const [tagValue, setTagValue] = useState(null);
  const [addNewTags, setAddNewTags] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();

  const isPostLiked = () => post.likedBy.includes(userData.username);
  
  useEffect(() => {
    const unsubscribe = getLivePostData(id, () => {
      getPostById(id)
        .then(setPost)
        .catch(console.error);
    });
  
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setTextValue(post?.content);
  }, [post]);

  const submitPostEdit = () => {

    editPost(id, textValue)
      .catch(error => console.log(error.message))
      .finally(() => {
        setIsActive(false);
      });
    
  };

  const submitComment = () => {

    addComment(id, addCommentValue, userData.username)
      .catch(console.error)
      .finally(() => setAddCommentValue(''));
  };

  const submitTagEdit = (type, tag) => {

    if (type === 'remove') {
      const tags = post.tags.split(',').filter(t => t!== tag);
      removeTag(tag);
      editTags(id, tags);
      return;
    }

    if (type === 'add') {
      if (!tag) {
        setAddNewTags(false);
        return;
      }
      tag = tag.toLowerCase();
      addTags(tag);
      editTags(id,[...post.tags.split(','), ...tag.split(',')])
        .catch(console.error)
        .finally(() => {
          setTagValue(null);
          setAddNewTags(false);});
      return;
    }

    if (type === 'edit') {

      if (!tagValue) {
        setIsTagActive(false);
        return;
      }

      const tagsArr = post.tags.split(',');
      const tags = tagsArr
        .map(t => {
          if (t === tag.toLowerCase()) {
            return tagValue.toLowerCase();
          }
          return t;
        });
      
      updateTag(tag.toLowerCase(),tagValue.toLowerCase());
      editTags(id,tags)
        .catch(console.error)
        .finally(() => {
          setIsTagActive(false);
          setTagValue(null);
        });
  
      return;
    }
  };

  return (
    post === null || userData === null
      ? <p>Loading post details...</p>
      : <div className="PostDetails">
        <div className='title-tags-comments'>
          <div className="title-author-and-btns">
            <div className="title-and-author">
              <h2 className='post-title'>{post.title}</h2>
              <p className='post-author'>@{post.author}</p>
            </div>
            <div className='del-edit-btn-wrapper'>
              {(userData?.username === post.author || userData?.isAdmin) && !isActive &&
            <button className='edit-post-btn' onClick={() => setIsActive(true)}>
              <FontAwesomeIcon className='edit-icon' icon={faPencil} />
            </button>
              }
              {(userData?.username === post.author || userData?.isAdmin) 
                ? <button className='delete-post-btn' onClick={() => {
                  post.tags?.split(',').map(t => removeTag(t));
                  deletePost(id);
                  navigate('/home');
                }} >
                  <FontAwesomeIcon className='delete-icon' icon={faTrashCan} />
                </button>
                : null
              } 
            </div>
          </div>
          <div className='post-content'>
            {
              isActive ? 
                <div className='edit-box'>
                  <textarea className='edit-box-text-field' value={textValue} onChange={e => setTextValue(e.target.value)}/>
                </div>
                : <p>{post.content}</p>
            }
          </div>
          <div className="tags">
            {
              post?.tags?.split(',').map((tag) => {
                if (!tag) {
                  return null;
                }
                return (
                  <div className="tag-box" key={tag}>
                    <div className='tag-name' onClick={() => setIsTagActive([true, tag])}>
                      {
                        (userData?.username === post.author || userData?.isAdmin) && 
                        isTagActive[0] && isTagActive[1] === tag ? 
                          <input className='tag-edit-field' 
                            value={tagValue ? tagValue : tag} 
                            onChange={(e) => setTagValue(e.target.value)}
                            onBlur={() => submitTagEdit('edit', tag)} 
                          />
                          :
                          '#'+tag
                      }
                      {
                        (userData?.username === post.author || userData?.isAdmin) && 
                        post.tags && <span className='remove-btn' onClick={() => submitTagEdit('remove', tag)}>
                          <FontAwesomeIcon className='x-icon' icon={faXmark} />
                        </span>
                      }
                    </div>
                  </div>
                );
              })
            }
            {
              addNewTags && <input placeholder='Add new tags' className='tag-edit-field'
                value={tagValue ? tagValue : ''}
                onChange={(e) => setTagValue(e.target.value)}
                onBlur={() => submitTagEdit('add', tagValue)} 
              />

            }
            {
              (userData?.username === post.author || userData?.isAdmin) &&
              <FontAwesomeIcon className='add-new-tags-btn' icon={faPlusCircle} onClick={() => setAddNewTags(true)}/>
            }
            {isActive
              ? <div className='submit-cancel-wrapper'>
                <button className='submit-btn' onClick={submitPostEdit}>Submit</button>
                <button className='cancel-btn' onClick={() => setIsActive(false)}>Cancel</button>
              </div>
              : null
            }
          </div>
          <div className="comments-and-likes">
            <FontAwesomeIcon className='comments-icon' icon={faMessage} />
            <p>{Object.keys(post.comments).length === 1
              ? Object.keys(post.comments).length + ' comment'
              : Object.keys(post.comments).length + ' comments'}</p>
            <FontAwesomeIcon className='likes-icon' icon={faHeart} onClick={() => isPostLiked()
              ? dislikePost(userData.username, id)
              : likePost(userData.username, id)
            } />
            <p>{post.likedBy.length === 1
              ? (post.likedBy.length + ' like')
              : (post.likedBy.length + ' likes')}</p>
          </div>
          <div className='add-comment-container'>
            <div className="profile-pic">
              
              {userData.avatarUrl
                ? <img src={userData.avatarUrl} alt="profile-picture" />
                : <img src={blankProfilePicture} alt="profile-picture" />}    
            </div>
            <textarea className='add-comment-box' value={addCommentValue} placeholder='Write a comment' onChange={e => setAddCommentValue(e.target.value)}/>
          </div>
          <button className='add-comment-btn' onClick={submitComment}>Comment</button>
          <div className='comment-list'>
            <hr />
            {
              post.comments ? 
                Object.entries(post.comments).map(([key,value]) => {
                  return <Comment
                    key={key}
                    commentId={key}
                    postId={id}
                    comment={value.comment}
                    author={value.username}
                    isAuthor={userData?.username === value.username}
                    createdOn={value.createdOn}
                    likedBy={value.likedBy ? Object.keys(value.likedBy) : []}
                    username={userData.username} />;
                })
                :
                <p className='no-comments-text'>Be the first one to comment on this post!</p>
            }
          </div>
        </div>
      </div>
  );
};

export default PostDetails;