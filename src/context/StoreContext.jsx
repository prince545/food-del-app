
import { StoreContext } from './StoreContext';

import { food_list } from '../assets/frontend_assets/assets';



const StoreContextProvider = ({ children }) => {
  const contextValue = {
    food_list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
