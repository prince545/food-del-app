import React, { useState, useEffect } from "react";
import "./Navbar.css";

import searchIcon from "../../assets/frontend_assets/search_icon.png";
import basketIcon from "../../assets/frontend_assets/basket_icon.png";
import tomato from "../../assets/frontend_assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Add scroll event listener to make navbar fixed on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <a href="/">
          <img src={tomato} alt="Food Delivery Logo" />
        </a>
      </div>

      {/* Hamburger menu for mobile */}
      <div className={`navbar-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navbar menu */}
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
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

      {/* Right s_ide icons and sign-in button */}
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