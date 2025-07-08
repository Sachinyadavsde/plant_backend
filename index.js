const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;

app.use("/", authRoute);

app.listen(PORT, (error) => {
  console.log("App is running on PORT :", PORT);
  if (error) {
    console.log("Error :", error);
  }
});
