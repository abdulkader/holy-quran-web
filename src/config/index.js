/* eslint-disable no-undef */
const config = {
  api: {
    basePath: process.env.REACT_APP_ADMIN_API_BASE_URL || '$REACT_APP_ADMIN_API_BASE_URL',
  },
  app: {
    key: process.env.REACT_APP_APPKEY || '$REACT_APP_APPKEY',
    name: process.env.REACT_APP_APP_NAME || '$REACT_APP_APP_NAME',
    timeZone: process.env.REACT_APP_TIME_ZONE || '$REACT_APP_TIME_ZONE',
  },
  auth: {
    cacheKey: 'auth',
    expiry: 60 * 60 * 24 * 1,
    key: 'authInfo',
    name: 'auth',
  },
};

export default config;
