import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

export default function LandingPage() {
  return (
    <div className="landing">
      <h1>AFRIBITE</h1>
      <p>Savoring Life, One Bite at a Time.</p>
      <div className="landing-buttons">
        <Link to="/login" className="btn primary">Login</Link>
        <Link to="/signup" className="btn secondary">Signup</Link>
      </div>
    </div>
  );
}
