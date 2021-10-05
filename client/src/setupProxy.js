const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use('/api/customers', proxy({ target: 'http://localhost:5000' }));
};


/*const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
    app.use("/api/customers", createProxyMiddleware({ target: "http://localhost:5000", changeOrigin: true}));
}; */