import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FoodList from './pages/FoodList';
import Navbar from './components/Navbar';

function App() {
  const [cart, setCart] = useState([]); 

  return (
    <Router>
      <>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/foods" element={<FoodList cart={cart} setCart={setCart} />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
