import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

function WelcomePage() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logoText">NyayConnect</h1>
        <p className="tagline">Your Bridge to Justice</p>
      </header>
      <main className="buttonContainer">
        { }
        <Link to="/login" className="customButton">I am a Client</Link>
        <Link to="/login" className="customButton">I am a Lawyer</Link>
      </main>
    </div>
  );
}

export default WelcomePage;