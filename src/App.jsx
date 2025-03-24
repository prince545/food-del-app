
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import { Cart } from './components/pages/Cart/Cart'
import Menu from './components/Menu/Menu'
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder'
import LoginPopup from './components/Login/LoginPopup'
const App = () => {
  const [showLogin, setShowLogin] = React.useState(false)
  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
    </>
  )
}

export default App