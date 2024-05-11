import { Request, Response } from "express";
import {
  ForbiddenError,
  HttpStatus,
  NotFoundError,
  ValidationError,
  handleError,
} from "../../utils/handleError";
import { createCourseUsersService, getCourseUsersService, getStudentCourseService } from "./course_user.service";

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

export const getStudentCourse = async (req: Request, res: Response) => {
  try {
    const studentCourse = await getStudentCourseService(req);

    res.status(HttpStatus.OK).json({
      success: true,
      message: "Get student course",
      data: studentCourse,
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
      "Cant retrieve student course",
      HttpStatus.INTERNAL_SERVER_ERROR,
      ""
    );
  }
};

export const createCourseUsers = async (req: Request, res: Response) => {
  try {
    const courseUser = await createCourseUsersService(req);

    res.status(HttpStatus.CREATED).json({
      success: true,
      message: "Add user to a course",
      data: courseUser,
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
      "Cant add user to a course",
      HttpStatus.INTERNAL_SERVER_ERROR,
      ""
    );
  }
};
