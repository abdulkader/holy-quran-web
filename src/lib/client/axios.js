import axios from 'axios';
import qs from 'qs';
import appConfig from '@/config';
import { AuthStorage } from '@/lib/storage/';

const API_BASE_PATH = appConfig.api.adminAPIURL;

export const convertObjToParams = paramsObj =>
  Object.keys(paramsObj).map(key => `${key}=${paramsObj[key]}`);

export const createHttpClient = ({ baseURL = API_BASE_PATH, headers = {} }) => {
  const authData = AuthStorage.get(appConfig.auth.key);
  const accessToken = authData?.access;
  const authHeader = {
    Authorization: `Bearer ${accessToken}`,
  };

  const client = new axios.create({
    baseURL,
    headers: { ...authHeader, ...headers },
    timeout: 20000,
  });

  return client;
};

export const httpClient = {
  get: (url, segments = [], params = {}, headers = {}) => {
    const res = { response: null, error: null };
    const client = createHttpClient({ headers });
    if (!Array.isArray(segments)) {
      params = segments;
      segments = [];
    }
    const URL = segments.length ? `${url}/${segments.join('/')}` : url;
    const config = {
      params,
      paramsSerializer: params => qs.stringify(params),
    };
    return client
      .get(URL, config)
      .then(response => ({ ...res, response: response.data }))
      .catch(error => {
        let err = error;
        if (error.response) {
          err = { ...error.response.data, statusCode: error.response.status };
        } else if (error.request) {
          err = error.request;
        }
        return { ...res, error: err };
      });
  },
  post: (url, data, segments = [], params = {}, headers = {}) => {
    const res = { response: null, error: null };
    const client = createHttpClient({ headers });
    let URL = segments.length ? `${url}/${segments.join('/')}` : url;
    URL += `?${convertObjToParams(params)}`;
    return client
      .post(URL, data)
      .then(response => ({ ...res, response: response.data }))
      .catch(error => {
        let err = error;
        if (error.response) {
          err = { ...error.response.data, statusCode: error.response.status };
        } else if (error.request) {
          err = error.request;
        }
        return { ...res, error: err };
      });
  },
  delete: (url, segments = [], headers = {}) => {
    const res = { response: null, error: null };
    const client = createHttpClient({ headers });
    const URL = segments.length ? `${url}/${segments.join('/')}` : url;
    return client
      .delete(URL)
      .then(response => ({ ...res, response: response.data }))
      .catch(error => {
        let err = error;
        if (error.response) {
          err = { ...error.response.data, statusCode: error.response.status };
        } else if (error.request) {
          err = error.request;
        }
        return { ...res, error: err };
      });
  },
  put: (url, data, segments = [], params = {}, headers = {}) => {
    const res = { response: null, error: null };
    const client = createHttpClient({ headers });
    let URL = segments.length ? `${url}/${segments.join('/')}` : url;
    URL += `?${convertObjToParams(params)}`;
    return client
      .put(URL, data)
      .then(response => ({ ...res, response: response.data }))
      .catch(error => {
        let err = error;
        if (error.response) {
          err = { ...error.response.data, statusCode: error.response.status };
        } else if (error.request) {
          err = error.request;
        }
        return { ...res, error: err };
      });
  },
  patch: (url, data, segments = [], params = {}, headers = {}) => {
    const res = { response: null, error: null };
    const client = createHttpClient({ headers });
    let URL = segments.length ? `${url}/${segments.join('/')}` : url;
    URL += `?${convertObjToParams(params)}`;
    return client
      .patch(URL, data)
      .then(response => ({ ...res, response: response.data }))
      .catch(error => {
        let err = error;
        if (error.response) {
          err = { ...error.response.data, statusCode: error.response.status };
        } else if (error.request) {
          err = error.request;
        }
        return { ...res, error: err };
      });
  },
};
