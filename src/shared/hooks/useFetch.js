import axios from 'axios';
import config from '@/shared/config';

const API_BASE_URL = config.api.basePath;

export const useFetch = (headers = {}) => {
  const baseURL = API_BASE_URL;
  const client = axios.create({
    baseURL,
    timeout: 1000000,
    headers,
  });
  return client;
};
