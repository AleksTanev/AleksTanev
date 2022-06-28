import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../../services/posts.service';
import Post from '../../components/Post/Post';
import { getAllUsers } from '../../services/users.service';
import './SearchResults.css';

export default function SearchResults({ searchInput, searchType }) {
  const [results, setResults] = useState([]);

  useEffect( () => {
    if (searchType === 'tags') {

      getAllPosts()
        .then(res => res.filter( p => p.tags?.includes(searchInput.toLowerCase())))
        .then(res => setResults(res))
        .catch(console.error);    

      return;
    } else if (searchType === 'users') {

      getAllUsers()
        .then(res => res.filter( u => u.username?.toLowerCase().includes(searchInput.toLowerCase())))
        .then(res => setResults(res))
        .catch(console.error);

      return;
    }

    getAllPosts()
      .then(res => res.filter( p => p.title.toLowerCase().includes(searchInput.toLowerCase())))
      .then(res => setResults(res))
      .catch(console.error);
      
    return;
  },[searchInput, searchType]);

  return (
    <div className='search-container'>
      {
        results.length === 0
          ? <div className='no-results'>No results to show for {searchInput}. :/</div>
          : searchType === 'users' ? 
            results.map((user) => <div className='user-result' key={user.username}>{user.username}</div>)
            :
            results.map(post => <Post key={post.id} post={post} />)
      }
    </div>
  );
}