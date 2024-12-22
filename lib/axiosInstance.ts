import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = config.headers || {};

    // Add Authorization header
    let token;
    if (typeof window === "undefined") {
      // SSR: Use Next.js cookies()
      token = cookies().get("token")?.value;
    } else {
      // CSR: Cookies are automatically attached by the browser
      // If you need to access a token stored in a non-HttpOnly cookie manually:
      token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
    }

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // Check if the request is for multipart/form-data
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    return config;
  },
  (error) => {
    throw error;
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  }
);

export default axiosInstance;
