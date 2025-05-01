const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./connection");
const routes = require("./src/api/user.routes");

const app = express();
dotenv.config();

app.use(express.json());
connectDb();

app.use("/users", routes);

app.listen(5001, () => {
  console.log("User Service running on port 5001");
});
