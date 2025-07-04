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
