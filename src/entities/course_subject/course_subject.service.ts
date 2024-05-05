import { Request } from "express";
import {
  createCourseSubjectRepository,
  deleteCourseSubjectsRepository,
  existsCourseSubjectsRepository,
  getCourseSubjectsRepository,
} from "./course_subject.repository";
import { ValidationError } from "../../utils/handleError";

export const getCourseSubjectsService = async (req: Request) => {
  const courseId = parseInt(req.params.courseId);

  const courseSubjects = getCourseSubjectsRepository(courseId);

  return courseSubjects;
};

export const createCourseSubjectService = async (req: Request) => {
  const courseId = parseInt(req.body.courseId);
  const subjectId = parseInt(req.body.subjectId);

  const courseSubjectExists = await existsCourseSubjectsRepository(
    courseId,
    subjectId
  );

  if (courseSubjectExists && courseSubjectExists.length > 0) {
    throw new ValidationError("Course subject already exists");
  }

  const courseSubject = createCourseSubjectRepository(courseId, subjectId);

  return courseSubject;
};

export const deleteCourseSubjectService = async (req: Request) => {
  const courseId = req.body.courseId;
  const subjectId = req.body.subjectId;

  const existsCourseSubject = await existsCourseSubjectsRepository(
    courseId,
    subjectId
  );

  if (existsCourseSubject && existsCourseSubject.length === 0) {
    throw new ValidationError("Course subject does not exist");
  }

  const courseSubject = deleteCourseSubjectsRepository(courseId, subjectId);

  return courseSubject;
};
