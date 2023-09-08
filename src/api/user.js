import axios from "../../axios";

const getUser = axios.get("/user");

export default {
  getUser,
};
