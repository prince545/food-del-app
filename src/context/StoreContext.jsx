import { StoreContext } from './StoreContext';
import { food_list } from '../assets/frontend_assets/assets';
import { useEffect, useState } from 'react';

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addtoCart = (item_id) => {
    console.log(`Adding to cart, Item _id: ${item_id}, Current Cart:`, cartItems);
    setCartItems((prev) => ({
      ...prev,
      [item_id]: (prev[item_id] || 0) + 1,
    }));
  };

  const removefromCart = (item_id) => {
    console.log(`Removing from cart, Item _id: ${item_id}, Current Cart:`, cartItems);
    setCartItems((prev) => ({
      ...prev,
      [item_id]: prev[item_id] > 1 ? prev[item_id] - 1 : 0,
    }));
  };

  useEffect(() => {
    console.log('Cart Items Updated:', cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addtoCart,
    removefromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;