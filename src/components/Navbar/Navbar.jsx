

import React, { useState } from "react";
import "./Navbar.css";

import searchIcon from "../../assets/frontend_assets/search_icon.png";
import basketIcon from "../../assets/frontend_assets/basket_icon.png";
import tomato from "../../assets/frontend_assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <a href="/">
          
          <img src={tomato} alt="Food Delivery Logo" />
        </a>
      </div>

      {/* Navigation Menu */}
      <ul className="navbar-menu">
        {[
          { name: "Home", key: "home" },
          { name: "Menu", key: "menu" },
          { name: "Mobile App", key: "mobile-app" },
          { name: "Contact Us", key: "contact-us" },
        ].map((item) => (
            <li
  key={item.key}
  onClick={() => setMenu(item.key)}
  className={menu === item.key ? "active" : ""}
  role="button"
  tabIndex="0"
  onKeyPress={() => setMenu(item.key)}
>
  {item.name}
</li>

          
        ))}
      </ul>

      {/* Right Section (Search, Cart, Sign-in) */}
      <div className="navbar-right">
        <button className="icon-button" aria-label="Search">
          <img src={searchIcon} alt="Search" className="icon" />
        </button>
        <button className="icon-button" aria-label="Cart">
          <img src={basketIcon} alt="Cart" className="icon" />
        </button>
        <button className="signin-button">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
