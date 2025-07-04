const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./connection");
const router = require("./src/api/user.routes.js");

const app = express();
dotenv.config();

app.use(express.json());
connectDb();

app.use("/", router);

app.listen(5001, () => {
  console.log("User Service running on port 5001");
});
