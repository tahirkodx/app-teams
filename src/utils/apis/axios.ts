import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import CONFIG from "@/utils/config";
import token from "@/utils/token";

// Define and export the types
export type RequestConfig = AxiosRequestConfig;
export type Response<T = any> = AxiosResponse<T>;
export type Error = AxiosError;
const gotToLogin = () => {
  localStorage.removeItem("user:token");
  window.location.href = "login";
};
//const tokenString = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYTFjNWY0NmYtODQxNC00ZmNiLWIyYjQtNDJjZjQ0MjRhYWYzIiwiY3JlYXRlZF9hdCI6MTY4MjgyNTk2Ni44OTY5OTA1fQ.vAmosk0hHVcjDjDGPmgVy91iDX9wfQf03Rz0Abxp3x0";
const userToken = () => {
  const tokenInStorage = token.get("user:token");
  if (!tokenInStorage) {
    return "";
  }
  return tokenInStorage;
};

const axiosInstance = axios.create({
  baseURL: CONFIG.BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    if (
      !config.headers.hasOwnProperty("Content-Type") ||
      (config.headers?.["Content-Type"] &&
        config.headers["Content-Type"] === null)
    ) {
      config.headers["Content-Type"] = "application/json";
    }

    config.headers = {
      ...config.headers,
      Authorization: `Token ${userToken()}`,
    };

    // If there is no token, delete if from the header before making a request
    if (!userToken()) {
      // delete config.defaults.headers.common.Authorization
      // delete config.headers.Authorization;
      delete config.headers.Authorization;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(undefined, async (error) => {
  // Check if there is a 401 and logout if there is
  if (error?.response?.status === 401) {
    gotToLogin();
    // this.$store.dispatch('');
  }
  return Promise.reject(error);
});

export default axiosInstance;
