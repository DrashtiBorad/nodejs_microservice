const express = require("express");
const app = express();
const env = require("dotenv");
const connectDb = require("./connection");
const routes = require("./src/api/order.routes");

env.config();
connectDb();
app.use(express.json());

app.use("/orders", routes);

app.listen(5003, () => {
  console.log("order Service running on port 5003");
});
