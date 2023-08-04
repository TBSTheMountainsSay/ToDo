import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://todobackend-rc7f.onrender.com',
});
