import { useState } from 'react';
import './Menu.css';
import { menu_list } from '../../assets/frontend_assets/assets';

const Menu = () => {
  const [category, setCategory] = useState("All");

  const handleCategoryChange = (menuName) => {
    setCategory(prev => (prev === menuName ? "All" : menuName));
  };

  return (
    <div className="explore-menu" _id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">Lots of dishes to make you hungry</p>

      <div className="explore-menu-list">
        {menu_list.map(({ menu_name, menu_image }, index) => (
          <div
            key={index}
            className={`explore-menu-item ${category === menu_name ? "active" : ""}`}
            onClick={() => handleCategoryChange(menu_name)}
          >
            <img src={menu_image} alt={menu_name} />
            <p>{menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
// import './Menu.css';
// import { menu_list } from '../../assets/frontend_assets/assets';
// import { useState } from 'react';

// const Menu = () => {
//   // State to track selected dishes
//   const [selectedDishes, setSelectedDishes] = useState([]);

//   // Handle dish selection
//   const handleSelectDish = (dish) => {
//     setSelectedDishes((prevSelected) => {
//       // Check if the dish is already selected
//       if (prevSelected.includes(dish)) {
//         // If it is, remove it from the list (deselect)
//         return prevSelected.filter((item) => item !== dish);
//       } else {
//         // If not, add it to the list (select)
//         return [...prevSelected, dish];
//       }
//     });
//   };

//   return (
//     <div className="explore-menu" _id="explore-menu">
//       <h1>Explore Our Menu</h1>
//       <p className="explore-menu-text">Lots of dishes to make you hungry</p>

//       <div className="explore-menu-list">
//         {menu_list.map((item, index) => {
//           const isSelected = selectedDishes.includes(item.menu_name); // Check if the item is selected
//           return (
//             <div
//               key={index}
//               className={`explore-menu-item ${isSelected ? 'selected' : ''}`} // Add class for selected item
//               onClick={() => handleSelectDish(item.menu_name)} // Handle click to select/deselect
//             >
//               <img src={item.menu_image} alt={item.menu_name} />
//               <p>{item.menu_name}</p>
//             </div>
//           );
//         })}
//       </div>

//       {/* Show selected dishes */}
//       {selectedDishes.length > 0 && (
//         <div className="selected-dishes">
//           <h2>Your Selected Dishes:</h2>
//           <ul>
//             {selectedDishes.map((dish, index) => (
//               <li key={index}>{dish}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Menu;

