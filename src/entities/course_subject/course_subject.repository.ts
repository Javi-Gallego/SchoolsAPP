import { CourseSubject } from "./course_subject.model";

export const getCourseSubjectsRepository = async (courseId: number) => {
  try {
    const courseSubjects = await CourseSubject.find({
      where: { courseId: courseId },
      relations: ["subject"],
    });

    const subjectNames = courseSubjects.map(
      (courseSubject) => courseSubject.subject.name
    );

    return subjectNames;
  } catch (error) {
    console.log("error", error);
  }
};

export const existsCourseSubjectsRepository = async (
  courseId: number,
  subjectId: number
) => {
  try {
    const courseSubject = await CourseSubject.find({
      where: { courseId: courseId, subjectId: subjectId },
    });

    return courseSubject;
  } catch (error) {
    console.log("error", error);
  }
};

export const createCourseSubjectRepository = async (
  courseId: number,
  subjectId: number
) => {
  try {
    const courseSubject = new CourseSubject();
    courseSubject.courseId = courseId;
    courseSubject.subjectId = subjectId;

    await courseSubject.save();

    return courseSubject;
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteCourseSubjectsRepository = async (
  courseId: number,
  subjectId: number
) => {
  try {
    const courseSubject = await CourseSubject.delete({
      courseId: courseId,
      subjectId: subjectId,
    });

    return courseSubject;
  } catch (error) {
    console.log("error", error);
  }
};
