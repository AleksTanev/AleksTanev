import './Login.css';

import React, { useState, useContext } from 'react';
import { loginUser } from '../../services/auth.service';
import AppContext from '../../providers/AppContext';
import { getUserData } from '../../services/users.service';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const updateForm = (prop) => (e) => {
    setForm({
      ...form,
      [prop]: e.target.value,
    });
  };

  const { setContext } = useContext(AppContext);
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    loginUser(form.email, form.password)
      .then(u => {

        return getUserData(u.user.uid)
          .then(snapshot => {

            if (snapshot.exists()) {

              setContext({
                user: u.user,
                userData: snapshot.val()[Object.keys(snapshot.val())[0]],
              });

              navigate('/home');
            }
          });
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="Login">
      <h2>Log In</h2>
      <div className="LoginForm">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={updateForm('email')}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={form.password}
          onChange={updateForm('password')}
        />
        <div className='log-in-form-buttons'>
          <button className='form-log-in-btn' onClick={login}>Log In</button>
          <p>Don&apos;t have an account yet? <NavLink to="/signup">Sign up</NavLink>!</p>
        </div>
      </div>
    </div>
  );
};
