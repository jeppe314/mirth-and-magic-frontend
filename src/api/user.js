import axios from "axios";

const getUser = axios.get("http://localhost:8000/user");

export default {
  getUser,
};
