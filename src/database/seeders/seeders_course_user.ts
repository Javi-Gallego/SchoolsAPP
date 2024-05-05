import { CourseUser } from "../../entities/course_user/course_user.model";
import { AppDataSource } from "../db";

export const courseUserSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const courseUser1 = new CourseUser();
    courseUser1.courseId = 1;
    courseUser1.userId = 5;
    await courseUser1.save();

    const courseUser2 = new CourseUser();
    courseUser2.courseId = 1;
    courseUser2.userId = 8;
    await courseUser2.save();

    const courseUser3 = new CourseUser();
    courseUser3.courseId = 2;
    courseUser3.userId = 9;
    await courseUser3.save();

    console.log("--------------------------------------------------");
    console.log("-------- Course/user created successfully --------");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};