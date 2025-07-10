import { createHmac } from "crypto";
import { CONSTANT } from "./constant.js";
export const successResponse = (data, message, statusMessage, code) => ({
  success: true,
  message,
  status: statusMessage,
  code,
  data,
});

export const errorResponse = (error = {}, message, statusMessage, code) => ({
  success: false,
  message: message || "Something went wrong",
  status: statusMessage || "ERROR",
  code: code || 500,
  error,
});

export const hashData = (data, salt = CONSTANT.PASSWORD_HASH_SALT) => {
  return createHmac("sha256", salt).update(data).digest("hex");
};
