
import React from 'react';
import { Navigate } from 'react-router-dom';

const LawyerRoute = ({ children }) => {
  
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');

   
  if (!token || userRole !== 'Lawyer') {
     
    return <Navigate to="/login" replace />; 
  }

   
  return children;
};

export default LawyerRoute;