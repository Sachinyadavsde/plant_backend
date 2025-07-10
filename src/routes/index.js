import express from "express";
import authRoute from "./auth.js";

const mainRoutes = express.Router();

mainRoutes.use("/auth", authRoute);

export default mainRoutes;
