import axios from "axios";
import { toast } from "react-toastify";
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
    const responseError =
      error.response.data.message.message ?? error.response.data.message;
    toast(responseError, {});
    // handle errors here. eg: show notifications
    return null;
  }
);
