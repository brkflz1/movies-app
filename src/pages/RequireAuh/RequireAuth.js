import React from 'react'
import { Navigate, useLocation  } from 'react-router-dom';

export default function RequireAuth({ children }) {
    // let auth = useAuth();
    let location = useLocation();
  
    if (!false) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
}
