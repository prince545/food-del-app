
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Cart from './components/pages/Cart/Cart'
import Menu from './components/Menu/Menu'
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder'
import LoginPopup from './components/Login/LoginPopup'
import AnimatedQuotes from './components/AnimatedQuotes/AnimatedQuotes'

const App = () => {
  const [showLogin, setShowLogin] = React.useState(false)
  const location = useLocation();
  
  // Add filter, sort, and search state here
  const [foodFilters, setFoodFilters] = React.useState({
    filters: {},
    sortBy: '',
    searchQuery: '',
  });

  // Handler to update filters from Navbar
  const handleFilterChange = (newState) => {
    setFoodFilters(newState);
  };

  // Don't show floating quote on home page
  const showFloatingQuote = location.pathname !== '/';

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} onFilterChange={handleFilterChange} />
        <Routes>
          <Route path="/" element={<Home foodFilters={foodFilters} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/menu" element={<Menu foodFilters={foodFilters} />} />
        </Routes>
        {showFloatingQuote && <AnimatedQuotes variant="floating" />}
      </div>
    </>
  )
}

export default App