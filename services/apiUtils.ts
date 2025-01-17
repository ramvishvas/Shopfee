import {
  SecureStorageKeys,
  SecureStorageUtils,
} from "@/utils/SecureStorageUtils";
import axios from "axios";

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

Api.interceptors.request.use(async (config) => {
  // Get the token from SecureStorage
  const token = await SecureStorageUtils.getItem(SecureStorageKeys.AUTH_TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default Api;
