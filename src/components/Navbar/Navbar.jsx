
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import searchIcon from "../../assets/frontend_assets/search_icon.png";
import basketIcon from "../../assets/frontend_assets/basket_icon.png";
import logo from "../../assets/frontend_assets/logo.png";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Food Delivery Logo" />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        aria-label="Toggle menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        {[
          { name: "Home", key: "home", path: "/" },
          { name: "Menu", key: "menu", path: "/menu" },
          { name: "Contact Us", key: "contact-us", path: "/contact-us" },
        ].map((item) => (
          <li
            key={item.key}
            className={menu === item.key ? "active" : ""}
            onClick={() => {
              setMenu(item.key);
              setIsOpen(false); // Close menu on click (for mobile)
            }}
            role="button"
            tabIndex={0}
            onKeyPress={() => {
              setMenu(item.key);
              setIsOpen(false);
            }}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Right-side Icons */}
      <div className="navbar-right">
        <button className="icon-button" aria-label="Search">
          <img src={searchIcon} alt="Search" className="icon" />
        </button>
        <button className="icon-button" aria-label="Cart">
          <img src={basketIcon} alt="Cart" className="icon" />
        </button>
        <button onClick={() => setShowLogin(true)} className="signin-button">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
