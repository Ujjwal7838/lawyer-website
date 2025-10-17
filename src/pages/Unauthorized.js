// src/pages/Unauthorized.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Unauthorized.css';

const Unauthorized = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole');

  return (
    <div className="unauthorized-container">
      <div className="unauthorized-content">
        <div className="unauthorized-icon">🚫</div>
        <h1>Access Denied</h1>
        <p>You don't have permission to access this page.</p>
        <div className="role-info">
          <p>Your current role: <span className="role-badge">{userRole || 'Not logged in'}</span></p>
        </div>
        
        <div className="unauthorized-actions">
          <button 
            onClick={() => navigate('/login')}
            className="btn-primary"
          >
            Go to Login
          </button>
          
          <button 
            onClick={() => navigate(-1)}
            className="btn-secondary"
          >
            Go Back
          </button>
          
          {userRole === 'Client' && (
            <button 
              onClick={() => navigate('/client-dashboard')}
              className="btn-client"
            >
              Go to Client Dashboard
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;