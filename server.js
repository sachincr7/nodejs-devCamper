const express = require("express");
const dotenv = require("dotenv");

// load env variables
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`server runnning in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
