import user from "../models/user.js";
import {
  errorResponse,
  hashData,
  successResponse,
} from "../utils/commonFuntion.js";
import {
  ExceptionMessage,
  HttpStatusCode,
  HttpStatusMessage,
  SuccessMessage,
} from "../utils/responseData.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const emailInLowercase = email.toLowerCase();
    const userAlreadyExist = await user.findOne({ emailInLowercase });
    if (userAlreadyExist) {
      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .json(
          errorResponse(
            {},
            ExceptionMessage.EMAIL_ALREADY_EXIST,
            HttpStatusMessage.BAD_REQUEST,
            HttpStatusCode.BAD_REQUEST
          )
        );
    }
    const hashedPassword = hashData(password);
    const newUser = new user({
      email: emailInLowercase,
      name,
      password: hashedPassword,
      role,
    });
    const addedUser = await newUser.save();
    return res
      .status(HttpStatusCode.CREATED)
      .json(
        successResponse(
          addedUser,
          SuccessMessage.SIGNED_UP,
          HttpStatusMessage.CREATED,
          HttpStatusCode.CREATED
        )
      );
  } catch (error) {
    return res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json(
        errorResponse(
          error,
          ExceptionMessage.INTERNAL_SERVER_ERROR,
          HttpStatusMessage.INTERNAL_SERVER_ERROR,
          HttpStatusCode.INTERNAL_SERVER_ERROR
        )
      );
  }
};
