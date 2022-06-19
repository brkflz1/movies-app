import React from 'react'
import { Navigate, useLocation  } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RequireAuth({ children }) {
  const auth = useSelector(state => state.auth.auth)
  let location = useLocation();
    
    if (!auth) {
      return <Navigate to="/login" state={{ from: location }} replace />;

    }
  
    return children;
}
