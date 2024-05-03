import { Course } from "./course.model";

export const getCoursesRepository = async () => {

  try {
    const courses = await Course.find({
        order: {
            year: "ASC",
        }
    });

    return courses;
  } catch (error) {
    console.log(error);
  }
};

export const createCourseRepository = async (name: string, stageId: number, year: number, tutorId: number) => {
  try {
    const newCourse = Course.create({
        name: name,
        stageId: stageId,
        year: year.toString(),
        tutorId: tutorId,
    })

    await newCourse.save();

    return newCourse;
  } catch (error) {
    console.log(error);
  }
};

export const updateCourseRepository = async (id: number, name: string) => {
  try {
    const updatedCourse = await Course.update(id, {
      name: name,
    });

    return updatedCourse;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCourseRepository = async (id: number) => {
  try {
    const course = await Course.delete(id);

    return course;
  } catch (error) {
    console.log(error);
  }
};
