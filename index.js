const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/users",
  createProxyMiddleware({
    target: "http://localhost:5001",
  })
);

app.use(
  "/products",
  createProxyMiddleware({
    target: "http://localhost:5002",
  })
);

app.use(
  "/orders",
  createProxyMiddleware({
    target: "http://localhost:5003",
  })
);

app.listen(5000, () => {
  console.log("API Gateway running on port 5000");
});
