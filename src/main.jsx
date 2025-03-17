
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ReactDOM from "react-dom/client"; // Correct import for client-side rendering
import StoreContextProvider from "./context/StoreContext.jsx"; // Fixed typo in the import

const root = ReactDOM.createRoot(document.getElementById("root")); // Fixed typo in getElementByid
root.render(
  <StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </StrictMode>
);