import './FoodItem.css';
import { add_icon_green, add_icon_white, remove_icon_red, rating_starts } from '../../assets/frontend_assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ _id, name, price, description, image }) => {
  const { cartItems, addtoCart, removefromCart } = useContext(StoreContext);

  // Val_idate and log the _id and cartItems for this item
  console.log(`Rendering FoodItem: ${name}, _id: ${_id}, Cart Count: ${cartItems[_id] || 0}, All Cart Items:`, cartItems);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {cartItems[_id] === 0 || !cartItems[_id] ? (
          <img
            className="add"
            onClick={() => {
              console.log(`Adding item: ${name}, _id: ${_id}, Current Cart:`, cartItems);
              addtoCart(_id);
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
                removefromCart(_id);
              }}
              src={remove_icon_red}
              alt="Remove"
            />
            <p>{cartItems[_id] || 0}</p> {/* Fallback to 0 if undefined */}
            <img
              className="add"
              onClick={() => {
                console.log(`Adding item: ${name}, _id: ${_id}, Current Cart:`, cartItems);
                addtoCart(_id);
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