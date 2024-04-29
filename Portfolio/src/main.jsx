import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index.js";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import MainComponent from "./Components/MainComponent/MainComponent.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import SkillComponent from "./Components/Skill/SkillComponent.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainComponent />} />
          <Route path="/Home" element={<MainComponent />} />
          <Route path="/Skill" element={<SkillComponent />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
