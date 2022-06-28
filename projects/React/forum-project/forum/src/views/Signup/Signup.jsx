import './Signup.css';

import React, { useState } from 'react';
import { registerUser } from '../../services/auth.service';
import { createUsername, getUserByUsername } from '../../services/users.service';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const updateForm = (prop) => (e) => {
    setForm({
      ...form,
      [prop]: e.target.value,
    });
  };

  const register = (event) => {
    event.preventDefault();

    if (form.password.length < 6) {
      return alert('Password should be at least 6 characters long!');
      // TODO: create popups for error messages
    }

    if (form.password !== null && form.confirmPassword !== null && form.confirmPassword !== form.password) {
      return alert('Passwords do not match!');
    }

    if (form.firstName > 32 || form.firstName < 4) {
      return alert('The first name should be between 4 and 32 characters long!');
    }

    if (form.lastName > 32 || form.lastName < 4) {
      return alert('The last name should be between 4 and 32 characters long!');
    }

    getUserByUsername(form.username)
      .then(snapshot => {
        if (snapshot.exists()) {
          return alert(`Username ${form.username} already exists!`);
        }

        return registerUser(form.email, form.password)
          .then(u => {
            createUsername(form.username, u.user.uid, u.user.email, form.firstName, form.lastName)
              .then(() => {
                navigate('/home');
              })
              .catch(console.error);
          })
          .catch(e => {
            if (e.message.includes('email-already-in-use')) {
              alert('The email is already in use!');
            }
          });
      })
      .catch(console.error);
  };

  return (
    <div className="SignUp">
      <h2>Sign Up</h2>
      <div className="SignUpForm">
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          value={form.firstName}
          onChange={updateForm('firstName')}
          required
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          value={form.lastName}
          onChange={updateForm('lastName')}
          required
        />
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={form.username}
          onChange={updateForm('username')}
          required
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={updateForm('email')}
          required
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={form.password}
          onChange={updateForm('password')}
          required
        />
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input
          type="password"
          id="confirmPassword"
          value={form.confirmPassword}
          onChange={updateForm('confirmPassword')}
          required
        />
        <div className='sign-up-form-buttons'>
          <button className='form-sign-up-btn' onClick={register}>Sign Up</button>
          <p>Already have an account? <NavLink to="/login">Log in</NavLink>!</p>
        </div>
      </div>
    </div>
  );
};
