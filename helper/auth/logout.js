import BASE_URL from "@/utils/constants/api";
import { clearTokens } from "@/utils/token";
import axios from "axios";

const logout = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users/logout`, {
      "Access-Control-Allow-Origin": "*",
      withCredentials: true,
    });
    if (response.status === 205) {
      clearTokens();
    }
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default logout;
