import axios from "axios";

class AuthInterceptor {
  setAuthGetter(getToken) {
    this.getToken = getToken;
  }

  async intercept(config) {
    if (!this.getToken) {
      return config;
    }

    try {
      const token = await this.getToken();
      config.headers["Authorization"] = `Bearer ${token}`;
    } catch (e) {
      console.log(e);
    }
    return config;
  }
}

export const authInterceptor = new AuthInterceptor();

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // or your API base URL
});

// Attach the interceptor to the Axios instance
axiosInstance.interceptors.request.use(authInterceptor.intercept.bind(authInterceptor));

export default axiosInstance;
