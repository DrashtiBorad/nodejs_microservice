const express = require("express");
const app = express();
const env = require("dotenv");
const connectDb = require("./connection");

env.config();
connectDb();

app.get("/orders", (req, res) => {
  res.json([{ id: 201, itemName: "Phone", userId: 1 }]);
});

app.listen(5003, () => {
  console.log("order Service running on port 5003");
});
