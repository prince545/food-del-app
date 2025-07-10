import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import searchIcon from "../../assets/frontend_assets/search_icon.png";
import basketIcon from "../../assets/frontend_assets/basket_icon.png";
import logo from "../../assets/frontend_assets/logo.png";

const Navbar = ({ setShowLogin, onFilterChange = () => {} }) => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [filters, setFilters] = useState({
    fastDelivery: false,
    ratingsAbove4: false,
    pureVeg: false,
    offers: false,
    priceRange: "", // Options: "300-600", "lessThan300", ""
  });
  const [sortBy, setSortBy] = useState(""); // Options: "priceAsc", "priceDesc", "ratingDesc", ""
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update filters and notify parent component
  const handleFilterChange = (filterName, value) => {
    const updatedFilters = { ...filters, [filterName]: value };
    setFilters(updatedFilters);
    if (onFilterChange) {
      onFilterChange({ filters: updatedFilters, sortBy, searchQuery });
    }
  };

  // Handle sort change
  const handleSortChange = (option) => {
    setSortBy(option);
    if (onFilterChange) {
      onFilterChange({ filters, sortBy: option, searchQuery });
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onFilterChange) {
      onFilterChange({ filters, sortBy, searchQuery: query });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Default Navbar Content (Visible when not scrolled) */}
      <div className={`navbar-content ${isScrolled ? "hide" : "show"}`}>
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
            
          ].map((item) => (
            <li
              key={item.key}
              className={menu === item.key ? "active" : ""}
              onClick={() => {
                setMenu(item.key);
                setIsOpen(false);
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
            <Link to="/cart">
              <img src={basketIcon} alt="Cart" className="icon" />
            </Link>
          </button>
          <button onClick={() => setShowLogin(true)} className="signin-button">
            Sign In
          </button>
        </div>
      </div>

      {/* Filter Bar Content (Visible when scrolled) */}
      <div className={`filter-bar ${isScrolled ? "show" : "hide"}`}>
        <div className="filter-buttons">
          {/* Sort By Dropdown */}
          <div className="dropdown">
            <button className="filter-btn dropdown">
              Sort By <span className="dropdown-arrow">▼</span>
            </button>
            <div className="dropdown-menu">
              <div onClick={() => handleSortChange("priceAsc")}>Price: Low to High</div>
              <div onClick={() => handleSortChange("priceDesc")}>Price: High to Low</div>
              <div onClick={() => handleSortChange("ratingDesc")}>Rating: High to Low</div>
            </div>
          </div>
        </div>
        {/* Search Input */}
        <div className="filter-search">
          <input
            type="text"
            placeholder="Search for restaurant and food"
            className="filter-search-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="filter-search-btn" aria-label="Search">
            <img src={searchIcon} alt="Search" className="icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;