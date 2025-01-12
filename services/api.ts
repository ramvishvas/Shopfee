import {
  SecureStorageKeys,
  SecureStorageUtils,
} from "@/utils/SecureStorageUtils";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  // Get the token from SecureStorage
  const token = await SecureStorageUtils.getItem(SecureStorageKeys.AUTH_TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const loginApi = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export const logoutApi = async () => {
  await SecureStorageUtils.clearAll();
};

export const getUserApi = async () => {
  const response = await api.get("/auth/user");
  return response.data;
};

export const verifyTokenApi = async () => {
  const response = await api.get("/auth/verify");
  return response.data;
};

export const verifyOtpApi = async (otp: string) => {
  const response = await api.post("/auth/verify-otp", { otp });
  return response.data;
};

export const resendOtpApi = async () => {
  const response = await api.post("/auth/resend-otp");
  return response.data;
};

export const registerApi = async (data: {
  email: string;
  password: string;
  username: string;
}) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const updateProfileApi = async (data: {
  email: string;
  username: string;
}) => {
  const response = await api.put("/auth/user", data);
  return response.data;
};

export const updatePasswordApi = async (data: {
  currentPassword: string;
  newPassword: string;
}) => {
  const response = await api.put("/auth/password", data);
  return response.data;
};

export const deleteAccountApi = async () => {
  const response = await api.delete("/auth/user");
  return response.data;
};
