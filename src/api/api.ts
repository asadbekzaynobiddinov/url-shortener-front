import axios from 'axios';

const api = axios.create({
  baseURL: 'http://100.26.23.20:3030/url',
});

export default api;
