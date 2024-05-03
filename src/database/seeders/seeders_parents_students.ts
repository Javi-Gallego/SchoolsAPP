import { ParentStudent } from "../../entities/parent_student/parent_student.model";
import { AppDataSource } from "../db";

export const parentStudentSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const parentStudent1 = new ParentStudent();
    parentStudent1.parentId = 3;
    parentStudent1.studentId = 5;
    await parentStudent1.save();

    const parentStudent2 = new ParentStudent();
    parentStudent2.parentId = 4;
    parentStudent2.studentId = 5;
    await parentStudent2.save();

    const parentStudent3 = new ParentStudent();
    parentStudent3.parentId = 6;
    parentStudent3.studentId = 8;
    await parentStudent3.save();

    const parentStudent4 = new ParentStudent();
    parentStudent4.parentId = 6;
    parentStudent4.studentId = 9;
    await parentStudent4.save();

    const parentStudent5 = new ParentStudent();
    parentStudent5.parentId = 7;
    parentStudent5.studentId = 8;
    await parentStudent5.save();

    const parentStudent6 = new ParentStudent();
    parentStudent6.parentId = 7;
    parentStudent6.studentId = 9;
    await parentStudent6.save();

    console.log("--------------------------------------------------");
    console.log("------ parents_students created successfully -----");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};
