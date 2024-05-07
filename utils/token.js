import Cookies from "universal-cookie";

const cookies = new Cookies();

function setTokens(token) {
  const options = { path: "/", maxAge: 2592000 };
  if (token) {
    cookies.set("token", token, options);
  }

  return getTokens();
}

function getTokens() {
  const tokens = {
    token: cookies.get("token") || null,
  };
  return tokens;
}

function clearTokens() {
  cookies.remove("token");
}

export { setTokens, getTokens, clearTokens };
