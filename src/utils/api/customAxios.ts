import axios from "axios";
import getToken from "./getToken";
interface CustomError {
  status: number;
  message: string;
}

const BASE_URL = "https://www.pre-onboarding-selection-task.shop/";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});

//요청 API
api.interceptors.request.use(
  (config) => {
    let token = getToken();
    if (getToken() && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    if (err.response) {
      const { status, data } = err.response;
      const errResponse: CustomError = {
        status,
        message: data.message,
      };
      return Promise.reject(errResponse);
    }
    return Promise.reject(err);
  }
);

//응답 API
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response) {
      const { status, data } = err.response;
      const errResponse: CustomError = {
        status,
        message: data.message,
      };
      return Promise.reject(errResponse);
    }
    return Promise.reject(err);
  }
);

export default api;
