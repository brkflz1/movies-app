import React from 'react'
import { Navigate, useLocation  } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RequireAuth({ children }) {
  const auth = useSelector(state => state.auth.auth)
  const createUserData = useSelector(state => state.auth.createUserData)
  let location = useLocation();
    
    if (!auth) {
      if (!createUserData) {
        return <Navigate to="/signup" state={{ from: location }} replace />;
      } else {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    }
  
    return children;
}
