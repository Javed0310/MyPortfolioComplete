import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index.js";
import MainComponent from "./Components/MainComponent/MainComponent.jsx";
import Footer from "./Components/Footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainComponent />
      <Footer />
    </Provider>
  </React.StrictMode>
);
