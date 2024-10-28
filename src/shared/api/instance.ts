import axios from 'axios';
import { useToken } from '../lib';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const copyConfig = { ...config };
    const { getToken } = useToken();
    const accessToken = getToken();
    if (accessToken) {
      copyConfig.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      delete copyConfig.headers.Authorization;
    }
    return copyConfig;
  },

  (error) => {
    console.error('request reject', error);
    return Promise.reject(error);
  }
);
