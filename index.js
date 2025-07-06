const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API Gateway is running");
});

app.use(
  "/users",
  createProxyMiddleware({
    target: process.env.USERS_SERVICE_URL,
    changeOrigin: true,
  })
);

app.use(
  "/products",
  createProxyMiddleware({
    target: process.env.PRODUCTS_SERVICE_URL,
    changeOrigin: true,
  })
);

app.use(
  "/orders",
  createProxyMiddleware({
    target: process.env.ORDERS_SERVICE_URL,
  })
);

app.listen(5000, () => {
  console.log("API Gateway running on port 5000");
});
