import { Request, Response } from "express";
import { ForbiddenError, HttpStatus, NotFoundError, ValidationError, handleError } from "../../utils/handleError";
import { createCourseService, deleteCourseService, getCoursesService, updateCourseService } from "./course.service";

export const getCourses = async (req: Request, res: Response) => {
    try {
      const courses = await getCoursesService(req);
  
      res.status(HttpStatus.OK).json({
        success: true,
        message: "Courses retrieved succesfully",
        data: courses,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Can't retrieve courses",
        error: error,
      });
    }
  };
  
  export const createCourse = async (req: Request, res: Response) => {
    try {
      const course = await createCourseService(req);
  
      res.status(HttpStatus.OK).json({
        success: true,
        message: "Course created succesfully",
        data: course,
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
  
  export const updateCourse = async (req: Request, res: Response) => {
    try {
      const course = await updateCourseService(req);
  
      res.status(HttpStatus.OK).json({
        success: true,
        message: "Course updated succesfully",
        data: course,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Can't update course",
        error: error,
      });
    }
  };
  
  export const deleteCourse = async (req: Request, res: Response) => {
    try {
      const course = await deleteCourseService(req);
  
      res.status(HttpStatus.OK).json({
        success: true,
        message: "Course deleted succesfully",
        data: course,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Can't delete course",
        error: error,
      });
    }
  };
  