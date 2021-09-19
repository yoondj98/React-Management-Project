const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(proxy.createProxyMiddleware("/api/customers", { target: "http://localhost:5000" }));
};