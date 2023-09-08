import axiosInstance from "../interceptors/interceptors";

const getUser = () => axiosInstance.get("/user");

export default {
  getUser,
};
