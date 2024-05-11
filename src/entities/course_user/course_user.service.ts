import { Request } from "express";
import { createCourseUsersRepository, getCourseUsersRepository, getStudentCourseRepository } from "./course_user.repository";
import { ValidationError } from "../../utils/handleError";

export const getCourseUsersService = async (req: Request) => {
  const courseId = parseInt(req.params.courseId);

  const courseUsers = getCourseUsersRepository(courseId);

  return courseUsers;
};

export const getStudentCourseService = async (req: Request) => {
  console.log("getCourseUsersService");
const studentId = parseInt(req.params.studentId);

const courseUsers = getStudentCourseRepository(studentId);

return courseUsers;
};

export const createCourseUsersService = async (req: Request) => {
  const courseId = parseInt(req.body.courseId);
  const userId = parseInt(req.body.userId);

  if (!courseId || !userId) {
    throw new ValidationError("CourseId and userId is required");
  }

  const courseUser = createCourseUsersRepository(courseId, userId);

  return courseUser;
};
