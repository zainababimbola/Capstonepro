import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar({cart}) {
  return (
    <nav className="navbar">
      <div className="logo">AFRIBITE</div>
      <div className="cart-count"> 🛒 {cart.length}
</div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/foods">Menu</Link></li>
        <li><Link to="/cuisine">Cuisine</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );

}


