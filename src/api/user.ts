import axiosInstance from "../interceptors/interceptors";

const getUser = () => axiosInstance.get("/user");
const addUser = (user: User) => axiosInstance.post("/user", user);
const setUsername = (user: User) => axiosInstance.post("/user/name", user);

export default {
  getUser,
  addUser,
  setUsername,
};
