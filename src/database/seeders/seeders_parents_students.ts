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

    const parentStudent7 = new ParentStudent();
    parentStudent7.parentId = 15;
    parentStudent7.studentId = 17;
    await parentStudent7.save();

    const parentStudent8 = new ParentStudent();
    parentStudent8.parentId = 16;
    parentStudent8.studentId = 17;
    await parentStudent8.save();

    const parentStudent9 = new ParentStudent();
    parentStudent9.parentId = 18;
    parentStudent9.studentId = 20;
    await parentStudent9.save();

    const parentStudent10 = new ParentStudent();
    parentStudent10.parentId = 19;
    parentStudent10.studentId = 20;
    await parentStudent10.save();

    console.log("--------------------------------------------------");
    console.log("------ parents_students created successfully -----");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};
