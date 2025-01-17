import { SecureStorageUtils } from "@/utils/SecureStorageUtils";
import Api from "./apiUtils";

export const sendOtpApi = async (phoneNumber: string) => {
  return Api.post("/api/v1/send-otp", { phoneNumber });
};

export const loginApi = (credentials: { mobile: string; password: string }) => {
  return Api.post("/api/v1/login", credentials);
};

export const logoutApi = () => {
  return SecureStorageUtils.clearAll();
};
