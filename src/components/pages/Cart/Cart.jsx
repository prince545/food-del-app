


import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../../context/StoreContext';

export const Cart = () => {
  const { cartItems, food_list, removefromCart} = useContext(StoreContext);
  
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
       {food_list.map((item) => {
        if (cartItems[item.__id] > 0) {
          return (
            <div className='cart-item' key={item.__id}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item.__id]}</p>
              <p>${item.price * cartItems[item.__id]}</p>
              <button onClick={() => removefromCart(item.__id)}>Remove</button>
            </div>
          );
        }
        return null;
       })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total</h2>
          <div>
            <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{}</p>
            </div>

            
            <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>{0}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>{0}</b>
            </div>
            
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <h2>Have a promo code?</h2>
          <input type="text" placeholder="Enter your promo code" />
          <button>Apply</button>

        </div>

      </div>
    </div>
  );
}


