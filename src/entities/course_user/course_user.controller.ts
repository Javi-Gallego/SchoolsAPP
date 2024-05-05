import { Request, Response } from "express";
import {
  ForbiddenError,
  HttpStatus,
  NotFoundError,
  ValidationError,
  handleError,
} from "../../utils/handleError";
import { getCourseUsersService } from "./course_user.service";

export const getCourseUsers = async (req: Request, res: Response) => {
  try {
    const courseUsers = await getCourseUsersService(req);

    res.status(HttpStatus.OK).json({
      success: true,
      message: "Get course users",
      data: courseUsers,
    });
  } catch (error) {
    if (
      error instanceof ValidationError ||
      error instanceof ForbiddenError ||
      error instanceof NotFoundError
    ) {
      return handleError(
        res,
        error.message,
        HttpStatus.BAD_REQUEST,
        error.name
      );
    }
    handleError(
      res,
      "Cant retrieve course users",
      HttpStatus.INTERNAL_SERVER_ERROR,
      ""
    );
  }
};
