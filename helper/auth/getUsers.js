import BASE_URL from "@/utils/constants/api";
import axios from "axios";

const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`, {
      "Access-Control-Allow-Origin": "*",
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getUsers;
