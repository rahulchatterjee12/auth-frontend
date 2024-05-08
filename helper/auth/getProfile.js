import BASE_URL from "@/utils/constants/api";
import axios from "axios";

const getProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users/me`, {
      "Access-Control-Allow-Origin": "*",
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
export default getProfile;
