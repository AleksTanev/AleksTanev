import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faSpa } from '@fortawesome/free-solid-svg-icons';
import { logoutUser } from '../../services/auth.service';
import AppContext from '../../providers/AppContext';
import { getAllTags } from '../../services/tags.service';
import blankProfilePicture from '../../images/blank-profile-picture.svg';


export default function Header({ setSearch }) {
  const { user, userData, setContext } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('');
  const [loadPreviewResults, setLoadPreviewResults] = useState(null);
  const [showDropdown, setShowDropdown] = useState(null);
  
  const navigate = useNavigate();

  useEffect( () => {

  },[loadPreviewResults]);

  const submitSearch = () => {
    if (!user) {
      return alert('Please login before you search!');
    }

    setSearch({
      type:searchType,
      input:searchInput
    });

    navigate('/search-results');
  };

  const clicked = (type) => {
    setSearchType(type);
    // submitSearch();
    setShowDropdown(false);
  };

  const toggleDropDown = () => {
    if (searchInput.length>2){
      tagsPreview();
      setShowDropdown(true);
    }
    if (searchInput.length<3) {
      setShowDropdown(false);
    }
  };

  const tagsPreview = () => {
    setLoadPreviewResults(null);
    const previewLimit = 3;

    return getAllTags()
      .then(res => res.filter(t => t.tag.includes(searchInput.toLowerCase())))
      .then(res => res.map(t => t.tag).splice(0,previewLimit))
      .then(res => setLoadPreviewResults(res))
      .catch(console.error);
  };

  const logout = () => {
    logoutUser()
      .then(() => {
        setContext({ user: null, userData: null });
        navigate('/');
      });
  };
  
  return (
    <header className="Header">
      <div className='header-container'>
        <div className="logo" onClick={() => navigate('/')}>
          <FontAwesomeIcon className='logo-icon' icon={faSpa} />
        </div>
        <div className='search'>
          <input className="search-input" placeholder='Search here' value={searchInput}
            onKeyUp={()=> toggleDropDown()} onFocus={() => toggleDropDown()}
            onChange={(e) => setSearchInput(e.target.value) } spellCheck='false'/>
          <button className='search-btn'><FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} onClick={submitSearch} /></button>
        </div>
        {showDropdown && 
        <div className='dropdown'>
          <div className='dropdown-container'>
            <div className='dropdown-element'> by tag:  
              {
                loadPreviewResults === null ? 
                  ' Loading...' :
                  loadPreviewResults.length === 0 ?
                    ' No tags matching' :
                    <div className='preview-tags-row'>{
                      loadPreviewResults.map(tag => {
                        return (
                          <div className='preview-tag' key={tag} onClick={() => clicked('tags')}>{tag}</div>
                        );
                      })
                    }</div>              
              }
            </div>
            {
              userData?.isAdmin && <div className='dropdown-element' onClick={() => clicked('users')}>search users...</div>
            }
            <div className='dropdown-element' onClick={() => clicked('posts')}>search posts...</div>
          </div>

        </div>}
        <div className="buttons">
          {userData
            ? <div className="buttons">
              <div className="new-post-btn" onClick={() => navigate('/new-post')}>
                <FontAwesomeIcon className='plus-icon' icon={faPlus} />
              </div>
              <div className="profile-pic-nav" onClick={() => navigate('/profile')}>
                {userData.avatarUrl
                  ? <img src={userData.avatarUrl} alt="profile-picture" />
                  : <img src={blankProfilePicture} alt="profile-picture" />}
              </div>
              <button className="log-out-btn btn" onClick={logout}>Log out</button>
            </div>
            : <div>
              <NavLink to="/login">
                <button className="log-in-btn btn">Log in</button>
              </NavLink>
              <NavLink to="/signup">
                <button className="sign-up-btn btn">Sign up</button>
              </NavLink>
            </div> }
        </div>
      </div>
    </header>
  );
}
