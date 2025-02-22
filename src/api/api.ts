import axios from 'axios';

const api = axios.create({
  baseURL: 'https://url.takedaservice.uz',
});

export default api;
