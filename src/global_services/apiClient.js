import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
export const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

apiClient.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
apiClient.interceptors.response.use(
  async function (config) {
    return config;
  },
  function (error) {
    toast("Error plzz");
    // handle errors here. eg: show notifications
    return null;
  }
);
