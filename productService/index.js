const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDb = require("./connection");
dotenv.config();
connectDb();

app.get("/products", (req, res) => {
  res.json([{ id: 101, name: "Phone" }]);
});

app.listen(5002, () => {
  console.log("product Service running on port 5002");
});
