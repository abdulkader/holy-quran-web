const config = {
  api: {
    basePath: import.meta.env.VITE_APP_API_BASE_PATH
  },
  app: {
    isProd: import.meta.env.PROD,
    isDev: import.meta.env.DEV,
  },
};

export default config;
