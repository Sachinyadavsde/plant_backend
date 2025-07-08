const express = require("express");
const { Signup } = require("../controller/auth");

const route = express.Router();

route.get("/signup", Signup);

export default route;