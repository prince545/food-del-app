// StoreContext.jsx
import { StoreContext } from './StoreContext';
import { food_list } from '../assets/frontend_assets/assets';
import { useEffect, useState } from 'react';

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (item_id) => {
    console.log(`Adding to cart, Item _id: Rs.{item_id}, Current Cart:`, cartItems);
    setCartItems((prev) => ({
      ...prev,
      [item_id]: (prev[item_id] || 0) + 1,
    }));
  };

  const removeFromCart = (item_id) => {
    console.log(`Removing from cart, Item _id: Rs.{item_id}, Current Cart:`, cartItems);
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[item_id] > 1) {
        newCart[item_id] -= 1;
      } else {
        delete newCart[item_id];
      }
      return newCart;
    });
  };

  const getCartTotal = () => {
    let total = 0;
    for (const item_id in cartItems) {
      const item = food_list.find((item) => item.__id === item_id);
      if (item) {
        total += item.price * cartItems[item_id];
      }
    }
    return total;
  };

  useEffect(() => {
    console.log('Cart Items Updated:', cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getCartTotal,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;