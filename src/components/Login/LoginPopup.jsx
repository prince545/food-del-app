import React from "react";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  return (
    <>
      {/* Background Overlay */}
      <div className="login-popup-overlay" onClick={() => setShowLogin(false)}></div>

      {/* Login Box */}
      <div className="login-popup">
        <span className="close-btn" onClick={() => setShowLogin(false)}>
          &times;
        </span>
        <h2>Sign In</h2>

        <input type="text" placeholder="Email or Username" />
        <input type="password" placeholder="Password" />

        <button>Login</button>

        <div className="login-links">
          <a href="#">Forgot Password?</a> | <a href="#">Register</a>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;
