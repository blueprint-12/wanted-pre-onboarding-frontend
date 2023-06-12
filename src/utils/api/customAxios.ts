import axios from "axios";

interface CustomError {
  status: number;
  message: string;
}

const token = localStorage.getItem("access_token");
const BASE_URL = "https://www.pre-onboarding-selection-task.shop/";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

//요청 API
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");

    if (token && config.headers) {
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
