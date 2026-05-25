import axios from 'axios';

const apiClient = axios.create({
  baseURL: typeof window === 'undefined' ? process.env.NEXT_PUBLIC_API_BASE_URL : '',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('access_token='))
      ?.split('=')[1];
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        document.cookie = 'access_token=; max-age=0; path=/';
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;