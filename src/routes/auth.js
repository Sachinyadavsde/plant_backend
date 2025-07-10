import express from "express";
import { validate } from "../validations/validation.js";
import { signupSchema } from "../validations/auth.js";
import { signup } from "../controller/auth.js";

const authRoute = express.Router();

authRoute.post("/signup", validate(signupSchema), signup);

export default authRoute;
