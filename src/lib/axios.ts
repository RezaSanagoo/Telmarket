import axios from 'axios';

const api = axios.create({
  baseURL: 'https://test22.liara.run/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default api;
