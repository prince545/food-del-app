import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const context = useContext(StoreContext);
  const navigate = useNavigate();
  const [customerDetails, setCustomerDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  if (!context) {
    return <div className="place-order__error">Error: Order must be placed within a StoreContextProvider</div>;
  }

  const { cartItems, getCartTotal, clearCart } = context;

  const handleInputChange = (e) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "street",
      "city",
      "state",
      "zipCode",
      "country",
      "phone",
    ];
    const missingFields = requiredFields.filter((field) => !customerDetails[field]);
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(", ")}`);
      return;
    }

    const orderData = {
      items: cartItems,
      total: getCartTotal() + 5, // Fixed delivery fee
      customer: customerDetails,
      orderDate: new Date().toISOString(),
    };

    console.log("Order placed:", orderData);
    clearCart();
    navigate("/order-confirmation");
  };

  return (
    <div className="place-order">
      <div className="place-order__container">
        <div className="place-order__delivery-info">
          <h2 className="place-order__heading">Delivery Information</h2>
          <form className="place-order__form" onSubmit={handleSubmit}>
            <div className="place-order__form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={customerDetails.firstName}
                onChange={handleInputChange}
                className="place-order__form-input"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={customerDetails.lastName}
                onChange={handleInputChange}
                className="place-order__form-input"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={customerDetails.email}
              onChange={handleInputChange}
              className="place-order__form-input"
              required
            />
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={customerDetails.street}
              onChange={handleInputChange}
              className="place-order__form-input"
              required
            />
            <div className="place-order__form-row">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={customerDetails.city}
                onChange={handleInputChange}
                className="place-order__form-input"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={customerDetails.state}
                onChange={handleInputChange}
                className="place-order__form-input"
                required
              />
            </div>
            <div className="place-order__form-row">
              <input
                type="text"
                name="zipCode"
                placeholder="Zip code"
                value={customerDetails.zipCode}
                onChange={handleInputChange}
                className="place-order__form-input"
                required
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={customerDetails.country}
                onChange={handleInputChange}
                className="place-order__form-input"
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={customerDetails.phone}
              onChange={handleInputChange}
              className="place-order__form-input"
              required
            />
            {/* Submit button will be in the totals section */}
          </form>
        </div>

        <div className="place-order__totals">
          <h3 className="place-order__totals-title">Cart Totals</h3>
          <div className="place-order__totals-details">
            <div className="place-order__totals-row">
              <span>Subtotal</span>
              <span>₹{getCartTotal().toFixed(2)}</span>
            </div>
            <div className="place-order__totals-row">
              <span>Delivery Fee</span>
              <span>₹5.00</span>
            </div>
            <div className="place-order__totals-row place-order__totals-row--final">
              <span>Total</span>
              <span>₹{(getCartTotal() + 5).toFixed(2)}</span>
            </div>
          </div>
          <button type="submit" form="place-order-form" className="place-order__submit-btn">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;