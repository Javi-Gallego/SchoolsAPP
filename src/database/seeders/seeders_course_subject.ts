import { CourseSubject } from "../../entities/course_subject/course_subject.model";
import { AppDataSource } from "../db";

export const courseSubjectSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const courseSubject1 = new CourseSubject();
    courseSubject1.courseId = 1;
    courseSubject1.subjectId = 1;
    await courseSubject1.save();

    const courseSubject2 = new CourseSubject();
    courseSubject2.courseId = 1;
    courseSubject2.subjectId = 2;
    await courseSubject2.save();

    const courseSubject3 = new CourseSubject();
    courseSubject3.courseId = 1;
    courseSubject3.subjectId = 3;
    await courseSubject3.save();

    const courseSubject4 = new CourseSubject();
    courseSubject4.courseId = 2;
    courseSubject4.subjectId = 1;
    await courseSubject4.save();

    console.log("--------------------------------------------------");
    console.log("------- Course/subject created successfully ------");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};