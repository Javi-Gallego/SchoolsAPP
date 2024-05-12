import { Request } from "express";
import { createCourseRepository, deleteCourseRepository, getCoursesRepository, updateCourseRepository } from "./course.repository";
import { Course } from "./course.model";
import { ValidationError } from "../../utils/handleError";

export const getCoursesService = async (req: Request) => {
    const { name, stageId, year, tutorId } = req.body;

    const courses = await getCoursesRepository();
    
    return courses;
};

export const createCourseService = async (req: Request) => {
  const { name, stageId, year, tutorId } = req.body;
  
  if(!name || !stageId || !year) {
    throw new ValidationError("Please provide all the required fields");
  }
  const nameExists = await Course.findOne({ where: { name: name } });
  if (nameExists) {
    throw new ValidationError("Course already exists");
  }
  
  const newCourse = await createCourseRepository(name, stageId, year, tutorId);

  return newCourse;
};

export const updateCourseService = async (req: Request) => {
  const id = parseInt(req.params.id);
  const { tutorId } = req.body;

  const updatedCourse = await updateCourseRepository(id, tutorId);

  return updatedCourse;
};

export const deleteCourseService = async (req: Request) => {
  const id = parseInt(req.params.id);

  const deletedCourse = await deleteCourseRepository(id);

  return deletedCourse;
};
