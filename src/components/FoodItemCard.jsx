import React from 'react';
import './fooditem.css';

const fooditems = [
    {name: 'Amala + Ewedu', desc: 'Hot and spicy with proteins', price: 1500},
    {name: 'Amala + Ewedu', desc: 'Hot and spicy with proteins', price: 1500},
    {name: 'Amala + Ewedu', desc: 'Hot and spicy with proteins', price: 1500},
    {name: 'Amala + Ewedu', desc: 'Hot and spicy with proteins', price: 1500},
];

export default function Fooditems({ name, desc, price }) {
  return (
    <div className="food-card">
      <img src="/placeholder.jpg" alt={name} />
      <h3>{name}</h3>
      <p>{desc}</p>
      <div className="price-add">
        <span>₦{price}</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
