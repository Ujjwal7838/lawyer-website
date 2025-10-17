 

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';  

function Navbar() {
  const navigate = useNavigate();
  
   
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  const handleLogout = () => {
     
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    
     
    navigate('/login');
    
     
    window.location.reload(); 
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        NyayConnect
      </Link>

      <div className="navbar-links">
        <Link to="/home">Find Lawyers</Link>
        
        {}
        {token && (
          <Link to="/appointment-history">My Appointments</Link>
        )}
        
        { }
        {userRole === 'Lawyer' && (
          <Link to="/dashboard">Dashboard</Link>
        )}

        { }
        {token && (
          <Link to="/my-account">My Account</Link>
        )}
      </div>

      <div className="navbar-actions">
        {token ? (
           
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        ) : (
           
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;