import './FoodItem.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { rating_starts } from '../../assets/frontend_assets/assets';

const FoodItem = ({ _id, name, price, description, image }) => {
  const { addToCart } = useContext(StoreContext);

  const handleAddToCart = () => {
    addToCart(_id);
    showToast(`${name} added to cart!`);
  };

  const showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #4caf50;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 10000;
      font-size: 14px;
      font-weight: 500;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.transform = 'translateX(0)'; }, 100);
    setTimeout(() => {
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => { document.body.removeChild(toast); }, 300);
    }, 3000);
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        <button className="add add-plus" onClick={handleAddToCart} aria-label={`Add ${name} to cart`}>
          <span>+</span>
        </button>
      </div>
      <div className="food-item-info">
        <h3>{name}</h3>
        <div className="rating">
          <img src={rating_starts} alt="rating" />
          <span>4.5 (120+ reviews)</span>
        </div>
        <p className="description">{description}</p>
        <p className="price">{(price * 10).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FoodItem;