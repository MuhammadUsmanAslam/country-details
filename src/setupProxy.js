const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/all', {
      target: 'https://restcountries.com/v3.1/',
      changeOrigin: true,
    }),
  );
};
