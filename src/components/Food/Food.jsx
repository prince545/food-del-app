import React, { useContext } from 'react';
import './Food.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const Food = () => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food" _id="food">
      <h1>Our Food</h1>
      <div className="food-list">
        {food_list.map((item) => (
          <FoodItem 
            key={item.__id} // Use __id as the key instead of index
            __id={item.__id} // Pass __id explicitly
            name={item.name} 
            price={item.price}
            description={item.description} 
            image={item.image} 
            rating={item.rating}
            // Remove rating prop since it's not in food_list
          />
        ))}
      </div>
    </div>
  );
};

export default Food;