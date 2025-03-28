import './FoodItem.css';
import { add_icon_green, add_icon_white, remove_icon_red, rating_starts } from '../../assets/frontend_assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ _id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {cartItems[_id] === 0 || !cartItems[_id] ? (
          <img
            className="add"
            onClick={() => {
              console.log(`Adding item: ${name}, _id: ${_id}, Current Cart:`, cartItems);
              addToCart(_id);
            }}
            src={add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              className="remove"
              onClick={() => {
                console.log(`Removing item: ${name}, _id: ${_id}, Current Cart:`, cartItems);
                removeFromCart(_id);
              }}
              src={remove_icon_red}
              alt="Remove"
            />
            <p>{cartItems[_id] || 0}</p> {/* Fallback to 0 if undefined */}
            <img
              className="add"
              onClick={() => {
                console.log(`Adding item: ${name}, _id: ${_id}, Current Cart:`, cartItems);
                addToCart(_id);
              }}
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