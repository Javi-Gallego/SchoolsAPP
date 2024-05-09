import { Request, Response } from "express";
import { ForbiddenError, HttpStatus, NotFoundError, ValidationError, handleError } from "../../utils/handleError";
import { createParentStudentService } from "./parent_student.service";

export const createParentStudent = async (req: Request, res: Response) => {
    try {
        const parentStudent = await createParentStudentService(req);
    
        res.status(HttpStatus.CREATED).json({
          success: true,
          message: "Relation parent/student created succesfully",
          data: parentStudent,
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
          "Cant create relation parent/student",
          HttpStatus.INTERNAL_SERVER_ERROR,
          ""
        );
      }
};