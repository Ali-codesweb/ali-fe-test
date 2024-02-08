import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CustomAppbar from "./components/CustomAppbar.jsx";
import HomeScreen from "./screens/HomeScreen/index.jsx";
import { mainStore } from "./store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={mainStore}>
    <CustomAppbar />
    <HomeScreen />
    <ToastContainer />
  </Provider>
);
