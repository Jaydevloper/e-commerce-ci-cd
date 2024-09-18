import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer " + localStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
