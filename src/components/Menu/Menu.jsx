import { useState } from 'react';
import './Menu.css';
import { menu_list } from '../../assets/frontend_assets/assets';
import Food from '../Food/Food';
import AnimatedQuotes from '../AnimatedQuotes/AnimatedQuotes';

const Menu = ({ foodFilters }) => {
  const [category, setCategory] = useState("All");

  const handleCategoryChange = (menuName) => {
    setCategory(prev => (prev === menuName ? "All" : menuName));
  };

  return (
    <div className="explore-menu" _id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">Lots of dishes to make you hungry</p>
      
      <AnimatedQuotes variant="minimal" />

      <div className ="explore-menu-list" >
        {menu_list.map(({ menu_name, menu_image }, index) => (
          <div
            key={index}
            className={`explore-menu-item ${category === menu_name ? "active" : ""}`}
            onClick={() => handleCategoryChange(menu_name)}
          >
            <img src={menu_image} alt={menu_name} />
            <p>{menu_name}</p>
          </div>
        ))}
      </div>
      <Food category={category} foodFilters={foodFilters} />
    </div>
  );
};

export default Menu;

