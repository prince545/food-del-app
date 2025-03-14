
import React, { useContext } from 'react';
import './Food.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const Food = () => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food" id="food">
      <h1>Our Food</h1>
      <div className="food-list">
        {food_list.map((item, index) => (
          <FoodItem 
            key={index} 
            id={item.id} 
            name={item.name} 
            price={item.price}
            description={item.description} 
            image={item.image} 
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Food;
