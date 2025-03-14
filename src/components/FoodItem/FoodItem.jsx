
import React, { useState } from 'react';
import './FoodItem.css';
import { add_icon_green } from '../../assets/frontend_assets/assets';
import { add_icon_white } from '../../assets/frontend_assets/assets';
import { remove_icon_red } from '../../assets/frontend_assets/assets';
import { rating_starts } from '../../assets/frontend_assets/assets';

const FoodItem = ({ name, price, description, image,  }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {itemCount === 0 ? (
          <img
            className="add"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              className="remove"
              onClick={() => setItemCount((prev) => Math.max(prev - 1, 0))}
              src={remove_icon_red}
              alt="Remove"
            />
            <p>{itemCount}</p>
            <img
              className="add"
              onClick={() => setItemCount((prev) => prev + 1)}
              src={add_icon_green}
              alt="Add"
            />
          </div>
        )}
      </div>

      <div className="rating">
        <img src={rating_starts} alt="rating" />
      </div>

      <p className="description">{description}</p>
      <p className="price">₹{price * 10}</p>
    </div>
  );
};

export default FoodItem;
