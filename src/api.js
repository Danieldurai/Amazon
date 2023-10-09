
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com', // Replace with your API's base URL
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can modify the request config here, e.g., add headers
    // config.headers['Authorization'] = 'Bearer YOUR_ACCESS_TOKEN';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // You can modify the response data or perform other tasks here
    return response;
  },
  (error) => {
    // Handle errors here, e.g., show an error message or redirect to an error page
    return Promise.reject(error);
  }
);

export default api;