import BASE_URL from "@/utils/constants/api";
import axios from "axios";

async function Signup(firstname, lastname, email, password, username) {
  try {
    const response = await axios.post(
      `${BASE_URL}/users/signup`,
      JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        username,
      }),
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Ignore-Cookie": true,
        },
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.error("Failed to signup");
    return error;
  }
}

export default Signup;
