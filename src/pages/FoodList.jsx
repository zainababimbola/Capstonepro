import React, { useState } from 'react';
import './foodlist.css';
import FoodItemCard from '../components/FoodItemCard';

const foodData = [
  {
    name: 'Amala +Ewedu +Gbegiri +2...',
    desc: 'A delicious bowl of hot sizzling bowl of Amala & Ewedu with proteins',
    price: 50,
    category: 'Swallow',
    image: '../images/amala.jpg',
  },
  {
    name: 'Eba + Okra Soup',
    desc: 'One large portion of hot Eba with Okra soup + variety of protein.',
    price: 95,
    category: 'Swallow',
    image: '../images/eba and okro.png',
  },
  {
    name: 'Fufu + Efo riro',
    desc: 'A delicious bowl of hand pounded fufu and a combination of freshly picked efo with proteins',
    price: 85,
    category: 'Swallow',
    image: '/images/fufu.jpg',
  },
  {
    name: 'Jollof rice & Chicken Stick and tilapia fish',
    desc: 'A delicious one portion of hot spicy jollof rice & Chicken Stick and tilapia fish.',
    price: 30,
    category: 'Rice',
    image: '../images/jollof rice.png',
  },
  {
    name: 'Moin moin + Fish + Egg',
    desc: 'One medium sized portion of freshly baked moin-moin and titus fish with Egg.',
    price: 30,
    category: 'Snacks',
    image: '../images/moin moin.jpg',
  },
  {
    name: 'Wheat + Vegetable soup',
    desc: 'A tantalizing and appealing bowl of wheat and organic vegetables with a variety of proteins.',
    price: 90,
    category: 'Swallow',
    image: '/images/wheat.jpg',
  },
];

const categories = ['All', 'Swallow', 'Soups', 'Rice', 'Proteins', 'BBQ', 'Grilled', 'Sides', 'Snacks'];

export default function FoodList({ cart, setCart }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const [toastMsg, setToastMsg] = useState('');


const showToast = (msg) => {
  setToastMsg(msg);
  setTimeout(() => setToastMsg(''), 3000); 
};

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const addToCart = (item) => {
  const exists = cart.find(cartItem => cartItem.name === item.name);

  if (exists) {
    showToast(`${item.name} is already in your cart`);
  } else {
    setCart([...cart, item]);
    showToast(`${item.name} added to cart`);
  }
};


  const filteredFood = foodData.filter((item) => {
    const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="foodlist-page">
      {/* Mobile Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰ Filters
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <h4>Filters</h4>
        <h5>Categories</h5>
        <ul>
          {categories.map((cat) => (
            <li key={cat}>
              <label>
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                />
                <button onClick={() => addToCart(item)}> Add to Cart</button>
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search food..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid">
          {filteredFood.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt={item.name} />
              <div className="card-body">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="card-footer">
                  <span>€ {item.price.toFixed(2)}</span>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
