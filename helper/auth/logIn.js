import BASE_URL from "@/utils/constants/api";
import { setTokens } from "@/utils/token";
import axios from "axios";

async function Login(email, password) {
  try {
    const response = await axios.post(
      `${BASE_URL}/users/login`,
      JSON.stringify({
        email: email,
        password: password,
      }),
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Ignore-Cookie": true,
        },
        withCredentials: false,
      }
    );
    setTokens(response.data.token);
    return response;
  } catch (error) {
    console.error("Failed to Login");
    return error;
  }
}

export default Login;
