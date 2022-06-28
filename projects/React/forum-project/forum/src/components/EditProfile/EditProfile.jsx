import React, { useState } from 'react';
import './EditProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import blankProfilePicture from '../../images/blank-profile-picture.svg';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getUserData, updateUserData, updateUserProfilePicture } from '../../services/users.service';
import { storage } from '../../config/firebase-config';
import { useNavigate } from 'react-router-dom';

export const EditProfile = ({ user, userData, setContext }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
  });

  const updateForm = (prop) => (e) => {
    setForm({
      ...form,
      [prop]: e.target.value,
    });
  };

  const update = (event) => {
    event.preventDefault();

    updateUserData(userData.username, form.firstName, form.lastName, form.email)
      .then(() => {

        return getUserData(user.uid)
          .then(snapshot => {

            if (snapshot.exists()) {

              setContext({
                user: user,
                userData: snapshot.val()[Object.keys(snapshot.val())[0]],
              });

              navigate('/home');
            }
          });
      })
      .catch(console.error);
  };


  const uploadPicture = (e) => {
    e.preventDefault();

    const username = userData.username;

    const file = e.target?.files?.[0];

    if (!file) return alert('Please select a file!');

    const picture = storageRef(storage, `images/${username}/avatar`);

    uploadBytes(picture, file)
      .then(snapshot => {
        return getDownloadURL(snapshot.ref)
          .then(url => {
            return updateUserProfilePicture(username, url)
              .then(() => {
                setContext({
                  user,
                  userData: {
                    ...userData,
                    avatarUrl: url,
                  },
                });
              });
          });
      })
      .catch(console.error);
  };

  return (
    <div className="EditProfile">
      <div className="tab-container profile-container">
        <div className='profile-picture-container'>
          <h3>Profile Picture:</h3>
          <div className='profile-picture'>
            <label className="file-upload">
              <input type="file" onChange={uploadPicture} />
              <FontAwesomeIcon className='edit-icon' icon={faPencil} />
            </label>
            {userData.avatarUrl ? <img src={userData.avatarUrl} alt="profile-picture" /> : <img src={blankProfilePicture} alt="profile-picture" />}
          </div>
        </div>
        <div className='user-details-container'>
          <h3>Username:</h3>
          <p className='username'>@{userData.username}</p>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            placeholder={userData.email}
            value={form.email}
            onChange={updateForm('email')}
          />
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            placeholder={userData.firstName}
            value={form.firstName}
            onChange={updateForm('firstName')}
          />
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            placeholder={userData.lastName}
            value={form.lastName}
            onChange={updateForm('lastName')}
          />
        </div>
      </div>
      <button className='profile-save-changes-btn' onClick={update}>Save changes</button>
      <button className='profile-cancel-btn' onClick={() => navigate(-1)}>Cancel</button>
    </div>
  );
};