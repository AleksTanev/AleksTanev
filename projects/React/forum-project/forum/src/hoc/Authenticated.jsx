import React from 'react';
import Loader from '../components/Loader/Loader';
// import AppContext from '../providers/AppContext';
// import { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';

export default function Authenticated ({ children, loading }) { 
  // const { user } = useContext(AppContext);
  // const location = useLocation();

  if (loading) {
    return <Loader/>;
  }

  // if (!user) {
  //   return <Navigate to="/home" state={{ from: location }} />;
  // }

  return children;

}