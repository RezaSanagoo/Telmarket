import axios from 'axios';

interface TokenResponse {
  access: string;
  refresh: string;
}

const BASE_URL = 'https://test22.liara.run';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        const parsedToken = JSON.parse(token);
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${parsedToken.access}`
        };
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');

        const parsedToken = JSON.parse(token);
        const response = await axios.post<TokenResponse>(
          `${BASE_URL}/api/token/refresh/`,
          { refresh: parsedToken.refresh }
        );

        const newToken = {
          ...parsedToken,
          access: response.data.access
        };
        
        localStorage.setItem('token', JSON.stringify(newToken));
        
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
        }
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('token');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;