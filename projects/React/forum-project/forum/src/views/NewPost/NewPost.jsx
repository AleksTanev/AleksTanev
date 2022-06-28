import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../providers/AppContext';
import { addPost } from '../../services/posts.service';
import { addTags } from '../../services/tags.service';
import './NewPost.css';

export const NewPost = () => {
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [title, setTitle] = useState('');
  const { userData } = useContext(AppContext);
  const navigate = useNavigate();

  const createPost = () => {
    addTags(tags.toLowerCase());

    addPost(title, content, userData.username, tags.toLowerCase())
      .then(({ id }) => {
        setTitle('');
        setContent('');
        setTags('');
        navigate(`/post/${id}`);
      })
      .catch(e => alert(e.message));
  }; 


  return (
    <div className="NewPost">
      <h2>Create a post</h2>
      <div className="Form">
        <input
          type="text"
          id="title"
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          id="post-text"
          placeholder='Text'
          rows='10'
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={e => setTags(e.target.value )}
          placeholder='Tags, separated by commas'
        />
        <div className='form-buttons'>
          <button className='form-post-btn' onClick={createPost}>Post</button>
          <button className='form-cancel-btn'>Cancel</button>
        </div>
      </div>
    </div>
  );
};
