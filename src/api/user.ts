import axiosInstance from "../interceptors/interceptors";

const getUser = () => axiosInstance.get("/user");
const addUser = (user: User) => axiosInstance.post("/user", user);

export default {
  getUser,
  addUser,
};
