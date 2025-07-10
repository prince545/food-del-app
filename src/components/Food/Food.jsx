import { useContext } from 'react';
import './Food.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const Food = ({ category = 'All', foodFilters }) => {
  const { food_list } = useContext(StoreContext);

  let filteredFood = food_list;

  // Category filter (from Menu)
  if (category && category !== 'All') {
    filteredFood = filteredFood.filter((item) => item.category === category);
  }

  // Apply Navbar filters if present
  if (foodFilters) {
    const { sortBy, searchQuery } = foodFilters;
    // Search
    if (searchQuery && searchQuery.trim() !== '') {
      const q = searchQuery.trim().toLowerCase();
      filteredFood = filteredFood.filter((item) =>
        item.name.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q))
      );
    }
    // Sort
    if (sortBy === 'priceAsc') {
      filteredFood = [...filteredFood].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceDesc') {
      filteredFood = [...filteredFood].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'ratingDesc') {
      filteredFood = [...filteredFood].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
  }

  return (
    <div className="food" id="food">
      <hr/>
      <div className="food-list">
        {filteredFood.map((item) => (
          <FoodItem
            key={item.__id}
            _id={item.__id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Food;