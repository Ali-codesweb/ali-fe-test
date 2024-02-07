import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { mainStore } from "./store";
import { Provider } from "react-redux";
import "./App.css";
import HomeScreen from "./screens/HomeScreen/index.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={mainStore}>
    <HomeScreen />
    <ToastContainer />
  </Provider>
);
