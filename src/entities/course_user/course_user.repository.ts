import { CourseUser } from "./course_user.model";

export const getCourseUsersRepository = async (courseId: number) => {
  try {
    const courseUsers = await CourseUser.find({
      where: {
        courseId: courseId,
      },
      relations: ["Student"],
    });

    return courseUsers;
  } catch (error) {
    console.log("error", error);
  }
};

export const getStudentCourseRepository = async (studentId: number) => {
  try {
    const courseUsers = await CourseUser.find({
      where: {
        userId: studentId,
      },
      relations: ["courseU"],
    });

    return courseUsers;
  } catch (error) {
    console.log("error", error);
  }
};

export const createCourseUsersRepository = async (courseId: number, userId: number) => {

    const courseUser = await CourseUser.create({
      courseId,
      userId,
    }).save();

    return courseUser;
};