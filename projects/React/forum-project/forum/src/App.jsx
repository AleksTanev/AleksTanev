import './App.css';
import Header from './components/Header/Header';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppContext from './providers/AppContext';
import { NotFound } from './views/NotFound/NotFound';
import { Home } from './views/Home/Home';
import { Login } from './views/Login/Login';
import { Signup } from './views/Signup/Signup';
import { Profile } from './views/Profile/Profile';
import { NewPost } from './views/NewPost/NewPost';
import { auth } from './config/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getUserData } from './services/users.service';
import SearchResults from './views/SearchResults/SearchResults';
import PostDetails from './views/PostDetails/PostDetails';
import Authenticated from './hoc/Authenticated';

function App() {
  const [AppState, setAppState] = useState({
    user: null,
    userData: null,
  });

  const [user, loading] = useAuthState(auth);
  const [search, setSearch] = useState({
    type: null,
    input: null
  });

  useEffect(() => {
    if (user === null) return;

    
    if (user !== null) {
      setAppState(prev => ({ ...prev, user }));
    }

    getUserData(user.uid)
      .then(snapshot => {
        if (!snapshot.exists()) {
          throw new Error('Something went wrong!');
        }

        setAppState({
          user,
          userData: snapshot.val()[Object.keys(snapshot.val())[0]],
        });

      })
      .catch(e => alert(e.message));
  }, [user]);
  
  return (
    <Router>
      <AppContext.Provider value={{ ...AppState, setContext: setAppState }}>
        <div className="App">
          <Authenticated loading={loading}><Header setSearch={setSearch}/></Authenticated>
          <div className="Outlet">
            <Routes>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Authenticated loading={loading}><Home authenticated={user ? true : false} /></Authenticated>} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path='profile' element={<Profile />} />
              <Route path='search-results' element={<SearchResults searchType={search.type} searchInput={search.input}/>}/>
              <Route path="new-post" element={<NewPost />} />
              <Route path='post/:id' element={<PostDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
