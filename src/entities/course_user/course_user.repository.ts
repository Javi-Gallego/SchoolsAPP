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
