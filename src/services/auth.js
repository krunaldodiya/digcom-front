import { AsyncStorage } from "react-native";

const AUTH_TOKEN_KEY = "authToken";
const AUTH_MOBILE_KEY = "authMobile";

const setAuthToken = async value => {
  return AsyncStorage.setItem(AUTH_TOKEN_KEY, value);
};

const setAuthMobile = async value => {
  return AsyncStorage.setItem(AUTH_MOBILE_KEY, value);
};

const getAuthToken = async () => {
  return AsyncStorage.getItem(AUTH_TOKEN_KEY);
};

const getAuthMobile = async () => {
  return AsyncStorage.getItem(AUTH_MOBILE_KEY);
};

const resetAuth = async () => {
  return AsyncStorage.multiRemove([AUTH_TOKEN_KEY, AUTH_MOBILE_KEY]);
};

const resetAuthToken = async () => {
  return AsyncStorage.removeItem(AUTH_TOKEN_KEY);
};

export {
  setAuthToken,
  setAuthMobile,
  getAuthToken,
  getAuthMobile,
  resetAuth,
  resetAuthToken
};
