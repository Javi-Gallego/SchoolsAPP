import { Request } from "express";
import { createCourseRepository, deleteCourseRepository, getCoursesRepository, updateCourseRepository } from "./course.repository";

export const getCoursesService = async (req: Request) => {
    const { name, stageId, year, tutorId } = req.body;

    const courses = await getCoursesRepository();
    
    return courses;
};

export const createCourseService = async (req: Request) => {
  const { name, stageId, year, tutorId } = req.body;
  
  const newCourse = await createCourseRepository(name, stageId, year, tutorId);

  return newCourse;
};

export const updateCourseService = async (req: Request) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const updatedCourse = await updateCourseRepository(id, name);

  return updatedCourse;
};

export const deleteCourseService = async (req: Request) => {
  const id = parseInt(req.params.id);

  const deletedCourse = await deleteCourseRepository(id);

  return deletedCourse;
};
