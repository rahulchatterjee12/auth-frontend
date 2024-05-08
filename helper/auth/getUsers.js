import BASE_URL from "@/utils/constants/api";
import axios from "axios";

const ax = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const getUsers = async () => {
  try {
    const response = await ax.get(`/users`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export default getUsers;
