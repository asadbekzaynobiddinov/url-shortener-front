import axios from 'axios';

const api = axios.create({
  baseURL: 'https://100.26.23.20:3030',
});

export default api;
