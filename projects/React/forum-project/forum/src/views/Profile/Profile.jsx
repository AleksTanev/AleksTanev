import React, { useState } from 'react';
import './Profile.css';
import { useContext } from 'react';
import AppContext from '../../providers/AppContext';
import { EditProfile } from '../../components/EditProfile/EditProfile';
import { LikedPosts } from '../../components/LikedPosts/LikedPosts';
import { OwnPosts } from '../../components/OwnPosts/OwnPosts';

export const Profile = () => {
  const { user, userData, setContext } = useContext(AppContext);
  const [ showTab, setShowTab ] = useState('edit');

  const changeTab = (tab) => {
    console.log(tab);
    setShowTab(tab);
  };

  return (
    user === null || userData === null
      ? <p>Loading user data...</p>
      : <div className="Profile">
        <div className="profile-tabs">
          <span className={`edit${showTab === 'edit' ? ' active' : ''}`} onClick={() => changeTab('edit')}>Edit Profile</span>
          <span className={`liked${showTab === 'liked' ? ' active' : ''}`} onClick={() =>changeTab('liked')}>Liked Posts</span>
          <span className={`own${showTab === 'own' ? ' active' : ''}`} onClick={() => changeTab('own')}>My Posts</span>
        </div>
        {showTab === 'edit' ? <EditProfile user={user} userData={userData} setContext={setContext} /> : null}
        {showTab === 'liked' ? <LikedPosts user={user} userData={userData} setContext={setContext} /> : null}
        {showTab === 'own' ? <OwnPosts user={user} userData={userData} setContext={setContext} /> : null}
      </div>
  );
};

