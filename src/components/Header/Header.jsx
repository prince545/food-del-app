import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className = 'header'>
        <div className="header-contents">
        <h1>Order your<br />
             favourite food here</h1>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience,once delicious meal at a time.</p>
        <Link to="/menu">
        
        <button className="button"> View Menu </button> 
        </Link>

        </div>
        </div>
  )
}

export default Header;