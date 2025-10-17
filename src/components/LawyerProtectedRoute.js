import React from 'react';
import { Navigate } from 'react-router-dom';

function LawyerProtectedRoute({ children }) {
  
  const userRole = localStorage.getItem('role');

  
  if (userRole !== 'Lawyer') {
    return <Navigate to="/home" />;
  }

  
  return children;
}

export default LawyerProtectedRoute;