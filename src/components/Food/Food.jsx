// import React, { useContext } from 'react';
// import './Food.css';
// import { StoreContext } from '../../context/StoreContext';
// import FoodItem from '../FoodItem/FoodItem';

// const Food = () => {
//   const { food_list } = useContext(StoreContext);


  

//   return (
//     <div className="food" id="food">
//       <h1>Our Food</h1>
//       <div className="food-list">
//         {food_list.map(item => (
//           <FoodItem 
//             key={item.__id} // Changed to __id
//             _id={item.__id} // Changed to __id and renamed prop to _id for FoodItem
//             name={item.name} 
//             price={item.price}
//             description={item.description} 
//             image={item.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Food;
import { useContext } from 'react';
import './Food.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const Food = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  
  // Filter food items based on the active category
  const filteredFood = category === 'All'
    ? food_list
    : food_list.filter((item) => item.category === category);

  return (
    <div className="food" id="food">
      <hr/>

      <div className="food-list">
       
        {filteredFood.map((item) => (
          <FoodItem
            key={item.__id}
            _id={item.__id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            
          />
        ))}
      </div>
      
    </div>
  );
};

export default Food;

