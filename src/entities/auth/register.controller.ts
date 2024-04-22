import { Request, Response } from "express";
import { getRegisterService } from "./register.service";
import { ValidationError, handleError } from "../../utils/handleError";

export const register = async (req: Request, res: Response) => {
  try {
    const newUser = await getRegisterService(req);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return handleError(res, error.message, error.status, error.name);
    }
    handleError(res, "Cant register user", 500, "");
  }
};
