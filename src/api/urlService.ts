import api from './api';

export const createShortUrl = async (originalUrl: string, alias?: string) => {
  const response = await api.post('/url/shorten', { originalUrl, alias });
  console.log(response);
  return response.data;
};

export const getUrlInfo = async (shortUrl: string) => {
  const response = await api.get(`/url/info/${shortUrl}`);
  return response.data;
};

export const deleteShortUrl = async (shortUrl: string) => {
  const response = await api.delete(`/url/delete/${shortUrl}`);
  return response.data;
};
