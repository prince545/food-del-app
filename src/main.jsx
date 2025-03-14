
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ReactDOM from "react-dom/client"; // Important: use the client version
import StoreContextProvider from "./context/StoreContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
    </BrowserRouter>
  </StrictMode>
);
