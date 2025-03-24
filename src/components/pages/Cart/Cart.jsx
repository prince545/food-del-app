import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../../context/StoreContext';
import './Cart.css';

const Cart = () => {
  const context = useContext(StoreContext);
  const navigate = useNavigate();

  // Debug: Log the entire context to see what's available
  console.log('StoreContext in Cart:', context);

  // Destructure with fallback in case context is undefined
  const {
    cartItems = {},
    food_list = [],
    removeFromCart = () => {},
    addToCart = () => {},
    getCartTotal = () => 0,
  } = context || {};

  if (!context) {
    return <div className="cart__error">Error: Cart must be used within a StoreContextProvider</div>;
  }

  const handleCheckout = () => {
    if (Object.keys(cartItems).length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate('/place-order'); // Consistent with previous code
  };

  return (
    <div className="cart">
      <h2 className="cart__heading">Your Cart</h2>
      {Object.keys(cartItems).length === 0 ? (
        <p className="cart__empty">Your cart is empty</p>
      ) : (
        <div className="cart__content">
          <div className="cart__items">
            <table className="cart__items-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(cartItems).map((itemId) => {
                  const item = food_list.find((product) => product.__id === itemId);
                  if (!item) return null;

                  return (
                    <tr key={item.__id}> {/* Changed itemId to item.__id */}
                      <td>
                        <div className="cart__item-info">
                          {item.image && (
                            <img src={item.image} alt={item.name} className="cart__item-image" />
                          )}
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td>₹{item.price}</td>
                      <td>{cartItems[item.__id]}</td> {/* Changed itemId to item.__id */}
                      <td>₹{(item.price * cartItems[item.__id]).toFixed(2)}</td> {/* Changed itemId to item.__id */}
                      <td>
                        <button
                          className="cart__action-btn cart__action-btn--remove"
                          onClick={() => removeFromCart(item.__id)}
                        >
                          -
                        </button>
                        <button
                          className="cart__action-btn cart__action-btn--add"
                          onClick={() => addToCart(item.__id)}
                        >
                          +
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="cart__total">
            <h3 className="cart__total-title">Cart Total</h3>
            <div className="cart__total-details">
              <div className="cart__total-row">
                <span>Subtotal:</span>
                <span>₹{getCartTotal().toFixed(2)}</span>
              </div>
              <div className="cart__total-row">
                <span>Delivery Fee:</span>
                <span>₹5.00</span>
              </div>
              <div className="cart__total-row cart__total-row--final">
                <span>Total:</span>
                <span>₹{(getCartTotal() + 5).toFixed(2)}</span>
              </div>
            </div>
            <button className="cart__checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>

          <div className="cart__promocode">
            <h3 className="cart__promocode-title">Have a promo code?</h3>
            <div className="cart__promocode-input">
              <input
                type="text"
                placeholder="Enter your promo code"
                className="cart__promocode-field"
              />
              <button className="cart__promocode-btn">Apply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;