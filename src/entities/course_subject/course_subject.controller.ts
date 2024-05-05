import { Request, Response } from "express";
import { ForbiddenError, HttpStatus, NotFoundError, ValidationError, handleError } from "../../utils/handleError";
import { createCourseSubjectService, deleteCourseSubjectService, getCourseSubjectsService } from "./course_subject.service";

export const getCourseSubjects = async (req: Request, res: Response) => {
    try {
        const coursesubjects = await getCourseSubjectsService(req);
    
        res.status(HttpStatus.OK).json({
          success: true,
          message: "Get all subjects",
          data: coursesubjects,
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
        handleError(res, "Cant log user", HttpStatus.INTERNAL_SERVER_ERROR, "");
      }
};

export const createCourseSubject = async (req: Request, res: Response) => {
    try {
        const coursesubject = await createCourseSubjectService(req);

        res.status(HttpStatus.OK).json({
          success: true,
          message: "Create course subject",
          data: coursesubject,
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
        handleError(res, "Cant log user", HttpStatus.INTERNAL_SERVER_ERROR, "");
      }
};

export const deleteCourseSubject = async (req: Request, res: Response) => {
    try {
        const coursesubject = await deleteCourseSubjectService(req);

        res.status(HttpStatus.OK).json({
          success: true,
          message: "Delete course subject",
          data: coursesubject,
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
        handleError(res, "Cant log user", HttpStatus.INTERNAL_SERVER_ERROR, "");
      }
};