import { Request, Response } from "express";
import {
  ForbiddenError,
  HttpStatus,
  NotFoundError,
  ValidationError,
  handleError,
} from "../../utils/handleError";
import { createSubjectService, getSubjectsService } from "./subject.service";

export const getSubjects = async (req: Request, res: Response) => {
  try {
    const subjects = await getSubjectsService();

    res.status(HttpStatus.OK).json({
      success: true,
      message: "Get all subjects",
      data: subjects,
    });
  } catch (error) {
    handleError(res, "Cant get subjects", HttpStatus.INTERNAL_SERVER_ERROR, "");
  }
};

export const createSubject = async (req: Request, res: Response) => {
  try {
    const newSubject = await createSubjectService(req);

    res.status(HttpStatus.OK).json({
      success: true,
      message: "Subject created succesfully",
      data: newSubject,
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
      "Cant create subject",
      HttpStatus.INTERNAL_SERVER_ERROR,
      ""
    );
  }
};
