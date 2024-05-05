import { Request } from "express";
import { getCourseUsersRepository } from "./course_user.repository";

export const getCourseUsersService = async (req: Request) => {
    console.log("getCourseUsersService");
  const courseId = parseInt(req.params.courseId);

  const courseUsers = getCourseUsersRepository(courseId);

  return courseUsers;
};
