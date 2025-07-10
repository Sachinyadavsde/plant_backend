import Joi from "joi";
import { REQUEST_OBJECT } from "../utils/constant.js";

export const validate = (schema, source = REQUEST_OBJECT.BODY) => {
  return async (req, res, next) => {
    try {
      const validated = await schema.validateAsync(req[source], {
        abortEarly: false,
      });
      req[source] = validated;
      next();
    } catch (err) {
      res.status(400).json({
        code: 400,
        message: "Validation failed",
        errors: err.details.map((e) => e.message),
      });
    }
  };
};
