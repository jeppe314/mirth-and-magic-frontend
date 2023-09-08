// axiosInstance.js
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react"; // Assuming you're using Auth0

const { getAccessTokenSilently } = useAuth0();

const instance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

//interceptor to add the tokenfrom auth0 (if there is one) to the header on every request

instance.interceptors.request.use(
  async (config) => {
    try {
      const token = await getAccessTokenSilently();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
