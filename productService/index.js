const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDb = require("./connection");
const routes = require("./src/api/product.routes");

dotenv.config();
connectDb();
app.use(express.json());

app.use("/products", routes);

app.listen(5002, () => {
  console.log("product Service running on port 5002");
});
