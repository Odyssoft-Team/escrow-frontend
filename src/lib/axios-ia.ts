import { useAuthStore } from "@/store/auth.store";
import axios from "axios";

const apiIA = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_IA,
});

apiIA.interceptors.request.use(async (config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiIA;
