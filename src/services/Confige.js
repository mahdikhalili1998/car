import axios from "axios";
const api = axios.create({ baseURL: "https://freetestapi.com/api/v1/cars" });
api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);
export default api;
